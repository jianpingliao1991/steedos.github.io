(window.webpackJsonp=window.webpackJsonp||[]).push([[33,301],{391:function(e,a,t){"use strict";var l=t(1),n=t(384),s=t(0),r=t.n(s),c=t(387),i=t.n(c),m=t(383),o=t(380),b=t(385),d=t(394),_=t(392),v=t(386),u=t(395),g=t(388),k=t(389),E=t(50),N=t.n(E);function h({activeBasePath:e,to:a,href:t,label:n,activeClassName:s="navbar__link--active",...c}){const i=Object(b.a)(a),o=Object(b.a)(e);return r.a.createElement(m.a,Object(l.a)({},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{isNavLink:!0,activeClassName:s,to:i,...e?{isActive:(e,a)=>a.pathname.startsWith(o)}:null},c),n)}function p({items:e,position:a,className:t,...n}){const s=(e,a=!1)=>i()({"navbar__item navbar__link":!a,dropdown__link:a},e);return e?r.a.createElement("div",{className:i()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},r.a.createElement(h,Object(l.a)({className:s(t)},n,{onClick:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),n.label),r.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...a},t)=>r.a.createElement("li",{key:t},r.a.createElement(h,Object(l.a)({activeClassName:"dropdown__link--active",className:s(e,!0)},a)))))):r.a.createElement(h,Object(l.a)({className:s(t)},n))}function O({items:e,className:a,...t}){const n=(e,a=!1)=>i()("menu__link",{"menu__link--sublist":a},e);return e?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(h,Object(l.a)({className:n(a,!0)},t),t.label),r.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...a},s)=>r.a.createElement("li",{className:"menu__list-item",key:s},r.a.createElement(h,Object(l.a)({activeClassName:"menu__link--active",className:n(e)},a,{onClick:t.onClick})))))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(h,Object(l.a)({className:n(a)},t)))}a.a=function(){let{siteConfig:{customFields:{navbar_items_us:e=[]},themeConfig:{navbar:{title:a,items:t=[],items_us:c=[],hideOnScroll:b=!1}={},disableDarkMode:E=!0}},isClient:h}=Object(o.a)();const[j,w]=Object(s.useState)(!1),[f,C]=Object(s.useState)(!1),{isDarkTheme:y,setLightTheme:L,setDarkTheme:D}=Object(v.a)(),{navbarRef:x,isNavbarVisible:M}=Object(u.a)(b);let{logoLink:S,logoLinkProps:T,logoImageUrl:B,logoAlt:I}=Object(k.a)();Object(g.a)(j);const A=Object(s.useCallback)(()=>{w(!0)},[w]),H=Object(s.useCallback)(()=>{w(!1)},[w]),J=Object(s.useCallback)(e=>e.target.checked?D():L(),[L,D]),K=Object(n.useLocation)();return K&&K.pathname.indexOf("/us")>=0&&(t=e,a="",S="/us/"),r.a.createElement("nav",{ref:x,className:i()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":j,[N.a.navbarHideable]:b,[N.a.navbarHidden]:!M})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:A,onKeyDown:A},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(m.a,Object(l.a)({className:"navbar__brand",to:S},T),null!=B&&r.a.createElement("img",{key:h,className:"navbar__logo",src:B,alt:I}),null!=a&&r.a.createElement("strong",{className:i()("navbar__title",{[N.a.hideLogoText]:f})},a)),t.filter(e=>"left"===e.position).map((e,a)=>r.a.createElement(p,Object(l.a)({},e,{key:a})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},t.filter(e=>"right"===e.position).map((e,a)=>r.a.createElement(p,Object(l.a)({},e,{key:a}))),!E&&r.a.createElement(_.a,{className:N.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:J}),r.a.createElement(d.a,{handleSearchBarToggle:C,isSearchBarExpanded:f}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:H}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(m.a,Object(l.a)({className:"navbar__brand",onClick:H,to:S},T),null!=B&&r.a.createElement("img",{key:h,className:"navbar__logo",src:B,alt:I}),null!=a&&r.a.createElement("strong",{className:"navbar__title"},a)),!E&&j&&r.a.createElement(_.a,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:J})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},t.map((e,a)=>r.a.createElement(O,Object(l.a)({},e,{onClick:H,key:a}))))))))}}}]);