"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[7871],{99832:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return i}});var t=n(85893),s=n(11151);n(74866),n(85162);const o={title:"try",slug:"try",type:"processor",status:"stable",categories:["Composition"],name:"try"},a=void 0,c={id:"components/processors/try",title:"try",description:"\x3c!--",source:"@site/docs/components/processors/try.md",sourceDirName:"components/processors",slug:"/components/processors/try",permalink:"/docs/components/processors/try",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/try.md",tags:[],version:"current",frontMatter:{title:"try",slug:"try",type:"processor",status:"stable",categories:["Composition"],name:"try"},sidebar:"docs",previous:{title:"sync_response",permalink:"/docs/components/processors/sync_response"},next:{title:"unarchive",permalink:"/docs/components/processors/unarchive"}},l={},i=[{value:"Nesting within a catch block",id:"nesting-within-a-catch-block",level:3}];function u(e){const r={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Executes a list of child processors on messages only if no prior processors have failed (or the errors have been cleared)."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yml",children:'# Config fields, showing default values\nlabel: ""\ntry: []\n'})}),"\n",(0,t.jsxs)(r.p,{children:["This processor behaves similarly to the ",(0,t.jsx)(r.a,{href:"/docs/components/processors/for_each",children:(0,t.jsx)(r.code,{children:"for_each"})})," processor, where a list of child processors are applied to individual messages of a batch. However, if a message has failed any prior processor (before or during the try block) then that message will skip all following processors."]}),"\n",(0,t.jsx)(r.p,{children:"For example, with the following config:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - resource: foo\n    - try:\n      - resource: bar\n      - resource: baz\n      - resource: buz\n"})}),"\n",(0,t.jsxs)(r.p,{children:["If the processor ",(0,t.jsx)(r.code,{children:"bar"})," fails for a particular message, that message will skip the processors ",(0,t.jsx)(r.code,{children:"baz"})," and ",(0,t.jsx)(r.code,{children:"buz"}),". Similarly, if ",(0,t.jsx)(r.code,{children:"bar"})," succeeds but ",(0,t.jsx)(r.code,{children:"baz"})," does not then ",(0,t.jsx)(r.code,{children:"buz"})," will be skipped. If the processor ",(0,t.jsx)(r.code,{children:"foo"})," fails for a message then none of ",(0,t.jsx)(r.code,{children:"bar"}),", ",(0,t.jsx)(r.code,{children:"baz"})," or ",(0,t.jsx)(r.code,{children:"buz"})," are executed on that message."]}),"\n",(0,t.jsxs)(r.p,{children:["This processor is useful for when child processors depend on the successful output of previous processors. This processor can be followed with a ",(0,t.jsx)(r.a,{href:"/docs/components/processors/catch",children:"catch"})," processor for defining child processors to be applied only to failed messages."]}),"\n",(0,t.jsxs)(r.p,{children:["More information about error handing can be found ",(0,t.jsx)(r.a,{href:"/docs/configuration/error_handling",children:"here"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"nesting-within-a-catch-block",children:"Nesting within a catch block"}),"\n",(0,t.jsxs)(r.p,{children:["In some cases it might be useful to nest a try block within a catch block, since the ",(0,t.jsxs)(r.a,{href:"/docs/components/processors/catch",children:[(0,t.jsx)(r.code,{children:"catch"})," processor"]})," only clears errors ",(0,t.jsx)(r.em,{children:"after"})," executing its child processors this means a nested try processor will not execute unless the errors are explicitly cleared beforehand."]}),"\n",(0,t.jsx)(r.p,{children:"This can be done by inserting an empty catch block before the try block like as follows:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'pipeline:\n  processors:\n    - resource: foo\n    - catch:\n      - log:\n          level: ERROR\n          message: "Foo failed due to: ${! error() }"\n      - catch: [] # Clear prior error\n      - try:\n        - resource: bar\n        - resource: baz\n'})})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},85162:function(e,r,n){n.d(r,{Z:function(){return a}});n(67294);var t=n(86010),s={tabItem:"tabItem_Ymn6"},o=n(85893);function a(e){let{children:r,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,a),hidden:n,children:r})}},74866:function(e,r,n){n.d(r,{Z:function(){return w}});var t=n(67294),s=n(86010),o=n(12466),a=n(16550),c=n(20469),l=n(91980),i=n(67392),u=n(50012);function d(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=null!=r?r:function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}(n);return function(e){const r=(0,i.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:n}=e;const s=(0,a.k6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,l._X)(o),(0,t.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(s.location.search);r.set(o,e),s.replace({...s.location,search:r.toString()})}),[o,s])]}function b(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,o=h(e),[a,l]=(0,t.useState)((()=>function(e){var r;let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const s=null!=(r=t.find((e=>e.default)))?r:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:o}))),[i,d]=f({queryString:n,groupId:s}),[b,m]=function(e){let{groupId:r}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(r),[s,o]=(0,u.Nk)(n);return[s,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),g=(()=>{const e=null!=i?i:b;return p({value:e,tabValues:o})?e:null})();(0,c.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);l(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},v=n(85893);function x(e){let{className:r,block:n,selectedValue:t,selectValue:a,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),u=e=>{const r=e.currentTarget,n=l.indexOf(r),s=c[n].value;s!==t&&(i(r),a(s))},d=e=>{var r;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var t;const r=l.indexOf(e.currentTarget)+1;n=null!=(t=l[r])?t:l[0];break}case"ArrowLeft":{var s;const r=l.indexOf(e.currentTarget)-1;n=null!=(s=l[r])?s:l[l.length-1];break}}null==(r=n)||r.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},r),children:c.map((e=>{let{value:r,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===r}),children:null!=n?n:r},r)}))})}function y(e){let{lazy:r,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function j(e){const r=b(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...r}),(0,v.jsx)(y,{...e,...r})]})}function w(e){const r=(0,m.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(r))}},11151:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return a}});var t=n(67294);const s={},o=t.createContext(s);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);