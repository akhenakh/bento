"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[2260],{22050:function(e,n,s){s.r(n),s.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return h}});var i=s(85893),t=s(11151),r=s(74866),c=s(85162);const a={title:"aws_kinesis",slug:"aws_kinesis",type:"input",status:"stable",categories:["Services","AWS"],name:"aws_kinesis"},l=void 0,o={id:"components/inputs/aws_kinesis",title:"aws_kinesis",description:"\x3c!--",source:"@site/docs/components/inputs/aws_kinesis.md",sourceDirName:"components/inputs",slug:"/components/inputs/aws_kinesis",permalink:"/docs/components/inputs/aws_kinesis",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/inputs/aws_kinesis.md",tags:[],version:"current",frontMatter:{title:"aws_kinesis",slug:"aws_kinesis",type:"input",status:"stable",categories:["Services","AWS"],name:"aws_kinesis"},sidebar:"docs",previous:{title:"amqp_1",permalink:"/docs/components/inputs/amqp_1"},next:{title:"aws_s3",permalink:"/docs/components/inputs/aws_s3"}},d={},h=[{value:"Ordering",id:"ordering",level:3},{value:"Table Schema",id:"table-schema",level:3},{value:"Batching",id:"batching",level:3},{value:"Fields",id:"fields",level:2},{value:"<code>streams</code>",id:"streams",level:3},{value:"<code>dynamodb</code>",id:"dynamodb",level:3},{value:"<code>dynamodb.table</code>",id:"dynamodbtable",level:3},{value:"<code>dynamodb.create</code>",id:"dynamodbcreate",level:3},{value:"<code>dynamodb.billing_mode</code>",id:"dynamodbbilling_mode",level:3},{value:"<code>dynamodb.read_capacity_units</code>",id:"dynamodbread_capacity_units",level:3},{value:"<code>dynamodb.write_capacity_units</code>",id:"dynamodbwrite_capacity_units",level:3},{value:"<code>checkpoint_limit</code>",id:"checkpoint_limit",level:3},{value:"<code>auto_replay_nacks</code>",id:"auto_replay_nacks",level:3},{value:"<code>commit_period</code>",id:"commit_period",level:3},{value:"<code>rebalance_period</code>",id:"rebalance_period",level:3},{value:"<code>lease_period</code>",id:"lease_period",level:3},{value:"<code>start_from_oldest</code>",id:"start_from_oldest",level:3},{value:"<code>region</code>",id:"region",level:3},{value:"<code>endpoint</code>",id:"endpoint",level:3},{value:"<code>credentials</code>",id:"credentials",level:3},{value:"<code>credentials.profile</code>",id:"credentialsprofile",level:3},{value:"<code>credentials.id</code>",id:"credentialsid",level:3},{value:"<code>credentials.secret</code>",id:"credentialssecret",level:3},{value:"<code>credentials.token</code>",id:"credentialstoken",level:3},{value:"<code>credentials.from_ec2_role</code>",id:"credentialsfrom_ec2_role",level:3},{value:"<code>credentials.role</code>",id:"credentialsrole",level:3},{value:"<code>credentials.role_external_id</code>",id:"credentialsrole_external_id",level:3},{value:"<code>batching</code>",id:"batching-1",level:3},{value:"<code>batching.count</code>",id:"batchingcount",level:3},{value:"<code>batching.byte_size</code>",id:"batchingbyte_size",level:3},{value:"<code>batching.period</code>",id:"batchingperiod",level:3},{value:"<code>batching.check</code>",id:"batchingcheck",level:3},{value:"<code>batching.processors</code>",id:"batchingprocessors",level:3}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Receive messages from one or more Kinesis streams."}),"\n",(0,i.jsx)(n.p,{children:"Introduced in version 3.36.0."}),"\n",(0,i.jsxs)(r.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,i.jsx)(c.Z,{value:"common",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\ninput:\n  label: ""\n  aws_kinesis:\n    streams: [] # No default (required)\n    dynamodb:\n      table: ""\n      create: false\n    checkpoint_limit: 1024\n    auto_replay_nacks: true\n    commit_period: 5s\n    start_from_oldest: true\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n'})})}),(0,i.jsx)(c.Z,{value:"advanced",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\ninput:\n  label: ""\n  aws_kinesis:\n    streams: [] # No default (required)\n    dynamodb:\n      table: ""\n      create: false\n      billing_mode: PAY_PER_REQUEST\n      read_capacity_units: 0\n      write_capacity_units: 0\n    checkpoint_limit: 1024\n    auto_replay_nacks: true\n    commit_period: 5s\n    rebalance_period: 30s\n    lease_period: 30s\n    start_from_oldest: true\n    region: ""\n    endpoint: ""\n    credentials:\n      profile: ""\n      id: ""\n      secret: ""\n      token: ""\n      from_ec2_role: false\n      role: ""\n      role_external_id: ""\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n      processors: [] # No default (optional)\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Consumes messages from one or more Kinesis streams either by automatically balancing shards across other instances of this input, or by consuming shards listed explicitly. The latest message sequence consumed by this input is stored within a ",(0,i.jsx)(n.a,{href:"#table-schema",children:"DynamoDB table"}),", which allows it to resume at the correct sequence of the shard during restarts. This table is also used for coordination across distributed inputs when shard balancing."]}),"\n",(0,i.jsx)(n.p,{children:"Bento will not store a consumed sequence unless it is acknowledged at the output level, which ensures at-least-once delivery guarantees."}),"\n",(0,i.jsx)(n.h3,{id:"ordering",children:"Ordering"}),"\n",(0,i.jsxs)(n.p,{children:["By default messages of a shard can be processed in parallel, up to a limit determined by the field ",(0,i.jsx)(n.code,{children:"checkpoint_limit"}),". However, if strict ordered processing is required then this value must be set to 1 in order to process shard messages in lock-step. When doing so it is recommended that you perform batching at this component for performance as it will not be possible to batch lock-stepped messages at the output level."]}),"\n",(0,i.jsx)(n.h3,{id:"table-schema",children:"Table Schema"}),"\n",(0,i.jsxs)(n.p,{children:["It's possible to configure Bento to create the DynamoDB table required for coordination if it does not already exist. However, if you wish to create this yourself (recommended) then create a table with a string HASH key ",(0,i.jsx)(n.code,{children:"StreamID"})," and a string RANGE key ",(0,i.jsx)(n.code,{children:"ShardID"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"batching",children:"Batching"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"batching"})," fields to configure an optional ",(0,i.jsx)(n.a,{href:"/docs/configuration/batching#batch-policy",children:"batching policy"}),". Each stream shard will be batched separately in order to ensure that acknowledgements aren't contaminated."]}),"\n",(0,i.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsx)(n.h3,{id:"streams",children:(0,i.jsx)(n.code,{children:"streams"})}),"\n",(0,i.jsxs)(n.p,{children:["One or more Kinesis data streams to consume from. Streams can either be specified by their name or full ARN. Shards of a stream are automatically balanced across consumers by coordinating through the provided DynamoDB table. Multiple comma separated streams can be listed in a single element. Shards are automatically distributed across consumers of a stream by coordinating through the provided DynamoDB table. Alternatively, it's possible to specify an explicit shard to consume from with a colon after the stream name, e.g. ",(0,i.jsx)(n.code,{children:"foo:0"})," would consume the shard ",(0,i.jsx)(n.code,{children:"0"})," of the stream ",(0,i.jsx)(n.code,{children:"foo"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"array"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nstreams:\n  - foo\n  - arn:aws:kinesis:*:111122223333:stream/my-stream\n"})}),"\n",(0,i.jsx)(n.h3,{id:"dynamodb",children:(0,i.jsx)(n.code,{children:"dynamodb"})}),"\n",(0,i.jsx)(n.p,{children:"Determines the table used for storing and accessing the latest consumed sequence for shards, and for coordinating balanced consumers of streams."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"object"})]}),"\n",(0,i.jsx)(n.h3,{id:"dynamodbtable",children:(0,i.jsx)(n.code,{children:"dynamodb.table"})}),"\n",(0,i.jsx)(n.p,{children:"The name of the table to access."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n",(0,i.jsx)(n.h3,{id:"dynamodbcreate",children:(0,i.jsx)(n.code,{children:"dynamodb.create"})}),"\n",(0,i.jsx)(n.p,{children:"Whether, if the table does not exist, it should be created."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"bool"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsx)(n.h3,{id:"dynamodbbilling_mode",children:(0,i.jsx)(n.code,{children:"dynamodb.billing_mode"})}),"\n",(0,i.jsx)(n.p,{children:"When creating the table determines the billing mode."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'"PAY_PER_REQUEST"'}),(0,i.jsx)(n.br,{}),"\n","Options: ",(0,i.jsx)(n.code,{children:"PROVISIONED"}),", ",(0,i.jsx)(n.code,{children:"PAY_PER_REQUEST"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"dynamodbread_capacity_units",children:(0,i.jsx)(n.code,{children:"dynamodb.read_capacity_units"})}),"\n",(0,i.jsxs)(n.p,{children:["Set the provisioned read capacity when creating the table with a ",(0,i.jsx)(n.code,{children:"billing_mode"})," of ",(0,i.jsx)(n.code,{children:"PROVISIONED"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"int"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:"0"})]}),"\n",(0,i.jsx)(n.h3,{id:"dynamodbwrite_capacity_units",children:(0,i.jsx)(n.code,{children:"dynamodb.write_capacity_units"})}),"\n",(0,i.jsxs)(n.p,{children:["Set the provisioned write capacity when creating the table with a ",(0,i.jsx)(n.code,{children:"billing_mode"})," of ",(0,i.jsx)(n.code,{children:"PROVISIONED"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"int"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:"0"})]}),"\n",(0,i.jsx)(n.h3,{id:"checkpoint_limit",children:(0,i.jsx)(n.code,{children:"checkpoint_limit"})}),"\n",(0,i.jsx)(n.p,{children:"The maximum gap between the in flight sequence versus the latest acknowledged sequence at a given time. Increasing this limit enables parallel processing and batching at the output level to work on individual shards. Any given sequence will not be committed unless all messages under that offset are delivered in order to preserve at least once delivery guarantees."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"int"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:"1024"})]}),"\n",(0,i.jsx)(n.h3,{id:"auto_replay_nacks",children:(0,i.jsx)(n.code,{children:"auto_replay_nacks"})}),"\n",(0,i.jsxs)(n.p,{children:["Whether messages that are rejected (nacked) at the output level should be automatically replayed indefinitely, eventually resulting in back pressure if the cause of the rejections is persistent. If set to ",(0,i.jsx)(n.code,{children:"false"})," these messages will instead be deleted. Disabling auto replays can greatly improve memory efficiency of high throughput streams as the original shape of the data can be discarded immediately upon consumption and mutation."]}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"bool"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:"true"})]}),"\n",(0,i.jsx)(n.h3,{id:"commit_period",children:(0,i.jsx)(n.code,{children:"commit_period"})}),"\n",(0,i.jsx)(n.p,{children:"The period of time between each update to the checkpoint table."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'"5s"'})]}),"\n",(0,i.jsx)(n.h3,{id:"rebalance_period",children:(0,i.jsx)(n.code,{children:"rebalance_period"})}),"\n",(0,i.jsx)(n.p,{children:"The period of time between each attempt to rebalance shards across clients."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'"30s"'})]}),"\n",(0,i.jsx)(n.h3,{id:"lease_period",children:(0,i.jsx)(n.code,{children:"lease_period"})}),"\n",(0,i.jsx)(n.p,{children:"The period of time after which a client that has failed to update a shard checkpoint is assumed to be inactive."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'"30s"'})]}),"\n",(0,i.jsx)(n.h3,{id:"start_from_oldest",children:(0,i.jsx)(n.code,{children:"start_from_oldest"})}),"\n",(0,i.jsx)(n.p,{children:"Whether to consume from the oldest message when a sequence does not yet exist for the stream."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"bool"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:"true"})]}),"\n",(0,i.jsx)(n.h3,{id:"region",children:(0,i.jsx)(n.code,{children:"region"})}),"\n",(0,i.jsx)(n.p,{children:"The AWS region to target."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n",(0,i.jsx)(n.h3,{id:"endpoint",children:(0,i.jsx)(n.code,{children:"endpoint"})}),"\n",(0,i.jsx)(n.p,{children:"Allows you to specify a custom endpoint for the AWS API."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n",(0,i.jsx)(n.h3,{id:"credentials",children:(0,i.jsx)(n.code,{children:"credentials"})}),"\n",(0,i.jsxs)(n.p,{children:["Optional manual configuration of AWS credentials to use. More information can be found ",(0,i.jsx)(n.a,{href:"/docs/guides/cloud/aws",children:"in this document"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"object"})]}),"\n",(0,i.jsx)(n.h3,{id:"credentialsprofile",children:(0,i.jsx)(n.code,{children:"credentials.profile"})}),"\n",(0,i.jsxs)(n.p,{children:["A profile from ",(0,i.jsx)(n.code,{children:"~/.aws/credentials"})," to use."]}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n",(0,i.jsx)(n.h3,{id:"credentialsid",children:(0,i.jsx)(n.code,{children:"credentials.id"})}),"\n",(0,i.jsx)(n.p,{children:"The ID of credentials to use."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n",(0,i.jsx)(n.h3,{id:"credentialssecret",children:(0,i.jsx)(n.code,{children:"credentials.secret"})}),"\n",(0,i.jsx)(n.p,{children:"The secret for the credentials being used."}),"\n",(0,i.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,i.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,i.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n",(0,i.jsx)(n.h3,{id:"credentialstoken",children:(0,i.jsx)(n.code,{children:"credentials.token"})}),"\n",(0,i.jsx)(n.p,{children:"The token for the credentials being used, required when using short term credentials."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n",(0,i.jsx)(n.h3,{id:"credentialsfrom_ec2_role",children:(0,i.jsx)(n.code,{children:"credentials.from_ec2_role"})}),"\n",(0,i.jsxs)(n.p,{children:["Use the credentials of a host EC2 machine configured to assume ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",children:"an IAM role associated with the instance"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"bool"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:"false"}),(0,i.jsx)(n.br,{}),"\n","Requires version 4.2.0 or newer"]}),"\n",(0,i.jsx)(n.h3,{id:"credentialsrole",children:(0,i.jsx)(n.code,{children:"credentials.role"})}),"\n",(0,i.jsx)(n.p,{children:"A role ARN to assume."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n",(0,i.jsx)(n.h3,{id:"credentialsrole_external_id",children:(0,i.jsx)(n.code,{children:"credentials.role_external_id"})}),"\n",(0,i.jsx)(n.p,{children:"An external ID to provide when assuming a role."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n",(0,i.jsx)(n.h3,{id:"batching-1",children:(0,i.jsx)(n.code,{children:"batching"})}),"\n",(0,i.jsxs)(n.p,{children:["Allows you to configure a ",(0,i.jsx)(n.a,{href:"/docs/configuration/batching",children:"batching policy"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"object"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:'# Examples\n\nbatching:\n  byte_size: 5000\n  count: 0\n  period: 1s\n\nbatching:\n  count: 10\n  period: 1s\n\nbatching:\n  check: this.contains("END BATCH")\n  count: 0\n  period: 1m\n'})}),"\n",(0,i.jsx)(n.h3,{id:"batchingcount",children:(0,i.jsx)(n.code,{children:"batching.count"})}),"\n",(0,i.jsxs)(n.p,{children:["A number of messages at which the batch should be flushed. If ",(0,i.jsx)(n.code,{children:"0"})," disables count based batching."]}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"int"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:"0"})]}),"\n",(0,i.jsx)(n.h3,{id:"batchingbyte_size",children:(0,i.jsx)(n.code,{children:"batching.byte_size"})}),"\n",(0,i.jsxs)(n.p,{children:["An amount of bytes at which the batch should be flushed. If ",(0,i.jsx)(n.code,{children:"0"})," disables size based batching."]}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"int"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:"0"})]}),"\n",(0,i.jsx)(n.h3,{id:"batchingperiod",children:(0,i.jsx)(n.code,{children:"batching.period"})}),"\n",(0,i.jsx)(n.p,{children:"A period in which an incomplete batch should be flushed regardless of its size."}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nperiod: 1s\n\nperiod: 1m\n\nperiod: 500ms\n"})}),"\n",(0,i.jsx)(n.h3,{id:"batchingcheck",children:(0,i.jsx)(n.code,{children:"batching.check"})}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"/docs/guides/bloblang/about/",children:"Bloblang query"})," that should return a boolean value indicating whether a message should end a batch."]}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:'# Examples\n\ncheck: this.type == "end_of_transaction"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"batchingprocessors",children:(0,i.jsx)(n.code,{children:"batching.processors"})}),"\n",(0,i.jsxs)(n.p,{children:["A list of ",(0,i.jsx)(n.a,{href:"/docs/components/processors/about",children:"processors"})," to apply to a batch as it is flushed. This allows you to aggregate and archive the batch however you see fit. Please note that all resulting messages are flushed as a single batch, therefore splitting the batch into smaller batches using these processors is a no-op."]}),"\n",(0,i.jsxs)(n.p,{children:["Type: ",(0,i.jsx)(n.code,{children:"array"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nprocessors:\n  - archive:\n      format: concatenate\n\nprocessors:\n  - archive:\n      format: lines\n\nprocessors:\n  - archive:\n      format: json_array\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},85162:function(e,n,s){s.d(n,{Z:function(){return c}});s(67294);var i=s(86010),t={tabItem:"tabItem_Ymn6"},r=s(85893);function c(e){let{children:n,hidden:s,className:c}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(t.tabItem,c),hidden:s,children:n})}},74866:function(e,n,s){s.d(n,{Z:function(){return _}});var i=s(67294),t=s(86010),r=s(12466),c=s(16550),a=s(20469),l=s(91980),o=s(67392),d=s(50012);function h(e){var n,s;return null!=(n=null==(s=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:s.filter(Boolean))?n:[]}function u(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:i,default:t}}=e;return{value:n,label:s,attributes:i,default:t}}))}(s);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const t=(0,c.k6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:s});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,r=u(e),[c,l]=(0,i.useState)((()=>function(e){var n;let{defaultValue:s,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+s+'" but none of its children has the corresponding value. Available values are: '+i.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return s}const t=null!=(n=i.find((e=>e.default)))?n:i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[o,h]=m({queryString:s,groupId:t}),[x,b]=function(e){let{groupId:n}=e;const s=function(e){return e?"docusaurus.tab."+e:null}(n),[t,r]=(0,d.Nk)(s);return[t,(0,i.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),j=(()=>{const e=null!=o?o:x;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:c,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);l(e),h(e),b(e)}),[h,b,r]),tabValues:r}}var b=s(72389),j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},f=s(85893);function g(e){let{className:n,block:s,selectedValue:i,selectValue:c,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),t=a[s].value;t!==i&&(o(n),c(t))},h=e=>{var n;let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var i;const n=l.indexOf(e.currentTarget)+1;s=null!=(i=l[n])?i:l[0];break}case"ArrowLeft":{var t;const n=l.indexOf(e.currentTarget)-1;s=null!=(t=l[n])?t:l[l.length-1];break}}null==(n=s)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,t.Z)("tabs__item",j.tabItem,null==r?void 0:r.className,{"tabs__item--active":i===n}),children:null!=s?s:n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:t}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,t.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(y,{...e,...n})]})}function _(e){const n=(0,b.Z)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(n))}},11151:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return c}});var i=s(67294);const t={},r=i.createContext(t);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);