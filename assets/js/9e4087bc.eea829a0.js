"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[3608],{63169:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});r(67294);var a=r(39960),s=r(95999),i=r(10833),n=r(7452),c=r(92503),l=r(85893);function h(e){let{year:t,posts:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{as:"h3",id:t,children:t}),(0,l.jsx)("ul",{children:r.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(a.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:t}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(h,{...e})},t)))})})})}function o(e){let{archive:t}=e;const r=(0,s.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,s.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const t=e.reduce(((e,t)=>{var r;const a=t.metadata.date.split("-")[0],s=null!=(r=e.get(a))?r:[];return e.set(a,[t,...s])}),new Map);return Array.from(t,(e=>{let[t,r]=e;return{year:t,posts:r}}))}(t.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.d,{title:r,description:a}),(0,l.jsxs)(n.Z,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(c.Z,{as:"h1",className:"hero__title",children:r}),(0,l.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,l.jsx)("main",{children:h.length>0&&(0,l.jsx)(d,{years:h})})]})]})}}}]);