(self.webpackChunk=self.webpackChunk||[]).push([[1843],{36742:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(79973),a=n(67294),u=n.n(a),i=n(73727),c=n(52263),s=n(13919),o=n(10412),l=(0,a.createContext)({collectLink:function(){}}),d=n(44996),f=n(18780),v=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var m=function(e){var t,n,m=e.isNavLink,h=e.to,E=e.href,b=e.activeClassName,p=e.isActive,_=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,k=void 0===g||g,C=(0,r.Z)(e,v),w=(0,c.Z)().siteConfig.trailingSlash,y=(0,d.C)().withBaseUrl,N=(0,a.useContext)(l),Z=h||E,O=(0,s.Z)(Z),L=null==Z?void 0:Z.replace("pathname://",""),U=void 0!==L?(n=L,k&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0;U&&O&&(U=(0,f.applyTrailingSlash)(U,w));var j,B=(0,a.useRef)(!1),M=m?i.OL:i.rU,S=o.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!S&&O&&null!=U&&window.docusaurus.prefetch(U),function(){S&&j&&j.disconnect()}}),[U,S,O]);var W=null!==(t=null==U?void 0:U.startsWith("#"))&&void 0!==t&&t,P=!U||!O||W;return U&&O&&!W&&!_&&N.collectLink(U),P?u().createElement("a",Object.assign({href:U},Z&&!O&&{target:"_blank",rel:"noopener noreferrer"},C)):u().createElement(M,Object.assign({},C,{onMouseEnter:function(){B.current||null==U||(window.docusaurus.preload(U),B.current=!0)},innerRef:function(e){var t,n;S&&e&&O&&(t=e,n=function(){null!=U&&window.docusaurus.prefetch(U)},(j=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),n())}))}))).observe(t))},to:U||""},m&&{isActive:p,activeClassName:b}))}},13919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return u},Z:function(){return i}});var r=n(52263),a=n(13919);function u(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,u=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var u=void 0===r?{}:r,i=u.forcePrependBaseUrl,c=void 0!==i&&i,s=u.absolute,o=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+l:l}(u,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,u().withBaseUrl)(e,t)}},59477:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67294),a=n.n(r),u=n(99105),i=n(36742),c="container_3Gti",s="nav_2hIU",o="navlink_XGn1",l=function(e){var t=e.to,n=e.children;return a().createElement(i.Z,{className:o,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},n)};var d=function(e){var t=e.children;return a().createElement(a().Fragment,null,a().createElement(u.Z,null,a().createElement("html",{lang:"en"}),a().createElement("title",null,"Docusaurus debug panel")),a().createElement("div",null,a().createElement("nav",{className:s},a().createElement(l,{to:"/__docusaurus/debug"},"Config"),a().createElement(l,{to:"/__docusaurus/debug/metadata"},"Metadata"),a().createElement(l,{to:"/__docusaurus/debug/registry"},"Registry"),a().createElement(l,{to:"/__docusaurus/debug/routes"},"Routes"),a().createElement(l,{to:"/__docusaurus/debug/content"},"Content"),a().createElement(l,{to:"/__docusaurus/debug/globalData"},"Global data")),a().createElement("main",{className:c},t)))}},65473:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(67294),a=n.n(r),u=n(59477),i=n(52263),c="sectionTitle_1LKV",s="list_2cCX",o="listItem_2G0u",l="version_ZLFW",d="name_1F60";var f=function(){var e=(0,i.Z)().siteMetadata;return a().createElement(u.Z,null,a().createElement("h2",null,"Site Metadata"),a().createElement("div",null,"Docusaurus Version: ",a().createElement("code",null,e.docusaurusVersion)),a().createElement("div",null,"Site Version:"," ",a().createElement("code",null,e.siteVersion||"No version specified")),a().createElement("h3",{className:c},"Plugins and themes"),a().createElement("ul",{className:s},Object.entries(e.pluginVersions).map((function(e){var t=e[0],n=e[1];return a().createElement("li",{key:t,className:o},n.version&&a().createElement("div",{className:l},a().createElement("code",null,n.version)),a().createElement("div",{className:d},t),a().createElement("div",null,"Type: ",n.type))}))))}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;var n,r=e.split(/[#?]/)[0],a="/"===r?"/":t?(n=r).endsWith("/")?n:n+"/":function(e){return e.endsWith("/")?e.slice(0,-1):e}(r);return e.replace(r,a)}},18780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var u=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(u).default}})},29964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);