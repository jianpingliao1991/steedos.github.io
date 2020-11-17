/*! For license information please see 2.7c144dbc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{405:function(e,t,n){"use strict";var a=n(0),r=n(472);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},406:function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},407:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var n=Object(a.useState)(t),c=n[0],o=n[1];return Object(a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){o(t())}}),[]),c}},408:function(e,t,n){"use strict";var a=n(395),r=n(405),c=n(419),o=n(435);t.a=function(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).navbar,i=(n=void 0===n?{}:n).logo,u=void 0===i?{}:i,l=Object(r.a)().isDarkTheme,s=Object(c.a)(u.href||"/"),f={};u.target?f={target:u.target}:Object(o.a)(s)||(f={rel:"noopener noreferrer",target:"_blank"});var d=u.srcDark&&l?u.srcDark:u.src;return{logoLink:s,logoLinkProps:f,logoImageUrl:Object(c.a)(d),logoAlt:u.alt}}},410:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n.n(r),o=n(397),i=n(420),u=n(395),l=n(419),s=n(7),f="light",d="dark",h=function(e){return e===d?d:f},m=function(){return s.a.canUseDOM?h(document.documentElement.getAttribute("data-theme")):f},v=function(e){try{localStorage.setItem("theme",h(e))}catch(t){console.error(t)}},b=function(){var e=Object(u.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).colorMode,a=(n=void 0===n?{}:n).disableSwitch,c=void 0!==a&&a,o=Object(r.useState)(m),i=o[0],l=o[1],s=Object(r.useCallback)((function(){l(f),v(f)}),[]),b=Object(r.useCallback)((function(){l(d),v(d)}),[]);return Object(r.useEffect)((function(){document.documentElement.setAttribute("data-theme",h(i))}),[i]),Object(r.useEffect)((function(){if(!c)try{var e=localStorage.getItem("theme");null!==e&&l(h(e))}catch(t){console.error(t)}}),[l]),Object(r.useEffect)((function(){c||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;l(t?d:f)}))}),[]),{isDarkTheme:i===d,setLightTheme:s,setDarkTheme:b}},p=n(472);var g=function(e){var t=b(),n=t.isDarkTheme,a=t.setLightTheme,r=t.setDarkTheme;return c.a.createElement(p.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:r}},e.children)},O="docusaurus.tab.",k=function(){var e=Object(r.useState)({}),t=e[0],n=e[1],a=Object(r.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(r.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var a=localStorage.key(t);if(a.startsWith(O))e[a.substring(O.length)]=localStorage.getItem(a)}n(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),a(e,t)}}},y="docusaurus.announcement.dismiss",E="docusaurus.announcement.id",j=function(){var e=Object(u.a)().siteConfig.themeConfig.announcementBar,t=Object(r.useState)(!0),n=t[0],a=t[1],c=Object(r.useCallback)((function(){localStorage.setItem(y,"true"),a(!0)}),[]);return Object(r.useEffect)((function(){if(e){var t=e.id,n=localStorage.getItem(E);"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;localStorage.setItem(E,t),r&&localStorage.setItem(y,"false"),(r||"false"===localStorage.getItem(y))&&a(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}},C=n(473);var w=function(e){var t=k(),n=t.tabGroupChoices,a=t.setTabGroupChoices,r=j(),o=r.isAnnouncementBarClosed,i=r.closeAnnouncementBar;return c.a.createElement(C.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:o,closeAnnouncementBar:i}},e.children)},S=n(474),_=n(54),N=n.n(_);var T=function(){var e,t=Object(u.a)().siteConfig,n=(t=void 0===t?{}:t).themeConfig,a=(n=void 0===n?{}:n).announcementBar,r=void 0===a?{}:a,i=r.content,l=r.backgroundColor,s=r.textColor,f=r.isCloseable,d=Object(S.a)(),h=d.isAnnouncementBarClosed,m=d.closeAnnouncementBar;return!i||f&&h?null:c.a.createElement("div",{className:N.a.announcementBar,style:{backgroundColor:l,color:s},role:"banner"},c.a.createElement("div",{className:Object(o.a)(N.a.announcementBarContent,(e={},e[N.a.announcementBarCloseable]=f,e)),dangerouslySetInnerHTML:{__html:i}}),f?c.a.createElement("button",{type:"button",className:N.a.announcementBarClose,onClick:m,"aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},L=n(411),P=n(414);n(56);function B(e){var t=e.children;return c.a.createElement(g,null,c.a.createElement(w,null,t))}t.a=function(e){var t=Object(u.a)().siteConfig,n=t.favicon,r=t.title,s=t.themeConfig,f=s.image,d=s.metadatas,h=t.url,m=t.titleDelimiter,v=e.children,b=e.title,p=e.noFooter,g=e.description,O=e.image,k=e.keywords,y=e.permalink,E=e.wrapperClassName,j=b?b+" "+m+" "+r:r,C=O||f,w=Object(l.a)(C,{absolute:!0}),S=Object(l.a)(n);return c.a.createElement(B,null,c.a.createElement(i.a,null,c.a.createElement("html",{lang:"en"}),j&&c.a.createElement("title",null,j),j&&c.a.createElement("meta",{property:"og:title",content:j}),n&&c.a.createElement("link",{rel:"shortcut icon",href:S}),g&&c.a.createElement("meta",{name:"description",content:g}),g&&c.a.createElement("meta",{property:"og:description",content:g}),k&&k.length&&c.a.createElement("meta",{name:"keywords",content:k.join(",")}),C&&c.a.createElement("meta",{property:"og:image",content:w}),C&&c.a.createElement("meta",{property:"twitter:image",content:w}),C&&c.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j}),y&&c.a.createElement("meta",{property:"og:url",content:h+y}),y&&c.a.createElement("link",{rel:"canonical",href:h+y}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),c.a.createElement(i.a,null,d.map((function(e,t){return c.a.createElement("meta",Object(a.a)({key:"metadata_"+t},e))}))),c.a.createElement(T,null),c.a.createElement(L.a,null),c.a.createElement("div",{className:Object(o.a)("main-wrapper",E)},v),!p&&c.a.createElement(P.a,null))}},412:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n.n(r),o=n(490),i=n.n(o),u=n(395),l=n(397),s=n(55),f=n.n(s),d=function(e){var t=e.icon,n=e.style;return c.a.createElement("span",{className:Object(l.a)(f.a.toggle,f.a.dark),style:n},t)},h=function(e){var t=e.icon,n=e.style;return c.a.createElement("span",{className:Object(l.a)(f.a.toggle,f.a.light),style:n},t)};t.a=function(e){var t=Object(u.a)(),n=t.siteConfig.themeConfig.colorMode.switchConfig,r=n.darkIcon,o=n.darkIconStyle,l=n.lightIcon,s=n.lightIconStyle,f=t.isClient;return c.a.createElement(i.a,Object(a.a)({disabled:!f,icons:{checked:c.a.createElement(d,{icon:r,style:o}),unchecked:c.a.createElement(h,{icon:l,style:s})}},e))}},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(6),r=n(0),c=n.n(r),o=n(469),i={default:function(){return o.a},docsVersion:function(){return n(495).default},docsVersionDropdown:function(){return n(499).default}};function u(e){var t=e.type,n=Object(a.a)(e,["type"]),r=function(e){void 0===e&&(e="default");var t=i[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return c.a.createElement(r,n)}},415:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n.n(r),o=n(22),i=n(395),u=n(400),l=n(419),s=n(399),f=n(420),d=n(475);function h(){return c.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},c.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var m=n(476);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(u){r=!0,c=u}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var g="Ctrl";function O(){return"undefined"==typeof navigator?g:/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)}var k=c.a.forwardRef((function(e,t){var n=b(Object(r.useState)((function(){return O()?"\u2318":g})),2),a=n[0],o=n[1];return Object(r.useEffect)((function(){O()&&o("\u2318")}),[]),c.a.createElement("button",v({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),c.a.createElement(m.a,null),c.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search"),c.a.createElement("span",{className:"DocSearch-Button-Key"},a===g?c.a.createElement(h,null):a),c.a.createElement("span",{className:"DocSearch-Button-Key"},"K"))})),y=null;function E(e){var t=e.hit,n=e.children;return c.a.createElement(s.a,{to:t.url},n)}function j(e){var t=e.state,n=e.onClose,a=Object(d.a)().generateSearchPageLink;return c.a.createElement(s.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function C(e){var t=Object(i.a)().siteMetadata,s=Object(l.b)().withBaseUrl,d=Object(u.useHistory)(),h=Object(r.useRef)(null),m=Object(r.useState)(!1),v=m[0],b=m[1],p=Object(r.useState)(null),g=p[0],O=p[1],C=Object(r.useCallback)((function(){return y?Promise.resolve():Promise.all([n.e(334).then(n.bind(null,908)),Promise.all([n.e(0),n.e(335)]).then(n.bind(null,907)),n.e(0).then(n.t.bind(null,391,7))]).then((function(e){var t=e[0].DocSearchModal;y=t}))}),[]),w=Object(r.useCallback)((function(){C().then((function(){b(!0)}))}),[C,b]),S=Object(r.useCallback)((function(){b(!1)}),[b]),_=Object(r.useCallback)((function(e){C().then((function(){b(!0),O(e.key)}))}),[C,b,O]),N=Object(r.useRef)({navigate:function(e){var t=e.suggestionUrl;d.push(t)}}).current,T=Object(r.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:s(""+t.pathname+t.hash)})}))})).current,L=Object(r.useMemo)((function(){return function(e){return c.a.createElement(j,Object(a.a)({},e,{onClose:S}))}}),[S]),P=Object(r.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",t.docusaurusVersion),e}),[t.docusaurusVersion]);return function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,r=e.onInput,o=e.searchButtonRef;c.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&r&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&r(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,r,o])}({isOpen:v,onOpen:w,onClose:S,onInput:_,searchButtonRef:h}),c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,null,c.a.createElement("link",{rel:"preconnect",href:"https://"+e.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),c.a.createElement(k,{onTouchStart:C,onFocus:C,onMouseOver:C,onClick:w,ref:h}),v&&Object(o.createPortal)(c.a.createElement(y,Object(a.a)({onClose:S,initialScrollY:window.scrollY,initialQuery:g,navigator:N,transformItems:T,hitComponent:E,resultsFooterComponent:L,transformSearchClient:P},e)),document.body))}t.a=function(){var e=Object(i.a)().siteConfig;return c.a.createElement(C,e.themeConfig.algolia)}},416:function(e,t,n){"use strict";var a=n(0),r=n(400);var c=function(e){var t=Object(a.useState)(e),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[n,r]},o=n(477);t.a=function(e){var t=Object(a.useState)(!0),n=t[0],i=t[1],u=Object(a.useState)(!1),l=u[0],s=u[1],f=Object(a.useState)(0),d=f[0],h=f[1],m=Object(a.useState)(0),v=m[0],b=m[1],p=Object(a.useCallback)((function(e){null!==e&&b(e.getBoundingClientRect().height)}),[]),g=Object(r.useLocation)(),O=c(g.hash),k=O[0],y=O[1];return Object(o.a)((function(t){var n=t.scrollY;if(e&&(0===n&&i(!0),!(n<v))){if(l)return s(!1),i(!1),void h(n);var a=document.documentElement.scrollHeight-v,r=window.innerHeight;d&&n>=d?i(!1):n+r<a&&i(!0),h(n)}}),[d,v]),Object(a.useEffect)((function(){e&&(i(!0),y(g.hash))}),[g]),Object(a.useEffect)((function(){e&&k&&s(!0)}),[k]),{navbarRef:p,isNavbarVisible:n}}},469:function(e,t,n){"use strict";var a,r=n(1),c=n(6),o=n(0),i=n.n(o),u=n(397),l=n(399),s=n(419);var f=function(){if(void 0!==a)return a;var e=!1,t={get passive(){e=!0}},n=function(){};return window.addEventListener("t",n,t),window.removeEventListener("t",n,t),a=e,e},d=o.useLayoutEffect,h=function(e){var t=Object(o.useRef)(e);return d((function(){t.current=e})),t},m="touchstart",v=["mousedown",m],b=function(e){if(e===m)return f()?{passive:!0}:void 0};var p=function(e,t){var n=h(t);Object(o.useEffect)((function(){if(t){var a=function(t){e.current&&n.current&&!e.current.contains(t.target)&&n.current(t)};return v.forEach((function(e){document.addEventListener(e,a,b(e))})),function(){v.forEach((function(e){document.removeEventListener(e,a,b(e))}))}}}),[!t])};function g(e){var t=e.activeBasePath,n=e.activeBaseRegex,a=e.to,o=e.href,u=e.label,f=e.activeClassName,d=void 0===f?"navbar__link--active":f,h=e.prependBaseUrlToHref,m=Object(c.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(s.a)(a),b=Object(s.a)(t),p=Object(s.a)(o,{forcePrependBaseUrl:!0});return i.a.createElement(l.a,Object(r.a)({},o?{target:"_blank",rel:"noopener noreferrer",href:h?p:o}:Object.assign({isNavLink:!0,activeClassName:d,to:v},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(b)}}:null),m),u)}function O(e){var t=e.items,n=e.position,a=e.className,l=Object(c.a)(e,["items","position","className"]),s=i.a.useRef(null),f=i.a.useRef(null),d=Object(o.useState)(!1),h=d[0],m=d[1];function v(e){if(e){var t,n,a=null==f||null===(t=f.current)||void 0===t||null===(n=t.firstChild)||void 0===n?void 0:n.firstChild;a&&a.focus()}m(e)}p(s,(function(){return v(!1)}));var b=function(e,t){return void 0===t&&(t=!1),Object(u.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?i.a.createElement("div",{ref:s,className:Object(u.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":h})},i.a.createElement(g,Object(r.a)({className:b(a)},l,{onClick:l.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){("Enter"===e.key&&!l.to||"Tab"===e.key)&&(e.preventDefault(),v(!0))}}),l.label),i.a.createElement("ul",{ref:f,className:"dropdown__menu"},t.map((function(e,n){var a=e.className,o=Object(c.a)(e,["className"]);return i.a.createElement("li",{key:n},i.a.createElement(g,Object(r.a)({onKeyDown:function(e){n===t.length-1&&"Tab"===e.key&&(e.preventDefault(),v(!1))},activeClassName:"dropdown__link--active",className:b(a,!0)},o)))})))):i.a.createElement(g,Object(r.a)({className:b(a)},l))}function k(e){var t=e.items,n=(e.position,e.className),a=Object(c.a)(e,["items","position","className"]),o=function(e,t){return void 0===t&&(t=!1),Object(u.a)("menu__link",{"menu__link--sublist":t},e)};return t?i.a.createElement("li",{className:"menu__list-item"},i.a.createElement(g,Object(r.a)({className:o(n,!0)},a),a.label),i.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var n=e.className,u=Object(c.a)(e,["className"]);return i.a.createElement("li",{className:"menu__list-item",key:t},i.a.createElement(g,Object(r.a)({activeClassName:"menu__link--active",className:o(n)},u,{onClick:a.onClick})))})))):i.a.createElement("li",{className:"menu__list-item"},i.a.createElement(g,Object(r.a)({className:o(n)},a)))}t.a=function(e){var t=e.mobile,n=void 0!==t&&t,a=Object(c.a)(e,["mobile"]),r=n?k:O;return i.a.createElement(r,a)}},472:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},473:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},474:function(e,t,n){"use strict";var a=n(0),r=n(473);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},475:function(e,t,n){"use strict";var a=n(400),r=n(7),c=n(395);t.a=function(){var e=Object(a.useHistory)(),t=Object(a.useLocation)(),n=Object(c.a)().siteConfig,o=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}},476:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},477:function(e,t,n){"use strict";var a=n(0),r=n(7),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useState)(c()),r=n[0],o=n[1],i=function(){var t=c();o(t),e&&e(t)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i,{passive:!0})}}),t),r}},490:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),o=d(c),i=d(n(491)),u=d(n(8)),l=d(n(492)),s=d(n(493)),f=n(494);function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,f.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,f.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,f.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),c=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(l.default,null),unchecked:o.default.createElement(s.default,null)}},h.propTypes={checked:u.default.bool,disabled:u.default.bool,defaultChecked:u.default.bool,onChange:u.default.func,onFocus:u.default.func,onBlur:u.default.func,className:u.default.string,name:u.default.string,value:u.default.string,id:u.default.string,"aria-labelledby":u.default.string,"aria-label":u.default.string,icons:u.default.oneOfType([u.default.bool,u.default.shape({checked:u.default.node,unchecked:u.default.node})])}},491:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},492:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},493:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},494:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},495:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(1),r=n(6),c=n(0),o=n.n(c),i=n(469),u=n(436);function l(e){var t=e.label,n=e.to,c=e.docsPluginId,l=Object(r.a)(e,["label","to","docsPluginId"]),s=Object(u.useActiveVersion)(c),f=Object(u.useLatestVersion)(c),d=null!=s?s:f,h=null!=t?t:d.label,m=null!=n?n:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(d).path;return o.a.createElement(i.a,Object(a.a)({},l,{label:h,to:m}))}},499:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(1),r=n(6),c=n(0),o=n.n(c),i=n(469),u=n(436),l=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function s(e){var t,n=e.mobile,c=e.docsPluginId,s=Object(r.a)(e,["mobile","docsPluginId"]),f=Object(u.useActiveDocContext)(c),d=Object(u.useVersions)(c),h=Object(u.useLatestVersion)(c);var m=null!==(t=f.activeVersion)&&void 0!==t?t:h,v=n?"Versions":m.label,b=n?void 0:l(m).path;return o.a.createElement(i.a,Object(a.a)({},s,{mobile:n,label:v,to:b,items:function(){if(!(d.length<=1))return d.map((function(e){var t=(null==f?void 0:f.alternateDocVersions[e.name])||l(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==f?void 0:f.activeVersion)}}}))}()}))}}}]);