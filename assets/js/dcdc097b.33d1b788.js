"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[4131],{4859:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var s=t(85893),o=t(11151),i=t(74866),r=t(85162);const l={title:"gcp_pubsub",slug:"gcp_pubsub",type:"output",status:"stable",categories:["Services","GCP"],name:"gcp_pubsub"},a=void 0,c={id:"components/outputs/gcp_pubsub",title:"gcp_pubsub",description:"\x3c!--",source:"@site/docs/components/outputs/gcp_pubsub.md",sourceDirName:"components/outputs",slug:"/components/outputs/gcp_pubsub",permalink:"/docs/components/outputs/gcp_pubsub",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/outputs/gcp_pubsub.md",tags:[],version:"current",frontMatter:{title:"gcp_pubsub",slug:"gcp_pubsub",type:"output",status:"stable",categories:["Services","GCP"],name:"gcp_pubsub"},sidebar:"docs",previous:{title:"gcp_cloud_storage",permalink:"/docs/components/outputs/gcp_cloud_storage"},next:{title:"hdfs",permalink:"/docs/components/outputs/hdfs"}},d={},u=[{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Fields",id:"fields",level:2},{value:"<code>project</code>",id:"project",level:3},{value:"<code>topic</code>",id:"topic",level:3},{value:"<code>endpoint</code>",id:"endpoint",level:3},{value:"<code>ordering_key</code>",id:"ordering_key",level:3},{value:"<code>max_in_flight</code>",id:"max_in_flight",level:3},{value:"<code>count_threshold</code>",id:"count_threshold",level:3},{value:"<code>delay_threshold</code>",id:"delay_threshold",level:3},{value:"<code>byte_threshold</code>",id:"byte_threshold",level:3},{value:"<code>publish_timeout</code>",id:"publish_timeout",level:3},{value:"<code>metadata</code>",id:"metadata",level:3},{value:"<code>metadata.exclude_prefixes</code>",id:"metadataexclude_prefixes",level:3},{value:"<code>flow_control</code>",id:"flow_control",level:3},{value:"<code>flow_control.max_outstanding_bytes</code>",id:"flow_controlmax_outstanding_bytes",level:3},{value:"<code>flow_control.max_outstanding_messages</code>",id:"flow_controlmax_outstanding_messages",level:3},{value:"<code>flow_control.limit_exceeded_behavior</code>",id:"flow_controllimit_exceeded_behavior",level:3},{value:"<code>batching</code>",id:"batching",level:3},{value:"<code>batching.count</code>",id:"batchingcount",level:3},{value:"<code>batching.byte_size</code>",id:"batchingbyte_size",level:3},{value:"<code>batching.period</code>",id:"batchingperiod",level:3},{value:"<code>batching.check</code>",id:"batchingcheck",level:3},{value:"<code>batching.processors</code>",id:"batchingprocessors",level:3}];function h(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Sends messages to a GCP Cloud Pub/Sub topic. ",(0,s.jsx)(n.a,{href:"/docs/configuration/metadata",children:"Metadata"})," from messages are sent as attributes."]}),"\n",(0,s.jsxs)(i.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,s.jsx)(r.Z,{value:"common",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\noutput:\n  label: ""\n  gcp_pubsub:\n    project: "" # No default (required)\n    topic: "" # No default (required)\n    endpoint: ""\n    max_in_flight: 64\n    count_threshold: 100\n    delay_threshold: 10ms\n    byte_threshold: 1000000\n    metadata:\n      exclude_prefixes: []\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n'})})}),(0,s.jsx)(r.Z,{value:"advanced",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\noutput:\n  label: ""\n  gcp_pubsub:\n    project: "" # No default (required)\n    topic: "" # No default (required)\n    endpoint: ""\n    ordering_key: "" # No default (optional)\n    max_in_flight: 64\n    count_threshold: 100\n    delay_threshold: 10ms\n    byte_threshold: 1000000\n    publish_timeout: 1m0s\n    metadata:\n      exclude_prefixes: []\n    flow_control:\n      max_outstanding_bytes: -1\n      max_outstanding_messages: 1000\n      limit_exceeded_behavior: block\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n      processors: [] # No default (optional)\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["For information on how to set up credentials check out ",(0,s.jsx)(n.a,{href:"https://cloud.google.com/docs/authentication/production",children:"this guide"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(n.p,{children:["If you're consistently seeing ",(0,s.jsx)(n.code,{children:"Failed to send message to gcp_pubsub: context deadline exceeded"})," error logs without any further information it is possible that you are encountering ",(0,s.jsx)(n.a,{href:"https://github.com/warpstreamlabs/bento/issues/1042",children:"https://github.com/warpstreamlabs/bento/issues/1042"}),", which occurs when metadata values contain characters that are not valid utf-8. This can frequently occur when consuming from Kafka as the key metadata field may be populated with an arbitrary binary value, but this issue is not exclusive to Kafka."]}),"\n",(0,s.jsx)(n.p,{children:"If you are blocked by this issue then a work around is to delete either the specific problematic keys:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - mapping: |\n        meta kafka_key = deleted()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or delete all keys with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - mapping: meta = deleted()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsx)(n.h3,{id:"project",children:(0,s.jsx)(n.code,{children:"project"})}),"\n",(0,s.jsx)(n.p,{children:"The project ID of the topic to publish to."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h3,{id:"topic",children:(0,s.jsx)(n.code,{children:"topic"})}),"\n",(0,s.jsxs)(n.p,{children:["The topic to publish to.\nThis field supports ",(0,s.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h3,{id:"endpoint",children:(0,s.jsx)(n.code,{children:"endpoint"})}),"\n",(0,s.jsxs)(n.p,{children:["An optional endpoint to override the default of ",(0,s.jsx)(n.code,{children:"pubsub.googleapis.com:443"}),". This can be used to connect to a region specific pubsub endpoint. For a list of valid values check out ",(0,s.jsx)(n.a,{href:"https://cloud.google.com/pubsub/docs/reference/service_apis_overview#list_of_regional_endpoints",children:"this document."})]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nendpoint: us-central1-pubsub.googleapis.com:443\n\nendpoint: us-west3-pubsub.googleapis.com:443\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ordering_key",children:(0,s.jsx)(n.code,{children:"ordering_key"})}),"\n",(0,s.jsxs)(n.p,{children:["The ordering key to use for publishing messages.\nThis field supports ",(0,s.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h3,{id:"max_in_flight",children:(0,s.jsx)(n.code,{children:"max_in_flight"})}),"\n",(0,s.jsx)(n.p,{children:"The maximum number of messages to have in flight at a given time. Increasing this may improve throughput."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"64"})]}),"\n",(0,s.jsx)(n.h3,{id:"count_threshold",children:(0,s.jsx)(n.code,{children:"count_threshold"})}),"\n",(0,s.jsx)(n.p,{children:"Publish a pubsub buffer when it has this many messages"}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"100"})]}),"\n",(0,s.jsx)(n.h3,{id:"delay_threshold",children:(0,s.jsx)(n.code,{children:"delay_threshold"})}),"\n",(0,s.jsx)(n.p,{children:"Publish a non-empty pubsub buffer after this delay has passed."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'"10ms"'})]}),"\n",(0,s.jsx)(n.h3,{id:"byte_threshold",children:(0,s.jsx)(n.code,{children:"byte_threshold"})}),"\n",(0,s.jsx)(n.p,{children:"Publish a batch when its size in bytes reaches this value."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"1000000"})]}),"\n",(0,s.jsx)(n.h3,{id:"publish_timeout",children:(0,s.jsx)(n.code,{children:"publish_timeout"})}),"\n",(0,s.jsx)(n.p,{children:"The maximum length of time to wait before abandoning a publish attempt for a message."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'"1m0s"'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\npublish_timeout: 10s\n\npublish_timeout: 5m\n\npublish_timeout: 60m\n"})}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:(0,s.jsx)(n.code,{children:"metadata"})}),"\n",(0,s.jsx)(n.p,{children:"Specify criteria for which metadata values are sent as attributes, all are sent by default."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"object"})]}),"\n",(0,s.jsx)(n.h3,{id:"metadataexclude_prefixes",children:(0,s.jsx)(n.code,{children:"metadata.exclude_prefixes"})}),"\n",(0,s.jsx)(n.p,{children:"Provide a list of explicit metadata key prefixes to be excluded when adding metadata to sent messages."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"array"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n",(0,s.jsx)(n.h3,{id:"flow_control",children:(0,s.jsx)(n.code,{children:"flow_control"})}),"\n",(0,s.jsx)(n.p,{children:"For a given topic, configures the PubSub client's internal buffer for messages to be published."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"object"})]}),"\n",(0,s.jsx)(n.h3,{id:"flow_controlmax_outstanding_bytes",children:(0,s.jsx)(n.code,{children:"flow_control.max_outstanding_bytes"})}),"\n",(0,s.jsx)(n.p,{children:"Maximum size of buffered messages to be published. If less than or equal to zero, this is disabled."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"-1"})]}),"\n",(0,s.jsx)(n.h3,{id:"flow_controlmax_outstanding_messages",children:(0,s.jsx)(n.code,{children:"flow_control.max_outstanding_messages"})}),"\n",(0,s.jsx)(n.p,{children:"Maximum number of buffered messages to be published. If less than or equal to zero, this is disabled."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"1000"})]}),"\n",(0,s.jsx)(n.h3,{id:"flow_controllimit_exceeded_behavior",children:(0,s.jsx)(n.code,{children:"flow_control.limit_exceeded_behavior"})}),"\n",(0,s.jsx)(n.p,{children:"Configures the behavior when trying to publish additional messages while the flow controller is full. The available options are block (default), ignore (disable), and signal_error (publish results will return an error)."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'"block"'}),(0,s.jsx)(n.br,{}),"\n","Options: ",(0,s.jsx)(n.code,{children:"ignore"}),", ",(0,s.jsx)(n.code,{children:"block"}),", ",(0,s.jsx)(n.code,{children:"signal_error"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"batching",children:(0,s.jsx)(n.code,{children:"batching"})}),"\n",(0,s.jsx)(n.p,{children:"Configures a batching policy on this output. While the PubSub client maintains its own internal buffering mechanism, preparing larger batches of messages can further trade-off some latency for throughput."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"object"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Examples\n\nbatching:\n  byte_size: 5000\n  count: 0\n  period: 1s\n\nbatching:\n  count: 10\n  period: 1s\n\nbatching:\n  check: this.contains("END BATCH")\n  count: 0\n  period: 1m\n'})}),"\n",(0,s.jsx)(n.h3,{id:"batchingcount",children:(0,s.jsx)(n.code,{children:"batching.count"})}),"\n",(0,s.jsxs)(n.p,{children:["A number of messages at which the batch should be flushed. If ",(0,s.jsx)(n.code,{children:"0"})," disables count based batching."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"0"})]}),"\n",(0,s.jsx)(n.h3,{id:"batchingbyte_size",children:(0,s.jsx)(n.code,{children:"batching.byte_size"})}),"\n",(0,s.jsxs)(n.p,{children:["An amount of bytes at which the batch should be flushed. If ",(0,s.jsx)(n.code,{children:"0"})," disables size based batching."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"0"})]}),"\n",(0,s.jsx)(n.h3,{id:"batchingperiod",children:(0,s.jsx)(n.code,{children:"batching.period"})}),"\n",(0,s.jsx)(n.p,{children:"A period in which an incomplete batch should be flushed regardless of its size."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nperiod: 1s\n\nperiod: 1m\n\nperiod: 500ms\n"})}),"\n",(0,s.jsx)(n.h3,{id:"batchingcheck",children:(0,s.jsx)(n.code,{children:"batching.check"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/docs/guides/bloblang/about/",children:"Bloblang query"})," that should return a boolean value indicating whether a message should end a batch."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Examples\n\ncheck: this.type == "end_of_transaction"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"batchingprocessors",children:(0,s.jsx)(n.code,{children:"batching.processors"})}),"\n",(0,s.jsxs)(n.p,{children:["A list of ",(0,s.jsx)(n.a,{href:"/docs/components/processors/about",children:"processors"})," to apply to a batch as it is flushed. This allows you to aggregate and archive the batch however you see fit. Please note that all resulting messages are flushed as a single batch, therefore splitting the batch into smaller batches using these processors is a no-op."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"array"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nprocessors:\n  - archive:\n      format: concatenate\n\nprocessors:\n  - archive:\n      format: lines\n\nprocessors:\n  - archive:\n      format: json_array\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return r}});t(67294);var s=t(86010),o={tabItem:"tabItem_Ymn6"},i=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(o.tabItem,r),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return y}});var s=t(67294),o=t(86010),i=t(12466),r=t(16550),l=t(20469),a=t(91980),c=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:o}}=e;return{value:n,label:t,attributes:s,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,a._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=h(e),[r,a]=(0,s.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const o=null!=(n=s.find((e=>e.default)))?n:s[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:i}))),[c,u]=b({queryString:t,groupId:o}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[o,i]=(0,d.Nk)(t);return[o,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),f=(()=>{const e=null!=c?c:x;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{f&&a(f)}),[f]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);a(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=t(72389),f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=t(85893);function j(e){let{className:n,block:t,selectedValue:s,selectValue:r,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),o=l[t].value;o!==s&&(c(n),r(o))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const n=a.indexOf(e.currentTarget)+1;t=null!=(s=a[n])?s:a[0];break}case"ArrowLeft":{var o;const n=a.indexOf(e.currentTarget)-1;t=null!=(o=a[n])?o:a[a.length-1];break}}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>a.push(e),onKeyDown:u,onClick:d,...i,className:(0,o.Z)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===n}),children:null!=t?t:n},n)}))})}function _(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function v(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(j,{...e,...n}),(0,g.jsx)(_,{...e,...n})]})}function y(e){const n=(0,m.Z)();return(0,g.jsx)(v,{...e,children:u(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(67294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);