/*! For license information please see 1df93b7f.593312da.js.LICENSE.txt */
(self.webpackChunkbento=self.webpackChunkbento||[]).push([[3237],{5162:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});t(7294);var s=t(6010),a={tabItem:"tabItem_Ymn6"},r=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,o),hidden:t,children:n})}},4866:function(e,n,t){"use strict";t.d(n,{Z:function(){return _}});var s=t(7294),a=t(6010),r=t(2466),o=t(6550),i=t(469),l=t(1980),c=t(7392),u=t(12);function d(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=h(e),[o,l]=(0,s.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(n=s.find((e=>e.default)))?n:s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=m({queryString:t,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[a,r]=(0,u.Nk)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),b=(()=>{const e=null!=c?c:g;return p({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);l(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=t(2389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},v=t(5893);function x(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==s&&(c(n),o(a))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var s;const n=l.indexOf(e.currentTarget)+1;t=null!=(s=l[n])?s:l[0];break}case"ArrowLeft":{var a;const n=l.indexOf(e.currentTarget)-1;t=null!=(a=l[n])?a:l[l.length-1];break}}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,a.Z)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===n}),children:null!=t?t:n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function _(e){const n=(0,f.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},3808:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});t(7294);var s=t(4184),a=t.n(s),r=t(7452),o=t(9960),i=t(2263),l=t(4996),c={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",features:"features_cAfv",featureImage:"featureImage_wMIZ",heroImg:"heroImg_lMB4",configSnippets:"configSnippets_Iyxf",pitch:"pitch_XV8K",loveSection:"loveSection_tbp6",loveSectionPlea:"loveSectionPlea_xpLt",loveImg:"loveImg_zggS",goldSponsors:"goldSponsors_dNMn",silverSponsors:"silverSponsors_AVSY",sponsorsBox:"sponsorsBox_b6_7",synadiaImg:"synadiaImg_A9mo",furtherButton:"furtherButton_GXcD"},u=t(9286),d=t(4866),h=t(5162),p=t(5893);const m=[{label:"Mapping",further:"/docs/guides/bloblang/about",language:"yaml",children:"input:\n  gcp_pubsub:\n    project: foo\n    subscription: bar\n\npipeline:\n  processors:\n    - mapping: |\n        root.message = this\n        root.meta.link_count = this.links.length()\n        root.user.age = this.user.age.number()\n\noutput:\n  redis_streams:\n    url: tcp://TODO:6379\n    stream: baz\n    max_in_flight: 20"},{label:"Multiplexing",further:"/docs/components/outputs/about#multiplexing-outputs",language:"yaml",children:'input:\n  kafka:\n    addresses: [ TODO ]\n    topics: [ foo, bar ]\n    consumer_group: foogroup\n\noutput:\n  switch:\n    cases:\n      - check: doc.tags.contains("AWS")\n        output:\n          aws_sqs:\n            url: https://sqs.us-west-2.amazonaws.com/TODO/TODO\n            max_in_flight: 20\n\n      - output:\n          redis_pubsub:\n            url: tcp://TODO:6379\n            channel: baz\n            max_in_flight: 20'},{label:"Windowing",further:"/docs/configuration/windowed_processing",language:"yaml",children:'input:\n  nats_jetstream:\n    urls: [ nats://TODO:4222 ]\n    queue: myqueue\n    subject: traffic.light.events\n    deliver: all\n\nbuffer:\n  system_window:\n    timestamp_mapping: root = this.created_at\n    size: 1h\n\npipeline:\n  processors:\n    - group_by_value:\n        value: \'${! json("traffic_light_id") }\'\n    - mapping: |\n        root = if batch_index() == 0 {\n          {\n            "traffic_light_id": this.traffic_light_id,\n            "created_at": @window_end_timestamp,\n            "total_cars": json("registration_plate").from_all().unique().length(),\n            "passengers": json("passengers").from_all().sum(),\n          }\n        } else { deleted() }\n\noutput:\n  http_client:\n    url: https://example.com/traffic_data\n    verb: POST\n    max_in_flight: 64'},{label:"Enrichments",further:"/cookbooks/enrichments",language:"yaml",children:"input:\n  mqtt:\n    urls: [ tcp://TODO:1883 ]\n    topics: [ foo ]\n\npipeline:\n  processors:\n    - branch:\n        request_map: |\n          root.id = this.doc.id\n          root.content = this.doc.body\n        processors:\n          - aws_lambda:\n              function: sentiment_analysis\n        result_map: root.results.sentiment = this\n\noutput:\n  aws_s3:\n    bucket: TODO\n    path: '${! meta(\"partition\") }/${! timestamp_unix_nano() }.tar.gz'\n    batching:\n      count: 100\n      period: 10s\n      processors:\n        - archive:\n            format: tar\n        - compress:\n            algorithm: gzip"}],g=[{title:"Takes Care of the Dull Stuff",imageUrl:"img/Blobboring.svg",description:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("p",{children:["Bento solves common data engineering tasks such as transformations, integrations, and multiplexing with declarative and ",(0,p.jsx)("a",{href:"/docs/configuration/unit_testing",children:"unit testable"})," configuration. This allows you to easily and incrementally adapt your data pipelines as requirements change, letting you focus on the more exciting stuff."]}),(0,p.jsxs)("p",{children:["It comes armed with a wide range of ",(0,p.jsx)("a",{href:"/docs/components/processors/about",children:"processors"}),", a ",(0,p.jsx)("a",{href:"/docs/guides/bloblang/about",children:"lit mapping language"}),", stateless ",(0,p.jsx)("a",{href:"/docs/configuration/windowed_processing",children:"windowed processing capabilities"})," and an ",(0,p.jsx)("a",{href:"/blobfish",children:"industry leading mascot"}),"."]})]})},{title:"Well Connected",imageUrl:"img/Blobborg.svg",description:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("p",{children:["Bento is able to glue a wide range of ",(0,p.jsx)("a",{href:"/docs/components/inputs/about",children:"sources"})," and ",(0,p.jsx)("a",{href:"/docs/components/outputs/about",children:"sinks"})," together and hook into a variety of ",(0,p.jsx)("a",{href:"/docs/components/processors/sql",children:"databases"}),", ",(0,p.jsx)("a",{href:"/docs/components/processors/cache",children:"caches"}),", ",(0,p.jsx)("a",{href:"/docs/components/processors/http",children:"HTTP APIs"}),", ",(0,p.jsx)("a",{href:"/docs/components/processors/aws_lambda",children:"lambdas"})," and ",(0,p.jsx)("a",{href:"/docs/components/processors/about",children:"more"}),", enabling you to seamlessly drop it into your existing infrastructure."]}),(0,p.jsxs)("p",{children:["Working with disparate APIs and services can be a daunting task, doubly so in a streaming data context. With Bento it's possible to break these tasks down and automatically parallelize them as ",(0,p.jsx)("a",{href:"/cookbooks/enrichments",children:"a streaming workflow"}),"."]})]})},{title:"Reliable and Operationally Simple",imageUrl:"img/Blobscales.svg",description:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("p",{children:["Delivery guarantees ",(0,p.jsx)("a",{href:"https://youtu.be/QmpBOCvY8mY",children:"can be a dodgy subject"}),". Bento processes and acknowledges messages using an in-process transaction model with no need for any disk persisted state, so when connecting to at-least-once sources and sinks it's able to guarantee at-least-once delivery even in the event of crashes, disk corruption, or other unexpected server faults."]}),(0,p.jsxs)("p",{children:["This behaviour is the default and free of caveats, which also makes deploying and scaling Bento much simpler. However, simplicity doesn't negate the need for observability, so it also exposes ",(0,p.jsx)("a",{href:"/docs/components/metrics/about",children:"metrics"})," and ",(0,p.jsx)("a",{href:"/docs/components/tracers/about",children:"tracing"})," events to targets of your choice."]})]})},{title:"Extendable",imageUrl:"img/Blobextended.svg",description:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("p",{children:"Sometimes the components that come with Bento aren't enough. Luckily, Bento has been designed to be easily plugged with whatever components you need."}),(0,p.jsxs)("p",{children:["You can either write plugins ",(0,p.jsx)("a",{href:"https://pkg.go.dev/github.com/warpstreamlabs/bento/v4/public",children:"directly in Go (recommended)"})," or you can have Bento run your plugin as a ",(0,p.jsx)("a",{href:"/docs/components/processors/subprocess",children:"subprocess"}),"."]})]})}];function f(e){let{imageUrl:n,title:t,description:s}=e;const r=(0,l.Z)(n);return(0,p.jsxs)("div",{className:a()("col col--6"),children:[r&&(0,p.jsx)("div",{className:"text--center",children:(0,p.jsx)("img",{className:a()("padding-vert--md",c.featureImage),src:r,alt:t})}),(0,p.jsx)("h3",{children:t}),s]})}var b=function(){const e=(0,i.Z)().siteConfig;return(0,p.jsxs)(r.Z,{title:""+e.title,description:"Fancy stream processing made operationally mundane",children:[(0,p.jsx)("header",{className:a()("hero",c.heroBanner),children:(0,p.jsx)("div",{className:"container",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:a()("col col--5 col--offset-1"),children:[(0,p.jsx)("h1",{className:"hero__title",children:e.title}),(0,p.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,p.jsx)("div",{className:c.buttons,children:(0,p.jsx)(o.Z,{className:a()("button button--outline button--primary button--lg",c.getStarted),to:(0,l.Z)("docs/guides/getting_started"),children:"Get Started"})})]}),(0,p.jsx)("div",{className:a()("col col--5"),children:(0,p.jsx)("img",{className:c.heroImg,src:"img/logo_hero.svg"})})]})})}),(0,p.jsxs)("main",{children:[(0,p.jsx)("div",{className:"container",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:a()(c.pitch+" col col--6"),children:[(0,p.jsx)("h2",{children:"It's boringly easy to use"}),(0,p.jsxs)("p",{children:["Written in Go, deployed as a static binary, declarative configuration. ",(0,p.jsx)("a",{href:"https://github.com/warpstreamlabs/bento",children:"Open source"})," and cloud native as utter heck."]})]}),(0,p.jsx)("div",{className:a()("col col--6"),children:m&&m.length&&(0,p.jsx)("section",{className:c.configSnippets,children:(0,p.jsx)(d.Z,{defaultValue:m[0].label,values:m.map(((e,n)=>({label:e.label,value:e.label}))),children:m.map(((e,n)=>(0,p.jsx)(h.Z,{value:e.label,children:(0,p.jsxs)("div",{style:{position:"relative"},children:[(0,p.jsx)(u.Z,{...e}),e.further&&(0,p.jsx)(o.Z,{className:a()(c.furtherButton,"button button--outline button--primary"),to:e.further,children:"Read about"})]})},n)))})})})]})}),g&&g.length&&(0,p.jsx)("section",{className:c.features,children:(0,p.jsx)("div",{className:"container margin-vert--md",children:(0,p.jsx)("div",{className:"row",children:g.map(((e,n)=>(0,p.jsx)(f,{...e},n)))})})}),(0,p.jsx)("section",{className:c.loveSection,children:(0,p.jsx)("div",{className:"container",children:(0,p.jsx)("div",{className:"row",children:(0,p.jsxs)("div",{className:a()("col col--6"),children:[(0,p.jsx)("h3",{id:"sponsored-by",children:"Sponsored by the following heroes"}),(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("div",{className:a()(c.sponsorsBox,c.goldSponsors),children:(0,p.jsx)("a",{href:"https://www.warpstream.com/",children:(0,p.jsx)("img",{src:"/bento/img/sponsors/warpstream_logo.svg"})})}),(0,p.jsx)("div",{children:(0,p.jsx)("a",{href:"https://synadia.com",children:(0,p.jsx)("img",{className:c.synadiaImg,src:"/bento/img/sponsors/synadia.svg"})})})]})]})})})})]})]})}},4184:function(e,n){var t;!function(){"use strict";var s={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)){if(t.length){var o=a.apply(null,t);o&&e.push(o)}}else if("object"===r){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var i in t)s.call(t,i)&&t[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()}}]);