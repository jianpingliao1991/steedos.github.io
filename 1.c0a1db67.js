(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{364:function(t,e,n){"use strict";var r=n(0),o=n(25);e.a=function(){const t=Object(r.useContext)(o.a);if(null===t)throw new Error("Docusaurus context not provided");return t}},365:function(t,e,n){"use strict";function r(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}e.a=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(o&&(o+=" "),o+=e);return o}},366:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(13),a=n(390),c=n(7);const u=Object(r.createContext)({collectLink:()=>{}});var s=n(384),f=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};e.a=function(t){var e,{isNavLink:n,to:l,href:d,activeClassName:p,"data-noBrokenLinkCheck":h}=t,y=f(t,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:b}=Object(s.b)(),v=Object(r.useContext)(u),g=l||d,m=void 0!==g?(t=>t.startsWith("/"))(T=g)?b(T):g:void 0;var T;const w=Object(a.a)(m),O=Object(r.useRef)(!1),A=n?i.e:i.c,C=c.a.canUseIntersectionObserver;let E;Object(r.useEffect)(()=>(!C&&w&&window.docusaurus.prefetch(m),()=>{C&&E&&E.disconnect()}),[m,C,w]);const j=null!==(e=null==m?void 0:m.startsWith("#"))&&void 0!==e&&e,S=!m||!w||j;return m&&w&&!j&&!h&&v.collectLink(m),S?o.a.createElement("a",Object.assign({href:m},!w&&{target:"_blank",rel:"noopener noreferrer"},y)):o.a.createElement(A,Object.assign({},y,{onMouseEnter:()=>{O.current||(window.docusaurus.preload(m),O.current=!0)},innerRef:t=>{var e,n;C&&t&&w&&(e=t,n=()=>{window.docusaurus.prefetch(m)},E=new window.IntersectionObserver(t=>{t.forEach(t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(E.unobserve(e),E.disconnect(),n())})}),E.observe(e))},to:m},n&&{activeClassName:p}))}},369:function(t,e,n){"use strict";n.r(e);var r=n(13);n.d(e,"BrowserRouter",(function(){return r.a})),n.d(e,"HashRouter",(function(){return r.b})),n.d(e,"Link",(function(){return r.c})),n.d(e,"NavLink",(function(){return r.e})),n.d(e,"MemoryRouter",(function(){return r.d})),n.d(e,"Prompt",(function(){return r.f})),n.d(e,"Redirect",(function(){return r.g})),n.d(e,"Route",(function(){return r.h})),n.d(e,"Router",(function(){return r.i})),n.d(e,"StaticRouter",(function(){return r.j})),n.d(e,"Switch",(function(){return r.k})),n.d(e,"__RouterContext",(function(){return r.l})),n.d(e,"generatePath",(function(){return r.m})),n.d(e,"matchPath",(function(){return r.n})),n.d(e,"useHistory",(function(){return r.o})),n.d(e,"useLocation",(function(){return r.p})),n.d(e,"useParams",(function(){return r.q})),n.d(e,"useRouteMatch",(function(){return r.r})),n.d(e,"withRouter",(function(){return r.s}))},384:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var r=n(364),o=n(390);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return e+n;const a=!n.startsWith(e)?e+n.replace(/^\//,""):n;return i?t+a:a}(e,t,n,r)}}function a(t,e={}){const{withBaseUrl:n}=i();return n(t,e)}},389:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(413);e.a=function(t){return o.a.createElement(i.Helmet,Object.assign({},t))}},390:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!r(t)}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}))},393:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useDocVersionSuggestions=e.useActiveDocContext=e.useActiveVersion=e.useLatestVersion=e.useVersions=e.useActivePlugin=void 0;const r=n(369),o=n(422),i=n(423),a=t=>o.usePluginData("docusaurus-plugin-content-docs",t);e.useActivePlugin=()=>{const t=o.useAllPluginInstancesData("docusaurus-plugin-content-docs"),{pathname:e}=r.useLocation();return i.getActivePlugin(t,e)},e.useVersions=t=>a(t).versions,e.useLatestVersion=t=>{const e=a(t);return i.getLatestVersion(e)},e.useActiveVersion=t=>{const e=a(t),{pathname:n}=r.useLocation();return i.getActiveVersion(e,n)},e.useActiveDocContext=t=>{const e=a(t),{pathname:n}=r.useLocation();return i.getActiveDocContext(e,n)},e.useDocVersionSuggestions=t=>{const e=a(t),{pathname:n}=r.useLocation();return i.getDocVersionSuggestions(e,n)}},413:function(t,e,n){"use strict";(function(t){function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}Object.defineProperty(e,"__esModule",{value:!0});var o,i,a,c,u=r(n(8)),s=r(n(414)),f=r(n(416)),l=r(n(0)),d=r(n(21)),p="bodyAttributes",h="htmlAttributes",y="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(b).map((function(t){return b[t]})),"charset"),g="cssText",m="href",T="http-equiv",w="innerHTML",O="itemprop",A="name",C="property",E="rel",j="src",S={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",L="defer",k="encodeSpecialCharacters",x="onChangeClientState",D="titleTemplate",I=Object.keys(S).reduce((function(t,e){return t[S[e]]=e,t}),{}),R=[b.NOSCRIPT,b.SCRIPT,b.STYLE],N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},V=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},H=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},B=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},U=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},q=function(t){var e=$(t,b.TITLE),n=$(t,D);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=$(t,P);return e||r||void 0},Y=function(t){return $(t,x)||function(){}},F=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return _({},t,e)}),{})},W=function(t,e){return e.filter((function(t){return void 0!==t[b.BASE]})).map((function(t){return t[b.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},K=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&X("Helmet: "+t+' should be of type "Array". Instead found type "'+N(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===e.indexOf(u)||n===E&&"canonical"===t[n].toLowerCase()||u===E&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==w&&c!==g&&c!==O||(n=c)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=d({},r[c],o[c]);r[c]=u}return t}),[]).reverse()},$=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},z=(o=Date.now(),function(t){var e=Date.now();e-o>16?(o=e,t(e)):setTimeout((function(){z(t)}),0)}),J=function(t){return clearTimeout(t)},G="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||z:t.requestAnimationFrame||z,Q="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||J:t.cancelAnimationFrame||J,X=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},Z=null,tt=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,f=t.styleTags,l=t.title,d=t.titleAttributes;rt(b.BODY,r),rt(b.HTML,o),nt(l,d);var p={baseTag:ot(b.BASE,n),linkTags:ot(b.LINK,i),metaTags:ot(b.META,a),noscriptTags:ot(b.NOSCRIPT,c),scriptTags:ot(b.SCRIPT,s),styleTags:ot(b.STYLE,f)},h={},y={};Object.keys(p).forEach((function(t){var e=p[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(y[t]=p[t].oldTags)})),e&&e(),u(t,h,y)},et=function(t){return Array.isArray(t)?t.join(""):t},nt=function(t,e){void 0!==t&&document.title!==t&&(document.title=et(t)),rt(b.TITLE,e)},rt=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],s=e[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},ot=function(t,e){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(t+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===w)n.innerHTML=e.innerHTML;else if(r===g)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},it=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},at=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[S[n]||n]=t[n],e}),e)},ct=function(t,e,n){switch(t){case b.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})["data-react-helmet"]=!0,o=at(n,r),[l.createElement(b.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=it(n),i=et(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+U(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+U(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case p:case h:return{toComponent:function(){return at(e)},toString:function(){return it(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(e).forEach((function(t){var n=S[t]||t;if(n===w||n===g){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),l.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===w||t===g)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+U(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===R.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},ut=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,f=t.title,l=void 0===f?"":f,d=t.titleAttributes;return{base:ct(b.BASE,e,r),bodyAttributes:ct(p,n,r),htmlAttributes:ct(h,o,r),link:ct(b.LINK,i,r),meta:ct(b.META,a,r),noscript:ct(b.NOSCRIPT,c,r),script:ct(b.SCRIPT,u,r),style:ct(b.STYLE,s,r),title:ct(b.TITLE,{title:l,titleAttributes:d},r)}},st=s((function(t){return{baseTag:W([m],t),bodyAttributes:F(p,t),defer:$(t,L),encode:$(t,k),htmlAttributes:F(h,t),linkTags:K(b.LINK,[E,m],t),metaTags:K(b.META,[A,v,T,C,O],t),noscriptTags:K(b.NOSCRIPT,[w],t),onChangeClientState:Y(t),scriptTags:K(b.SCRIPT,[j,w],t),styleTags:K(b.STYLE,[g],t),title:q(t),titleAttributes:F(y,t)}}),(function(t){Z&&Q(Z),t.defer?Z=G((function(){tt(t,(function(){Z=null}))})):(tt(t),Z=null)}),ut)((function(){return null})),ft=(i=st,c=a=function(t){function e(){return M(this,e),B(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!f(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:e};case b.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return _({},r,((e={})[n.type]=[].concat(r[n.type]||[],[_({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case b.TITLE:return _({},o,((e={})[r.type]=a,e.titleAttributes=_({},i),e));case b.BODY:return _({},o,{bodyAttributes:_({},i)});case b.HTML:return _({},o,{htmlAttributes:_({},i)})}return _({},o,((n={})[r.type]=_({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=_({},e);return Object.keys(t).forEach((function(e){var r;n=_({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return l.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[I[n]||n]=t[n],e}),e)}(H(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=H(t,["children"]),r=_({},n);return e&&(r=this.mapChildrenToProps(e,r)),l.createElement(i,r)},V(e,null,[{key:"canUseDOM",set:function(t){i.canUseDOM=t}}]),e}(l.Component),a.propTypes={base:u.object,bodyAttributes:u.object,children:u.oneOfType([u.arrayOf(u.node),u.node]),defaultTitle:u.string,defer:u.bool,encodeSpecialCharacters:u.bool,htmlAttributes:u.object,link:u.arrayOf(u.object),meta:u.arrayOf(u.object),noscript:u.arrayOf(u.object),onChangeClientState:u.func,script:u.arrayOf(u.object),style:u.arrayOf(u.object),title:u.string,titleAttributes:u.object,titleTemplate:u.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var t=i.rewind();return t||(t=ut({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},c);ft.renderStatic=ft.rewind,e.Helmet=ft}).call(this,n(30))},414:function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var o=n(0),i=r(o),a=r(n(415));function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,f=[];function l(){s=t(f.map((function(t){return t.props}))),d.canUseDOM?e(s):n&&(s=n(s))}var d=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,f=[],t};var c=o.prototype;return c.shouldComponentUpdate=function(t){return!a(t,this.props)},c.componentWillMount=function(){f.push(this),l()},c.componentDidUpdate=function(){l()},c.componentWillUnmount=function(){var t=f.indexOf(this);f.splice(t,1),l()},c.render=function(){return i.createElement(r,this.props)},o}(o.Component);return c(d,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),c(d,"canUseDOM",u),d}}},415:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(e),u=0;u<i.length;u++){var s=i[u];if(!c(s))return!1;var f=t[s],l=e[s];if(!1===(o=n?n.call(r,f,l,s):void 0)||void 0===o&&f!==l)return!1}return!0}},416:function(t,e,n){"use strict";var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var c,u,s,f=r(e),l=r(n);if(f&&l){if((u=e.length)!=n.length)return!1;for(c=u;0!=c--;)if(!t(e[c],n[c]))return!1;return!0}if(f!=l)return!1;var d=e instanceof Date,p=n instanceof Date;if(d!=p)return!1;if(d&&p)return e.getTime()==n.getTime();var h=e instanceof RegExp,y=n instanceof RegExp;if(h!=y)return!1;if(h&&y)return e.toString()==n.toString();var b=o(e);if((u=b.length)!==o(n).length)return!1;for(c=u;0!=c--;)if(!i.call(n,b[c]))return!1;if(a&&e instanceof Element&&n instanceof Element)return e===n;for(c=u;0!=c--;)if(!("_owner"===(s=b[c])&&e.$$typeof||t(e[s],n[s])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},422:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o})),n.d(e,"useAllPluginInstancesData",(function(){return i})),n.d(e,"usePluginData",(function(){return a}));var r=n(364);function o(){const{globalData:t}=Object(r.a)();if(!t)throw new Error("Docusaurus global data not found");return t}function i(t){const e=o()[t];if(!e)throw new Error("Docusaurus plugin global data not found for pluginName="+t);return e}function a(t,e="default"){const n=i(t)[e];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${t} and pluginId=${e}`);return n}},423:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDocVersionSuggestions=e.getActiveDocContext=e.getActiveVersion=e.getLatestVersion=e.getActivePlugin=void 0;const r=n(369);e.getActivePlugin=(t,e)=>{const n=Object.entries(t).find(([t,n])=>!!r.matchPath(e,{path:n.path,exact:!1,strict:!1}));return n?{pluginId:n[0],pluginData:n[1]}:void 0},e.getLatestVersion=t=>t.versions.find(e=>e.name===t.latestVersionName),e.getActiveVersion=(t,n)=>{const o=e.getLatestVersion(t);return[...t.versions.filter(t=>t!==o),o].find(t=>!!r.matchPath(n,{path:t.path,exact:!1,strict:!1}))},e.getActiveDocContext=(t,n)=>{const o=e.getActiveVersion(t,n),i=null==o?void 0:o.docs.find(t=>!!r.matchPath(n,{path:t.path,exact:!0,strict:!1}));return{activeVersion:o,activeDoc:i,alternateDocVersions:i?function(e){const n={};return t.versions.forEach(t=>{t.docs.forEach(r=>{r.id===e&&(n[t.name]=r)})}),n}(i.id):{}}},e.getDocVersionSuggestions=(t,n)=>{const r=e.getLatestVersion(t),o=e.getActiveDocContext(t,n),i=o.activeVersion!==r;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}}}]);