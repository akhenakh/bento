"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[6821],{61847:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return r},metadata:function(){return h},toc:function(){return l}});var o=n(85893),s=n(11151),a=n(15655),i=n.n(a);const r={slug:"discord-bot",title:"Create a Discord Bot",description:"Learn how to use Bento to create a vanity chat bot."},c=void 0,h={permalink:"/cookbooks/discord-bot",source:"@site/cookbooks/discord_bot.md",title:"Create a Discord Bot",description:"Learn how to use Bento to create a vanity chat bot."},l=[{value:"Consuming Messages",id:"consuming-messages",level:2},{value:"Writing Messages",id:"writing-messages",level:2},{value:"Custom Commands",id:"custom-commands",level:2},{value:"Hitting Other APIs",id:"hitting-other-apis",level:2},{value:"Final Words",id:"final-words",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Stream processing is stupid and boring, and so it's important to re-purpose tools like Bento for fun things occasionally. This cookbook outlines how Bento can be used to create a Discord bot for important tasks such as providing insults and bad jokes to your chat. If you're a member of the ",(0,o.jsx)(t.a,{href:"https://discord.gg/6VaWjzP",children:"Bento Discord server"})," then you're likely already familiar with Blob Bot which is the resulting product."]}),"\n","\n","\n",(0,o.jsx)("div",{className:"container margin-vert--lg",children:(0,o.jsx)("div",{className:"row row--no-gutters",children:(0,o.jsx)(i(),{className:"col",height:"300px",url:"https://www.youtube.com/embed/nX5-s1-Vrjc",controls:!0})})}),"\n",(0,o.jsx)(t.h2,{id:"consuming-messages",children:"Consuming Messages"}),"\n",(0,o.jsxs)(t.p,{children:["Before you start messing with Bento you need to register a new bot with the ",(0,o.jsx)(t.a,{href:"https://discord.com/developers/applications",children:"Discord Developer Portal"}),". Start by building an Application, then use the build-a-bot page to choose a bot name and avatar. You should end up with a token generated for the bot, and you'll also need to add it to your server."]}),"\n",(0,o.jsxs)(t.p,{children:["As soon as your bot is added to your server and you have a token you can immediately begin consuming messages from a channel with the ",(0,o.jsxs)(t.a,{href:"/docs/components/inputs/discord",children:[(0,o.jsx)(t.code,{children:"discord"})," input"]}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"input:\n  discord:\n    channel_id: ${DISCORD_CHANNEL}\n    bot_token: ${DISCORD_BOT_TOKEN}\n    cache: request_tracking\n\ncache_resources:\n  - label: request_tracking\n    file:\n      directory: /tmp/discord_bot\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["If you aren't sure how to access the ID of a channel try ",(0,o.jsx)(t.a,{href:"https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-",children:"this tutorial"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"poll_period"})," shouldn't be too short as it'll exhaust your rate limits. If you plan to use the bot for hitting multiple Discord APIs then give it a fair few seconds between each poll. It's also necessary to point the input to a ",(0,o.jsx)(t.a,{href:"/docs/components/caches/about",children:"cache resource"}),", and this will be used to store the ID of the latest message received for paginating the messages endpoint."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"limit"})," is the maximum number of messages to consume from the channel when we haven't got a message to track and are consuming a backlog. The first time we run our bot we will pull a maximum of 10 of the latest messages in the channel, the maximum you can set here is 100."]}),"\n",(0,o.jsxs)(t.p,{children:["If you were to run this config (setting the channel and bot token as env vars in a file called ",(0,o.jsx)(t.code,{children:"testing.env"}),") you'll see it print messages from the channel to stdout in JSON form:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:'$ bento -e testing.env -c ./config.yaml\n{"content":"so i like totally just tripped over my own network cables","author":{"id":"1234"}}\n{"content":"like omg that is SO you!!!","author":{"id":"4321"}}\n{"content":"yas totally","author":{"id":"1234"}}\n{"content":"yeah","author":{"id":"4321"}}\n'})}),"\n",(0,o.jsx)(t.p,{children:"It might be tempting to leave your silent surveillance bot running indefinitely but that's creepy and weird, so instead let's add the ability to respond to messages."}),"\n",(0,o.jsx)(t.h2,{id:"writing-messages",children:"Writing Messages"}),"\n",(0,o.jsxs)(t.p,{children:["Writing messages to a Discord channel is pretty easy. You can feed the ",(0,o.jsxs)(t.a,{href:"/docs/components/outputs/discord",children:[(0,o.jsx)(t.code,{children:"discord"})," output"]})," either a JSON object following the ",(0,o.jsx)(t.a,{href:"https://discord.com/developers/docs/resources/channel#message-object",children:"Message Object structure"}),", or just a raw string and the structure will be created for you. Therefore we can write a hypothetical uppercasing echo bot with a simple ",(0,o.jsx)(t.a,{href:"/docs/guides/bloblang/about",children:"Bloblang mapping"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:'pipeline:\n  processors:\n    - mapping: |\n        root = if !this.content.has_prefix("SHOUTS BACK") {\n          "SHOUTS BACK BOT SAYS " + this.content.uppercase()\n        } else {\n          deleted()\n        }\n\noutput:\n  discord:\n    channel_id: ${DISCORD_CHANNEL}\n    bot_token: ${DISCORD_BOT_TOKEN}\n'})}),"\n",(0,o.jsx)(t.p,{children:"If we add that to the end of the first config you should see the bot respond to messages in the channel by posting an uppercase version of it with a prefix. Note that we also delete the message in our mapping if it has the same prefix that we're adding ourselves, which is a quick and dirty way of ensuring the bot doesn't echo its own messages."}),"\n",(0,o.jsx)(t.h2,{id:"custom-commands",children:"Custom Commands"}),"\n",(0,o.jsxs)(t.p,{children:["Shout bot is clearly an absolute riot and a true fan favourite. However, it will get old fast. Let's make our bot more elegant by introducing some commands by swapping our plain mapping with a ",(0,o.jsxs)(t.a,{href:"/docs/components/processors/switch",children:[(0,o.jsx)(t.code,{children:"switch"})," processor"]}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - switch:\n        - check: this.type == 7\n          processors:\n            - mapping: 'root = \"Welcome to the server <@%v>!\".format(this.author.id)'\n\n        - processors:\n            - mapping: 'root = deleted()'\n"})}),"\n",(0,o.jsx)(t.p,{children:"By changing our mapping out to this switch we can add specialised commands for different message types, and if none of the cases match then we don't respond. Technically, we can do all of this within a single Bloblang mapping by using a match expression, but having a switch processor would also allow us to add cases where we do cool things like hit other APIs, etc."}),"\n",(0,o.jsxs)(t.p,{children:["The only case we've added here is one that activates when the message type is a specific one sent when a new person joins, and in response we give them a warm welcome. The welcome mentions the new user by injecting the user id into the welcome string with ",(0,o.jsx)(t.code,{children:".format(this.author.id)"}),", which replaces the ",(0,o.jsx)(t.code,{children:"%v"})," placeholder with the author ID (the user that joined and therefore created the join message)."]}),"\n",(0,o.jsx)(t.p,{children:"This response is cool but not very interactive, let's add a few commands that people can play with:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:'pipeline:\n  processors:\n    - switch:\n        - check: this.type == 7\n          processors:\n            - mapping: \'root = "Welcome to the server <@%v>!".format(this.author.id)\'\n\n        - check: this.content == "/joke"\n          processors:\n            - mapping: |\n                let jokes = [\n                  "What do you call a belt made of watches? A waist of time.",\n                  "What does a clock do when it\u2019s hungry? It goes back four seconds.",\n                  "A company is making glass coffins. Whether they\u2019re successful remains to be seen.",\n                ]\n                root = $jokes.index(timestamp_unix_nano() % $jokes.length())\n\n        - check: this.content == "/roast"\n          processors:\n            - mapping: |\n                let roasts = [\n                  "If <@%v>\'s brain was dynamite, there wouldn\u2019t be enough to blow their hat off.",\n                  "Someday you\u2019ll go far <@%v>, and I really hope you stay there.",\n                  "I\u2019d give you a nasty look, but you\u2019ve already got one <@%v>.",\n                ]\n                root = $roasts.index(timestamp_unix_nano() % $roasts.length()).format(this.author.id)\n\n        - processors:\n            - mapping: \'root = deleted()\'\n'})}),"\n",(0,o.jsx)(t.p,{children:'Here we have two new commands. If someone posts a message "/joke" then we respond by selecting one of several exceptionally funny jokes from a static list in the mapping.'}),"\n",(0,o.jsx)(t.p,{children:'The second new command is "/roast" and is exclusively for brave souls as the responses can be cruel and personal. The command works similarly to "/joke" with the exception being the ID of the user that made the command will be injected into the roast, as mentioning the target of the roast makes it significantly more heartbreaking (as intended).'}),"\n",(0,o.jsx)(t.h2,{id:"hitting-other-apis",children:"Hitting Other APIs"}),"\n",(0,o.jsx)(t.p,{children:"Clicking websites and browsing the internet is very difficult and most people are simply too busy for it, it'd therefore be useful if we could have our bot do some browsing for us occasionally."}),"\n",(0,o.jsx)(t.p,{children:'The final command we\'re going to add to our bot is "/release", where it will hit the Github API and find out for us what the latest Bento release is:'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:'pipeline:\n  processors:\n    - switch:\n        # Other cases omitted for brevity\n        - check: this.content == "/release"\n          processors:\n            - mapping: \'root = ""\'\n            - try:\n              - http:\n                  url: https://api.github.com/repos/warpstreamlabs/bento/releases/latest\n                  verb: GET\n              - mapping: \'root = "The latest release of Bento is %v: %v".format(this.tag_name, this.html_url)\'\n\n    - catch:\n      - log:\n          fields_mapping: \'root.error = error()\'\n          message: "Failed to process message"\n      - mapping: \'root = "Sorry, my circuits are all bent from twerking and I must have malfunctioned."\'\n'})}),"\n",(0,o.jsx)(t.p,{children:"Here we've added a switch case that clears the contents of the message, hits the Github API to obtain the latest Bento release as a JSON object, and finally maps the tag name and the URL of the release to a useful message."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["We're hitting the Github API with the ",(0,o.jsxs)(t.a,{href:"/docs/components/processors/http",children:["generic ",(0,o.jsx)(t.code,{children:"http"})," processor"]}),", which can be configured to work with most HTTP based APIs. In fact, the Discord input and output are actually ",(0,o.jsx)(t.a,{href:"/docs/configuration/templating",children:"configuration templates"})," that use the generic HTTP components ",(0,o.jsx)(t.a,{href:"https://github.com/warpstreamlabs/bento/blob/master/template/outputs/discord.yaml",children:"under the hood"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Since this command is networked and therefore has a chance of failure we've added some ",(0,o.jsx)(t.a,{href:"/docs/configuration/error_handling",children:"error handling"})," mechanisms after the switch processor so that it'd capture errors from this new case and any new cases we add later."]}),"\n",(0,o.jsx)(t.p,{children:'Within the catch block we simply log the error for the admin to peruse and change the response message out for a generic "whoopsie daisy" apology.'}),"\n",(0,o.jsx)(t.h2,{id:"final-words",children:"Final Words"}),"\n",(0,o.jsxs)(t.p,{children:["The full config for Blob Bot (with some super secret responses redacted) can be found ",(0,o.jsx)(t.a,{href:"https://github.com/warpstreamlabs/bento/blob/master/config/examples/discord_bot.yaml",children:"in the Github repo"}),". To find out more about Bloblang check out ",(0,o.jsx)(t.a,{href:"/docs/guides/bloblang/about",children:"the guide page"}),". To find out more about config templates check out the ",(0,o.jsx)(t.a,{href:"/docs/configuration/templating",children:"templates documentation page"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If you want to play with Blob Bot then ",(0,o.jsx)(t.a,{href:"https://discord.gg/6VaWjzP",children:"join our Discord"}),". There are also some humans in there that will help you manage your disappointment when you see Blob Bot in action."]})]})}function u(e){void 0===e&&(e={});const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var o=n(67294);const s={},a=o.createContext(s);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);