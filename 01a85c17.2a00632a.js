(window.webpackJsonp=window.webpackJsonp||[]).push([[5,33,301],{391:function(e,a,t){"use strict";var n=t(1),l=t(384),r=t(0),s=t.n(r),c=t(387),i=t.n(c),m=t(383),o=t(380),b=t(385),d=t(394),v=t(392),u=t(386),_=t(395),g=t(388),E=t(389),k=t(50),h=t.n(k);function N({activeBasePath:e,to:a,href:t,label:l,activeClassName:r="navbar__link--active",...c}){const i=Object(b.a)(a),o=Object(b.a)(e);return s.a.createElement(m.a,Object(n.a)({},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{isNavLink:!0,activeClassName:r,to:i,...e?{isActive:(e,a)=>a.pathname.startsWith(o)}:null},c),l)}function p({items:e,position:a,className:t,...l}){const r=(e,a=!1)=>i()({"navbar__item navbar__link":!a,dropdown__link:a},e);return e?s.a.createElement("div",{className:i()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},s.a.createElement(N,Object(n.a)({className:r(t)},l,{onClick:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),l.label),s.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...a},t)=>s.a.createElement("li",{key:t},s.a.createElement(N,Object(n.a)({activeClassName:"dropdown__link--active",className:r(e,!0)},a)))))):s.a.createElement(N,Object(n.a)({className:r(t)},l))}function f({items:e,className:a,...t}){const l=(e,a=!1)=>i()("menu__link",{"menu__link--sublist":a},e);return e?s.a.createElement("li",{className:"menu__list-item"},s.a.createElement(N,Object(n.a)({className:l(a,!0)},t),t.label),s.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...a},r)=>s.a.createElement("li",{className:"menu__list-item",key:r},s.a.createElement(N,Object(n.a)({activeClassName:"menu__link--active",className:l(e)},a,{onClick:t.onClick})))))):s.a.createElement("li",{className:"menu__list-item"},s.a.createElement(N,Object(n.a)({className:l(a)},t)))}a.a=function(){let{siteConfig:{customFields:{navbar_items_us:e=[]},themeConfig:{navbar:{title:a,items:t=[],items_us:c=[],hideOnScroll:b=!1}={},disableDarkMode:k=!0}},isClient:N}=Object(o.a)();const[O,j]=Object(r.useState)(!1),[w,C]=Object(r.useState)(!1),{isDarkTheme:y,setLightTheme:L,setDarkTheme:D}=Object(u.a)(),{navbarRef:T,isNavbarVisible:x}=Object(_.a)(b);let{logoLink:M,logoLinkProps:B,logoImageUrl:S,logoAlt:I}=Object(E.a)();Object(g.a)(O);const A=Object(r.useCallback)(()=>{j(!0)},[j]),H=Object(r.useCallback)(()=>{j(!1)},[j]),J=Object(r.useCallback)(e=>e.target.checked?D():L(),[L,D]),K=Object(l.useLocation)();return K&&K.pathname.indexOf("/us")>=0&&(t=e,a="",M="/us/"),s.a.createElement("nav",{ref:T,className:i()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":O,[h.a.navbarHideable]:b,[h.a.navbarHidden]:!x})},s.a.createElement("div",{className:"navbar__inner"},s.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&s.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:A,onKeyDown:A},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},s.a.createElement("title",null,"Menu"),s.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),s.a.createElement(m.a,Object(n.a)({className:"navbar__brand",to:M},B),null!=S&&s.a.createElement("img",{key:N,className:"navbar__logo",src:S,alt:I}),null!=a&&s.a.createElement("strong",{className:i()("navbar__title",{[h.a.hideLogoText]:w})},a)),t.filter(e=>"left"===e.position).map((e,a)=>s.a.createElement(p,Object(n.a)({},e,{key:a})))),s.a.createElement("div",{className:"navbar__items navbar__items--right"},t.filter(e=>"right"===e.position).map((e,a)=>s.a.createElement(p,Object(n.a)({},e,{key:a}))),!k&&s.a.createElement(v.a,{className:h.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:J}),s.a.createElement(d.a,{handleSearchBarToggle:C,isSearchBarExpanded:w}))),s.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:H}),s.a.createElement("div",{className:"navbar-sidebar"},s.a.createElement("div",{className:"navbar-sidebar__brand"},s.a.createElement(m.a,Object(n.a)({className:"navbar__brand",onClick:H,to:M},B),null!=S&&s.a.createElement("img",{key:N,className:"navbar__logo",src:S,alt:I}),null!=a&&s.a.createElement("strong",{className:"navbar__title"},a)),!k&&O&&s.a.createElement(v.a,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:J})),s.a.createElement("div",{className:"navbar-sidebar__items"},s.a.createElement("div",{className:"menu"},s.a.createElement("ul",{className:"menu__list"},t.map((e,a)=>s.a.createElement(f,Object(n.a)({},e,{onClick:H,key:a}))))))))}},61:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(390),s=t(383);a.default=function(e){const{tags:a}=e,t={};Object.keys(a).forEach(e=>{const a=function(e){return e[0].toUpperCase()}(e);t[a]=t[a]||[],t[a].push(e)});const n=Object.entries(t).sort(([e],[a])=>e===a?0:e>a?1:-1).map(([e,t])=>l.a.createElement("div",{key:e},l.a.createElement("h3",null,e),t.map(e=>l.a.createElement(s.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")),l.a.createElement("hr",null))).filter(e=>null!=e);return l.a.createElement(r.a,{title:"Tags",description:"Blog Tags"},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("main",{className:"col col--8 col--offset-2"},l.a.createElement("h1",null,"Tags"),l.a.createElement("div",{className:"margin-vert--lg"},n)))))}}}]);