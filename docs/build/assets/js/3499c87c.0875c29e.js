"use strict";(self.webpackChunkdocss=self.webpackChunkdocss||[]).push([[2383],{58964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>E,frontMatter:()=>h,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"chatbot-api/get-basic-connector-indexing-status-manage-indexing-status-get","title":"Get Basic Connector Indexing Status","description":"Get Basic Connector Indexing Status","source":"@site/docs/chatbot-api/get-basic-connector-indexing-status-manage-indexing-status-get.api.mdx","sourceDirName":"chatbot-api","slug":"/chatbot-api/get-basic-connector-indexing-status-manage-indexing-status-get","permalink":"/docs/chatbot-api/get-basic-connector-indexing-status-manage-indexing-status-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-basic-connector-indexing-status-manage-indexing-status-get","title":"Get Basic Connector Indexing Status","description":"Get Basic Connector Indexing Status","sidebar_label":"Get Basic Connector Indexing Status","hide_title":true,"hide_table_of_contents":true,"api":"eJyNVE2P2zYQ/SvCnNm10wA96JZsg80iKBDE7ckwjBE1lrimSIZDbuIK+u/FULJr7yZAfFhzOR988948j+ADRUzGu8cWaugo7Rtko/faO0c6+bg3rqXvxnV7Tpgy7wd02NGr644SKIjEwTsmhnqE39dr+WqJdTRBHoEaNllrYj5kW31ZkkGB9i6RS5KOIVijC6bVE0vNCKx7GlBOJtFQmoco0JOZn2q95hkStfJ/OgWCGoxL1FEEBckkKzd/es3V45I4KeiR93yBtI/ZXZU33ltCd1X+Ebm6niA7acI+R01XhZyicR0oIJcHqLdgXEcsI+0xGFDAFvURFHyjBhR03neW9m00z0JGN6CxhcyvmTiliPpYhuhM6nMzHyyWQ44ZlAA9cppbau8ONpPT0qo1rH2OhWOeSxgt8cHHEn8yEUEJmW3WqfEYW1BwMFaCzhfNFPybrQmgwBpHKED63HDwInjrdR7Ipbd/rMsgZeplHjaJWMrJtcSCzXofjBcQPUYK3jjpkQgHyTtE4r5k7m4EKw9sZo7Vi3V65yrheFniO5gmdRbBN0+k08KjibIY29tF+aH8FzmvQLwXT9zff0YTH93Bw/+PYIx4ulqQ805XD5SqUlbdn600751xXbUpnqn+KlZ6df1ACSb5KGDSOZp0gno7wrvPj5/odO/90RDU2920e8nGLzwKCgZKvV/sLuJj6qGG1Wzs1dnYv/E5nyk+U+SCIUcLNfQphXq1sl6j7T2n+u16vQbBcwa8EcfO3ryFffEIBvOJhDojyPUcVuBwkOgBOWEwmSky5tQXYY1wLx0Wsjc4BEvVe/GHEzkF5szE+m5990Z0Cp7TgMXVS+tfI+mG2AvoRN/TKlg0xfeFjHEhcAszgWWiWwp3CoQlyRnHBpn+iXaa5Pprpiji7hQ8YzTY2FlZBT1hS7FwfqSTbLrWFESvZ7R5JvDFD6Xwf9H24cPfoKBQd8P5sXC+HKT7OeROV71f0a8WFPJ3Uj+pGsdZ1Gm65M+hn1YsU56zhdbdNE3/AaneRso=","sidebar_class_name":"get api-method","info_path":"docs/chatbot-api/sample-backend","custom_edit_url":null},"sidebar":"chatbotApiSidebar","previous":{"title":"Get Connector By Id","permalink":"/docs/chatbot-api/get-connector-by-id-manage-connector-connector-id-get"},"next":{"title":"List Credentials Admin","permalink":"/docs/chatbot-api/list-credentials-admin-manage-admin-credential-get"}}');var i=n(74848),a=n(28453),o=n(57742),c=n.n(o),d=n(78178),r=n.n(d),g=n(19624),l=n.n(g),p=n(96226),u=n.n(p),b=(n(77675),n(19365),n(51107));const h={id:"get-basic-connector-indexing-status-manage-indexing-status-get",title:"Get Basic Connector Indexing Status",description:"Get Basic Connector Indexing Status",sidebar_label:"Get Basic Connector Indexing Status",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVE2P2zYQ/SvCnNm10wA96JZsg80iKBDE7ckwjBE1lrimSIZDbuIK+u/FULJr7yZAfFhzOR988948j+ADRUzGu8cWaugo7Rtko/faO0c6+bg3rqXvxnV7Tpgy7wd02NGr644SKIjEwTsmhnqE39dr+WqJdTRBHoEaNllrYj5kW31ZkkGB9i6RS5KOIVijC6bVE0vNCKx7GlBOJtFQmoco0JOZn2q95hkStfJ/OgWCGoxL1FEEBckkKzd/es3V45I4KeiR93yBtI/ZXZU33ltCd1X+Ebm6niA7acI+R01XhZyicR0oIJcHqLdgXEcsI+0xGFDAFvURFHyjBhR03neW9m00z0JGN6CxhcyvmTiliPpYhuhM6nMzHyyWQ44ZlAA9cppbau8ONpPT0qo1rH2OhWOeSxgt8cHHEn8yEUEJmW3WqfEYW1BwMFaCzhfNFPybrQmgwBpHKED63HDwInjrdR7Ipbd/rMsgZeplHjaJWMrJtcSCzXofjBcQPUYK3jjpkQgHyTtE4r5k7m4EKw9sZo7Vi3V65yrheFniO5gmdRbBN0+k08KjibIY29tF+aH8FzmvQLwXT9zff0YTH93Bw/+PYIx4ulqQ805XD5SqUlbdn600751xXbUpnqn+KlZ6df1ACSb5KGDSOZp0gno7wrvPj5/odO/90RDU2920e8nGLzwKCgZKvV/sLuJj6qGG1Wzs1dnYv/E5nyk+U+SCIUcLNfQphXq1sl6j7T2n+u16vQbBcwa8EcfO3ryFffEIBvOJhDojyPUcVuBwkOgBOWEwmSky5tQXYY1wLx0Wsjc4BEvVe/GHEzkF5szE+m5990Z0Cp7TgMXVS+tfI+mG2AvoRN/TKlg0xfeFjHEhcAszgWWiWwp3CoQlyRnHBpn+iXaa5Pprpiji7hQ8YzTY2FlZBT1hS7FwfqSTbLrWFESvZ7R5JvDFD6Xwf9H24cPfoKBQd8P5sXC+HKT7OeROV71f0a8WFPJ3Uj+pGsdZ1Gm65M+hn1YsU56zhdbdNE3/AaneRso=",sidebar_class_name:"get api-method",info_path:"docs/chatbot-api/sample-backend",custom_edit_url:null},m=void 0,f={},x=[];function B(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Get Basic Connector Indexing Status"}),"\n",(0,i.jsx)(c(),{method:"get",path:"/manage/indexing-status",context:"endpoint"}),"\n",(0,i.jsx)(t.p,{children:"Get Basic Connector Indexing Status"}),"\n",(0,i.jsx)(r(),{parameters:void 0}),"\n",(0,i.jsx)(l(),{title:"Body",body:void 0}),"\n",(0,i.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Successful Response",content:{"application/json":{schema:{items:{properties:{docs_indexed:{type:"integer",title:"Docs Indexed"},has_successful_run:{type:"boolean",title:"Has Successful Run"},source:{type:"string",enum:["ingestion_api","slack","web","google_drive","gmail","requesttracker","github","gitlab","guru","bookstack","confluence","discourse","slab","salesforce","jira","productboard","file","notion","zulip","linear","hubspot","document360","gong","google_sites","zendesk","loopio","sharepoint","teams","freshdesk"],title:"DocumentSource",description:"An enumeration."}},type:"object",required:["docs_indexed","has_successful_run","source"],title:"BasicCCPairInfo"},type:"array",title:"Response Get Basic Connector Indexing Status Manage Indexing Status Get"}}}}}})]})}function E(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(B,{...e})}):B(e)}}}]);