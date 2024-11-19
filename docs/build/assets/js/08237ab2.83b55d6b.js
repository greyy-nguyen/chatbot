"use strict";(self.webpackChunkdocss=self.webpackChunkdocss||[]).push([[8714],{32547:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>m,default:()=>x,frontMatter:()=>h,metadata:()=>l,toc:()=>k});const l=JSON.parse('{"id":"chatbot-api/google-drive-callback-manage-connector-google-drive-callback-get","title":"Google Drive Callback","description":"Google Drive Callback","source":"@site/docs/chatbot-api/google-drive-callback-manage-connector-google-drive-callback-get.api.mdx","sourceDirName":"chatbot-api","slug":"/chatbot-api/google-drive-callback-manage-connector-google-drive-callback-get","permalink":"/docs/chatbot-api/google-drive-callback-manage-connector-google-drive-callback-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"google-drive-callback-manage-connector-google-drive-callback-get","title":"Google Drive Callback","description":"Google Drive Callback","sidebar_label":"Google Drive Callback","hide_title":true,"hide_table_of_contents":true,"api":"eJy1lFFv0zAQx79KdU8gGVIGT3kb2zSmgZi2wktVVVfnmnp148x2JqIo3x2dnaaJugKaxEubxHfnu5///jdgSrLolSluMkghNybXtMyseqalRK1XKLfLHRaY01KaoiDpjV2+HJaTBwElWtyRJ+sgnTdg6alSljJIva1IgJMb2iGkDfi6JEjBeauKHAR45TV/ePDoCVoBBe5iAL8LUAWk8FSRraEVryl8YbJhXcmv47ILAZZcaQpHjiudTaf8l5GTVpVMifurpCTn1pWe3HfBIECawlPhORzLUisZoCaPjnOaQXelZeRexR1cLDZoe2WMJiyGQLqYVsCOnMOc/jTlty6kFZChj0C6pUt+b1uxzzWrR5J8ZgeW876jxfhEKtcP27Zc49PZ2TGbn6hVFiafXFlr7OvBZORRaX5SnnbuOEAbOVrFov6+DpIbk2GtdF9U4SknC+3iwACtxXqA76uJDQbaLv9H0jHkdGiAMZnx6t/481xx6y5ucBAHvJHu6TEuI76XNtuHfJnN7o4KxrN1JCurfB1wnt/d3FJ9YcxWEaTzBd+S8alfBzuYXLIdTC46O+AhyG9MsJXOGfwGUkiinSS9nSTRTt4FO0nkId+Rfd77SGU1pLDxvkyTRBuJemOcTz9Op9Nwb/ctP7CeokLGjfeHg6W6pXp/82Vc7l1hjc5jqSpH1mHlNwGhKtZmeJEecFdqmnxGuaUiAwHcZmQxfT99/4EPpjTO7zBovCt9CtMIZt+mp18+KTWqIMUwftMhnENEGG9XhAgChhh5ab/DQgCz4rymWaGjH1a3LX+Otsd4M+VwpVmBa9SOjprqbzG8ue/E+nYC4uVmt1QPfPsZdcUx4Sb+h306Hz9ss+AXq3ifoFcBG8KMbBg05pxLSaUfZB1ZE1fp9Xt9NQMBQQ4jHW2DjrqHgfVgUQ9qH0lq3zn/DuxpnNU0Uaht28fHpZMZ3ZT7aGa0aNv2N3twsPA=","sidebar_class_name":"get api-method","info_path":"docs/chatbot-api/sample-backend","custom_edit_url":null},"sidebar":"chatbotApiSidebar","previous":{"title":"Gmail Callback","permalink":"/docs/chatbot-api/gmail-callback-manage-connector-gmail-callback-get"},"next":{"title":"Get Connectors","permalink":"/docs/chatbot-api/get-connectors-manage-connector-get"}}');var o=t(74848),i=t(28453),n=t(57742),c=t.n(n),r=t(78178),s=t.n(r),p=t(19624),d=t.n(p),g=t(96226),b=t.n(g),u=(t(77675),t(19365),t(51107));const h={id:"google-drive-callback-manage-connector-google-drive-callback-get",title:"Google Drive Callback",description:"Google Drive Callback",sidebar_label:"Google Drive Callback",hide_title:!0,hide_table_of_contents:!0,api:"eJy1lFFv0zAQx79KdU8gGVIGT3kb2zSmgZi2wktVVVfnmnp148x2JqIo3x2dnaaJugKaxEubxHfnu5///jdgSrLolSluMkghNybXtMyseqalRK1XKLfLHRaY01KaoiDpjV2+HJaTBwElWtyRJ+sgnTdg6alSljJIva1IgJMb2iGkDfi6JEjBeauKHAR45TV/ePDoCVoBBe5iAL8LUAWk8FSRraEVryl8YbJhXcmv47ILAZZcaQpHjiudTaf8l5GTVpVMifurpCTn1pWe3HfBIECawlPhORzLUisZoCaPjnOaQXelZeRexR1cLDZoe2WMJiyGQLqYVsCOnMOc/jTlty6kFZChj0C6pUt+b1uxzzWrR5J8ZgeW876jxfhEKtcP27Zc49PZ2TGbn6hVFiafXFlr7OvBZORRaX5SnnbuOEAbOVrFov6+DpIbk2GtdF9U4SknC+3iwACtxXqA76uJDQbaLv9H0jHkdGiAMZnx6t/481xx6y5ucBAHvJHu6TEuI76XNtuHfJnN7o4KxrN1JCurfB1wnt/d3FJ9YcxWEaTzBd+S8alfBzuYXLIdTC46O+AhyG9MsJXOGfwGUkiinSS9nSTRTt4FO0nkId+Rfd77SGU1pLDxvkyTRBuJemOcTz9Op9Nwb/ctP7CeokLGjfeHg6W6pXp/82Vc7l1hjc5jqSpH1mHlNwGhKtZmeJEecFdqmnxGuaUiAwHcZmQxfT99/4EPpjTO7zBovCt9CtMIZt+mp18+KTWqIMUwftMhnENEGG9XhAgChhh5ab/DQgCz4rymWaGjH1a3LX+Otsd4M+VwpVmBa9SOjprqbzG8ue/E+nYC4uVmt1QPfPsZdcUx4Sb+h306Hz9ss+AXq3ifoFcBG8KMbBg05pxLSaUfZB1ZE1fp9Xt9NQMBQQ4jHW2DjrqHgfVgUQ9qH0lq3zn/DuxpnNU0Uaht28fHpZMZ3ZT7aGa0aNv2N3twsPA=",sidebar_class_name:"get api-method",info_path:"docs/chatbot-api/sample-backend",custom_edit_url:null},m=void 0,f={},k=[];function G(e){const a={p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.default,{as:"h1",className:"openapi__heading",children:"Google Drive Callback"}),"\n",(0,o.jsx)(c(),{method:"get",path:"/manage/connector/google-drive/callback",context:"endpoint"}),"\n",(0,o.jsx)(a.p,{children:"Google Drive Callback"}),"\n",(0,o.jsx)(u.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,o.jsx)(s(),{parameters:[{required:!0,schema:{type:"string",title:"State"},name:"state",in:"query"},{required:!0,schema:{type:"string",title:"Code"},name:"code",in:"query"}]}),"\n",(0,o.jsx)(d(),{title:"Body",body:void 0}),"\n",(0,o.jsx)(b(),{id:void 0,label:void 0,responses:{200:{description:"Successful Response",content:{"application/json":{schema:{properties:{success:{type:"boolean",title:"Success"},message:{type:"string",title:"Message"},data:{title:"Data"}},type:"object",required:["success"],title:"StatusResponse"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}}})]})}function x(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(G,{...e})}):G(e)}}}]);