(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{267:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(6),o=(r(0),r(375)),i={title:"JWT"},c={id:"developer/api/api_jwt",title:"JWT",description:"### \u5173\u4e8eJWT",source:"@site/../docs/developer/api/api_jwt.md",permalink:"/developer/api/api_jwt",sidebar:"\u5f00\u53d1\u6587\u6863",previous:{title:"\u5220\u9664",permalink:"/developer/api/graphql_delete"},next:{title:"\u670d\u52a1\u7aefAPI",permalink:"/developer/api/router"}},l=[{value:"\u5173\u4e8eJWT",id:"\u5173\u4e8ejwt",children:[]},{value:"\u4f7f\u7528JWT\u5355\u70b9\u767b\u5f55\u5230Steedos\u5e94\u7528\u4e2d",id:"\u4f7f\u7528jwt\u5355\u70b9\u767b\u5f55\u5230steedos\u5e94\u7528\u4e2d",children:[]}],p={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u5173\u4e8ejwt"},"\u5173\u4e8eJWT"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Json web token (JWT), \u662f\u4e3a\u4e86\u5728\u7f51\u7edc\u5e94\u7528\u73af\u5883\u95f4\u4f20\u9012\u58f0\u660e\u800c\u6267\u884c\u7684\u4e00\u79cd\u57fa\u4e8eJSON\u7684\u5f00\u653e\u6807\u51c6.\u8be5token\u88ab\u8bbe\u8ba1\u4e3a\u7d27\u51d1\u4e14\u5b89\u5168\u7684\uff0c\u7279\u522b\u9002\u7528\u4e8e\u5206\u5e03\u5f0f\u7ad9\u70b9\u7684\u5355\u70b9\u767b\u5f55\uff08SSO\uff09\u573a\u666f\u3002JWT\u7684\u58f0\u660e\u4e00\u822c\u88ab\u7528\u6765\u5728\u8eab\u4efd\u63d0\u4f9b\u8005\u548c\u670d\u52a1\u63d0\u4f9b\u8005\u95f4\u4f20\u9012\u88ab\u8ba4\u8bc1\u7684\u7528\u6237\u8eab\u4efd\u4fe1\u606f\uff0c\u4ee5\u4fbf\u4e8e\u4ece\u8d44\u6e90\u670d\u52a1\u5668\u83b7\u53d6\u8d44\u6e90\uff0c\u4e5f\u53ef\u4ee5\u589e\u52a0\u4e00\u4e9b\u989d\u5916\u7684\u5176\u5b83\u4e1a\u52a1\u903b\u8f91\u6240\u5fc5\u987b\u7684\u58f0\u660e\u4fe1\u606f\uff0c\u8be5token\u4e5f\u53ef\u76f4\u63a5\u88ab\u7528\u4e8e\u8ba4\u8bc1\uff0c\u4e5f\u53ef\u88ab\u52a0\u5bc6\u3002"),Object(o.b)("li",{parentName:"ul"},"\u5b98\u7f51\uff1a",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://jwt.io/"}),"https://jwt.io/"))),Object(o.b)("h3",{id:"\u4f7f\u7528jwt\u5355\u70b9\u767b\u5f55\u5230steedos\u5e94\u7528\u4e2d"},"\u4f7f\u7528JWT\u5355\u70b9\u767b\u5f55\u5230Steedos\u5e94\u7528\u4e2d"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u4ee5",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/steedos/steedos-contracts-app"}),"\u534e\u708e\u5408\u540c\u7ba1\u7406\u7cfb\u7edf"),"\u4e3a\u4f8b\uff0c\u5728\u672c\u5730\u542f\u52a8\u5408\u540c\u7ba1\u7406\u7cfb\u7edf\u8bbf\u95ee\u5730\u5740\u4e3a",Object(o.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:5000")),Object(o.b)("li",{parentName:"ul"},"\u8fdb\u5165\u7cfb\u7edf\u540e\u5728",Object(o.b)("inlineCode",{parentName:"li"},"\u8bbe\u7f6e-\u9ad8\u7ea7"),"\u91cc\u65b0\u5efa",Object(o.b)("inlineCode",{parentName:"li"},"OAuth2\u5e94\u7528"),", ",Object(o.b)("inlineCode",{parentName:"li"},"\u5ba2\u6237\u7aefID"),"\u4f5c\u4e3a\u751f\u6210JWT\u7684payload.iss\u7684\u503c\uff0c",Object(o.b)("inlineCode",{parentName:"li"},"\u5bc6\u94a5"),"\u5219\u4f5c\u4e3a\u751f\u6210JWT\u65f6\u7684secret\u503c\uff0c\u8fd9\u4e24\u4e2a\u5b57\u6bb5\u7684\u503c\u9700\u8981\u63d0\u4f9b\u7ed9\u5176\u4ed6\u7cfb\u7edf\u4fdd\u5b58\u4ee5\u751f\u6210JWT"),Object(o.b)("li",{parentName:"ul"},"\u751f\u6210JWT\u8fc7\u7a0b\u5982\u4e0b,\u4ee5nodejs\u4e3a\u4f8b\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var jwt = require('jsonwebtoken');\nvar username = 'Administrator'; // \u7528\u6237\u540d\u7528\u4e8e\u8bc6\u522b\u5f53\u524d\u7528\u6237\u8eab\u4efd\nvar iss = 'e37DceLdtx2Qedc6o'; // OAuth2\u5e94\u7528\u7684\u5ba2\u6237\u7aefID\nvar secret = '7q5G21ymbDxqBcAFzyKPro84FKDN6FclMOkz5rZ_kUg'; // OAuth2\u5e94\u7528\u7684\u5bc6\u94a5\nvar redirect_url = 'http://127.0.0.1:5000/app/admin/OAuth2Clients/grid/all'; // \u8df3\u8f6c\u5730\u5740\nvar token = jwt.sign({ username: username, redirect_url: redirect_url, iss: iss }, secret);\nconsole.log('token: ', token);\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u751f\u6210\u597dtoken\u4e4b\u540e\u5373\u53ef\u8bbf\u95ee\u5355\u70b9\u767b\u5f55\u63a5\u53e3",Object(o.b)("inlineCode",{parentName:"li"},"GET /jwt/sso"),"\uff0c\u5e76\u8bbe\u7f6equery\u53c2\u6570\u5982\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"fetch('http://127.0.0.1:5000/jwt/sso?jwt_token=xxxxxxxxx', {\n})\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u8bf7\u6c42\u6210\u529f\u5219\u4f1a\u8df3\u8f6c\u5230redirect_url\uff0c\u5b8c\u6210\u5355\u70b9\u767b\u5f55")))}u.isMDXComponent=!0},375:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return j}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,j=b["".concat(i,".").concat(d)]||b[d]||s[d]||o;return r?a.a.createElement(j,c({ref:t},p,{components:r})):a.a.createElement(j,c({ref:t},p))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);