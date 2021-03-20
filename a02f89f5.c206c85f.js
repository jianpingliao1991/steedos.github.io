(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{346:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(508)),i={title:"OData API",sidebar_label:"\u6982\u8ff0"},l={unversionedId:"developer/api/odata",id:"developer/api/odata",isDocsHomePage:!1,title:"OData API",description:"\u5f00\u653e\u6570\u636e\u534f\u8bae\uff08Open Data Protocol\uff0c\u7f29\u5199OData\uff09\u662f\u4e00\u79cd\u63cf\u8ff0\u5982\u4f55\u521b\u5efa\u548c\u8bbf\u95eeRestful\u670d\u52a1\u7684OASIS\u6807\u51c6\u3002\u8be5\u6807\u51c6\u7531\u5fae\u8f6f\u53d1\u8d77\uff0c\u524d\u4e09\u4e2a\u7248\u672c1.0\u30012.0\u30013.0\u90fd\u662f\u5fae\u8f6f\u5f00\u653e\u6807\u51c6\u3002\u7b2c\u56db\u4e2a\u7248\u672c4.0\u4e8e2014\u5e743\u670817\u65e5\u5728OASIS\u6295\u7968\u901a\u8fc7\u6210\u4e3a\u5f00\u653e\u5de5\u4e1a\u6807\u51c6\u3002",source:"@site/../docs/developer/api/odata.md",slug:"/developer/api/odata",permalink:"/developer/api/odata",version:"current",sidebar_label:"\u6982\u8ff0",sidebar:"\u6587\u6863",previous:{title:"\u603b\u89c8",permalink:"/developer/api/summary"},next:{title:"\u67e5\u8be2",permalink:"/developer/api/odata_query"}},c=[{value:"\u8bbf\u95ee\u5730\u5740",id:"\u8bbf\u95ee\u5730\u5740",children:[]},{value:"\u63a5\u53e3\u8fd4\u56de\u72b6\u6001\u7801\u8bf4\u660e",id:"\u63a5\u53e3\u8fd4\u56de\u72b6\u6001\u7801\u8bf4\u660e",children:[]}],p={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5f00\u653e\u6570\u636e\u534f\u8bae\uff08Open Data Protocol\uff0c\u7f29\u5199OData\uff09\u662f\u4e00\u79cd\u63cf\u8ff0\u5982\u4f55\u521b\u5efa\u548c\u8bbf\u95eeRestful\u670d\u52a1\u7684OASIS\u6807\u51c6\u3002\u8be5\u6807\u51c6\u7531\u5fae\u8f6f\u53d1\u8d77\uff0c\u524d\u4e09\u4e2a\u7248\u672c1.0\u30012.0\u30013.0\u90fd\u662f\u5fae\u8f6f\u5f00\u653e\u6807\u51c6\u3002\u7b2c\u56db\u4e2a\u7248\u672c4.0\u4e8e2014\u5e743\u670817\u65e5\u5728OASIS\u6295\u7968\u901a\u8fc7\u6210\u4e3a\u5f00\u653e\u5de5\u4e1a\u6807\u51c6\u3002"),Object(o.b)("p",null,"Steedos API \u9075\u5faa OData \u534f\u8bae\uff0c\u5f00\u53d1\u4eba\u5458\u5b9a\u4e49\u7684\u6240\u6709\u4e1a\u52a1\u5bf9\u8c61\uff0c\u5747\u53ef\u81ea\u52a8\u751f\u6210\u6807\u51c6 OData \u63a5\u53e3\u3002"),Object(o.b)("h2",{id:"\u8bbf\u95ee\u5730\u5740"},"\u8bbf\u95ee\u5730\u5740"),Object(o.b)("p",null," All API access is through HTTP(S) requests at ",Object(o.b)("inlineCode",{parentName:"p"},"your-steedos-url.com/api/v4"),". All request and response bodies are ",Object(o.b)("inlineCode",{parentName:"p"},"application/json"),"."),Object(o.b)("h2",{id:"\u63a5\u53e3\u8fd4\u56de\u72b6\u6001\u7801\u8bf4\u660e"},"\u63a5\u53e3\u8fd4\u56de\u72b6\u6001\u7801\u8bf4\u660e"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"200\uff1a\u8bf7\u6c42\u6267\u884c\u6210\u529f"),Object(o.b)("li",{parentName:"ul"},"400\uff1a\u65e0\u6cd5\u6210\u529f\u89e3\u6790\u8bf7\u6c42\uff0cURL\u5728\u8bed\u6cd5\u6216\u8bed\u4e49\u4e0a\u53ef\u80fd\u4e0d\u6b63\u786e"),Object(o.b)("li",{parentName:"ul"},"401\uff1a\u672a\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1"),Object(o.b)("li",{parentName:"ul"},"403\uff1a\u6ca1\u6709\u8bbf\u95ee\u8be5\u5b9e\u4f53\u7684\u6743\u9650"),Object(o.b)("li",{parentName:"ul"},"404\uff1a\u672a\u627e\u5230\u76f8\u5173\u8bb0\u5f55"),Object(o.b)("li",{parentName:"ul"},"405\uff1a\u4e0d\u80fd\u5bf9\u8be5\u8bb0\u5f55\u6267\u884c\u6b64\u8bf7\u6c42"),Object(o.b)("li",{parentName:"ul"},"406\uff1a\u65e0\u6cd5\u6ee1\u8db3\u5b9e\u4f53/\u5b9e\u4f53\u5bb9\u5668/\u5b9e\u4f53\u96c6\u5728\u63a5\u53d7\u6807\u5934\u4e2d\u6307\u5b9a\u7684\u8bf7\u6c42\u683c\u5f0f"),Object(o.b)("li",{parentName:"ul"},"413\uff1a\u8fd4\u56de\u6570\u636e\u8fc7\u5927"),Object(o.b)("li",{parentName:"ul"},"500\uff1a\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef"),Object(o.b)("li",{parentName:"ul"},"501\uff1a\u670d\u52a1\u4e0d\u53ef\u7528")))}u.isMDXComponent=!0},508:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,O=b["".concat(i,".").concat(d)]||b[d]||s[d]||o;return r?a.a.createElement(O,l(l({ref:t},p),{},{components:r})):a.a.createElement(O,l({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);