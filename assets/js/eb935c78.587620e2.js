"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[3738],{47894:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});var r=t(85893),a=t(11151),l=t(74866),s=t(85162);const i={title:"memcached",slug:"memcached",type:"cache",status:"stable",name:"memcached"},c=void 0,o={id:"components/caches/memcached",title:"memcached",description:"\x3c!--",source:"@site/docs/components/caches/memcached.md",sourceDirName:"components/caches",slug:"/components/caches/memcached",permalink:"/docs/components/caches/memcached",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/caches/memcached.md",tags:[],version:"current",frontMatter:{title:"memcached",slug:"memcached",type:"cache",status:"stable",name:"memcached"},sidebar:"docs",previous:{title:"lru",permalink:"/docs/components/caches/lru"},next:{title:"memory",permalink:"/docs/components/caches/memory"}},u={},d=[{value:"Fields",id:"fields",level:2},{value:"<code>addresses</code>",id:"addresses",level:3},{value:"<code>prefix</code>",id:"prefix",level:3},{value:"<code>default_ttl</code>",id:"default_ttl",level:3},{value:"<code>retries</code>",id:"retries",level:3},{value:"<code>retries.initial_interval</code>",id:"retriesinitial_interval",level:3},{value:"<code>retries.max_interval</code>",id:"retriesmax_interval",level:3},{value:"<code>retries.max_elapsed_time</code>",id:"retriesmax_elapsed_time",level:3}];function m(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Connects to a cluster of memcached services, a prefix can be specified to allow multiple cache types to share a memcached cluster under different namespaces."}),"\n",(0,r.jsxs)(l.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,r.jsx)(s.Z,{value:"common",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\nlabel: ""\nmemcached:\n  addresses: [] # No default (required)\n  prefix: "" # No default (optional)\n  default_ttl: 300s\n'})})}),(0,r.jsx)(s.Z,{value:"advanced",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\nlabel: ""\nmemcached:\n  addresses: [] # No default (required)\n  prefix: "" # No default (optional)\n  default_ttl: 300s\n  retries:\n    initial_interval: 1s\n    max_interval: 5s\n    max_elapsed_time: 30s\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(n.h3,{id:"addresses",children:(0,r.jsx)(n.code,{children:"addresses"})}),"\n",(0,r.jsx)(n.p,{children:"A list of addresses of memcached servers to use."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"array"})]}),"\n",(0,r.jsx)(n.h3,{id:"prefix",children:(0,r.jsx)(n.code,{children:"prefix"})}),"\n",(0,r.jsx)(n.p,{children:"An optional string to prefix item keys with in order to prevent collisions with similar services."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"default_ttl",children:(0,r.jsx)(n.code,{children:"default_ttl"})}),"\n",(0,r.jsx)(n.p,{children:"A default TTL to set for items, calculated from the moment the item is cached."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"300s"'})]}),"\n",(0,r.jsx)(n.h3,{id:"retries",children:(0,r.jsx)(n.code,{children:"retries"})}),"\n",(0,r.jsx)(n.p,{children:"Determine time intervals and cut offs for retry attempts."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsx)(n.h3,{id:"retriesinitial_interval",children:(0,r.jsx)(n.code,{children:"retries.initial_interval"})}),"\n",(0,r.jsx)(n.p,{children:"The initial period to wait between retry attempts."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"1s"'})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\ninitial_interval: 50ms\n\ninitial_interval: 1s\n"})}),"\n",(0,r.jsx)(n.h3,{id:"retriesmax_interval",children:(0,r.jsx)(n.code,{children:"retries.max_interval"})}),"\n",(0,r.jsx)(n.p,{children:"The maximum period to wait between retry attempts"}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"5s"'})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nmax_interval: 5s\n\nmax_interval: 1m\n"})}),"\n",(0,r.jsx)(n.h3,{id:"retriesmax_elapsed_time",children:(0,r.jsx)(n.code,{children:"retries.max_elapsed_time"})}),"\n",(0,r.jsx)(n.p,{children:"The maximum overall period of time to spend on retry attempts before the request is aborted."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"30s"'})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nmax_elapsed_time: 1m\n\nmax_elapsed_time: 1h\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return s}});t(67294);var r=t(86010),a={tabItem:"tabItem_Ymn6"},l=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return _}});var r=t(67294),a=t(86010),l=t(12466),s=t(16550),i=t(20469),c=t(91980),o=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=m(e),[s,c]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(n=r.find((e=>e.default)))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[o,d]=p({queryString:t,groupId:a}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[a,l]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),v=(()=>{const e=null!=o?o:f;return h({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),x(e)}),[d,x,l]),tabValues:l}}var x=t(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},b=t(85893);function j(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=i[t].value;a!==r&&(o(n),s(a))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const n=c.indexOf(e.currentTarget)+1;t=null!=(r=c[n])?r:c[0];break}case"ArrowLeft":{var a;const n=c.indexOf(e.currentTarget)-1;t=null!=(a=c[n])?a:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function _(e){const n=(0,x.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return s}});var r=t(67294);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);