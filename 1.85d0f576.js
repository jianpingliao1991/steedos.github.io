(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{417:function(t,e,n){"use strict";var r=n(0),o=n(25);e.a=function(){const t=Object(r.useContext)(o.a);if(null===t)throw new Error("Docusaurus context not provided");return t}},420:function(t,e,n){"use strict";function r(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}e.a=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(o&&(o+=" "),o+=e);return o}},422:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(13),a=n(456),u=n(7);const c=Object(r.createContext)({collectLink:()=>{}});var s=n(441),f=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};e.a=function(t){var e,{isNavLink:n,to:l,href:p,activeClassName:d,"data-noBrokenLinkCheck":h}=t,y=f(t,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:b}=Object(s.b)(),v=Object(r.useContext)(c),g=l||p,m=Object(a.a)(g),T=null==g?void 0:g.replace("pathname://",""),w=void 0!==T?(t=>t.startsWith("/"))(O=T)?b(O):O:void 0;var O;const A=Object(r.useRef)(!1),C=n?i.e:i.c,E=u.a.canUseIntersectionObserver;let j;Object(r.useEffect)((()=>(!E&&m&&window.docusaurus.prefetch(w),()=>{E&&j&&j.disconnect()})),[w,E,m]);const S=null!==(e=null==w?void 0:w.startsWith("#"))&&void 0!==e&&e,P=!w||!m||S;return w&&m&&!S&&!h&&v.collectLink(w),P?o.a.createElement("a",Object.assign({href:w},!m&&{target:"_blank",rel:"noopener noreferrer"},y)):o.a.createElement(C,Object.assign({},y,{onMouseEnter:()=>{A.current||(window.docusaurus.preload(w),A.current=!0)},innerRef:t=>{var e,n;E&&t&&m&&(e=t,n=()=>{window.docusaurus.prefetch(w)},j=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(j.unobserve(e),j.disconnect(),n())}))})),j.observe(e))},to:w||""},n&&{activeClassName:d}))}},423:function(t,e,n){"use strict";n.r(e);var r=n(13);n.d(e,"MemoryRouter",(function(){return r.d})),n.d(e,"Prompt",(function(){return r.f})),n.d(e,"Redirect",(function(){return r.g})),n.d(e,"Route",(function(){return r.h})),n.d(e,"Router",(function(){return r.i})),n.d(e,"StaticRouter",(function(){return r.j})),n.d(e,"Switch",(function(){return r.k})),n.d(e,"__RouterContext",(function(){return r.l})),n.d(e,"generatePath",(function(){return r.m})),n.d(e,"matchPath",(function(){return r.n})),n.d(e,"useHistory",(function(){return r.o})),n.d(e,"useLocation",(function(){return r.p})),n.d(e,"useParams",(function(){return r.q})),n.d(e,"useRouteMatch",(function(){return r.r})),n.d(e,"withRouter",(function(){return r.s})),n.d(e,"BrowserRouter",(function(){return r.a})),n.d(e,"HashRouter",(function(){return r.b})),n.d(e,"Link",(function(){return r.c})),n.d(e,"NavLink",(function(){return r.e}))},441:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var r=n(417),o=n(456);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(t,e,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return e+n;const a=n.startsWith(e)?n:e+n.replace(/^\//,"");return i?t+a:a}(e,t,n,r)}}function a(t,e={}){const{withBaseUrl:n}=i();return n(t,e)}},445:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(510);e.a=function(t){return o.a.createElement(i.Helmet,Object.assign({},t))}},456:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!r(t)}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}))},457:function(t,e,n){try{t.exports=n(520)}catch(r){t.exports={}}},510:function(t,e,n){"use strict";(function(t){function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}Object.defineProperty(e,"__esModule",{value:!0});var o,i,a,u,c=r(n(8)),s=r(n(511)),f=r(n(513)),l=r(n(0)),p=r(n(21)),d="bodyAttributes",h="htmlAttributes",y="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(b).map((function(t){return b[t]})),"charset"),g="cssText",m="href",T="http-equiv",w="innerHTML",O="itemprop",A="name",C="property",E="rel",j="src",S={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",L="defer",k="encodeSpecialCharacters",x="onChangeClientState",D="titleTemplate",I=Object.keys(S).reduce((function(t,e){return t[S[e]]=e,t}),{}),R=[b.NOSCRIPT,b.SCRIPT,b.STYLE],M="data-react-helmet",N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},_=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),H=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},B=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},U=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},q=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(t){var e=z(t,b.TITLE),n=z(t,D);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=z(t,P);return e||r||void 0},F=function(t){return z(t,x)||function(){}},W=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return H({},t,e)}),{})},K=function(t,e){return e.filter((function(t){return void 0!==t[b.BASE]})).map((function(t){return t[b.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},$=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&Z("Helmet: "+t+' should be of type "Array". Instead found type "'+N(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===e.indexOf(c)||n===E&&"canonical"===t[n].toLowerCase()||c===E&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(u)||u!==w&&u!==g&&u!==O||(n=u)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=p({},r[u],o[u]);r[u]=c}return t}),[]).reverse()},z=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},J=(o=Date.now(),function(t){var e=Date.now();e-o>16?(o=e,t(e)):setTimeout((function(){J(t)}),0)}),G=function(t){return clearTimeout(t)},Q="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:t.requestAnimationFrame||J,X="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||G:t.cancelAnimationFrame||G,Z=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},tt=null,et=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.onChangeClientState,s=t.scriptTags,f=t.styleTags,l=t.title,p=t.titleAttributes;ot(b.BODY,r),ot(b.HTML,o),rt(l,p);var d={baseTag:it(b.BASE,n),linkTags:it(b.LINK,i),metaTags:it(b.META,a),noscriptTags:it(b.NOSCRIPT,u),scriptTags:it(b.SCRIPT,s),styleTags:it(b.STYLE,f)},h={},y={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(y[t]=d[t].oldTags)})),e&&e(),c(t,h,y)},nt=function(t){return Array.isArray(t)?t.join(""):t},rt=function(t,e){void 0!==t&&document.title!==t&&(document.title=nt(t)),ot(b.TITLE,e)},ot=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(M),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var c=a[u],s=e[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var f=i.indexOf(c);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute(M):n.getAttribute(M)!==a.join(",")&&n.setAttribute(M,a.join(","))}},it=function(t,e){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===w)n.innerHTML=e.innerHTML;else if(r===g)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(M,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},at=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ut=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[S[n]||n]=t[n],e}),e)},ct=function(t,e,n){switch(t){case b.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[M]=!0,o=ut(n,r),[l.createElement(b.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=at(n),i=nt(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+q(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+q(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case d:case h:return{toComponent:function(){return ut(e)},toString:function(){return at(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[M]=!0,r);return Object.keys(e).forEach((function(t){var n=S[t]||t;if(n===w||n===g){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),l.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===w||t===g)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+q(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===R.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},st=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.scriptTags,s=t.styleTags,f=t.title,l=void 0===f?"":f,p=t.titleAttributes;return{base:ct(b.BASE,e,r),bodyAttributes:ct(d,n,r),htmlAttributes:ct(h,o,r),link:ct(b.LINK,i,r),meta:ct(b.META,a,r),noscript:ct(b.NOSCRIPT,u,r),script:ct(b.SCRIPT,c,r),style:ct(b.STYLE,s,r),title:ct(b.TITLE,{title:l,titleAttributes:p},r)}},ft=s((function(t){return{baseTag:K([m],t),bodyAttributes:W(d,t),defer:z(t,L),encode:z(t,k),htmlAttributes:W(h,t),linkTags:$(b.LINK,[E,m],t),metaTags:$(b.META,[A,v,T,C,O],t),noscriptTags:$(b.NOSCRIPT,[w],t),onChangeClientState:F(t),scriptTags:$(b.SCRIPT,[j,w],t),styleTags:$(b.STYLE,[g],t),title:Y(t),titleAttributes:W(y,t)}}),(function(t){tt&&X(tt),t.defer?tt=Q((function(){et(t,(function(){tt=null}))})):(et(t),tt=null)}),st)((function(){return null})),lt=(i=ft,u=a=function(t){function e(){return V(this,e),U(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!f(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:e};case b.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return H({},r,((e={})[n.type]=[].concat(r[n.type]||[],[H({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case b.TITLE:return H({},o,((e={})[r.type]=a,e.titleAttributes=H({},i),e));case b.BODY:return H({},o,{bodyAttributes:H({},i)});case b.HTML:return H({},o,{htmlAttributes:H({},i)})}return H({},o,((n={})[r.type]=H({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=H({},e);return Object.keys(t).forEach((function(e){var r;n=H({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return l.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[I[n]||n]=t[n],e}),e)}(B(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=B(t,["children"]),r=H({},n);return e&&(r=this.mapChildrenToProps(e,r)),l.createElement(i,r)},_(e,null,[{key:"canUseDOM",set:function(t){i.canUseDOM=t}}]),e}(l.Component),a.propTypes={base:c.object,bodyAttributes:c.object,children:c.oneOfType([c.arrayOf(c.node),c.node]),defaultTitle:c.string,defer:c.bool,encodeSpecialCharacters:c.bool,htmlAttributes:c.object,link:c.arrayOf(c.object),meta:c.arrayOf(c.object),noscript:c.arrayOf(c.object),onChangeClientState:c.func,script:c.arrayOf(c.object),style:c.arrayOf(c.object),title:c.string,titleAttributes:c.object,titleTemplate:c.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var t=i.rewind();return t||(t=st({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},u);lt.renderStatic=lt.rewind,e.Helmet=lt}).call(this,n(30))},511:function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var o=n(0),i=r(o),a=r(n(512));function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,f=[];function l(){s=t(f.map((function(t){return t.props}))),p.canUseDOM?e(s):n&&(s=n(s))}var p=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,f=[],t};var u=o.prototype;return u.shouldComponentUpdate=function(t){return!a(t,this.props)},u.componentWillMount=function(){f.push(this),l()},u.componentDidUpdate=function(){l()},u.componentWillUnmount=function(){var t=f.indexOf(this);f.splice(t,1),l()},u.render=function(){return i.createElement(r,this.props)},o}(o.Component);return u(p,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),u(p,"canUseDOM",c),p}}},512:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(e),c=0;c<i.length;c++){var s=i[c];if(!u(s))return!1;var f=t[s],l=e[s];if(!1===(o=n?n.call(r,f,l,s):void 0)||void 0===o&&f!==l)return!1}return!0}},513:function(t,e,n){"use strict";var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;function u(t,e){if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){var n,c,s,f=r(t),l=r(e);if(f&&l){if((c=t.length)!=e.length)return!1;for(n=c;0!=n--;)if(!u(t[n],e[n]))return!1;return!0}if(f!=l)return!1;var p=t instanceof Date,d=e instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==e.getTime();var h=t instanceof RegExp,y=e instanceof RegExp;if(h!=y)return!1;if(h&&y)return t.toString()==e.toString();var b=o(t);if((c=b.length)!==o(e).length)return!1;for(n=c;0!=n--;)if(!i.call(e,b[n]))return!1;if(a&&t instanceof Element&&e instanceof Element)return t===e;for(n=c;0!=n--;)if(!("_owner"===(s=b[n])&&t.$$typeof||u(t[s],e[s])))return!1;return!0}return t!=t&&e!=e}t.exports=function(t,e){try{return u(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},520:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useDocVersionSuggestions=e.useActiveDocContext=e.useActiveVersion=e.useLatestVersion=e.useVersions=e.useActivePlugin=void 0;const r=n(423),o=n(521),i=n(522),a=t=>o.usePluginData("docusaurus-plugin-content-docs",t);e.useActivePlugin=(t={})=>{const e=o.useAllPluginInstancesData("docusaurus-plugin-content-docs"),{pathname:n}=r.useLocation();return i.getActivePlugin(e,n,t)},e.useVersions=t=>a(t).versions,e.useLatestVersion=t=>{const e=a(t);return i.getLatestVersion(e)},e.useActiveVersion=t=>{const e=a(t),{pathname:n}=r.useLocation();return i.getActiveVersion(e,n)},e.useActiveDocContext=t=>{const e=a(t),{pathname:n}=r.useLocation();return i.getActiveDocContext(e,n)},e.useDocVersionSuggestions=t=>{const e=a(t),{pathname:n}=r.useLocation();return i.getDocVersionSuggestions(e,n)}},521:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o})),n.d(e,"useAllPluginInstancesData",(function(){return i})),n.d(e,"usePluginData",(function(){return a}));var r=n(417);function o(){const{globalData:t}=Object(r.a)();if(!t)throw new Error("Docusaurus global data not found");return t}function i(t){const e=o()[t];if(!e)throw new Error("Docusaurus plugin global data not found for pluginName="+t);return e}function a(t,e="default"){const n=i(t)[e];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${t} and pluginId=${e}`);return n}},522:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDocVersionSuggestions=e.getActiveDocContext=e.getActiveVersion=e.getLatestVersion=e.getActivePlugin=void 0;const r=n(423);e.getActivePlugin=function(t,e,n={}){const o=Object.entries(t).find((([t,n])=>!!r.matchPath(e,{path:n.path,exact:!1,strict:!1}))),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error(`Can't find active docs plugin for pathname=${e}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(t).map((t=>t.path)).join(", ")}`);return i},e.getLatestVersion=t=>t.versions.find((t=>t.isLast)),e.getActiveVersion=(t,n)=>{const o=e.getLatestVersion(t);return[...t.versions.filter((t=>t!==o)),o].find((t=>!!r.matchPath(n,{path:t.path,exact:!1,strict:!1})))},e.getActiveDocContext=(t,n)=>{const o=e.getActiveVersion(t,n),i=null==o?void 0:o.docs.find((t=>!!r.matchPath(n,{path:t.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:i,alternateDocVersions:i?function(e){const n={};return t.versions.forEach((t=>{t.docs.forEach((r=>{r.id===e&&(n[t.name]=r)}))})),n}(i.id):{}}},e.getDocVersionSuggestions=(t,n)=>{const r=e.getLatestVersion(t),o=e.getActiveDocContext(t,n),i=o.activeVersion!==r;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}}}]);