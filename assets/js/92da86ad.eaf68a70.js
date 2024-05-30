/*! For license information please see 92da86ad.eaf68a70.js.LICENSE.txt */
(self.webpackChunkbento=self.webpackChunkbento||[]).push([[4882],{36072:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(85893),i=n(11151),r=n(36971);const s={title:"Rate Limits",sidebar_label:"About"},a=void 0,c={id:"components/rate_limits/about",title:"Rate Limits",description:"A rate limit is a strategy for limiting the usage of a shared resource across parallel components in a Bento instance, or potentially across multiple instances. They are configured as a resource:",source:"@site/docs/components/rate_limits/about.md",sourceDirName:"components/rate_limits",slug:"/components/rate_limits/about",permalink:"/docs/components/rate_limits/about",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/rate_limits/about.md",tags:[],version:"current",frontMatter:{title:"Rate Limits",sidebar_label:"About"},sidebar:"docs",previous:{title:"ttlru",permalink:"/docs/components/caches/ttlru"},next:{title:"local",permalink:"/docs/components/rate_limits/local"}},l={},u=[];function p(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"A rate limit is a strategy for limiting the usage of a shared resource across parallel components in a Bento instance, or potentially across multiple instances. They are configured as a resource:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"rate_limit_resources:\n  - label: foobar\n    local:\n      count: 500\n      interval: 1s\n"})}),"\n",(0,o.jsxs)(t.p,{children:["And most components that hit external services have a field ",(0,o.jsx)(t.code,{children:"rate_limit"})," for specifying a rate limit resource to use, identified by the ",(0,o.jsx)(t.code,{children:"label"})," field. For example, if we wanted to use our ",(0,o.jsx)(t.code,{children:"foobar"})," rate limit with an ",(0,o.jsx)(t.a,{href:"/docs/components/inputs/http_client",children:(0,o.jsx)(t.code,{children:"http_client"})})," input it would look like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"input:\n  http_client:\n    url: TODO\n    verb: GET\n    rate_limit: foobar\n"})}),"\n",(0,o.jsx)(t.p,{children:"By using a rate limit in this way we can guarantee that our input will only poll our HTTP source at the rate of 500 requests per second."}),"\n",(0,o.jsxs)(t.p,{children:["Some components don't have a ",(0,o.jsx)(t.code,{children:"rate_limit"})," field but we might still wish to throttle them by a rate limit, in which case we can use the ",(0,o.jsxs)(t.a,{href:"/docs/components/processors/rate_limit",children:[(0,o.jsx)(t.code,{children:"rate_limit"})," processor"]})," that applies back pressure to a processing pipeline when the limit is reached. For example, if we wished to limit the consumption of lines of a ",(0,o.jsxs)(t.a,{href:"/docs/components/inputs/csv",children:[(0,o.jsx)(t.code,{children:"csv"})," file input"]})," to a specified rate limit we can do that with the following:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"input:\n  csv:\n    paths:\n      - ./foo.csv\n  processors:\n    - rate_limit:\n        resource: foobar\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You can find out more about resources ",(0,o.jsx)(t.a,{href:"/docs/configuration/resources",children:"in this document."})]}),"\n","\n","\n",(0,o.jsx)(r.Z,{type:"rate_limits",singular:"rate limit"})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},36971:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});n(67294);var o=n(52263),i=n(94184),r=n.n(i),s="componentList_axqy",a=n(85893);var c=function(e){let{type:t,singular:n}=e;const i=(0,o.Z)().siteConfig.customFields.components[t];return"string"!=typeof n&&(n=t,/s$/.test(n)&&(n=t.slice(0,-1))),(0,a.jsxs)("div",{className:"dropdown dropdown--hoverable",children:[(0,a.jsxs)("button",{className:"button button--outline button--primary",children:["Jump to ",n]}),(0,a.jsx)("ul",{className:r()(s,"dropdown__menu"),children:i.map((e=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"dropdown__link",href:"/docs/components/"+t+"/"+e.name,children:e.name})},e.name)))})]})}},94184:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var s=i.apply(null,n);s&&e.push(s)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)o.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},11151:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},a:function(){return s}});var o=n(67294);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);