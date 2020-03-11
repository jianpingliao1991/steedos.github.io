(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{261:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(6),r=(n(0),n(270)),c={title:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883"},i={id:"developer/install",title:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883",description:"Steedos\u9879\u76ee\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u9ed8\u8ba4\u4f7f\u7528MongoDB\u6570\u636e\u5e93\u3002\u60a8\u53ef\u4ee5\u5728 Windows\u3001Mac \u6216 Linux \u73af\u5883\u4e2d\u521b\u5efa\u3001\u5f00\u53d1\u548c\u8fd0\u884cSteedos\u9879\u76ee\u3002\r",source:"@site/../docs/developer/install.md",permalink:"/docs/developer/install",sidebar:"\u5f00\u53d1",previous:{title:"\u4f7f\u7528 Steedos \u6784\u5efa\u5c5e\u4e8e\u60a8\u81ea\u5df1\u7684\u51fa\u8272\u5e94\u7528\u7a0b\u5e8f",permalink:"/docs/developer/home"},next:{title:"\u521b\u5efa\u9879\u76ee",permalink:"/docs/developer/guide_create"}},d=[{value:"\u5b89\u88c5NodeJS",id:"\u5b89\u88c5nodejs",children:[]},{value:"\u5b89\u88c5\u6570\u636e\u5e93\u670d\u52a1\u5668",id:"\u5b89\u88c5\u6570\u636e\u5e93\u670d\u52a1\u5668",children:[]},{value:"\u5b89\u88c5 yarn \u5305\u7ba1\u7406\u5de5\u5177",id:"\u5b89\u88c5-yarn-\u5305\u7ba1\u7406\u5de5\u5177",children:[]},{value:"\u5b89\u88c5 steedos \u5ba2\u6237\u7aef\u5de5\u5177",id:"\u5b89\u88c5-steedos-\u5ba2\u6237\u7aef\u5de5\u5177",children:[]},{value:"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177 (\u53ef\u9009)",id:"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177-\u53ef\u9009",children:[]},{value:"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177 (\u53ef\u9009)",id:"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177-\u53ef\u9009",children:[]}],l={rightToc:d},s="wrapper";function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(s,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Steedos\u9879\u76ee\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u9ed8\u8ba4\u4f7f\u7528MongoDB\u6570\u636e\u5e93\u3002\u60a8\u53ef\u4ee5\u5728 Windows\u3001Mac \u6216 Linux \u73af\u5883\u4e2d\u521b\u5efa\u3001\u5f00\u53d1\u548c\u8fd0\u884cSteedos\u9879\u76ee\u3002"),Object(r.b)("h2",{id:"\u5b89\u88c5nodejs"},"\u5b89\u88c5NodeJS"),Object(r.b)("p",null,"\u8bf7\u5b89\u88c5\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u5bf9\u5e94\u7684 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/dist/latest-v10.x/"}),"NodeJS v10.x \u7248\u672c")," \uff0c\u5177\u4f53\u64cd\u4f5c\u8bf7\u53c2\u8003 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/zh-cn/download/package-manager/"}),"\u901a\u8fc7\u5305\u7ba1\u7406\u5668\u65b9\u5f0f\u5b89\u88c5Node.js")),Object(r.b)("h2",{id:"\u5b89\u88c5\u6570\u636e\u5e93\u670d\u52a1\u5668"},"\u5b89\u88c5\u6570\u636e\u5e93\u670d\u52a1\u5668"),Object(r.b)("p",null,"\u8bf7\u5b89\u88c5 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.mongodb.com/download-center/community"}),"MongoDB Community Server v3.6 \u7248\u672c"),"\uff0c\u5177\u4f53\u64cd\u4f5c\u8bf7\u53c2\u8003 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.mongodb.com/manual/administration/install-community/"}),"Install MongoDB Community Edition"),"\uff0c\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u8bf7\u542f\u52a8mongodb\u670d\u52a1\u3002"),Object(r.b)("h2",{id:"\u5b89\u88c5-yarn-\u5305\u7ba1\u7406\u5de5\u5177"},"\u5b89\u88c5 yarn \u5305\u7ba1\u7406\u5de5\u5177"),Object(r.b)("p",null,"yarn \u662f Facebook \u5f00\u53d1\u7684 Nodejs \u5305\u7ba1\u7406\u5de5\u5177\uff08\u66ff\u4ee3npm\uff09\uff0c\u53ef\u4ee5\u66f4\u5feb\u901f\u66f4\u7a33\u5b9a\u7684\u4e3a\u9879\u76ee\u5b89\u88c5\u4f9d\u8d56\u5305\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm i yarn -g\n")),Object(r.b)("h2",{id:"\u5b89\u88c5-steedos-\u5ba2\u6237\u7aef\u5de5\u5177"},"\u5b89\u88c5 steedos \u5ba2\u6237\u7aef\u5de5\u5177"),Object(r.b)("p",null,"steedos\u5ba2\u6237\u7aef\u5de5\u5177\u7528\u4e8e\u521b\u5efa\u548c\u8fd0\u884c\u9879\u76ee\uff0c\u8fd8\u53ef\u4ee5\u4ece\u73b0\u6709\u6570\u636e\u5e93\u81ea\u52a8\u5bfc\u5165\u521d\u59cb\u4e1a\u52a1\u5bf9\u8c61\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm i --global steedos-cli\n")),Object(r.b)("h2",{id:"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177-\u53ef\u9009"},"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177 (\u53ef\u9009)"),Object(r.b)("p",null,"\u8bf7\u5b89\u88c5 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://desktop.github.com/"}),"Github Desktop"),"\uff0c\u7528\u4e8e\u7ba1\u7406\u9879\u76ee\u6e90\u7801\u3002\u5982\u679c\u60a8\u8fd8\u6ca1\u6709Github\u8d26\u6237\uff0c\u5efa\u8bae\u60a8\u5148\u6ce8\u518c\u4e00\u4e2a\u3002"),Object(r.b)("h2",{id:"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177-\u53ef\u9009"},"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177 (\u53ef\u9009)"),Object(r.b)("p",null,"\u8bf7\u5b89\u88c5 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code"),"\u3002\u5e76\u5b89\u88c5 Steedos \u96c6\u6210\u63d2\u4ef6",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"}),"redhat.vscode-yaml"),"\uff0c\u60a8\u5728\u7f16\u5199\u914d\u7f6e\u6587\u4ef6\u65f6\u5982\u679c\u6709\u8bed\u6cd5\u9519\u8bef\uff0cVisual Studio Code \u4f1a\u81ea\u52a8\u63d0\u793a\u3002"))}p.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a),r=o.a.createContext({}),c=function(e){var t=o.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=c(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=c(n),p=a,b=s[i+"."+p]||s[p]||l[p]||r;return n?o.a.createElement(b,Object.assign({},{ref:t},d,{components:n})):o.a.createElement(b,Object.assign({},{ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<r;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);