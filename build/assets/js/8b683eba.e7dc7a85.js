"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1e3],{64397:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>C,contentTitle:()=>g,default:()=>S,frontMatter:()=>h,metadata:()=>s,toc:()=>q});const s=JSON.parse('{"id":"chatbot-api/document-boost-update-manage-admin-doc-boosts-post","title":"Document Boost Update","description":"Document Boost Update","source":"@site/docs/chatbot-api/document-boost-update-manage-admin-doc-boosts-post.api.mdx","sourceDirName":"chatbot-api","slug":"/chatbot-api/document-boost-update-manage-admin-doc-boosts-post","permalink":"/docs/chatbot-api/document-boost-update-manage-admin-doc-boosts-post","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"document-boost-update-manage-admin-doc-boosts-post","title":"Document Boost Update","description":"Document Boost Update","sidebar_label":"Document Boost Update","hide_title":true,"hide_table_of_contents":true,"api":"eJyVVMtu2zAQ/BVjz0qspj3plhfQIC0SxE4vhmCsqbXFWBIZkkoiCPr3YknZlu06bS8CRe5zZnZbUJoMOqmquwwSyJSoS6rcfKGUdfNaZ+hoXmKFK5pjVspqnikRXu1cK+sgAkOvNVl3pbIGkhaEqhxVjo+odSGFDz9+sariOytyKpFP2nByJ8ny3za1zPjXNZogAeuMrFYQgZOu4Iub3mx0l0EXga9kYC8rRysyA4crb9F10cZELV5IbOqWhjJIZnvZN1HTgyDPHo2n0C10HHIXwpma/IXVqrKhpYs49p2RFUZqRgESmNRCkLXLuhg99cYQ/TNonU/77eLiOPAvLGTm3Ua3xijzH1EPqSCHsuCTdFTaY4NCib1XrJqHJSSzQ9q66IiYLt0xgcZgM6DqhwoFMrGlXX0mg59kLa4ItsFOm3owRlN+/ZsKuK+QurcbSGAHb0D3dBs3Ab4/JduYfJ9OH48CBm4tidpI13g4Lx/v7qm5VmotCZJZ2qXRAevbefASHQWNchPkcsUj3Q+pRpdDAuMwy2M/y+NMibMwy8CJzRsZ6/PWpoAEcud0Mh4XSmCRK+uSr3EcA9ewKXLCCgqa2C91SwdqeU+MjuRqRXiOoMKSX5doHWpZWzIWa5d70FieT7udcvuBpS7oaEfsmO6XQNxxlqXy2XugJ953dIViTRWPNrcYkIvP4/MvTCMjVKKfiL6sU6DuQb9t0dGHG+sCpReuh67t8Z5BwBsi8IhzjB3maQS5r3wGbbtAS8+m6Dq+fq3JsALSCN7QSFwUgf4IcsKMjCdpTQ0kcB1m/MwLnM2LOuB+MO88i8HjUgjS7lPbdCCgx4fJ1IMc1nupMvYx+M7Dg++QAESgPCheCP6uhQKrVc2tJxBiMrWe4z1xrL04+sNgg2DVDCo80knU98LfwZbZ92rboL6u29qHp5MePboba2Y07bruNyqsdaI=","sidebar_class_name":"post api-method","info_path":"docs/chatbot-api/sample-backend","custom_edit_url":null},"sidebar":"chatbotApiSidebar","previous":{"title":"Get Most Boosted Docs","permalink":"/docs/chatbot-api/get-most-boosted-docs-manage-admin-doc-boosts-get"},"next":{"title":"Document Hidden Update","permalink":"/docs/chatbot-api/document-hidden-update-manage-admin-doc-hidden-post"}}');var a=o(74848),i=o(28453),d=o(57742),n=o.n(d),p=o(78178),c=o.n(p),r=o(19624),u=o.n(r),m=o(96226),b=o.n(m),l=(o(77675),o(19365),o(51107));const h={id:"document-boost-update-manage-admin-doc-boosts-post",title:"Document Boost Update",description:"Document Boost Update",sidebar_label:"Document Boost Update",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVMtu2zAQ/BVjz0qspj3plhfQIC0SxE4vhmCsqbXFWBIZkkoiCPr3YknZlu06bS8CRe5zZnZbUJoMOqmquwwSyJSoS6rcfKGUdfNaZ+hoXmKFK5pjVspqnikRXu1cK+sgAkOvNVl3pbIGkhaEqhxVjo+odSGFDz9+sariOytyKpFP2nByJ8ny3za1zPjXNZogAeuMrFYQgZOu4Iub3mx0l0EXga9kYC8rRysyA4crb9F10cZELV5IbOqWhjJIZnvZN1HTgyDPHo2n0C10HHIXwpma/IXVqrKhpYs49p2RFUZqRgESmNRCkLXLuhg99cYQ/TNonU/77eLiOPAvLGTm3Ua3xijzH1EPqSCHsuCTdFTaY4NCib1XrJqHJSSzQ9q66IiYLt0xgcZgM6DqhwoFMrGlXX0mg59kLa4ItsFOm3owRlN+/ZsKuK+QurcbSGAHb0D3dBs3Ab4/JduYfJ9OH48CBm4tidpI13g4Lx/v7qm5VmotCZJZ2qXRAevbefASHQWNchPkcsUj3Q+pRpdDAuMwy2M/y+NMibMwy8CJzRsZ6/PWpoAEcud0Mh4XSmCRK+uSr3EcA9ewKXLCCgqa2C91SwdqeU+MjuRqRXiOoMKSX5doHWpZWzIWa5d70FieT7udcvuBpS7oaEfsmO6XQNxxlqXy2XugJ953dIViTRWPNrcYkIvP4/MvTCMjVKKfiL6sU6DuQb9t0dGHG+sCpReuh67t8Z5BwBsi8IhzjB3maQS5r3wGbbtAS8+m6Dq+fq3JsALSCN7QSFwUgf4IcsKMjCdpTQ0kcB1m/MwLnM2LOuB+MO88i8HjUgjS7lPbdCCgx4fJ1IMc1nupMvYx+M7Dg++QAESgPCheCP6uhQKrVc2tJxBiMrWe4z1xrL04+sNgg2DVDCo80knU98LfwZbZ92rboL6u29qHp5MePboba2Y07bruNyqsdaI=",sidebar_class_name:"post api-method",info_path:"docs/chatbot-api/sample-backend",custom_edit_url:null},g=void 0,C={},q=[];function M(t){const e={p:"p",...(0,i.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.default,{as:"h1",className:"openapi__heading",children:"Document Boost Update"}),"\n",(0,a.jsx)(n(),{method:"post",path:"/manage/admin/doc-boosts",context:"endpoint"}),"\n",(0,a.jsx)(e.p,{children:"Document Boost Update"}),"\n",(0,a.jsx)(l.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(c(),{parameters:void 0}),"\n",(0,a.jsx)(u(),{title:"Body",body:{content:{"application/json":{schema:{properties:{document_id:{type:"string",title:"Document Id"},boost:{type:"integer",title:"Boost"}},type:"object",required:["document_id","boost"],title:"BoostUpdateRequest"}}},required:!0}}),"\n",(0,a.jsx)(b(),{id:void 0,label:void 0,responses:{200:{description:"Successful Response",content:{"application/json":{schema:{}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}}})]})}function S(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(M,{...t})}):M(t)}}}]);