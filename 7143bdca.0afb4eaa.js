(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{161:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(1),l=t(6),a=(t(0),t(252)),i={title:"\u4f7f\u7528 Steedos \u6784\u5efa\u5c5e\u4e8e\u60a8\u81ea\u5df1\u7684\u51fa\u8272\u5e94\u7528\u7a0b\u5e8f",sidebar_label:"\u7b80\u4ecb"},o={id:"developer/index",title:"\u4f7f\u7528 Steedos \u6784\u5efa\u5c5e\u4e8e\u60a8\u81ea\u5df1\u7684\u51fa\u8272\u5e94\u7528\u7a0b\u5e8f",description:"\u534e\u708e\u5e94\u7528\u5f15\u64ce (Steedos App Engine) \u662f\u65b0\u4e00\u4ee3\u4eba\u5de5\u667a\u80fd\u5f00\u53d1\u5de5\u5177\uff0c\u5f00\u53d1\u4eba\u5458\u53ea\u9700\u63cf\u8ff0\u4e1a\u52a1\u9700\u6c42\uff0c\u806a\u660e\u7684\u534e\u708e\u5c31\u80fd\u7406\u89e3\u5e76\u8fd0\u884c\u4f60\u7684\u4e1a\u52a1\u3002\r",source:"@site/..\\docs\\developer\\index.md",permalink:"/docs/developer/index",sidebar_label:"\u7b80\u4ecb",sidebar:"\u5f00\u53d1",next:{title:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Windows)",permalink:"/docs/developer/guide"}},c=[{value:"\u63cf\u8ff0\u4e1a\u52a1\u5bf9\u8c61",id:"\u63cf\u8ff0\u4e1a\u52a1\u5bf9\u8c61",children:[]},{value:"\u81ea\u52a8\u751f\u6210\u5e94\u7528\u7cfb\u7edf",id:"\u81ea\u52a8\u751f\u6210\u5e94\u7528\u7cfb\u7edf",children:[]}],b={rightToc:c};function u(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u534e\u708e\u5e94\u7528\u5f15\u64ce (Steedos App Engine) \u662f\u65b0\u4e00\u4ee3\u4eba\u5de5\u667a\u80fd\u5f00\u53d1\u5de5\u5177\uff0c\u5f00\u53d1\u4eba\u5458\u53ea\u9700\u63cf\u8ff0\u4e1a\u52a1\u9700\u6c42\uff0c\u806a\u660e\u7684\u534e\u708e\u5c31\u80fd\u7406\u89e3\u5e76\u8fd0\u884c\u4f60\u7684\u4e1a\u52a1\u3002"),Object(a.b)("h2",{id:"\u63cf\u8ff0\u4e1a\u52a1\u5bf9\u8c61"},"\u63cf\u8ff0\u4e1a\u52a1\u5bf9\u8c61"),Object(a.b)("p",null,"\u534e\u708e\u5e94\u7528\u5f15\u64ce\u901a\u8fc7\u4e1a\u52a1\u5bf9\u8c61\u914d\u7f6e\u6587\u4ef6\u63cf\u8ff0\u4e1a\u52a1\u9700\u6c42\u3002\u5305\u62ec"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4e1a\u52a1\u5bf9\u8c61\u540d\u79f0"),Object(a.b)("li",{parentName:"ul"},"\u529f\u80fd\u5f00\u5173"),Object(a.b)("li",{parentName:"ul"},"\u5b57\u6bb5"),Object(a.b)("li",{parentName:"ul"},"\u5217\u8868\u89c6\u56fe"),Object(a.b)("li",{parentName:"ul"},"\u7528\u6237\u6743\u9650")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'name: accounts\nlabel: \u5355\u4f4d\nicon: person_account\ndescription: \u7edf\u4e00\u4fdd\u5b58\u5ba2\u6237\u3001\u5408\u4f5c\u4f19\u4f34\u3001\u4f9b\u5e94\u5546\u6570\u636e\nenable_files: true\nenable_search: true\nenable_tasks: true\nenable_notes: false\nenable_api: true\nenable_share: true\nenable_chatter: true\nfields:\n  name: \n    type: text\n    label: \u6807\u9898 \n  priority:\n    type: text\n    label: \u4f18\u5148\u7ea7\n    options:\n      - label: \u9ad8\n        value: high\n      - label: \u4e2d\n        value: normal\n      - label: \u4f4e\n        value: low\n  owner:\n    label: \u6240\u6709\u4eba\n    type: lookup\n    reference_to: users\nlist_views:\n  recent:\n    label: \u6700\u8fd1\u67e5\u770b\n  all:\n    label: \u6240\u6709\u5355\u4f4d\n    columns:\n      - name\n      - priority\n      - owner\n      - modified\n    filter_fields:\n      - priority\n  high_priority:\n    label: \u91cd\u70b9\u5173\u6ce8\n    filters: [["priority", "=", "high"]]\npermission_set:\n  user:\n    allowCreate: true\n    allowDelete: true\n    allowEdit: true\n    allowRead: true\n    modifyAllRecords: false\n    viewAllRecords: false\n  admin:\n    allowCreate: true\n    allowDelete: true\n    allowEdit: true\n    allowRead: true\n    modifyAllRecords: true\n    viewAllRecords: true\n')),Object(a.b)("h2",{id:"\u81ea\u52a8\u751f\u6210\u5e94\u7528\u7cfb\u7edf"},"\u81ea\u52a8\u751f\u6210\u5e94\u7528\u7cfb\u7edf"),Object(a.b)("p",null,"\u53ea\u9700\u8fd9\u6837\u7b80\u5355\u5b9a\u4e49\u4e86\u4f60\u7684\u4e1a\u52a1\u9700\u6c42\uff0c\u534e\u708e\u5e94\u7528\u5f15\u64ce\u5c31\u53ef\u4ee5\u4e3a\u4f60\u751f\u6210\u529f\u80fd\u5b8c\u6574\u7684\u4e1a\u52a1\u7ba1\u7406\u7cfb\u7edf\u3002\u4ee5\u4e0b\u4e3a\u754c\u9762\u6548\u679c\u56fe\uff1a"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/assets/object_guide.png#bordered",alt:"\u5bf9\u8c61\u663e\u793a\u6548\u679c"}))),Object(a.b)("p",null,"\u81ea\u52a8\u751f\u6210\u7684\u7cfb\u7edf\u529f\u80fd\u4e00\u89c8\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u6570\u636e\u67e5\u8be2"),Object(a.b)("li",{parentName:"ul"},"\u6570\u636e\u589e\u5220\u6539"),Object(a.b)("li",{parentName:"ul"},"\u6d41\u7a0b\u5ba1\u6279"),Object(a.b)("li",{parentName:"ul"},"\u6743\u9650\u7ba1\u63a7"),Object(a.b)("li",{parentName:"ul"},"\u7edf\u8ba1\u62a5\u8868"),Object(a.b)("li",{parentName:"ul"},"\u901a\u77e5\u6d88\u606f"),Object(a.b)("li",{parentName:"ul"},"\u4e0a\u4f20\u9644\u4ef6"),Object(a.b)("li",{parentName:"ul"},"\u5b89\u6392\u4efb\u52a1"),Object(a.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u5230\u65e5\u5386"),Object(a.b)("li",{parentName:"ul"},"\u5b57\u6bb5\u4fee\u6539\u5386\u53f2"),Object(a.b)("li",{parentName:"ul"},"\u6570\u636e\u5bfc\u5165\u5bfc\u51fa"),Object(a.b)("li",{parentName:"ul"},"API \u63a5\u53e3")),Object(a.b)("p",null,"\u5bf9\u4e8e\u9ad8\u7ea7\u7684\u5b9a\u5236\u9700\u6c42\uff0c\u4f60\u8fd8\u53ef\u4ee5\u7f16\u5199\u81ea\u5b9a\u4e49\u4ee3\u7801\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u89e6\u53d1\u5668"),Object(a.b)("li",{parentName:"ul"},"\u64cd\u4f5c\u6309\u94ae"),Object(a.b)("li",{parentName:"ul"},"\u8868\u5355\u4e8b\u4ef6"),Object(a.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aefAPI"),Object(a.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u63d2\u4ef6")))}u.isMDXComponent=!0},252:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),l=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var b=l.a.createContext({}),u=function(e){var n=l.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},p=function(e){var n=u(e.components);return l.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(i,".").concat(d)]||p[d]||s[d]||a;return t?l.a.createElement(m,o({ref:n},b,{components:t})):l.a.createElement(m,o({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<a;b++)i[b]=t[b];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);