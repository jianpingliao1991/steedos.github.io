(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(1),a=t(6),c=(t(0),t(198)),i={title:"\u63d2\u4ef6\u914d\u7f6e"},o={id:"plugins/plugin_config",title:"\u63d2\u4ef6\u914d\u7f6e",description:"## \u63d2\u4ef6\u57fa\u672c\u4fe1\u606f",source:"@site/..\\docs\\plugins\\plugin_config.md",permalink:"/docs/plugins/plugin_config",sidebar:"\u5f00\u53d1",previous:{title:"Web App \u63d2\u4ef6",permalink:"/docs/plugins/plugin_webapp"}},p=[{value:"\u63d2\u4ef6\u57fa\u672c\u4fe1\u606f",id:"\u63d2\u4ef6\u57fa\u672c\u4fe1\u606f",children:[]},{value:"\u63d2\u4ef6\u53c2\u6570",id:"\u63d2\u4ef6\u53c2\u6570",children:[{value:"\u6570\u636e\u6e90 datasources",id:"\u6570\u636e\u6e90-datasources",children:[]},{value:"\u670d\u52a1\u7aef\u5165\u53e3 server",id:"\u670d\u52a1\u7aef\u5165\u53e3-server",children:[]},{value:"\u5ba2\u6237\u7aef\u5165\u53e3 webapp",id:"\u5ba2\u6237\u7aef\u5165\u53e3-webapp",children:[]},{value:"\u914d\u7f6e settings_schema",id:"\u914d\u7f6e-settings_schema",children:[]},{value:"\u5c5e\u6027 props",id:"\u5c5e\u6027-props",children:[]}]}],s={rightToc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u63d2\u4ef6\u57fa\u672c\u4fe1\u606f"},"\u63d2\u4ef6\u57fa\u672c\u4fe1\u606f"),Object(c.b)("p",null,"\u63d2\u4ef6\u540d\u79f0\u3001\u7248\u672c\u7b49\u4fe1\u606f\u5728 package.json \u4e2d\u5b9a\u4e49\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "steedos-plugin-test",\n  "description": "Test plugin",\n  "version": "0.0.1",\n}\n')),Object(c.b)("h2",{id:"\u63d2\u4ef6\u53c2\u6570"},"\u63d2\u4ef6\u53c2\u6570"),Object(c.b)("p",null,"\u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6\u4fdd\u5b58\u5728\u63d2\u4ef6\u6839\u76ee\u5f55\u7684 plugin.config.yml"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"datasources:\n  mattermost:\n    objectFiles: \n     - ./src/**\nserver:\n  main: index.js\nwebapp:\n  main: webapp/dist/main.js\n  css: webapp/dist/main.css\nsettings_schema:\n  header: Some header text\n  footer: Some footer text\n  settings:\n    - key: somekey\n      display_name: Enable Extra Feature\n      type: boolean\n      help_text: When true, an extra feature will be enabled!\n      default: false\nprops:\n  somekey:\n")),Object(c.b)("h3",{id:"\u6570\u636e\u6e90-datasources"},"\u6570\u636e\u6e90 datasources"),Object(c.b)("p",null,"\u63cf\u8ff0\u672c\u63d2\u4ef6\u5f15\u7528\u5230\u7684\u7b2c\u4e09\u65b9\u6570\u636e\u6e90\u3002\u9879\u76ee\u4e2d\u5f15\u7528\u6b64\u63d2\u4ef6\u65f6\uff0c\u5fc5\u987b\u914d\u7f6e\u76f8\u5173\u7684\u6570\u636e\u6e90\u3002"),Object(c.b)("h3",{id:"\u670d\u52a1\u7aef\u5165\u53e3-server"},"\u670d\u52a1\u7aef\u5165\u53e3 server"),Object(c.b)("p",null,"\u670d\u52a1\u7aef\u7684\u5165\u53e3\u6587\u4ef6\uff0c\u5176\u4e2d\u5fc5\u987b\u5bfc\u51fa init \u51fd\u6570\u3002"),Object(c.b)("h3",{id:"\u5ba2\u6237\u7aef\u5165\u53e3-webapp"},"\u5ba2\u6237\u7aef\u5165\u53e3 webapp"),Object(c.b)("p",null,"\u5ba2\u6237\u7aef\u7684\u5165\u53e3\u6587\u4ef6\uff0c\u53ef\u4ee5\u4e3aSteedos\u5ba2\u6237\u7aef\u52a0\u8f7d\u989d\u5916\u7684Javascript\u548cCSS\u6587\u4ef6\u3002"),Object(c.b)("h3",{id:"\u914d\u7f6e-settings_schema"},"\u914d\u7f6e settings_schema"),Object(c.b)("p",null,"\u5b9a\u4e49\u63d2\u4ef6\u53c2\u6570\u7684\u683c\u5f0f\uff0c\u4fbf\u4e8e\u7ba1\u7406\u5458\u5728\u754c\u9762\u4e0a\u914d\u7f6e\u63d2\u4ef6\u53c2\u6570\u3002"),Object(c.b)("h3",{id:"\u5c5e\u6027-props"},"\u5c5e\u6027 props"),Object(c.b)("p",null,"\u5728\u6b64\u63cf\u8ff0\u63d2\u4ef6\u7684\u9ed8\u8ba4\u5c5e\u6027\u3002\u5f15\u7528\u63d2\u4ef6\u65f6\uff0csteedos-config.yml \u6587\u4ef6\u4e2d\u914d\u7f6e\u7684\u5c5e\u6027\u4f1a\u8986\u76d6\u8fd9\u91cc\u7684\u9ed8\u8ba4\u5c5e\u6027\uff0c\u800c\u7ba1\u7406\u5458\u5728\u754c\u9762\u4e0a\u914d\u7f6e\u7684\u5c5e\u6027\u5219\u4f18\u5148\u7ea7\u6700\u9ad8\u3002"))}l.isMDXComponent=!0},198:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||c;return t?a.a.createElement(f,o({ref:n},s,{components:t})):a.a.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);