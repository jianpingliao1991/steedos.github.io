(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{1093:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/robo3t01-d06336ffb0dd431fa84932620073294b.png"},1094:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/robo3t02-554dda442fa930dc535e63ee7338e61a.png"},1095:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/robo3t03-26706cc9dfabcbd87fa27c5a8d1a00cf.png"},1096:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/robo3t04-aefdb7ab46b336c25716cfca7f8f830a.png"},1097:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/robo3t05-bfbf97aeeea13c8565fe4f5bf4975d56.png"},1098:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/robo3t06-1b4b8aec1ba4a1f1c1dabe271b7488d5.png"},1099:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/robo3t07-eaae647cb8b2818b6485d24c0ab02647.png"},1100:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/robo3t08-01e4ef4083581c7ec8fb6a6403330bc0.png"},1101:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/robo3t09-e21706763418f645296e869867bbea72.png"},464:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return i}));var n=r(1),a=r(6),o=(r(0),r(496)),c={title:"MongoDB\u53ef\u89c6\u5316\u5de5\u5177--Robo 3T \u4f7f\u7528\u6559\u7a0b"},l={unversionedId:"developer/install/robo3t_tutorial",id:"developer/install/robo3t_tutorial",isDocsHomePage:!1,title:"MongoDB\u53ef\u89c6\u5316\u5de5\u5177--Robo 3T \u4f7f\u7528\u6559\u7a0b",description:"1\u3001\u6253\u5f00Robo 3T\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684 create\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5\uff0c\u7ed9\u8be5\u8fde\u63a5\u8d77\u4e2a\u540d\u5b57\uff0c\u5982\uff1alocalhost, \u4f7f\u7528\u9ed8\u8ba4\u5730\u5740 localhost \u548c \u7aef\u53e327017 \u5373\u53ef\uff0c\u70b9\u51fbsave\u4fdd\u5b58\u3002\u5982\u4e0b\u56fe\u6240\u793a",source:"@site/../docs/developer/install/robo3t_tutorial.md",slug:"/developer/install/robo3t_tutorial",permalink:"/developer/install/robo3t_tutorial",version:"current"},b=[{value:"1\u3001\u6253\u5f00Robo 3T\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684 create\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5\uff0c\u7ed9\u8be5\u8fde\u63a5\u8d77\u4e2a\u540d\u5b57\uff0c\u5982\uff1alocalhost, \u4f7f\u7528\u9ed8\u8ba4\u5730\u5740 localhost \u548c \u7aef\u53e327017 \u5373\u53ef\uff0c\u70b9\u51fbsave\u4fdd\u5b58\u3002\u5982\u4e0b\u56fe\u6240\u793a",id:"1\u3001\u6253\u5f00robo-3t\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684-create\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5\uff0c\u7ed9\u8be5\u8fde\u63a5\u8d77\u4e2a\u540d\u5b57\uff0c\u5982\uff1alocalhost-\u4f7f\u7528\u9ed8\u8ba4\u5730\u5740-localhost-\u548c-\u7aef\u53e327017-\u5373\u53ef\uff0c\u70b9\u51fbsave\u4fdd\u5b58\u3002\u5982\u4e0b\u56fe\u6240\u793a",children:[]},{value:"2\u3001\u70b9\u51fb\u4fdd\u5b58\u540e\uff0c\u5c31\u4f1a\u5728\u754c\u9762\u770b\u5230\u5982\u4e0b\u56fe\u6240\u793a",id:"2\u3001\u70b9\u51fb\u4fdd\u5b58\u540e\uff0c\u5c31\u4f1a\u5728\u754c\u9762\u770b\u5230\u5982\u4e0b\u56fe\u6240\u793a",children:[]},{value:"3\u3001\u53cc\u51fb localhost \u8fde\u63a5\u5230 MongoDB \u5e76\u8fdb\u5165\u4ea4\u4e92\u754c\u9762; \u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u672c\u5730\u6570\u636e\u5e93\u7684\u8868\u4fe1\u606f\u5982\u4e0b\uff1a",id:"3\u3001\u53cc\u51fb-localhost-\u8fde\u63a5\u5230-mongodb-\u5e76\u8fdb\u5165\u4ea4\u4e92\u754c\u9762-\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u672c\u5730\u6570\u636e\u5e93\u7684\u8868\u4fe1\u606f\u5982\u4e0b\uff1a",children:[]},{value:"4\u3001\u53f3\u952e\u6570\u636e\u5e93\u6253\u5f00Shell",id:"4\u3001\u53f3\u952e\u6570\u636e\u5e93\u6253\u5f00shell",children:[]},{value:"5\u3001\u6279\u91cf\u63d2\u5165\uff08\u9ed8\u8ba4\u662f\u4e0d\u652f\u6279\u91cf\u64cd\u4f5c\uff0c\u53ea\u80fd\u7528for\u5faa\u73af\uff09",id:"5\u3001\u6279\u91cf\u63d2\u5165\uff08\u9ed8\u8ba4\u662f\u4e0d\u652f\u6279\u91cf\u64cd\u4f5c\uff0c\u53ea\u80fd\u7528for\u5faa\u73af\uff09",children:[]},{value:"6\u3001\u67e5\u8be2\u6570\u636e",id:"6\u3001\u67e5\u8be2\u6570\u636e",children:[]}],s={rightToc:b};function i(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"1\u3001\u6253\u5f00robo-3t\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684-create\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5\uff0c\u7ed9\u8be5\u8fde\u63a5\u8d77\u4e2a\u540d\u5b57\uff0c\u5982\uff1alocalhost-\u4f7f\u7528\u9ed8\u8ba4\u5730\u5740-localhost-\u548c-\u7aef\u53e327017-\u5373\u53ef\uff0c\u70b9\u51fbsave\u4fdd\u5b58\u3002\u5982\u4e0b\u56fe\u6240\u793a"},"1\u3001\u6253\u5f00Robo 3T\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684 create\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5\uff0c\u7ed9\u8be5\u8fde\u63a5\u8d77\u4e2a\u540d\u5b57\uff0c\u5982\uff1alocalhost, \u4f7f\u7528\u9ed8\u8ba4\u5730\u5740 localhost \u548c \u7aef\u53e327017 \u5373\u53ef\uff0c\u70b9\u51fbsave\u4fdd\u5b58\u3002\u5982\u4e0b\u56fe\u6240\u793a"),Object(o.b)("p",null,Object(o.b)("img",{alt:"subscription",src:r(1093).default})),Object(o.b)("h3",{id:"2\u3001\u70b9\u51fb\u4fdd\u5b58\u540e\uff0c\u5c31\u4f1a\u5728\u754c\u9762\u770b\u5230\u5982\u4e0b\u56fe\u6240\u793a"},"2\u3001\u70b9\u51fb\u4fdd\u5b58\u540e\uff0c\u5c31\u4f1a\u5728\u754c\u9762\u770b\u5230\u5982\u4e0b\u56fe\u6240\u793a"),Object(o.b)("p",null,Object(o.b)("img",{alt:"subscription",src:r(1094).default})),Object(o.b)("h3",{id:"3\u3001\u53cc\u51fb-localhost-\u8fde\u63a5\u5230-mongodb-\u5e76\u8fdb\u5165\u4ea4\u4e92\u754c\u9762-\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u672c\u5730\u6570\u636e\u5e93\u7684\u8868\u4fe1\u606f\u5982\u4e0b\uff1a"},"3\u3001\u53cc\u51fb localhost \u8fde\u63a5\u5230 MongoDB \u5e76\u8fdb\u5165\u4ea4\u4e92\u754c\u9762; \u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u672c\u5730\u6570\u636e\u5e93\u7684\u8868\u4fe1\u606f\u5982\u4e0b\uff1a"),Object(o.b)("p",null,Object(o.b)("img",{alt:"subscription",src:r(1095).default})),Object(o.b)("h3",{id:"4\u3001\u53f3\u952e\u6570\u636e\u5e93\u6253\u5f00shell"},"4\u3001\u53f3\u952e\u6570\u636e\u5e93\u6253\u5f00Shell"),Object(o.b)("p",null,Object(o.b)("img",{alt:"subscription",src:r(1096).default})),Object(o.b)("h3",{id:"5\u3001\u6279\u91cf\u63d2\u5165\uff08\u9ed8\u8ba4\u662f\u4e0d\u652f\u6279\u91cf\u64cd\u4f5c\uff0c\u53ea\u80fd\u7528for\u5faa\u73af\uff09"},"5\u3001\u6279\u91cf\u63d2\u5165\uff08\u9ed8\u8ba4\u662f\u4e0d\u652f\u6279\u91cf\u64cd\u4f5c\uff0c\u53ea\u80fd\u7528for\u5faa\u73af\uff09"),Object(o.b)("p",null,"\u5728\u521a\u521a\u6253\u5f00\u7684shell\u7a97\u53e3\u8f93\u5165\u5982\u4e0b\u4ee3\u7801, \u5982\u4e0b\u6240\u793a\uff1a"),Object(o.b)("p",null,Object(o.b)("img",{alt:"subscription",src:r(1097).default})),Object(o.b)("p",null,"\u6570\u636e\u63d2\u5165\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u518d\u6765\u770b\u4e0b\u6570\u636e\u5e93\u4f1a\u65b0\u589e\u4e0a\u9762\u51e0\u6761\u6570\u636e\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),Object(o.b)("p",null,Object(o.b)("img",{alt:"subscription",src:r(1098).default})),Object(o.b)("h3",{id:"6\u3001\u67e5\u8be2\u6570\u636e"},"6\u3001\u67e5\u8be2\u6570\u636e"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"6.1\u3001\u6839\u636e\u67e5\u8be2\u6761\u4ef6\u6765\u67e5\u8be2\u6570\u636e\uff0c\u5982\u4e0b\u65b9\u6cd5\u6240\u793a\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"{<\u5b57\u6bb5\u540d>:<\u5b57\u6bb5\u503c>}\n")),Object(o.b)("p",null,"\u67e5\u8be2\u8bed\u53e5\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"})," db.users.find({userName: 'longen---0'});\n")),Object(o.b)("p",null,"\u5982\u4e0b\u6240\u793a\uff1a"),Object(o.b)("p",null,Object(o.b)("img",{alt:"subscription",src:r(1099).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"6.2\u3001\u53ef\u4ee5\u5728\u67e5\u8be2\u9009\u62e9\u5668\u4e2d\u6307\u5b9a\u9700\u8981\u67e5\u8be2\u7684\u5b57\u6bb5\u5e76\u9650\u5b9a\u5b57\u6bb5\u503c\u7684\u8303\u56f4\uff0c\u5982\u4e0b\u65b9\u6cd5\u6240\u793a\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"{<\u5b57\u6bb5\u540d>:{$in:[<\u5b57\u6bb5\u503c1>,<\u5b57\u6bb5\u503c2>...]}}\n")),Object(o.b)("p",null,"\u5982\u4e0b\u6240\u793a\uff1a"),Object(o.b)("p",null,Object(o.b)("img",{alt:"subscription",src:r(1100).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"6.3\u3001\u6307\u5b9a\u591a\u4e2a\u5b57\u6bb5\u8fdb\u884c\u67e5\u8be2")),Object(o.b)("p",null,"\u73b0\u5728\u6211\u4eec\u6765\u67e5\u8be2\u8fd9\u4e9b\u6570\u636e\u4e2d type \u5b57\u6bb5\u503c\u7b49\u4e8e 'food', \u4e14 price\u5b57\u6bb5\u503c\u5c0f\u4e8e10\u7684\u6570\u636e\uff0c\u5982\u4e0b\u4ee3\u7801\u6240\u793a\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"db.users.find({type:'food', price:{$lt:10}});\n")),Object(o.b)("p",null,"\u5982\u4e0b\u6240\u793a\uff1a"),Object(o.b)("p",null,Object(o.b)("img",{alt:"subscription",src:r(1101).default})),Object(o.b)("p",null,"\u7b49\u7b49\uff0c\u67e5\u8be2\u8bed\u53e5\u548cmongodb\u67e5\u8be2\u8bed\u53e5\u7c7b\u578b\u76f8\u540c\u3002"))}i.isMDXComponent=!0},496:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),i=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},u=function(e){var t=i(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=i(r),f=n,d=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return r?a.a.createElement(d,l({ref:t},s,{components:r})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);