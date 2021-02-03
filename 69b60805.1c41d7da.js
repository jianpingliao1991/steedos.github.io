(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{241:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),l=(n(0),n(504)),c={title:"\u63a5\u53e3\u9a8c\u8bc1"},o={unversionedId:"developer/api/odata_auth",id:"developer/api/odata_auth",isDocsHomePage:!1,title:"\u63a5\u53e3\u9a8c\u8bc1",description:"\u6709\u591a\u79cd\u65b9\u5f0f\u53ef\u4ee5\u548c Steedos API \u8fdb\u884c \u63a5\u53e3\u9a8c\u8bc1\u3002",source:"@site/../docs/developer/api/odata_auth.md",slug:"/developer/api/odata_auth",permalink:"/developer/api/odata_auth",version:"current"},i=[{value:"\u83b7\u53d6 Token",id:"\u83b7\u53d6-token",children:[{value:"URL",id:"url",children:[]},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",children:[]},{value:"Body \u8fd4\u56de\u7ed3\u679c",id:"body-\u8fd4\u56de\u7ed3\u679c",children:[]},{value:"Header \u8fd4\u56de\u7ed3\u679c",id:"header-\u8fd4\u56de\u7ed3\u679c",children:[]},{value:"Cookie \u8fd4\u56de\u7ed3\u679c",id:"cookie-\u8fd4\u56de\u7ed3\u679c",children:[]}]},{value:"\u9a8c\u8bc1\u767b\u5f55\u72b6\u6001",id:"\u9a8c\u8bc1\u767b\u5f55\u72b6\u6001",children:[{value:"URL",id:"url-1",children:[]},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-1",children:[]},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",children:[]}]}],p={toc:i};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u6709\u591a\u79cd\u65b9\u5f0f\u53ef\u4ee5\u548c Steedos API \u8fdb\u884c \u63a5\u53e3\u9a8c\u8bc1\u3002"),Object(l.b)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u9700\u786e\u8ba4 Steedos \u670d\u52a1 \u8fd0\u884c\u4e8e http://localhost:5000 \u3002"),Object(l.b)("h2",{id:"\u83b7\u53d6-token"},"\u83b7\u53d6 Token"),Object(l.b)("p",null,"\u8c03\u7528\u7528\u6237\u767b\u5f55\u63a5\u53e3\uff0c\u83b7\u53d6\u7528\u6237\u767b\u5f55 Token"),Object(l.b)("h3",{id:"url"},"URL"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"POST 'http://localhost:5000/api/v4/users/login'\n")),Object(l.b)("h3",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),Object(l.b)("p",null,"\u4ee5 JSON \u683c\u5f0f\u4f20\u5165\u8bf7\u6c42\u53c2\u6570\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Param"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"username"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u4f20\u5165\u7528\u6237\u540d\u3001\u90ae\u7bb1\u6216\u624b\u673a\u53f7")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"password"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u7528\u6237\u5bc6\u7801")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"spaceId"),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"\u9700\u8981\u767b\u5f55\u7684\u5de5\u4f5c\u533a Id\uff0c\u5982\u679c\u4e0d\u4f20\u5165\uff0c\u81ea\u52a8\u9009\u4e2d\u7b2c\u4e00\u4e2a\u5de5\u4f5c\u533a")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "jack",\n  "password": "jack_pw",\n  "spaceId": "i6thCRrKWYmdjxpzt"\n}\n')),Object(l.b)("h3",{id:"body-\u8fd4\u56de\u7ed3\u679c"},"Body \u8fd4\u56de\u7ed3\u679c"),Object(l.b)("p",null,"\u5982\u679c\u767b\u5f55\u6210\u529f\uff0cBody \u8fd4\u56de userContext \u5bf9\u8c61\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'userId: dL4KFkLSqqGAozZ6C # \u7528\u6237Id\nspaceId: i6thCRrKWYmdjxpzt # \u5f53\u524d\u5de5\u4f5c\u533aId\nname: Jack Zhuang # \u7528\u6237\u59d3\u540d\nusername: jack # \u7528\u6237\u540d\nmobile: 1865201314 # \u7528\u6237\u624b\u673a\u53f7\nemail: 1865201314@qq.com # \u7528\u6237\u90ae\u7bb1\nutcOffset: 8 # \u65f6\u533a\u5dee\uff0c\u4ee5\u5c0f\u65f6\u4e3a\u5355\u4f4d\uff0c\u5317\u4eac\u65f6\u95f4\u4e3a8\nroles: ["role_name"] # \u7528\u6237\u5c5e\u4e8e\u7684\u6240\u6709\u6743\u9650\u96c6\nspace:\n  _id: i6thCRrKWYmdjxpzt # \u5f53\u524d\u5de5\u4f5c\u533aId\n  name: Apple # \u5f53\u524d\u5de5\u4f5c\u533a\u540d\u79f0\nis_space_admin: true # \u662f\u5426\u662f\u5f53\u524d\u5de5\u4f5c\u533a\u7ba1\u7406\u5458\nspaces: [space] # \u6570\u7ec4\uff0c\u7528\u6237\u6240\u5c5e\u7684\u6240\u6709\u5de5\u4f5c\u533a\ncompany:\n  _id: i6thCRrKWYmdjxpzt # \u7528\u6237\u6240\u5c5e\u4e3b\u5206\u90e8\n  name: Apple China # \u7528\u6237\u6240\u5c5e\u4e3b\u5206\u90e8\u540d\u79f0\n  organization: xxx # \u7528\u6237\u6240\u5c5e\u4e3b\u5206\u90e8\u5173\u8054\u7ec4\u7ec7id\ncompanies: [company] # \u6570\u7ec4\uff0c\u7528\u6237\u6240\u5c5e\u7684\u6240\u6709\u5206\u90e8\ncompany_id: "xxx" # \u7528\u6237\u6240\u5c5e\u4e3b\u5206\u90e8id\u503c\ncompany_ids: ["xxx"] # \u6570\u7ec4\uff0c\u7528\u6237\u6240\u5c5e\u7684\u6240\u6709\u5206\u90e8id\u503c\norganization:\n  _id: i6thCRrKWYmdjxpzt\n  name: Sales # \u7528\u6237\u6240\u5c5e\u90e8\u95e8\n  fullname: Apple China/Sales # \u7528\u6237\u6240\u5c5e\u90e8\u95e8\u7684\u5168\u79f0\n  company_id: xxx # \u7528\u6237\u6240\u5c5e\u90e8\u95e8\u5173\u8054\u5206\u90e8id\norganizations: [organization] # \u6570\u7ec4\uff0c\u7528\u6237\u6240\u5c5e\u7684\u6240\u6709\u90e8\u95e8\n')),Object(l.b)("h3",{id:"header-\u8fd4\u56de\u7ed3\u679c"},"Header \u8fd4\u56de\u7ed3\u679c"),Object(l.b)("p",null,"Header \u8fd4\u56de X-Space-Token\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"X-Space-Token: i6thCRrKWYmdjxpzt,392mkylUmFyNTRLR3aSTbsyM287On8bTULh-GDO1sH_\n")),Object(l.b)("h3",{id:"cookie-\u8fd4\u56de\u7ed3\u679c"},"Cookie \u8fd4\u56de\u7ed3\u679c"),Object(l.b)("p",null,"\u5982\u679c\u4ece\u6d4f\u89c8\u5668\u767b\u5f55\uff0c\u81ea\u52a8\u4e3a\u6d4f\u89c8\u5668\u8bbe\u7f6e\u4ee5\u4e0b Cookie\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"X-User-Id: dL4KFkLSqqGAozZ6C\nX-Auth-Token: 392mkylUmFyNTRLR3aSTbsyM287On8bTULh-GDO1sH_\nX-Space-Id: i6thCRrKWYmdjxpzt\nX-Space-Token: i6thCRrKWYmdjxpzt,392mkylUmFyNTRLR3aSTbsyM287On8bTULh-GDO1sH_\n")),Object(l.b)("h2",{id:"\u9a8c\u8bc1\u767b\u5f55\u72b6\u6001"},"\u9a8c\u8bc1\u767b\u5f55\u72b6\u6001"),Object(l.b)("p",null,"\u8fd9\u91cc\u6d4b\u8bd5\u8c03\u7528 validate \u63a5\u53e3\uff0c\u9a8c\u8bc1\u7528\u6237\u662f\u5426\u767b\u5f55\uff0c\u5982\u679c\u7528\u6237\u5df2\u767b\u5f55\uff0c\u5219\u8fd4\u56de\u7528\u6237\u57fa\u672c\u4fe1\u606f\u3002"),Object(l.b)("h3",{id:"url-1"},"URL"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"POST 'http://localhost:5000/api/v4/users/validate'\n")),Object(l.b)("h3",{id:"\u8bf7\u6c42\u53c2\u6570-1"},"\u8bf7\u6c42\u53c2\u6570"),Object(l.b)("p",null,"\u901a\u8fc7 Header Authorization \u4f20\u5165 cookie \u4e2d X-Space-Token \u7684\u503c\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"Authorization: Bearer i6thCRrKWYmdjx...bsyM287On8bTULh-GDO1sH_\n")),Object(l.b)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),Object(l.b)("p",null,"\u5982\u679c\u5f53\u524d\u7528\u6237\u5df2\u767b\u5f55\uff0c\u5219\u8fd4\u56de userContext\u3002"))}b.isMDXComponent=!0},504:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=b(n),s=a,m=d["".concat(c,".").concat(s)]||d[s]||u[s]||l;return n?r.a.createElement(m,o(o({ref:t},p),{},{components:n})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<l;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);