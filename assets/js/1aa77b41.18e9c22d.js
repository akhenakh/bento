"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[1060],{99506:function(e,n,o){o.r(n),o.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return c}});var s=o(85893),t=o(11151);const r={title:"Powered Up Workflows",author:"Ashley Jeffs",author_url:"https://github.com/Jeffail",author_image_url:"/img/ash.jpg",description:"Available in v3.26.0",keywords:["benthos","workflows","go","golang","stream processor","enrichments"],tags:["Workflows"]},a=void 0,i={permalink:"/blog/2020/08/30/improved-workflows",source:"@site/blog/2020-08-30-improved-workflows.md",title:"Powered Up Workflows",description:"Available in v3.26.0",date:"2020-08-30T00:00:00.000Z",formattedDate:"August 30, 2020",tags:[{label:"Workflows",permalink:"/blog/tags/workflows"}],readingTime:3.38,hasTruncateMarker:!0,authors:[{name:"Ashley Jeffs",url:"https://github.com/Jeffail",imageURL:"/img/ash.jpg"}],frontMatter:{title:"Powered Up Workflows",author:"Ashley Jeffs",author_url:"https://github.com/Jeffail",author_image_url:"/img/ash.jpg",description:"Available in v3.26.0",keywords:["benthos","workflows","go","golang","stream processor","enrichments"],tags:["Workflows"]},unlisted:!1,prevItem:{title:"First Look at the V4 Roadmap",permalink:"/blog/2021/01/04/v4-roadmap"},nextItem:{title:"Bloblang Beta",permalink:"/blog/2020/05/10/bloblang-beta"}},l={authorsImageUrls:[void 0]},c=[{value:"The Motivation",id:"the-motivation",level:2},{value:"Leaning into Bloblang",id:"leaning-into-bloblang",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["For the last few weeks I've been working on improving the workflow story in Bento. That means reducing the number of processors, simplifying them, and at the same time making them more powerful than before. The new functionality outlined here can be used in the latest release ",(0,s.jsx)(n.a,{href:"https://github.com/warpstreamlabs/bento/releases/tag/v3.26.0",children:"v3.26.0"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"the-motivation",children:"The Motivation"}),"\n",(0,s.jsxs)(n.p,{children:["After similar efforts to ",(0,s.jsx)(n.a,{href:"/blog/2020/05/10/bloblang-beta/",children:"improve the mapping story"})," in Bento it seemed sensible to target workflows. Specifically, I've added a new ",(0,s.jsxs)(n.a,{href:"/docs/components/processors/branch/",children:[(0,s.jsx)(n.code,{children:"branch"})," processor"]})," for wrapping child processors in request/result maps, and have reworked the ",(0,s.jsxs)(n.a,{href:"/docs/components/processors/workflow/",children:[(0,s.jsx)(n.code,{children:"workflow"})," processor"]})," to use them."]}),"\n",(0,s.jsxs)(n.p,{children:["If you haven't used workflows in Bento then there's a section in the new ",(0,s.jsxs)(n.a,{href:"/docs/components/processors/workflow/#why-use-a-workflow",children:[(0,s.jsx)(n.code,{children:"workflow"})," processor"]})," page outlining why they're useful. In short, when performing multiple integrations within a pipeline such as hitting HTTP services, lambdas, caches, etc, it's best to perform them in parallel when possible in order to reduce the processing latency of messages, organizing these integrations into a topology with a workflow makes it easier to manage their interdependencies and ensure they're executed in the right order."]}),"\n",(0,s.jsxs)(n.p,{children:["In the old world you could use the ",(0,s.jsx)(n.code,{children:"process_dag"})," processor which has child ",(0,s.jsx)(n.code,{children:"process_map"})," processors, where the mappings were a series of clunky to/from ",(0,s.jsx)(n.a,{href:"/docs/configuration/field_paths/",children:"dot paths"}),", separated into optional and non-optional mappings. There was no way to manually specify the dependency tree, and conditional flows required a separate list of conditions which didn't factor into dependency resolution."]}),"\n",(0,s.jsx)(n.p,{children:"Having such complex and brittle mapping capabilities meant these processors were difficult to document and more so to understand and use."}),"\n",(0,s.jsx)(n.h2,{id:"leaning-into-bloblang",children:"Leaning into Bloblang"}),"\n",(0,s.jsxs)(n.p,{children:["Thankfully, with ",(0,s.jsx)(n.a,{href:"/docs/guides/bloblang/about/",children:"Bloblang"})," now finished it was pretty easy to replace most of the complexity of the workflow mappings for the language itself."]}),"\n",(0,s.jsx)(n.p,{children:"For example, when mapping the request payload for an integration you can express a bunch of different patterns..."}),"\n",(0,s.jsx)(n.p,{children:"Empty request body:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'request_map: root = ""\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Sub-object (",(0,s.jsx)(n.code,{children:"foo"}),") as request body, if the sub-object doesn't exist (or is null) the integration is abandoned:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"request_map: root = this.foo.not_null()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sub-object as request body which can be obtained from one of a number of possible paths:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"request_map: root = this.(foo | bar | baz).doc.not_null()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Conditional integration applies when the ",(0,s.jsx)(n.code,{children:"type"})," is ",(0,s.jsx)(n.code,{children:"foo"}),", with an unmodified message as request body:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'request_map: |\n  root = if this.type != "foo" {\n    deleted()\n  }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Conditional integration applies when the ",(0,s.jsx)(n.code,{children:"type"})," is ",(0,s.jsx)(n.code,{children:"foo"}),", with a sub-object as the request body:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'request_map: |\n  root = if this.type == "foo" {\n    this.foo.not_null()\n  } else {\n    deleted()\n  }\n'})}),"\n",(0,s.jsx)(n.p,{children:"Similarly, it's possible to express a bunch of things in the result mapping..."}),"\n",(0,s.jsx)(n.p,{children:"Discard the result (the original message is unchanged):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'result_map: ""\n'})}),"\n",(0,s.jsx)(n.p,{children:"Place the entire result at a path:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"result_map: root.foo = this\n"})}),"\n",(0,s.jsx)(n.p,{children:"Place the result in a metadata field:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"result_map: meta foo = this\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to see what it looks like there is an ",(0,s.jsx)(n.a,{href:"/cookbooks/enrichments/",children:"enrichment cookbook"})," that demonstrates workflows in action, but there are also smaller examples on the ",(0,s.jsx)(n.a,{href:"/docs/components/processors/workflow/#examples",children:"workflow page"})," such as the following snippet:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - workflow:\n        meta_path: meta.workflow\n        branches:\n          foo:\n            request_map: 'root = \"\"'\n            processors:\n              - http:\n                  url: TODO\n            result_map: 'root.foo = this'\n\n          bar:\n            request_map: 'root = this.body'\n            processors:\n              - lambda:\n                  function: TODO\n            result_map: 'root.bar = this'\n\n          baz:\n            request_map: |\n              root.fooid = this.foo.id\n              root.barstuff = this.bar.content\n            processors:\n              - cache:\n                  resource: TODO\n                  operator: set\n                  key: ${! json(\"fooid\") }\n                  value: ${! json(\"barstuff\") }\n"})}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:["The docs have been updated to use these new goodies. Obviously the old processors are still being maintained but in a mostly dormant state. The workflow and branch processors are currently labelled as ",(0,s.jsx)(n.code,{children:"beta"}),", but their general behavior is stable with the only exceptions being odd edge cases that might arise."]}),"\n",(0,s.jsx)(n.p,{children:"With the behavior of these processors being dramatically simplified I've also been able to simplify the documentation for them, which also means using more space on the page for example configs."}),"\n",(0,s.jsxs)(n.p,{children:["If you have feedback then ",(0,s.jsx)(n.a,{href:"/community/",children:"get the absolute heck in the chat you utter recluse"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return a}});var s=o(67294);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);