"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8246],{32034:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>A,contentTitle:()=>u,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>y});const s=JSON.parse('{"id":"chatbot-api/list-available-model-versions-admin-persona-utils-list-available-models-get","title":"List Available Model Versions","description":"List Available Model Versions","source":"@site/docs/chatbot-api/list-available-model-versions-admin-persona-utils-list-available-models-get.api.mdx","sourceDirName":"chatbot-api","slug":"/chatbot-api/list-available-model-versions-admin-persona-utils-list-available-models-get","permalink":"/docs/chatbot-api/list-available-model-versions-admin-persona-utils-list-available-models-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"list-available-model-versions-admin-persona-utils-list-available-models-get","title":"List Available Model Versions","description":"List Available Model Versions","sidebar_label":"List Available Model Versions","hide_title":true,"hide_table_of_contents":true,"api":"eJyFkk1vnDAQhv8KmrMTaHvzbVtVUZRWirpNL6sVmpjZ4K6xXdusihD/vRoDq24+Wg582TO88zyM4DwFTNrZ2wYkGB1TjSfUBh8N1Z1ryNQnClE7G2tsOm1rTyE6i3WftIn1axWxfqIEAgJF72ykCHKE91XFl4aiCtrzF0HCtleKYjz0pvi2bAYBytlENvF29N5olQOWPyPXjBBVSx3ynU7U5eZp8AQSYgraPsEk1hcYAg4gIOlk+Hn9SPFFx1Rs1tjFV45d/FgGLTY8aHE/D1o88KCvVsTihhJMfAiIpPqg0wByN8Lm/vaOhk/OHTWB3O2nvXg2+j8TgICOUuvYyczSY2pBQpkdlIuDMjso2cHV2cHV7AA4UWB3OVAfDEhoU/KyLI1TaFoXk/xQVRVwuDX9luHOxi5nOENGr++IoWoeQ83LAix2vHrAmNDrPlKI2KcWGI22B5c7LBq22HlDxUdUR7INCFh+MZBQXVfX79igdzF1mIUvrf9H7ILvOW6i36n0BrXlrhnDuNDcQabJdGeeICATBQGvM90LYGxcOo6PGOkhmGni1796Cqx+L+CEQXNR9i6gJWwoZAlHGkDCRiny7PSEpp+JPvvJWcjZ/83n7yAgs7yQcMwSlhvuvi7Z4a/eL3yIJQWfJ/FG1TjOlqfpvH9eerNimXLdzbT30zT9AakZhMU=","sidebar_class_name":"get api-method","info_path":"docs/chatbot-api/sample-backend","custom_edit_url":null},"sidebar":"chatbotApiSidebar","previous":{"title":"Patch Persona Display Priority","permalink":"/docs/chatbot-api/patch-persona-display-priority-admin-persona-display-priority-put"},"next":{"title":"Get Default Model","permalink":"/docs/chatbot-api/get-default-model-admin-persona-utils-default-model-get"}}');var l=a(74848),t=a(28453),o=a(57742),n=a.n(o),r=a(78178),d=a.n(r),p=a(19624),c=a.n(p),v=a(96226),m=a.n(v),b=(a(77675),a(19365),a(51107));const h={id:"list-available-model-versions-admin-persona-utils-list-available-models-get",title:"List Available Model Versions",description:"List Available Model Versions",sidebar_label:"List Available Model Versions",hide_title:!0,hide_table_of_contents:!0,api:"eJyFkk1vnDAQhv8KmrMTaHvzbVtVUZRWirpNL6sVmpjZ4K6xXdusihD/vRoDq24+Wg582TO88zyM4DwFTNrZ2wYkGB1TjSfUBh8N1Z1ryNQnClE7G2tsOm1rTyE6i3WftIn1axWxfqIEAgJF72ykCHKE91XFl4aiCtrzF0HCtleKYjz0pvi2bAYBytlENvF29N5olQOWPyPXjBBVSx3ynU7U5eZp8AQSYgraPsEk1hcYAg4gIOlk+Hn9SPFFx1Rs1tjFV45d/FgGLTY8aHE/D1o88KCvVsTihhJMfAiIpPqg0wByN8Lm/vaOhk/OHTWB3O2nvXg2+j8TgICOUuvYyczSY2pBQpkdlIuDMjso2cHV2cHV7AA4UWB3OVAfDEhoU/KyLI1TaFoXk/xQVRVwuDX9luHOxi5nOENGr++IoWoeQ83LAix2vHrAmNDrPlKI2KcWGI22B5c7LBq22HlDxUdUR7INCFh+MZBQXVfX79igdzF1mIUvrf9H7ILvOW6i36n0BrXlrhnDuNDcQabJdGeeICATBQGvM90LYGxcOo6PGOkhmGni1796Cqx+L+CEQXNR9i6gJWwoZAlHGkDCRiny7PSEpp+JPvvJWcjZ/83n7yAgs7yQcMwSlhvuvi7Z4a/eL3yIJQWfJ/FG1TjOlqfpvH9eerNimXLdzbT30zT9AakZhMU=",sidebar_class_name:"get api-method",info_path:"docs/chatbot-api/sample-backend",custom_edit_url:null},u=void 0,A={},y=[];function g(e){const i={p:"p",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"List Available Model Versions"}),"\n",(0,l.jsx)(n(),{method:"get",path:"/admin/persona/utils/list-available-models",context:"endpoint"}),"\n",(0,l.jsx)(i.p,{children:"List Available Model Versions"}),"\n",(0,l.jsx)(d(),{parameters:void 0}),"\n",(0,l.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,l.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"Successful Response",content:{"application/json":{schema:{items:{type:"string"},type:"array",title:"Response List Available Model Versions Admin Persona Utils List Available Models Get"}}}}}})]})}function f(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}}}]);