(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{1007:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/filter-928aaaa08991f77fe9ed4dc109d2780d.png"},369:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(6),o=(n(0),n(488)),c={title:"\u67e5\u8be2"},l={unversionedId:"developer/api/odata_query",id:"developer/api/odata_query",isDocsHomePage:!1,title:"\u67e5\u8be2",description:"`shell",source:"@site/../docs/developer/api/odata_query.md",slug:"/developer/api/odata_query",permalink:"/developer/api/odata_query",version:"current",sidebar:"\u6587\u6863",previous:{title:"\u63a5\u53e3\u9a8c\u8bc1",permalink:"/developer/api/odata_auth"},next:{title:"\u8bfb\u53d6",permalink:"/developer/api/odata_get"}},i=[{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",children:[{value:"$select",id:"select",children:[]},{value:"$filter",id:"filter",children:[]},{value:"$orderby",id:"orderby",children:[]},{value:"$skip",id:"skip",children:[]},{value:"$top",id:"top",children:[]},{value:"$expand",id:"expand",children:[]},{value:"$count",id:"count",children:[]}]},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],p={rightToc:i};function u(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"GET /api/v4/{object_name}/\n")),Object(o.b)("p",null,"\u6b64\u63a5\u53e3\u7528\u4e8e\u67e5\u8be2\u4e1a\u52a1\u6570\u636e\uff0c\u5176\u4e2d {object_name} \u9700\u66ff\u6362\u4e3a\u4e1a\u52a1\u5bf9\u8c61\u540d\u79f0\u3002"),Object(o.b)("p",null,"\u63a5\u53e3\u53ea\u4f1a\u8fd4\u56de\u5f53\u524d\u7528\u6237\u6388\u6743\u8bbf\u95ee\u7684\u4e1a\u52a1\u6570\u636e\u3002"),Object(o.b)("h2",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),Object(o.b)("p",null,"\u8bf7\u6c42\u53c2\u6570\u5728 URL \u4e2d\u4f20\u5165\u3002"),Object(o.b)("h3",{id:"select"},"\\$select"),Object(o.b)("p",null,"\u6307\u5b9a\u8981\u8fd4\u56de\u7684\u5b57\u6bb5\u53ca\u987a\u5e8f\u3002 \u5982\u679c\u4e0d\u6307\u5b9a\\$select\uff0c\u8fd4\u56de\u4e1a\u52a1\u5bf9\u8c61\u7684\u6240\u6709\u5217\u3002"),Object(o.b)("h3",{id:"filter"},"\\$filter"),Object(o.b)("p",null,"\u6307\u5b9a\u6570\u636e\u7684\u67e5\u8be2\u6761\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528\u62ec\u53f7\u8868\u793a\u5206\u7ec4\u3002"),Object(o.b)("p",null,"\u4ee5\u4e0b\u5217\u51fa odata query \u652f\u6301\u7684\u8fd0\u7b97\u7b26\u3002\n",Object(o.b)("img",{src:n(1007).default})),Object(o.b)("p",null,"\u65f6\u95f4\u503c\u7684\u5fc5\u987b\u4f7f\u7528\u4ee5\u4e0b\u683c\u5f0f\uff1a2010-07-15T16:19:54Z\u3002"),Object(o.b)("h3",{id:"orderby"},"\\$orderby"),Object(o.b)("p",null,"\u786e\u5b9a\u4f7f\u7528\u54ea\u4e9b\u503c\u5bf9\u6570\u636e\u8fdb\u884c\u6392\u5e8f\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u987a\u5e8f\u4e3a\u5347\u5e8f\u3002\u4f7f\u7528 desc \u4f7f\u987a\u5e8f\u53cd\u5411\u6216\u4f7f\u7528 asc \u663e\u5f0f\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u3002"),Object(o.b)("p",null,"\u4f8b\u5982\uff0c\u82e5\u8981\u6309\u4fee\u6539\u65f6\u95f4\u9006\u5e8f\u6392\u5e8f\uff0c\u8bf7\u4f7f\u7528\u67e5\u8be2 \\$orderby=modified desc"),Object(o.b)("h3",{id:"skip"},"\\$skip"),Object(o.b)("p",null,"\u8bbe\u7f6e\u5728\u8fd4\u56de\u6570\u636e\u524d\u8981\u8df3\u8fc7\u7684\u8bb0\u5f55\u6570\u3002"),Object(o.b)("h3",{id:"top"},"\\$top"),Object(o.b)("p",null,"\u8bbe\u7f6e\u8981\u8fd4\u56de\u7684\u6700\u5927\u8bb0\u5f55\u6570\u3002"),Object(o.b)("h3",{id:"expand"},"\\$expand"),Object(o.b)("p",null,"\u8bbe\u7f6e\u9700\u8981\u6269\u5c55\u8fd4\u56de\u7684\u76f8\u5173\u8bb0\u5f55\uff0c\u53ea\u6709 lookup \u6216 master/detail \u7c7b\u578b\u7684\u5b57\u6bb5\uff0c\u53ef\u4ee5\u4f7f\u7528\\$expand \u529f\u80fd\u3002"),Object(o.b)("h3",{id:"count"},"\\$count"),Object(o.b)("p",null,"\u5728\u7ed3\u679c\u4e2d\u8fd4\u56de\u7b26\u5408\u67e5\u8be2\u6761\u4ef6\u7684\u8bb0\u5f55\u603b\u6570\u3002"),Object(o.b)("h2",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),Object(o.b)("p",null,"\u8fd4\u56de\u6570\u7ec4\u3002"),Object(o.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(o.b)("p",null,"\u67e5\u8be2\u8054\u7cfb\u4eba(contacts)\u7684\u6570\u636e\uff0c\u5e76\u5c55\u5f00\u5bf9\u5e94\u7684\u5355\u4f4d(account)\u4fe1\u606f\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl \\\n   -X GET http://localhost:5000/api/v4/contacts/?$top=50&$select=name,account,email,phone,owner,company_id,locked&$expand=account&$count=true \\\n   -H 'Content-Type: application/json'  \\\n   -b 'X-Space-Token=55090bbe52...aXpwo'\n")),Object(o.b)("p",null,"\u54cd\u5e94"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "@odata.context": "http://localhost:5000/api/v4/$metadata#contacts",\n  "@odata.count": 2,\n  "value": [\n    {\n      "@odata.id": "http://localhost:5000/api/v4/contacts(\'K6xNbprvtbpsdj2Jf\')",\n      "@odata.etag": "W/\\"K6xNbprvtbpsdj2Jf\\"",\n      "@odata.editLink": "http://localhost:5000/api/v4/contacts(\'K6xNbprvtbpsdj2Jf\')",\n      "_id": "K6xNbprvtbpsdj2Jf",\n      "name": "\u5e84\u5efa\u56fd",\n      "account": {\n        "_id": "S9GvFQnr4zFeo3Tip",\n        "name": "\u4e0a\u6d77\u534e\u708e\u8f6f\u4ef6\u79d1\u6280\u6709\u9650\u516c\u53f8",\n        "reference_to.o": "accounts",\n        "_NAME_FIELD_VALUE": "\u4e0a\u6d77\u534e\u708e\u8f6f\u4ef6\u79d1\u6280\u6709\u9650\u516c\u53f8"\n      },\n      "owner": "5194c66ef4a563537a000003",\n      "phone": "021-37693151",\n      "email": "zhuangjianguo@hotoa.com"\n    },\n    {\n      "@odata.id": "http://localhost:5000/api/v4/contacts(\'9KwhPD6moaLR9YXL2\')",\n      "@odata.etag": "W/\\"9KwhPD6moaLR9YXL2\\"",\n      "@odata.editLink": "http://localhost:5000/api/v4/contacts(\'9KwhPD6moaLR9YXL2\')",\n      "_id": "9KwhPD6moaLR9YXL2",\n      "name": "\u7530\u9a90",\n      "account": {\n        "_id": "S9GvFQnr4zFeo3Tip",\n        "name": "\u4e0a\u6d77\u534e\u708e\u8f6f\u4ef6\u79d1\u6280\u6709\u9650\u516c\u53f8",\n        "reference_to.o": "accounts",\n        "_NAME_FIELD_VALUE": "\u4e0a\u6d77\u534e\u708e\u8f6f\u4ef6\u79d1\u6280\u6709\u9650\u516c\u53f8"\n      },\n      "email": "tianqi@hotoa.com",\n      "phone": "021-37693156",\n      "owner": "5194c66ef4a563537a000003"\n    }\n  ]\n}\n')))}u.isMDXComponent=!0},488:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),s=a,f=d["".concat(c,".").concat(s)]||d[s]||b[s]||o;return n?r.a.createElement(f,l({ref:t},p,{components:n})):r.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);