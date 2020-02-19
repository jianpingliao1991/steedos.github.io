(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),c=(n(0),n(325)),i={title:"\u81ea\u5b9a\u4e49\u51fd\u6570"},o={id:"api/odata_functions",title:"\u81ea\u5b9a\u4e49\u51fd\u6570",description:"\u5728 OData \u4e2d\uff0c\u53ef\u4ee5\u8c03\u7528\u81ea\u5b9a\u4e49\u65b9\u6cd5\u5904\u7406\u76f8\u5173\u7684\u4e1a\u52a1\u903b\u8f91\u5e76\u8fd4\u56de\u7ed3\u679c\u3002\r",source:"@site/../docs/api/odata_functions.md",permalink:"/docs/api/odata_functions",editUrl:"https://github.com/steedos/steedos-website/edit/master/website/../docs/api/odata_functions.md",sidebar:"API",previous:{title:"\u5220\u9664",permalink:"/docs/api/odata_delete"},next:{title:"\u6570\u636e\u5b57\u5178",permalink:"/docs/api/odata_metadata"}},p=[{value:"\u63a5\u53e3\u4fe1\u606f",id:"\u63a5\u53e3\u4fe1\u606f",children:[]}],l={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5728 OData \u4e2d\uff0c\u53ef\u4ee5\u8c03\u7528\u81ea\u5b9a\u4e49\u65b9\u6cd5\u5904\u7406\u76f8\u5173\u7684\u4e1a\u52a1\u903b\u8f91\u5e76\u8fd4\u56de\u7ed3\u679c\u3002"),Object(c.b)("h3",{id:"\u63a5\u53e3\u4fe1\u606f"},"\u63a5\u53e3\u4fe1\u606f"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u6c42\u65b9\u6cd5\uff1aGET | POST | PUT | DELETE")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u6c42\u63a5\u53e3\uff1a/api/v4/{object_name}/{record_id}/{method_name}")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u63a5\u53e3\u8bf4\u660e\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"req.user\uff1a\u5f53\u524d\u7528\u6237\u4fe1\u606f",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-coffeescript"}),"   methods:\n     confirmReceipt: (req, res) ->\n       let {_id} = req.params\n       let {userId} = req.user\n       return res.send(Steedos.getCollection('vip_order').findOne({ _id: _id, owner: userId, status: 'delivered' }))\n"))))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u65b9\u6cd5\u4e2d\u9700\u8981\u4f7f\u7528\u7684\u53c2\u6570\uff0c\u4ee5JSON\u5f62\u5f0f\u53d1\u9001"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"response\u8bf4\u660e\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u6210\u529f\u540e\uff0c\u5c06\u8fd4\u56de\u65b9\u6cd5\u6267\u884c\u7684\u7ed3\u679c"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"HTTP \u8bf7\u6c42")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{})," url\n   -X POST https://beta.steedos.com/api/odata/v4/Af8e****DqD3/vip_order/hbysEccFT2fXjHtpd/confirmReceipt\n   -H 'Content-type': 'application/json'\n     {\n       name: '\u5f20\u56db'\n     }\n")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"HTTP \u54cd\u5e94")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),' {\n   "_id" : "p6gGT6R3LXLSq97Kw",\n   "name" : "\u4f1a\u5458\u5361\u5145\u503c",\n   "amount" : 0.01,\n   "status" : "delivered",\n   "store" : "3NoMAPkdJcPkAxxJm",\n   "card" : "ktd9yru2ANYtaJm5j",\n   "type" : "recharge",\n   "owner" : "sufZtt93b9J49kvip",\n   "space" : "3NoMAPkdJcPkAxxJm",\n   "created" : ISODate("2018-06-06T06:18:28.659Z"),\n   "modified" : ISODate("2018-06-06T06:18:47.172Z"),\n   "created_by" : "sufZtt93b9J49kvip",\n   "modified_by" : "sufZtt93b9J49kvip",\n   "amount_paid" : 0.01\n }\n')))))}b.isMDXComponent=!0},325:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,s=u["".concat(i,".").concat(m)]||u[m]||d[m]||c;return n?a.a.createElement(s,o({ref:t},l,{components:n})):a.a.createElement(s,o({ref:t},l))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);