"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[4034],{85257:function(e,r,n){n.r(r),n.d(r,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return h}});var s=n(85893),o=n(11151),t=n(74866),a=n(85162);const i={title:"workflow",slug:"workflow",type:"processor",status:"stable",categories:["Composition"],name:"workflow"},l=void 0,c={id:"components/processors/workflow",title:"workflow",description:"\x3c!--",source:"@site/docs/components/processors/workflow.md",sourceDirName:"components/processors",slug:"/components/processors/workflow",permalink:"/docs/components/processors/workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/workflow.md",tags:[],version:"current",frontMatter:{title:"workflow",slug:"workflow",type:"processor",status:"stable",categories:["Composition"],name:"workflow"},sidebar:"docs",previous:{title:"while",permalink:"/docs/components/processors/while"},next:{title:"xml",permalink:"/docs/components/processors/xml"}},d={},h=[{value:"Why Use a Workflow",id:"why-use-a-workflow",level:2},{value:"Performance",id:"performance",level:3},{value:"Simplifying Processor Topology",id:"simplifying-processor-topology",level:3},{value:"Examples",id:"examples",level:2},{value:"Fields",id:"fields",level:2},{value:"<code>meta_path</code>",id:"meta_path",level:3},{value:"<code>order</code>",id:"order",level:3},{value:"<code>branch_resources</code>",id:"branch_resources",level:3},{value:"<code>branches</code>",id:"branches",level:3},{value:"<code>branches.&lt;name&gt;.request_map</code>",id:"branchesnamerequest_map",level:3},{value:"<code>branches.&lt;name&gt;.processors</code>",id:"branchesnameprocessors",level:3},{value:"<code>branches.&lt;name&gt;.result_map</code>",id:"branchesnameresult_map",level:3},{value:"Structured Metadata",id:"structured-metadata",level:2},{value:"Resources",id:"resources",level:2},{value:"Resource Error Conditions",id:"resource-error-conditions",level:3},{value:"Error Handling",id:"error-handling",level:2}];function u(e){const r={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Executes a topology of ",(0,s.jsxs)(r.a,{href:"/docs/components/processors/branch",children:[(0,s.jsx)(r.code,{children:"branch"})," processors"]}),", performing them in parallel where possible."]}),"\n",(0,s.jsxs)(t.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,s.jsx)(a.Z,{value:"common",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yml",children:'# Common config fields, showing default values\nlabel: ""\nworkflow:\n  meta_path: meta.workflow\n  order: []\n  branches: {}\n'})})}),(0,s.jsx)(a.Z,{value:"advanced",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yml",children:'# All config fields, showing default values\nlabel: ""\nworkflow:\n  meta_path: meta.workflow\n  order: []\n  branch_resources: []\n  branches: {}\n'})})})]}),"\n",(0,s.jsx)(r.h2,{id:"why-use-a-workflow",children:"Why Use a Workflow"}),"\n",(0,s.jsx)(r.h3,{id:"performance",children:"Performance"}),"\n",(0,s.jsxs)(r.p,{children:["Most of the time the best way to compose processors is also the simplest, just configure them in series. This is because processors are often CPU bound, low-latency, and you can gain vertical scaling by increasing the number of processor pipeline threads, allowing Bento to process ",(0,s.jsx)(r.a,{href:"/docs/configuration/processing_pipelines",children:"multiple messages in parallel"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["However, some processors such as ",(0,s.jsx)(r.a,{href:"/docs/components/processors/http",children:(0,s.jsx)(r.code,{children:"http"})}),", ",(0,s.jsx)(r.a,{href:"/docs/components/processors/aws_lambda",children:(0,s.jsx)(r.code,{children:"aws_lambda"})})," or ",(0,s.jsx)(r.a,{href:"/docs/components/processors/cache",children:(0,s.jsx)(r.code,{children:"cache"})})," interact with external services and therefore spend most of their time waiting for a response. These processors tend to be high-latency and low CPU activity, which causes messages to process slowly."]}),"\n",(0,s.jsx)(r.p,{children:"When a processing pipeline contains multiple network processors that aren't dependent on each other we can benefit from performing these processors in parallel for each individual message, reducing the overall message processing latency."}),"\n",(0,s.jsx)(r.h3,{id:"simplifying-processor-topology",children:"Simplifying Processor Topology"}),"\n",(0,s.jsxs)(r.p,{children:["A workflow is often expressed as a ",(0,s.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph",children:"DAG"})," of processing stages, where each stage can result in N possible next stages, until finally the flow ends at an exit node."]}),"\n",(0,s.jsx)(r.p,{children:"For example, if we had processing stages A, B, C and D, where stage A could result in either stage B or C being next, always followed by D, it might look something like this:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"     /--\x3e B --\\\nA --|          |--\x3e D\n     \\--\x3e C --/\n"})}),"\n",(0,s.jsxs)(r.p,{children:["This flow would be easy to express in a standard Bento config, we could simply use a ",(0,s.jsxs)(r.a,{href:"/docs/components/processors/switch",children:[(0,s.jsx)(r.code,{children:"switch"})," processor"]})," to route to either B or C depending on a condition on the result of A. However, this method of flow control quickly becomes unfeasible as the DAG gets more complicated, imagine expressing this flow using switch processors:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-text",children:"      /--\x3e B -------------|--\x3e D\n     /                   /\nA --|          /--\x3e E --|\n     \\--\x3e C --|          \\\n               \\----------|--\x3e F\n"})}),"\n",(0,s.jsxs)(r.p,{children:["And imagine doing so knowing that the diagram is subject to change over time. Yikes! Instead, with a workflow we can either trust it to automatically resolve the DAG or express it manually as simply as ",(0,s.jsx)(r.code,{children:"order: [ [ A ], [ B, C ], [ E ], [ D, F ] ]"}),", and the conditional logic for determining if a stage is executed is defined as part of the branch itself."]}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.Z,{defaultValue:"Automatic Ordering",values:[{label:"Automatic Ordering",value:"Automatic Ordering"},{label:"Conditional Branches",value:"Conditional Branches"},{label:"Resources",value:"Resources"}],children:[(0,s.jsxs)(a.Z,{value:"Automatic Ordering",children:[(0,s.jsxs)(r.p,{children:["When the field ",(0,s.jsx)(r.code,{children:"order"})," is omitted a best attempt is made to determine a dependency tree between branches based on their request and result mappings. In the following example the branches foo and bar will be executed first in parallel, and afterwards the branch baz will be executed."]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - workflow:\n        meta_path: meta.workflow\n        branches:\n          foo:\n            request_map: 'root = \"\"'\n            processors:\n              - http:\n                  url: TODO\n            result_map: 'root.foo = this'\n\n          bar:\n            request_map: 'root = this.body'\n            processors:\n              - aws_lambda:\n                  function: TODO\n            result_map: 'root.bar = this'\n\n          baz:\n            request_map: |\n              root.fooid = this.foo.id\n              root.barstuff = this.bar.content\n            processors:\n              - cache:\n                  resource: TODO\n                  operator: set\n                  key: ${! json(\"fooid\") }\n                  value: ${! json(\"barstuff\") }\n"})})]}),(0,s.jsxs)(a.Z,{value:"Conditional Branches",children:[(0,s.jsxs)(r.p,{children:["Branches of a workflow are skipped when the ",(0,s.jsx)(r.code,{children:"request_map"})," assigns ",(0,s.jsx)(r.code,{children:"deleted()"}),' to the root. In this example the branch A is executed when the document type is "foo", and branch B otherwise. Branch C is executed afterwards and is skipped unless either A or B successfully provided a result at ',(0,s.jsx)(r.code,{children:"tmp.result"}),"."]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - workflow:\n        branches:\n          A:\n            request_map: |\n              root = if this.document.type != \"foo\" {\n                  deleted()\n              }\n            processors:\n              - http:\n                  url: TODO\n            result_map: 'root.tmp.result = this'\n\n          B:\n            request_map: |\n              root = if this.document.type == \"foo\" {\n                  deleted()\n              }\n            processors:\n              - aws_lambda:\n                  function: TODO\n            result_map: 'root.tmp.result = this'\n\n          C:\n            request_map: |\n              root = if this.tmp.result != null {\n                  deleted()\n              }\n            processors:\n              - http:\n                  url: TODO_SOMEWHERE_ELSE\n            result_map: 'root.tmp.result = this'\n"})})]}),(0,s.jsxs)(a.Z,{value:"Resources",children:[(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"order"})," field can be used in order to refer to ",(0,s.jsx)(r.a,{href:"#resources",children:"branch processor resources"}),", this can sometimes make your pipeline configuration cleaner, as well as allowing you to reuse branch configurations in order places. It's also possible to mix and match branches configured within the workflow and configured as resources."]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - workflow:\n        order: [ [ foo, bar ], [ baz ] ]\n        branches:\n          bar:\n            request_map: 'root = this.body'\n            processors:\n              - aws_lambda:\n                  function: TODO\n            result_map: 'root.bar = this'\n\nprocessor_resources:\n  - label: foo\n    branch:\n      request_map: 'root = \"\"'\n      processors:\n        - http:\n            url: TODO\n      result_map: 'root.foo = this'\n\n  - label: baz\n    branch:\n      request_map: |\n        root.fooid = this.foo.id\n        root.barstuff = this.bar.content\n      processors:\n        - cache:\n            resource: TODO\n            operator: set\n            key: ${! json(\"fooid\") }\n            value: ${! json(\"barstuff\") }\n"})})]})]}),"\n",(0,s.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsx)(r.h3,{id:"meta_path",children:(0,s.jsx)(r.code,{children:"meta_path"})}),"\n",(0,s.jsxs)(r.p,{children:["A ",(0,s.jsx)(r.a,{href:"/docs/configuration/field_paths",children:"dot path"})," indicating where to store and reference ",(0,s.jsx)(r.a,{href:"#structured-metadata",children:"structured metadata"})," about the workflow execution."]}),"\n",(0,s.jsxs)(r.p,{children:["Type: ",(0,s.jsx)(r.code,{children:"string"}),(0,s.jsx)(r.br,{}),"\n","Default: ",(0,s.jsx)(r.code,{children:'"meta.workflow"'})]}),"\n",(0,s.jsx)(r.h3,{id:"order",children:(0,s.jsx)(r.code,{children:"order"})}),"\n",(0,s.jsxs)(r.p,{children:["An explicit declaration of branch ordered tiers, which describes the order in which parallel tiers of branches should be executed. Branches should be identified by the name as they are configured in the field ",(0,s.jsx)(r.code,{children:"branches"}),". It's also possible to specify branch processors configured ",(0,s.jsx)(r.a,{href:"#resources",children:"as a resource"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Type: ",(0,s.jsx)(r.code,{children:"two-dimensional array"}),(0,s.jsx)(r.br,{}),"\n","Default: ",(0,s.jsx)(r.code,{children:"[]"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yml",children:"# Examples\n\norder:\n  - - foo\n    - bar\n  - - baz\n\norder:\n  - - foo\n  - - bar\n  - - baz\n"})}),"\n",(0,s.jsx)(r.h3,{id:"branch_resources",children:(0,s.jsx)(r.code,{children:"branch_resources"})}),"\n",(0,s.jsxs)(r.p,{children:["An optional list of ",(0,s.jsxs)(r.a,{href:"/docs/components/processors/branch",children:[(0,s.jsx)(r.code,{children:"branch"})," processor"]})," names that are configured as ",(0,s.jsx)(r.a,{href:"#resources",children:"resources"}),". These resources will be included in the workflow with any branches configured inline within the ",(0,s.jsx)(r.a,{href:"#branches",children:(0,s.jsx)(r.code,{children:"branches"})})," field. The order and parallelism in which branches are executed is automatically resolved based on the mappings of each branch. When using resources with an explicit order it is not necessary to list resources in this field."]}),"\n",(0,s.jsxs)(r.p,{children:["Type: ",(0,s.jsx)(r.code,{children:"array"}),(0,s.jsx)(r.br,{}),"\n","Default: ",(0,s.jsx)(r.code,{children:"[]"}),(0,s.jsx)(r.br,{}),"\n","Requires version 3.38.0 or newer"]}),"\n",(0,s.jsx)(r.h3,{id:"branches",children:(0,s.jsx)(r.code,{children:"branches"})}),"\n",(0,s.jsxs)(r.p,{children:["An object of named ",(0,s.jsxs)(r.a,{href:"/docs/components/processors/branch",children:[(0,s.jsx)(r.code,{children:"branch"})," processors"]})," that make up the workflow. The order and parallelism in which branches are executed can either be made explicit with the field ",(0,s.jsx)(r.code,{children:"order"}),", or if omitted an attempt is made to automatically resolve an ordering based on the mappings of each branch."]}),"\n",(0,s.jsxs)(r.p,{children:["Type: ",(0,s.jsx)(r.code,{children:"object"}),(0,s.jsx)(r.br,{}),"\n","Default: ",(0,s.jsx)(r.code,{children:"{}"})]}),"\n",(0,s.jsx)(r.h3,{id:"branchesnamerequest_map",children:(0,s.jsx)(r.code,{children:"branches.<name>.request_map"})}),"\n",(0,s.jsxs)(r.p,{children:["A ",(0,s.jsx)(r.a,{href:"/docs/guides/bloblang/about",children:"Bloblang mapping"})," that describes how to create a request payload suitable for the child processors of this branch. If left empty then the branch will begin with an exact copy of the origin message (including metadata)."]}),"\n",(0,s.jsxs)(r.p,{children:["Type: ",(0,s.jsx)(r.code,{children:"string"}),(0,s.jsx)(r.br,{}),"\n","Default: ",(0,s.jsx)(r.code,{children:'""'})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yml",children:'# Examples\n\nrequest_map: |-\n  root = {\n  \t"id": this.doc.id,\n  \t"content": this.doc.body.text\n  }\n\nrequest_map: |-\n  root = if this.type == "foo" {\n  \tthis.foo.request\n  } else {\n  \tdeleted()\n  }\n'})}),"\n",(0,s.jsx)(r.h3,{id:"branchesnameprocessors",children:(0,s.jsx)(r.code,{children:"branches.<name>.processors"})}),"\n",(0,s.jsx)(r.p,{children:"A list of processors to apply to mapped requests. When processing message batches the resulting batch must match the size and ordering of the input batch, therefore filtering, grouping should not be performed within these processors."}),"\n",(0,s.jsxs)(r.p,{children:["Type: ",(0,s.jsx)(r.code,{children:"array"})]}),"\n",(0,s.jsx)(r.h3,{id:"branchesnameresult_map",children:(0,s.jsx)(r.code,{children:"branches.<name>.result_map"})}),"\n",(0,s.jsxs)(r.p,{children:["A ",(0,s.jsx)(r.a,{href:"/docs/guides/bloblang/about",children:"Bloblang mapping"})," that describes how the resulting messages from branched processing should be mapped back into the original payload. If left empty the origin message will remain unchanged (including metadata)."]}),"\n",(0,s.jsxs)(r.p,{children:["Type: ",(0,s.jsx)(r.code,{children:"string"}),(0,s.jsx)(r.br,{}),"\n","Default: ",(0,s.jsx)(r.code,{children:'""'})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yml",children:'# Examples\n\nresult_map: |-\n  meta foo_code = metadata("code")\n  root.foo_result = this\n\nresult_map: |-\n  meta = metadata()\n  root.bar.body = this.body\n  root.bar.id = this.user.id\n\nresult_map: root.raw_result = content().string()\n\nresult_map: |-\n  root.enrichments.foo = if metadata("request_failed") != null {\n    throw(metadata("request_failed"))\n  } else {\n    this\n  }\n\nresult_map: |-\n  # Retain only the updated metadata fields which were present in the origin message\n  meta = metadata().filter(v -> @.get(v.key) != null)\n'})}),"\n",(0,s.jsx)(r.h2,{id:"structured-metadata",children:"Structured Metadata"}),"\n",(0,s.jsxs)(r.p,{children:["When the field ",(0,s.jsx)(r.code,{children:"meta_path"})," is non-empty the workflow processor creates an object describing which workflows were successful, skipped or failed for each message and stores the object within the message at the end."]}),"\n",(0,s.jsx)(r.p,{children:"The object is of the following form:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n\t"succeeded": [ "foo" ],\n\t"skipped": [ "bar" ],\n\t"failed": {\n\t\t"baz": "the error message from the branch"\n\t}\n}\n'})}),"\n",(0,s.jsx)(r.p,{children:"If a message already has a meta object at the given path when it is processed then the object is used in order to determine which branches have already been performed on the message (or skipped) and can therefore be skipped on this run."}),"\n",(0,s.jsx)(r.p,{children:"This is a useful pattern when replaying messages that have failed some branches previously. For example, given the above example object the branches foo and bar would automatically be skipped, and baz would be reattempted."}),"\n",(0,s.jsxs)(r.p,{children:["The previous meta object will also be preserved in the field ",(0,s.jsx)(r.code,{children:"<meta_path>.previous"})," when the new meta object is written, preserving a full record of all workflow executions."]}),"\n",(0,s.jsxs)(r.p,{children:["If a field ",(0,s.jsx)(r.code,{children:"<meta_path>.apply"})," exists in the meta object for a message and is an array then it will be used as an explicit list of stages to apply, all other stages will be skipped."]}),"\n",(0,s.jsx)(r.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(r.p,{children:["It's common to configure processors (and other components) ",(0,s.jsx)(r.a,{href:"/docs/configuration/resources",children:"as resources"})," in order to keep the pipeline configuration cleaner. With the workflow processor you can include branch processors configured as resources within your workflow either by specifying them by name in the field ",(0,s.jsx)(r.code,{children:"order"}),", if Bento doesn't find a branch within the workflow configuration of that name it'll refer to the resources."]}),"\n",(0,s.jsxs)(r.p,{children:["Alternatively, if you do not wish to have an explicit ordering, you can add resource names to the field ",(0,s.jsx)(r.code,{children:"branch_resources"})," and they will be included in the workflow with automatic DAG resolution along with any branches configured in the ",(0,s.jsx)(r.code,{children:"branches"})," field."]}),"\n",(0,s.jsx)(r.h3,{id:"resource-error-conditions",children:"Resource Error Conditions"}),"\n",(0,s.jsx)(r.p,{children:"There are two error conditions that could potentially occur when resources included in your workflow are mutated, and if you are planning to mutate resources in your workflow it is important that you understand them."}),"\n",(0,s.jsx)(r.p,{children:"The first error case is that a resource in the workflow is removed and not replaced, when this happens the workflow will still be executed but the individual branch will fail. This should only happen if you explicitly delete a branch resource, as any mutation operation will create the new resource before removing the old one."}),"\n",(0,s.jsxs)(r.p,{children:["The second error case is when automatic DAG resolution is being used and a resource in the workflow is changed in a way that breaks the DAG (circular dependencies, etc). When this happens it is impossible to execute the workflow and therefore the processor will fail, which is possible to capture and handle using ",(0,s.jsx)(r.a,{href:"/docs/configuration/error_handling",children:"standard error handling patterns"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsxs)(r.p,{children:["The recommended approach to handle failures within a workflow is to query against the ",(0,s.jsx)(r.a,{href:"#structured-metadata",children:"structured metadata"})," it provides, as it provides granular information about exactly which branches failed and which ones succeeded and therefore aren't necessary to perform again."]}),"\n",(0,s.jsxs)(r.p,{children:["For example, if our meta object is stored at the path ",(0,s.jsx)(r.code,{children:"meta.workflow"})," and we wanted to check whether a message has failed for any branch we can do that using a ",(0,s.jsx)(r.a,{href:"/docs/guides/bloblang/about",children:"Bloblang query"})," like ",(0,s.jsx)(r.code,{children:"this.meta.workflow.failed.length() | 0 > 0"}),", or to check whether a specific branch failed we can use ",(0,s.jsx)(r.code,{children:'this.exists("meta.workflow.failed.foo")'}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["However, if structured metadata is disabled by setting the field ",(0,s.jsx)(r.code,{children:"meta_path"})," to empty then the workflow processor instead adds a general error flag to messages when any executed branch fails. In this case it's possible to handle failures using ",(0,s.jsx)(r.a,{href:"/docs/configuration/error_handling",children:"standard error handling patterns"}),"."]})]})}function p(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},85162:function(e,r,n){n.d(r,{Z:function(){return a}});n(67294);var s=n(86010),o={tabItem:"tabItem_Ymn6"},t=n(85893);function a(e){let{children:r,hidden:n,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(o.tabItem,a),hidden:n,children:r})}},74866:function(e,r,n){n.d(r,{Z:function(){return v}});var s=n(67294),o=n(86010),t=n(12466),a=n(16550),i=n(20469),l=n(91980),c=n(67392),d=n(50012);function h(e){var r,n;return null!=(r=null==(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function u(e){const{values:r,children:n}=e;return(0,s.useMemo)((()=>{const e=null!=r?r:function(e){return h(e).map((e=>{let{props:{value:r,label:n,attributes:s,default:o}}=e;return{value:r,label:n,attributes:s,default:o}}))}(n);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:n}=e;const o=(0,a.k6)(),t=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,l._X)(t),(0,s.useCallback)((e=>{if(!t)return;const r=new URLSearchParams(o.location.search);r.set(t,e),o.replace({...o.location,search:r.toString()})}),[t,o])]}function m(e){const{defaultValue:r,queryString:n=!1,groupId:o}=e,t=u(e),[a,l]=(0,s.useState)((()=>function(e){var r;let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const o=null!=(r=s.find((e=>e.default)))?r:s[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:r,tabValues:t}))),[c,h]=f({queryString:n,groupId:o}),[m,b]=function(e){let{groupId:r}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(r),[o,t]=(0,d.Nk)(n);return[o,(0,s.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:o}),w=(()=>{const e=null!=c?c:m;return p({value:e,tabValues:t})?e:null})();(0,i.Z)((()=>{w&&l(w)}),[w]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error("Can't select invalid tab value="+e);l(e),h(e),b(e)}),[h,b,t]),tabValues:t}}var b=n(72389),w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},x=n(85893);function g(e){let{className:r,block:n,selectedValue:s,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),d=e=>{const r=e.currentTarget,n=l.indexOf(r),o=i[n].value;o!==s&&(c(r),a(o))},h=e=>{var r;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const r=l.indexOf(e.currentTarget)+1;n=null!=(s=l[r])?s:l[0];break}case"ArrowLeft":{var o;const r=l.indexOf(e.currentTarget)-1;n=null!=(o=l[r])?o:l[l.length-1];break}}null==(r=n)||r.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:t}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>l.push(e),onKeyDown:h,onClick:d,...t,className:(0,o.Z)("tabs__item",w.tabItem,null==t?void 0:t.className,{"tabs__item--active":s===r}),children:null!=n?n:r},r)}))})}function j(e){let{lazy:r,children:n,selectedValue:o}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=t.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function y(e){const r=m(e);return(0,x.jsxs)("div",{className:(0,o.Z)("tabs-container",w.tabList),children:[(0,x.jsx)(g,{...e,...r}),(0,x.jsx)(j,{...e,...r})]})}function v(e){const r=(0,b.Z)();return(0,x.jsx)(y,{...e,children:h(e.children)},String(r))}},11151:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return a}});var s=n(67294);const o={},t=s.createContext(o);function a(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);