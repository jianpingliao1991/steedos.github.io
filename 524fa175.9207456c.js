(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{196:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(1),a=t(6),o=(t(0),t(493)),i={title:"\u9a8c\u8bc1\u767b\u5f55\u72b6\u6001"},c={unversionedId:"developer/api/api_validate",id:"developer/api/api_validate",isDocsHomePage:!1,title:"\u9a8c\u8bc1\u767b\u5f55\u72b6\u6001",description:"\u8c03\u7528 validate \u63a5\u53e3\uff0c\u9a8c\u8bc1\u7528\u6237\u662f\u5426\u767b\u5f55\uff0c\u5982\u679c\u7528\u6237\u5df2\u767b\u5f55\uff0c\u5219\u8fd4\u56de\u7528\u6237\u57fa\u672c\u4fe1\u606f\u3002",source:"@site/../docs/developer/api/api_validate.md",slug:"/developer/api/api_validate",permalink:"/developer/api/api_validate",version:"current",sidebar:"\u6587\u6863",previous:{title:"\u767b\u5f55",permalink:"/developer/api/api_login"},next:{title:"\u6ce8\u9500",permalink:"/developer/api/api_logout"}},l=[{value:"URL",id:"url",children:[]},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",children:[]},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",children:[]}],p={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u8c03\u7528 validate \u63a5\u53e3\uff0c\u9a8c\u8bc1\u7528\u6237\u662f\u5426\u767b\u5f55\uff0c\u5982\u679c\u7528\u6237\u5df2\u767b\u5f55\uff0c\u5219\u8fd4\u56de\u7528\u6237\u57fa\u672c\u4fe1\u606f\u3002"),Object(o.b)("h3",{id:"url"},"URL"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"POST 'http://localhost:5000/api/v4/users/validate'\n")),Object(o.b)("h3",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),Object(o.b)("p",null,"\u901a\u8fc7 Header Authorization \u4f20\u5165 API Key \u7684\u503c\u3002"),Object(o.b)("p",null,"\u4f8b\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"Authorization : Bearer apikey,Gooseneoeu7ABoJC0FQq4Q5DcqNPebL87Jyc27NMCrd\n")),Object(o.b)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),Object(o.b)("p",null,"\u5982\u679c\u5f53\u524d\u7528\u6237\u5df2\u767b\u5f55\uff0c\u5219\u8fd4\u56de userContext\u3002"),Object(o.b)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"})," curl \\\n   -X POST\uff1ahttp://192.168.0.95:5080/api/v4/users/validate\n   -b Authorization : Bearer apikey,Gooseneoeu7ABoJC0FQq4Q5DcqNPebL87Jyc27NMCrd\n")),Object(o.b)("p",null,"\u8fd4\u56de\u7ed3\u679c\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'{\n    "authToken": "apikey,Gooseneoeu7ABoJC0FQq4Q5DcqNPebL87Jyc27NMCrd",\n    "spaceId": "KCBjAEGRNQbfMBSpu",\n    "userId": "5fdbe2a67447ff11ed5851e5",\n    "name": "Litant",\n    "email": "yinlianghui@hotoa.com",\n    "utcOffset": 8,\n    "steedos_id": "5fdbe2a67447ff11ed5851e5",\n    "locale": "zh-cn",\n    "roles": [\n        "admin"\n    ],\n    "space": {\n        "_id": "KCBjAEGRNQbfMBSpu",\n        "name": "HOTOA",\n        "admins": [\n            "5fdbe2a67447ff11ed5851e5"\n        ]\n    },\n    "spaces": [\n        {\n            "_id": "KCBjAEGRNQbfMBSpu",\n            "name": "HOTOA"\n        }\n    ],\n    "company": {\n        "_id": "F5xsJeXJMW3XoGRkX",\n        "name": "HOTOA",\n        "organization": "F5xsJeXJMW3XoGRkX"\n    },\n    "companies": [\n        {\n            "_id": "F5xsJeXJMW3XoGRkX",\n            "name": "HOTOA",\n            "organization": "F5xsJeXJMW3XoGRkX"\n        }\n    ],\n    "organization": {\n        "_id": "F5xsJeXJMW3XoGRkX",\n        "name": "HOTOA",\n        "fullname": "HOTOA",\n        "company_id": "F5xsJeXJMW3XoGRkX"\n    },\n    "organizations": [\n        {\n            "_id": "F5xsJeXJMW3XoGRkX",\n            "name": "HOTOA",\n            "fullname": "HOTOA",\n            "company_id": "F5xsJeXJMW3XoGRkX"\n        }\n    ],\n    "is_space_admin": true,\n    "company_id": "F5xsJeXJMW3XoGRkX",\n    "company_ids": [\n        "F5xsJeXJMW3XoGRkX"\n    ],\n    "permission_shares": []\n}\n')))}u.isMDXComponent=!0},493:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,O=s["".concat(i,".").concat(b)]||s[b]||d[b]||o;return t?a.a.createElement(O,c({ref:n},p,{components:t})):a.a.createElement(O,c({ref:n},p))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);