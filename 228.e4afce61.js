(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{335:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(339),c=t(331),o=t(332),i=t(346),m=t(1),s=(t(342),t(343),t(333)),b=t(338),u=t(344),d=t(345),v=t(330),g=t.n(v),E=t(340),h=t(347),f=t(341),_=t(93),k=t.n(_),p=t(336);function N(e){var a=e.activeBasePath,t=e.to,n=e.href,l=e.label,c=(e.position,Object(o.a)(t)),i=Object(o.a)(a);return r.a.createElement(s.a,Object(m.a)({className:"navbar__item navbar__link"},n?{target:"_blank",rel:"noopener noreferrer",href:n}:Object.assign({activeClassName:"navbar__link--active",to:c},a?{isActive:function(e,a){return a.pathname.startsWith(i)}}:null)),l)}var O=function(e){var a,t,l=Object(c.a)(),i=l.siteConfig,v=void 0===i?{}:i,_=l.isClient,O=v.baseUrl,j=v.themeConfig,w=void 0===j?{}:j,y=w.navbar,C=void 0===y?{}:y,x=w.disableDarkMode,D=void 0!==x&&x,L=C.title,M=C.logo,S=void 0===M?{}:M,T=C.links,P=void 0===T?[]:T,B=C.hideOnScroll,I=void 0!==B&&B,A=Object(n.useState)(!1),F=A[0],H=A[1],W=Object(n.useState)(!1),$=W[0],J=W[1],R=Object(E.a)(),U=R.isDarkTheme,V=R.setLightTheme,q=R.setDarkTheme,K=Object(h.a)(I),z=K.navbarRef,G=K.isNavbarVisible;Object(f.a)(F);var Q=Object(n.useCallback)((function(){H(!0)}),[H]),X=Object(n.useCallback)((function(){H(!1)}),[H]),Y=Object(n.useCallback)((function(e){return e.target.checked?q():V()}),[V,q]),Z=S.href||O,ee={};S.target?ee={target:S.target}:Object(b.a)(Z)||(ee={rel:"noopener noreferrer",target:"_blank"});var ae=S.srcDark&&U?S.srcDark:S.src,te=Object(o.a)(ae),ne=Object(p.d)();return ne&&ne.pathname.indexOf("/us/")>=0&&(P=C.links_us,L="Steedos",Z="/docs/us/home"),r.a.createElement("nav",{ref:z,className:g()("navbar","navbar--light","navbar--fixed-top",(a={"navbar-sidebar--show":F},a[k.a.navbarHideable]=I,a[k.a.navbarHidden]=!G,a))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:Q,onKeyDown:Q},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(s.a,Object(m.a)({className:"navbar__brand",to:Z},ee),null!=S&&r.a.createElement("img",{key:_,className:"navbar__logo",src:te,alt:S.alt}),null!=L&&r.a.createElement("strong",{className:g()("navbar__title",(t={},t[k.a.hideLogoText]=$,t))},L)),P.filter((function(e){return"right"!==e.position})).map((function(e,a){return r.a.createElement(N,Object(m.a)({},e,{key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},P.filter((function(e){return"right"===e.position})).map((function(e,a){return r.a.createElement(N,Object(m.a)({},e,{key:a}))})),!D&&r.a.createElement(d.a,{className:k.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:U,onChange:Y}),r.a.createElement(u.a,{handleSearchBarToggle:J,isSearchBarExpanded:$}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:X}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(s.a,Object(m.a)({className:"navbar__brand",onClick:X,to:Z},ee),null!=S&&r.a.createElement("img",{key:_,className:"navbar__logo",src:te,alt:S.alt}),null!=L&&r.a.createElement("strong",{className:"navbar__title"},L)),!D&&F&&r.a.createElement(d.a,{"aria-label":"Dark mode toggle in sidebar",checked:U,onChange:Y})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},P.map((function(e,a){return r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(N,Object(m.a)({className:"menu__link"},e,{onClick:X})))})))))))},j=t(94),w=t.n(j);function y({to:e,href:a,label:t,...n}){const l=Object(o.a)(e);return r.a.createElement(s.a,Object(m.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:l},n),t)}const C=({url:e,alt:a})=>r.a.createElement("img",{className:"footer__logo",alt:a,src:e});var x=function(){const e=Object(c.a)(),{siteConfig:a={}}=e,{themeConfig:t={}}=a,{footer:n}=t,{copyright:l,links:i=[],logo:m={}}=n||{},s=Object(o.a)(m.src);return n?r.a.createElement("footer",{className:g()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},i.map((e,a)=>r.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,a)=>e.html?r.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(y,e)))):null))),(m||l)&&r.a.createElement("div",{className:"text--center"},m&&m.src&&r.a.createElement("div",{className:"margin-bottom--sm"},m.href?r.a.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:w.a.footerLogoLink},r.a.createElement(C,{alt:m.alt,url:s})):r.a.createElement(C,{alt:m.alt,url:s})),l))):null},D=t(398);t(95);a.a=function(e){const{siteConfig:a={}}=Object(c.a)(),{favicon:t,title:n,themeConfig:{image:m},url:s}=a,{route:b,children:u,title:d,noFooter:v,description:g,image:E,keywords:h,permalink:f,version:_}=e,k=d?`${d} | ${n}`:n,p=E||m,N=s+Object(o.a)(p),j=Object(o.a)(t);return r.a.createElement(D.a,{iconPath:"/assets/icons"},r.a.createElement(i.a,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),t&&r.a.createElement("link",{rel:"shortcut icon",href:j}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),_&&r.a.createElement("meta",{name:"docsearch:version",content:_}),h&&h.length&&r.a.createElement("meta",{name:"keywords",content:h.join(",")}),p&&r.a.createElement("meta",{property:"og:image",content:N}),p&&r.a.createElement("meta",{property:"twitter:image",content:N}),p&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${k}`}),f&&r.a.createElement("meta",{property:"og:url",content:s+f}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(O,null),r.a.createElement("div",{className:"main-wrapper"},u),!v&&r.a.createElement(x,null)))}},365:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(335);a.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);