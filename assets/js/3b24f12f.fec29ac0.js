"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[3724],{19616:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return i}});var s=t(85893),r=t(11151);t(74866),t(85162);const l={title:"socket_server",slug:"socket_server",type:"input",status:"stable",categories:["Network"],name:"socket_server"},o=void 0,a={id:"components/inputs/socket_server",title:"socket_server",description:"\x3c!--",source:"@site/docs/components/inputs/socket_server.md",sourceDirName:"components/inputs",slug:"/components/inputs/socket_server",permalink:"/docs/components/inputs/socket_server",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/inputs/socket_server.md",tags:[],version:"current",frontMatter:{title:"socket_server",slug:"socket_server",type:"input",status:"stable",categories:["Network"],name:"socket_server"},sidebar:"docs",previous:{title:"socket",permalink:"/docs/components/inputs/socket"},next:{title:"sql_raw",permalink:"/docs/components/inputs/sql_raw"}},c={},i=[{value:"Fields",id:"fields",level:2},{value:"<code>network</code>",id:"network",level:3},{value:"<code>address</code>",id:"address",level:3},{value:"<code>address_cache</code>",id:"address_cache",level:3},{value:"<code>tls</code>",id:"tls",level:3},{value:"<code>tls.cert_file</code>",id:"tlscert_file",level:3},{value:"<code>tls.key_file</code>",id:"tlskey_file",level:3},{value:"<code>tls.self_signed</code>",id:"tlsself_signed",level:3},{value:"<code>auto_replay_nacks</code>",id:"auto_replay_nacks",level:3},{value:"<code>scanner</code>",id:"scanner",level:3}];function d(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Creates a server that receives a stream of messages over a tcp, udp or unix socket."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Config fields, showing default values\ninput:\n  label: ""\n  socket_server:\n    network: "" # No default (required)\n    address: /tmp/bento.sock # No default (required)\n    address_cache: "" # No default (optional)\n    tls:\n      cert_file: "" # No default (optional)\n      key_file: "" # No default (optional)\n      self_signed: false\n    auto_replay_nacks: true\n    scanner:\n      lines: {}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsx)(n.h3,{id:"network",children:(0,s.jsx)(n.code,{children:"network"})}),"\n",(0,s.jsx)(n.p,{children:"A network type to accept."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Options: ",(0,s.jsx)(n.code,{children:"unix"}),", ",(0,s.jsx)(n.code,{children:"tcp"}),", ",(0,s.jsx)(n.code,{children:"udp"}),", ",(0,s.jsx)(n.code,{children:"tls"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"address",children:(0,s.jsx)(n.code,{children:"address"})}),"\n",(0,s.jsx)(n.p,{children:"The address to listen from."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\naddress: /tmp/bento.sock\n\naddress: 0.0.0.0:6000\n"})}),"\n",(0,s.jsx)(n.h3,{id:"address_cache",children:(0,s.jsx)(n.code,{children:"address_cache"})}),"\n",(0,s.jsxs)(n.p,{children:["An optional ",(0,s.jsx)(n.a,{href:"/docs/components/caches/about",children:(0,s.jsx)(n.code,{children:"cache"})})," within which this input should write it's bound address once known. The key of the cache item containing the address will be the label of the component suffixed with ",(0,s.jsx)(n.code,{children:"_address"})," (e.g. ",(0,s.jsx)(n.code,{children:"foo_address"}),"), or ",(0,s.jsx)(n.code,{children:"socket_server_address"})," when a label has not been provided. This is useful in situations where the address is dynamically allocated by the server (",(0,s.jsx)(n.code,{children:"127.0.0.1:0"}),") and you want to store the allocated address somewhere for reference by other systems and components."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Requires version 4.25.0 or newer"]}),"\n",(0,s.jsx)(n.h3,{id:"tls",children:(0,s.jsx)(n.code,{children:"tls"})}),"\n",(0,s.jsxs)(n.p,{children:["TLS specific configuration, valid when the ",(0,s.jsx)(n.code,{children:"network"})," is set to ",(0,s.jsx)(n.code,{children:"tls"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"object"})]}),"\n",(0,s.jsx)(n.h3,{id:"tlscert_file",children:(0,s.jsx)(n.code,{children:"tls.cert_file"})}),"\n",(0,s.jsx)(n.p,{children:"PEM encoded certificate for use with TLS."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h3,{id:"tlskey_file",children:(0,s.jsx)(n.code,{children:"tls.key_file"})}),"\n",(0,s.jsx)(n.p,{children:"PEM encoded private key for use with TLS."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsself_signed",children:(0,s.jsx)(n.code,{children:"tls.self_signed"})}),"\n",(0,s.jsx)(n.p,{children:"Whether to generate self signed certificates."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"bool"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(n.h3,{id:"auto_replay_nacks",children:(0,s.jsx)(n.code,{children:"auto_replay_nacks"})}),"\n",(0,s.jsxs)(n.p,{children:["Whether messages that are rejected (nacked) at the output level should be automatically replayed indefinitely, eventually resulting in back pressure if the cause of the rejections is persistent. If set to ",(0,s.jsx)(n.code,{children:"false"})," these messages will instead be deleted. Disabling auto replays can greatly improve memory efficiency of high throughput streams as the original shape of the data can be discarded immediately upon consumption and mutation."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"bool"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsx)(n.h3,{id:"scanner",children:(0,s.jsx)(n.code,{children:"scanner"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/components/scanners/about",children:"scanner"})," by which the stream of bytes consumed will be broken out into individual messages. Scanners are useful for processing large sources of data without holding the entirety of it within memory. For example, the ",(0,s.jsx)(n.code,{children:"csv"})," scanner allows you to process individual CSV rows without loading the entire CSV file in memory at once."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"scanner"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'{"lines":{}}'}),(0,s.jsx)(n.br,{}),"\n","Requires version 4.25.0 or newer"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return o}});t(67294);var s=t(86010),r={tabItem:"tabItem_Ymn6"},l=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,o),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return k}});var s=t(67294),r=t(86010),l=t(12466),o=t(16550),a=t(20469),c=t(91980),i=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=h(e),[o,c]=(0,s.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=s.find((e=>e.default)))?n:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[i,u]=f({queryString:t,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,l]=(0,d.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),v=(()=>{const e=null!=i?i:m;return p({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);c(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var b=t(72389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},x=t(85893);function j(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=a[t].value;r!==s&&(i(n),o(r))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const n=c.indexOf(e.currentTarget)+1;t=null!=(s=c[n])?s:c[0];break}case"ArrowLeft":{var r;const n=c.indexOf(e.currentTarget)-1;t=null!=(r=c[n])?r:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...l,className:(0,r.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":s===n}),children:null!=t?t:n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function g(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function k(e){const n=(0,b.Z)();return(0,x.jsx)(g,{...e,children:u(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var s=t(67294);const r={},l=s.createContext(r);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);