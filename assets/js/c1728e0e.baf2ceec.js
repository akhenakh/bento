"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[6086],{57536:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(85893),s=n(11151);n(74866),n(85162);const o={title:"sync_response",slug:"sync_response",type:"processor",status:"stable",categories:["Utility"],name:"sync_response"},a=void 0,u={id:"components/processors/sync_response",title:"sync_response",description:"\x3c!--",source:"@site/docs/components/processors/sync_response.md",sourceDirName:"components/processors",slug:"/components/processors/sync_response",permalink:"/docs/components/processors/sync_response",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/sync_response.md",tags:[],version:"current",frontMatter:{title:"sync_response",slug:"sync_response",type:"processor",status:"stable",categories:["Utility"],name:"sync_response"},sidebar:"docs",previous:{title:"switch",permalink:"/docs/components/processors/switch"},next:{title:"try",permalink:"/docs/components/processors/try"}},l={},c=[];function i(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Adds the payload in its current state as a synchronous response to the input source, where it is dealt with according to that specific input type."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",children:'# Config fields, showing default values\nlabel: ""\nsync_response: {}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["For most inputs this mechanism is ignored entirely, in which case the sync response is dropped without penalty. It is therefore safe to use this processor even when combining input types that might not have support for sync responses. An example of an input able to utilise this is the ",(0,r.jsx)(t.code,{children:"http_server"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["For more information please read ",(0,r.jsx)(t.a,{href:"/docs/guides/sync_responses",children:"Synchronous Responses"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},85162:function(e,t,n){n.d(t,{Z:function(){return a}});n(67294);var r=n(86010),s={tabItem:"tabItem_Ymn6"},o=n(85893);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:n,children:t})}},74866:function(e,t,n){n.d(t,{Z:function(){return _}});var r=n(67294),s=n(86010),o=n(12466),a=n(16550),u=n(20469),l=n(91980),c=n(67392),i=n(50012);function p(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=d(e),[a,l]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const s=null!=(t=r.find((e=>e.default)))?t:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[c,p]=h({queryString:n,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[s,o]=(0,i.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),v=(()=>{const e=null!=c?c:m;return f({value:e,tabValues:o})?e:null})();(0,u.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);l(e),p(e),b(e)}),[p,b,o]),tabValues:o}}var b=n(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},y=n(85893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:u}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),i=e=>{const t=e.currentTarget,n=l.indexOf(t),s=u[n].value;s!==r&&(c(t),a(s))},p=e=>{var t;let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{var r;const t=l.indexOf(e.currentTarget)+1;n=null!=(r=l[t])?r:l[0];break}case"ArrowLeft":{var s;const t=l.indexOf(e.currentTarget)-1;n=null!=(s=l[t])?s:l[l.length-1];break}}null==(t=n)||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:p,onClick:i,...o,className:(0,s.Z)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,y.jsx)(g,{...e,...t}),(0,y.jsx)(w,{...e,...t})]})}function _(e){const t=(0,b.Z)();return(0,y.jsx)(x,{...e,children:p(e.children)},String(t))}},11151:function(e,t,n){n.d(t,{Z:function(){return u},a:function(){return a}});var r=n(67294);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);