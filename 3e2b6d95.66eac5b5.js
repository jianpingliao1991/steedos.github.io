(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(6),c=(n(0),n(410)),a={title:"\u4ec0\u4e48\u662f ObjectQL\uff1f"},l={id:"developer/objectql",title:"\u4ec0\u4e48\u662f ObjectQL\uff1f",description:"ObjectQL\u662f\u4e00\u79cd\u8de8\u6570\u636e\u5e93\u7684\u67e5\u8be2\u8bed\u6cd5\uff0c\u76ee\u524d\u652f\u6301 MongoDB\u3001MySQL\u3001PostgreSQL\u3001SQL Server\u3001Oracle \u6570\u636e\u5e93\u3002\r",source:"@site/..\\docs\\developer\\objectql.md",permalink:"/developer/objectql"},i=[{value:"\u67e5\u8be2\u8bed\u6cd5",id:"\u67e5\u8be2\u8bed\u6cd5",children:[]}],p={rightToc:i};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"ObjectQL\u662f\u4e00\u79cd\u8de8\u6570\u636e\u5e93\u7684\u67e5\u8be2\u8bed\u6cd5\uff0c\u76ee\u524d\u652f\u6301 MongoDB\u3001MySQL\u3001PostgreSQL\u3001SQL Server\u3001Oracle \u6570\u636e\u5e93\u3002"),Object(c.b)("p",null,"ObjectQL \u4f7f\u7528 steedos-config.yml \u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u3002\u4f7f\u7528createConnection\u53ef\u4ee5\u83b7\u53d6\u6570\u636e\u5e93\u8fde\u63a5\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import {createConnection} from "@steedos/objectql";\n\ncreateConnection(\'default\').then(async connection => {\n\n    let post = {\n        name: "Hello how are you?",\n        body: "hello",\n        likesCount: 100\n    }\n    let postObject = connection.getObject("post");\n\n    postObject\n        .insert(post)\n        .then(post => console.log("Post has been saved: ", post));\n\n    connection.close();\n\n}, error => console.log("Cannot connect: ", error));\n\n')),Object(c.b)("h2",{id:"\u67e5\u8be2\u8bed\u6cd5"},"\u67e5\u8be2\u8bed\u6cd5"),Object(c.b)("p",null,"\u6309\u6307\u5b9a\u6761\u4ef6\u67e5\u8be2\u8bb0\u5f55\uff0c\u5e76\u8fd4\u56de\u8bb0\u5f55\u6570\u7ec4\u3002\u672a\u627e\u5230\u65f6\u8fd4\u56de\u7a7a\u6570\u7ec4[]\u3002"),Object(c.b)("p",null,"\u67e5\u8be2\u6761\u4ef6\u5305\u62ec\u4ee5\u4e0b\u53c2\u6570\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"fields: \u5b57\u6bb5\u540d\u6570\u7ec4"),Object(c.b)("li",{parentName:"ul"},"filters: \u67e5\u8be2\u6761\u4ef6\u6570\u7ec4"),Object(c.b)("li",{parentName:"ul"},"sort: \u6392\u5e8f\u89c4\u5219"),Object(c.b)("li",{parentName:"ul"},"top: \u8fd4\u56de\u8bb0\u5f55\u6570"),Object(c.b)("li",{parentName:"ul"},"skip: \u8df3\u8fc7\u8bb0\u5f55\u6570\uff0c\u901a\u5e38\u7528\u4e8e\u5206\u9875\u663e\u793a\u3002")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"  const posts = await connection.getObject(\"posts\").find({\n      fields: ['name', 'body', 'likesCount'],\n      filters: [['likesCount', '>', 10], ['likesCount', '<', 20]],\n      top: 20,\n      skip: 0,\n      sort: 'likesCount desc'\n  });\n  // SELECT TOP 20 name, body, likesCount\n  // FROM posts\n  // WHERE likesCount > 10 AND likesCount < 20\n  // ORDER BY likesCount desc\n")))}s.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),O=r,f=u["".concat(a,".").concat(O)]||u[O]||b[O]||c;return n?o.a.createElement(f,l({ref:t},p,{components:n})):o.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=O;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<c;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);