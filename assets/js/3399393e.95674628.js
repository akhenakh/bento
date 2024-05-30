"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[6341],{66357:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var l=n(85893),r=n(11151),o=n(74866),s=n(85162);const a={title:"Logger"},i=void 0,c={id:"components/logger/about",title:"Logger",description:"\x3c!--",source:"@site/docs/components/logger/about.md",sourceDirName:"components/logger",slug:"/components/logger/about",permalink:"/docs/components/logger/about",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/logger/about.md",tags:[],version:"current",frontMatter:{title:"Logger"},sidebar:"docs",previous:{title:"open_telemetry_collector",permalink:"/docs/components/tracers/open_telemetry_collector"},next:{title:"Getting Started",permalink:"/docs/guides/getting_started"}},d={},u=[{value:"Fields",id:"fields",level:2},{value:"<code>level</code>",id:"level",level:3},{value:"<code>format</code>",id:"format",level:3},{value:"<code>add_timestamp</code>",id:"add_timestamp",level:3},{value:"<code>level_name</code>",id:"level_name",level:3},{value:"<code>timestamp_name</code>",id:"timestamp_name",level:3},{value:"<code>message_name</code>",id:"message_name",level:3},{value:"<code>static_fields</code>",id:"static_fields",level:3},{value:"<code>file</code>",id:"file",level:3},{value:"<code>file.path</code>",id:"filepath",level:3},{value:"<code>file.rotate</code>",id:"filerotate",level:3},{value:"<code>file.rotate_max_age_days</code>",id:"filerotate_max_age_days",level:3}];function h(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:["Bento logging prints to stdout (or stderr if your output is stdout) and is formatted as ",(0,l.jsx)(t.a,{href:"https://brandur.org/logfmt",children:"logfmt"})," by default. Use these configuration options to change both the logging formats as well as the destination of logs."]}),"\n","\n","\n",(0,l.jsxs)(o.Z,{defaultValue:"stdoutlogfmt",values:[{label:"Logfmt to Stdout",value:"stdoutlogfmt"},{label:"JSON to File",value:"filejson"}],children:[(0,l.jsx)(s.Z,{value:"stdoutlogfmt",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-yaml",children:"logger:\n  level: INFO\n  format: logfmt\n  add_timestamp: false\n  static_fields:\n    '@service': bento\n"})})}),(0,l.jsx)(s.Z,{value:"filejson",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-yaml",children:"logger:\n  level: WARN\n  format: json\n  file:\n    path: ./logs/bento.ndjson\n    rotate: true\n"})})})]}),"\n",(0,l.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,l.jsx)(t.h3,{id:"level",children:(0,l.jsx)(t.code,{children:"level"})}),"\n",(0,l.jsx)(t.p,{children:"Set the minimum severity level for emitting logs."}),"\n",(0,l.jsxs)(t.p,{children:["Type: ",(0,l.jsx)(t.code,{children:"string"}),(0,l.jsx)(t.br,{}),"\n","Default: ",(0,l.jsx)(t.code,{children:'"INFO"'}),(0,l.jsx)(t.br,{}),"\n","Options: ",(0,l.jsx)(t.code,{children:"OFF"}),", ",(0,l.jsx)(t.code,{children:"FATAL"}),", ",(0,l.jsx)(t.code,{children:"ERROR"}),", ",(0,l.jsx)(t.code,{children:"WARN"}),", ",(0,l.jsx)(t.code,{children:"INFO"}),", ",(0,l.jsx)(t.code,{children:"DEBUG"}),", ",(0,l.jsx)(t.code,{children:"TRACE"}),", ",(0,l.jsx)(t.code,{children:"ALL"}),", ",(0,l.jsx)(t.code,{children:"NONE"}),"."]}),"\n",(0,l.jsx)(t.h3,{id:"format",children:(0,l.jsx)(t.code,{children:"format"})}),"\n",(0,l.jsx)(t.p,{children:"Set the format of emitted logs."}),"\n",(0,l.jsxs)(t.p,{children:["Type: ",(0,l.jsx)(t.code,{children:"string"}),(0,l.jsx)(t.br,{}),"\n","Default: ",(0,l.jsx)(t.code,{children:'"logfmt"'}),(0,l.jsx)(t.br,{}),"\n","Options: ",(0,l.jsx)(t.code,{children:"json"}),", ",(0,l.jsx)(t.code,{children:"logfmt"}),"."]}),"\n",(0,l.jsx)(t.h3,{id:"add_timestamp",children:(0,l.jsx)(t.code,{children:"add_timestamp"})}),"\n",(0,l.jsx)(t.p,{children:"Whether to include timestamps in logs."}),"\n",(0,l.jsxs)(t.p,{children:["Type: ",(0,l.jsx)(t.code,{children:"bool"}),(0,l.jsx)(t.br,{}),"\n","Default: ",(0,l.jsx)(t.code,{children:"false"})]}),"\n",(0,l.jsx)(t.h3,{id:"level_name",children:(0,l.jsx)(t.code,{children:"level_name"})}),"\n",(0,l.jsxs)(t.p,{children:["The name of the level field added to logs when the ",(0,l.jsx)(t.code,{children:"format"})," is ",(0,l.jsx)(t.code,{children:"json"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["Type: ",(0,l.jsx)(t.code,{children:"string"}),(0,l.jsx)(t.br,{}),"\n","Default: ",(0,l.jsx)(t.code,{children:'"level"'})]}),"\n",(0,l.jsx)(t.h3,{id:"timestamp_name",children:(0,l.jsx)(t.code,{children:"timestamp_name"})}),"\n",(0,l.jsxs)(t.p,{children:["The name of the timestamp field added to logs when ",(0,l.jsx)(t.code,{children:"add_timestamp"})," is set to ",(0,l.jsx)(t.code,{children:"true"})," and the ",(0,l.jsx)(t.code,{children:"format"})," is ",(0,l.jsx)(t.code,{children:"json"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["Type: ",(0,l.jsx)(t.code,{children:"string"}),(0,l.jsx)(t.br,{}),"\n","Default: ",(0,l.jsx)(t.code,{children:'"time"'})]}),"\n",(0,l.jsx)(t.h3,{id:"message_name",children:(0,l.jsx)(t.code,{children:"message_name"})}),"\n",(0,l.jsxs)(t.p,{children:["The name of the message field added to logs when the ",(0,l.jsx)(t.code,{children:"format"})," is ",(0,l.jsx)(t.code,{children:"json"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["Type: ",(0,l.jsx)(t.code,{children:"string"}),(0,l.jsx)(t.br,{}),"\n","Default: ",(0,l.jsx)(t.code,{children:'"msg"'})]}),"\n",(0,l.jsx)(t.h3,{id:"static_fields",children:(0,l.jsx)(t.code,{children:"static_fields"})}),"\n",(0,l.jsx)(t.p,{children:"A map of key/value pairs to add to each structured log."}),"\n",(0,l.jsxs)(t.p,{children:["Type: map of ",(0,l.jsx)(t.code,{children:"string"}),(0,l.jsx)(t.br,{}),"\n","Default: ",(0,l.jsx)(t.code,{children:'{"@service":"bento"}'})]}),"\n",(0,l.jsx)(t.h3,{id:"file",children:(0,l.jsx)(t.code,{children:"file"})}),"\n",(0,l.jsx)(t.p,{children:"Experimental: Specify fields for optionally writing logs to a file."}),"\n",(0,l.jsxs)(t.p,{children:["Type: ",(0,l.jsx)(t.code,{children:"object"})]}),"\n",(0,l.jsx)(t.h3,{id:"filepath",children:(0,l.jsx)(t.code,{children:"file.path"})}),"\n",(0,l.jsx)(t.p,{children:"The file path to write logs to, if the file does not exist it will be created. Leave this field empty or unset to disable file based logging."}),"\n",(0,l.jsxs)(t.p,{children:["Type: ",(0,l.jsx)(t.code,{children:"string"}),(0,l.jsx)(t.br,{}),"\n","Default: ",(0,l.jsx)(t.code,{children:'""'})]}),"\n",(0,l.jsx)(t.h3,{id:"filerotate",children:(0,l.jsx)(t.code,{children:"file.rotate"})}),"\n",(0,l.jsx)(t.p,{children:"Whether to rotate log files automatically."}),"\n",(0,l.jsxs)(t.p,{children:["Type: ",(0,l.jsx)(t.code,{children:"bool"}),(0,l.jsx)(t.br,{}),"\n","Default: ",(0,l.jsx)(t.code,{children:"false"})]}),"\n",(0,l.jsx)(t.h3,{id:"filerotate_max_age_days",children:(0,l.jsx)(t.code,{children:"file.rotate_max_age_days"})}),"\n",(0,l.jsx)(t.p,{children:"The maximum number of days to retain old log files based on the timestamp encoded in their filename, after which they are deleted. Setting to zero disables this mechanism."}),"\n",(0,l.jsxs)(t.p,{children:["Type: ",(0,l.jsx)(t.code,{children:"int"}),(0,l.jsx)(t.br,{}),"\n","Default: ",(0,l.jsx)(t.code,{children:"0"})]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},85162:function(e,t,n){n.d(t,{Z:function(){return s}});n(67294);var l=n(86010),r={tabItem:"tabItem_Ymn6"},o=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,s),hidden:n,children:t})}},74866:function(e,t,n){n.d(t,{Z:function(){return _}});var l=n(67294),r=n(86010),o=n(12466),s=n(16550),a=n(20469),i=n(91980),c=n(67392),d=n(50012);function u(e){var t,n;return null!=(t=null==(n=l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,l.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[s,i]=(0,l.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:l}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+l.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=l.find((e=>e.default)))?t:l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,u]=m({queryString:n,groupId:r}),[p,x]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,o]=(0,d.Nk)(n);return[r,(0,l.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),j=(()=>{const e=null!=c?c:p;return f({value:e,tabValues:o})?e:null})();(0,a.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);i(e),u(e),x(e)}),[u,x,o]),tabValues:o}}var x=n(72389),j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=n(85893);function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),r=a[n].value;r!==l&&(c(t),s(r))},u=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var l;const t=i.indexOf(e.currentTarget)+1;n=null!=(l=i[t])?l:i[0];break}case"ArrowLeft":{var r;const t=i.indexOf(e.currentTarget)-1;n=null!=(r=i[t])?r:i[i.length-1];break}}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.Z)("tabs__item",j.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t}),children:null!=n?n:t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function _(e){const t=(0,x.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(t))}},11151:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var l=n(67294);const r={},o=l.createContext(r);function s(e){const t=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(o.Provider,{value:t},e.children)}}}]);