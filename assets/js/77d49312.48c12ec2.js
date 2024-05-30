"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[5762],{97430:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return d}});var r=t(85893),o=t(11151),s=t(74866),l=t(85162);const a={title:"while",slug:"while",type:"processor",status:"stable",categories:["Composition"],name:"while"},c=void 0,i={id:"components/processors/while",title:"while",description:"\x3c!--",source:"@site/docs/components/processors/while.md",sourceDirName:"components/processors",slug:"/components/processors/while",permalink:"/docs/components/processors/while",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/while.md",tags:[],version:"current",frontMatter:{title:"while",slug:"while",type:"processor",status:"stable",categories:["Composition"],name:"while"},sidebar:"docs",previous:{title:"wasm",permalink:"/docs/components/processors/wasm"},next:{title:"workflow",permalink:"/docs/components/processors/workflow"}},u={},d=[{value:"Fields",id:"fields",level:2},{value:"<code>at_least_once</code>",id:"at_least_once",level:3},{value:"<code>max_loops</code>",id:"max_loops",level:3},{value:"<code>check</code>",id:"check",level:3},{value:"<code>processors</code>",id:"processors",level:3}];function h(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["A processor that checks a ",(0,r.jsx)(n.a,{href:"/docs/guides/bloblang/about/",children:"Bloblang query"})," against each batch of messages and executes child processors on them for as long as the query resolves to true."]}),"\n",(0,r.jsxs)(s.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,r.jsx)(l.Z,{value:"common",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\nlabel: ""\nwhile:\n  at_least_once: false\n  check: ""\n  processors: [] # No default (required)\n'})})}),(0,r.jsx)(l.Z,{value:"advanced",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\nlabel: ""\nwhile:\n  at_least_once: false\n  max_loops: 0\n  check: ""\n  processors: [] # No default (required)\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The field ",(0,r.jsx)(n.code,{children:"at_least_once"}),", if true, ensures that the child processors are always executed at least one time (like a do .. while loop.)"]}),"\n",(0,r.jsxs)(n.p,{children:["The field ",(0,r.jsx)(n.code,{children:"max_loops"}),", if greater than zero, caps the number of loops for a message batch to this value."]}),"\n",(0,r.jsx)(n.p,{children:"If following a loop execution the number of messages in a batch is reduced to zero the loop is exited regardless of the condition result. If following a loop execution there are more than 1 message batches the query is checked against the first batch only."}),"\n",(0,r.jsxs)(n.p,{children:["The conditions of this processor are applied across entire message batches. You can find out more about batching ",(0,r.jsx)(n.a,{href:"/docs/configuration/batching",children:"in this doc"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(n.h3,{id:"at_least_once",children:(0,r.jsx)(n.code,{children:"at_least_once"})}),"\n",(0,r.jsx)(n.p,{children:"Whether to always run the child processors at least one time."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"bool"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsx)(n.h3,{id:"max_loops",children:(0,r.jsx)(n.code,{children:"max_loops"})}),"\n",(0,r.jsx)(n.p,{children:"An optional maximum number of loops to execute. Helps protect against accidentally creating infinite loops."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"int"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"0"})]}),"\n",(0,r.jsx)(n.h3,{id:"check",children:(0,r.jsx)(n.code,{children:"check"})}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"/docs/guides/bloblang/about/",children:"Bloblang query"})," that should return a boolean value indicating whether the while loop should execute again."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\ncheck: errored()\n\ncheck: this.urls.unprocessed.length() > 0\n"})}),"\n",(0,r.jsx)(n.h3,{id:"processors",children:(0,r.jsx)(n.code,{children:"processors"})}),"\n",(0,r.jsx)(n.p,{children:"A list of child processors to execute on each loop."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"array"})]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return l}});t(67294);var r=t(86010),o={tabItem:"tabItem_Ymn6"},s=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(67294),o=t(86010),s=t(12466),l=t(16550),a=t(20469),c=t(91980),i=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const o=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=h(e),[l,c]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const o=null!=(n=r.find((e=>e.default)))?n:r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[i,d]=f({queryString:t,groupId:o}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[o,s]=(0,u.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),x=(()=>{const e=null!=i?i:m;return p({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(72389),x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},v=t(85893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),o=a[t].value;o!==r&&(i(n),l(o))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const n=c.indexOf(e.currentTarget)+1;t=null!=(r=c[n])?r:c[0];break}case"ArrowLeft":{var o;const n=c.indexOf(e.currentTarget)-1;t=null!=(o=c[n])?o:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,o.Z)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var r=t(67294);const o={},s=r.createContext(o);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);