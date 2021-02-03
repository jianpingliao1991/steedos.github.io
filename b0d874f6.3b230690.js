(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{371:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(504)),c={title:"\u767b\u5f55"},i={unversionedId:"developer/api/api_login",id:"developer/api/api_login",isDocsHomePage:!1,title:"\u767b\u5f55",description:"\u8c03\u7528\u7528\u6237\u767b\u5f55\u63a5\u53e3\uff0c\u83b7\u53d6\u7528\u6237\u767b\u5f55\u4fe1\u606f\u3002",source:"@site/../docs/developer/api/api_login.md",slug:"/developer/api/api_login",permalink:"/developer/api/api_login",version:"current",sidebar:"\u6587\u6863",previous:{title:"\u5355\u70b9\u767b\u5f55JWT",permalink:"/developer/api/api_jwt"},next:{title:"\u9a8c\u8bc1\u767b\u5f55\u72b6\u6001",permalink:"/developer/api/api_validate"}},o=[{value:"URL",id:"url",children:[]},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",children:[]},{value:"Body \u8fd4\u56de\u7ed3\u679c",id:"body-\u8fd4\u56de\u7ed3\u679c",children:[]}],p={toc:o};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u8c03\u7528\u7528\u6237\u767b\u5f55\u63a5\u53e3\uff0c\u83b7\u53d6\u7528\u6237\u767b\u5f55\u4fe1\u606f\u3002"),Object(l.b)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u9700\u786e\u8ba4 Steedos \u670d\u52a1 \u8fd0\u884c\u4e8e http://localhost:5000 \u3002"),Object(l.b)("h3",{id:"url"},"URL"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"POST 'http://localhost:5000/accounts/password/login'\n")),Object(l.b)("h3",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),Object(l.b)("p",null,"\u4ee5 JSON \u683c\u5f0f\u4f20\u5165\u8bf7\u6c42\u53c2\u6570\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Param"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"user"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u4f20\u5165\u7528\u6237\u540d\u3001\u90ae\u7bb1\u6216\u624b\u673a\u53f7")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"password"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u7528\u6237\u5bc6\u7801")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"spaceId"),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u9700\u8981\u767b\u5f55\u7684\u5de5\u4f5c\u533a Id\uff0c\u5982\u679c\u4e0d\u4f20\u5165\uff0c\u81ea\u52a8\u9009\u4e2d\u7b2c\u4e00\u4e2a\u5de5\u4f5c\u533a")))),Object(l.b)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'POST\uff1ahttp://192.168.0.95:5080/accounts/password/login\n\n{\n  "user": "yinlianghui@hotoa.com",\n  "password": "123456",\n  "spaceId": "KCBjAEGRNQbfMBSpu"\n}\n')),Object(l.b)("h3",{id:"body-\u8fd4\u56de\u7ed3\u679c"},"Body \u8fd4\u56de\u7ed3\u679c"),Object(l.b)("p",null,"\u5982\u679c\u767b\u5f55\u6210\u529f\uff0cBody \u8fd4\u56de userContext \u5bf9\u8c61\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'{\n    "sessionId": "60139cd4a31008d9b075b74e",\n    "token": "5b99cb8a226395c8c42f5ad839c2f1d3ceb738012a01c3d7f0c13c922a2969c911ac40d6ad8085cdecabf1",\n    "tokens": {\n        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTE4OTgwNjgsImV4cCI6MTYxMjUwMjg2OH0.gvHgtZ45J4UwgAA7UMPNnIvT9YqgE1s6DzpA3urz7_I",\n        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InRva2VuIjoiNWI5OWNiOGEyMjYzOTVjOGM0MmY1YWQ4MzljMmYxZDNjZWI3MzgwMTJhMDFjM2Q3ZjBjMTNjOTIyYTI5NjljOTExYWM0MGQ2YWQ4MDg1Y2RlY2FiZjEiLCJpc0ltcGVyc29uYXRlZCI6ZmFsc2UsInVzZXJJZCI6IjVmZGJlMmE2NzQ0N2ZmMTFlZDU4NTFlNSJ9LCJpYXQiOjE2MTE4OTgwNjgsImV4cCI6MTYxOTY3NDA2OH0.MFvxalr2DA3AS39Ehstq4x_4rpm66Uhxgs2tv449nyM"\n    },\n    "user": {\n        "_id": "5fdbe2a67447ff11ed5851e5",\n        "name": "Litant",\n        "locale": "zh-cn",\n        "verifyCode": "",\n        "created": "2020-12-17T22:58:46.908Z",\n        "modified": "2020-12-17T22:58:46.908Z",\n        "email": "yinlianghui@hotoa.com",\n        "email_verified": null,\n        "emails": [\n            {\n                "address": "yinlianghui@hotoa.com",\n                "verified": null\n            }\n        ],\n        "steedos_id": "5fdbe2a67447ff11ed5851e5",\n        "utcOffset": 8,\n        "last_logon": "2021-01-29T05:19:07.666Z",\n        "lockout": false,\n        "login_failed_number": 0,\n        "id": "5fdbe2a67447ff11ed5851e5"\n    }\n}\n')))}b.isMDXComponent=!0},504:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,O=u["".concat(c,".").concat(s)]||u[s]||d[s]||l;return n?a.a.createElement(O,i(i({ref:t},p),{},{components:n})):a.a.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);