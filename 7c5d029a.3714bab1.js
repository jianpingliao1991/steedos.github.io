(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{272:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return p}));var n=t(1),c=t(6),a=(t(0),t(496)),o={title:"\u547d\u4ee4\u6307\u5357"},l={unversionedId:"dx/command_reference",id:"dx/command_reference",isDocsHomePage:!1,title:"\u547d\u4ee4\u6307\u5357",description:"source\u547d\u4ee4",source:"@site/../docs/dx/command_reference.md",slug:"/dx/command_reference",permalink:"/dx/command_reference",version:"current"},i=[{value:"source\u547d\u4ee4",id:"source\u547d\u4ee4",children:[{value:"source:retrieve",id:"sourceretrieve",children:[]},{value:"source:deploy",id:"sourcedeploy",children:[]},{value:"source:convert",id:"sourceconvert",children:[]},{value:"source:config",id:"sourceconfig",children:[]}]},{value:"package\u547d\u4ee4",id:"package\u547d\u4ee4",children:[{value:"package:build",id:"packagebuild",children:[]}]},{value:"i18n",id:"i18n",children:[{value:"steedos:i18n",id:"steedosi18n",children:[]}]}],u={rightToc:i};function p(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"source\u547d\u4ee4"},"source\u547d\u4ee4"),Object(a.b)("p",null,"\u4f7f\u7528source\u547d\u4ee4\u53ef\u4ee5\u5b9e\u73b0\u6e90\u6570\u636e\u548c\u975e\u6e90\u6570\u636e\u7684\u53cc\u5411\u540c\u6b65, \u540c\u65f6\u672c\u5730\u5c06\u751f\u6210\u6e90\u683c\u5f0f\u7684\u5143\u6570\u636e\u6587\u4ef6\u3002"),Object(a.b)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u8fd0\u884c--help\u6765\u83b7\u53d6source\u547d\u4ee4\u7684\u66f4\u591a\u4fe1\u606f"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"steedos source --help\n")),Object(a.b)("p",null,"\u5c55\u793a\u7ed3\u679c\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"USAGE\n  $ steedos source:COMMAND\nCOMMANDS\n  source:config\n  source:convert\n  source:delete\n  source:deploy      \n  source:retrieve  \n")),Object(a.b)("h3",{id:"sourceretrieve"},"source:retrieve"),Object(a.b)("p",null,"\u4ece\u670d\u52a1\u5668\u83b7\u53d6\u6e90\u683c\u5f0f\u7684\u5143\u6570\u636e\u5e76\u4e0b\u8f7d\u5230\u672c\u5730steedos DX\u9879\u76ee\u4e2d\uff0c\u8be5\u547d\u4ee4\u4f1a\u76f4\u63a5\u8986\u76d6\u6389\u60a8\u672c\u5730\u7684\u6587\u4ef6\u3002"),Object(a.b)("p",null,"\u8be6\u89c1 - ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/dx/data_synchronization"}),"\u6570\u636e\u540c\u6b65")),Object(a.b)("h3",{id:"sourcedeploy"},"source:deploy"),Object(a.b)("p",null,"\u5c06\u672c\u5730\u6587\u4ef6\u90e8\u7f72\u5230\u670d\u52a1\u5668"),Object(a.b)("p",null,"\u8be6\u89c1 - ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/dx/data_synchronization"}),"\u6570\u636e\u540c\u6b65")),Object(a.b)("h3",{id:"sourceconvert"},"source:convert"),Object(a.b)("p",null,"\u5c06\u65e7\u6587\u4ef6\u683c\u5f0f\u8f6c\u5316\u5e76\u672c\u5730\u751f\u6210metadata\u8981\u6c42\u7684\u65b0\u683c\u5f0fyml\u6587\u4ef6"),Object(a.b)("p",null,"\u8be6\u89c1 - ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/dx/convert_project"}),"\u9879\u76ee\u8f6c\u5316")),Object(a.b)("h3",{id:"sourceconfig"},"source:config"),Object(a.b)("p",null,"\u914d\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u540c\u65f6\u4f1a\u751f\u6210.env.local\u6587\u4ef6\uff0c\u4e00\u822c\u5728\u5b89\u88c5 Steedos CLI \u65f6\u5df2\u914d\u7f6e"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"steedos source:config\nmetadata server:(http://localhost:5000/)\nmetadata api key:OwOFMQOcRilzJpu0Q8ix0XOZjiJAT_B_CklKc6XULVe\n")),Object(a.b)("p",null,"\u5176\u4e2d\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"METADATA_SERVER  \u9ed8\u8ba4\u662fhttp://localhost:5000/\nMETADATA_APIKEY  \u53ef\u901a\u8fc7\u672c\u5730\u670d\u52a1\u4e2d\u7684\u4e2a\u4eba\u8d26\u6237\u8bbe\u7f6e\u4e2d\u83b7\u53d6\u5230 APIKEY\n")),Object(a.b)("h2",{id:"package\u547d\u4ee4"},"package\u547d\u4ee4"),Object(a.b)("h3",{id:"packagebuild"},"package:build"),Object(a.b)("p",null,"\u5c06\u672c\u5730\u6587\u4ef6\u6253\u5305\u6210.package"),Object(a.b)("p",null,"\u8be6\u89c1 - ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/dx/command_package"}),"\u9879\u76ee\u6253\u5305")),Object(a.b)("h2",{id:"i18n"},"i18n"),Object(a.b)("h3",{id:"steedosi18n"},"steedos:i18n"),Object(a.b)("p",null,"\u8be6\u89c1 - ","[\u56fd\u9645\u5316\u6587\u4ef6]","(/dx/command_ internation)"))}p.isMDXComponent=!0},496:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return O}));var n=t(0),c=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var u=c.a.createContext({}),p=function(e){var r=c.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l({},r,{},e)),t},b=function(e){var r=p(e.components);return c.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},s=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(t),s=n,O=b["".concat(o,".").concat(s)]||b[s]||d[s]||a;return t?c.a.createElement(O,l({ref:r},u,{components:t})):c.a.createElement(O,l({ref:r},u))}));function O(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=s;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);