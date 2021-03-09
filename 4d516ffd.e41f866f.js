(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),p=(n(0),n(493)),o={title:"\u7f16\u8f91"},i={unversionedId:"developer/api/graphql_edit",id:"developer/api/graphql_edit",isDocsHomePage:!1,title:"\u7f16\u8f91",description:"\x3c!-- ### \u5728graphql\u754c\u9762\u4e2d\u7f16\u8f91\u6570\u636e",source:"@site/../docs/developer/api/graphql_edit.md",slug:"/developer/api/graphql_edit",permalink:"/developer/api/graphql_edit",version:"current",sidebar:"\u6587\u6863",previous:{title:"\u65b0\u589e",permalink:"/developer/api/graphql_add"},next:{title:"\u5220\u9664",permalink:"/developer/api/graphql_delete"}},c=[],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"\u5728 Steedos \u4e0a\u901a\u8fc7 GraphQL API \u8fdb\u884c\u6570\u636e\u7f16\u8f91\u65f6\uff0c\u9700\u8981\u5c06\u524d\u7f00",Object(p.b)("inlineCode",{parentName:"p"},"query"),"\u66ff\u6362\u4e3a",Object(p.b)("inlineCode",{parentName:"p"},"mutation")),Object(p.b)("p",null,"\u793a\u4f8b\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'mutation {\n  tasks__update(_id:"5cb98489d09a343e14daae95", data:{name:"Task Important"}) {\n    name\n    _id\n  }\n}\n')),Object(p.b)("p",null,"\u5176\u4e2d\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"tasks"),"\u4ee3\u8868\u8981\u7f16\u8f91\u8bb0\u5f55\u7684\u5bf9\u8c61\u540d\u79f0\uff0c",Object(p.b)("inlineCode",{parentName:"p"},"_id"),"\u7684\u503c",Object(p.b)("inlineCode",{parentName:"p"},"5cb98489d09a343e14daae95"),"\u4ee3\u8868\u8981\u7f16\u8f91\u7684\u8bb0\u5f55\u7684",Object(p.b)("inlineCode",{parentName:"p"},"_id"),"\uff0c",Object(p.b)("inlineCode",{parentName:"p"},'{name:"Task Important"}'),"\u4ee3\u8868\u8981\u66f4\u65b0\u7684JSON\u6570\u636e\u3002"),Object(p.b)("p",null,"\u5173\u952e\u5b57",Object(p.b)("inlineCode",{parentName:"p"},"__update"),"\u8868\u793a\u901a\u8fc7 GraphQL API \u5728 Steedos \u4e0a\u7f16\u8f91\u4e00\u6761\u8bb0\u5f55\u3002"),Object(p.b)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'{\n  "data": {\n    "tasks__update": {\n      "name": "Task Important",\n      "_id": "5cb98489d09a343e14daae95"\n    }\n  }\n}\n')),Object(p.b)("p",null,"\u5f53\u901a\u8fc7 Steedos \u4e0a\u7684 GraphQL API \u66f4\u65b0\u6570\u636e\u65f6\uff0c\u53ea\u80fd\u7f16\u8f91\u5177\u6709\u66f4\u65b0\u6743\u9650\u7684\u5bf9\u8c61\u548c\u5b57\u6bb5\u7684\u8bb0\u5f55\uff0c\u8be6\u60c5\u89c1",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"/developer/api/graphql"}),"\u6570\u636e\u6743\u9650"),"\u3002"))}u.isMDXComponent=!0},493:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,m=d["".concat(o,".").concat(s)]||d[s]||b[s]||p;return n?a.a.createElement(m,i({ref:t},l,{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);