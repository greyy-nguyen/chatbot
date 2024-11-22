(self.webpackChunkdocss=self.webpackChunkdocss||[]).push([[7847],{93901:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>f});const a=JSON.parse('{"id":"chatbot-api/sample-backend","title":"Sample Backend","description":"","source":"@site/docs/chatbot-api/sample-backend.info.mdx","sourceDirName":"chatbot-api","slug":"/chatbot-api/sample-backend","permalink":"/docs/chatbot-api/sample-backend","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"id":"sample-backend","title":"Sample Backend","description":"","sidebar_label":"Introduction","sidebar_position":0,"hide_title":true,"custom_edit_url":null},"sidebar":"chatbotApiSidebar","next":{"title":"Oauth:Google.Database.Authorize","permalink":"/docs/chatbot-api/oauth-google-database-authorize-auth-oauth-authorize-get"}}');var o=n(74848),i=n(28453),r=(n(43905),n(51107)),s=n(23397),l=n.n(s),c=n(19365);n(69016);const d={id:"sample-backend",title:"Sample Backend",description:"",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},u=void 0,p={},f=[];function h(e){const t={p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: 0.0.1"}),"\n",(0,o.jsx)(r.default,{as:"h1",className:"openapi__heading",children:"Sample Backend"}),"\n",(0,o.jsxs)("div",{style:{marginBottom:"2rem"},children:[(0,o.jsx)(r.default,{id:"authentication",as:"h2",className:"openapi-tabs__heading",children:"Authentication"}),(0,o.jsx)(l(),{className:"openapi-tabs__security-schemes",children:(0,o.jsx)(c.default,{label:"API Key: APIKeyCookie",value:"APIKeyCookie",children:(0,o.jsx)("div",{children:(0,o.jsx)("table",{children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:(0,o.jsx)(t.p,{children:"Security Scheme Type:"})}),(0,o.jsx)("td",{children:(0,o.jsx)(t.p,{children:"apiKey"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:(0,o.jsx)(t.p,{children:"Header parameter name:"})}),(0,o.jsx)("td",{children:(0,o.jsx)(t.p,{children:"fastapiusersauth"})})]})]})})})})})]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},69016:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(96540)),i=a(n(4213));t.default=function(e){let{url:t,proxy:n}=e;return o.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},o.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),o.default.createElement("ul",{className:"export-dropdown dropdown__menu"},o.default.createElement("li",null,o.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),i.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},43905:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(96540)),i=n(42214),r=a(n(86025)),s=a(n(15626));t.default=function(e){const{colorMode:t}=(0,i.useColorMode)(),{logo:n,darkLogo:a}=e,l=()=>"dark"===t?a?.altText??n?.altText:n?.altText,c=(0,r.default)(n?.url),d=(0,r.default)(a?.url);return n&&a?o.default.createElement(s.default,{alt:l(),sources:{light:c,dark:d},className:"openapi__logo"}):n||a?o.default.createElement(s.default,{alt:l(),sources:{light:c??d,dark:c??d},className:"openapi__logo"}):void 0}},4213:function(e,t,n){var a,o,i,r=n(96763);o=[],void 0===(i="function"==typeof(a=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(r.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,n){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){c(a.response,t,n)},a.onerror=function(){r.error("could not download file")},a.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,l=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,n){var r=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?i(l):o(l.href)?a(e,t,n):i(l,l.target="_blank")):(l.href=r.createObjectURL(e),setTimeout((function(){r.revokeObjectURL(l.href)}),4e4),setTimeout((function(){i(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,r){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),n);else if(o(e))a(e,n,r);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){i(s)}))}}:function(e,t,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,n);var i="application/octet-stream"===e.type,r=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&r||l)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},d.readAsDataURL(e)}else{var u=s.URL||s.webkitURL,p=u.createObjectURL(e);o?o.location=p:location.href=p,o=null,setTimeout((function(){u.revokeObjectURL(p)}),4e4)}});s.saveAs=c.saveAs=c,e.exports=c})?a.apply(t,o):a)||(e.exports=i)}}]);