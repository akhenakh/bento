"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[6596],{30210:function(e,r,s){s.r(r),s.d(r,{assets:function(){return c},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return t},metadata:function(){return i},toc:function(){return l}});var n=s(85893),o=s(11151);const t={title:"Error Handling"},a=void 0,i={id:"configuration/error_handling",title:"Error Handling",description:"It's always possible for things to go wrong, be a good captain and plan ahead.",source:"@site/docs/configuration/error_handling.md",sourceDirName:"configuration",slug:"/configuration/error_handling",permalink:"/docs/configuration/error_handling",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/configuration/error_handling.md",tags:[],version:"current",frontMatter:{title:"Error Handling"},sidebar:"docs",previous:{title:"Metadata",permalink:"/docs/configuration/metadata"},next:{title:"Interpolation",permalink:"/docs/configuration/interpolation"}},c={},l=[{value:"Abandon on Failure",id:"abandon-on-failure",level:2},{value:"Recover Failed Messages",id:"recover-failed-messages",level:2},{value:"Logging Errors",id:"logging-errors",level:2},{value:"Attempt Until Success",id:"attempt-until-success",level:2},{value:"Drop Failed Messages",id:"drop-failed-messages",level:2},{value:"Reject Messages",id:"reject-messages",level:2},{value:"Route to a Dead-Letter Queue",id:"route-to-a-dead-letter-queue",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"It's always possible for things to go wrong, be a good captain and plan ahead."}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)("img",{style:{maxWidth:"300px",marginBottom:"40px"},src:"/img/Blobpirate.svg"})}),"\n",(0,n.jsxs)(r.p,{children:["Bento supports a range of ",(0,n.jsx)(r.a,{href:"/docs/components/processors/about",children:"processors"})," such as ",(0,n.jsx)(r.code,{children:"http"})," and ",(0,n.jsx)(r.code,{children:"aws_lambda"})," that have the potential to fail if their retry attempts are exhausted. When this happens the data is not dropped but instead continues through the pipeline mostly unchanged, but a metadata flag is added allowing you to handle the errors in a way that suits your needs."]}),"\n",(0,n.jsx)(r.p,{children:"This document outlines common patterns for dealing with errors, such as dropping them, recovering them with more processing, routing them to a dead-letter queue, or any combination thereof."}),"\n",(0,n.jsx)(r.h2,{id:"abandon-on-failure",children:"Abandon on Failure"}),"\n",(0,n.jsxs)(r.p,{children:["It's possible to define a list of processors which should be skipped for messages that failed a previous stage using the ",(0,n.jsxs)(r.a,{href:"/docs/components/processors/try",children:[(0,n.jsx)(r.code,{children:"try"})," processor"]}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - try:\n      - resource: foo\n      - resource: bar # Skipped if foo failed\n      - resource: baz # Skipped if foo or bar failed\n"})}),"\n",(0,n.jsx)(r.h2,{id:"recover-failed-messages",children:"Recover Failed Messages"}),"\n",(0,n.jsxs)(r.p,{children:["Failed messages can be fed into their own processor steps with a ",(0,n.jsxs)(r.a,{href:"/docs/components/processors/catch",children:[(0,n.jsx)(r.code,{children:"catch"})," processor"]}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - resource: foo # Processor that might fail\n    - catch:\n      - resource: bar # Recover here\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Once messages finish the catch block they will have their failure flags removed and are treated like regular messages. If this behaviour is not desired then it is possible to simulate a catch block with a ",(0,n.jsxs)(r.a,{href:"/docs/components/processors/switch",children:[(0,n.jsx)(r.code,{children:"switch"})," processor"]}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - resource: foo # Processor that might fail\n    - switch:\n      - check: errored()\n        processors:\n          - resource: bar # Recover here\n"})}),"\n",(0,n.jsx)(r.h2,{id:"logging-errors",children:"Logging Errors"}),"\n",(0,n.jsxs)(r.p,{children:["When an error occurs there will occasionally be useful information stored within the error flag that can be exposed with the interpolation function ",(0,n.jsx)(r.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:(0,n.jsx)(r.code,{children:"error"})}),". This allows you to expose the information with processors."]}),"\n",(0,n.jsxs)(r.p,{children:["For example, when catching failed processors you can ",(0,n.jsx)(r.a,{href:"/docs/components/processors/log",children:(0,n.jsx)(r.code,{children:"log"})})," the messages:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:'pipeline:\n  processors:\n    - resource: foo # Processor that might fail\n    - catch:\n      - log:\n          message: "Processing failed due to: ${!error()}"\n'})}),"\n",(0,n.jsx)(r.p,{children:"Or perhaps augment the message payload with the error message:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - resource: foo # Processor that might fail\n    - catch:\n      - mapping: |\n          root = this\n          root.meta.error = error()\n"})}),"\n",(0,n.jsx)(r.h2,{id:"attempt-until-success",children:"Attempt Until Success"}),"\n",(0,n.jsxs)(r.p,{children:["It's possible to reattempt a processor for a particular message until it is successful with a ",(0,n.jsx)(r.a,{href:"/docs/components/processors/retry",children:(0,n.jsx)(r.code,{children:"retry"})})," processor:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - retry:\n        backoff:\n          initial_interval: 1s\n          max_interval: 5s\n          max_elapsed_time: 30s\n        processors:\n          # Attempt this processor until success, or the maximum elapsed time is reached.\n          - resource: foo\n"})}),"\n",(0,n.jsx)(r.h2,{id:"drop-failed-messages",children:"Drop Failed Messages"}),"\n",(0,n.jsxs)(r.p,{children:["In order to filter out any failed messages from your pipeline you can use a ",(0,n.jsxs)(r.a,{href:"/docs/components/processors/mapping",children:[(0,n.jsx)(r.code,{children:"mapping"})," processor"]}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - mapping: root = if errored() { deleted() }\n"})}),"\n",(0,n.jsx)(r.p,{children:'This will remove any failed messages from a batch. Furthermore, dropping a message will propagate an acknowledgement (also known as "ack") upstream to the pipeline\'s input.'}),"\n",(0,n.jsx)(r.h2,{id:"reject-messages",children:"Reject Messages"}),"\n",(0,n.jsxs)(r.p,{children:["Some inputs such as NATS, GCP Pub/Sub and AMQP support nacking (rejecting) messages. We can perform a nack (or rejection) on data that has failed to process rather than delivering it to our output with a ",(0,n.jsxs)(r.a,{href:"/docs/components/outputs/reject_errored",children:[(0,n.jsx)(r.code,{children:"reject_errored"})," output"]}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"output:\n  reject_errored:\n    resource: foo # Only non-errored messages go here\n"})}),"\n",(0,n.jsx)(r.h2,{id:"route-to-a-dead-letter-queue",children:"Route to a Dead-Letter Queue"}),"\n",(0,n.jsxs)(r.p,{children:["And by placing the above within a ",(0,n.jsxs)(r.a,{href:"/docs/components/outputs/fallback",children:[(0,n.jsx)(r.code,{children:"fallback"})," output"]})," we can instead route the failed messages to a different output:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"output:\n  fallback:\n    - reject_errored:\n        resource: foo # Only non-errored messages go here\n\n    - resource: bar # Only errored messages, or those that failed to be delivered to foo, go here\n"})}),"\n",(0,n.jsxs)(r.p,{children:["And, finally, in cases where we wish to route data differently depending on the error message itself we can use a ",(0,n.jsxs)(r.a,{href:"/docs/components/outputs/switch",children:[(0,n.jsx)(r.code,{children:"switch"})," output"]}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:'output:\n  switch:\n    cases:\n      # Capture specifically cat related errors\n      - check: errored() && error().contains("meow")\n        output:\n          resource: foo\n\n      # Capture all other errors\n      - check: errored()\n        output:\n          resource: bar\n\n      # Finally, route messages that haven\'t errored\n      - output:\n          resource: baz\n'})})]})}function h(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:function(e,r,s){s.d(r,{Z:function(){return i},a:function(){return a}});var n=s(67294);const o={},t=n.createContext(o);function a(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);