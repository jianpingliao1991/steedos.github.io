(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{399:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return p})),o.d(t,"metadata",(function(){return a})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return s}));var r=o(3),n=o(7),c=(o(0),o(504)),p={title:"Docker \u5b89\u88c5"},a={unversionedId:"help/deploy/deploy_docker",id:"help/deploy/deploy_docker",isDocsHomePage:!1,title:"Docker \u5b89\u88c5",description:"\u672c\u6559\u7a0b\u4ee5 steedos-project-template\u4e3a\u4f8b\uff0c\u6307\u5bfc\u4f60\u4f7f\u7528 docker-compose \u542f\u52a8\u9879\u76ee\u3002",source:"@site/../docs/help/deploy/deploy_docker.md",slug:"/help/deploy/deploy_docker",permalink:"/help/deploy/deploy_docker",version:"current",sidebar:"\u6587\u6863",previous:{title:"Mac \u5b89\u88c5",permalink:"/help/deploy/deploy_mac"},next:{title:"\u96c6\u7fa4\u90e8\u7f72",permalink:"/help/deploy/deploy_cluster"}},l=[{value:"\u4f7f\u7528 Docker Compose \u542f\u52a8\u670d\u52a1",id:"\u4f7f\u7528-docker-compose-\u542f\u52a8\u670d\u52a1",children:[]},{value:"docker-compose.yml \u6587\u4ef6\u89e3\u8bfb",id:"docker-composeyml-\u6587\u4ef6\u89e3\u8bfb",children:[]},{value:"\u4e86\u89e3\u66f4\u591a",id:"\u4e86\u89e3\u66f4\u591a",children:[]}],b={toc:l};function s(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u672c\u6559\u7a0b\u4ee5 ",Object(c.b)("a",{parentName:"p",href:"https://github.com/steedos/steedos-project-template"},"steedos-project-template"),"\u4e3a\u4f8b\uff0c\u6307\u5bfc\u4f60\u4f7f\u7528 ",Object(c.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker-compose")," \u542f\u52a8\u9879\u76ee\u3002"),Object(c.b)("h2",{id:"\u4f7f\u7528-docker-compose-\u542f\u52a8\u670d\u52a1"},"\u4f7f\u7528 Docker Compose \u542f\u52a8\u670d\u52a1"),Object(c.b)("p",null,"\u786e\u4fdd\u672c\u5730\u5df2\u5b89\u88c5",Object(c.b)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"docker"),"\u548c",Object(c.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker-compose")),Object(c.b)("p",null,"\u4e0b\u8f7d\u793a\u4f8b\u6587\u4ef6",Object(c.b)("a",{parentName:"p",href:"https://github.com/steedos/steedos-project-template/blob/master/docker-compose.yml"},"docker-compose.yml"),"(\u552f\u4e00\u9700\u8981\u7684\u6587\u4ef6)\u5230\u672c\u5730\u5e76\u7f16\u8f91:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7f16\u8f91 environment \u4e2d\u7684 ROOT_URL \u4ee5\u5339\u914d\u60a8\u7684\u57df\u540d\u6216 IP \u5730\u5740")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u914d\u7f6e environment \u7684\u76ee\u7684\u662f\u670d\u52a1\u4e8e",Object(c.b)("a",{parentName:"p",href:"/help/deploy/steedos-config"},"steedos-config.yml"))),Object(c.b)("p",null,"\u5230\u521a\u4e0b\u8f7d\u7684",Object(c.b)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u6587\u4ef6\u6240\u5728\u76ee\u5f55\u542f\u52a8\u670d\u52a1\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8fd9\u5c06\u4f1a\u542f\u52a8\u4e00\u4e2a mongodb \u6570\u636e\u5e93\u670d\u52a1\u548c\u4e00\u4e2a node \u5e94\u7528\u670d\u52a1\uff0c\u542f\u52a8\u597d\u4e4b\u540e\u53ef\u4f7f\u7528\u914d\u7f6e\u7684 ROOT_URL \u5730\u5740\u8bbf\u95ee\u670d\u52a1")),Object(c.b)("p",null,"\u505c\u6b62\u670d\u52a1\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"docker-compose stop\n")),Object(c.b)("h2",{id:"docker-composeyml-\u6587\u4ef6\u89e3\u8bfb"},"docker-compose.yml \u6587\u4ef6\u89e3\u8bfb"),Object(c.b)("p",null,"\u7cfb\u7edf\u4e2d\u4e0a\u4f20\u7684\u9644\u4ef6\u3001\u5934\u50cf\u7b49\u6587\u4ef6\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"./docker-volumes/steedos/storage")," \u4e0b\uff0c\u6570\u636e\u5e93\u6587\u4ef6\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"./docker-volumes/mongo/data/db")," \u4e0b\uff0c\u8fd9\u6837\u670d\u52a1\u505c\u6b62\u540e\u518d\u6b21\u542f\u52a8\u6570\u636e\u4e0d\u4f1a\u4e22\u5931"),Object(c.b)("p",null,"environment \u4e2d\u7684\u73af\u5883\u53d8\u91cf\u53ef\u6839\u636e\u9700\u8981\u53c2\u8003",Object(c.b)("a",{parentName:"p",href:"/help/deploy/steedos-config"},"steedos-config.yml"),"\u914d\u7f6e\u8c03\u6574"),Object(c.b)("h2",{id:"\u4e86\u89e3\u66f4\u591a"},"\u4e86\u89e3\u66f4\u591a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.steedos.com/videos/"},"\u89c6\u9891")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.steedos.com/help/deploy/"},"\u5b89\u88c5\u90e8\u7f72")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.steedos.com/help/admin"},"\u8bbe\u7f6e\u4e0e\u7ef4\u62a4\u534e\u708e\u9b54\u65b9")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.steedos.com/developer"},"\u5f00\u53d1\u6587\u6863")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/steedos/steedos-platform/"},"\u534e\u708e\u9b54\u65b9\u5e73\u53f0\u6e90\u7801"))))}s.isMDXComponent=!0},504:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return u}));var r=o(0),n=o.n(r);function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){c(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(o),m=r,u=d["".concat(p,".").concat(m)]||d[m]||i[m]||c;return o?n.a.createElement(u,a(a({ref:t},b),{},{components:o})):n.a.createElement(u,a({ref:t},b))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=o.length,p=new Array(c);p[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,p[1]=a;for(var b=2;b<c;b++)p[b]=o[b];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);