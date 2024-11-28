"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7882],{52537:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>N,default:()=>B,frontMatter:()=>h,metadata:()=>a,toc:()=>A});const a=JSON.parse('{"id":"chatbot-api/admin-google-drive-auth-manage-admin-connector-google-drive-authorize-credential-id-get","title":"Admin Google Drive Auth","description":"Admin Google Drive Auth","source":"@site/docs/chatbot-api/admin-google-drive-auth-manage-admin-connector-google-drive-authorize-credential-id-get.api.mdx","sourceDirName":"chatbot-api","slug":"/chatbot-api/admin-google-drive-auth-manage-admin-connector-google-drive-authorize-credential-id-get","permalink":"/docs/chatbot-api/admin-google-drive-auth-manage-admin-connector-google-drive-authorize-credential-id-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"admin-google-drive-auth-manage-admin-connector-google-drive-authorize-credential-id-get","title":"Admin Google Drive Auth","description":"Admin Google Drive Auth","sidebar_label":"Admin Google Drive Auth","hide_title":true,"hide_table_of_contents":true,"api":"eJydVE1v2zAM/SsGTxug1Vm3k29dW3RFN6xos12CwFBlxlZjS64kB8sM//eBku3EcNMBu+RDIim+x/fYgq7RcCe1us0gAZ5VUqW51nmJaWbkDlPeuCKtuOI5puFaaKVQOG3mgdrIP5imwmCGyklepjJL0xwdMKi54RU6NBaSVQsGXxppMIPEmQYZWFFgxSFpwe1rhASsM1LlwMBJV9LB5Vg1us2gY6B4ReeT14CBVJBAzV0B3ZqBQVtrZdFS6fPFgr4ytMLImmBDAo+NEGjtpimjhz4YGAitHCpH4byuSyk8S/GzpZz2qN3aEIdOhhc8XY0p3wJy0bgi+mlK6Do2BOmnZxRE04GX1aHYepoccin78/n5HNAvXsrMtxtdG6PN/6PJ0HHpsUiHlZ0HlFpMbrna/9j4+U7Bd2w8kcphjga69QE9N4bvjxj6pkODNOXK5m+R+R2t5TnCWOx0qCcjWtLtv5gnXOHpPu5oAgd6A7unYVwF+l57bAj5ulzezwqG2VoUjZFu7+m8uL+9w/2l1luJkKzWJO3p1C/InNGNt2R0RZaMSCsEA12hyd6DEV0BCcTB1LE3dTyaOg6m/uBNHY+mjtuJzTqg/sxucLNXPBTO1Ukcl1rwstDWJZ8Wi4V34YDlkYQWpDNFNE6N1/IO94ONRbgevb7h1vFaNhaNpd48t1JttK/Qc/rIq7rE6AsXW1S0EajNQNLibHH2kSZWa+sq7sXflz7N34TnsVGHv11cl1x6lfaWD9yuIHALLGzUYMDALzA4ZphCBo6BQTJdZmsGxCNVbNsnbvGnKbuOjl8aNKSMNYMdN5I/EfJVC5m09DuDZMNLi7Pmx0UA7x56vb+PgL0OahiJonnseNnQP2Cwxf1s73o7F8gzNL6REHMhBNbuKHu2fUgdo0Bvrpc9IVNFbL0i+h9H22Xa2UwcQ6f0ebSBplltGyTXdWN8uDqZ0aMcoomrddd1fwFuzIML","sidebar_class_name":"get api-method","info_path":"docs/chatbot-api/sample-backend","custom_edit_url":null},"sidebar":"chatbotApiSidebar","previous":{"title":"Check Drive Tokens","permalink":"/docs/chatbot-api/check-drive-tokens-manage-admin-connector-google-drive-check-auth-credential-id-get"},"next":{"title":"Upload Files","permalink":"/docs/chatbot-api/upload-files-manage-admin-connector-file-upload-post"}}');var o=i(74848),n=i(28453),d=i(57742),r=i.n(d),l=i(78178),s=i.n(l),c=i(19624),p=i.n(c),u=i(96226),g=i.n(u),m=(i(77675),i(19365),i(51107));const h={id:"admin-google-drive-auth-manage-admin-connector-google-drive-authorize-credential-id-get",title:"Admin Google Drive Auth",description:"Admin Google Drive Auth",sidebar_label:"Admin Google Drive Auth",hide_title:!0,hide_table_of_contents:!0,api:"eJydVE1v2zAM/SsGTxug1Vm3k29dW3RFN6xos12CwFBlxlZjS64kB8sM//eBku3EcNMBu+RDIim+x/fYgq7RcCe1us0gAZ5VUqW51nmJaWbkDlPeuCKtuOI5puFaaKVQOG3mgdrIP5imwmCGyklepjJL0xwdMKi54RU6NBaSVQsGXxppMIPEmQYZWFFgxSFpwe1rhASsM1LlwMBJV9LB5Vg1us2gY6B4ReeT14CBVJBAzV0B3ZqBQVtrZdFS6fPFgr4ytMLImmBDAo+NEGjtpimjhz4YGAitHCpH4byuSyk8S/GzpZz2qN3aEIdOhhc8XY0p3wJy0bgi+mlK6Do2BOmnZxRE04GX1aHYepoccin78/n5HNAvXsrMtxtdG6PN/6PJ0HHpsUiHlZ0HlFpMbrna/9j4+U7Bd2w8kcphjga69QE9N4bvjxj6pkODNOXK5m+R+R2t5TnCWOx0qCcjWtLtv5gnXOHpPu5oAgd6A7unYVwF+l57bAj5ulzezwqG2VoUjZFu7+m8uL+9w/2l1luJkKzWJO3p1C/InNGNt2R0RZaMSCsEA12hyd6DEV0BCcTB1LE3dTyaOg6m/uBNHY+mjtuJzTqg/sxucLNXPBTO1Ukcl1rwstDWJZ8Wi4V34YDlkYQWpDNFNE6N1/IO94ONRbgevb7h1vFaNhaNpd48t1JttK/Qc/rIq7rE6AsXW1S0EajNQNLibHH2kSZWa+sq7sXflz7N34TnsVGHv11cl1x6lfaWD9yuIHALLGzUYMDALzA4ZphCBo6BQTJdZmsGxCNVbNsnbvGnKbuOjl8aNKSMNYMdN5I/EfJVC5m09DuDZMNLi7Pmx0UA7x56vb+PgL0OahiJonnseNnQP2Cwxf1s73o7F8gzNL6REHMhBNbuKHu2fUgdo0Bvrpc9IVNFbL0i+h9H22Xa2UwcQ6f0ebSBplltGyTXdWN8uDqZ0aMcoomrddd1fwFuzIML",sidebar_class_name:"get api-method",info_path:"docs/chatbot-api/sample-backend",custom_edit_url:null},N=void 0,b={},A=[];function v(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Admin Google Drive Auth"}),"\n",(0,o.jsx)(r(),{method:"get",path:"/manage/admin/connector/google-drive/authorize/{credential_id}",context:"endpoint"}),"\n",(0,o.jsx)(t.p,{children:"Admin Google Drive Auth"}),"\n",(0,o.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,o.jsx)(s(),{parameters:[{required:!0,schema:{type:"string",title:"Credential Id"},name:"credential_id",in:"path"}]}),"\n",(0,o.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,o.jsx)(g(),{id:void 0,label:void 0,responses:{200:{description:"Successful Response",content:{"application/json":{schema:{properties:{auth_url:{type:"string",title:"Auth Url"}},type:"object",required:["auth_url"],title:"AuthUrl"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}}})]})}function B(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(v,{...e})}):v(e)}}}]);