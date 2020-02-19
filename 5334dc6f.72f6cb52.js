(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{172:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(1),a=t(6),o=(t(0),t(325)),i={title:"\u67e5\u8be2"},l={id:"api/graphql_query",title:"\u67e5\u8be2",description:"### \u5728graphql\u754c\u9762\u4e2d\u67e5\u8be2",source:"@site/../docs/api/graphql_query.md",permalink:"/docs/api/graphql_query",editUrl:"https://github.com/steedos/steedos-website/edit/master/website/../docs/api/graphql_query.md",sidebar:"API",previous:{title:"\u8ba4\u8bc1",permalink:"/docs/api/graphql_auth"},next:{title:"\u65b0\u589e",permalink:"/docs/api/graphql_add"}},c=[{value:"\u5728graphql\u754c\u9762\u4e2d\u67e5\u8be2",id:"\u5728graphql\u754c\u9762\u4e2d\u67e5\u8be2",children:[]}],p={rightToc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u5728graphql\u754c\u9762\u4e2d\u67e5\u8be2"},"\u5728graphql\u754c\u9762\u4e2d\u67e5\u8be2"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u67e5\u8be2\u6761\u4ef6\u63a5\u53d75\u4e2a\u53c2\u6570\uff0c\u53ef\u6839\u636e\u9700\u8981\u642d\u914d\u4f7f\u7528",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"filters:String\u7c7b\u578b"),Object(o.b)("li",{parentName:"ul"},"fields:Array\u7c7b\u578b"),Object(o.b)("li",{parentName:"ul"},"top:Int\u7c7b\u578b"),Object(o.b)("li",{parentName:"ul"},"skip:Int\u7c7b\u578b"),Object(o.b)("li",{parentName:"ul"},"sort:String\u7c7b\u578b"))),Object(o.b)("li",{parentName:"ul"},"\u5982\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  organizations(filters:"_id ne -1", fields:["name"], top:1, skip:1, sort:"name desc") {\n    _id\n    name\n    fullname\n    sort_no\n    is_company\n    is_group\n    hidden\n  }\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u67e5\u8be2\u7ed3\u679c")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "organizations": [\n      {\n        "_id": "cYzsXtT7CQoDaYkpb",\n        "name": "\u8d22\u52a1\u90e8",\n        "fullname": null,\n        "sort_no": null,\n        "is_company": null,\n        "is_group": null,\n        "hidden": null\n      }\n    ]\n  }\n}\n')))}u.isMDXComponent=!0},325:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||o;return t?a.a.createElement(d,l({ref:n},p,{components:t})):a.a.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);