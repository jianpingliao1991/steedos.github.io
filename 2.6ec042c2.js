/*! For license information please see 2.6ec042c2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{468:function(e,t,n){"use strict";var a=n(0),r=n(536);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},469:function(e,t,n){"use strict";var a=n(0);t.a=function(e=!0){Object(a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},470:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0);const r={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}const[n,c]=Object(a.useState)(t);return Object(a.useEffect)((()=>{if(e)return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n);function n(){c(t())}}),[]),n}},471:function(e,t,n){"use strict";var a=n(458),r=n(468),c=n(484),o=n(497);t.a=()=>{const{siteConfig:{themeConfig:{navbar:{logo:e={}}={}}={}}={}}=Object(a.a)(),{isDarkTheme:t}=Object(r.a)(),n=Object(c.a)(e.href||"/");let s={};e.target?s={target:e.target}:Object(o.a)(n)||(s={rel:"noopener noreferrer",target:"_blank"});const l=e.srcDark&&t?e.srcDark:e.src;return{logoLink:n,logoLinkProps:s,logoImageUrl:Object(c.a)(l),logoAlt:e.alt}}},472:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n.n(r),o=n(462),s=n(488),l=n(458),i=n(484),u=n(7);const d="light",f="dark",h=e=>e===f?f:d,m=()=>u.a.canUseDOM?h(document.documentElement.getAttribute("data-theme")):d,b=e=>{try{localStorage.setItem("theme",h(e))}catch(t){console.error(t)}};var v=()=>{const{siteConfig:{themeConfig:{colorMode:{disableSwitch:e=!1}={}}={}}={}}=Object(l.a)(),[t,n]=Object(r.useState)(m),a=Object(r.useCallback)((()=>{n(d),b(d)}),[]),c=Object(r.useCallback)((()=>{n(f),b(f)}),[]);return Object(r.useEffect)((()=>{document.documentElement.setAttribute("data-theme",h(t))}),[t]),Object(r.useEffect)((()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&n(h(e))}catch(t){console.error(t)}}),[n]),Object(r.useEffect)((()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{n(e?f:d)}))}),[]),{isDarkTheme:t===f,setLightTheme:a,setDarkTheme:c}},p=n(536);var g=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}=v();return c.a.createElement(p.a.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}},e.children)};const k="docusaurus.tab.";var y=()=>{const[e,t]=Object(r.useState)({}),n=Object(r.useCallback)(((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(r.useEffect)((()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const n=localStorage.key(t);if(n.startsWith(k)){e[n.substring(k.length)]=localStorage.getItem(n)}}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}};const E="docusaurus.announcement.dismiss",O="docusaurus.announcement.id";var j=()=>{const{announcementBar:e}=Object(l.a)().siteConfig.themeConfig,[t,n]=Object(r.useState)(!0),a=Object(r.useCallback)((()=>{localStorage.setItem(E,"true"),n(!0)}),[]);return Object(r.useEffect)((()=>{if(!e)return;const{id:t}=e;let a=localStorage.getItem(O);"annoucement-bar"===a&&(a="announcement-bar");const r=t!==a;localStorage.setItem(O,t),r&&localStorage.setItem(E,"false"),(r||"false"===localStorage.getItem(E))&&n(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:a}},C=n(537);var w=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=y(),{isAnnouncementBarClosed:a,closeAnnouncementBar:r}=j();return c.a.createElement(C.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n,isAnnouncementBarClosed:a,closeAnnouncementBar:r}},e.children)},S=n(538),_=n(57),N=n.n(_);var T=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}={}}={}}=Object(l.a)(),{content:t,backgroundColor:n,textColor:a,isCloseable:r}=e,{isAnnouncementBarClosed:s,closeAnnouncementBar:i}=Object(S.a)();return!t||r&&s?null:c.a.createElement("div",{className:N.a.announcementBar,style:{backgroundColor:n,color:a},role:"banner"},c.a.createElement("div",{className:Object(o.a)(N.a.announcementBarContent,{[N.a.announcementBarCloseable]:r}),dangerouslySetInnerHTML:{__html:t}}),r?c.a.createElement("button",{type:"button",className:N.a.announcementBarClose,onClick:i,"aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},L=n(473),D=n(476);n(59);function P({children:e}){return c.a.createElement(g,null,c.a.createElement(w,null,e))}t.a=function(e){const{siteConfig:t}=Object(l.a)(),{favicon:n,title:r,themeConfig:{image:u,metadatas:d},url:f,titleDelimiter:h}=t,{children:m,title:b,noFooter:v,description:p,image:g,keywords:k,permalink:y,wrapperClassName:E}=e,O=b?`${b} ${h} ${r}`:r,j=g||u,C=Object(i.a)(j,{absolute:!0}),w=Object(i.a)(n);return c.a.createElement(P,null,c.a.createElement(s.a,null,c.a.createElement("html",{lang:"en"}),O&&c.a.createElement("title",null,O),O&&c.a.createElement("meta",{property:"og:title",content:O}),n&&c.a.createElement("link",{rel:"shortcut icon",href:w}),p&&c.a.createElement("meta",{name:"description",content:p}),p&&c.a.createElement("meta",{property:"og:description",content:p}),k&&k.length&&c.a.createElement("meta",{name:"keywords",content:k.join(",")}),j&&c.a.createElement("meta",{property:"og:image",content:C}),j&&c.a.createElement("meta",{property:"twitter:image",content:C}),j&&c.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+O}),y&&c.a.createElement("meta",{property:"og:url",content:f+y}),y&&c.a.createElement("link",{rel:"canonical",href:f+y}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),c.a.createElement(s.a,null,d.map(((e,t)=>c.a.createElement("meta",Object(a.a)({key:"metadata_"+t},e))))),c.a.createElement(T,null),c.a.createElement(L.a,null),c.a.createElement("div",{className:Object(o.a)("main-wrapper",E)},m),!v&&c.a.createElement(D.a,null))}},474:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n.n(r),o=n(555),s=n.n(o),l=n(458),i=n(462),u=n(58),d=n.n(u);const f=({icon:e,style:t})=>c.a.createElement("span",{className:Object(i.a)(d.a.toggle,d.a.dark),style:t},e),h=({icon:e,style:t})=>c.a.createElement("span",{className:Object(i.a)(d.a.toggle,d.a.light),style:t},e);t.a=function(e){const{siteConfig:{themeConfig:{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:o}}}},isClient:i}=Object(l.a)();return c.a.createElement(s.a,Object(a.a)({disabled:!i,icons:{checked:c.a.createElement(f,{icon:t,style:n}),unchecked:c.a.createElement(h,{icon:r,style:o})}},e))}},475:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n.n(a),c=n(533);const o={default:()=>c.a,docsVersion:()=>n(560).default,docsVersionDropdown:()=>n(564).default};function s({type:e,...t}){const n=((e="default")=>{const t=o[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()})(e);return r.a.createElement(n,t)}},477:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n.n(r),o=n(22),s=n(458),l=n(464),i=n(484),u=n(463),d=n(488),f=n(539);function h(){return c.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},c.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var m=n(540);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(l){r=!0,c=l}finally{try{a||null==s.return||s.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var g="Ctrl";function k(){return"undefined"==typeof navigator?g:/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)}var y=c.a.forwardRef((function(e,t){var n=v(Object(r.useState)((function(){return k()?"\u2318":g})),2),a=n[0],o=n[1];return Object(r.useEffect)((function(){k()&&o("\u2318")}),[]),c.a.createElement("button",b({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),c.a.createElement(m.a,null),c.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search"),c.a.createElement("span",{className:"DocSearch-Button-Key"},a===g?c.a.createElement(h,null):a),c.a.createElement("span",{className:"DocSearch-Button-Key"},"K"))}));let E=null;function O({hit:e,children:t}){return c.a.createElement(u.a,{to:e.url},t)}function j({state:e,onClose:t}){const{generateSearchPageLink:n}=Object(f.a)();return c.a.createElement(u.a,{to:n(e.query),onClick:t},"See all ",e.context.nbHits," results")}function C(e){const{siteMetadata:t}=Object(s.a)(),{withBaseUrl:u}=Object(i.b)(),f=Object(l.useHistory)(),h=Object(r.useRef)(null),[m,b]=Object(r.useState)(!1),[v,p]=Object(r.useState)(null),g=Object(r.useCallback)((()=>E?Promise.resolve():Promise.all([n.e(397).then(n.bind(null,1070)),Promise.all([n.e(0),n.e(398)]).then(n.bind(null,1069)),n.e(0).then(n.t.bind(null,453,7))]).then((([{DocSearchModal:e}])=>{E=e}))),[]),k=Object(r.useCallback)((()=>{g().then((()=>{b(!0)}))}),[g,b]),C=Object(r.useCallback)((()=>{b(!1)}),[b]),w=Object(r.useCallback)((e=>{g().then((()=>{b(!0),p(e.key)}))}),[g,b,p]),S=Object(r.useRef)({navigate({suggestionUrl:e}){f.push(e)}}).current,_=Object(r.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:u(`${t.pathname}${t.hash}`)}})))).current,N=Object(r.useMemo)((()=>e=>c.a.createElement(j,Object(a.a)({},e,{onClose:C}))),[C]),T=Object(r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",t.docusaurusVersion),e)),[t.docusaurusVersion]);return function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,r=e.onInput,o=e.searchButtonRef;c.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&r&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&r(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,r,o])}({isOpen:m,onOpen:k,onClose:C,onInput:w,searchButtonRef:h}),c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,null,c.a.createElement("link",{rel:"preconnect",href:`https://${e.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),c.a.createElement(y,{onTouchStart:g,onFocus:g,onMouseOver:g,onClick:k,ref:h}),m&&Object(o.createPortal)(c.a.createElement(E,Object(a.a)({onClose:C,initialScrollY:window.scrollY,initialQuery:v,navigator:S,transformItems:_,hitComponent:O,resultsFooterComponent:N,transformSearchClient:T},e)),document.body))}t.a=function(){const{siteConfig:e}=Object(s.a)();return c.a.createElement(C,e.themeConfig.algolia)}},478:function(e,t,n){"use strict";var a=n(0),r=n(464);var c=function(e){const[t,n]=Object(a.useState)(e);return Object(a.useEffect)((()=>{const e=()=>n(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)}),[]),[t,n]},o=n(541);t.a=e=>{const[t,n]=Object(a.useState)(!0),[s,l]=Object(a.useState)(!1),[i,u]=Object(a.useState)(0),[d,f]=Object(a.useState)(0),h=Object(a.useCallback)((e=>{null!==e&&f(e.getBoundingClientRect().height)}),[]),m=Object(r.useLocation)(),[b,v]=c(m.hash);return Object(o.a)((({scrollY:t})=>{if(!e)return;if(0===t&&n(!0),t<d)return;if(s)return l(!1),n(!1),void u(t);const a=document.documentElement.scrollHeight-d,r=window.innerHeight;i&&t>=i?n(!1):t+r<a&&n(!0),u(t)}),[i,d]),Object(a.useEffect)((()=>{e&&(n(!0),v(m.hash))}),[m]),Object(a.useEffect)((()=>{e&&b&&l(!0)}),[b]),{navbarRef:h,isNavbarVisible:t}}},533:function(e,t,n){"use strict";var a,r=n(1),c=n(0),o=n.n(c),s=n(462),l=n(463),i=n(484);var u=function(){if(void 0!==a)return a;var e=!1,t={get passive(){e=!0}},n=function(){};return window.addEventListener("t",n,t),window.removeEventListener("t",n,t),a=e,e},d=c.useLayoutEffect,f=function(e){var t=Object(c.useRef)(e);return d((function(){t.current=e})),t},h="touchstart",m=["mousedown",h],b=function(e){if(e===h)return u()?{passive:!0}:void 0};var v=function(e,t){var n=f(t);Object(c.useEffect)((function(){if(t){var a=function(t){e.current&&n.current&&!e.current.contains(t.target)&&n.current(t)};return m.forEach((function(e){document.addEventListener(e,a,b(e))})),function(){m.forEach((function(e){document.removeEventListener(e,a,b(e))}))}}}),[!t])};function p({activeBasePath:e,activeBaseRegex:t,to:n,href:a,label:c,activeClassName:s="navbar__link--active",prependBaseUrlToHref:u,...d}){const f=Object(i.a)(n),h=Object(i.a)(e),m=Object(i.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(l.a,Object(r.a)({},a?{target:"_blank",rel:"noopener noreferrer",href:u?m:a}:{isNavLink:!0,activeClassName:s,to:f,...e||t?{isActive:(e,n)=>t?new RegExp(t).test(n.pathname):n.pathname.startsWith(h)}:null},d),c)}function g({items:e,position:t,className:n,...a}){const l=o.a.useRef(null),i=o.a.useRef(null),[u,d]=Object(c.useState)(!1);function f(e){if(e){var t,n;const e=null==i||null===(t=i.current)||void 0===t||null===(n=t.firstChild)||void 0===n?void 0:n.firstChild;e&&e.focus()}d(e)}v(l,(()=>f(!1)));const h=(e,t=!1)=>Object(s.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?o.a.createElement("div",{ref:l,className:Object(s.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t,"dropdown--show":u})},o.a.createElement(p,Object(r.a)({className:h(n)},a,{onClick:a.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{("Enter"===e.key&&!a.to||"Tab"===e.key)&&(e.preventDefault(),f(!0))}}),a.label),o.a.createElement("ul",{ref:i,className:"dropdown__menu"},e.map((({className:t,...n},a)=>o.a.createElement("li",{key:a},o.a.createElement(p,Object(r.a)({onKeyDown:t=>{a===e.length-1&&"Tab"===t.key&&(t.preventDefault(),f(!1))},activeClassName:"dropdown__link--active",className:h(t,!0)},n))))))):o.a.createElement(p,Object(r.a)({className:h(n)},a))}function k({items:e,position:t,className:n,...a}){const c=(e,t=!1)=>Object(s.a)("menu__link",{"menu__link--sublist":t},e);return e?o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(p,Object(r.a)({className:c(n,!0)},a),a.label),o.a.createElement("ul",{className:"menu__list"},e.map((({className:e,...t},n)=>o.a.createElement("li",{className:"menu__list-item",key:n},o.a.createElement(p,Object(r.a)({activeClassName:"menu__link--active",className:c(e)},t,{onClick:a.onClick}))))))):o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(p,Object(r.a)({className:c(n)},a)))}t.a=function({mobile:e=!1,...t}){const n=e?k:g;return o.a.createElement(n,t)}},536:function(e,t,n){"use strict";var a=n(0);const r=n.n(a).a.createContext(void 0);t.a=r},537:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},538:function(e,t,n){"use strict";var a=n(0),r=n(537);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},539:function(e,t,n){"use strict";var a=n(464),r=n(7),c=n(458);t.a=function(){const e=Object(a.useHistory)(),t=Object(a.useLocation)(),{siteConfig:{baseUrl:n}={}}=Object(c.a)();return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}}},540:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},541:function(e,t,n){"use strict";var a=n(0),r=n(7);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[n,r]=Object(a.useState)(c()),o=()=>{const t=c();r(t),e&&e(t)};return Object(a.useEffect)((()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o,{passive:!0}))),t),n}},555:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),o=f(c),s=f(n(556)),l=f(n(8)),i=f(n(557)),u=f(n(558)),d=n(559);function f(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),c=(0,s.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(i.default,null),unchecked:o.default.createElement(u.default,null)}},h.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},556:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},557:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},558:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},559:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},560:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(1),r=n(0),c=n.n(r),o=n(533),s=n(498);function l({label:e,to:t,docsPluginId:n,...r}){const l=Object(s.useActiveVersion)(n),i=Object(s.useLatestVersion)(n),u=null!=l?l:i,d=null!=e?e:u.label,f=null!=t?t:(e=>e.docs.find((t=>t.id===e.mainDocId)))(u).path;return c.a.createElement(o.a,Object(a.a)({},r,{label:d,to:f}))}},564:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(1),r=n(0),c=n.n(r),o=n(533),s=n(498);const l=e=>e.docs.find((t=>t.id===e.mainDocId));function i({mobile:e,docsPluginId:t,...n}){var r;const i=Object(s.useActiveDocContext)(t),u=Object(s.useVersions)(t),d=Object(s.useLatestVersion)(t);const f=null!==(r=i.activeVersion)&&void 0!==r?r:d,h=e?"Versions":f.label,m=e?void 0:l(f).path;return c.a.createElement(o.a,Object(a.a)({},n,{mobile:e,label:h,to:m,items:function(){if(!(u.length<=1))return u.map((e=>{const t=(null==i?void 0:i.alternateDocVersions[e.name])||l(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==i?void 0:i.activeVersion)}}))}()}))}}}]);