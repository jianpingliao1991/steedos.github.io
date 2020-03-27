(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{286:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(1),a=t(9),i=(t(0),t(401)),c={title:"\u63d2\u4ef6\u914d\u7f6e"},s={id:"plugins/plugin_config",title:"\u63d2\u4ef6\u914d\u7f6e",description:"## \u63d2\u4ef6\u57fa\u672c\u4fe1\u606f",source:"@site/../docs/plugins/plugin_config.md",permalink:"/plugins/plugin_config",sidebar:"\u534e\u708e\u4e91\u5e73\u53f0",previous:{title:"Web App \u63d2\u4ef6",permalink:"/plugins/plugin_webapp"}},p=[{value:"\u63d2\u4ef6\u57fa\u672c\u4fe1\u606f",id:"\u63d2\u4ef6\u57fa\u672c\u4fe1\u606f",children:[]},{value:"\u63d2\u4ef6\u53c2\u6570",id:"\u63d2\u4ef6\u53c2\u6570",children:[{value:"\u6570\u636e\u6e90 datasources",id:"\u6570\u636e\u6e90-datasources",children:[]},{value:"\u670d\u52a1\u7aef\u5165\u53e3 server",id:"\u670d\u52a1\u7aef\u5165\u53e3-server",children:[]},{value:"\u5ba2\u6237\u7aef\u5165\u53e3 webapp",id:"\u5ba2\u6237\u7aef\u5165\u53e3-webapp",children:[]},{value:"\u914d\u7f6e settings_schema",id:"\u914d\u7f6e-settings_schema",children:[]},{value:"\u5c5e\u6027 props",id:"\u5c5e\u6027-props",children:[]}]}],o={rightToc:p},l="wrapper";function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(l,Object(r.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u63d2\u4ef6\u57fa\u672c\u4fe1\u606f"},"\u63d2\u4ef6\u57fa\u672c\u4fe1\u606f"),Object(i.b)("p",null,"\u63d2\u4ef6\u540d\u79f0\u3001\u7248\u672c\u7b49\u4fe1\u606f\u5728 package.json \u4e2d\u5b9a\u4e49\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "steedos-plugin-test",\n  "description": "Test plugin",\n  "version": "0.0.1",\n}\n')),Object(i.b)("h2",{id:"\u63d2\u4ef6\u53c2\u6570"},"\u63d2\u4ef6\u53c2\u6570"),Object(i.b)("p",null,"\u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6\u4fdd\u5b58\u5728\u63d2\u4ef6\u6839\u76ee\u5f55\u7684 plugin.config.yml"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"datasources:\n  mattermost:\n    objectFiles: \n     - ./src/**\nserver:\n  main: index.js\nwebapp:\n  main: webapp/dist/main.js\n  css: webapp/dist/main.css\nsettings_schema:\n  header: Some header text\n  footer: Some footer text\n  settings:\n    - key: somekey\n      display_name: Enable Extra Feature\n      type: boolean\n      help_text: When true, an extra feature will be enabled!\n      default: false\nprops:\n  somekey:\n")),Object(i.b)("h3",{id:"\u6570\u636e\u6e90-datasources"},"\u6570\u636e\u6e90 datasources"),Object(i.b)("p",null,"\u63cf\u8ff0\u672c\u63d2\u4ef6\u5f15\u7528\u5230\u7684\u7b2c\u4e09\u65b9\u6570\u636e\u6e90\u3002\u9879\u76ee\u4e2d\u5f15\u7528\u6b64\u63d2\u4ef6\u65f6\uff0c\u5fc5\u987b\u914d\u7f6e\u76f8\u5173\u7684\u6570\u636e\u6e90\u3002"),Object(i.b)("h3",{id:"\u670d\u52a1\u7aef\u5165\u53e3-server"},"\u670d\u52a1\u7aef\u5165\u53e3 server"),Object(i.b)("p",null,"\u670d\u52a1\u7aef\u7684\u5165\u53e3\u6587\u4ef6\uff0c\u5176\u4e2d\u5fc5\u987b\u5bfc\u51fa init \u51fd\u6570\u3002"),Object(i.b)("h3",{id:"\u5ba2\u6237\u7aef\u5165\u53e3-webapp"},"\u5ba2\u6237\u7aef\u5165\u53e3 webapp"),Object(i.b)("p",null,"\u5ba2\u6237\u7aef\u7684\u5165\u53e3\u6587\u4ef6\uff0c\u53ef\u4ee5\u4e3aSteedos\u5ba2\u6237\u7aef\u52a0\u8f7d\u989d\u5916\u7684Javascript\u548cCSS\u6587\u4ef6\u3002"),Object(i.b)("h3",{id:"\u914d\u7f6e-settings_schema"},"\u914d\u7f6e settings_schema"),Object(i.b)("p",null,"\u5b9a\u4e49\u63d2\u4ef6\u53c2\u6570\u7684\u683c\u5f0f\uff0c\u4fbf\u4e8e\u7ba1\u7406\u5458\u5728\u754c\u9762\u4e0a\u914d\u7f6e\u63d2\u4ef6\u53c2\u6570\u3002"),Object(i.b)("h3",{id:"\u5c5e\u6027-props"},"\u5c5e\u6027 props"),Object(i.b)("p",null,"\u5728\u6b64\u63cf\u8ff0\u63d2\u4ef6\u7684\u9ed8\u8ba4\u5c5e\u6027\u3002\u5f15\u7528\u63d2\u4ef6\u65f6\uff0csteedos-config.yml \u6587\u4ef6\u4e2d\u914d\u7f6e\u7684\u5c5e\u6027\u4f1a\u8986\u76d6\u8fd9\u91cc\u7684\u9ed8\u8ba4\u5c5e\u6027\uff0c\u800c\u7ba1\u7406\u5458\u5728\u754c\u9762\u4e0a\u914d\u7f6e\u7684\u5c5e\u6027\u5219\u4f18\u5148\u7ea7\u6700\u9ad8\u3002"))}u.isMDXComponent=!0},401:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r),i=a.a.createContext({}),c=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},s=function(e){var n=c(e.components);return a.a.createElement(i.Provider,{value:n},e.children)};var p="mdxType",o={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},l=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),l=c(t),u=r,d=l[s+"."+u]||l[u]||o[u]||i;return t?a.a.createElement(d,Object.assign({},{ref:n},p,{components:t})):a.a.createElement(d,Object.assign({},{ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=l;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:r,c[1]=s;for(var u=2;u<i;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);