(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{376:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return s}));var o=r(1),c=r(6),n=(r(0),r(403)),a={title:"Docker \u90e8\u7f72"},p={id:"developer/deploy_docker",title:"Docker \u90e8\u7f72",description:"\u672c\u6559\u7a0b\u4ee5 [steedos-project-oa](https://github.com/steedos/steedos-project-oa)\u4e3a\u4f8b\uff0c\u6307\u5bfc\u4f60\u5982\u4f55\u5c06\u9879\u76ee\u7f16\u8bd1\u6210\u955c\u50cf\u53d1\u5e03\u81f3[docker hub](https://hub.docker.com/)\u5e76\u4f7f\u7528 [docker-compose](https://docs.docker.com/compose/install/) \u542f\u52a8\u9879\u76ee\u3002\r",source:"@site/../docs/developer/deploy_docker.md",permalink:"/developer/deploy_docker",sidebar:"Steedos \u90e8\u7f72\u6587\u6863",previous:{title:"Heroku \u90e8\u7f72",permalink:"/developer/deploy_heroku"},next:{title:"\u96c6\u7fa4\u90e8\u7f72",permalink:"/developer/deploy_cluster"}},b=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[]},{value:"\u514b\u9686\u9879\u76ee",id:"\u514b\u9686\u9879\u76ee",children:[]},{value:"\u53d1\u5e03\u8fc7\u7a0b",id:"\u53d1\u5e03\u8fc7\u7a0b",children:[]},{value:"\u4f7f\u7528 docker-compose \u542f\u52a8\u670d\u52a1",id:"\u4f7f\u7528-docker-compose-\u542f\u52a8\u670d\u52a1",children:[{value:"\u542f\u52a8\u6570\u636e\u5e93\u670d\u52a1",id:"\u542f\u52a8\u6570\u636e\u5e93\u670d\u52a1",children:[]},{value:"\u542f\u52a8\u5e94\u7528\u670d\u52a1",id:"\u542f\u52a8\u5e94\u7528\u670d\u52a1",children:[]}]}],l={rightToc:b};function s(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"\u672c\u6559\u7a0b\u4ee5 ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/steedos/steedos-project-oa"}),"steedos-project-oa"),"\u4e3a\u4f8b\uff0c\u6307\u5bfc\u4f60\u5982\u4f55\u5c06\u9879\u76ee\u7f16\u8bd1\u6210\u955c\u50cf\u53d1\u5e03\u81f3",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/"}),"docker hub"),"\u5e76\u4f7f\u7528 ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"docker-compose")," \u542f\u52a8\u9879\u76ee\u3002"),Object(n.b)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),Object(n.b)("p",null,"\u6ce8\u518c",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.docker.com/"}),"docker"),"\u8d26\u53f7\uff0c\u5982\uff1aexampleUsername"),Object(n.b)("p",null,"\u5b89\u88c5 docker",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/get-docker/"}),"\u547d\u4ee4\u884c\u5de5\u5177"),"\uff0c \u6839\u636e\u64cd\u4f5c\u7cfb\u7edf\u9009\u62e9\u5b89\u88c5"),Object(n.b)("p",null,"\u7ec8\u7aef\u767b\u5f55 docker \u8d26\u53f7\uff1a"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"docker login\n")),Object(n.b)("p",null,"\u5b89\u88c5",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"docker-compose")),Object(n.b)("h2",{id:"\u514b\u9686\u9879\u76ee"},"\u514b\u9686\u9879\u76ee"),Object(n.b)("p",null,"\u8bf7\u8bbf\u95ee ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/steedos/steedos-project-oa"}),"https://github.com/steedos/steedos-project-oa")," \u5148\u5728\u9879\u76ee\u4e3b\u9875\u53f3\u4e0a\u89d2\u70b9 ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://help.github.com/en/github/getting-started-with-github/fork-a-repo"}),"Fork")," \u9879\u76ee\uff0c\u7136\u540e\u5c06\u5df2\u7ecf fork \u5230\u81ea\u5df1\u8d26\u53f7\u4e0b\u7684\u9879\u76ee clone \u5230\u672c\u5730\uff0c\u4ee5\u4fbf\u63d0\u4ea4\u4fee\u6539\uff1a"),Object(n.b)("p",null,Object(n.b)("img",Object(o.a)({parentName:"p"},{src:"/assets/windows/clone%E9%A1%B9%E7%9B%AE.png",alt:"clone\u9879\u76ee"}))),Object(n.b)("h2",{id:"\u53d1\u5e03\u8fc7\u7a0b"},"\u53d1\u5e03\u8fc7\u7a0b"),Object(n.b)("p",null,"\u8fdb\u5165\u672c\u5730 steedos-project-oa \u9879\u76ee\u76ee\u5f55\uff1a"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"cd steedos-project-oa\n")),Object(n.b)("p",null,"\u6d4f\u89c8\u5668\u8bbf\u95ee",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/"}),"docker hub"),"\uff0c\u5e76\u4f7f\u7528\u521a\u521a\u6ce8\u518c\u7684\u8d26\u53f7\u767b\u5f55\uff0c\u70b9\u51fb",Object(n.b)("inlineCode",{parentName:"p"},"Create Repository"),"\u6309\u94ae\uff1a"),Object(n.b)("p",null,Object(n.b)("img",Object(o.a)({parentName:"p"},{src:"/assets/docker/%E6%96%B0%E5%BB%BA%E6%A0%88.png",alt:"\u65b0\u5efa\u6808"}))),Object(n.b)("p",null,"\u65b0\u5efa Repository \u540d\u79f0\u5982\uff1asteedos-project-oa"),Object(n.b)("p",null,"\u7f16\u8bd1\u955c\u50cf\uff1a"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"docker build -t exampleUsername@steedos-project-oa:tagname\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"tagname \u53ef\u4ee5\u662f 1.0\u30012.0 \u7b49\u81ea\u5b9a\u4e49\u53ef\u660e\u786e\u8868\u793a\u7248\u672c\u7684\u5b57\u7b26\uff0cbuild \u547d\u4ee4",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/commandline/build/"}),"\u6587\u6863"))),Object(n.b)("p",null,"\u5c06\u955c\u50cf\u63a8\u9001\u81f3 docker hub\uff1a"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"docker push exampleUsername@steedos-project-oa:tagname\n")),Object(n.b)("p",null,"\u63a8\u9001\u5b8c\u6210\u4e4b\u540e\u53ef\u5728",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/"}),"docker hub"),"\u9875\u9762\u770b\u5230\u955c\u50cf"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"\u53ef\u4f7f\u7528",Object(n.b)("inlineCode",{parentName:"p"},"docker pull exampleUsername@steedos-project-oa:tagname"),"\u62c9\u53d6\u955c\u50cf\u5230\u672c\u5730")),Object(n.b)("h2",{id:"\u4f7f\u7528-docker-compose-\u542f\u52a8\u670d\u52a1"},"\u4f7f\u7528 docker-compose \u542f\u52a8\u670d\u52a1"),Object(n.b)("h3",{id:"\u542f\u52a8\u6570\u636e\u5e93\u670d\u52a1"},"\u542f\u52a8\u6570\u636e\u5e93\u670d\u52a1"),Object(n.b)("p",null,"\u4f7f\u7528 mongodb ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/_/mongo"}),"\u5b98\u65b9\u955c\u50cf"),"\u542f\u52a8\u6570\u636e\u5e93\u670d\u52a1\uff0c\u4f8b\u5982\uff1a"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"docker run --name mongo -d mongo:4.2\n")),Object(n.b)("h3",{id:"\u542f\u52a8\u5e94\u7528\u670d\u52a1"},"\u542f\u52a8\u5e94\u7528\u670d\u52a1"),Object(n.b)("p",null,"\u8fdb\u5165",Object(n.b)("inlineCode",{parentName:"p"},"steedos-project-oa"),"\u9879\u76ee\u76ee\u5f55\uff0c\u914d\u7f6e\u597d",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.steedos.com/developer/env"}),".env.local"),"\u6587\u4ef6\u542f\u52a8\u5e94\u7528\u670d\u52a1\uff1a"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up -d\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"\u914d\u7f6e.env.local \u7684\u76ee\u7684\u662f\u670d\u52a1\u4e8e",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.steedos.com/developer/steedos_config"}),"steedos-config.yml"))))}s.isMDXComponent=!0},403:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var o=r(0),c=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,o,c=function(e,t){if(null==e)return{};var r,o,c={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),s=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},d=function(e){var t=s(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},i=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,a=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=s(r),i=o,m=d["".concat(a,".").concat(i)]||d[i]||u[i]||n;return r?c.a.createElement(m,p({ref:t},l,{components:r})):c.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=i;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<n;l++)a[l]=r[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}i.displayName="MDXCreateElement"}}]);