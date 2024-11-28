"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2282],{60612:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>C,frontMatter:()=>g,metadata:()=>a,toc:()=>x});const a=JSON.parse('{"id":"chatbot-api/gmail-auth-manage-connector-gmail-authorize-credential-id-get","title":"Gmail Auth","description":"Gmail Auth","source":"@site/docs/chatbot-api/gmail-auth-manage-connector-gmail-authorize-credential-id-get.api.mdx","sourceDirName":"chatbot-api","slug":"/chatbot-api/gmail-auth-manage-connector-gmail-authorize-credential-id-get","permalink":"/docs/chatbot-api/gmail-auth-manage-connector-gmail-authorize-credential-id-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"gmail-auth-manage-connector-gmail-authorize-credential-id-get","title":"Gmail Auth","description":"Gmail Auth","sidebar_label":"Gmail Auth","hide_title":true,"hide_table_of_contents":true,"api":"eJydlE1v2zAMhv+KwdMGCHXW7eRb1xVd0Q0r2m6XIDBUmYnVyJIqycUyw/99oGQ7MdJ2wC75kCjq5UO+6sBYdDxIo68qKGDTcKlK3oa6bLjmGyyF0RpFMK7c7xkn/2BZCocV6iC5KmVVlhsMwMByxxsM6DwUyw4cPrXSYQVFcC0y8KLGhkPRQdhZhAJ8cFJvgEGQQdHC+ZQ1u6qgZ6B5Q+uz24CB1FCA5aGGfsXAobdGe/SU+nSxoK8KvXDSUnFQwF0rBHq/blV2OwQDA2F0QB0onFurpIgs8kdPZ7oDudYRqSDTDZFQ69RbhZy1oc5+OgV9z8Yg8/CIgjDtuSz3yVbzw+ksnf50enpc0C+uZBXlZhfOGff/1VQYuIy1yICNPw5QRsx2ud79WMf+zovv2bQidcANOuhX++q5c3x3QOibSQKpy43fvAXzO3rPNwhTstdDI4zsnnb/RZ7qSlcPcQcd2ONNdF8v40vC99JlY8jX+/ubo4Sptx5F62TYRZxnN1fXuDs3ZisRiuWKRnve9UtyYUbjQcox1Cb6dvBeqKGAPFk3n6ybR+vmk3XzbmamHkiFex49G+ca6hBskefKCK5q40PxcbFYRK+Niu9onNKAzHVPveFWXuNuNKtI25Oj19wHbmXr0XnSFglKvTYxw0DujjdWYfaZiy1q8j3JTCgWJ4uTD9QXa3xoeBzxIfWM0gzgpC3g75BbxWUcv8HLieASEsHkqMQQWHocgcHEERgU82dpxYBYUYque+AefzrV97T81KKjHq8YPHMn+QNVt+ygkp5+V1CsufJ4pHayNLy7HSb3fQbs5SpG7JqYP3PV0j9gsMXd0QsajVkjr9BFISnmTAi04eD00TtCEzDN3eXF/QBk3vVt7Prw4+CdmCs7GoBRKX0evCXzU12Xxqrvp/i09eqJocoxmlit+r7/C617ZRI=","sidebar_class_name":"get api-method","info_path":"docs/chatbot-api/sample-backend","custom_edit_url":null},"sidebar":"chatbotApiSidebar","previous":{"title":"Connector Run Once","permalink":"/docs/chatbot-api/connector-run-once-manage-admin-connector-run-once-post"},"next":{"title":"Google Drive Auth","permalink":"/docs/chatbot-api/google-drive-auth-manage-connector-google-drive-authorize-credential-id-get"}}');var n=i(74848),o=i(28453),c=i(57742),r=i.n(c),s=i(78178),d=i.n(s),l=i(19624),u=i.n(l),p=i(96226),h=i.n(p),m=(i(77675),i(19365),i(51107));const g={id:"gmail-auth-manage-connector-gmail-authorize-credential-id-get",title:"Gmail Auth",description:"Gmail Auth",sidebar_label:"Gmail Auth",hide_title:!0,hide_table_of_contents:!0,api:"eJydlE1v2zAMhv+KwdMGCHXW7eRb1xVd0Q0r2m6XIDBUmYnVyJIqycUyw/99oGQ7MdJ2wC75kCjq5UO+6sBYdDxIo68qKGDTcKlK3oa6bLjmGyyF0RpFMK7c7xkn/2BZCocV6iC5KmVVlhsMwMByxxsM6DwUyw4cPrXSYQVFcC0y8KLGhkPRQdhZhAJ8cFJvgEGQQdHC+ZQ1u6qgZ6B5Q+uz24CB1FCA5aGGfsXAobdGe/SU+nSxoK8KvXDSUnFQwF0rBHq/blV2OwQDA2F0QB0onFurpIgs8kdPZ7oDudYRqSDTDZFQ69RbhZy1oc5+OgV9z8Yg8/CIgjDtuSz3yVbzw+ksnf50enpc0C+uZBXlZhfOGff/1VQYuIy1yICNPw5QRsx2ud79WMf+zovv2bQidcANOuhX++q5c3x3QOibSQKpy43fvAXzO3rPNwhTstdDI4zsnnb/RZ7qSlcPcQcd2ONNdF8v40vC99JlY8jX+/ubo4Sptx5F62TYRZxnN1fXuDs3ZisRiuWKRnve9UtyYUbjQcox1Cb6dvBeqKGAPFk3n6ybR+vmk3XzbmamHkiFex49G+ca6hBskefKCK5q40PxcbFYRK+Niu9onNKAzHVPveFWXuNuNKtI25Oj19wHbmXr0XnSFglKvTYxw0DujjdWYfaZiy1q8j3JTCgWJ4uTD9QXa3xoeBzxIfWM0gzgpC3g75BbxWUcv8HLieASEsHkqMQQWHocgcHEERgU82dpxYBYUYque+AefzrV97T81KKjHq8YPHMn+QNVt+ygkp5+V1CsufJ4pHayNLy7HSb3fQbs5SpG7JqYP3PV0j9gsMXd0QsajVkjr9BFISnmTAi04eD00TtCEzDN3eXF/QBk3vVt7Prw4+CdmCs7GoBRKX0evCXzU12Xxqrvp/i09eqJocoxmlit+r7/C617ZRI=",sidebar_class_name:"get api-method",info_path:"docs/chatbot-api/sample-backend",custom_edit_url:null},b=void 0,y={},x=[];function Q(e){const t={p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Gmail Auth"}),"\n",(0,n.jsx)(r(),{method:"get",path:"/manage/connector/gmail/authorize/{credential_id}",context:"endpoint"}),"\n",(0,n.jsx)(t.p,{children:"Gmail Auth"}),"\n",(0,n.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(d(),{parameters:[{required:!0,schema:{type:"string",title:"Credential Id"},name:"credential_id",in:"path"}]}),"\n",(0,n.jsx)(u(),{title:"Body",body:void 0}),"\n",(0,n.jsx)(h(),{id:void 0,label:void 0,responses:{200:{description:"Successful Response",content:{"application/json":{schema:{properties:{auth_url:{type:"string",title:"Auth Url"}},type:"object",required:["auth_url"],title:"AuthUrl"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}}})]})}function C(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(Q,{...e})}):Q(e)}}}]);