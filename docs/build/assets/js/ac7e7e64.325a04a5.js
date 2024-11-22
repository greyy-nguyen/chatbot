"use strict";(self.webpackChunkdocss=self.webpackChunkdocss||[]).push([[7333],{6402:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>R,frontMatter:()=>y,metadata:()=>a,toc:()=>b});const a=JSON.parse('{"id":"chatbot-api/upsert-service-account-credential-manage-admin-connector-google-drive-service-account-credential-put","title":"Upsert Service Account Credential","description":"Special API which allows the creation of a credential for a service account.","source":"@site/docs/chatbot-api/upsert-service-account-credential-manage-admin-connector-google-drive-service-account-credential-put.api.mdx","sourceDirName":"chatbot-api","slug":"/chatbot-api/upsert-service-account-credential-manage-admin-connector-google-drive-service-account-credential-put","permalink":"/docs/chatbot-api/upsert-service-account-credential-manage-admin-connector-google-drive-service-account-credential-put","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"upsert-service-account-credential-manage-admin-connector-google-drive-service-account-credential-put","title":"Upsert Service Account Credential","description":"Special API which allows the creation of a credential for a service account.","sidebar_label":"Upsert Service Account Credential","hide_title":true,"hide_table_of_contents":true,"api":"eJzVVk1z2zYQ/SuYPdOW4vbEmyNnWk3aiccfvSgaBgJXJCIQYABQCofD/95ZgBIpK3amufVik8B+vn37qA5ydMLK2kujIYXHGoXkit3eL9mhlKJkXClzcMyXyIRFTnbMbBmntxy1J+utsYwzh3YvBTIuhGm0v/6sF6baSI3RW+q68ewgfRleHd9j/tKH7bBl3sRMyLhmqL1tmdTk81l/WZySfmGebxReQwKmRhsKW+aQQlM7tD4bImdD5GwsN6u45gVmPK+kzoTRGoU3NiuMKRRmuZV7fMu9bjwkYPFbg86/N3kLaQfCaI/a0yOvayVFKGj21RGsHThRYsXpqbZUrpfo6O0sZ44KC+4xzxqHlq59WyOk4LyVuoAEvPSKDv4IbuyO3Njd0Y09k1ufQFFxqf5LOLK/iNMnRwez+YrCX+R/jBjdRojG0TxEaKCnEISTtJhD6m2D4cDVRrvY/818Tv9ekLARAp3bNoo9DMaQ/CrCMg8euv20hXR1wkBqj0VA6yUs/Xrsc5n/EIaxpxXFnzh8CiaLYVGW+an+PoDx+83NZbv/cCXzuFgfrDX213vN0XOpQtceK3dpoIw4u72A5YhBcgnUegSCW8vbCR3+MrFA4l7lireo9jc6xwuEU7DXTQMY7IlufzYE6iumHuwmIxnhjei+3sZdhO8t4v/59HR/ETDO1qForPRtgPP2fvkR24UxO4mQrtZEqgp9aUihooDU3JeQwiyq0Syo0eykRrOoDFdBGWaDGl0NanQ1qhFQYrtH60LexipIofS+TmczZQRXpXE+/W0+nwdiH4t8JAZFTpyXehoHr+VHJHQkcVTE6wQ0r+h2y53ntSRhcbzxZQCN6PkwyuKH77yqFf5U5sbJ/1i3RlKC1FsTahzG8RgysPdc7FDnkAABEbdqfj2/fkc+tXG+4mFvhuKfwxeCDfLFBv1iiymoZys6kff/5xdymKnH735WKy7DpgaudAMPVxB5CAkEJkYRilykyUzYOFDuFT6uEyDKUcSu23CHz1b1PR1/a9DSdqwT2HMrqbawGgmUyHOa9KqDHbaQwiLCfRWWn8xVEzn5QgtJp6LHrRBY+zdtpyt4//wECWyGj3dlcnKx/EC6wg+QQvhZQc5hR8JZB4rroiGQUoghifWB/md7swt7MzxMxJXrdlLgxQolQyv0dyLA515dFxez70/28epVjwHcozXNft33/b+uw4At","sidebar_class_name":"put api-method","info_path":"docs/chatbot-api/sample-backend","custom_edit_url":null},"sidebar":"chatbotApiSidebar","previous":{"title":"Delete Google Service Account Key","permalink":"/docs/chatbot-api/delete-google-service-account-key-manage-admin-connector-google-drive-service-account-key-delete"},"next":{"title":"Upsert Gmail Service Account Credential","permalink":"/docs/chatbot-api/upsert-gmail-service-account-credential-manage-admin-connector-gmail-service-account-credential-put"}}');var c=i(74848),n=i(28453),o=i(57742),r=i.n(o),s=i(78178),d=i.n(s),l=i(19624),p=i.n(l),u=i(96226),h=i.n(u),m=(i(77675),i(19365),i(51107));const y={id:"upsert-service-account-credential-manage-admin-connector-google-drive-service-account-credential-put",title:"Upsert Service Account Credential",description:"Special API which allows the creation of a credential for a service account.",sidebar_label:"Upsert Service Account Credential",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVk1z2zYQ/SuYPdOW4vbEmyNnWk3aiccfvSgaBgJXJCIQYABQCofD/95ZgBIpK3amufVik8B+vn37qA5ydMLK2kujIYXHGoXkit3eL9mhlKJkXClzcMyXyIRFTnbMbBmntxy1J+utsYwzh3YvBTIuhGm0v/6sF6baSI3RW+q68ewgfRleHd9j/tKH7bBl3sRMyLhmqL1tmdTk81l/WZySfmGebxReQwKmRhsKW+aQQlM7tD4bImdD5GwsN6u45gVmPK+kzoTRGoU3NiuMKRRmuZV7fMu9bjwkYPFbg86/N3kLaQfCaI/a0yOvayVFKGj21RGsHThRYsXpqbZUrpfo6O0sZ44KC+4xzxqHlq59WyOk4LyVuoAEvPSKDv4IbuyO3Njd0Y09k1ufQFFxqf5LOLK/iNMnRwez+YrCX+R/jBjdRojG0TxEaKCnEISTtJhD6m2D4cDVRrvY/818Tv9ekLARAp3bNoo9DMaQ/CrCMg8euv20hXR1wkBqj0VA6yUs/Xrsc5n/EIaxpxXFnzh8CiaLYVGW+an+PoDx+83NZbv/cCXzuFgfrDX213vN0XOpQtceK3dpoIw4u72A5YhBcgnUegSCW8vbCR3+MrFA4l7lireo9jc6xwuEU7DXTQMY7IlufzYE6iumHuwmIxnhjei+3sZdhO8t4v/59HR/ETDO1qForPRtgPP2fvkR24UxO4mQrtZEqgp9aUihooDU3JeQwiyq0Syo0eykRrOoDFdBGWaDGl0NanQ1qhFQYrtH60LexipIofS+TmczZQRXpXE+/W0+nwdiH4t8JAZFTpyXehoHr+VHJHQkcVTE6wQ0r+h2y53ntSRhcbzxZQCN6PkwyuKH77yqFf5U5sbJ/1i3RlKC1FsTahzG8RgysPdc7FDnkAABEbdqfj2/fkc+tXG+4mFvhuKfwxeCDfLFBv1iiymoZys6kff/5xdymKnH735WKy7DpgaudAMPVxB5CAkEJkYRilykyUzYOFDuFT6uEyDKUcSu23CHz1b1PR1/a9DSdqwT2HMrqbawGgmUyHOa9KqDHbaQwiLCfRWWn8xVEzn5QgtJp6LHrRBY+zdtpyt4//wECWyGj3dlcnKx/EC6wg+QQvhZQc5hR8JZB4rroiGQUoghifWB/md7swt7MzxMxJXrdlLgxQolQyv0dyLA515dFxez70/28epVjwHcozXNft33/b+uw4At",sidebar_class_name:"put api-method",info_path:"docs/chatbot-api/sample-backend",custom_edit_url:null},g=void 0,v={},b=[];function f(e){const t={code:"code",p:"p",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Upsert Service Account Credential"}),"\n",(0,c.jsx)(r(),{method:"put",path:"/manage/admin/connector/google-drive/service-account-credential",context:"endpoint"}),"\n",(0,c.jsxs)(t.p,{children:["Special API which allows the creation of a credential for a service account.\nCombines the input with the saved service account key to create an entry in the\n",(0,c.jsx)(t.code,{children:"Credential"})," table."]}),"\n",(0,c.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,c.jsx)(d(),{parameters:void 0}),"\n",(0,c.jsx)(p(),{title:"Body",body:{content:{"application/json":{schema:{properties:{google_drive_delegated_user:{type:"string",title:"Google Drive Delegated User"},gmail_delegated_user:{type:"string",title:"Gmail Delegated User"}},type:"object",title:"GoogleServiceAccountCredentialRequest"}}},required:!0}}),"\n",(0,c.jsx)(h(),{id:void 0,label:void 0,responses:{200:{description:"Successful Response",content:{"application/json":{schema:{properties:{id:{anyOf:[{type:"integer"},{type:"string"}],title:"Id"}},type:"object",required:["id"],title:"ObjectCreationIdResponse"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}}})]})}function R(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(f,{...e})}):f(e)}}}]);