(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{415:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),c=(n(0),n(480)),o={title:"\u81ea\u5b9a\u4e49\u51fd\u6570"},i={unversionedId:"developer/api/odata_functions",id:"developer/api/odata_functions",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u51fd\u6570",description:"\u5728 OData \u4e2d\uff0c\u53ef\u4ee5\u8c03\u7528\u81ea\u5b9a\u4e49\u65b9\u6cd5\u5904\u7406\u76f8\u5173\u7684\u4e1a\u52a1\u903b\u8f91\u5e76\u8fd4\u56de\u7ed3\u679c\u3002",source:"@site/../docs/developer/api/odata_functions.md",slug:"/developer/api/odata_functions",permalink:"/developer/api/odata_functions",version:"current",sidebar:"\u6587\u6863",previous:{title:"\u5220\u9664",permalink:"/developer/api/odata_delete"},next:{title:"\u6570\u636e\u5b57\u5178",permalink:"/developer/api/odata_metadata"}},p=[{value:"\u58f0\u660e\u81ea\u5b9a\u4e49\u51fd\u6570",id:"\u58f0\u660e\u81ea\u5b9a\u4e49\u51fd\u6570",children:[]},{value:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b",id:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b",children:[]},{value:"\u63a5\u53e3\u4fe1\u606f",id:"\u63a5\u53e3\u4fe1\u606f",children:[]}],l={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5728 OData \u4e2d\uff0c\u53ef\u4ee5\u8c03\u7528\u81ea\u5b9a\u4e49\u65b9\u6cd5\u5904\u7406\u76f8\u5173\u7684\u4e1a\u52a1\u903b\u8f91\u5e76\u8fd4\u56de\u7ed3\u679c\u3002"),Object(c.b)("h3",{id:"\u58f0\u660e\u81ea\u5b9a\u4e49\u51fd\u6570"},"\u58f0\u660e\u81ea\u5b9a\u4e49\u51fd\u6570"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"xxx.function.js")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"listenTo: \u5bf9\u8c61\u540d\u79f0\uff0c\u9009\u586b\u3002\u5982\u679c\u6ca1\u6709\u5b9a\u4e49\u6b64\u5c5e\u6027\uff0c\u5219\u53d6\u6587\u4ef6\u540d\u4e2d\u7b2c\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"li"},".")," \u4e4b\u524d\u7684\u6587\u5b57\u4f5c\u4e3alistenTo\u7684\u503c")),Object(c.b)("h3",{id:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b"},"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"  module.exports = {\n    test: async function(req, res){\n        const params = req.params;\n        const userSession = req.user;\n        res.send({message: `${params._id}, ${userSession.email}, test ok.`})\n    }\n  }\n")),Object(c.b)("h3",{id:"\u63a5\u53e3\u4fe1\u606f"},"\u63a5\u53e3\u4fe1\u606f"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u6c42\u65b9\u6cd5\uff1aGET | POST | PUT | DELETE")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u6c42\u63a5\u53e3\uff1a/api/v4/{object_name}/{record_id}/{function_name}")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u63a5\u53e3\u8bf4\u660e\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"req.userId: \u5f53\u524d\u7528\u6237 ID"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'//vip_order.function.js\nconst objectql = require("@steedos/objectql");\nmodule.exports = {\n  confirmReceipt: async function (req, res) {\n    try {\n      const params = req.params;\n      const steedosSchema = objectql.getSteedosSchema();\n      var order = await steedosSchema\n        .getObject("vip_order")\n        .findOne(params._id);\n      res.status(200).send(order);\n    } catch (error) {\n      res.status(400).send({\n        error: {\n          details: error.stack,\n          message: error.message,\n        },\n      });\n    }\n  }\n}\n'))))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u65b9\u6cd5\u4e2d\u9700\u8981\u4f7f\u7528\u7684\u53c2\u6570\uff0c\u4ee5 JSON \u5f62\u5f0f\u53d1\u9001"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"response \u8bf4\u660e\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u6210\u529f\u540e\uff0c\u5c06\u8fd4\u56de\u65b9\u6cd5\u6267\u884c\u7684\u7ed3\u679c"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"HTTP \u8bf7\u6c42")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," url \\\n   -X POST https://beta.steedos.com/api/v4/vip_order/p6gGT6R3LXLSq97Kw/confirmReceipt \\\n   -H 'Content-type: application/json' \\\n   -b 'X-Space-Token=55090bbe52...aXpwo'\n")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"HTTP \u54cd\u5e94")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),' {\n   "_id" : "p6gGT6R3LXLSq97Kw",\n   "name" : "\u4f1a\u5458\u5361\u5145\u503c",\n   "amount" : 0.01,\n   "status" : "delivered",\n   "store" : "3NoMAPkdJcPkAxxJm",\n   "card" : "ktd9yru2ANYtaJm5j",\n   "type" : "recharge",\n   "owner" : "sufZtt93b9J49kvip",\n   "space" : "3NoMAPkdJcPkAxxJm",\n   "created" : ISODate("2018-06-06T06:18:28.659Z"),\n   "modified" : ISODate("2018-06-06T06:18:47.172Z"),\n   "created_by" : "sufZtt93b9J49kvip",\n   "modified_by" : "sufZtt93b9J49kvip",\n   "amount_paid" : 0.01\n }\n')))))}b.isMDXComponent=!0},480:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||c;return n?a.a.createElement(d,i({ref:t},l,{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);