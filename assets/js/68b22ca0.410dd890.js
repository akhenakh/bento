"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[6781],{98969:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return u}});var i=t(85893),s=t(11151),r=t(74866),l=t(85162);const a={title:"Templating",description:"Learn how Bento templates work."},o=void 0,d={id:"configuration/templating",title:"Templating",description:"Learn how Bento templates work.",source:"@site/docs/configuration/templating.md",sourceDirName:"configuration",slug:"/configuration/templating",permalink:"/docs/configuration/templating",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/configuration/templating.md",tags:[],version:"current",frontMatter:{title:"Templating",description:"Learn how Bento templates work."},sidebar:"docs",previous:{title:"Unit Testing",permalink:"/docs/configuration/unit_testing"},next:{title:"Dynamic Inputs and Outputs",permalink:"/docs/configuration/dynamic_inputs_and_outputs"}},c={},u=[{value:"Fields",id:"fields",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>status</code>",id:"status",level:3},{value:"<code>categories</code>",id:"categories",level:3},{value:"<code>summary</code>",id:"summary",level:3},{value:"<code>description</code>",id:"description",level:3},{value:"<code>fields</code>",id:"fields-1",level:3},{value:"<code>fields[].name</code>",id:"fieldsname",level:3},{value:"<code>fields[].description</code>",id:"fieldsdescription",level:3},{value:"<code>fields[].type</code>",id:"fieldstype",level:3},{value:"<code>fields[].kind</code>",id:"fieldskind",level:3},{value:"<code>fields[].default</code>",id:"fieldsdefault",level:3},{value:"<code>fields[].advanced</code>",id:"fieldsadvanced",level:3},{value:"<code>mapping</code>",id:"mapping",level:3},{value:"<code>metrics_mapping</code>",id:"metrics_mapping",level:3},{value:"<code>tests</code>",id:"tests",level:3},{value:"<code>tests[].name</code>",id:"testsname",level:3},{value:"<code>tests[].config</code>",id:"testsconfig",level:3},{value:"<code>tests[].expected</code>",id:"testsexpected",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"EXPERIMENTAL",type:"warning",children:(0,i.jsx)(n.p,{children:"Templates are an experimental feature and therefore subject to change outside of major version releases."})}),"\n",(0,i.jsx)(n.p,{children:"Templates are a way to define new Bento components (similar to plugins) that are implemented by generating a Bento config snippet from pre-defined parameter fields. This is useful when a common pattern of Bento configuration is used but with varying parameters each time."}),"\n",(0,i.jsxs)(n.p,{children:["A template is defined in a YAML file that can be imported when Bento runs using the flag ",(0,i.jsx)(n.code,{children:"-t"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'bento -t "./templates/*.yaml" -c ./config.yaml\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The template describes the type of the component and configuration fields that can be used to customize it, followed by a ",(0,i.jsx)(n.a,{href:"/docs/guides/bloblang/about",children:"Bloblang mapping"})," that translates an object containing those fields into a bento config structure. This allows you to use logic to generate more complex configurations:"]}),"\n","\n","\n",(0,i.jsxs)(r.Z,{defaultValue:"template",values:[{label:"Template",value:"template"},{label:"Config",value:"config"},{label:"Result",value:"result"}],children:[(0,i.jsx)(l.Z,{value:"template",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:'name: aws_sqs_list\ntype: input\n\nfields:\n  - name: urls\n    type: string\n    kind: list\n  - name: region\n    type: string\n    default: us-east-1\n\nmapping: |\n  root.broker.inputs = this.urls.map_each(url -> {\n    "aws_sqs": {\n      "url": url,\n      "region": this.region,\n    }\n  })\n'})})}),(0,i.jsx)(l.Z,{value:"config",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"input:\n  aws_sqs_list:\n    urls:\n      - https://sqs.us-east-2.amazonaws.com/123456789012/MyQueue1\n      - https://sqs.us-east-2.amazonaws.com/123456789012/MyQueue2\n\npipeline:\n  processors:\n    - mapping: |\n        root.id = uuid_v4()\n        root.foo = this.inner.foo\n        root.body = this.outer\n"})})}),(0,i.jsx)(l.Z,{value:"result",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"input:\n  broker:\n    inputs:\n      - aws_sqs:\n          url: https://sqs.us-east-2.amazonaws.com/123456789012/MyQueue1\n          region: us-east-1\n      - aws_sqs:\n          url: https://sqs.us-east-2.amazonaws.com/123456789012/MyQueue2\n          region: us-east-1\n\npipeline:\n  processors:\n    - mapping: |\n        root.id = uuid_v4()\n        root.foo = this.inner.foo\n        root.body = this.outer\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["You can see more examples of templates at ",(0,i.jsx)(n.a,{href:"https://github.com/warpstreamlabs/bento/tree/main/config/template_examples",children:"https://github.com/warpstreamlabs/bento/tree/main/config/template_examples"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsx)(n.p,{children:"The schema of a template file is as follows:"}),"\n",(0,i.jsx)(n.h3,{id:"name",children:(0,i.jsx)(n.code,{children:"name"})}),"\n",(0,i.jsx)(n.p,{children:"The name of the component this template will create."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.h3,{id:"type",children:(0,i.jsx)(n.code,{children:"type"})}),"\n",(0,i.jsx)(n.p,{children:"The type of the component this template will create."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Options: ",(0,i.jsx)(n.code,{children:"cache"}),", ",(0,i.jsx)(n.code,{children:"input"}),", ",(0,i.jsx)(n.code,{children:"output"}),", ",(0,i.jsx)(n.code,{children:"processor"}),", ",(0,i.jsx)(n.code,{children:"rate_limit"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"status",children:(0,i.jsx)(n.code,{children:"status"})}),"\n",(0,i.jsx)(n.p,{children:"The stability of the template describing the likelihood that the configuration spec of the template, or it's behaviour, will change."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'"stable"'})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Summary"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"stable"})}),(0,i.jsx)(n.td,{children:"This template is stable and will therefore not change in a breaking way outside of major version releases."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"beta"})}),(0,i.jsx)(n.td,{children:"This template is beta and will therefore not change in a breaking way unless a major problem is found."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"experimental"})}),(0,i.jsx)(n.td,{children:"This template is experimental and therefore subject to breaking changes outside of major version releases."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"categories",children:(0,i.jsx)(n.code,{children:"categories"})}),"\n",(0,i.jsx)(n.p,{children:"An optional list of tags, which are used for arbitrarily grouping components in documentation."}),"\n",(0,i.jsxs)(n.p,{children:["Type: list of ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:"[]"})]}),"\n",(0,i.jsx)(n.h3,{id:"summary",children:(0,i.jsx)(n.code,{children:"summary"})}),"\n",(0,i.jsx)(n.p,{children:"A short summary of the component."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n",(0,i.jsx)(n.h3,{id:"description",children:(0,i.jsx)(n.code,{children:"description"})}),"\n",(0,i.jsx)(n.p,{children:"A longer form description of the component and how to use it."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n",(0,i.jsx)(n.h3,{id:"fields-1",children:(0,i.jsx)(n.code,{children:"fields"})}),"\n",(0,i.jsx)(n.p,{children:"The configuration fields of the template, fields specified here will be parsed from a Bento config and will be accessible from the template mapping."}),"\n",(0,i.jsxs)(n.p,{children:["Type: list of ",(0,i.jsx)(n.code,{children:"object"})]}),"\n",(0,i.jsx)(n.h3,{id:"fieldsname",children:(0,i.jsx)(n.code,{children:"fields[].name"})}),"\n",(0,i.jsx)(n.p,{children:"The name of the field."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.h3,{id:"fieldsdescription",children:(0,i.jsx)(n.code,{children:"fields[].description"})}),"\n",(0,i.jsx)(n.p,{children:"A description of the field."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n",(0,i.jsx)(n.h3,{id:"fieldstype",children:(0,i.jsx)(n.code,{children:"fields[].type"})}),"\n",(0,i.jsx)(n.p,{children:"The scalar type of the field."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Summary"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"standard string type"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"int"})}),(0,i.jsx)(n.td,{children:"standard integer type"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"float"})}),(0,i.jsx)(n.td,{children:"standard float type"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"bool"})}),(0,i.jsx)(n.td,{children:"a boolean true/false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"unknown"})}),(0,i.jsx)(n.td,{children:"allows for nesting arbitrary configuration inside of a field"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"fieldskind",children:(0,i.jsx)(n.code,{children:"fields[].kind"})}),"\n",(0,i.jsx)(n.p,{children:"The kind of the field."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'"scalar"'}),(0,i.jsx)(n.br,{}),"\n","Options: ",(0,i.jsx)(n.code,{children:"scalar"}),", ",(0,i.jsx)(n.code,{children:"map"}),", ",(0,i.jsx)(n.code,{children:"list"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"fieldsdefault",children:(0,i.jsx)(n.code,{children:"fields[].default"})}),"\n",(0,i.jsx)(n.p,{children:"An optional default value for the field. If a default value is not specified then a configuration without the field is considered incorrect."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"unknown"})]}),"\n",(0,i.jsx)(n.h3,{id:"fieldsadvanced",children:(0,i.jsx)(n.code,{children:"fields[].advanced"})}),"\n",(0,i.jsx)(n.p,{children:"Whether this field is considered advanced."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"bool"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsx)(n.h3,{id:"mapping",children:(0,i.jsx)(n.code,{children:"mapping"})}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"/docs/guides/bloblang/about",children:"Bloblang"})," mapping that translates the fields of the template into a valid Bento configuration for the target component type."]}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.h3,{id:"metrics_mapping",children:(0,i.jsx)(n.code,{children:"metrics_mapping"})}),"\n",(0,i.jsxs)(n.p,{children:["An optional ",(0,i.jsx)(n.a,{href:"/docs/guides/bloblang/about",children:"Bloblang mapping"})," that allows you to rename or prevent certain metrics paths from being exported. For more information check out the ",(0,i.jsx)(n.a,{href:"/docs/components/metrics/about#metric-mapping",children:"metrics documentation"}),". When metric paths are created, renamed and dropped a trace log is written, enabling TRACE level logging is therefore a good way to diagnose path mappings."]}),"\n",(0,i.jsx)(n.p,{children:"Invocations of this mapping are able to reference a variable $label in order to obtain the value of the label provided to the template config. This allows you to match labels with the root of the config."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:'# Examples\n\nmetrics_mapping: this.replace("input", "source").replace("output", "sink")\n\nmetrics_mapping: |-\n  root = if ![\n    "input_received",\n    "input_latency",\n    "output_sent"\n  ].contains(this) { deleted() }\n'})}),"\n",(0,i.jsx)(n.h3,{id:"tests",children:(0,i.jsx)(n.code,{children:"tests"})}),"\n",(0,i.jsxs)(n.p,{children:["Optional unit test definitions for the template that verify certain configurations produce valid configs. These tests are executed with the command ",(0,i.jsx)(n.code,{children:"bento template lint"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Type: list of ",(0,i.jsx)(n.code,{children:"object"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:"[]"})]}),"\n",(0,i.jsx)(n.h3,{id:"testsname",children:(0,i.jsx)(n.code,{children:"tests[].name"})}),"\n",(0,i.jsx)(n.p,{children:"A name to identify the test."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsx)(n.h3,{id:"testsconfig",children:(0,i.jsx)(n.code,{children:"tests[].config"})}),"\n",(0,i.jsx)(n.p,{children:"A configuration to run this test with, the config resulting from applying the template with this config will be linted."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"object"})]}),"\n",(0,i.jsx)(n.h3,{id:"testsexpected",children:(0,i.jsx)(n.code,{children:"tests[].expected"})}),"\n",(0,i.jsx)(n.p,{children:"An optional configuration describing the expected result of applying the template, when specified the result will be diffed and any mismatching fields will be reported as a test error."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"object"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return l}});t(67294);var i=t(86010),s={tabItem:"tabItem_Ymn6"},r=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(s.tabItem,l),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return w}});var i=t(67294),s=t(86010),r=t(12466),l=t(16550),a=t(20469),o=t(91980),d=t(67392),c=t(50012);function u(e){var n,t;return null!=(n=null==(t=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[l,o]=(0,i.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+i.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const s=null!=(n=i.find((e=>e.default)))?n:i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[d,u]=f({queryString:t,groupId:s}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[s,r]=(0,c.Nk)(t);return[s,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),j=(()=>{const e=null!=d?d:m;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);o(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=t(72389),j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=t(85893);function b(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),s=a[t].value;s!==i&&(d(n),l(s))},u=e=>{var n;let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var i;const n=o.indexOf(e.currentTarget)+1;t=null!=(i=o[n])?i:o[0];break}case"ArrowLeft":{var s;const n=o.indexOf(e.currentTarget)-1;t=null!=(s=o[n])?s:o[o.length-1];break}}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...r,className:(0,s.Z)("tabs__item",j.tabItem,null==r?void 0:r.className,{"tabs__item--active":i===n}),children:null!=t?t:n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function w(e){const n=(0,x.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var i=t(67294);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);