"use strict";(self.webpackChunkdocss=self.webpackChunkdocss||[]).push([[9035],{84679:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>b,contentTitle:()=>g,default:()=>f,frontMatter:()=>h,metadata:()=>i,toc:()=>G});const i=JSON.parse('{"id":"chatbot-api/get-query-analytics-analytics-admin-query-get","title":"Get Query Analytics","description":"Get Query Analytics","source":"@site/docs/chatbot-api/get-query-analytics-analytics-admin-query-get.api.mdx","sourceDirName":"chatbot-api","slug":"/chatbot-api/get-query-analytics-analytics-admin-query-get","permalink":"/docs/chatbot-api/get-query-analytics-analytics-admin-query-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-query-analytics-analytics-admin-query-get","title":"Get Query Analytics","description":"Get Query Analytics","sidebar_label":"Get Query Analytics","hide_title":true,"hide_table_of_contents":true,"api":"eJytVU1P20AQ/SvRnF2S0p58owVRBFVpSXuJIjTYk2TJ2mt2x6iW5f9eza7t2CQpVOol8XrffL03M67BFGSRlcmvUohhTXz/VJKt7jFHXbFK3PApzVTe3q+JIYICLWbEZB3EixosPZXKUgrxCrWjCFyyoQwhroGrgiAGx1bla4hgZWyGDDGkyPSOVUYQASvWgrpjtAxNBDlmwUrOEagcYvDxoYn+X7iLPB0Eozx9EWoZgSVXmNyRE+ens5n8peQSqwohT3Iuk4ScW5V68qMFQwSJyZlyFjgWhVaJ53r66MSmHiSsmDLvvLAiCasQig2j9pR3L0JhKmdakx0UMRfk5HuLbKLWVKvtmwxvPK43S5V7q+V5B20iz+6r9A88nMuxkajBwDw8UiJK76RdvOBgXNhevm0Oy10MoaQ665q412YXFK3FapBUB5lcEntCq0lvPnySaWjvL4mhaaSQj6en+73xC7VKvfKTC2uN/ZfGGPdDSoxK/6VhtElGt5hX31Z+OMeayPy8ELZZHufkxoQEhbbMrQ9p3EG/knO4HhB8HOrJmMzl9rUmkLpC6BY3UHhHb2D3eBnngb5DwTrIl/n8ds9h0NZRUlrFlafz7PbqmqrPxmwVQbxYypYYq36gfaQE4o1pd63foLyBGKb9lp36LTsNq0di2uduvZZWQwwb5iKeTrVJUG+M4/jDbDbzS6rL706aJ7TDOMteCSzUNVXdmkvCdb8BV+gYC1U6sg5L3ni+VL4y3kO3ozErNE0+YbING1PSDIXPTmYn70WFwjjO0Dd06/owJyPe+iSZfvO00Kh81/ni65avBeDA3DMGUbuulxEILQKq6wd09NPqppHX4V6YTJXDBz34cmypGnxnnlGXkoGfkiPYtugeuZSDVQL17RDBhjAl6+MFk7MkoWLof2/yxUvfIJcXcylOBBgpt/XKtQ+Dyca8GvjeE7FLXH4H0z+2quvQGk3T48PVUYu2yg4tYi2bpvkDSD/awA==","sidebar_class_name":"get api-method","info_path":"docs/chatbot-api/sample-backend","custom_edit_url":null},"sidebar":"chatbotApiSidebar","previous":{"title":"Patch User Group","permalink":"/docs/chatbot-api/patch-user-group-manage-admin-user-group-user-group-id-patch"},"next":{"title":"Get User Analytics","permalink":"/docs/chatbot-api/get-user-analytics-analytics-admin-user-get"}}');var n=a(74848),r=a(28453),s=a(57742),l=a.n(s),o=a(78178),y=a.n(o),p=a(19624),c=a.n(p),d=a(96226),u=a.n(d),m=(a(77675),a(19365),a(51107));const h={id:"get-query-analytics-analytics-admin-query-get",title:"Get Query Analytics",description:"Get Query Analytics",sidebar_label:"Get Query Analytics",hide_title:!0,hide_table_of_contents:!0,api:"eJytVU1P20AQ/SvRnF2S0p58owVRBFVpSXuJIjTYk2TJ2mt2x6iW5f9eza7t2CQpVOol8XrffL03M67BFGSRlcmvUohhTXz/VJKt7jFHXbFK3PApzVTe3q+JIYICLWbEZB3EixosPZXKUgrxCrWjCFyyoQwhroGrgiAGx1bla4hgZWyGDDGkyPSOVUYQASvWgrpjtAxNBDlmwUrOEagcYvDxoYn+X7iLPB0Eozx9EWoZgSVXmNyRE+ens5n8peQSqwohT3Iuk4ScW5V68qMFQwSJyZlyFjgWhVaJ53r66MSmHiSsmDLvvLAiCasQig2j9pR3L0JhKmdakx0UMRfk5HuLbKLWVKvtmwxvPK43S5V7q+V5B20iz+6r9A88nMuxkajBwDw8UiJK76RdvOBgXNhevm0Oy10MoaQ665q412YXFK3FapBUB5lcEntCq0lvPnySaWjvL4mhaaSQj6en+73xC7VKvfKTC2uN/ZfGGPdDSoxK/6VhtElGt5hX31Z+OMeayPy8ELZZHufkxoQEhbbMrQ9p3EG/knO4HhB8HOrJmMzl9rUmkLpC6BY3UHhHb2D3eBnngb5DwTrIl/n8ds9h0NZRUlrFlafz7PbqmqrPxmwVQbxYypYYq36gfaQE4o1pd63foLyBGKb9lp36LTsNq0di2uduvZZWQwwb5iKeTrVJUG+M4/jDbDbzS6rL706aJ7TDOMteCSzUNVXdmkvCdb8BV+gYC1U6sg5L3ni+VL4y3kO3ozErNE0+YbING1PSDIXPTmYn70WFwjjO0Dd06/owJyPe+iSZfvO00Kh81/ni65avBeDA3DMGUbuulxEILQKq6wd09NPqppHX4V6YTJXDBz34cmypGnxnnlGXkoGfkiPYtugeuZSDVQL17RDBhjAl6+MFk7MkoWLof2/yxUvfIJcXcylOBBgpt/XKtQ+Dyca8GvjeE7FLXH4H0z+2quvQGk3T48PVUYu2yg4tYi2bpvkDSD/awA==",sidebar_class_name:"get api-method",info_path:"docs/chatbot-api/sample-backend",custom_edit_url:null},g=void 0,b={},G=[];function Q(t){const e={p:"p",...(0,r.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Get Query Analytics"}),"\n",(0,n.jsx)(l(),{method:"get",path:"/analytics/admin/query",context:"endpoint"}),"\n",(0,n.jsx)(e.p,{children:"Get Query Analytics"}),"\n",(0,n.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(y(),{parameters:[{required:!1,schema:{type:"string",format:"date-time",title:"Start"},name:"start",in:"query"},{required:!1,schema:{type:"string",format:"date-time",title:"End"},name:"end",in:"query"}]}),"\n",(0,n.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,n.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Successful Response",content:{"application/json":{schema:{items:{properties:{total_queries:{type:"integer",title:"Total Queries"},total_likes:{type:"integer",title:"Total Likes"},total_dislikes:{type:"integer",title:"Total Dislikes"},date:{type:"string",format:"date",title:"Date"}},type:"object",required:["total_queries","total_likes","total_dislikes","date"],title:"QueryAnalyticsResponse"},type:"array",title:"Response Get Query Analytics Analytics Admin Query Get"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}}})]})}function f(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(Q,{...t})}):Q(t)}}}]);