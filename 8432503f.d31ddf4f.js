(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{274:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(1),l=n(6),c=(n(0),n(480)),r={title:"Steedos CLI",sidebar_label:"\u6982\u8ff0"},b={unversionedId:"dx/setup_guide",id:"dx/setup_guide",isDocsHomePage:!1,title:"Steedos CLI",description:"\u6211\u4eec\u63d0\u4f9b\u7684\u4e00\u4e2a\u5de5\u5177\u662f\u7075\u6d3b\u800c\u5f3a\u5927\u7684 Steedos \u547d\u4ee4\u884c\u63a5\u53e3 \uff08CLI\uff09\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 CLI \u4ece\u547d\u4ee4\u884c\u7ba1\u7406\u5305\u5f00\u53d1\u8fc7\u7a0b\u3002CLI \u7ed3\u5408\u4e86\u6765\u81ea\u591a\u4e2a Steedos API \u7684\u8bb8\u591a\u529f\u80fd\uff0c\u4f8b\u5982\u5143\u6570\u636e API\u3001\u5de5\u5177 API \u548c\u6570\u636e \uff08SOAP\uff09 API\u3002\u5b83\u8fd8\u652f\u6301 Ant \u8fc1\u79fb\u5de5\u5177\u7684\u529f\u80fd\uff0c\u8be5\u5de5\u5177\u5141\u8bb8\u7f16\u5199\u5143\u6570\u636e\u4efb\u52a1\u7684\u811a\u672c\u3002\u501f\u52a9\u65b0\u7684\u548c\u6539\u8fdb\u7684 CLI\uff0c\u6240\u6709\u91cd\u8981 API \u7684\u6240\u6709\u5f00\u53d1\u4efb\u52a1\u90fd\u53ef\u5728\u4e00\u4e2a\u4f4d\u7f6e\u63d0\u4f9b\u3002\u60a8\u53ef\u4ee5\u7f16\u5199\u4ece\u7ec4\u7ec7\u521b\u5efa\u5230\u6570\u636e\u5bfc\u5165\u548c\u5bfc\u51fa\u7684\u6240\u6709\u5185\u5bb9\uff0c\u8fd9\u4e9b\u5185\u5bb9\u662f\u7ba1\u7406\u6574\u4e2a\u5f00\u53d1\u751f\u547d\u5468\u671f\u6240\u9700\u7684\u4e00\u5207\u3002\u60f3\u60f3\u4f60\u53ef\u4ee5\u521b\u5efa\u7684\u6240\u6709\u5f88\u9177\u7684\u811a\u672c\uff0c\u4f7f\u91cd\u590d\u5f00\u53d1\u4efb\u52a1\u66f4\u5bb9\u6613\uff01",source:"@site/../docs/dx/setup_guide.md",slug:"/dx/setup_guide",permalink:"/dx/setup_guide",version:"current",sidebar_label:"\u6982\u8ff0"},o=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"\u524d\u671f\u51c6\u5907",id:"\u524d\u671f\u51c6\u5907",children:[]},{value:"\u5b89\u88c5\u547d\u4ee4",id:"\u5b89\u88c5\u547d\u4ee4",children:[]},{value:"\u9a8c\u8bc1\u5b89\u88c5",id:"\u9a8c\u8bc1\u5b89\u88c5",children:[]}]},{value:"\u914d\u7f6e\u548c\u63d0\u793a",id:"\u914d\u7f6e\u548c\u63d0\u793a",children:[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"\u63d0\u793a",id:"\u63d0\u793a",children:[]}]},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",children:[{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",children:[]}]}],i={rightToc:o};function u(e){var t=e.components,r=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u6211\u4eec\u63d0\u4f9b\u7684\u4e00\u4e2a\u5de5\u5177\u662f\u7075\u6d3b\u800c\u5f3a\u5927\u7684 Steedos \u547d\u4ee4\u884c\u63a5\u53e3 \uff08CLI\uff09\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 CLI \u4ece\u547d\u4ee4\u884c\u7ba1\u7406\u5305\u5f00\u53d1\u8fc7\u7a0b\u3002CLI \u7ed3\u5408\u4e86\u6765\u81ea\u591a\u4e2a Steedos API \u7684\u8bb8\u591a\u529f\u80fd\uff0c\u4f8b\u5982\u5143\u6570\u636e API\u3001\u5de5\u5177 API \u548c\u6570\u636e \uff08SOAP\uff09 API\u3002\u5b83\u8fd8\u652f\u6301 Ant \u8fc1\u79fb\u5de5\u5177\u7684\u529f\u80fd\uff0c\u8be5\u5de5\u5177\u5141\u8bb8\u7f16\u5199\u5143\u6570\u636e\u4efb\u52a1\u7684\u811a\u672c\u3002\u501f\u52a9\u65b0\u7684\u548c\u6539\u8fdb\u7684 CLI\uff0c\u6240\u6709\u91cd\u8981 API \u7684\u6240\u6709\u5f00\u53d1\u4efb\u52a1\u90fd\u53ef\u5728\u4e00\u4e2a\u4f4d\u7f6e\u63d0\u4f9b\u3002\u60a8\u53ef\u4ee5\u7f16\u5199\u4ece\u7ec4\u7ec7\u521b\u5efa\u5230\u6570\u636e\u5bfc\u5165\u548c\u5bfc\u51fa\u7684\u6240\u6709\u5185\u5bb9\uff0c\u8fd9\u4e9b\u5185\u5bb9\u662f\u7ba1\u7406\u6574\u4e2a\u5f00\u53d1\u751f\u547d\u5468\u671f\u6240\u9700\u7684\u4e00\u5207\u3002\u60f3\u60f3\u4f60\u53ef\u4ee5\u521b\u5efa\u7684\u6240\u6709\u5f88\u9177\u7684\u811a\u672c\uff0c\u4f7f\u91cd\u590d\u5f00\u53d1\u4efb\u52a1\u66f4\u5bb9\u6613\uff01"),Object(c.b)("p",null,Object(c.b)("img",{alt:"subscription",src:n(887).default})),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u63d0\u793a")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u4f01\u4e1a\u7248\u7684\u624d\u53ef\u4ee5\u4f7f\u7528Steedos CLI\u76f8\u5173\u529f\u80fd\uff0c\u8bf7\u63d0\u524d\u5347\u7ea7\u4e3a\u4f01\u4e1a\u7248\u3002"))),Object(c.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(c.b)("h3",{id:"\u524d\u671f\u51c6\u5907"},"\u524d\u671f\u51c6\u5907"),Object(c.b)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u4f7f\u7528 Steedos CLI\uff0c\u8bf7\u60a8\u5728\u5f00\u59cb\u4e4b\u524d\u68c0\u67e5\u662f\u5426\u7b26\u5408\u4ee5\u4e0b\u8981\u6c42\uff0c\u5982\u4e0d\u7b26\u8bf7\u5148\u5347\u7ea7\u7248\u672c\uff0c\u518d\u8fdb\u884c\u540e\u7eed\u64cd\u4f5c"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Steedos Platform 1.23 +"),Object(c.b)("li",{parentName:"ul"},"Mongodb 4.2 +")),Object(c.b)("h3",{id:"\u5b89\u88c5\u547d\u4ee4"},"\u5b89\u88c5\u547d\u4ee4"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6253\u5f00\u7ec8\u7aef\u6216\u547d\u4ee4\u63d0\u793a\u7b26\u7a97\u53e3\uff0c\u4f7f\u7528npm\u5b89\u88c5")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"npm install steedos-cli@next --global\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6216\u4f7f\u7528 yarn \u5b89\u88c5")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"yarn global add  steedos-cli@next\n")),Object(c.b)("h3",{id:"\u9a8c\u8bc1\u5b89\u88c5"},"\u9a8c\u8bc1\u5b89\u88c5"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6253\u5f00\u7ec8\u7aef\u6216\u547d\u4ee4\u63d0\u793a\u7b26\u7a97\u53e3\uff0c\u8fd0\u884c\u6b64\u547d\u4ee4")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"steedos --version\n")),Object(c.b)("p",null,"\u5c55\u793a\u7ed3\u679c\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"steedos-cli/1.23.0-alpha.7 win32-x64 node-v12.20.0\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8fd0\u884csteedos\u547d\u4ee4\uff0c\u53ef\u4ee5\u67e5\u770bSteedos CLI\u6240\u5305\u542b\u7684\u6240\u6709\u547d\u4ee4")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"steedos\n")),Object(c.b)("p",null,"\u5c55\u793a\u7ed3\u679c\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"COMMANDS \n  auth\n  convert  Create steedos project object i18n\n  data\n  help     display help for steedos\n  i18n     Create steedos project object i18n\n  package\n  source\n")),Object(c.b)("h2",{id:"\u914d\u7f6e\u548c\u63d0\u793a"},"\u914d\u7f6e\u548c\u63d0\u793a"),Object(c.b)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u901a\u8fc7source:config\u547d\u4ee4\u6765\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u4f1a\u81ea\u52a8\u751f\u6210.env.local\u6587\u4ef6")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"steedos source:config\n")),Object(c.b)("p",null,"\u5c55\u793a\u7ed3\u679c(\u53ef\u81ea\u884c\u8bbe\u7f6e\u4e0e\u4fee\u6539\u76f8\u5173\u914d\u7f6e\uff0c\u5177\u4f53\u64cd\u4f5c\u89c1\u4e0b\u6587):"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"metadata server:(http://localhost:5000/)\nmetadata api key:OwOFMQOcRilzJpu0Q8ix0XOZjiJAT_B_CklKc6XULVe\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4ee5\u4e0b\u4e3a.env.local\u6587\u4ef6\u4e2d\u5185\u5bb9\uff0c\u5982\u679c\u9700\u8981\u66f4\u6539METADATA_SERVER\u503c\uff0c\u53ef\u81ea\u884c\u4fee\u6539")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"[metadata]\nMETADATA_SERVER=http://localhost:5000/\nMETADATA_APIKEY=OwOFMQOcRilzJpu0Q8ix0XOZjiJAT_B_CklKc6XULVe\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5176\u4e2d\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"METADATA_SERVER  \u9ed8\u8ba4\u662flocalhost:5000\nMETADATA_APIKEY  \u53ef\u901a\u8fc7\u672c\u5730\u670d\u52a1\u83b7\u53d6\u5230 APIKEY\n")),Object(c.b)("p",null,Object(c.b)("img",{alt:"subscription",src:n(557).default})),Object(c.b)("h3",{id:"\u63d0\u793a"},"\u63d0\u793a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5728\u6bcf\u4e2a\u7ea7\u5c42\u4e2d\u90fd\u53ef\u4ee5\u901a\u8fc7help\u6765\u67e5\u770b\u66f4\u591a\u4fe1\u606f")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"steedos --help                    // \u9876\u7ea7\u5217\u8868\nsteedos source --help             // source\u5305\u542b\u7684\u6240\u6709\u547d\u4ee4\u5217\u8868\nsteedos package --help            // package\u5305\u542b\u7684\u6240\u6709\u547d\u4ee4\u5217\u8868\nsteedos source:deploy --help      // source:deploy\u547d\u4ee4\u7684\u8be6\u60c5\nsteedos package:build --help      // package:build\u547d\u4ee4\u7684\u8be6\u60c5\n")),Object(c.b)("h2",{id:"\u66f4\u65b0"},"\u66f4\u65b0"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u901a\u8fc7npm\u66f4\u65b0Steedos CLI\uff0c\u8bf7\u8fd0\u884c\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"npm install steedos-cli@next -global\n")),Object(c.b)("h3",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5f53\u672a\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u65f6\u4f1a\u6709\u5982\u4e0b\u9519\u8bef\u63d0\u9192")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"Error: Please config with steedos source:config\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5f53\u6ca1\u6709\u8d2d\u4e70\u8bb8\u53ef\u8bc1\u6216\u9700\u8981\u5347\u7ea7\u8bb8\u53ef\u8bc1\u65f6\u4f1a\u6709\u5982\u4e0b\u63d0\u9192")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"Error: Please upgrade the platform license to Enterprise Edition\n")))}u.isMDXComponent=!0},480:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),l=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=l.a.createContext({}),u=function(e){var t=l.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},s=function(e){var t=u(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,O=s["".concat(r,".").concat(d)]||s[d]||p[d]||c;return n?l.a.createElement(O,b({ref:t},i,{components:n})):l.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var i=2;i<c;i++)r[i]=n[i];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},557:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/API_key-6d79794d52194df5289627ba5f82f0d1.gif"},887:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/dx04-76c3d70631f6bbe1feea7ae90deb16be.png"}}]);