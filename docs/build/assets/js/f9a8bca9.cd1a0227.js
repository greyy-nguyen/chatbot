"use strict";(self.webpackChunkdocss=self.webpackChunkdocss||[]).push([[3812],{46541:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>k,default:()=>j,frontMatter:()=>m,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"chatbot-api/delete-slack-bot-config-manage-admin-slack-bot-config-slack-bot-config-id-delete","title":"Delete Slack Bot Config","description":"Delete Slack Bot Config","source":"@site/docs/chatbot-api/delete-slack-bot-config-manage-admin-slack-bot-config-slack-bot-config-id-delete.api.mdx","sourceDirName":"chatbot-api","slug":"/chatbot-api/delete-slack-bot-config-manage-admin-slack-bot-config-slack-bot-config-id-delete","permalink":"/docs/chatbot-api/delete-slack-bot-config-manage-admin-slack-bot-config-slack-bot-config-id-delete","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"delete-slack-bot-config-manage-admin-slack-bot-config-slack-bot-config-id-delete","title":"Delete Slack Bot Config","description":"Delete Slack Bot Config","sidebar_label":"Delete Slack Bot Config","hide_title":true,"hide_table_of_contents":true,"api":"eJyVVE1v2zAM/SsGTxug1Vm3k2/rB7CiHVa03S5BEDA2k6iRLVWSiwWG/vtAyc7HnBx2SWSJeiQf31MH2pBFL3VzV0EBFSnyNHcKy818of281M1SruY1NriiOVa1bMan4x1ZzecJCwQYtFiTJ+ugmHZg6a2VlioovG1JgCvXVCMUHfitIShANp5WZEGAl17xzjPjZ1faZ9cRP7urIAhosObTE9lBgGygAIN+DWEmwJIzunHkOM/lZMJ/FbnSSsPNc462LMm5Zauypz4YBJS68dR4DkdjlCwjV/mr4zvdvvYQQhDw9fJyDPwblazitezWWm3/AxWM5fl4mequyKNUvJKeajcOULo8OsVm+3MZSe+pdd7KZgVBjMgOsyCGPbQWtwf0P+hUIHNeu9XBqHq8fegPcg5XBDuw86GRjOyFT8M+t168UulBHMhkGvtKqfu42R5mT29i93wbN4m+U8mGkO8vL48jwDRbR2Vrpd9GOr893t3T9lrrjSQopjOW2PHUb6L6s3+Vy22QX+u92aJB/BoKyJPL8uiyPKr600L7PKk6707oPAAXZt8Hb7VWQQFr702R50qXqNba+eLLZDKJNhiaeGaFJc0ct7IbFxp5T9vBR2U63lluic6jka0j67BljwWOXOqIMLgWa6Mou8JyQw1bkstM7EwuJhefeVRGO19jVH0PfZ64I4J3hXr643OjUEZ5RgK6ntEpJEZBQOSUyRpYTS5MwMWpF2QmgLljlK5boKNfVoXA228tWZbBTMA7WokL7nbaQSUdrysolqgcjQreuR4+PPXi/piBON3IMIaGZ/COquUvELCh7ZknLzp4TViRjeWkyG9lScYfYIweHNbFTpM3tw+3L7dMGE/1SA6bKId+cfCmHJc4UsZQMv8evDvHt7ou6S2EXXw6Onujb3SIZtJmIYS/h4xWtQ==","sidebar_class_name":"delete api-method","info_path":"docs/chatbot-api/sample-backend","custom_edit_url":null},"sidebar":"chatbotApiSidebar","previous":{"title":"Create Slack Bot Config","permalink":"/docs/chatbot-api/create-slack-bot-config-manage-admin-slack-bot-config-post"},"next":{"title":"Patch Slack Bot Config","permalink":"/docs/chatbot-api/patch-slack-bot-config-manage-admin-slack-bot-config-slack-bot-config-id-patch"}}');var o=a(74848),c=a(28453),n=a(57742),l=a.n(n),s=a(78178),d=a.n(s),r=a(19624),p=a.n(r),b=a(96226),g=a.n(b),f=(a(77675),a(19365),a(51107));const m={id:"delete-slack-bot-config-manage-admin-slack-bot-config-slack-bot-config-id-delete",title:"Delete Slack Bot Config",description:"Delete Slack Bot Config",sidebar_label:"Delete Slack Bot Config",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVE1v2zAM/SsGTxug1Vm3k2/rB7CiHVa03S5BEDA2k6iRLVWSiwWG/vtAyc7HnBx2SWSJeiQf31MH2pBFL3VzV0EBFSnyNHcKy818of281M1SruY1NriiOVa1bMan4x1ZzecJCwQYtFiTJ+ugmHZg6a2VlioovG1JgCvXVCMUHfitIShANp5WZEGAl17xzjPjZ1faZ9cRP7urIAhosObTE9lBgGygAIN+DWEmwJIzunHkOM/lZMJ/FbnSSsPNc462LMm5Zauypz4YBJS68dR4DkdjlCwjV/mr4zvdvvYQQhDw9fJyDPwblazitezWWm3/AxWM5fl4mequyKNUvJKeajcOULo8OsVm+3MZSe+pdd7KZgVBjMgOsyCGPbQWtwf0P+hUIHNeu9XBqHq8fegPcg5XBDuw86GRjOyFT8M+t168UulBHMhkGvtKqfu42R5mT29i93wbN4m+U8mGkO8vL48jwDRbR2Vrpd9GOr893t3T9lrrjSQopjOW2PHUb6L6s3+Vy22QX+u92aJB/BoKyJPL8uiyPKr600L7PKk6707oPAAXZt8Hb7VWQQFr702R50qXqNba+eLLZDKJNhiaeGaFJc0ct7IbFxp5T9vBR2U63lluic6jka0j67BljwWOXOqIMLgWa6Mou8JyQw1bkstM7EwuJhefeVRGO19jVH0PfZ64I4J3hXr643OjUEZ5RgK6ntEpJEZBQOSUyRpYTS5MwMWpF2QmgLljlK5boKNfVoXA228tWZbBTMA7WokL7nbaQSUdrysolqgcjQreuR4+PPXi/piBON3IMIaGZ/COquUvELCh7ZknLzp4TViRjeWkyG9lScYfYIweHNbFTpM3tw+3L7dMGE/1SA6bKId+cfCmHJc4UsZQMv8evDvHt7ou6S2EXXw6Onujb3SIZtJmIYS/h4xWtQ==",sidebar_class_name:"delete api-method",info_path:"docs/chatbot-api/sample-backend",custom_edit_url:null},k=void 0,u={},h=[];function S(e){const t={p:"p",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Delete Slack Bot Config"}),"\n",(0,o.jsx)(l(),{method:"delete",path:"/manage/admin/slack-bot/config/{slack_bot_config_id}",context:"endpoint"}),"\n",(0,o.jsx)(t.p,{children:"Delete Slack Bot Config"}),"\n",(0,o.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,o.jsx)(d(),{parameters:[{required:!0,schema:{type:"integer",title:"Slack Bot Config Id"},name:"slack_bot_config_id",in:"path"}]}),"\n",(0,o.jsx)(p(),{title:"Body",body:void 0}),"\n",(0,o.jsx)(g(),{id:void 0,label:void 0,responses:{200:{description:"Successful Response",content:{"application/json":{schema:{}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}}})]})}function j(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(S,{...e})}):S(e)}}}]);