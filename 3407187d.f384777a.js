(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{175:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return u}));var r=t(1),a=t(6),l=(t(0),t(410)),c={title:"steedos-config"},b={id:"developer/steedos_config",title:"steedos-config",description:"steedos-config.yml \u7528\u4e8e\u914d\u7f6e\u7cfb\u7edf\u53c2\u6570\uff0c\u4f4d\u4e8e\u9879\u76ee\u7684\u6839\u76ee\u5f55\u3002\r",source:"@site/..\\docs\\developer\\steedos_config.md",permalink:"/developer/steedos_config",sidebar:"Steedos \u5f00\u53d1\u6587\u6863",previous:{title:"JsReport\u62a5\u8868",permalink:"/developer/report_jsreport"},next:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/developer/env"}},o=[{value:"\u6570\u636e\u6e90",id:"\u6570\u636e\u6e90",children:[]},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",children:[]},{value:"\u767b\u5f55\u754c\u9762\u914d\u7f6e",id:"\u767b\u5f55\u754c\u9762\u914d\u7f6e",children:[]},{value:"Web\u670d\u52a1URL",id:"web\u670d\u52a1url",children:[]},{value:"\u6587\u4ef6\u5b58\u50a8",id:"\u6587\u4ef6\u5b58\u50a8",children:[]},{value:"\u90ae\u4ef6\u914d\u7f6e",id:"\u90ae\u4ef6\u914d\u7f6e",children:[]},{value:"\u53d1\u9001\u77ed\u4fe1\u914d\u7f6e",id:"\u53d1\u9001\u77ed\u4fe1\u914d\u7f6e",children:[]},{value:"\u5bc6\u7801\u89c4\u5219\u914d\u7f6e",id:"\u5bc6\u7801\u89c4\u5219\u914d\u7f6e",children:[]},{value:"\u5b9a\u65f6\u4efb\u52a1\u914d\u7f6e",id:"\u5b9a\u65f6\u4efb\u52a1\u914d\u7f6e",children:[]}],i={rightToc:o};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"steedos-config.yml \u7528\u4e8e\u914d\u7f6e\u7cfb\u7edf\u53c2\u6570\uff0c\u4f4d\u4e8e\u9879\u76ee\u7684\u6839\u76ee\u5f55\u3002"),Object(l.b)("h2",{id:"\u6570\u636e\u6e90"},"\u6570\u636e\u6e90"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"datasources:\n  default:\n    connection:\n      url: mongodb://127.0.0.1/steedos\n\n")),Object(l.b)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),Object(l.b)("p",null,"\u914d\u7f6e\u5f53\u524d\u9879\u76ee\u4e2d\u542f\u7528\u7684\u63d2\u4ef6\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff0c\u5728\u542f\u7528\u63d2\u4ef6\u524d\uff0c\u8bf7\u786e\u4fdd\u63d2\u4ef6\u6e90\u7801\u901a\u8fc7 yarn add \u7684\u65b9\u5f0f\u52a0\u5165\u5230\u9879\u76ee\u4e2d\u3002")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'plugins:\n  - "@steedos/app-contracts"\n  - "@steedos/accounts"\n')),Object(l.b)("h2",{id:"\u767b\u5f55\u754c\u9762\u914d\u7f6e"},"\u767b\u5f55\u754c\u9762\u914d\u7f6e"),Object(l.b)("p",null,"\u914d\u7f6e\u767b\u5f55\u754c\u9762\u76f8\u5173\u53c2\u6570\uff0c\u4f8b\u5982\u662f\u5426\u5141\u8bb8\u6ce8\u518c\u3001\u662f\u5426\u5141\u8bb8\u4fee\u6539\u5bc6\u7801\u3001\u662f\u5426\u5141\u8bb8\u521b\u5efa\u4f01\u4e1a\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"tenant:\n  _id:\n  name: Steedos\n  logo_url:\n  background_url:\n  enable_register: true\n  enable_forget_password: true\n  enable_create_tenant: true\n  enable_password_login: true\n  enable_bind_email: false\n  enable_bind_mobile: false\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"enable_register: \u542f\u7528\u7528\u6237\u6ce8\u518c\u529f\u80fd"),Object(l.b)("li",{parentName:"ul"},"enable_forget_password: \u4f7f\u7528\u9a8c\u8bc1\u7801\u767b\u5f55\uff1b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679cenable_bind_mobile\u4e0d\u4e3atrue\uff0c\u5219\u4f7f\u7528\u90ae\u7bb1\u9a8c\u8bc1\u7801\u767b\u5f55"))),Object(l.b)("li",{parentName:"ul"},"enable_create_tenant: \u542f\u7528\u521b\u5efa\u5de5\u4f5c\u533a\u529f\u80fd"),Object(l.b)("li",{parentName:"ul"},"enable_password_login: \u542f\u7528\u5bc6\u7801\u767b\u5f55\uff1b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679cenable_bind_email\u4e3atrue\u4e14\u4f7f\u7528\u90ae\u7bb1\u5bc6\u7801\u767b\u5f55\u65f6\uff0c\u90ae\u7bb1\u5fc5\u987b\u662f\u9a8c\u8bc1\u8fc7\u7684\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u5982\u679cenable_bind_mobile\u4e3atrue\u4e14\u4f7f\u7528\u624b\u673a\u53f7\u5bc6\u7801\u767b\u5f55\uff0c\u624b\u673a\u53f7\u5fc5\u987b\u662f\u9a8c\u8bc1\u8fc7\u7684\uff1b"))),Object(l.b)("li",{parentName:"ul"},"enable_bind_email: \u652f\u6301\u90ae\u7bb1\u9a8c\u8bc1\u7801\u767b\u5f55"),Object(l.b)("li",{parentName:"ul"},"enable_bind_mobile: \u5f3a\u5236\u7ed1\u5b9a\u624b\u673a\u53f7\uff0c\u767b\u5f55\u540e\u68c0\u6d4b\u5230\u7528\u6237\u624b\u673a\u53f7\u672a\u9a8c\u8bc1\uff0c\u5f3a\u5236\u8fdb\u5165\u624b\u673a\u9a8c\u8bc1\u754c\u9762\uff1b\u5982\u679c\u4e3atrue\uff0c\u6ce8\u518c\u65f6\u4ec5\u652f\u6301\u624b\u673a\u53f7\u6ce8\u518c")),Object(l.b)("h2",{id:"web\u670d\u52a1url"},"Web\u670d\u52a1URL"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"services:\n  steedos: /\n")),Object(l.b)("h2",{id:"\u6587\u4ef6\u5b58\u50a8"},"\u6587\u4ef6\u5b58\u50a8"),Object(l.b)("p",null,"\u914d\u7f6e\u9644\u4ef6\u5b58\u50a8\u7684\u76f8\u5173\u53c2\u6570\u3002"),Object(l.b)("p",null,"\u9644\u4ef6\u53ef\u4ee5\u4fdd\u5b58\u5728\u672c\u5730\uff0c\u4e5f\u53ef\u4ee5\u4fdd\u5b58\u5728\u963f\u91cc\u4e91\u6216\u662fAWS S3\u670d\u52a1\u4e2d\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"public:\n  cfs:\n    storage: local\ncfs:\n  local:\n    folder: /storage\n  aliyun:\n    region:\n    internal: false,\n    bucket:\n    folder:\n    accessKeyId:\n    secretAccessKey:\n  aws:\n    region:\n    bucket:\n    folder:\n    accessKeyId:\n    secretAccessKey:\n")),Object(l.b)("h2",{id:"\u90ae\u4ef6\u914d\u7f6e"},"\u90ae\u4ef6\u914d\u7f6e"),Object(l.b)("p",null,"\u914d\u7f6eSMTP\u670d\u52a1\u7684\u76f8\u5173\u53c2\u6570\uff0c\u7528\u4e8e\u7cfb\u7edf\u53d1\u9001\u63a8\u9001\u90ae\u4ef6\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"email:\n  host:\n  port: 465\n  username:\n  password:\n  secure: true\n  from:\n")),Object(l.b)("h2",{id:"\u53d1\u9001\u77ed\u4fe1\u914d\u7f6e"},"\u53d1\u9001\u77ed\u4fe1\u914d\u7f6e"),Object(l.b)("p",null,"\u914d\u7f6e\u624b\u673a\u77ed\u4fe1\u670d\u52a1\uff0c\u7528\u4e8e\u901a\u8fc7\u624b\u673a\u77ed\u4fe1\u767b\u5f55\u548c\u63a5\u53d7\u8d26\u6237\u63d0\u9192\u6d88\u606f\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"sms:\n  qcloud:\n    smsqueue_interval: 1000\n    sdkappid:\n    appkey:\n    signname:\n")),Object(l.b)("h2",{id:"\u5bc6\u7801\u89c4\u5219\u914d\u7f6e"},"\u5bc6\u7801\u89c4\u5219\u914d\u7f6e"),Object(l.b)("p",null,"\u914d\u7f6e\u5bc6\u7801\u7684\u6821\u9a8c\u89c4\u5219\uff0c\u4f8b\u5982\u6700\u5c0f\u957f\u5ea6\uff0c\u662f\u5426\u5fc5\u987b\u5305\u542b\u6570\u5b57\u3001\u5927\u5199\u5b57\u6bcd\u3001\u5c0f\u5199\u5b57\u6bcd\u548c\u5b57\u7b26\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"password:\n  minimum_length: 10\n  lowercase: true\n  number: true\n  uppercase: true\n  symbol: true\n")),Object(l.b)("h2",{id:"\u5b9a\u65f6\u4efb\u52a1\u914d\u7f6e"},"\u5b9a\u65f6\u4efb\u52a1\u914d\u7f6e"),Object(l.b)("p",null,"\u914d\u7f6e\u5b9a\u65f6\u4efb\u52a1\u7684\u5c5e\u6027\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"cron:\n  statistics: 0 0 0 * * *\n  mailqueue_interval: 1000\n  push_interval: 1000\n  calendar_dav_interval: 30000\n  calendar_remind: 60000\n  webhookqueue_interval: 1000\n  instancerecordqueue_interval: 10000\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"statistics: \u6d41\u7a0b\u7edf\u8ba1\u7684\u6267\u884c\u65f6\u95f4\uff0c\u5982\u4e0a\u9762\u7684\u201c0 0 0 * * *\u201d\u610f\u4e3a\u6bcf\u5929\u768400:00:00 "),Object(l.b)("li",{parentName:"ul"},"mailqueue_interval: \u90ae\u4ef6\u961f\u5217\u7684\u8f6e\u8be2\u95f4\u9694(\u5355\u4f4d\u6beb\u79d2)"),Object(l.b)("li",{parentName:"ul"},"push_interval: \u6d88\u606f\u63a8\u9001\u7684\u8f6e\u8be2\u95f4\u9694(\u5355\u4f4d\u6beb\u79d2)"),Object(l.b)("li",{parentName:"ul"},"calendar_dav_interval: \u65e5\u5386\u540c\u6b65\u7684\u8f6e\u8be2\u95f4\u9694(\u5355\u4f4d\u6beb\u79d2)"),Object(l.b)("li",{parentName:"ul"},"calendar_remind: \u65e5\u7a0b\u63d0\u9192\u7684\u8f6e\u8be2\u95f4\u9694(\u5355\u4f4d\u6beb\u79d2)"),Object(l.b)("li",{parentName:"ul"},"webhookqueue_interval: \u6d41\u7a0b\u89e6\u53d1\u5668\u961f\u5217\u7684\u8f6e\u8be2\u95f4\u9694(\u5355\u4f4d\u6beb\u79d2)"),Object(l.b)("li",{parentName:"ul"},"instancerecordqueue_interval: \u5bf9\u8c61\u6d41\u7a0b\u961f\u5217\u7684\u8f6e\u8be2\u95f4\u9694(\u5355\u4f4d\u6beb\u79d2)")))}u.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),u=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):b({},n,{},e)),t},p=function(e){var n=u(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(c,".").concat(d)]||p[d]||s[d]||l;return t?a.a.createElement(m,b({ref:n},i,{components:t})):a.a.createElement(m,b({ref:n},i))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=d;var b={};for(var o in n)hasOwnProperty.call(n,o)&&(b[o]=n[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var i=2;i<l;i++)c[i]=t[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);