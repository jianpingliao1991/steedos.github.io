(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{297:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(6),o=(r(0),r(325)),c={title:"\u5220\u9664"},i={id:"api/graphql_delete",title:"\u5220\u9664",description:"### \u5728graphql\u754c\u9762\u4e2d\u5220\u9664\u6570\u636e",source:"@site/../docs/api/graphql_delete.md",permalink:"/docs/api/graphql_delete",editUrl:"https://github.com/steedos/steedos-website/edit/master/website/../docs/api/graphql_delete.md",sidebar:"API",previous:{title:"\u7f16\u8f91",permalink:"/docs/api/graphql_edit"},next:{title:"JWT",permalink:"/docs/api/api_jwt"}},l=[{value:"\u5728graphql\u754c\u9762\u4e2d\u5220\u9664\u6570\u636e",id:"\u5728graphql\u754c\u9762\u4e2d\u5220\u9664\u6570\u636e",children:[]}],p={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u5728graphql\u754c\u9762\u4e2d\u5220\u9664\u6570\u636e"},"\u5728graphql\u754c\u9762\u4e2d\u5220\u9664\u6570\u636e"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u540d\u683c\u5f0f\u4e3a\uff1a {\u5b9a\u4e49\u7684object.name}_DELETE_ONE"),Object(o.b)("li",{parentName:"ul"},"\u63a5\u53d7\u53c2\u6570",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"_id:String\u7c7b\u578b"))),Object(o.b)("li",{parentName:"ul"},"\u5982\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  organizations_DELETE_ONE(_id:"5cb98489d09a343e14daae95")\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u7ed3\u679c\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "organizations_DELETE_ONE": null\n  }\n}\n')))}u.isMDXComponent=!0},325:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,f=b["".concat(c,".").concat(d)]||b[d]||s[d]||o;return r?a.a.createElement(f,i({ref:t},p,{components:r})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);