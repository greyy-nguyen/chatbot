"use strict";(self.webpackChunkdocss=self.webpackChunkdocss||[]).push([[5426],{78399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>v,default:()=>b,frontMatter:()=>D,metadata:()=>a,toc:()=>j});const a=JSON.parse('{"id":"chatbot-api/delete-document-set-manage-admin-document-set-document-set-id-delete","title":"Delete Document Set","description":"Delete Document Set","source":"@site/docs/chatbot-api/delete-document-set-manage-admin-document-set-document-set-id-delete.api.mdx","sourceDirName":"chatbot-api","slug":"/chatbot-api/delete-document-set-manage-admin-document-set-document-set-id-delete","permalink":"/docs/chatbot-api/delete-document-set-manage-admin-document-set-document-set-id-delete","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"delete-document-set-manage-admin-document-set-document-set-id-delete","title":"Delete Document Set","description":"Delete Document Set","sidebar_label":"Delete Document Set","hide_title":true,"hide_table_of_contents":true,"api":"eJyVVE1v2zAM/SsGTxug1Vm3k2/dEmBFO6xosl2CIGBtJlFjW6okFwsM/feBkp3YTXrYJZHFDz0+PrIFpcmgk6q+LSCDgkpytC5U3lRUu7Ult66wxi2tsahkPbaMv2SxXsd4EKDRYEWOjIVs2YKhl0YaKiBzpiEBNt9RhZC14A6aIANZO9qSAQFOupJvpl3uZE4uuS3AC6ixYsubV0GArCEDjW4HfiXAkNWqtmQ5//Vkwn8F2dxIzYVCBvMmz8naTVMmj50zCMhV7ah27I5alzIPvKTPlmPaE2bvvRfw9fr6PPEfLGURwpKZMcr8R1bQhnvhZMRdkENZ8kk6quy5Q6nykRXrw69NILuj1Doj6y14cUayX3nR36ExeBjQfq8iQOa7sttBi7p8J9efZC1uCY7J3ncNZCQLtvrT2+rpmXIHYiCPZagrPt35rU5pTvRGdt8vYxrpu/RY7/JjsXg4Sxh7aylvjHSHQOfNw+0dHb4rtZcE2XLFEht3fRpUnwwVyyWQ26nTUIWhcDvIII0TlYaJSns1f7Lk0vaNtj0wGPPaz1FjSshg55zO0rRUOZY7ZV32ZTKZBOn3wOesqqiTMfxji1DLOzr0s5NH83HENmgdatlYMhYbnivPnhsVMnQEzrHSJSXfMN9TzWPIMCMjk6vJ1Wduj1bWVRiU3qW+TNaI0CNIR39dqkuUQY6h+LZjcQmRRRAQeOQcAyZBQPZ2T6wEMFsc27ZPaOm3Kb3n65eGDDd7JeAVjcQnrm/ZQiEtnwvINlhaOoN5nG348NhJ+GMC4jL8nviaWX/FsuEvELCnw4WlFmZ0R1iQCVCi102ek3aD+LOVwio4Km86u58tZkwR93DU/H1ofncYbI0xvDMd9HD5d7BZxlFtG9Xl/dE/mt6N6ArtvZmwlff+H+yARhU=","sidebar_class_name":"delete api-method","info_path":"docs/chatbot-api/sample-backend","custom_edit_url":null},"sidebar":"chatbotApiSidebar","previous":{"title":"Patch Document Set","permalink":"/docs/chatbot-api/patch-document-set-manage-admin-document-set-patch"},"next":{"title":"List Document Sets","permalink":"/docs/chatbot-api/list-document-sets-manage-document-set-get"}}');var i=n(74848),s=n(28453),d=n(57742),o=n.n(d),c=n(78178),l=n.n(c),m=n(19624),r=n.n(m),u=n(96226),p=n.n(u),h=(n(77675),n(19365),n(51107));const D={id:"delete-document-set-manage-admin-document-set-document-set-id-delete",title:"Delete Document Set",description:"Delete Document Set",sidebar_label:"Delete Document Set",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVE1v2zAM/SsGTxug1Vm3k2/dEmBFO6xosl2CIGBtJlFjW6okFwsM/feBkp3YTXrYJZHFDz0+PrIFpcmgk6q+LSCDgkpytC5U3lRUu7Ult66wxi2tsahkPbaMv2SxXsd4EKDRYEWOjIVs2YKhl0YaKiBzpiEBNt9RhZC14A6aIANZO9qSAQFOupJvpl3uZE4uuS3AC6ixYsubV0GArCEDjW4HfiXAkNWqtmQ5//Vkwn8F2dxIzYVCBvMmz8naTVMmj50zCMhV7ah27I5alzIPvKTPlmPaE2bvvRfw9fr6PPEfLGURwpKZMcr8R1bQhnvhZMRdkENZ8kk6quy5Q6nykRXrw69NILuj1Doj6y14cUayX3nR36ExeBjQfq8iQOa7sttBi7p8J9efZC1uCY7J3ncNZCQLtvrT2+rpmXIHYiCPZagrPt35rU5pTvRGdt8vYxrpu/RY7/JjsXg4Sxh7aylvjHSHQOfNw+0dHb4rtZcE2XLFEht3fRpUnwwVyyWQ26nTUIWhcDvIII0TlYaJSns1f7Lk0vaNtj0wGPPaz1FjSshg55zO0rRUOZY7ZV32ZTKZBOn3wOesqqiTMfxji1DLOzr0s5NH83HENmgdatlYMhYbnivPnhsVMnQEzrHSJSXfMN9TzWPIMCMjk6vJ1Wduj1bWVRiU3qW+TNaI0CNIR39dqkuUQY6h+LZjcQmRRRAQeOQcAyZBQPZ2T6wEMFsc27ZPaOm3Kb3n65eGDDd7JeAVjcQnrm/ZQiEtnwvINlhaOoN5nG348NhJ+GMC4jL8nviaWX/FsuEvELCnw4WlFmZ0R1iQCVCi102ek3aD+LOVwio4Km86u58tZkwR93DU/H1ofncYbI0xvDMd9HD5d7BZxlFtG9Xl/dE/mt6N6ArtvZmwlff+H+yARhU=",sidebar_class_name:"delete api-method",info_path:"docs/chatbot-api/sample-backend",custom_edit_url:null},v=void 0,f={},j=[];function Z(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Delete Document Set"}),"\n",(0,i.jsx)(o(),{method:"delete",path:"/manage/admin/document-set/{document_set_id}",context:"endpoint"}),"\n",(0,i.jsx)(t.p,{children:"Delete Document Set"}),"\n",(0,i.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(l(),{parameters:[{required:!0,schema:{type:"integer",title:"Document Set Id"},name:"document_set_id",in:"path"}]}),"\n",(0,i.jsx)(r(),{title:"Body",body:void 0}),"\n",(0,i.jsx)(p(),{id:void 0,label:void 0,responses:{200:{description:"Successful Response",content:{"application/json":{schema:{}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}}})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(Z,{...e})}):Z(e)}}}]);