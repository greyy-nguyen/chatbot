"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6037],{87303:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>k,default:()=>K,frontMatter:()=>m,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"chatbot-api/store-genai-api-key-manage-admin-genai-api-key-put","title":"Store Genai Api Key","description":"Store Genai Api Key","source":"@site/docs/chatbot-api/store-genai-api-key-manage-admin-genai-api-key-put.api.mdx","sourceDirName":"chatbot-api","slug":"/chatbot-api/store-genai-api-key-manage-admin-genai-api-key-put","permalink":"/docs/chatbot-api/store-genai-api-key-manage-admin-genai-api-key-put","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"store-genai-api-key-manage-admin-genai-api-key-put","title":"Store Genai Api Key","description":"Store Genai Api Key","sidebar_label":"Store Genai Api Key","hide_title":true,"hide_table_of_contents":true,"api":"eJyVVE1v2zAM/SsBz2qTdTv51nbFVnTDijbdJTACxmYcNbakSnJbw/B/Hyg5H07abrvYgvRIkY/vqQVtyKKXWl3nkIDz2tK8IIVyjkbO19TMK1RY0BzzSqqDI1N7EGDpqSbnL3TeQNJCppUn5XmJxpQyC+nHj04r3nPZiirklbF8uZfkIjbk5KVvDIVirFQFCPDSl7xxbuTohhroOrHB6MUjZZsipKUcktk2VToIjZHdPtTbmsKGM1q5WMfZZMK/nFxmpeHSIYH7OsvIuWVdju56MIh/7rQL1345OztO/BtLmYew0ZW12v5H1gP+cvIoS15JT5U7BpQ6G5yian4tIZkd8t2J7Y5Ungqy0KU7xtFabPaG8kPHAqETULnio/n9JOewINgmex8ayBhN+fRv0+a+4tU9bm/sO3oju++38TXS99ZlG8j36fT2KGGcraOsttI3gc7z2+sbai61XkuCZJZ2qTiUE9ts9I29NNqIWkBFfqXZhdFWBv0KEhhH/42D/8bBfydo5Mk6xDiyz2RduLe2JSSw8t4k43GpMyxX2vnk82QyAa5hU+Q9KyhqYljqdhwY3SJAcrVZPBagsOLTJTqPRtaOrMParwJpLM+73UNw9YqVKWlg7J3AQKqlDvf11N4H9OgCszWpHARwU5Gryenk9BPHGO18hcEDfSFv0zigetuSp1c/NiXKINRAVdtTPINIMQgIJIOAIc2pAGaSkW27QEcPtuw63n6qyfLQUwHPaCUuyjhxASvCnGyYS2z+Mtr6JGia4WUdqT6wONsvRpxnGRn/ITbdU83twxQELPpXuNI5h1h8YbvgCyQAAnSgJYw+7LVQoipqbj6BmJKHGaY6kENUW7/YezNQNXsFHilD9K3wd+9dGUa1bdRb123x8ejdiJ7cDZpnmnZd9wfs7lQb","sidebar_class_name":"put api-method","info_path":"docs/chatbot-api/sample-backend","custom_edit_url":null},"sidebar":"chatbotApiSidebar","previous":{"title":"Get Gen Ai Api Key From Dynamic Config Store","permalink":"/docs/chatbot-api/get-gen-ai-api-key-from-dynamic-config-store-manage-admin-genai-api-key-get"},"next":{"title":"Delete Genai Api Key","permalink":"/docs/chatbot-api/delete-genai-api-key-manage-admin-genai-api-key-delete"}}');var n=i(74848),p=i(28453),s=i(57742),r=i.n(s),o=i(78178),d=i.n(o),c=i(19624),l=i.n(c),y=i(96226),b=i.n(y),g=(i(77675),i(19365),i(51107));const m={id:"store-genai-api-key-manage-admin-genai-api-key-put",title:"Store Genai Api Key",description:"Store Genai Api Key",sidebar_label:"Store Genai Api Key",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVE1v2zAM/SsBz2qTdTv51nbFVnTDijbdJTACxmYcNbakSnJbw/B/Hyg5H07abrvYgvRIkY/vqQVtyKKXWl3nkIDz2tK8IIVyjkbO19TMK1RY0BzzSqqDI1N7EGDpqSbnL3TeQNJCppUn5XmJxpQyC+nHj04r3nPZiirklbF8uZfkIjbk5KVvDIVirFQFCPDSl7xxbuTohhroOrHB6MUjZZsipKUcktk2VToIjZHdPtTbmsKGM1q5WMfZZMK/nFxmpeHSIYH7OsvIuWVdju56MIh/7rQL1345OztO/BtLmYew0ZW12v5H1gP+cvIoS15JT5U7BpQ6G5yian4tIZkd8t2J7Y5Ungqy0KU7xtFabPaG8kPHAqETULnio/n9JOewINgmex8ayBhN+fRv0+a+4tU9bm/sO3oju++38TXS99ZlG8j36fT2KGGcraOsttI3gc7z2+sbai61XkuCZJZ2qTiUE9ts9I29NNqIWkBFfqXZhdFWBv0KEhhH/42D/8bBfydo5Mk6xDiyz2RduLe2JSSw8t4k43GpMyxX2vnk82QyAa5hU+Q9KyhqYljqdhwY3SJAcrVZPBagsOLTJTqPRtaOrMParwJpLM+73UNw9YqVKWlg7J3AQKqlDvf11N4H9OgCszWpHARwU5Gryenk9BPHGO18hcEDfSFv0zigetuSp1c/NiXKINRAVdtTPINIMQgIJIOAIc2pAGaSkW27QEcPtuw63n6qyfLQUwHPaCUuyjhxASvCnGyYS2z+Mtr6JGia4WUdqT6wONsvRpxnGRn/ITbdU83twxQELPpXuNI5h1h8YbvgCyQAAnSgJYw+7LVQoipqbj6BmJKHGaY6kENUW7/YezNQNXsFHilD9K3wd+9dGUa1bdRb123x8ejdiJ7cDZpnmnZd9wfs7lQb",sidebar_class_name:"put api-method",info_path:"docs/chatbot-api/sample-backend",custom_edit_url:null},k=void 0,u={},h=[];function I(e){const t={p:"p",...(0,p.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Store Genai Api Key"}),"\n",(0,n.jsx)(r(),{method:"put",path:"/manage/admin/genai-api-key",context:"endpoint"}),"\n",(0,n.jsx)(t.p,{children:"Store Genai Api Key"}),"\n",(0,n.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(d(),{parameters:void 0}),"\n",(0,n.jsx)(l(),{title:"Body",body:{content:{"application/json":{schema:{properties:{api_key:{type:"string",title:"Api Key"}},type:"object",required:["api_key"],title:"ApiKey"}}},required:!0}}),"\n",(0,n.jsx)(b(),{id:void 0,label:void 0,responses:{200:{description:"Successful Response",content:{"application/json":{schema:{}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}}})]})}function K(e={}){const{wrapper:t}={...(0,p.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(I,{...e})}):I(e)}}}]);