/*! For license information please see 076132ed.67c5eb61.js.LICENSE.txt */
(self.webpackChunkbento=self.webpackChunkbento||[]).push([[4535],{44212:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var s=n(85893),o=n(11151),r=n(25808),i=n(36971);const a={title:"Outputs",sidebar_label:"About"},u=void 0,l={id:"components/outputs/about",title:"Outputs",description:"An output is a sink where we wish to send our consumed data after applying an optional array of processors. Only one output is configured at the root of a Bento config. However, the output can be a broker which combines multiple outputs under a chosen brokering pattern, or a switch which is used to multiplex against different outputs.",source:"@site/docs/components/outputs/about.md",sourceDirName:"components/outputs",slug:"/components/outputs/about",permalink:"/docs/components/outputs/about",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/outputs/about.md",tags:[],version:"current",frontMatter:{title:"Outputs",sidebar_label:"About"},sidebar:"docs",previous:{title:"sql",permalink:"/docs/components/processors/sql"},next:{title:"amqp_0_9",permalink:"/docs/components/outputs/amqp_0_9"}},c={},p=[{value:"Back Pressure",id:"back-pressure",level:2},{value:"Retries",id:"retries",level:2},{value:"Dead Letter Queues",id:"dead-letter-queues",level:2},{value:"Multiplexing Outputs",id:"multiplexing-outputs",level:2},{value:"Interpolation Multiplexing",id:"interpolation-multiplexing",level:3},{value:"Switch Multiplexing",id:"switch-multiplexing",level:3},{value:"Labels",id:"labels",level:2},{value:"Categories",id:"categories",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["An output is a sink where we wish to send our consumed data after applying an optional array of ",(0,s.jsx)(t.a,{href:"/docs/components/processors/about",children:"processors"}),". Only one output is configured at the root of a Bento config. However, the output can be a ",(0,s.jsx)(t.a,{href:"/docs/components/outputs/broker",children:"broker"})," which combines multiple outputs under a chosen brokering pattern, or a ",(0,s.jsx)(t.a,{href:"/docs/components/outputs/switch",children:"switch"})," which is used to multiplex against different outputs."]}),"\n",(0,s.jsx)(t.p,{children:"An output config section looks like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'output:\n  label: my_s3_output\n\n  aws_s3:\n    bucket: TODO\n    path: \'${! meta("kafka_topic") }/${! json("message.id") }.json\'\n\n  # Optional list of processing steps\n  processors:\n    - mapping: \'{"message":this,"meta":{"link_count":this.links.length()}}\'\n'})}),"\n",(0,s.jsx)(t.h2,{id:"back-pressure",children:"Back Pressure"}),"\n",(0,s.jsx)(t.p,{children:"Bento outputs apply back pressure to components upstream. This means if your output target starts blocking traffic Bento will gracefully stop consuming until the issue is resolved."}),"\n",(0,s.jsx)(t.h2,{id:"retries",children:"Retries"}),"\n",(0,s.jsx)(t.p,{children:"When a Bento output fails to send a message the error is propagated back up to the input, where depending on the protocol it will either be pushed back to the source as a Noack (e.g. AMQP) or will be reattempted indefinitely with the commit withheld until success (e.g. Kafka)."}),"\n",(0,s.jsxs)(t.p,{children:["It's possible to instead have Bento indefinitely retry an output until success with a ",(0,s.jsx)(t.a,{href:"/docs/components/outputs/retry",children:(0,s.jsx)(t.code,{children:"retry"})})," output. Some other outputs, such as the ",(0,s.jsx)(t.a,{href:"/docs/components/outputs/broker",children:(0,s.jsx)(t.code,{children:"broker"})}),", might also retry indefinitely depending on their configuration."]}),"\n",(0,s.jsx)(t.h2,{id:"dead-letter-queues",children:"Dead Letter Queues"}),"\n",(0,s.jsxs)(t.p,{children:["It's possible to create fallback outputs for when an output target fails using a ",(0,s.jsx)(t.a,{href:"/docs/components/outputs/fallback",children:(0,s.jsx)(t.code,{children:"fallback"})})," output:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"output:\n  fallback:\n    - aws_sqs:\n        url: https://sqs.us-west-2.amazonaws.com/TODO/TODO\n        max_in_flight: 20\n\n    - http_client:\n        url: http://backup:1234/dlq\n        verb: POST\n"})}),"\n",(0,s.jsx)(t.h2,{id:"multiplexing-outputs",children:"Multiplexing Outputs"}),"\n",(0,s.jsx)(t.p,{children:"There are a few different ways of multiplexing in Bento, here's a quick run through:"}),"\n",(0,s.jsx)(t.h3,{id:"interpolation-multiplexing",children:"Interpolation Multiplexing"}),"\n",(0,s.jsxs)(t.p,{children:["Some output fields support ",(0,s.jsx)(t.a,{href:"/docs/configuration/interpolation",children:"field interpolation"}),", which is a super easy way to multiplex messages based on their contents in situations where you are multiplexing to the same service."]}),"\n",(0,s.jsx)(t.p,{children:"For example, multiplexing against Kafka topics is a common pattern:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'output:\n  kafka:\n    addresses: [ TODO:6379 ]\n    topic: ${! meta("target_topic") }\n'})}),"\n",(0,s.jsx)(t.p,{children:"Refer to the field documentation for a given output to see if it support interpolation."}),"\n",(0,s.jsx)(t.h3,{id:"switch-multiplexing",children:"Switch Multiplexing"}),"\n",(0,s.jsxs)(t.p,{children:["A more advanced form of multiplexing is to route messages to different output configurations based on a query. This is easy with the ",(0,s.jsxs)(t.a,{href:"/docs/components/outputs/switch",children:[(0,s.jsx)(t.code,{children:"switch"})," output"]}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'output:\n  switch:\n    cases:\n      - check: this.type == "foo"\n        output:\n          amqp_1:\n            urls: [ amqps://guest:guest@localhost:5672/ ]\n            target_address: queue:/the_foos\n\n      - check: this.type == "bar"\n        output:\n          gcp_pubsub:\n            project: dealing_with_mike\n            topic: mikes_bars\n\n      - output:\n          redis_streams:\n            url: tcp://localhost:6379\n            stream: everything_else\n          processors:\n            - mapping: |\n                root = this\n                root.type = this.type.not_null() | "unknown"\n'})}),"\n",(0,s.jsx)(t.h2,{id:"labels",children:"Labels"}),"\n",(0,s.jsxs)(t.p,{children:["Outputs have an optional field ",(0,s.jsx)(t.code,{children:"label"})," that can uniquely identify them in observability data such as metrics and logs. This can be useful when running configs with multiple outputs, otherwise their metrics labels will be generated based on their composition. For more information check out the ",(0,s.jsx)(t.a,{href:"/docs/components/metrics/about",children:"metrics documentation"}),"."]}),"\n","\n",(0,s.jsx)(t.h2,{id:"categories",children:"Categories"}),"\n",(0,s.jsx)(r.Z,{type:"outputs"}),"\n","\n","\n",(0,s.jsx)(i.Z,{type:"outputs"})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},85162:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});n(67294);var s=n(86010),o={tabItem:"tabItem_Ymn6"},r=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(o.tabItem,i),hidden:n,children:t})}},74866:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var s=n(67294),o=n(86010),r=n(12466),i=n(16550),a=n(20469),u=n(91980),l=n(67392),c=n(50012);function p(e){var t,n;return null!=(t=null==(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function d(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=null!=t?t:function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:o}}=e;return{value:t,label:n,attributes:s,default:o}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,u._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=d(e),[i,u]=(0,s.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const o=null!=(t=s.find((e=>e.default)))?t:s[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[l,p]=m({queryString:n,groupId:o}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[o,r]=(0,c.Nk)(n);return[o,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),b=(()=>{const e=null!=l?l:f;return h({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{b&&u(b)}),[b]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);u(e),p(e),g(e)}),[p,g,r]),tabValues:r}}var g=n(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},v=n(85893);function w(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:a}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),o=a[n].value;o!==s&&(l(t),i(o))},p=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var s;const t=u.indexOf(e.currentTarget)+1;n=null!=(s=u[t])?s:u[0];break}case"ArrowLeft":{var o;const t=u.indexOf(e.currentTarget)-1;n=null!=(o=u[t])?o:u[u.length-1];break}}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>u.push(e),onKeyDown:p,onClick:c,...r,className:(0,o.Z)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===t}),children:null!=n?n:t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(w,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function j(e){const t=(0,g.Z)();return(0,v.jsx)(y,{...e,children:p(e.children)},String(t))}},36971:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});n(67294);var s=n(52263),o=n(94184),r=n.n(o),i="componentList_axqy",a=n(85893);var u=function(e){let{type:t,singular:n}=e;const o=(0,s.Z)().siteConfig.customFields.components[t];return"string"!=typeof n&&(n=t,/s$/.test(n)&&(n=t.slice(0,-1))),(0,a.jsxs)("div",{className:"dropdown dropdown--hoverable",children:[(0,a.jsxs)("button",{className:"button button--outline button--primary",children:["Jump to ",n]}),(0,a.jsx)("ul",{className:r()(i,"dropdown__menu"),children:o.map((e=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"dropdown__link",href:"/docs/components/"+t+"/"+e.name,children:e.name})},e.name)))})]})}},25808:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});n(67294);var s=n(52263),o=n(74866),r=n(85162),i=n(39960),a="componentCard_EbTf",u=n(85893);var l=function(e){const{type:t,component:n}=e;return(0,u.jsx)(i.Z,{to:"/docs/components/"+t+"/"+n.name,className:a,children:(0,u.jsx)("strong",{children:n.name})})};let c={inputs:[{name:"Services",description:"Inputs that consume from storage or message streaming services."},{name:"Network",description:"Inputs that consume directly from low level network protocols."},{name:"AWS",description:"Inputs that consume from Amazon Web Services products."},{name:"GCP",description:"Inputs that consume from Google Cloud Platform services."},{name:"Azure",description:"Inputs that consume from Microsoft Azure services."},{name:"Social",description:"Inputs that consume from social applications and services."},{name:"Local",description:"Inputs that consume from the local machine/filesystem."},{name:"Utility",description:"Inputs that provide utility by generating data or combining/wrapping other inputs."}],buffers:[{name:"Windowing",description:"Buffers that provide message windowing capabilities."},{name:"Utility",description:"Buffers that are intended for niche but general use."}],processors:[{name:"Mapping",description:"Processors that specialize in restructuring messages."},{name:"Integration",description:"Processors that interact with external services."},{name:"Parsing",description:"Processors that specialize in translating messages from one format to another."},{name:"Composition",description:"Higher level processors that compose other processors and modify their behavior."},{name:"Utility",description:"Processors that provide general utility or do not fit in another category."}],outputs:[{name:"Services",description:"Outputs that write to storage or message streaming services."},{name:"Network",description:"Outputs that write directly to low level network protocols."},{name:"AWS",description:"Outputs that write to Amazon Web Services products."},{name:"GCP",description:"Outputs that write to Google Cloud Platform services."},{name:"Azure",description:"Outputs that write to Microsoft Azure services."},{name:"Social",description:"Outputs that write to social applications and services."},{name:"Local",description:"Outputs that write to the local machine/filesystem."},{name:"Utility",description:"Outputs that provide utility by combining/wrapping other outputs."}]};var p=function(e){let{type:t}=e;const n=(0,s.Z)().siteConfig.customFields.components[t];let i=c[t]||[],a={},p=[];for(let s=0;s<i.length;s++)p.push(i[s].name),a[i[s].name.toLowerCase()]={summary:i[s].description,items:[]};for(let s=0;s<n.length;s++){let e=n[s].categories;if(Array.isArray(e))for(let t=0;t<e.length;t++){let o=e[t].toLowerCase();void 0===a[o]?(p.push(o.charAt(0).toUpperCase()+o.slice(1)),a[o]={summary:"",items:[n[s]]}):a[o].items.push(n[s])}}return(0,u.jsx)(o.Z,{defaultValue:p[0].toLowerCase(),values:p.map((e=>({label:e,value:e.toLowerCase()}))),children:p.map((e=>(0,u.jsxs)(r.Z,{value:e.toLowerCase(),children:[(0,u.jsx)("p",{children:a[e.toLowerCase()].summary}),a[e.toLowerCase()].items.map(((e,n)=>(0,u.jsx)(l,{type:t,component:e},n)))]},e.toLowerCase())))})}},94184:function(e,t){var n;!function(){"use strict";var s={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)s.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},11151:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},a:function(){return i}});var s=n(67294);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);