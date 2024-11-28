"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8998],{72217:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>j,default:()=>f,frontMatter:()=>b,metadata:()=>a,toc:()=>y});const a=JSON.parse('{"id":"chatbot-api/put-tokens-manage-admin-slack-bot-tokens-put","title":"Put Tokens","description":"Put Tokens","source":"@site/docs/chatbot-api/put-tokens-manage-admin-slack-bot-tokens-put.api.mdx","sourceDirName":"chatbot-api","slug":"/chatbot-api/put-tokens-manage-admin-slack-bot-tokens-put","permalink":"/docs/chatbot-api/put-tokens-manage-admin-slack-bot-tokens-put","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"put-tokens-manage-admin-slack-bot-tokens-put","title":"Put Tokens","description":"Put Tokens","sidebar_label":"Put Tokens","hide_title":true,"hide_table_of_contents":true,"api":"eJyVVE1v2zAM/SsBz26ddTv51mwFVnTDgjbdJQgCxmYSNbKkSnRbI/B/Hyjlu2u75RKbIp/I9/i8BuvIIytrrisowDU8ZbsiE6Y1GlzQFKtamWnQWK6mM7s7dQ1DBp4eGwo8sFULxRpKa5gMyyM6p1UZgfOHYI3EQrmkGuXJebmWFQV528HKC7eOoIDAXpkFZMCKtQQGlnujmNRlgv5xxaVz24ou22bZ2QOV29aVpwqK8UEDh9CTPdSdjD+wHOECdAK4B2DfUAwEZ01IM130+/JXUSi9ckKDwDRlSSHMG9273SRD9s+sdfHaLxcXr4F/o1ZVLOtdeW/9f6CeaFERo9LypJjq8DpB2/LoFE37aw7F+FSHLttFlGFakIdustcBvcf2QKwfNjUo6tZh8Z6uPykEXBDswN5OjWT0RnL60Q7IXOnqTd6B/Ht6E7tvj/Et0fe3y7Yp30ej4SvApO2xqMNms/FBGiNe2o1DIQOHvIQC8mTSPJo0jyY9m1nOeVsWyD+RD1GfxmsoYMnsijzXtkS9tIGLz/1+H7qJ5JaNV9zeyWoksS+H1zfUfrV2pQ55RqduSMZW0meZjjMwWMvpHAOjU00gH7DhZWRD9u52/7W4esHaaTpx/17AA4PvFwqUmdvYxtaWEaQ3wHJFpoIMZNZEXv+8f/5JapwNXGPc+U1/R7weUb4bkOmFc6dRxX2MxK03nI8hcS5NCutC8pZ3UTkBTzIQciV9vZ5hoHuvu07Cjw35ForxJIMn9ApnMslYnLEkrMhHqVbUQgFfk4XP4v5Kum4S+yd2FqulisuyJMfv5k4Odml4P4IMZpuvd20rKfH4LNbAZygAMrCRm7gNMbYGjWbRCAMFJEj5/QGagSqw","sidebar_class_name":"put api-method","info_path":"docs/chatbot-api/sample-backend","custom_edit_url":null},"sidebar":"chatbotApiSidebar","previous":{"title":"Get Tokens","permalink":"/docs/chatbot-api/get-tokens-manage-admin-slack-bot-tokens-get"},"next":{"title":"List Personas","permalink":"/docs/chatbot-api/list-personas-persona-get"}}');var n=s(74848),o=s(28453),i=s(57742),p=s.n(i),d=s(78178),r=s.n(d),c=s(19624),l=s.n(c),u=s(96226),m=s.n(u),k=(s(77675),s(19365),s(51107));const b={id:"put-tokens-manage-admin-slack-bot-tokens-put",title:"Put Tokens",description:"Put Tokens",sidebar_label:"Put Tokens",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVE1v2zAM/SsBz26ddTv51mwFVnTDgjbdJQgCxmYSNbKkSnRbI/B/Hyjlu2u75RKbIp/I9/i8BuvIIytrrisowDU8ZbsiE6Y1GlzQFKtamWnQWK6mM7s7dQ1DBp4eGwo8sFULxRpKa5gMyyM6p1UZgfOHYI3EQrmkGuXJebmWFQV528HKC7eOoIDAXpkFZMCKtQQGlnujmNRlgv5xxaVz24ou22bZ2QOV29aVpwqK8UEDh9CTPdSdjD+wHOECdAK4B2DfUAwEZ01IM130+/JXUSi9ckKDwDRlSSHMG9273SRD9s+sdfHaLxcXr4F/o1ZVLOtdeW/9f6CeaFERo9LypJjq8DpB2/LoFE37aw7F+FSHLttFlGFakIdustcBvcf2QKwfNjUo6tZh8Z6uPykEXBDswN5OjWT0RnL60Q7IXOnqTd6B/Ht6E7tvj/Et0fe3y7Yp30ej4SvApO2xqMNms/FBGiNe2o1DIQOHvIQC8mTSPJo0jyY9m1nOeVsWyD+RD1GfxmsoYMnsijzXtkS9tIGLz/1+H7qJ5JaNV9zeyWoksS+H1zfUfrV2pQ55RqduSMZW0meZjjMwWMvpHAOjU00gH7DhZWRD9u52/7W4esHaaTpx/17AA4PvFwqUmdvYxtaWEaQ3wHJFpoIMZNZEXv+8f/5JapwNXGPc+U1/R7weUb4bkOmFc6dRxX2MxK03nI8hcS5NCutC8pZ3UTkBTzIQciV9vZ5hoHuvu07Cjw35ForxJIMn9ApnMslYnLEkrMhHqVbUQgFfk4XP4v5Kum4S+yd2FqulisuyJMfv5k4Odml4P4IMZpuvd20rKfH4LNbAZygAMrCRm7gNMbYGjWbRCAMFJEj5/QGagSqw",sidebar_class_name:"put api-method",info_path:"docs/chatbot-api/sample-backend",custom_edit_url:null},j=void 0,h={},y=[];function M(t){const e={p:"p",...(0,o.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k.default,{as:"h1",className:"openapi__heading",children:"Put Tokens"}),"\n",(0,n.jsx)(p(),{method:"put",path:"/manage/admin/slack-bot/tokens",context:"endpoint"}),"\n",(0,n.jsx)(e.p,{children:"Put Tokens"}),"\n",(0,n.jsx)(k.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(r(),{parameters:void 0}),"\n",(0,n.jsx)(l(),{title:"Body",body:{content:{"application/json":{schema:{properties:{bot_token:{type:"string",title:"Bot Token"},app_token:{type:"string",title:"App Token"}},type:"object",required:["bot_token","app_token"],title:"SlackBotTokens"}}},required:!0}}),"\n",(0,n.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"Successful Response",content:{"application/json":{schema:{}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}}})]})}function f(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(M,{...t})}):M(t)}}}]);