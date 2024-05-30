"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[360],{74106:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return u}});var s=t(85893),i=t(11151),r=t(74866),l=t(85162);const c={title:"nats_kv",slug:"nats_kv",type:"output",status:"beta",categories:["Services"],name:"nats_kv"},o=void 0,a={id:"components/outputs/nats_kv",title:"nats_kv",description:"\x3c!--",source:"@site/docs/components/outputs/nats_kv.md",sourceDirName:"components/outputs",slug:"/components/outputs/nats_kv",permalink:"/docs/components/outputs/nats_kv",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/outputs/nats_kv.md",tags:[],version:"current",frontMatter:{title:"nats_kv",slug:"nats_kv",type:"output",status:"beta",categories:["Services"],name:"nats_kv"},sidebar:"docs",previous:{title:"nats_jetstream",permalink:"/docs/components/outputs/nats_jetstream"},next:{title:"nats_stream",permalink:"/docs/components/outputs/nats_stream"}},d={},u=[{value:"Connection Name",id:"connection-name",level:3},{value:"Authentication",id:"authentication",level:3},{value:"NKey file",id:"nkey-file",level:4},{value:"User Credentials",id:"user-credentials",level:4},{value:"Fields",id:"fields",level:2},{value:"<code>urls</code>",id:"urls",level:3},{value:"<code>bucket</code>",id:"bucket",level:3},{value:"<code>key</code>",id:"key",level:3},{value:"<code>max_in_flight</code>",id:"max_in_flight",level:3},{value:"<code>tls</code>",id:"tls",level:3},{value:"<code>tls.enabled</code>",id:"tlsenabled",level:3},{value:"<code>tls.skip_cert_verify</code>",id:"tlsskip_cert_verify",level:3},{value:"<code>tls.enable_renegotiation</code>",id:"tlsenable_renegotiation",level:3},{value:"<code>tls.root_cas</code>",id:"tlsroot_cas",level:3},{value:"<code>tls.root_cas_file</code>",id:"tlsroot_cas_file",level:3},{value:"<code>tls.client_certs</code>",id:"tlsclient_certs",level:3},{value:"<code>tls.client_certs[].cert</code>",id:"tlsclient_certscert",level:3},{value:"<code>tls.client_certs[].key</code>",id:"tlsclient_certskey",level:3},{value:"<code>tls.client_certs[].cert_file</code>",id:"tlsclient_certscert_file",level:3},{value:"<code>tls.client_certs[].key_file</code>",id:"tlsclient_certskey_file",level:3},{value:"<code>tls.client_certs[].password</code>",id:"tlsclient_certspassword",level:3},{value:"<code>auth</code>",id:"auth",level:3},{value:"<code>auth.nkey_file</code>",id:"authnkey_file",level:3},{value:"<code>auth.user_credentials_file</code>",id:"authuser_credentials_file",level:3},{value:"<code>auth.user_jwt</code>",id:"authuser_jwt",level:3},{value:"<code>auth.user_nkey_seed</code>",id:"authuser_nkey_seed",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{title:"BETA",type:"caution",children:(0,s.jsx)(n.p,{children:"This component is mostly stable but breaking changes could still be made outside of major version releases if a fundamental problem with the component is found."})}),"\n",(0,s.jsx)(n.p,{children:"Put messages in a NATS key-value bucket."}),"\n",(0,s.jsx)(n.p,{children:"Introduced in version 4.12.0."}),"\n",(0,s.jsxs)(r.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,s.jsx)(l.Z,{value:"common",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\noutput:\n  label: ""\n  nats_kv:\n    urls: [] # No default (required)\n    bucket: my_kv_bucket # No default (required)\n    key: foo # No default (required)\n    max_in_flight: 1024\n'})})}),(0,s.jsx)(l.Z,{value:"advanced",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\noutput:\n  label: ""\n  nats_kv:\n    urls: [] # No default (required)\n    bucket: my_kv_bucket # No default (required)\n    key: foo # No default (required)\n    max_in_flight: 1024\n    tls:\n      enabled: false\n      skip_cert_verify: false\n      enable_renegotiation: false\n      root_cas: ""\n      root_cas_file: ""\n      client_certs: []\n    auth:\n      nkey_file: ./seed.nk # No default (optional)\n      user_credentials_file: ./user.creds # No default (optional)\n      user_jwt: "" # No default (optional)\n      user_nkey_seed: "" # No default (optional)\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["The field ",(0,s.jsx)(n.code,{children:"key"})," supports\n",(0,s.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),", allowing\nyou to create a unique key for each message."]}),"\n",(0,s.jsx)(n.h3,{id:"connection-name",children:"Connection Name"}),"\n",(0,s.jsx)(n.p,{children:"When monitoring and managing a production NATS system, it is often useful to\nknow which connection a message was send/received from. This can be achieved by\nsetting the connection name option when creating a NATS connection."}),"\n",(0,s.jsx)(n.p,{children:"Bento will automatically set the connection name based off the label of the given\nNATS component, so that monitoring tools between NATS and bento can stay in sync."}),"\n",(0,s.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsxs)(n.p,{children:["There are several components within Bento which utilise NATS services. You will find that each of these components\nsupport optional advanced authentication parameters for ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/nats-server/configuration/securing_nats/auth_intro/nkey_auth",children:"NKeys"}),"\nand ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/developing-with-nats/security/creds",children:"User Credentials"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["An in depth tutorial can be found ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/running-a-nats-service/nats_admin/security/jwt",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"nkey-file",children:"NKey file"}),"\n",(0,s.jsxs)(n.p,{children:["The NATS server can use these NKeys in several ways for authentication. The simplest is for the server to be configured\nwith a list of known public keys and for the clients to respond to the challenge by signing it with its private NKey\nconfigured in the ",(0,s.jsx)(n.code,{children:"nkey_file"})," field."]}),"\n",(0,s.jsxs)(n.p,{children:["More details ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/developing-with-nats/security/nkey",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"user-credentials",children:"User Credentials"}),"\n",(0,s.jsxs)(n.p,{children:["NATS server supports decentralized authentication based on JSON Web Tokens (JWT). Clients need an ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/nats-server/configuration/securing_nats/jwt#json-web-tokens",children:"user JWT"}),"\nand a corresponding ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/developing-with-nats/security/nkey",children:"NKey secret"})," when connecting to a server\nwhich is configured to use this authentication scheme."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"user_credentials_file"})," field should point to a file containing both the private key and the JWT and can be\ngenerated with the ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/nats-tools/nsc",children:"nsc tool"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, the ",(0,s.jsx)(n.code,{children:"user_jwt"})," field can contain a plain text JWT and the ",(0,s.jsx)(n.code,{children:"user_nkey_seed"}),"can contain\nthe plain text NKey Seed."]}),"\n",(0,s.jsxs)(n.p,{children:["More details ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/developing-with-nats/security/creds",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsx)(n.h3,{id:"urls",children:(0,s.jsx)(n.code,{children:"urls"})}),"\n",(0,s.jsx)(n.p,{children:"A list of URLs to connect to. If an item of the list contains commas it will be expanded into multiple URLs."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"array"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nurls:\n  - nats://127.0.0.1:4222\n\nurls:\n  - nats://username:password@127.0.0.1:4222\n"})}),"\n",(0,s.jsx)(n.h3,{id:"bucket",children:(0,s.jsx)(n.code,{children:"bucket"})}),"\n",(0,s.jsx)(n.p,{children:"The name of the KV bucket."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nbucket: my_kv_bucket\n"})}),"\n",(0,s.jsx)(n.h3,{id:"key",children:(0,s.jsx)(n.code,{children:"key"})}),"\n",(0,s.jsxs)(n.p,{children:["The key for each message.\nThis field supports ",(0,s.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Examples\n\nkey: foo\n\nkey: foo.bar.baz\n\nkey: foo.${! json("meta.type") }\n'})}),"\n",(0,s.jsx)(n.h3,{id:"max_in_flight",children:(0,s.jsx)(n.code,{children:"max_in_flight"})}),"\n",(0,s.jsx)(n.p,{children:"The maximum number of messages to have in flight at a given time. Increase this to improve throughput."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"1024"})]}),"\n",(0,s.jsx)(n.h3,{id:"tls",children:(0,s.jsx)(n.code,{children:"tls"})}),"\n",(0,s.jsx)(n.p,{children:"Custom TLS settings can be used to override system defaults."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"object"})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsenabled",children:(0,s.jsx)(n.code,{children:"tls.enabled"})}),"\n",(0,s.jsx)(n.p,{children:"Whether custom TLS settings are enabled."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"bool"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsskip_cert_verify",children:(0,s.jsx)(n.code,{children:"tls.skip_cert_verify"})}),"\n",(0,s.jsx)(n.p,{children:"Whether to skip server side certificate verification."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"bool"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsenable_renegotiation",children:(0,s.jsx)(n.code,{children:"tls.enable_renegotiation"})}),"\n",(0,s.jsxs)(n.p,{children:["Whether to allow the remote server to repeatedly request renegotiation. Enable this option if you're seeing the error message ",(0,s.jsx)(n.code,{children:"local error: tls: no renegotiation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"bool"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"false"}),(0,s.jsx)(n.br,{}),"\n","Requires version 3.45.0 or newer"]}),"\n",(0,s.jsx)(n.h3,{id:"tlsroot_cas",children:(0,s.jsx)(n.code,{children:"tls.root_cas"})}),"\n",(0,s.jsx)(n.p,{children:"An optional root certificate authority to use. This is a string, representing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate."}),"\n",(0,s.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,s.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,s.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nroot_cas: |-\n  -----BEGIN CERTIFICATE-----\n  ...\n  -----END CERTIFICATE-----\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tlsroot_cas_file",children:(0,s.jsx)(n.code,{children:"tls.root_cas_file"})}),"\n",(0,s.jsx)(n.p,{children:"An optional path of a root certificate authority file to use. This is a file, often with a .pem extension, containing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nroot_cas_file: ./root_cas.pem\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certs",children:(0,s.jsx)(n.code,{children:"tls.client_certs"})}),"\n",(0,s.jsxs)(n.p,{children:["A list of client certificates to use. For each certificate either the fields ",(0,s.jsx)(n.code,{children:"cert"})," and ",(0,s.jsx)(n.code,{children:"key"}),", or ",(0,s.jsx)(n.code,{children:"cert_file"})," and ",(0,s.jsx)(n.code,{children:"key_file"})," should be specified, but not both."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"array"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nclient_certs:\n  - cert: foo\n    key: bar\n\nclient_certs:\n  - cert_file: ./example.pem\n    key_file: ./example.key\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certscert",children:(0,s.jsx)(n.code,{children:"tls.client_certs[].cert"})}),"\n",(0,s.jsx)(n.p,{children:"A plain text certificate to use."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certskey",children:(0,s.jsx)(n.code,{children:"tls.client_certs[].key"})}),"\n",(0,s.jsx)(n.p,{children:"A plain text certificate key to use."}),"\n",(0,s.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,s.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,s.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certscert_file",children:(0,s.jsx)(n.code,{children:"tls.client_certs[].cert_file"})}),"\n",(0,s.jsx)(n.p,{children:"The path of a certificate to use."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certskey_file",children:(0,s.jsx)(n.code,{children:"tls.client_certs[].key_file"})}),"\n",(0,s.jsx)(n.p,{children:"The path of a certificate key to use."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certspassword",children:(0,s.jsx)(n.code,{children:"tls.client_certs[].password"})}),"\n",(0,s.jsxs)(n.p,{children:["A plain text password for when the private key is password encrypted in PKCS#1 or PKCS#8 format. The obsolete ",(0,s.jsx)(n.code,{children:"pbeWithMD5AndDES-CBC"})," algorithm is not supported for the PKCS#8 format. Warning: Since it does not authenticate the ciphertext, it is vulnerable to padding oracle attacks that can let an attacker recover the plaintext."]}),"\n",(0,s.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,s.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,s.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\npassword: foo\n\npassword: ${KEY_PASSWORD}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"auth",children:(0,s.jsx)(n.code,{children:"auth"})}),"\n",(0,s.jsx)(n.p,{children:"Optional configuration of NATS authentication parameters."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"object"})]}),"\n",(0,s.jsx)(n.h3,{id:"authnkey_file",children:(0,s.jsx)(n.code,{children:"auth.nkey_file"})}),"\n",(0,s.jsx)(n.p,{children:"An optional file containing a NKey seed."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nnkey_file: ./seed.nk\n"})}),"\n",(0,s.jsx)(n.h3,{id:"authuser_credentials_file",children:(0,s.jsx)(n.code,{children:"auth.user_credentials_file"})}),"\n",(0,s.jsx)(n.p,{children:"An optional file containing user credentials which consist of an user JWT and corresponding NKey seed."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nuser_credentials_file: ./user.creds\n"})}),"\n",(0,s.jsx)(n.h3,{id:"authuser_jwt",children:(0,s.jsx)(n.code,{children:"auth.user_jwt"})}),"\n",(0,s.jsx)(n.p,{children:"An optional plain text user JWT (given along with the corresponding user NKey Seed)."}),"\n",(0,s.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,s.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,s.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h3,{id:"authuser_nkey_seed",children:(0,s.jsx)(n.code,{children:"auth.user_nkey_seed"})}),"\n",(0,s.jsx)(n.p,{children:"An optional plain text user NKey Seed (given along with the corresponding user JWT)."}),"\n",(0,s.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,s.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,s.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},85162:function(e,n,t){t.d(n,{Z:function(){return l}});t(67294);var s=t(86010),i={tabItem:"tabItem_Ymn6"},r=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,l),hidden:t,children:n})}},74866:function(e,n,t){t.d(n,{Z:function(){return _}});var s=t(67294),i=t(86010),r=t(12466),l=t(16550),c=t(20469),o=t(91980),a=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,a.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[l,o]=(0,s.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const i=null!=(n=s.find((e=>e.default)))?n:s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[a,u]=f({queryString:t,groupId:i}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[i,r]=(0,d.Nk)(t);return[i,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),m=(()=>{const e=null!=a?a:x;return p({value:e,tabValues:r})?e:null})();(0,c.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);o(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=t(72389),m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},v=t(85893);function g(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:a}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),i=c[t].value;i!==s&&(a(n),l(i))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const n=o.indexOf(e.currentTarget)+1;t=null!=(s=o[n])?s:o[0];break}case"ArrowLeft":{var i;const n=o.indexOf(e.currentTarget)-1;t=null!=(i=o[n])?i:o[o.length-1];break}}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.Z)("tabs__item",m.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===n}),children:null!=t?t:n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function b(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(g,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function _(e){const n=(0,j.Z)();return(0,v.jsx)(b,{...e,children:u(e.children)},String(n))}},11151:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var s=t(67294);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);