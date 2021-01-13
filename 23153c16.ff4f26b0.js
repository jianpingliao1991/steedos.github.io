(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{118:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return u}));var t=r(1),a=r(6),l=(r(0),r(480)),o={title:"\u67e5\u8be2"},i={unversionedId:"developer/api/graphql_query",id:"developer/api/graphql_query",isDocsHomePage:!1,title:"\u67e5\u8be2",description:"\u5728graphql\u754c\u9762\u4e2d\u67e5\u8be2",source:"@site/../docs/developer/api/graphql_query.md",slug:"/developer/api/graphql_query",permalink:"/developer/api/graphql_query",version:"current",sidebar:"\u6587\u6863",previous:{title:"\u8ba4\u8bc1",permalink:"/developer/api/graphql_auth"},next:{title:"\u65b0\u589e",permalink:"/developer/api/graphql_add"}},p=[{value:"\u5728graphql\u754c\u9762\u4e2d\u67e5\u8be2",id:"\u5728graphql\u754c\u9762\u4e2d\u67e5\u8be2",children:[]}],c={rightToc:p};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"\u5728graphql\u754c\u9762\u4e2d\u67e5\u8be2"},"\u5728graphql\u754c\u9762\u4e2d\u67e5\u8be2"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u67e5\u8be2\u6761\u4ef6\u63a5\u53d75\u4e2a\u53c2\u6570\uff0c\u53ef\u6839\u636e\u9700\u8981\u642d\u914d\u4f7f\u7528",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"filters:String\u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"fields:Array\u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"top:Int\u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"skip:Int\u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"sort:String\u7c7b\u578b"))),Object(l.b)("li",{parentName:"ul"},"\u5982\uff1a")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  organizations(filters:"_id ne -1", fields:["name"], top:1, skip:1, sort:"name desc") {\n    _id\n    name\n    fullname\n    sort_no\n    is_company\n    is_group\n    hidden\n  }\n}\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u67e5\u8be2\u7ed3\u679c")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "organizations": [\n      {\n        "_id": "cYzsXtT7CQoDaYkpb",\n        "name": "\u8d22\u52a1\u90e8",\n        "fullname": null,\n        "sort_no": null,\n        "is_company": null,\n        "is_group": null,\n        "hidden": null\n      }\n    ]\n  }\n}\n')))}u.isMDXComponent=!0},480:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i({},n,{},e)),r},b=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=u(r),d=t,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||l;return r?a.a.createElement(m,i({ref:n},c,{components:r})):a.a.createElement(m,i({ref:n},c))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);