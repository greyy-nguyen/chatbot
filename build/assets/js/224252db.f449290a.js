"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7518],{67877:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>f,contentTitle:()=>k,default:()=>j,frontMatter:()=>m,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"chatbot-api/get-connectors-manage-connector-get","title":"Get Connectors","description":"Get Connectors","source":"@site/docs/chatbot-api/get-connectors-manage-connector-get.api.mdx","sourceDirName":"chatbot-api","slug":"/chatbot-api/get-connectors-manage-connector-get","permalink":"/docs/chatbot-api/get-connectors-manage-connector-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-connectors-manage-connector-get","title":"Get Connectors","description":"Get Connectors","sidebar_label":"Get Connectors","hide_title":true,"hide_table_of_contents":true,"api":"eJydVcGO4zYM/RWDZ3WSdoEefNvOtotg0aLYzJ6CIFBk2tZEljQSlTYN/O8FZcdxMjuDojnEhkg+ku9R9BmcxyBJO7uqoIQGaaectajIhbjrpJUNXk92DRIICBi9sxEjlGf4abnkR4VRBe0ZCUpYJ6UwxjqZ4uvoDAKUs4SW2F16b7TKiRfPkWPOEFWLneQ3TdhlcB+4PtJDKis75CedPEIJkYK2DQggTYYP/mB7LyC6FNR3PdGmDsoNaNtg5OQ76TUIiEaqAwj4C/cgoHGuMbirgj5y2U0ntcltvySMREGqAwY2aGrTfngxMr+kkEDA3rlDpAFSOVubhFYxVKWjcilkNuIQEqXBWLuQ7c86SBDcdpUU7Z0MFQiotWGjdZldAf8koz0IMNqi5ELatI/esTSVU6lDSx9+XuZGctdjP1ETRg5HW2Hk2oxzXjsuopUBvdOWMQhlx351wNhmz+2V409jgvXAsbgT/qMtmONxph5YDW19ot2gxNuKGCerXSRJjOmdYcLxyNMyS75iqCdG+A95r1MbPSpda8WDXOtmVobbP6Oi2Qg9XoKK9RhUPA5BPQ9ApmRXB3yZgWhL2OSBuKB8HRyL39ixz7LLvcFqFrR3zqC0s6BPFyfmrHoXf5WdVMAKLWlpdrqKN/fmLrIXlxMZgjzN+50wilUVs6PucKcCSrqpdxKsdqGTBCVUkvAH9p7BPekOi8cx+AKWfPX/wb6Nwf21h0k0vpA6MPJm2A3T1b+ZuvdGYaZNZv0Vq3eE3LW0/c7krK30sXX0DuuXnVh8RiqmwFj8nvft9YTt0PNPQESVgqYTlJszfPxz9QVPj84dNEK52fbb+wtxiwwCOqTWjTuer5ikFkpYDCt+MTHEHGI4Yog5UQoGSmiJfLlYGKekaV2k8sNyuQROeqlqzbt72NK3tU2aS6+/4CkrAyWowSzGnQ61jCS9ThFDlInarLe2tcsII21r2XmDxS+8fy1rwWUO7S4flg8/MuPeReqkvX4uXjNxQ9RUH+HftPBGasswue/zyNIGBpbmk8TSMxVsPZ/3MuK3YPqej18SBpZpK+Aog+bpyhoJaFFWGDKxBzzx2lIKPctxlCYNLN19F5nkSbrPvz6BgMzPDbGHTOz4wugXkz3NsF9xLMYq+L8Xb0Sdz4NyfT/5D6Y3I8YuL95M6Lbv+38BHbzikg==","sidebar_class_name":"get api-method","info_path":"docs/chatbot-api/sample-backend","custom_edit_url":null},"sidebar":"chatbotApiSidebar","previous":{"title":"Google Drive Callback","permalink":"/docs/chatbot-api/google-drive-callback-manage-connector-google-drive-callback-get"},"next":{"title":"Get Connector By Id","permalink":"/docs/chatbot-api/get-connector-by-id-manage-connector-connector-id-get"}}');var i=o(74848),c=o(28453),a=o(57742),r=o.n(a),s=o(78178),d=o.n(s),l=o(19624),p=o.n(l),g=o(96226),u=o.n(g),b=(o(77675),o(19365),o(51107));const m={id:"get-connectors-manage-connector-get",title:"Get Connectors",description:"Get Connectors",sidebar_label:"Get Connectors",hide_title:!0,hide_table_of_contents:!0,api:"eJydVcGO4zYM/RWDZ3WSdoEefNvOtotg0aLYzJ6CIFBk2tZEljQSlTYN/O8FZcdxMjuDojnEhkg+ku9R9BmcxyBJO7uqoIQGaaectajIhbjrpJUNXk92DRIICBi9sxEjlGf4abnkR4VRBe0ZCUpYJ6UwxjqZ4uvoDAKUs4SW2F16b7TKiRfPkWPOEFWLneQ3TdhlcB+4PtJDKis75CedPEIJkYK2DQggTYYP/mB7LyC6FNR3PdGmDsoNaNtg5OQ76TUIiEaqAwj4C/cgoHGuMbirgj5y2U0ntcltvySMREGqAwY2aGrTfngxMr+kkEDA3rlDpAFSOVubhFYxVKWjcilkNuIQEqXBWLuQ7c86SBDcdpUU7Z0MFQiotWGjdZldAf8koz0IMNqi5ELatI/esTSVU6lDSx9+XuZGctdjP1ETRg5HW2Hk2oxzXjsuopUBvdOWMQhlx351wNhmz+2V409jgvXAsbgT/qMtmONxph5YDW19ot2gxNuKGCerXSRJjOmdYcLxyNMyS75iqCdG+A95r1MbPSpda8WDXOtmVobbP6Oi2Qg9XoKK9RhUPA5BPQ9ApmRXB3yZgWhL2OSBuKB8HRyL39ixz7LLvcFqFrR3zqC0s6BPFyfmrHoXf5WdVMAKLWlpdrqKN/fmLrIXlxMZgjzN+50wilUVs6PucKcCSrqpdxKsdqGTBCVUkvAH9p7BPekOi8cx+AKWfPX/wb6Nwf21h0k0vpA6MPJm2A3T1b+ZuvdGYaZNZv0Vq3eE3LW0/c7krK30sXX0DuuXnVh8RiqmwFj8nvft9YTt0PNPQESVgqYTlJszfPxz9QVPj84dNEK52fbb+wtxiwwCOqTWjTuer5ikFkpYDCt+MTHEHGI4Yog5UQoGSmiJfLlYGKekaV2k8sNyuQROeqlqzbt72NK3tU2aS6+/4CkrAyWowSzGnQ61jCS9ThFDlInarLe2tcsII21r2XmDxS+8fy1rwWUO7S4flg8/MuPeReqkvX4uXjNxQ9RUH+HftPBGasswue/zyNIGBpbmk8TSMxVsPZ/3MuK3YPqej18SBpZpK+Aog+bpyhoJaFFWGDKxBzzx2lIKPctxlCYNLN19F5nkSbrPvz6BgMzPDbGHTOz4wugXkz3NsF9xLMYq+L8Xb0Sdz4NyfT/5D6Y3I8YuL95M6Lbv+38BHbzikg==",sidebar_class_name:"get api-method",info_path:"docs/chatbot-api/sample-backend",custom_edit_url:null},k=void 0,f={},h=[];function x(e){const t={p:"p",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Get Connectors"}),"\n",(0,i.jsx)(r(),{method:"get",path:"/manage/connector",context:"endpoint"}),"\n",(0,i.jsx)(t.p,{children:"Get Connectors"}),"\n",(0,i.jsx)(d(),{parameters:void 0}),"\n",(0,i.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,i.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Successful Response",content:{"application/json":{schema:{items:{properties:{name:{type:"string",title:"Name"},source:{type:"string",enum:["ingestion_api","slack","web","google_drive","gmail","requesttracker","github","gitlab","guru","bookstack","confluence","discourse","slab","salesforce","jira","productboard","file","notion","zulip","linear","hubspot","document360","gong","google_sites","zendesk","loopio","sharepoint","teams","freshdesk"],title:"DocumentSource",description:"An enumeration."},input_type:{type:"string",enum:["load_state","poll","event"],title:"InputType",description:"An enumeration."},connector_specific_config:{type:"object",title:"Connector Specific Config"},refresh_freq:{type:"integer",title:"Refresh Freq"},disabled:{type:"boolean",title:"Disabled"},id:{type:"integer",title:"Id"},credential_ids:{items:{type:"integer"},type:"array",title:"Credential Ids"},time_created:{type:"string",format:"date-time",title:"Time Created"},time_updated:{type:"string",format:"date-time",title:"Time Updated"}},type:"object",required:["name","source","input_type","connector_specific_config","disabled","id","credential_ids","time_created","time_updated"],title:"ConnectorSnapshot"},type:"array",title:"Response Get Connectors Manage Connector Get"}}}}}})]})}function j(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}}}]);