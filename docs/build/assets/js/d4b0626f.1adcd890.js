"use strict";(self.webpackChunkdocss=self.webpackChunkdocss||[]).push([[857],{3513:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>Z,frontMatter:()=>R,metadata:()=>a,toc:()=>b});const a=JSON.parse('{"id":"chatbot-api/rename-chat-session-chat-rename-chat-session-put","title":"Rename Chat Session","description":"Rename Chat Session","source":"@site/docs/chatbot-api/rename-chat-session-chat-rename-chat-session-put.api.mdx","sourceDirName":"chatbot-api","slug":"/chatbot-api/rename-chat-session-chat-rename-chat-session-put","permalink":"/docs/chatbot-api/rename-chat-session-chat-rename-chat-session-put","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"rename-chat-session-chat-rename-chat-session-put","title":"Rename Chat Session","description":"Rename Chat Session","sidebar_label":"Rename Chat Session","hide_title":true,"hide_table_of_contents":true,"api":"eJydVU1P4zAQ/SvRnAPNsnvKDVikRewHasteUITcZNqYOraxHUoU5b+vxk7TlBZYcWnd8cx43ps30xaURsMcV/K6gBQMSlbhQ14y92DRWq5k+HHsQtcOYjD4VKN1F6poIG0hV9KhdHRkWgue++STR6sk2WxeYsXopA097ThaHzZOzAsyuUYjpMClwxUaiMFxJ8hyWTIXzYJvdF1AFwMVN4qxznC5GoX8pvuui7cOavGI+bZ6brCA9P6ghmz/yamnYBrgQkfZdtHO1OgNVitpA6azJKGvAm1uuCYaIIVZnedo7bIW0bR3hvizrEncPHwIHTfRf8Efko1wB8yEvud7qLnzBHw7OzuE+JcJXngA0ZUxynweX4GOcUEn7rCyhw5C5Xu3TDZ/lpDev6ajiw/01GU7PpgxrBlx9lOFAklalV29R+8vtJatEIZkb7t6MqI53X7UC8IVnu79Rj3Z0RvYfRvG90Dfsce2Lj/m89uDhKG3FvPacNd4Os9vr2+wuVRqzRHS+6zL4lddD1KJxsNJENCVijZLWBaauRJSmNCoTcJOOaHziR0iLJpnNNa/WhsBKZTO6XQyESpnolTWpV+TJAGqYFvijPQTFLFf6NAMpvkNEjecas3D9XZvwJJZxzSvLRrLald6ykic091yu3phlRZ4dFklQ6ZBb8DlUvkCeqZnPjy6YPkaZQExEMpAXXKanH6hGK2sq5gfiT7fcVb3mB8wOnxxEy0Y97r13LU942G5eZEdcp7FQLSSV9sumMU7I7qOzE81Gup/FsMzM5wtRGh+DCWyAo1v0hob2pBhwk+8vMld1IH3V9NOkxgizvMctXvXNxsJ6PZuDjEs+r+ZShUUYtiGQLENpAAxKE+J14G3tSCYXNU0nymElNRZ3+I9bay9NvrDaH0w2YwKPJBJ3EOhz9GK2Y9q2yC+rhv8w9WbET25W2/qZ9Z13T9G7KRf","sidebar_class_name":"put api-method","info_path":"docs/chatbot-api/sample-backend","custom_edit_url":null},"sidebar":"chatbotApiSidebar","previous":{"title":"Create New Chat Session","permalink":"/docs/chatbot-api/create-new-chat-session-chat-create-chat-session-post"},"next":{"title":"Delete Chat Session By Id","permalink":"/docs/chatbot-api/delete-chat-session-by-id-chat-delete-chat-session-session-id-delete"}}');var n=s(74848),i=s(28453),o=s(57742),c=s.n(o),r=s(78178),p=s.n(r),h=s(19624),l=s.n(h),d=s(96226),u=s.n(d),m=(s(77675),s(19365),s(51107));const R={id:"rename-chat-session-chat-rename-chat-session-put",title:"Rename Chat Session",description:"Rename Chat Session",sidebar_label:"Rename Chat Session",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1P4zAQ/SvRnAPNsnvKDVikRewHasteUITcZNqYOraxHUoU5b+vxk7TlBZYcWnd8cx43ps30xaURsMcV/K6gBQMSlbhQ14y92DRWq5k+HHsQtcOYjD4VKN1F6poIG0hV9KhdHRkWgue++STR6sk2WxeYsXopA097ThaHzZOzAsyuUYjpMClwxUaiMFxJ8hyWTIXzYJvdF1AFwMVN4qxznC5GoX8pvuui7cOavGI+bZ6brCA9P6ghmz/yamnYBrgQkfZdtHO1OgNVitpA6azJKGvAm1uuCYaIIVZnedo7bIW0bR3hvizrEncPHwIHTfRf8Efko1wB8yEvud7qLnzBHw7OzuE+JcJXngA0ZUxynweX4GOcUEn7rCyhw5C5Xu3TDZ/lpDev6ajiw/01GU7PpgxrBlx9lOFAklalV29R+8vtJatEIZkb7t6MqI53X7UC8IVnu79Rj3Z0RvYfRvG90Dfsce2Lj/m89uDhKG3FvPacNd4Os9vr2+wuVRqzRHS+6zL4lddD1KJxsNJENCVijZLWBaauRJSmNCoTcJOOaHziR0iLJpnNNa/WhsBKZTO6XQyESpnolTWpV+TJAGqYFvijPQTFLFf6NAMpvkNEjecas3D9XZvwJJZxzSvLRrLald6ykic091yu3phlRZ4dFklQ6ZBb8DlUvkCeqZnPjy6YPkaZQExEMpAXXKanH6hGK2sq5gfiT7fcVb3mB8wOnxxEy0Y97r13LU942G5eZEdcp7FQLSSV9sumMU7I7qOzE81Gup/FsMzM5wtRGh+DCWyAo1v0hob2pBhwk+8vMld1IH3V9NOkxgizvMctXvXNxsJ6PZuDjEs+r+ZShUUYtiGQLENpAAxKE+J14G3tSCYXNU0nymElNRZ3+I9bay9NvrDaH0w2YwKPJBJ3EOhz9GK2Y9q2yC+rhv8w9WbET25W2/qZ9Z13T9G7KRf",sidebar_class_name:"put api-method",info_path:"docs/chatbot-api/sample-backend",custom_edit_url:null},v=void 0,y={},b=[];function x(e){const t={p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Rename Chat Session"}),"\n",(0,n.jsx)(c(),{method:"put",path:"/chat/rename-chat-session",context:"endpoint"}),"\n",(0,n.jsx)(t.p,{children:"Rename Chat Session"}),"\n",(0,n.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(p(),{parameters:void 0}),"\n",(0,n.jsx)(l(),{title:"Body",body:{content:{"application/json":{schema:{properties:{chat_session_id:{type:"integer",title:"Chat Session Id"},name:{type:"string",title:"Name"}},type:"object",required:["chat_session_id"],title:"ChatRenameRequest"}}},required:!0}}),"\n",(0,n.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"Successful Response",content:{"application/json":{schema:{properties:{new_name:{type:"string",title:"New Name"}},type:"object",required:["new_name"],title:"RenameChatSessionResponse"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}}})]})}function Z(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}}}]);