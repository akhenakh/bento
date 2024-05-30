"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[3829],{19897:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var s=t(85893),r=t(11151),o=t(74866),a=t(85162);const c={title:"azure_queue_storage",slug:"azure_queue_storage",type:"output",status:"beta",categories:["Services","Azure"],name:"azure_queue_storage"},i=void 0,l={id:"components/outputs/azure_queue_storage",title:"azure_queue_storage",description:"\x3c!--",source:"@site/docs/components/outputs/azure_queue_storage.md",sourceDirName:"components/outputs",slug:"/components/outputs/azure_queue_storage",permalink:"/docs/components/outputs/azure_queue_storage",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/outputs/azure_queue_storage.md",tags:[],version:"current",frontMatter:{title:"azure_queue_storage",slug:"azure_queue_storage",type:"output",status:"beta",categories:["Services","Azure"],name:"azure_queue_storage"},sidebar:"docs",previous:{title:"azure_cosmosdb",permalink:"/docs/components/outputs/azure_cosmosdb"},next:{title:"azure_table_storage",permalink:"/docs/components/outputs/azure_table_storage"}},u={},d=[{value:"Performance",id:"performance",level:2},{value:"Fields",id:"fields",level:2},{value:"<code>storage_account</code>",id:"storage_account",level:3},{value:"<code>storage_access_key</code>",id:"storage_access_key",level:3},{value:"<code>storage_connection_string</code>",id:"storage_connection_string",level:3},{value:"<code>storage_sas_token</code>",id:"storage_sas_token",level:3},{value:"<code>queue_name</code>",id:"queue_name",level:3},{value:"<code>ttl</code>",id:"ttl",level:3},{value:"<code>max_in_flight</code>",id:"max_in_flight",level:3},{value:"<code>batching</code>",id:"batching",level:3},{value:"<code>batching.count</code>",id:"batchingcount",level:3},{value:"<code>batching.byte_size</code>",id:"batchingbyte_size",level:3},{value:"<code>batching.period</code>",id:"batchingperiod",level:3},{value:"<code>batching.check</code>",id:"batchingcheck",level:3},{value:"<code>batching.processors</code>",id:"batchingprocessors",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{title:"BETA",type:"caution",children:(0,s.jsx)(n.p,{children:"This component is mostly stable but breaking changes could still be made outside of major version releases if a fundamental problem with the component is found."})}),"\n",(0,s.jsx)(n.p,{children:"Sends messages to an Azure Storage Queue."}),"\n",(0,s.jsx)(n.p,{children:"Introduced in version 3.36.0."}),"\n",(0,s.jsxs)(o.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,s.jsx)(a.Z,{value:"common",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\noutput:\n  label: ""\n  azure_queue_storage:\n    storage_account: ""\n    storage_access_key: ""\n    storage_connection_string: ""\n    storage_sas_token: ""\n    queue_name: "" # No default (required)\n    max_in_flight: 64\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n'})})}),(0,s.jsx)(a.Z,{value:"advanced",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\noutput:\n  label: ""\n  azure_queue_storage:\n    storage_account: ""\n    storage_access_key: ""\n    storage_connection_string: ""\n    storage_sas_token: ""\n    queue_name: "" # No default (required)\n    ttl: ""\n    max_in_flight: 64\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n      processors: [] # No default (optional)\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Only one authentication method is required, ",(0,s.jsx)(n.code,{children:"storage_connection_string"})," or ",(0,s.jsx)(n.code,{children:"storage_account"})," and ",(0,s.jsx)(n.code,{children:"storage_access_key"}),". If both are set then the ",(0,s.jsx)(n.code,{children:"storage_connection_string"})," is given priority."]}),"\n",(0,s.jsxs)(n.p,{children:["In order to set the ",(0,s.jsx)(n.code,{children:"queue_name"})," you can use function interpolations described ",(0,s.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"here"}),", which are calculated per message of a batch."]}),"\n",(0,s.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,s.jsxs)(n.p,{children:["This output benefits from sending multiple messages in flight in parallel for improved performance. You can tune the max number of in flight messages (or message batches) with the field ",(0,s.jsx)(n.code,{children:"max_in_flight"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This output benefits from sending messages as a batch for improved performance. Batches can be formed at both the input and output level. You can find out more ",(0,s.jsx)(n.a,{href:"/docs/configuration/batching",children:"in this doc"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsx)(n.h3,{id:"storage_account",children:(0,s.jsx)(n.code,{children:"storage_account"})}),"\n",(0,s.jsxs)(n.p,{children:["The storage account to access. This field is ignored if ",(0,s.jsx)(n.code,{children:"storage_connection_string"})," is set."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"storage_access_key",children:(0,s.jsx)(n.code,{children:"storage_access_key"})}),"\n",(0,s.jsxs)(n.p,{children:["The storage account access key. This field is ignored if ",(0,s.jsx)(n.code,{children:"storage_connection_string"})," is set."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"storage_connection_string",children:(0,s.jsx)(n.code,{children:"storage_connection_string"})}),"\n",(0,s.jsxs)(n.p,{children:["A storage account connection string. This field is required if ",(0,s.jsx)(n.code,{children:"storage_account"})," and ",(0,s.jsx)(n.code,{children:"storage_access_key"})," / ",(0,s.jsx)(n.code,{children:"storage_sas_token"})," are not set."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"storage_sas_token",children:(0,s.jsx)(n.code,{children:"storage_sas_token"})}),"\n",(0,s.jsxs)(n.p,{children:["The storage account SAS token. This field is ignored if ",(0,s.jsx)(n.code,{children:"storage_connection_string"})," or ",(0,s.jsx)(n.code,{children:"storage_access_key"})," are set."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"queue_name",children:(0,s.jsx)(n.code,{children:"queue_name"})}),"\n",(0,s.jsxs)(n.p,{children:["The name of the target Queue Storage queue.\nThis field supports ",(0,s.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h3,{id:"ttl",children:(0,s.jsx)(n.code,{children:"ttl"})}),"\n",(0,s.jsxs)(n.p,{children:["The TTL of each individual message as a duration string. Defaults to 0, meaning no retention period is set\nThis field supports ",(0,s.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nttl: 60s\n\nttl: 5m\n\nttl: 36h\n"})}),"\n",(0,s.jsx)(n.h3,{id:"max_in_flight",children:(0,s.jsx)(n.code,{children:"max_in_flight"})}),"\n",(0,s.jsx)(n.p,{children:"The maximum number of parallel message batches to have in flight at any given time."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"64"})]}),"\n",(0,s.jsx)(n.h3,{id:"batching",children:(0,s.jsx)(n.code,{children:"batching"})}),"\n",(0,s.jsxs)(n.p,{children:["Allows you to configure a ",(0,s.jsx)(n.a,{href:"/docs/configuration/batching",children:"batching policy"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"object"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Examples\n\nbatching:\n  byte_size: 5000\n  count: 0\n  period: 1s\n\nbatching:\n  count: 10\n  period: 1s\n\nbatching:\n  check: this.contains("END BATCH")\n  count: 0\n  period: 1m\n'})}),"\n",(0,s.jsx)(n.h3,{id:"batchingcount",children:(0,s.jsx)(n.code,{children:"batching.count"})}),"\n",(0,s.jsxs)(n.p,{children:["A number of messages at which the batch should be flushed. If ",(0,s.jsx)(n.code,{children:"0"})," disables count based batching."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"0"})]}),"\n",(0,s.jsx)(n.h3,{id:"batchingbyte_size",children:(0,s.jsx)(n.code,{children:"batching.byte_size"})}),"\n",(0,s.jsxs)(n.p,{children:["An amount of bytes at which the batch should be flushed. If ",(0,s.jsx)(n.code,{children:"0"})," disables size based batching."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"0"})]}),"\n",(0,s.jsx)(n.h3,{id:"batchingperiod",children:(0,s.jsx)(n.code,{children:"batching.period"})}),"\n",(0,s.jsx)(n.p,{children:"A period in which an incomplete batch should be flushed regardless of its size."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nperiod: 1s\n\nperiod: 1m\n\nperiod: 500ms\n"})}),"\n",(0,s.jsx)(n.h3,{id:"batchingcheck",children:(0,s.jsx)(n.code,{children:"batching.check"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/docs/guides/bloblang/about/",children:"Bloblang query"})," that should return a boolean value indicating whether a message should end a batch."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Examples\n\ncheck: this.type == "end_of_transaction"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"batchingprocessors",children:(0,s.jsx)(n.code,{children:"batching.processors"})}),"\n",(0,s.jsxs)(n.p,{children:["A list of ",(0,s.jsx)(n.a,{href:"/docs/components/processors/about",children:"processors"})," to apply to a batch as it is flushed. This allows you to aggregate and archive the batch however you see fit. Please note that all resulting messages are flushed as a single batch, therefore splitting the batch into smaller batches using these processors is a no-op."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"array"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nprocessors:\n  - archive:\n      format: concatenate\n\nprocessors:\n  - archive:\n      format: lines\n\nprocessors:\n  - archive:\n      format: json_array\n"})})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return a}});t(67294);var s=t(86010),r={tabItem:"tabItem_Ymn6"},o=t(85893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,a),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return y}});var s=t(67294),r=t(86010),o=t(12466),a=t(16550),c=t(20469),i=t(91980),l=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,i._X)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[a,i]=(0,s.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=s.find((e=>e.default)))?n:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,d]=p({queryString:t,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,o]=(0,u.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),m=(()=>{const e=null!=l?l:f;return g({value:e,tabValues:o})?e:null})();(0,c.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=t(72389),m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},x=t(85893);function j(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=c[t].value;r!==s&&(l(n),a(r))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var s;const n=i.indexOf(e.currentTarget)+1;t=null!=(s=i[n])?s:i[0];break}case"ArrowLeft":{var r;const n=i.indexOf(e.currentTarget)-1;t=null!=(r=i[n])?r:i[i.length-1];break}}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.Z)("tabs__item",m.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===n}),children:null!=t?t:n},n)}))})}function _(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(_,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var s=t(67294);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);