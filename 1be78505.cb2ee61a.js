(window.webpackJsonp=window.webpackJsonp||[]).push([[32,321],{371:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(375),r=t(378),s=t.n(r),o=t(376),i=t(21),m=t(384),u=t(1),b=t(387),d=t(388),g=t(380),E=t(399),h=t(85),p=t.n(h);function k({item:e,onItemClick:a,collapsible:t,...c}){const{items:r,href:o,label:i,type:m}=e,[b,d]=Object(l.useState)(e.collapsed),[h,p]=Object(l.useState)(null);e.collapsed!==h&&(p(e.collapsed),d(e.collapsed));const f=Object(l.useCallback)(e=>{e.preventDefault(),e.target.blur(),d(e=>!e)});switch(m){case"category":return r.length>0&&n.a.createElement("li",{className:s()("menu__list-item",{"menu__list-item--collapsed":b}),key:i},n.a.createElement("a",Object(u.a)({className:s()("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&!e.collapsed}),href:"#!",onClick:t?f:void 0},c),i),n.a.createElement("ul",{className:"menu__list"},r.map(e=>n.a.createElement(k,{tabIndex:b?"-1":"0",key:e.label,item:e,onItemClick:a,collapsible:t}))));case"link":default:return n.a.createElement("li",{className:"menu__list-item",key:i},n.a.createElement(g.a,Object(u.a)({className:"menu__link",to:o},Object(E.a)(o)?{isNavLink:!0,activeClassName:"menu__link--active",exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},c),i))}}var f=function(e){const[a,t]=Object(l.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:c,hideOnScroll:r=!1}={}}}={},isClient:i}=Object(o.a)(),{logoLink:m,logoLinkProps:E,logoImageUrl:h,logoAlt:f}=Object(d.a)(),{docsSidebars:v,path:_,sidebar:N,sidebarCollapsible:O}=e;if(Object(b.a)(a),!N)return null;const w=v[N];if(!w)throw new Error(`Cannot find the sidebar "${N}" in the sidebar config!`);return O&&w.forEach(e=>function e(a,t){const{items:l,href:n,type:c}=a;switch(c){case"category":{const n=l.map(a=>e(a,t)).filter(e=>e).length>0;return a.collapsed=!n,n}case"link":default:return n===t}}(e,_)),n.a.createElement("div",{className:p.a.sidebar},n.a.createElement("div",{className:p.a.sidebarLogo},null!=N&&n.a.createElement("strong",null,N)),r&&n.a.createElement(g.a,Object(u.a)({tabIndex:"-1",className:p.a.sidebarLogo,to:m},E),null!=h&&n.a.createElement("img",{key:i,src:h,alt:f}),null!=c&&n.a.createElement("strong",null,c)),n.a.createElement("div",{className:s()("menu","menu--responsive",p.a.menu,{"menu--show":a})},n.a.createElement("div",{class:" menu__button"},n.a.createElement("span",null,N),n.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu",className:"button button--link button--sm",type:"button",onClick:()=>{t(!a)}},a?n.a.createElement("svg",{className:"{styles.sidebarMenuIcon}",xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 24 24",role:"img",focusable:"false"},n.a.createElement("title",null,"Close"),n.a.createElement("path",{d:"M14.3 11.7l6-6c.3-.3.3-.7 0-1l-.9-1c-.3-.2-.7-.2-1 0l-6 6.1c-.2.2-.5.2-.7 0l-6-6.1c-.3-.3-.7-.3-1 0l-1 1c-.2.2-.2.7 0 .9l6.1 6.1c.2.2.2.4 0 .6l-6.1 6.1c-.3.3-.3.7 0 1l1 1c.2.2.7.2.9 0l6.1-6.1c.2-.2.4-.2.6 0l6.1 6.1c.2.2.7.2.9 0l1-1c.3-.3.3-.7 0-1l-6-6c-.2-.2-.2-.5 0-.7z"})):n.a.createElement("svg",{className:"{styles.sidebarMenuIcon}",xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 24 24",role:"img",focusable:"false"},n.a.createElement("title",null,"Menu"),n.a.createElement("path",{d:"M22 8.2l-9.5 9.6c-.3.2-.7.2-1 0L2 8.2c-.2-.3-.2-.7 0-1l1-1c.3-.3.8-.3 1.1 0l7.4 7.5c.3.3.7.3 1 0l7.4-7.5c.3-.2.8-.2 1.1 0l1 1c.2.3.2.7 0 1z"})))),n.a.createElement("ul",{className:"menu__list"},w.map(e=>n.a.createElement(k,{key:e.label,item:e,onItemClick:e=>{e.target.blur(),t(!1)},collapsible:O})))))},v=t(410),_=t(414),N=t(383),O=t(89),w=t.n(O);a.default=function(e){const{route:a,docsMetadata:t,location:l}=e,r=a.routes.find(e=>Object(N.b)(l.pathname,e))||{},{permalinkToSidebar:u,docsSidebars:b,version:d}=t,g=u[r.path],{siteConfig:{themeConfig:E={}}={},isClient:h}=Object(o.a)(),{sidebarCollapsible:p=!0}=E;if(0===Object.keys(r).length)return n.a.createElement(_.default,e);let k=s()(w.a.docPage);return g&&(k=s()("hasSidebar",w.a.docPage)),n.a.createElement(m.a,{version:d,key:h},n.a.createElement("div",{className:k},g&&n.a.createElement("div",{className:w.a.docSidebarContainer},n.a.createElement(f,{docsSidebars:b,path:r.path,sidebar:g,sidebarCollapsible:p})),n.a.createElement("main",{className:w.a.docMainContainer},n.a.createElement(c.a,{components:v.a},Object(i.a)(a.routes)))))}},384:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(386),r=t(376),s=t(379),o=t(395),i=t(1),m=t(383),u=t(378),b=t.n(u),d=t(380),g=t(392),E=t(393),h=t(385),p=t(394),k=t(387),f=t(388),v=t(50),_=t.n(v);function N({activeBasePath:e,to:a,href:t,label:l,activeClassName:c="navbar__link--active",...r}){const o=Object(s.a)(a),m=Object(s.a)(e);return n.a.createElement(d.a,Object(i.a)({},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{isNavLink:!0,activeClassName:c,to:o,...e?{isActive:(e,a)=>a.pathname.startsWith(m)}:null},r),l)}function O({items:e,position:a,className:t,...l}){const c=(e,a=!1)=>b()({"navbar__item navbar__link":!a,dropdown__link:a},e);return e?n.a.createElement("div",{className:b()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},n.a.createElement(N,Object(i.a)({className:c(t)},l,{onClick:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),l.label),n.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...a},t)=>n.a.createElement("li",{key:t},n.a.createElement(N,Object(i.a)({activeClassName:"dropdown__link--active",className:c(e,!0)},a)))))):n.a.createElement(N,Object(i.a)({className:c(t)},l))}function w({items:e,className:a,...t}){const l=(e,a=!1)=>b()("menu__link",{"menu__link--sublist":a},e);return e?n.a.createElement("li",{className:"menu__list-item"},n.a.createElement(N,Object(i.a)({className:l(a,!0)},t),t.label),n.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...a},c)=>n.a.createElement("li",{className:"menu__list-item",key:c},n.a.createElement(N,Object(i.a)({activeClassName:"menu__link--active",className:l(e)},a,{onClick:t.onClick})))))):n.a.createElement("li",{className:"menu__list-item"},n.a.createElement(N,Object(i.a)({className:l(a)},t)))}var j=function(){let{siteConfig:{themeConfig:{navbar:{title:e,links:a=[],links_us:t=[],hideOnScroll:c=!1}={},disableDarkMode:s=!1}},isClient:o}=Object(r.a)();const[u,v]=Object(l.useState)(!1),[N,j]=Object(l.useState)(!1),{isDarkTheme:y,setLightTheme:C,setDarkTheme:L}=Object(h.a)(),{navbarRef:S,isNavbarVisible:x}=Object(p.a)(c);let{logoLink:M,logoLinkProps:T,logoImageUrl:B,logoAlt:I}=Object(f.a)();Object(k.a)(u);const P=Object(l.useCallback)(()=>{v(!0)},[v]),D=Object(l.useCallback)(()=>{v(!1)},[v]),A=Object(l.useCallback)(e=>e.target.checked?L():C(),[C,L]),R=Object(m.d)();return R&&R.pathname.indexOf("/us")>=0&&(a=t,e="Steedos",M="/us/"),n.a.createElement("nav",{ref:S,className:b()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":u,[_.a.navbarHideable]:c,[_.a.navbarHidden]:!x})},n.a.createElement("div",{className:"navbar__inner"},n.a.createElement("div",{className:"navbar__items"},null!=a&&0!==a.length&&n.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:P,onKeyDown:P},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},n.a.createElement("title",null,"Menu"),n.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),n.a.createElement(d.a,Object(i.a)({className:"navbar__brand",to:M},T),null!=B&&n.a.createElement("img",{key:o,className:"navbar__logo",src:B,alt:I}),null!=e&&n.a.createElement("strong",{className:b()("navbar__title",{[_.a.hideLogoText]:N})},e)),a.filter(e=>"left"===e.position).map((e,a)=>n.a.createElement(O,Object(i.a)({},e,{key:a})))),n.a.createElement("div",{className:"navbar__items navbar__items--right"},a.filter(e=>"right"===e.position).map((e,a)=>n.a.createElement(O,Object(i.a)({},e,{key:a}))),!s&&n.a.createElement(E.a,{className:_.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:A}),n.a.createElement(g.a,{handleSearchBarToggle:j,isSearchBarExpanded:N}))),n.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:D}),n.a.createElement("div",{className:"navbar-sidebar"},n.a.createElement("div",{className:"navbar-sidebar__brand"},n.a.createElement(d.a,Object(i.a)({className:"navbar__brand",onClick:D,to:M},T),null!=B&&n.a.createElement("img",{key:o,className:"navbar__logo",src:B,alt:I}),null!=e&&n.a.createElement("strong",{className:"navbar__title"},e)),!s&&u&&n.a.createElement(E.a,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:A})),n.a.createElement("div",{className:"navbar-sidebar__items"},n.a.createElement("div",{className:"menu"},n.a.createElement("ul",{className:"menu__list"},a.map((e,a)=>n.a.createElement(w,Object(i.a)({},e,{onClick:D,key:a}))))))))},y=t(51),C=t.n(y);function L({to:e,href:a,label:t,...l}){const c=Object(s.a)(e);return n.a.createElement(d.a,Object(i.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:c},l),t)}const S=({url:e,alt:a})=>n.a.createElement("img",{className:"footer__logo",alt:a,src:e});var x=function(){const e=Object(r.a)(),{siteConfig:a={}}=e,{themeConfig:t={}}=a,{footer:l}=t,{copyright:c,icp:o,icpURL:i,links:m=[],logo:u={}}=l||{},d=Object(s.a)(u.src);return l?n.a.createElement("footer",{className:b()("footer",{"footer--dark":"dark"===l.style})},n.a.createElement("div",{className:"container"},m&&m.length>0&&n.a.createElement("div",{className:"row footer__links"},m.map((e,a)=>n.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map((e,a)=>e.html?n.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(L,e)))):null))),(u||c)&&n.a.createElement("div",{className:"text--center"},u&&u.src&&n.a.createElement("div",{className:"margin-bottom--sm"},u.href?n.a.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:C.a.footerLogoLink},n.a.createElement(S,{alt:u.alt,url:d})):n.a.createElement(S,{alt:u.alt,url:d})),c,n.a.createElement("a",{href:i,target:"_blank",className:"footer__link-item"},o)))):null},M=t(487);t(52);a.a=function(e){const{siteConfig:a={}}=Object(r.a)(),{favicon:t,title:l,themeConfig:{image:i},url:m}=a,{route:u,children:b,title:d,noFooter:g,description:E,image:h,keywords:p,permalink:k,version:f}=e,v=d?`${d} | ${l}`:l,_=h||i,N=m+Object(s.a)(_),O=Object(s.a)(t);return n.a.createElement(M.a,{iconPath:"/assets/icons"},n.a.createElement(o.a,null,n.a.createElement(c.a,null,n.a.createElement("html",{lang:"en"}),n.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),n.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),v&&n.a.createElement("title",null,v),v&&n.a.createElement("meta",{property:"og:title",content:v}),t&&n.a.createElement("link",{rel:"shortcut icon",href:O}),E&&n.a.createElement("meta",{name:"description",content:E}),E&&n.a.createElement("meta",{property:"og:description",content:E}),f&&n.a.createElement("meta",{name:"docsearch:version",content:f}),p&&p.length&&n.a.createElement("meta",{name:"keywords",content:p.join(",")}),_&&n.a.createElement("meta",{property:"og:image",content:N}),_&&n.a.createElement("meta",{property:"twitter:image",content:N}),_&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+v}),k&&n.a.createElement("meta",{property:"og:url",content:m+k}),n.a.createElement("meta",{name:"twitter:card",content:"summary"})),n.a.createElement(j,null),n.a.createElement("div",{className:"main-wrapper"},b),!g&&n.a.createElement(x,null)))}},401:function(e,a,t){"use strict";var l=t(1),n=t(0),c=t.n(n),r=t(378),s=t.n(r),o=t(411),i=t(404),m=t(402),u=t.n(m),b=t(403),d=t.n(b),g=t(376),E=t(385),h=t(53),p=t.n(h);const k=/{([\d,-]+)}/,f=/title=".*"/;a.a=({children:e,className:a,metastring:t})=>{const{siteConfig:{themeConfig:{prism:r={}}}}=Object(g.a)(),[m,b]=Object(n.useState)(!1),[h,v]=Object(n.useState)(!1);Object(n.useEffect)(()=>{v(!0)},[]);const _=Object(n.useRef)(null),N=Object(n.useRef)(null);let O=[],w="";const{isDarkTheme:j}=Object(E.a)(),y=r.theme||i.a,C=r.darkTheme||y,L=j?C:y;if(t&&k.test(t)){const e=t.match(k)[1];O=d.a.parse(e).filter(e=>e>0)}t&&f.test(t)&&(w=t.match(f)[0].split("title=")[1].replace(/"+/g,"")),Object(n.useEffect)(()=>{let e;return N.current&&(e=new u.a(N.current,{target:()=>_.current})),()=>{e&&e.destroy()}},[N.current,_.current]);let S=a&&a.replace(/language-/,"");!S&&r.defaultLanguage&&(S=r.defaultLanguage);const x=()=>{window.getSelection().empty(),b(!0),setTimeout(()=>b(!1),2e3)};return c.a.createElement(o.a,Object(l.a)({},o.b,{key:h,theme:L,code:e.replace(/\n$/,""),language:S}),({className:e,style:a,tokens:t,getLineProps:n,getTokenProps:r})=>c.a.createElement(c.a.Fragment,null,w&&c.a.createElement("div",{style:a,className:p.a.codeBlockTitle},w),c.a.createElement("div",{className:p.a.codeBlockContent},c.a.createElement("button",{ref:N,type:"button","aria-label":"Copy code to clipboard",className:s()(p.a.copyButton,{[p.a.copyButtonWithTitle]:w}),onClick:x},m?"Copied":"Copy"),c.a.createElement("pre",{className:s()(e,p.a.codeBlock,{[p.a.codeBlockWithTitle]:w})},c.a.createElement("div",{ref:_,className:p.a.codeBlockLines,style:a},t.map((e,a)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const t=n({line:e,key:a});return O.includes(a+1)&&(t.className=t.className+" docusaurus-highlight-code-line"),c.a.createElement("div",Object(l.a)({key:a},t),e.map((e,a)=>c.a.createElement("span",Object(l.a)({key:a},r({token:e,key:a})))))}))))))}},414:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(384);a.default=function(){return n.a.createElement(c.a,{title:"Page Not Found"},n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--6 col--offset-3"},n.a.createElement("h1",{className:"hero__title"},"Page Not Found"),n.a.createElement("p",null,"We could not find what you were looking for."),n.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);