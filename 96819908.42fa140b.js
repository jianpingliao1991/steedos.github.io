(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{294:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return u}));var n=t(1),a=t(6),o=(t(0),t(480)),c={title:"\u65b0\u589e"},l={unversionedId:"developer/api/graphql_add",id:"developer/api/graphql_add",isDocsHomePage:!1,title:"\u65b0\u589e",description:"\u5728graphql\u754c\u9762\u4e2d\u65b0\u589e\u6570\u636e",source:"@site/../docs/developer/api/graphql_add.md",slug:"/developer/api/graphql_add",permalink:"/developer/api/graphql_add",version:"current",sidebar:"\u6587\u6863",previous:{title:"\u67e5\u8be2",permalink:"/developer/api/graphql_query"},next:{title:"\u7f16\u8f91",permalink:"/developer/api/graphql_edit"}},i=[{value:"\u5728graphql\u754c\u9762\u4e2d\u65b0\u589e\u6570\u636e",id:"\u5728graphql\u754c\u9762\u4e2d\u65b0\u589e\u6570\u636e",children:[]}],p={rightToc:i};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u5728graphql\u754c\u9762\u4e2d\u65b0\u589e\u6570\u636e"},"\u5728graphql\u754c\u9762\u4e2d\u65b0\u589e\u6570\u636e"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u540d\u683c\u5f0f\u4e3a\uff1a {\u5b9a\u4e49\u7684object.name}_INSERT_ONE"),Object(o.b)("li",{parentName:"ul"},"\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"data:JSON\u683c\u5f0f"))),Object(o.b)("li",{parentName:"ul"},"\u5982\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  organizations_INSERT_ONE(data:{name:"\u8d22\u52a1\u90e8"})\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u7ed3\u679c\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "organizations_INSERT_ONE": {\n      "name": "\u8d22\u52a1\u90e8",\n      "_id": "5cb98489d09a343e14daae95"\n    }\n  }\n}\n')))}u.isMDXComponent=!0},480:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l({},r,{},e)),t},b=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},s=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(t),s=n,f=b["".concat(c,".").concat(s)]||b[s]||d[s]||o;return t?a.a.createElement(f,l({ref:r},p,{components:t})):a.a.createElement(f,l({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=s;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);