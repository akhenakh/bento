"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[372],{74590:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(85893),s=n(11151);n(74866),n(85162);const o={title:"wasm",slug:"wasm",type:"processor",status:"experimental",categories:["Utility"],name:"wasm"},a=void 0,l={id:"components/processors/wasm",title:"wasm",description:"\x3c!--",source:"@site/docs/components/processors/wasm.md",sourceDirName:"components/processors",slug:"/components/processors/wasm",permalink:"/docs/components/processors/wasm",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/wasm.md",tags:[],version:"current",frontMatter:{title:"wasm",slug:"wasm",type:"processor",status:"experimental",categories:["Utility"],name:"wasm"},sidebar:"docs",previous:{title:"unarchive",permalink:"/docs/components/processors/unarchive"},next:{title:"while",permalink:"/docs/components/processors/while"}},i={},u=[{value:"Parallelism",id:"parallelism",level:3},{value:"Fields",id:"fields",level:2},{value:"<code>module_path</code>",id:"module_path",level:3},{value:"<code>function</code>",id:"function",level:3}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"EXPERIMENTAL",type:"caution",children:(0,r.jsx)(t.p,{children:"This component is experimental and therefore subject to change or removal outside of major version releases."})}),"\n",(0,r.jsx)(t.p,{children:"Executes a function exported by a WASM module for each message."}),"\n",(0,r.jsx)(t.p,{children:"Introduced in version 4.11.0."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",children:'# Config fields, showing default values\nlabel: ""\nwasm:\n  module_path: "" # No default (required)\n  function: process\n'})}),"\n",(0,r.jsxs)(t.p,{children:["This processor uses ",(0,r.jsx)(t.a,{href:"https://github.com/tetratelabs/wazero",children:"Wazero"})," to execute a WASM module (with support for WASI), calling a specific function for each message being processed. From within the WASM module it is possible to query and mutate the message being processed via a suite of functions exported to the module."]}),"\n",(0,r.jsxs)(t.p,{children:["This ecosystem is delicate as WASM doesn't have a single clearly defined way to pass strings back and forth between the host and the module. In order to remedy this we're gradually working on introducing libraries and examples for multiple languages which can be found in ",(0,r.jsx)(t.a,{href:"https://github.com/warpstreamlabs/bento/tree/main/public/wasm/README.md",children:"the codebase"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"These examples, as well as the processor itself, is a work in progress."}),"\n",(0,r.jsx)(t.h3,{id:"parallelism",children:"Parallelism"}),"\n",(0,r.jsxs)(t.p,{children:["It's not currently possible to execute a single WASM runtime across parallel threads with this processor. Therefore, in order to support parallel processing this processor implements pooling of module runtimes. Ideally your WASM module shouldn't depend on any global state, but if it does then you need to ensure the processor ",(0,r.jsx)(t.a,{href:"/docs/configuration/processing_pipelines",children:"is only run on a single thread"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(t.h3,{id:"module_path",children:(0,r.jsx)(t.code,{children:"module_path"})}),"\n",(0,r.jsx)(t.p,{children:"The path of the target WASM module to execute."}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"string"})]}),"\n",(0,r.jsx)(t.h3,{id:"function",children:(0,r.jsx)(t.code,{children:"function"})}),"\n",(0,r.jsx)(t.p,{children:"The name of the function exported by the target WASM module to run for each message."}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"string"}),(0,r.jsx)(t.br,{}),"\n","Default: ",(0,r.jsx)(t.code,{children:'"process"'})]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},85162:function(e,t,n){n.d(t,{Z:function(){return a}});n(67294);var r=n(86010),s={tabItem:"tabItem_Ymn6"},o=n(85893);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:n,children:t})}},74866:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(67294),s=n(86010),o=n(12466),a=n(16550),l=n(20469),i=n(91980),u=n(67392),c=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=p(e),[a,i]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const s=null!=(t=r.find((e=>e.default)))?t:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[u,d]=m({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[s,o]=(0,c.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),g=(()=>{const e=null!=u?u:f;return h({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},v=n(85893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),s=l[n].value;s!==r&&(u(t),a(s))},d=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var r;const t=i.indexOf(e.currentTarget)+1;n=null!=(r=i[t])?r:i[0];break}case"ArrowLeft":{var s;const t=i.indexOf(e.currentTarget)-1;n=null!=(s=i[t])?s:i[i.length-1];break}}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,s.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},11151:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var r=n(67294);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);