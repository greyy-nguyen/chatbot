import contextlib
import os
from typing import Annotated
from typing import List
from typing import Tuple
from typing import Union

from fastapi import File
from fastapi import UploadFile
from sqlalchemy.orm import Session

from app.databases.minio import MinioConnector
from app.databases.qdrant import QdrantConnector
from app.databases.redis import RedisConnector
from app.models.api import APIError
from app.models.document import DocumentMetadata
from app.repositories.document import DocumentRepository
from app.services.base import BaseService
from app.settings import Constants
from app.utils.accents_handler import remove_vietnamese_accents
from app.utils.error_handler import ErrorCodesMappingNumber
from app.utils.indexing import index_document_to_vector_db
from app.utils.logger import LoggerFactory

logger = LoggerFactory().get_logger(__name__)


class DocumentService(BaseService):
    def __init__(
        self,
        db_session: Session,
        minio_connector: MinioConnector | None = None,
        qdrant_connector: QdrantConnector | None = None,
        redis_connector: RedisConnector | None = None,
    ) -> None:
        """
        Document service class for handling document-related operations.

        Args:
            db_session (Session): Database session
            minio_connector (MinioConnector, optional): Object storage connection. Defaults to None.
            qdrant_connector (QdrantConnector, optional): Vector database connection. Defaults to None.
            redis_connector (RedisConnector, optional): Cache store connection. Defaults to None.
        """
        super().__init__(db_session=db_session)

        if minio_connector and not isinstance(minio_connector, MinioConnector):
            raise ValueError("Invalid Minio connector")
        if qdrant_connector and not isinstance(qdrant_connector, QdrantConnector):
            raise ValueError("Invalid Qdrant connector")
        if redis_connector and not isinstance(redis_connector, RedisConnector):
            raise ValueError("Invalid Redis connector")

        self._minio_connector = minio_connector
        self._qdrant_connector = qdrant_connector
        self._redis_connector = redis_connector

    def upload_documents(
        self,
        documents: Annotated[List[UploadFile], File(description="One or multiple documents")],
    ) -> Tuple[List[str], Union[APIError, None]]:
        """
        Upload documents to object storage. Then, trigger the indexing pipeline into the vector database.

        Args:
            documents (List[UploadFile]): List of documents to be uploaded.

        Returns:
            Tuple[List[str], Union[APIError, None]]: List of document file paths and error if any.
        """
        # Check if files are empty
        for document in documents:
            if not document.filename:
                return APIError(kind=ErrorCodesMappingNumber.INVALID_REQUEST)

        err = None
        deduped_document_urls = []
        try:
            # Upload files to Minio
            for document in documents:
                # Auto close file after reading
                with contextlib.closing(document.file):
                    # Generate file name
                    file_name = remove_vietnamese_accents(input_str=document.filename).replace(" ", "_").lower()
                    file_path = os.path.join(Constants.MINIO_DOCUMENT_BUCKET, file_name)

                    logger.info(f"Uploading document: {document.filename}")

                    with self._transaction():
                        # Write document metadata to database
                        document_metadata = DocumentMetadata(
                            name=document.filename,
                            document_url=file_path,
                        )
                        err = DocumentRepository(db_session=self._db_session).create_document_metadata(
                            document_metadata=document_metadata
                        )

                    # Upload file to object storage
                    self._minio_connector.upload_files(
                        object_name=file_path,
                        data=document.file,
                        bucket_name=Constants.MINIO_DOCUMENT_BUCKET,
                    )

                    # Append file path to list
                    if file_path not in deduped_document_urls:
                        deduped_document_urls.append(file_path)

                    # Index document to vector database
                    index_document_to_vector_db(
                        document=document,
                        qdrant_connector=self._qdrant_connector,
                        redis_connector=self._redis_connector,
                    )
        except Exception as e:
            # Rollback transaction
            self._db_session.rollback()
            logger.error(f"Error uploading documents: {e}", exc_info=True)
            err = APIError(kind=ErrorCodesMappingNumber.INTERNAL_SERVER_ERROR.value)

        return deduped_document_urls, err
