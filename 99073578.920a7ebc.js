(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(1),i=n(6),c=(n(0),n(375)),a={title:"\u8fc7\u6ee4\u5668"},l={id:"developer/object_filter_conditions",title:"\u8fc7\u6ee4\u5668",description:"\u5b9a\u4e49\u89c6\u56fe\u6216\u62a5\u8868\u65f6\uff0c\u53ef\u4ee5\u540c\u65f6\u5b9a\u4e49\u7b5b\u9009\u6761\u4ef6\uff0c\u53ea\u6709\u7b26\u5408\u7b5b\u9009\u6761\u4ef6\u7684\u6570\u636e\u624d\u663e\u793a\u5728\u89c6\u56fe/\u62a5\u8868\u4e2d\u3002",source:"@site/../docs/developer/object_filter_conditions.md",permalink:"/developer/object_filter_conditions",sidebar:"\u5f00\u53d1\u6587\u6863",previous:{title:"\u5217\u8868\u89c6\u56fe",permalink:"/developer/listview"},next:{title:"\u5bf9\u8c61\u6743\u9650",permalink:"/developer/object_permission"}},o=[{value:"\u7528\u4ee3\u7801\u5b9a\u4e49\u7b5b\u9009\u6761\u4ef6",id:"\u7528\u4ee3\u7801\u5b9a\u4e49\u7b5b\u9009\u6761\u4ef6",children:[{value:"\u5217\u8868\u89c6\u56fe",id:"\u5217\u8868\u89c6\u56fe",children:[]},{value:"\u62a5\u8868",id:"\u62a5\u8868",children:[]}]},{value:"\u8fc7\u6ee4\u5668\u4e2d\u5b9a\u4e49\u4e34\u65f6\u7b5b\u9009\u6761\u4ef6",id:"\u8fc7\u6ee4\u5668\u4e2d\u5b9a\u4e49\u4e34\u65f6\u7b5b\u9009\u6761\u4ef6",children:[{value:"\u4e34\u65f6\u7b5b\u9009\u6761\u4ef6",id:"\u4e34\u65f6\u7b5b\u9009\u6761\u4ef6",children:[]},{value:"\u4fdd\u5b58\u7b5b\u9009\u6761\u4ef6",id:"\u4fdd\u5b58\u7b5b\u9009\u6761\u4ef6",children:[]}]},{value:"\u4ee3\u7801 &amp; \u8fc7\u6ee4\u5668\u4e2d\u7684\u7b5b\u9009\u6761\u4ef6",id:"\u4ee3\u7801--\u8fc7\u6ee4\u5668\u4e2d\u7684\u7b5b\u9009\u6761\u4ef6",children:[]}],p={rightToc:o};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5b9a\u4e49\u89c6\u56fe\u6216\u62a5\u8868\u65f6\uff0c\u53ef\u4ee5\u540c\u65f6\u5b9a\u4e49\u7b5b\u9009\u6761\u4ef6\uff0c\u53ea\u6709\u7b26\u5408\u7b5b\u9009\u6761\u4ef6\u7684\u6570\u636e\u624d\u663e\u793a\u5728\u89c6\u56fe/\u62a5\u8868\u4e2d\u3002"),Object(c.b)("h2",{id:"\u7528\u4ee3\u7801\u5b9a\u4e49\u7b5b\u9009\u6761\u4ef6"},"\u7528\u4ee3\u7801\u5b9a\u4e49\u7b5b\u9009\u6761\u4ef6"),Object(c.b)("p",null,"\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u7528\u4ee3\u7801\u8bbe\u5b9a\u6bcf\u4e2a\u5217\u8868\u89c6\u56fe\u6216\u62a5\u8868\u7684",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/developer/object_filter"}),"\u7b5b\u9009\u6761\u4ef6(filters)"),"\uff0c\u53ea\u6709\u7b26\u5408\u7b5b\u9009\u6761\u4ef6\u7684\u6570\u636e\u624d\u4f1a\u663e\u793a\u5728\u5217\u8868\u4e2d\u3002"),Object(c.b)("h3",{id:"\u5217\u8868\u89c6\u56fe"},"\u5217\u8868\u89c6\u56fe"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'list_views:\n  priority_high:\n    label: \u91cd\u8981\u5ba2\u6237\n    columns:\n      - name\n      - priority\n      - owner\n      - modified\n    filters: [["priority", "=", "high"]]\n    filter_fields: ["priority", "owner", "modified"]\n    sort: [["modified", "asc"]]\n')),Object(c.b)("p",null,"\u5176\u4e2dfilter_fields\u8868\u793a\u9ed8\u8ba4\u7b5b\u9009\u6761\u4ef6\u5b57\u6bb5\uff0c\u7528\u6237\u70b9\u5f00\u8fc7\u6ee4\u5668\uff0c\u9ed8\u8ba4\u5c31\u6709\u8fd9\u4e9b\u9ed8\u8ba4\u7684\u8fc7\u6ee4\u5b57\u6bb5\uff0c\u53ef\u5feb\u901f\u8bbe\u7f6e\u7b5b\u9009\u6761\u4ef6\uff0c\u663e\u793a\u51fa\u7b26\u5408\u6761\u4ef6\u7684\u6570\u636e\u3002"),Object(c.b)("h3",{id:"\u62a5\u8868"},"\u62a5\u8868"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'_id : contracts-jsr\nname: \u5e74\u5ea6\u5408\u540c\u7edf\u8ba1\nreport_type: jsreport\nobject_name : contracts\ndata_source : odata\nfields : \n  - amount\n  - is_important\n  - is_bidding\n  - is_solid_investment\n  - contract_type\n  - contract_state\n  - is_connected_transaction\nfilters: [["is_important", "=", true]]\nfilter_fields: [{\n  field: "company_id",\n  required: true\n},{\n  field: "signed_date",\n  required: true\n},{\n  field: "amount"\n},{\n  field: "contract_type"\n},{\n  field: "contract_state"\n}]\n')),Object(c.b)("p",null,"\u5176\u4e2dfilter_fields\u8868\u793a\u9ed8\u8ba4\u7b5b\u9009\u6761\u4ef6\u5b57\u6bb5\uff0c\u7528\u6237\u70b9\u5f00\u8fc7\u6ee4\u5668\uff0c\u9ed8\u8ba4\u5c31\u6709\u8fd9\u4e9b\u9ed8\u8ba4\u7684\u8fc7\u6ee4\u5b57\u6bb5\uff0c\u53ef\u5feb\u901f\u8bbe\u7f6e\u7b5b\u9009\u6761\u4ef6\uff0c\u663e\u793a\u51fa\u7b26\u5408\u6761\u4ef6\u7684\u6570\u636e\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u62a5\u8868\u7684filter_fields\u4e2d\u53ef\u4ee5\u989d\u5916\u6307\u5b9a\u67d0\u4e2a\u6761\u4ef6\u662f\u5426\u5fc5\u586b\uff0c\u53ea\u6709\u8fd9\u4e9b\u5fc5\u586b\u7684\u5b57\u6bb5\u90fd\u8bbe\u7f6e\u597d\u7b5b\u9009\u6761\u4ef6\u65f6\u624d\u4f1a\u663e\u793a\u6570\u636e\u3002")),Object(c.b)("h2",{id:"\u8fc7\u6ee4\u5668\u4e2d\u5b9a\u4e49\u4e34\u65f6\u7b5b\u9009\u6761\u4ef6"},"\u8fc7\u6ee4\u5668\u4e2d\u5b9a\u4e49\u4e34\u65f6\u7b5b\u9009\u6761\u4ef6"),Object(c.b)("p",null,"\u4e1a\u52a1\u4eba\u5458\u4e5f\u53ef\u4ee5\u5728\u524d\u53f0\u754c\u9762\uff0c\u5373\u5bf9\u8c61\u5217\u8868\u89c6\u56fe\u6216\u62a5\u8868\u8be6\u7ec6\u754c\u9762\u53f3\u4fa7\u8fc7\u6ee4\u5668\u4e2d\u4fee\u6539\u7b5b\u9009\u6761\u4ef6\u3002"),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/assets/listview_filters.jpg",alt:"\u89c6\u56fe\u8fc7\u6ee4\u5668"}))),Object(c.b)("h3",{id:"\u4e34\u65f6\u7b5b\u9009\u6761\u4ef6"},"\u4e34\u65f6\u7b5b\u9009\u6761\u4ef6"),Object(c.b)("p",null,"\u5728\u8fc7\u6ee4\u5668\u754c\u9762\u4e0a\u5b9a\u4e49\u7684\u7b5b\u9009\u6761\u4ef6\u53ea\u4f5c\u4e3a\u5f53\u524d\u7528\u6237\u8bbe\u7f6e\u7684\u4e34\u65f6\u7b5b\u9009\u6761\u4ef6\uff0c\u4e0d\u5f71\u54cd\u5176\u4ed6\u7528\u6237\u663e\u793a\u6570\u636e\u7684\u7b5b\u9009\u89c4\u5219\uff0c\u9664\u975e\u8be5\u7b5b\u9009\u6761\u4ef6\u88ab\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u4e2d\u3002"),Object(c.b)("h3",{id:"\u4fdd\u5b58\u7b5b\u9009\u6761\u4ef6"},"\u4fdd\u5b58\u7b5b\u9009\u6761\u4ef6"),Object(c.b)("p",null,"\u5bf9\u89c6\u56fe\u6216\u62a5\u8868\u6709\u4fee\u6539\u6743\u9650\u7684\u7ba1\u7406\u5458\u53ef\u4ee5\u628a\u8fc7\u6ee4\u5668\u4e2d\u8bbe\u7f6e\u7684\u7b5b\u9009\u6761\u4ef6\u4fdd\u5b58\u5230\u89c6\u56fe\u6216\u62a5\u8868\u4e2d\uff0c\u7c7b\u4f3c\u4e8e\u4ee3\u7801\u7ea7\u7684\u7b5b\u9009\u6761\u4ef6\uff0c\u4fdd\u5b58\u540e\u7684\u7b5b\u9009\u6761\u4ef6\u5c06\u5e94\u7528\u5230\u6240\u6709\u7528\u6237\u67e5\u770b\u6570\u636e\u7684\u89c4\u5219\u4e2d\u3002"),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/assets/listview_filters_save.jpg",alt:"\u89c6\u56fe\u8fc7\u6ee4\u5668"}))),Object(c.b)("h2",{id:"\u4ee3\u7801--\u8fc7\u6ee4\u5668\u4e2d\u7684\u7b5b\u9009\u6761\u4ef6"},"\u4ee3\u7801 & \u8fc7\u6ee4\u5668\u4e2d\u7684\u7b5b\u9009\u6761\u4ef6"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7528\u4ee3\u7801\u5b9a\u4e49\u7684\u7b5b\u9009\u6761\u4ef6\u5c06\u4f5c\u4e3a\u57fa\u672c\u7b5b\u9009\u6761\u4ef6\uff0c\u5e94\u7528\u5230\u6240\u6709\u7528\u6237\u67e5\u770b\u6570\u636e\u7684\u89c4\u5219\u4e2d\u3002"),Object(c.b)("li",{parentName:"ul"},"\u8fc7\u6ee4\u5668\u4e2d\u5b9a\u4e49\u7684\u7b5b\u9009\u6761\u4ef6\uff0c\u53ea\u4f5c\u4e3a\u5f53\u524d\u7528\u6237\u8bbe\u7f6e\u7684\u4e34\u65f6\u7b5b\u9009\u6761\u4ef6\uff0c\u53ea\u5f71\u54cd\u5f53\u524d\u7528\u6237\u67e5\u770b\u6570\u636e\u3002"),Object(c.b)("li",{parentName:"ul"},"\u8fc7\u6ee4\u5668\u4e2d\u5b9a\u4e49\u7684\u7b5b\u9009\u6761\u4ef6\u88ab\u4fdd\u5b58\u5230\u5217\u8868\u89c6\u56fe\u6216\u62a5\u8868\u540e\uff0c\u4e5f\u5c06\u4f5c\u4e3a\u57fa\u672c\u7b5b\u9009\u6761\u4ef6\uff0c\u5e94\u7528\u5230\u6240\u6709\u7528\u6237\u67e5\u770b\u6570\u636e\u7684\u89c4\u5219\u4e2d\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u5728\u5bf9\u8c61\u5217\u8868\u89c6\u56fe\u6216\u62a5\u8868\u4e2d\u5df2\u7ecf\u7528\u4ee3\u7801\u5b9a\u4e49\u8fc7\u7b5b\u9009\u6761\u4ef6\u7684\u8bdd\uff0c\u5219\u89c6\u56fe/\u62a5\u8868\u4e2d\u5c06\u53d6\u5176\u4e0e\u8fc7\u6ee4\u5668\u754c\u9762\u5b9a\u4e49\u7684\u4e34\u65f6\u7b5b\u9009\u6761\u4ef6\u7528AND\u903b\u8f91\u4e0e\u8fde\u63a5\u8d77\u6765\u7b5b\u9009\u6570\u636e\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u5728\u5bf9\u8c61\u5217\u8868\u89c6\u56fe\u6216\u62a5\u8868\u4e2d\u6709\u5728\u8fc7\u6ee4\u5668\u754c\u9762\u4fdd\u5b58\u8fc7\u7684\u7b5b\u9009\u6761\u4ef6\uff0c\u5219\u89c6\u56fe/\u62a5\u8868\u4e2d\u5c06\u53d6\u5176\u4e0e\u8fc7\u6ee4\u5668\u754c\u9762\u5b9a\u4e49\u7684\u4e34\u65f6\u7b5b\u9009\u6761\u4ef6\u7528AND\u903b\u8f91\u4e0e\u8fde\u63a5\u8d77\u6765\u7b5b\u9009\u6570\u636e\u3002")))}b.isMDXComponent=!0},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,f=u["".concat(a,".").concat(d)]||u[d]||s[d]||c;return n?i.a.createElement(f,l({ref:t},p,{components:n})):i.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<c;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);