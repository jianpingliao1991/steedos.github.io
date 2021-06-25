(self.webpackChunk=self.webpackChunk||[]).push([[9488],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a().createContext({}),c=function(e){var t=a().useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a().createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a().createElement(a().Fragment,{},t)}},m=a().forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=n,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return r?a().createElement(f,l(l({ref:t},u),{},{components:r})):a().createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a().createElement.apply(null,i)}return a().createElement.apply(null,r)}m.displayName="MDXCreateElement"},82425:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(74034),a=r(79973),o=(r(67294),r(3905)),i=["components"],l={title:"\u5355\u70b9\u767b\u5f55JWT"},p=void 0,u={unversionedId:"developer/api/api_jwt",id:"developer/api/api_jwt",isDocsHomePage:!1,title:"\u5355\u70b9\u767b\u5f55JWT",description:"\u5173\u4e8eJWT",source:"@site/../docs/developer/api/api_jwt.md",sourceDirName:"developer/api",slug:"/developer/api/api_jwt",permalink:"/developer/api/api_jwt",version:"current",frontMatter:{title:"\u5355\u70b9\u767b\u5f55JWT"},sidebar:"\u6587\u6863",previous:{title:"\u5220\u9664",permalink:"/developer/api/graphql_delete"},next:{title:"\u767b\u5f55",permalink:"/developer/api/api_login"}},c=[{value:"\u5173\u4e8eJWT",id:"\u5173\u4e8ejwt",children:[]},{value:"\u4f7f\u7528JWT\u5355\u70b9\u767b\u5f55\u5230Steedos\u5e94\u7528\u4e2d",id:"\u4f7f\u7528jwt\u5355\u70b9\u767b\u5f55\u5230steedos\u5e94\u7528\u4e2d",children:[]}],s={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u5173\u4e8ejwt"},"\u5173\u4e8eJWT"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Json web token (JWT), \u662f\u4e3a\u4e86\u5728\u7f51\u7edc\u5e94\u7528\u73af\u5883\u95f4\u4f20\u9012\u58f0\u660e\u800c\u6267\u884c\u7684\u4e00\u79cd\u57fa\u4e8eJSON\u7684\u5f00\u653e\u6807\u51c6.\u8be5token\u88ab\u8bbe\u8ba1\u4e3a\u7d27\u51d1\u4e14\u5b89\u5168\u7684\uff0c\u7279\u522b\u9002\u7528\u4e8e\u5206\u5e03\u5f0f\u7ad9\u70b9\u7684\u5355\u70b9\u767b\u5f55\uff08SSO\uff09\u573a\u666f\u3002JWT\u7684\u58f0\u660e\u4e00\u822c\u88ab\u7528\u6765\u5728\u8eab\u4efd\u63d0\u4f9b\u8005\u548c\u670d\u52a1\u63d0\u4f9b\u8005\u95f4\u4f20\u9012\u88ab\u8ba4\u8bc1\u7684\u7528\u6237\u8eab\u4efd\u4fe1\u606f\uff0c\u4ee5\u4fbf\u4e8e\u4ece\u8d44\u6e90\u670d\u52a1\u5668\u83b7\u53d6\u8d44\u6e90\uff0c\u4e5f\u53ef\u4ee5\u589e\u52a0\u4e00\u4e9b\u989d\u5916\u7684\u5176\u5b83\u4e1a\u52a1\u903b\u8f91\u6240\u5fc5\u987b\u7684\u58f0\u660e\u4fe1\u606f\uff0c\u8be5token\u4e5f\u53ef\u76f4\u63a5\u88ab\u7528\u4e8e\u8ba4\u8bc1\uff0c\u4e5f\u53ef\u88ab\u52a0\u5bc6\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5b98\u7f51\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://jwt.io/"},"https://jwt.io/"))),(0,o.kt)("h3",{id:"\u4f7f\u7528jwt\u5355\u70b9\u767b\u5f55\u5230steedos\u5e94\u7528\u4e2d"},"\u4f7f\u7528JWT\u5355\u70b9\u767b\u5f55\u5230Steedos\u5e94\u7528\u4e2d"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4ee5",(0,o.kt)("a",{parentName:"p",href:"https://github.com/steedos/steedos-contracts-app"},"\u534e\u708e\u5408\u540c\u7ba1\u7406\u7cfb\u7edf"),"\u4e3a\u4f8b\uff0c\u5728\u672c\u5730\u542f\u52a8\u5408\u540c\u7ba1\u7406\u7cfb\u7edf\u8bbf\u95ee\u5730\u5740\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:5000"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8fdb\u5165\u7cfb\u7edf\u540e\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"\u8bbe\u7f6e-\u9ad8\u7ea7"),"\u91cc\u65b0\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"OAuth2\u5e94\u7528"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5ba2\u6237\u7aefID"),"\u4f5c\u4e3a\u751f\u6210JWT\u7684payload.iss\u7684\u503c\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"\u5bc6\u94a5"),"\u5219\u4f5c\u4e3a\u751f\u6210JWT\u65f6\u7684secret\u503c\uff0c\u8fd9\u4e24\u4e2a\u5b57\u6bb5\u7684\u503c\u9700\u8981\u63d0\u4f9b\u7ed9\u5176\u4ed6\u7cfb\u7edf\u4fdd\u5b58\u4ee5\u751f\u6210JWT")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u751f\u6210JWT\u8fc7\u7a0b\u5982\u4e0b,\u4ee5nodejs\u4e3a\u4f8b\uff1a"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var jwt = require('jsonwebtoken');\nvar username = 'Administrator'; // \u7528\u6237\u540d\u7528\u4e8e\u8bc6\u522b\u5f53\u524d\u7528\u6237\u8eab\u4efd\nvar iss = 'e37DceLdtx2Qedc6o'; // OAuth2\u5e94\u7528\u7684\u5ba2\u6237\u7aefID\nvar secret = '7q5G21ymbDxqBcAFzyKPro84FKDN6FclMOkz5rZ_kUg'; // OAuth2\u5e94\u7528\u7684\u5bc6\u94a5\nvar redirect_url = 'http://127.0.0.1:5000/app/admin/OAuth2Clients/grid/all'; // \u8df3\u8f6c\u5730\u5740\nvar token = jwt.sign({ username: username, redirect_url: redirect_url, iss: iss }, secret);\nconsole.log('token: ', token);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u751f\u6210\u597dtoken\u4e4b\u540e\u5373\u53ef\u8bbf\u95ee\u5355\u70b9\u767b\u5f55\u63a5\u53e3",(0,o.kt)("inlineCode",{parentName:"li"},"GET /jwt/sso"),"\uff0c\u5e76\u8bbe\u7f6equery\u53c2\u6570\u5982\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fetch('http://127.0.0.1:5000/jwt/sso?jwt_token=xxxxxxxxx', {\n})\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u6210\u529f\u5219\u4f1a\u8df3\u8f6c\u5230redirect_url\uff0c\u5b8c\u6210\u5355\u70b9\u767b\u5f55")))}d.isMDXComponent=!0}}]);