"use strict";(self.webpackChunkdocss=self.webpackChunkdocss||[]).push([[464],{58603:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>f,metadata:()=>n,toc:()=>C});const n=JSON.parse('{"id":"chatbot-api/get-gen-ai-api-key-from-dynamic-config-store-manage-admin-genai-api-key-get","title":"Get Gen Ai Api Key From Dynamic Config Store","description":"NOTE: Only gets value from dynamic config store as to not expose env variables.","source":"@site/docs/chatbot-api/get-gen-ai-api-key-from-dynamic-config-store-manage-admin-genai-api-key-get.api.mdx","sourceDirName":"chatbot-api","slug":"/chatbot-api/get-gen-ai-api-key-from-dynamic-config-store-manage-admin-genai-api-key-get","permalink":"/docs/chatbot-api/get-gen-ai-api-key-from-dynamic-config-store-manage-admin-genai-api-key-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-gen-ai-api-key-from-dynamic-config-store-manage-admin-genai-api-key-get","title":"Get Gen Ai Api Key From Dynamic Config Store","description":"NOTE: Only gets value from dynamic config store as to not expose env variables.","sidebar_label":"Get Gen Ai Api Key From Dynamic Config Store","hide_title":true,"hide_table_of_contents":true,"api":"eJy1UsFu2zAM/RWBZ7Xxtptv2dYVRYF1WLpTEBiszNhqbUmV5KCG4X8fKDldvaHHXWxBIh8f33sT1BSU1y5qa6CE73f3V6W4M90oGopBnLAbSBy97UU9Guy1Esqao25EiNaTwCCiFcZGQS/OBhJkTuKEXuNDR+ESJFhHHhn9poYSGopVQ6ZCXaHT1RONFYNXC3iVwasEXvVosKEK614b7nrT1FAECZ6CsyZQgHKCj0XBv/U+u0EpCuE4dOLnUgwSlDWRTORydK7TKhHcPAbumSColnrkk/NMP+o8YRnOxzg6ghJC9No0ICHq2PHF1mlxSyPMszzX2IdHUpnt86A91VDuX6EOq9bcOXNzIDV4HUco9xNsf9zc0vjF2idNUO4P80FCT7G1i6QgwWFsoYRN1myTNNskzS7Q6QuexaD+RD4kzMF3UEIboys3m84q7FobYvmpKApg/DOBHYuR91/TeBUBM3EJmhVX+VmCwZ5fjxgiOj0E8gGH2CZptDnahLDsvsPedSQ+o3oiU4MEppkdLC6Lyw8wS3A2xB6TQQv0NUVxTUZstVh0F984qV+XpH7JSd1xmECukzH9CcF/CP2iTKSXuHEdasMLJMWnxak9ZKdAQvIKJKzdOkhgQ7hymh4w0C/fzTNfPw/kORcHCeehKRQSWsKafLI35RS2SpHjeKSVkld/xX0Vpeure+bDLq3szelZDox+fjLjG+x/nJYLC/7O8p2uacr5mefX+vz0bsey5bmaxT3M8/wba5ilsw==","sidebar_class_name":"get api-method","info_path":"docs/chatbot-api/sample-backend","custom_edit_url":null},"sidebar":"chatbotApiSidebar","previous":{"title":"Validate Existing Genai Api Key","permalink":"/docs/chatbot-api/validate-existing-genai-api-key-manage-admin-genai-api-key-validate-get"},"next":{"title":"Store Genai Api Key","permalink":"/docs/chatbot-api/store-genai-api-key-manage-admin-genai-api-key-put"}}');var t=i(74848),o=i(28453),s=i(57742),p=i.n(s),d=i(78178),c=i.n(d),r=i(19624),m=i.n(r),g=i(96226),l=i.n(g),y=(i(77675),i(19365),i(51107));const f={id:"get-gen-ai-api-key-from-dynamic-config-store-manage-admin-genai-api-key-get",title:"Get Gen Ai Api Key From Dynamic Config Store",description:"NOTE: Only gets value from dynamic config store as to not expose env variables.",sidebar_label:"Get Gen Ai Api Key From Dynamic Config Store",hide_title:!0,hide_table_of_contents:!0,api:"eJy1UsFu2zAM/RWBZ7Xxtptv2dYVRYF1WLpTEBiszNhqbUmV5KCG4X8fKDldvaHHXWxBIh8f33sT1BSU1y5qa6CE73f3V6W4M90oGopBnLAbSBy97UU9Guy1Esqao25EiNaTwCCiFcZGQS/OBhJkTuKEXuNDR+ESJFhHHhn9poYSGopVQ6ZCXaHT1RONFYNXC3iVwasEXvVosKEK614b7nrT1FAECZ6CsyZQgHKCj0XBv/U+u0EpCuE4dOLnUgwSlDWRTORydK7TKhHcPAbumSColnrkk/NMP+o8YRnOxzg6ghJC9No0ICHq2PHF1mlxSyPMszzX2IdHUpnt86A91VDuX6EOq9bcOXNzIDV4HUco9xNsf9zc0vjF2idNUO4P80FCT7G1i6QgwWFsoYRN1myTNNskzS7Q6QuexaD+RD4kzMF3UEIboys3m84q7FobYvmpKApg/DOBHYuR91/TeBUBM3EJmhVX+VmCwZ5fjxgiOj0E8gGH2CZptDnahLDsvsPedSQ+o3oiU4MEppkdLC6Lyw8wS3A2xB6TQQv0NUVxTUZstVh0F984qV+XpH7JSd1xmECukzH9CcF/CP2iTKSXuHEdasMLJMWnxak9ZKdAQvIKJKzdOkhgQ7hymh4w0C/fzTNfPw/kORcHCeehKRQSWsKafLI35RS2SpHjeKSVkld/xX0Vpeure+bDLq3szelZDox+fjLjG+x/nJYLC/7O8p2uacr5mefX+vz0bsey5bmaxT3M8/wba5ilsw==",sidebar_class_name:"get api-method",info_path:"docs/chatbot-api/sample-backend",custom_edit_url:null},u=void 0,h={},C=[];function b(e){const a={p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Get Gen Ai Api Key From Dynamic Config Store"}),"\n",(0,t.jsx)(p(),{method:"get",path:"/manage/admin/genai-api-key",context:"endpoint"}),"\n",(0,t.jsx)(a.p,{children:"NOTE: Only gets value from dynamic config store as to not expose env variables."}),"\n",(0,t.jsx)(c(),{parameters:void 0}),"\n",(0,t.jsx)(m(),{title:"Body",body:void 0}),"\n",(0,t.jsx)(l(),{id:void 0,label:void 0,responses:{200:{description:"Successful Response",content:{"application/json":{schema:{properties:{api_key:{type:"string",title:"Api Key"}},type:"object",required:["api_key"],title:"ApiKey"}}}}}})]})}function k(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}}}]);