(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),o=(n(0),n(480)),c={title:"\u8bfb\u53d6"},i={unversionedId:"developer/api/odata_get",id:"developer/api/odata_get",isDocsHomePage:!1,title:"\u8bfb\u53d6",description:"`shell",source:"@site/../docs/developer/api/odata_get.md",slug:"/developer/api/odata_get",permalink:"/developer/api/odata_get",version:"current",sidebar:"\u6587\u6863",previous:{title:"\u67e5\u8be2",permalink:"/developer/api/odata_query"},next:{title:"\u63d2\u5165",permalink:"/developer/api/odata_add"}},l=[{value:"\u67e5\u8be2\u53c2\u6570",id:"\u67e5\u8be2\u53c2\u6570",children:[]},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"GET /api/v4/{object_name}/{record_id}\n")),Object(o.b)("p",null,"\u6b64\u63a5\u53e3\u7528\u4e8e\u8fd4\u56de\u67d0\u4e00\u6761\u4e1a\u52a1\u6570\u636e\u7684\u8be6\u7ec6\u4fe1\u606f\u3002\u63a5\u53e3\u53ea\u4f1a\u8fd4\u56de\u5f53\u524d\u7528\u6237\u6388\u6743\u8bbf\u95ee\u7684\u4e1a\u52a1\u6570\u636e\u3002"),Object(o.b)("h2",{id:"\u67e5\u8be2\u53c2\u6570"},"\u67e5\u8be2\u53c2\u6570"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"object_name\uff1a \u4e1a\u52a1\u5bf9\u8c61\u540d\u79f0"),Object(o.b)("li",{parentName:"ul"},"record_id: \u9700\u8981\u67e5\u8be2\u7684\u8bb0\u5f55 ID")),Object(o.b)("h2",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),Object(o.b)("p",null,"\u67e5\u8be2\u6210\u529f\u540e\uff0c\u5c06\u8fd4\u56de\u5bf9\u8c61\u660e\u7ec6\u6570\u636e\u3002"),Object(o.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(o.b)("p",null,"\u67e5\u8be2\u4e00\u4e2a\u8054\u7cfb\u4eba\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl \\\n  -X GET http://beta.steedos.com/api/v4/contacts/cM3H88eYYCA664aJG \\\n  -H 'Content-Type: application/json'  \\\n  -b 'X-Space-Token=55090bbe52...aXpwo'\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "@odata.id": "https://localhost:5000/api/v4/contacts(\'cM3H88eYYCA664aJG\')",\n  "@odata.etag": "W/\\"cM3H88eYYCA664aJG\\"",\n  "@odata.editLink": "https://localhost:5000/api/v4/contacts(\'cM3H88eYYCA664aJG\')",\n  "_id": "cM3H88eYYCA664aJG",\n  "name": "\u9648\u5955\u8fc5",\n  "mobile": "18944550001",\n  "company": "\u4e0a\u6d77\u67d0\u67d0\u516c\u53f8",\n  "address": "\u4e0a\u6d77\u5e02\u666e\u9640\u533a\u67d0\u67d0\u8857\u9053",\n  "account": {\n    "_id": "79rRJJxTdwG7Agv9r",\n    "name": "dada1"\n  },\n  "owner": {\n    "_id": "hPgDcEd9vKQxwndQR",\n    "name": "\u7cfb\u7edf\u7ba1\u7406\u5458"\n  }\n}\n')))}u.isMDXComponent=!0},480:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,m=d["".concat(c,".").concat(s)]||d[s]||b[s]||o;return n?a.a.createElement(m,i({ref:t},p,{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);