(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{219:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return d}));var a=t(1),r=t(9),i=(t(0),t(402)),l={title:"\u7f16\u8f91"},p={id:"developer/api/graphql_edit",title:"\u7f16\u8f91",description:"### \u5728graphql\u754c\u9762\u4e2d\u7f16\u8f91\u6570\u636e",source:"@site/../docs/developer/api/graphql_edit.md",permalink:"/developer/api/graphql_edit",sidebar:"\u534e\u708e\u4e91API",previous:{title:"\u65b0\u589e",permalink:"/developer/api/graphql_add"},next:{title:"\u5220\u9664",permalink:"/developer/api/graphql_delete"}},o=[{value:"\u5728graphql\u754c\u9762\u4e2d\u7f16\u8f91\u6570\u636e",id:"\u5728graphql\u754c\u9762\u4e2d\u7f16\u8f91\u6570\u636e",children:[]}],c={rightToc:o},u="wrapper";function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u5728graphql\u754c\u9762\u4e2d\u7f16\u8f91\u6570\u636e"},"\u5728graphql\u754c\u9762\u4e2d\u7f16\u8f91\u6570\u636e"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u540d\u683c\u5f0f\u4e3a\uff1a {\u5b9a\u4e49\u7684object.name}_UPDATE_ONE"),Object(i.b)("li",{parentName:"ul"},"\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"_id:String\u7c7b\u578b"),Object(i.b)("li",{parentName:"ul"},"data:JSON\u7c7b\u578b"))),Object(i.b)("li",{parentName:"ul"},"\u5982\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  organizations_UPDATE_ONE(_id:"5cb98489d09a343e14daae95", data:{name:"\u8d22\u52a1\u90e8"})\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7ed3\u679c\u8fd4\u56de\u66f4\u65b0\u540e\u7684\u6570\u636e\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "organizations_INSERT_ONE": {\n      "name": "\u8d22\u52a1\u90e8",\n      "_id": "5cb98489d09a343e14daae95"\n    }\n  }\n}\n')))}d.isMDXComponent=!0},402:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a),i=r.a.createContext({}),l=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},p=function(e){var n=l(e.components);return r.a.createElement(i.Provider,{value:n},e.children)};var o="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,o=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,b=u[p+"."+d]||u[d]||c[d]||i;return t?r.a.createElement(b,Object.assign({},{ref:n},o,{components:t})):r.a.createElement(b,Object.assign({},{ref:n},o))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[o]="string"==typeof e?e:a,l[1]=p;for(var d=2;d<i;d++)l[d]=t[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);