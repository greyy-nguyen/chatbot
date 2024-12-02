import contextlib
import os
from collections.abc import Iterator
from typing import BinaryIO

from minio import Minio
from minio.error import S3Error

from app.databases.base import BaseConnector
from app.settings import Secrets
from app.utils.logger import LoggerFactory

logger = LoggerFactory().get_logger(__name__)


class MinioConnector(BaseConnector[Minio]):
    """
    Minio connector class

    Pattern: Singleton
    Purpose: Create a single instance of the object storage connection
    """

    _o = Secrets
    _required_keys = ["MINIO_ENDPOINT", "MINIO_ACCESS_KEY", "MINIO_SECRET_KEY"]

    @classmethod
    def _create_client(cls) -> Minio:
        """
        Create the object storage connection if there is no any existing connection

        Returns:
            Minio: Object storage connection instance
        """
        try:
            return Minio(
                endpoint=Secrets.MINIO_ENDPOINT,
                access_key=Secrets.MINIO_ACCESS_KEY,
                secret_key=Secrets.MINIO_SECRET_KEY,
                secure=False,
            )
        except S3Error as e:
            logger.error(f"S3 error initializing object storage: {e}")
            raise
        except Exception as e:
            logger.error(f"Unexpected error initializing object storage: {e}")
            raise

    def _create_bucket(self, bucket_name: str) -> bool:
        """
        Create a bucket in object storage

        Args:
            bucket_name (str): Bucket name

        Returns:
            bool: True if the bucket is created successfully, otherwise False
        """
        try:
            # Check if the bucket exists
            found = self.client.bucket_exists(bucket_name=bucket_name)
            if not found:
                # Create the bucket if it does not exist
                logger.info(f"Bucket {bucket_name} not found. Creating...")
                self.client.make_bucket(bucket_name)
                return True

            logger.info(f"Bucket {bucket_name} already exists")
            return False
        except S3Error as e:
            logger.error(f"S3 error creating bucket {bucket_name}: {e}")
            return False
        except Exception as e:
            logger.error(f"Unexpected error creating bucket {bucket_name}: {e}")
            return False

    def upload_files(self, object_name: str, data: BinaryIO, bucket_name: str, length: int = None) -> None:
        """
        Upload files to object storage

        Args:
            object_name (str): Object name
            data (BinaryIO): File data
            bucket_name (str): Bucket name
            length (int, optional): File length. Defaults to None.

        Raises:
            S3Error: If there's an error with the S3 operation
            ValueError: If the required attributes are missing
        """
        if not object_name or not bucket_name:
            raise ValueError("Missing required attributes: object_name, bucket_name")

        try:
            # Create the bucket if it does not exist
            self._create_bucket(bucket_name=bucket_name)

            # Get the current position of the file pointer
            current_pos = data.tell() if data.seekable() else 0

            # If length is not provided, try to calculate it
            if length is None and data.seekable():
                data.seek(0, os.SEEK_END)
                length = data.tell() - current_pos
                data.seek(current_pos)

            # Upload the file to the bucket
            self.client.put_object(bucket_name=bucket_name, object_name=object_name, data=data, length=length)
        except S3Error as e:
            logger.error(f"S3 error uploading file {object_name}: {e}")
            raise
        except Exception as e:
            logger.error(f"Unexpected error uploading file {object_name}: {e}")
            raise
        finally:
            # Ensure the file pointer is reset to the original position
            if data.seekable():
                data.seek(current_pos)


@contextlib.contextmanager
def get_object_storage_connector() -> Iterator[MinioConnector]:
    """
    Get the instance of MinioConnector

    Yields:
        MinioConnector: Object storage connection instance
    """
    minio_connector = MinioConnector()
    yield minio_connector
