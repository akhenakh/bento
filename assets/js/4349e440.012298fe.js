"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[2925],{7021:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var s=n(85893),r=n(11151),a=n(74866),o=n(85162);const l={title:"sqlite",slug:"sqlite",type:"buffer",status:"stable",categories:["Utility"],name:"sqlite"},i=void 0,u={id:"components/buffers/sqlite",title:"sqlite",description:"\x3c!--",source:"@site/docs/components/buffers/sqlite.md",sourceDirName:"components/buffers",slug:"/components/buffers/sqlite",permalink:"/docs/components/buffers/sqlite",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/buffers/sqlite.md",tags:[],version:"current",frontMatter:{title:"sqlite",slug:"sqlite",type:"buffer",status:"stable",categories:["Utility"],name:"sqlite"},sidebar:"docs",previous:{title:"none",permalink:"/docs/components/buffers/none"},next:{title:"system_window",permalink:"/docs/components/buffers/system_window"}},c={},d=[{value:"Delivery Guarantees",id:"delivery-guarantees",level:2},{value:"Batching",id:"batching",level:2},{value:"Fields",id:"fields",level:2},{value:"<code>path</code>",id:"path",level:3},{value:"<code>pre_processors</code>",id:"pre_processors",level:3},{value:"<code>post_processors</code>",id:"post_processors",level:3},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Stores messages in an SQLite database and acknowledges them at the input level."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:'# Config fields, showing default values\nbuffer:\n  sqlite:\n    path: "" # No default (required)\n    pre_processors: [] # No default (optional)\n    post_processors: [] # No default (optional)\n'})}),"\n",(0,s.jsx)(t.p,{children:"Stored messages are then consumed as a stream from the database and deleted only once they are successfully sent at the output level. If the service is restarted Bento will make a best attempt to finish delivering messages that are already read from the database, and when it starts again it will consume from the oldest message that has not yet been delivered."}),"\n",(0,s.jsx)(t.h2,{id:"delivery-guarantees",children:"Delivery Guarantees"}),"\n",(0,s.jsx)(t.p,{children:"Messages are not acknowledged at the input level until they have been added to the SQLite database, and they are not removed from the SQLite database until they have been successfully delivered. This means at-least-once delivery guarantees are preserved in cases where the service is shut down unexpectedly. However, since this process relies on interaction with the disk (wherever the SQLite DB is stored) these delivery guarantees are not resilient to disk corruption or loss."}),"\n",(0,s.jsx)(t.h2,{id:"batching",children:"Batching"}),"\n",(0,s.jsx)(t.p,{children:"Messages that are logically batched at the point where they are added to the buffer will continue to be associated with that batch when they are consumed. This buffer is also more efficient when storing messages within batches, and therefore it is recommended to use batching at the input level in high-throughput use cases even if they are not required for processing."}),"\n",(0,s.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsx)(t.h3,{id:"path",children:(0,s.jsx)(t.code,{children:"path"})}),"\n",(0,s.jsx)(t.p,{children:"The path of the database file, which will be created if it does not already exist."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"string"})]}),"\n",(0,s.jsx)(t.h3,{id:"pre_processors",children:(0,s.jsx)(t.code,{children:"pre_processors"})}),"\n",(0,s.jsx)(t.p,{children:"An optional list of processors to apply to messages before they are stored within the buffer. These processors are useful for compressing, archiving or otherwise reducing the data in size before it's stored on disk."}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"array"})]}),"\n",(0,s.jsx)(t.h3,{id:"post_processors",children:(0,s.jsx)(t.code,{children:"post_processors"})}),"\n",(0,s.jsxs)(t.p,{children:["An optional list of processors to apply to messages after they are consumed from the buffer. These processors are useful for undoing any compression, archiving, etc that may have been done by your ",(0,s.jsx)(t.code,{children:"pre_processors"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Type: ",(0,s.jsx)(t.code,{children:"array"})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(a.Z,{defaultValue:"Batching for optimisation",values:[{label:"Batching for optimisation",value:"Batching for optimisation"}],children:(0,s.jsxs)(o.Z,{value:"Batching for optimisation",children:[(0,s.jsxs)(t.p,{children:["Batching at the input level greatly increases the throughput of this buffer. If logical batches aren't needed for processing add a ",(0,s.jsxs)(t.a,{href:"/docs/components/processors/split",children:[(0,s.jsx)(t.code,{children:"split"})," processor"]})," to the ",(0,s.jsx)(t.code,{children:"post_processors"}),"."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"input:\n  batched:\n    child:\n      sql_select:\n        driver: postgres\n        dsn: postgres://foouser:foopass@localhost:5432/testdb?sslmode=disable\n        table: footable\n        columns: [ '*' ]\n    policy:\n      count: 100\n      period: 500ms\n\nbuffer:\n  sqlite:\n    path: ./foo.db\n    post_processors:\n      - split: {}\n"})})]})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},85162:function(e,t,n){n.d(t,{Z:function(){return o}});n(67294);var s=n(86010),r={tabItem:"tabItem_Ymn6"},a=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,o),hidden:n,children:t})}},74866:function(e,t,n){n.d(t,{Z:function(){return j}});var s=n(67294),r=n(86010),a=n(12466),o=n(16550),l=n(20469),i=n(91980),u=n(67392),c=n(50012);function d(e){var t,n;return null!=(t=null==(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[o,i]=(0,s.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=s.find((e=>e.default)))?t:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=f({queryString:n,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,a]=(0,c.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),v=(()=>{const e=null!=u?u:m;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=n(85893);function y(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=l[n].value;r!==s&&(u(t),o(r))},d=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var s;const t=i.indexOf(e.currentTarget)+1;n=null!=(s=i[t])?s:i[0];break}case"ArrowLeft":{var r;const t=i.indexOf(e.currentTarget)-1;n=null!=(r=i[t])?r:i[i.length-1];break}}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.Z)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===t}),children:null!=n?n:t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},11151:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var s=n(67294);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);