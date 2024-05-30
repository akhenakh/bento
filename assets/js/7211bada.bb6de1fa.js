"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[4956],{24801:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d}});var s=t(85893),r=t(11151),i=t(74866),o=t(85162);const a={title:"gcp_pubsub",slug:"gcp_pubsub",type:"input",status:"stable",categories:["Services","GCP"],name:"gcp_pubsub"},c=void 0,l={id:"components/inputs/gcp_pubsub",title:"gcp_pubsub",description:"\x3c!--",source:"@site/docs/components/inputs/gcp_pubsub.md",sourceDirName:"components/inputs",slug:"/components/inputs/gcp_pubsub",permalink:"/docs/components/inputs/gcp_pubsub",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/inputs/gcp_pubsub.md",tags:[],version:"current",frontMatter:{title:"gcp_pubsub",slug:"gcp_pubsub",type:"input",status:"stable",categories:["Services","GCP"],name:"gcp_pubsub"},sidebar:"docs",previous:{title:"gcp_cloud_storage",permalink:"/docs/components/inputs/gcp_cloud_storage"},next:{title:"generate",permalink:"/docs/components/inputs/generate"}},u={},d=[{value:"Metadata",id:"metadata",level:3},{value:"Fields",id:"fields",level:2},{value:"<code>project</code>",id:"project",level:3},{value:"<code>subscription</code>",id:"subscription",level:3},{value:"<code>endpoint</code>",id:"endpoint",level:3},{value:"<code>sync</code>",id:"sync",level:3},{value:"<code>max_outstanding_messages</code>",id:"max_outstanding_messages",level:3},{value:"<code>max_outstanding_bytes</code>",id:"max_outstanding_bytes",level:3},{value:"<code>create_subscription</code>",id:"create_subscription",level:3},{value:"<code>create_subscription.enabled</code>",id:"create_subscriptionenabled",level:3},{value:"<code>create_subscription.topic</code>",id:"create_subscriptiontopic",level:3}];function p(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Consumes messages from a GCP Cloud Pub/Sub subscription."}),"\n",(0,s.jsxs)(i.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,s.jsx)(o.Z,{value:"common",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\ninput:\n  label: ""\n  gcp_pubsub:\n    project: "" # No default (required)\n    subscription: "" # No default (required)\n    endpoint: ""\n    sync: false\n    max_outstanding_messages: 1000\n    max_outstanding_bytes: 1e+09\n'})})}),(0,s.jsx)(o.Z,{value:"advanced",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\ninput:\n  label: ""\n  gcp_pubsub:\n    project: "" # No default (required)\n    subscription: "" # No default (required)\n    endpoint: ""\n    sync: false\n    max_outstanding_messages: 1000\n    max_outstanding_bytes: 1e+09\n    create_subscription:\n      enabled: false\n      topic: ""\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["For information on how to set up credentials check out ",(0,s.jsx)(n.a,{href:"https://cloud.google.com/docs/authentication/production",children:"this guide"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"Metadata"}),"\n",(0,s.jsx)(n.p,{children:"This input adds the following metadata fields to each message:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"- gcp_pubsub_publish_time_unix - The time at which the message was published to the topic.\n- gcp_pubsub_delivery_attempt - When dead lettering is enabled, this is set to the number of times PubSub has attempted to deliver a message.\n- All message attributes\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can access these metadata fields using ",(0,s.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"function interpolation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsx)(n.h3,{id:"project",children:(0,s.jsx)(n.code,{children:"project"})}),"\n",(0,s.jsx)(n.p,{children:"The project ID of the target subscription."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h3,{id:"subscription",children:(0,s.jsx)(n.code,{children:"subscription"})}),"\n",(0,s.jsx)(n.p,{children:"The target subscription ID."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h3,{id:"endpoint",children:(0,s.jsx)(n.code,{children:"endpoint"})}),"\n",(0,s.jsxs)(n.p,{children:["An optional endpoint to override the default of ",(0,s.jsx)(n.code,{children:"pubsub.googleapis.com:443"}),". This can be used to connect to a region specific pubsub endpoint. For a list of valid values check out ",(0,s.jsx)(n.a,{href:"https://cloud.google.com/pubsub/docs/reference/service_apis_overview#list_of_regional_endpoints",children:"this document."})]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nendpoint: us-central1-pubsub.googleapis.com:443\n\nendpoint: us-west3-pubsub.googleapis.com:443\n"})}),"\n",(0,s.jsx)(n.h3,{id:"sync",children:(0,s.jsx)(n.code,{children:"sync"})}),"\n",(0,s.jsx)(n.p,{children:"Enable synchronous pull mode."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"bool"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(n.h3,{id:"max_outstanding_messages",children:(0,s.jsx)(n.code,{children:"max_outstanding_messages"})}),"\n",(0,s.jsx)(n.p,{children:"The maximum number of outstanding pending messages to be consumed at a given time."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"1000"})]}),"\n",(0,s.jsx)(n.h3,{id:"max_outstanding_bytes",children:(0,s.jsx)(n.code,{children:"max_outstanding_bytes"})}),"\n",(0,s.jsx)(n.p,{children:"The maximum number of outstanding pending messages to be consumed measured in bytes."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"1000000000"})]}),"\n",(0,s.jsx)(n.h3,{id:"create_subscription",children:(0,s.jsx)(n.code,{children:"create_subscription"})}),"\n",(0,s.jsx)(n.p,{children:"Allows you to configure the input subscription and creates if it doesn't exist."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"object"})]}),"\n",(0,s.jsx)(n.h3,{id:"create_subscriptionenabled",children:(0,s.jsx)(n.code,{children:"create_subscription.enabled"})}),"\n",(0,s.jsx)(n.p,{children:"Whether to configure subscription or not."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"bool"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(n.h3,{id:"create_subscriptiontopic",children:(0,s.jsx)(n.code,{children:"create_subscription.topic"})}),"\n",(0,s.jsx)(n.p,{children:"Defines the topic that the subscription should be vinculated to."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return o}});t(67294);var s=t(86010),r={tabItem:"tabItem_Ymn6"},i=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,o),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return y}});var s=t(67294),r=t(86010),i=t(12466),o=t(16550),a=t(20469),c=t(91980),l=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=p(e),[o,c]=(0,s.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=s.find((e=>e.default)))?n:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[l,d]=b({queryString:t,groupId:r}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,i]=(0,u.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),g=(()=>{const e=null!=l?l:m;return h({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=t(72389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},x=t(85893);function j(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),r=a[t].value;r!==s&&(l(n),o(r))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var s;const n=c.indexOf(e.currentTarget)+1;t=null!=(s=c[n])?s:c[0];break}case"ArrowLeft":{var r;const n=c.indexOf(e.currentTarget)-1;t=null!=(r=c[n])?r:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===n}),children:null!=t?t:n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function _(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,x.jsx)(_,{...e,children:d(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var s=t(67294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);