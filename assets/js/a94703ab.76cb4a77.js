"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[4368],{4867:function(e,t,n){n.r(t),n.d(t,{default:function(){return he}});var a=n(67294),i=n(86010),o=n(10833),l=n(35281),s=n(53438),r=n(1116),c=n(95999),d=n(12466),u=n(85936);var m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"},b=n(85893);function h(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,i]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:l,cancelScroll:s}=(0,d.Ct)();return(0,d.RF)(((e,n)=>{let{scrollY:a}=e;const l=null==n?void 0:n.scrollY;l&&(o.current?o.current=!1:a>=l?(s(),i(!1)):a<t?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,u.S)((e=>{e.location.hash&&(o.current=!0,i(!1))})),{shown:n,scrollToTop:()=>l(0)}}({threshold:300});return(0,b.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",l.k.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(91442),x=n(16550),f=n(87524),v=n(86668),j=n(21327);function k(e){return(0,b.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}var _={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function g(e){let{onClick:t}=e;return(0,b.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",_.collapseSidebarButton),onClick:t,children:(0,b.jsx)(k,{className:_.collapseSidebarButtonIcon})})}var C=n(59689),S=n(902);const I=Symbol("EmptyContext"),N=a.createContext(I);function T(e){let{children:t}=e;const[n,i]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:i})),[n]);return(0,b.jsx)(N.Provider,{value:o,children:t})}var B=n(86043),Z=n(48596),A=n(39960),L=n(72389);function y(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,b.jsx)("button",{"aria-label":t?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function w(e){let{item:t,onItemClick:n,activePath:o,level:r,index:c,...d}=e;const{items:u,label:m,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,v.L)(),j=function(e){const t=(0,L.Z)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,s.LM)(e):void 0),[e,t])}(t),k=(0,s._F)(t,o),_=(0,Z.Mg)(x,o),{collapsed:g,setCollapsed:C}=(0,B.u)({initialState:()=>!!h&&(!k&&t.collapsed)}),{expandedItem:T,setExpandedItem:w}=function(){const e=(0,a.useContext)(N);if(e===I)throw new S.i6("DocSidebarItemsExpandedStateProvider");return e}(),E=function(e){void 0===e&&(e=!g),w(e?null:c),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:i}=e;const o=(0,S.D9)(t);(0,a.useEffect)((()=>{t&&!o&&n&&i(!1)}),[t,o,n,i])}({isActive:k,collapsed:g,updateCollapsed:E}),(0,a.useEffect)((()=>{h&&null!=T&&T!==c&&f&&C(!0)}),[h,T,c,C,f]),(0,b.jsxs)("li",{className:(0,i.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":g},p),children:[(0,b.jsxs)("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_}),children:[(0,b.jsx)(A.Z,{className:(0,i.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":k}),onClick:h?e=>{null==n||n(t),x?E(!1):(e.preventDefault(),E())}:()=>{null==n||n(t)},"aria-current":_?"page":void 0,"aria-expanded":h?!g:void 0,href:h?null!=j?j:"#":j,...d,children:m}),x&&h&&(0,b.jsx)(y,{collapsed:g,categoryLabel:m,onClick:e=>{e.preventDefault(),E()}})]}),(0,b.jsx)(B.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:g,children:(0,b.jsx)(V,{items:u,tabIndex:g?-1:0,onItemClick:n,activePath:o,level:r+1})})]})}var E=n(13919),H=n(39471),M={menuExternalLink:"menuExternalLink_NmtK"};function R(e){let{item:t,onItemClick:n,activePath:a,level:o,index:r,...c}=e;const{href:d,label:u,className:m,autoAddBaseUrl:h}=t,p=(0,s._F)(t,a),x=(0,E.Z)(d);return(0,b.jsx)("li",{className:(0,i.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),children:(0,b.jsxs)(A.Z,{className:(0,i.Z)("menu__link",!x&&M.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...c,children:[u,!x&&(0,b.jsx)(H.Z,{})]})},u)}var W={menuHtmlItem:"menuHtmlItem_M9Kj"};function F(e){let{item:t,level:n,index:a}=e;const{value:o,defaultStyle:s,className:r}=t;return(0,b.jsx)("li",{className:(0,i.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(n),s&&[W.menuHtmlItem,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:o}},a)}function P(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,b.jsx)(w,{item:t,...n});case"html":return(0,b.jsx)(F,{item:t,...n});default:return(0,b.jsx)(R,{item:t,...n})}}function D(e){let{items:t,...n}=e;const a=(0,s.f)(t,n.activePath);return(0,b.jsx)(T,{children:a.map(((e,t)=>(0,b.jsx)(P,{item:e,index:t,...n},t)))})}var V=(0,a.memo)(D),U={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function K(e){let{path:t,sidebar:n,className:o}=e;const s=function(){const{isActive:e}=(0,C.nT)(),[t,n]=(0,a.useState)(e);return(0,d.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.Z)("menu thin-scrollbar",U.menu,s&&U.menuWithAnnouncementBar,o),children:(0,b.jsx)("ul",{className:(0,i.Z)(l.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(V,{items:n,activePath:t,level:1})})})}var Y="sidebar_njMd",z="sidebarWithHideableNavbar_wUlq",G="sidebarHidden_VK0M",O="sidebarLogo_isFc";function q(e){let{path:t,sidebar:n,onCollapse:a,isHidden:o}=e;const{navbar:{hideOnScroll:l},docs:{sidebar:{hideable:s}}}=(0,v.L)();return(0,b.jsxs)("div",{className:(0,i.Z)(Y,l&&z,o&&G),children:[l&&(0,b.jsx)(j.Z,{tabIndex:-1,className:O}),(0,b.jsx)(K,{path:t,sidebar:n}),s&&(0,b.jsx)(g,{onClick:a})]})}var J=a.memo(q),Q=n(13102),X=n(93163);const $=e=>{let{sidebar:t,path:n}=e;const a=(0,X.e)();return(0,b.jsx)("ul",{className:(0,i.Z)(l.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(V,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ee(e){return(0,b.jsx)(Q.Zo,{component:$,props:e})}var te=a.memo(ee);function ne(e){const t=(0,f.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)(J,{...e}),a&&(0,b.jsx)(te,{...e})]})}var ae={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function ie(e){let{toggleSidebar:t}=e;return(0,b.jsx)("div",{className:ae.expandButton,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.jsx)(k,{className:ae.expandButtonIcon})})}var oe={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function le(e){var t;let{children:n}=e;const i=(0,r.V)();return(0,b.jsx)(a.Fragment,{children:n},null!=(t=null==i?void 0:i.name)?t:"noSidebar")}function se(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:s}=(0,x.TH)(),[r,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{r&&c(!1),!r&&(0,p.n)()&&c(!0),o((e=>!e))}),[o,r]);return(0,b.jsx)("aside",{className:(0,i.Z)(l.k.docs.docSidebarContainer,oe.docSidebarContainer,n&&oe.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(oe.docSidebarContainer)&&n&&c(!0)},children:(0,b.jsx)(le,{children:(0,b.jsxs)("div",{className:(0,i.Z)(oe.sidebarViewport,r&&oe.sidebarViewportHidden),children:[(0,b.jsx)(ne,{sidebar:t,path:s,onCollapse:d,isHidden:r}),r&&(0,b.jsx)(ie,{toggleSidebar:d})]})})})}var re={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function ce(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,r.V)();return(0,b.jsx)("main",{className:(0,i.Z)(re.docMainContainer,(t||!a)&&re.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",re.docItemWrapper,t&&re.docItemWrapperEnhanced),children:n})})}var de={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ue(e){let{children:t}=e;const n=(0,r.V)(),[i,o]=(0,a.useState)(!1);return(0,b.jsxs)("div",{className:de.docsWrapper,children:[(0,b.jsx)(h,{}),(0,b.jsxs)("div",{className:de.docRoot,children:[n&&(0,b.jsx)(se,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:o}),(0,b.jsx)(ce,{hiddenSidebarContainer:i,children:t})]})]})}var me=n(92503);function be(e){let{className:t}=e;return(0,b.jsx)("main",{className:(0,i.Z)("container margin-vert--xl",t),children:(0,b.jsx)("div",{className:"row",children:(0,b.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,b.jsx)(me.Z,{as:"h1",className:"hero__title",children:(0,b.jsx)(c.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,b.jsx)("p",{children:(0,b.jsx)(c.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,b.jsx)("p",{children:(0,b.jsx)(c.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}function he(e){const t=(0,s.SN)(e);if(!t)return(0,b.jsx)(be,{});const{docElement:n,sidebarName:a,sidebarItems:c}=t;return(0,b.jsx)(o.FG,{className:(0,i.Z)(l.k.page.docsDocPage),children:(0,b.jsx)(r.b,{name:a,items:c,children:(0,b.jsx)(ue,{children:n})})})}}}]);