(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),c=(n(0),n(410)),o={title:"\u66f4\u65b0"},i={id:"developer/api/odata_edit",title:"\u66f4\u65b0",description:"\u5728 OData \u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 PUT \u65b9\u6cd5\u6765\u66f4\u65b0\u4fee\u6539\u4e1a\u52a1\u6570\u636e\u8bb0\u5f55\u3002\u6210\u529f\u7684\u66f4\u65b0\u54cd\u5e94\u8fd4\u56de\u66f4\u65b0\u540e\u7684\u8bb0\u5f55\u3002\u4f7f\u7528 PUT \u66f4\u65b0\u8bb0\u5f55\u4f1a\u7528\u63d0\u4f9b\u7684\u6570\u636e\u66ff\u6362\u73b0\u6709\u8bb0\u5f55\u3002 \u8bb0\u5f55\u4e2d\u7684\u6240\u6709\u5c5e\u6027\u503c\u4f7f\u7528\u8bf7\u6c42\u4e2d\u63d0\u4f9b\u7684\u503c\u6216\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u503c\uff08\u5982\u679c\u8bf7\u6c42\u4e2d\u672a\u5305\u62ec\u8fd9\u4e9b\u503c\uff09\u3002\r",source:"@site/..\\docs\\developer\\api\\odata_edit.md",permalink:"/developer/api/odata_edit",sidebar:"\u534e\u708eAPI",previous:{title:"\u63d2\u5165",permalink:"/developer/api/odata_add"},next:{title:"\u5220\u9664",permalink:"/developer/api/odata_delete"}},p=[{value:"\u63a5\u53e3\u4fe1\u606f",id:"\u63a5\u53e3\u4fe1\u606f",children:[]}],l={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5728 OData \u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 PUT \u65b9\u6cd5\u6765\u66f4\u65b0\u4fee\u6539\u4e1a\u52a1\u6570\u636e\u8bb0\u5f55\u3002\u6210\u529f\u7684\u66f4\u65b0\u54cd\u5e94\u8fd4\u56de\u66f4\u65b0\u540e\u7684\u8bb0\u5f55\u3002\u4f7f\u7528 PUT \u66f4\u65b0\u8bb0\u5f55\u4f1a\u7528\u63d0\u4f9b\u7684\u6570\u636e\u66ff\u6362\u73b0\u6709\u8bb0\u5f55\u3002 \u8bb0\u5f55\u4e2d\u7684\u6240\u6709\u5c5e\u6027\u503c\u4f7f\u7528\u8bf7\u6c42\u4e2d\u63d0\u4f9b\u7684\u503c\u6216\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u503c\uff08\u5982\u679c\u8bf7\u6c42\u4e2d\u672a\u5305\u62ec\u8fd9\u4e9b\u503c\uff09\u3002"),Object(c.b)("h3",{id:"\u63a5\u53e3\u4fe1\u606f"},"\u63a5\u53e3\u4fe1\u606f"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u6c42\u65b9\u6cd5\uff1aPUT")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u6c42\u63a5\u53e3\uff1a/api/v4/{object_name}/{record_id}")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u63a5\u53e3\u8bf4\u660e\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"spaceId\uff1a\u5de5\u4f5c\u533aID"),Object(c.b)("li",{parentName:"ul"},"object_name\uff1a\u66f4\u65b0\u5bf9\u8c61\u7684\u5bf9\u8c61\u540d"),Object(c.b)("li",{parentName:"ul"},"record_id\uff1a\u66f4\u65b0\u8bb0\u5f55\u7684\u4e3b\u952eID"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u8bb0\u5f55\u4e2d\u9700\u8981\u66f4\u65b0\u7684\u5b57\u6bb5\uff0c\u4ee5JSON\u5f62\u5f0f\u53d1\u9001"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"response\u8bf4\u660e\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u66f4\u65b0\u6210\u529f\u540e\uff0c\u5c06\u8fd4\u56de\u65b0\u7684\u5bf9\u8c61\u5185\u5bb9"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"HTTP \u8bf7\u6c42")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{})," url\n   -X PUT https://beta.steedos.com/api/odata/v4/Af8e****DqD3/contacts/hbysEccFT2fXjHtpd\n   -H 'Content-type': 'application/json'\n     {\n       name: '\u5f20\u56db'\n     }\n")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"HTTP \u54cd\u5e94")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),' {\n     "@odata.id": "https://beta.steedos.com/api/odata/v4/Af8e****DqD3/contacts(\'hbysEccFT2fXjHtpd\')",\n     "@odata.etag": "W/\\"08D589720BBB3DB1\\"",\n     "@odata.editLink": "https://beta.steedos.com/api/odata/v4/Af8e****DqD3/contacts(\'hbysEccFT2fXjHtpd\')",\n     "_id": "hbysEccFT2fXjHtpd",\n     "name": "\u5f20\u56db",\n     "mobile": "18969565966",\n     "company": "\u4e0a\u6d77\u67d0\u67d0\u516c\u53f8",\n     "address": "\u4e0a\u6d77\u5e02\u5f90\u6c47\u533a\u67d0\u67d0\u8857\u9053"\n     "account": {\n       "_id": "79rRJJxTdwG7Agv9r",\n       "name": "dada1"\n     },\n     "owner": {\n       "_id": "hPgDcEd9vKQxwndQR",\n       "name": "\u7cfb\u7edf\u7ba1\u7406\u5458"\n     }\n     "created": "2018-03-29T08:50:35.092Z",\n     "modified": "2018-03-29T08:50:44.990Z",\n     "created_by": "qjcwDX3icX3KnZJhZ",\n     "modified_by": "qjcwDX3icX3KnZJhZ",\n     "score": 0\n }\n')))))}b.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=b(n),m=r,O=d["".concat(o,".").concat(m)]||d[m]||u[m]||c;return n?a.a.createElement(O,i({ref:t},l,{components:n})):a.a.createElement(O,i({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);