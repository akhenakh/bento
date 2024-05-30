"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[383],{44651:function(e,n,s){s.r(n),s.d(n,{assets:function(){return c},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var t=s(85893),r=s(11151),i=s(74866),l=s(85162);const o={title:"aws_sns",slug:"aws_sns",type:"output",status:"stable",categories:["Services","AWS"],name:"aws_sns"},a=void 0,d={id:"components/outputs/aws_sns",title:"aws_sns",description:"\x3c!--",source:"@site/docs/components/outputs/aws_sns.md",sourceDirName:"components/outputs",slug:"/components/outputs/aws_sns",permalink:"/docs/components/outputs/aws_sns",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/outputs/aws_sns.md",tags:[],version:"current",frontMatter:{title:"aws_sns",slug:"aws_sns",type:"output",status:"stable",categories:["Services","AWS"],name:"aws_sns"},sidebar:"docs",previous:{title:"aws_s3",permalink:"/docs/components/outputs/aws_s3"},next:{title:"aws_sqs",permalink:"/docs/components/outputs/aws_sqs"}},c={},u=[{value:"Credentials",id:"credentials",level:3},{value:"Performance",id:"performance",level:2},{value:"Fields",id:"fields",level:2},{value:"<code>topic_arn</code>",id:"topic_arn",level:3},{value:"<code>message_group_id</code>",id:"message_group_id",level:3},{value:"<code>message_deduplication_id</code>",id:"message_deduplication_id",level:3},{value:"<code>max_in_flight</code>",id:"max_in_flight",level:3},{value:"<code>metadata</code>",id:"metadata",level:3},{value:"<code>metadata.exclude_prefixes</code>",id:"metadataexclude_prefixes",level:3},{value:"<code>timeout</code>",id:"timeout",level:3},{value:"<code>region</code>",id:"region",level:3},{value:"<code>endpoint</code>",id:"endpoint",level:3},{value:"<code>credentials</code>",id:"credentials-1",level:3},{value:"<code>credentials.profile</code>",id:"credentialsprofile",level:3},{value:"<code>credentials.id</code>",id:"credentialsid",level:3},{value:"<code>credentials.secret</code>",id:"credentialssecret",level:3},{value:"<code>credentials.token</code>",id:"credentialstoken",level:3},{value:"<code>credentials.from_ec2_role</code>",id:"credentialsfrom_ec2_role",level:3},{value:"<code>credentials.role</code>",id:"credentialsrole",level:3},{value:"<code>credentials.role_external_id</code>",id:"credentialsrole_external_id",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Sends messages to an AWS SNS topic."}),"\n",(0,t.jsx)(n.p,{children:"Introduced in version 3.36.0."}),"\n",(0,t.jsxs)(i.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,t.jsx)(l.Z,{value:"common",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\noutput:\n  label: ""\n  aws_sns:\n    topic_arn: "" # No default (required)\n    message_group_id: "" # No default (optional)\n    message_deduplication_id: "" # No default (optional)\n    max_in_flight: 64\n    metadata:\n      exclude_prefixes: []\n'})})}),(0,t.jsx)(l.Z,{value:"advanced",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\noutput:\n  label: ""\n  aws_sns:\n    topic_arn: "" # No default (required)\n    message_group_id: "" # No default (optional)\n    message_deduplication_id: "" # No default (optional)\n    max_in_flight: 64\n    metadata:\n      exclude_prefixes: []\n    timeout: 5s\n    region: ""\n    endpoint: ""\n    credentials:\n      profile: ""\n      id: ""\n      secret: ""\n      token: ""\n      from_ec2_role: false\n      role: ""\n      role_external_id: ""\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"credentials",children:"Credentials"}),"\n",(0,t.jsxs)(n.p,{children:["By default Bento will use a shared credentials file when connecting to AWS services. It's also possible to set them explicitly at the component level, allowing you to transfer data across accounts. You can find out more ",(0,t.jsx)(n.a,{href:"/docs/guides/cloud/aws",children:"in this document"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,t.jsxs)(n.p,{children:["This output benefits from sending multiple messages in flight in parallel for improved performance. You can tune the max number of in flight messages (or message batches) with the field ",(0,t.jsx)(n.code,{children:"max_in_flight"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsx)(n.h3,{id:"topic_arn",children:(0,t.jsx)(n.code,{children:"topic_arn"})}),"\n",(0,t.jsx)(n.p,{children:"The topic to publish to."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.h3,{id:"message_group_id",children:(0,t.jsx)(n.code,{children:"message_group_id"})}),"\n",(0,t.jsxs)(n.p,{children:["An optional group ID to set for messages.\nThis field supports ",(0,t.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Requires version 3.60.0 or newer"]}),"\n",(0,t.jsx)(n.h3,{id:"message_deduplication_id",children:(0,t.jsx)(n.code,{children:"message_deduplication_id"})}),"\n",(0,t.jsxs)(n.p,{children:["An optional deduplication ID to set for messages.\nThis field supports ",(0,t.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Requires version 3.60.0 or newer"]}),"\n",(0,t.jsx)(n.h3,{id:"max_in_flight",children:(0,t.jsx)(n.code,{children:"max_in_flight"})}),"\n",(0,t.jsx)(n.p,{children:"The maximum number of messages to have in flight at a given time. Increase this to improve throughput."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"int"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"64"})]}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:(0,t.jsx)(n.code,{children:"metadata"})}),"\n",(0,t.jsx)(n.p,{children:"Specify criteria for which metadata values are sent as headers."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"object"}),(0,t.jsx)(n.br,{}),"\n","Requires version 3.60.0 or newer"]}),"\n",(0,t.jsx)(n.h3,{id:"metadataexclude_prefixes",children:(0,t.jsx)(n.code,{children:"metadata.exclude_prefixes"})}),"\n",(0,t.jsx)(n.p,{children:"Provide a list of explicit metadata key prefixes to be excluded when adding metadata to sent messages."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"array"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"[]"})]}),"\n",(0,t.jsx)(n.h3,{id:"timeout",children:(0,t.jsx)(n.code,{children:"timeout"})}),"\n",(0,t.jsx)(n.p,{children:"The maximum period to wait on an upload before abandoning it and reattempting."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'"5s"'})]}),"\n",(0,t.jsx)(n.h3,{id:"region",children:(0,t.jsx)(n.code,{children:"region"})}),"\n",(0,t.jsx)(n.p,{children:"The AWS region to target."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"endpoint",children:(0,t.jsx)(n.code,{children:"endpoint"})}),"\n",(0,t.jsx)(n.p,{children:"Allows you to specify a custom endpoint for the AWS API."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"credentials-1",children:(0,t.jsx)(n.code,{children:"credentials"})}),"\n",(0,t.jsxs)(n.p,{children:["Optional manual configuration of AWS credentials to use. More information can be found ",(0,t.jsx)(n.a,{href:"/docs/guides/cloud/aws",children:"in this document"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"object"})]}),"\n",(0,t.jsx)(n.h3,{id:"credentialsprofile",children:(0,t.jsx)(n.code,{children:"credentials.profile"})}),"\n",(0,t.jsxs)(n.p,{children:["A profile from ",(0,t.jsx)(n.code,{children:"~/.aws/credentials"})," to use."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"credentialsid",children:(0,t.jsx)(n.code,{children:"credentials.id"})}),"\n",(0,t.jsx)(n.p,{children:"The ID of credentials to use."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"credentialssecret",children:(0,t.jsx)(n.code,{children:"credentials.secret"})}),"\n",(0,t.jsx)(n.p,{children:"The secret for the credentials being used."}),"\n",(0,t.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,t.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,t.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"credentialstoken",children:(0,t.jsx)(n.code,{children:"credentials.token"})}),"\n",(0,t.jsx)(n.p,{children:"The token for the credentials being used, required when using short term credentials."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"credentialsfrom_ec2_role",children:(0,t.jsx)(n.code,{children:"credentials.from_ec2_role"})}),"\n",(0,t.jsxs)(n.p,{children:["Use the credentials of a host EC2 machine configured to assume ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",children:"an IAM role associated with the instance"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"false"}),(0,t.jsx)(n.br,{}),"\n","Requires version 4.2.0 or newer"]}),"\n",(0,t.jsx)(n.h3,{id:"credentialsrole",children:(0,t.jsx)(n.code,{children:"credentials.role"})}),"\n",(0,t.jsx)(n.p,{children:"A role ARN to assume."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"credentialsrole_external_id",children:(0,t.jsx)(n.code,{children:"credentials.role_external_id"})}),"\n",(0,t.jsx)(n.p,{children:"An external ID to provide when assuming a role."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:function(e,n,s){s.d(n,{Z:function(){return l}});s(67294);var t=s(86010),r={tabItem:"tabItem_Ymn6"},i=s(85893);function l(e){let{children:n,hidden:s,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,l),hidden:s,children:n})}},74866:function(e,n,s){s.d(n,{Z:function(){return w}});var t=s(67294),r=s(86010),i=s(12466),l=s(16550),o=s(20469),a=s(91980),d=s(67392),c=s(50012);function u(e){var n,s;return null!=(n=null==(s=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:s.filter(Boolean))?n:[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:s}=e;const r=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:s});return[(0,a._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=h(e),[l,a]=(0,t.useState)((()=>function(e){var n;let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+s+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return s}const r=null!=(n=t.find((e=>e.default)))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[d,u]=f({queryString:s,groupId:r}),[x,m]=function(e){let{groupId:n}=e;const s=function(e){return e?"docusaurus.tab."+e:null}(n),[r,i]=(0,c.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),j=(()=>{const e=null!=d?d:x;return p({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{j&&a(j)}),[j]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);a(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=s(72389),j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=s(85893);function v(e){let{className:n,block:s,selectedValue:t,selectValue:l,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const n=e.currentTarget,s=a.indexOf(n),r=o[s].value;r!==t&&(d(n),l(r))},u=e=>{var n;let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var t;const n=a.indexOf(e.currentTarget)+1;s=null!=(t=a[n])?t:a[0];break}case"ArrowLeft":{var r;const n=a.indexOf(e.currentTarget)-1;s=null!=(r=a[n])?r:a[a.length-1];break}}null==(n=s)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>a.push(e),onKeyDown:u,onClick:c,...i,className:(0,r.Z)("tabs__item",j.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=s?s:n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function _(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(b,{...e,...n})]})}function w(e){const n=(0,m.Z)();return(0,g.jsx)(_,{...e,children:u(e.children)},String(n))}},11151:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(67294);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);