(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{508:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,m=s["".concat(l,".").concat(b)]||s[b]||d[b]||o;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},509:function(e,t,r){"use strict";var n=r(510),a=r(0),o=r.n(a);class l extends o.a.Component{constructor(e){super(e),e.url?this.url=e.url:this.url=this.props.urls[0].url,this.id="video"+this.url.split("").reduce(((e,t)=>(e<<5)-e+t.charCodeAt(0)|0),0)}componentDidMount(){this.timer=setTimeout((()=>this.initPlayer()),100)}initPlayer(){if(this.props.urls.length<1)return;let e=Object.assign({},this.props);e.id=this.id,e.url=this.url,new Player(e).emit("resourceReady",e.urls)}componentWillUnmount(){clearTimeout(this.timer)}render(){return o.a.createElement("div",{id:this.id})}}Object(n.a)(l,"defaultProps",{urls:[],poster:"",autoplay:!1,loop:!1,videoInit:!1,fluid:!0,playbackRate:[.75,1,1.25,1.5,2],defaultPlaybackRate:1,download:!0,pip:!1,keyShortcut:"on",airplay:!0,lang:"zh-cn",playsinline:!1,definitionActive:"hover","x5-video-player-type":"h5","x5-video-player-fullscreen":!0,"x5-video-orientation":"landscape"}),t.a=l},510:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(508)),l=r(509),i={title:"\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u4eba\u5458",sidebar_label:"\u6982\u89c8",hide_table_of_contents:!0},c={unversionedId:"developer",id:"developer",isDocsHomePage:!1,title:"\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u4eba\u5458",description:"\u534e\u708e\u9b54\u65b9\u662f\u5f00\u6e90\u4f4e\u4ee3\u7801\u5f00\u53d1\u5de5\u5177\uff0c\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u4f7f\u7528yml\u6587\u4ef6\u5b9a\u4e49\u4e1a\u52a1\u5bf9\u8c61\uff0c\u4f7f\u7528 javascript \u8bed\u6cd5\u7f16\u5199\u524d\u7aef\u548c\u540e\u7aef\u4e1a\u52a1\u903b\u8f91\u811a\u672c\u3002\u7cfb\u7edf\u5185\u6838\uff08\u4e1a\u52a1\u5bf9\u8c61\u7ba1\u7406\u3001\u8d26\u6237\u7ba1\u7406\u3001\u6743\u9650\u7ba1\u7406\u3001\u6d41\u7a0b\u5f15\u64ce\u3001\u62a5\u8868\u5f15\u64ce\uff09\u9700\u8fd0\u884c\u4e8e MongoDB \u6570\u636e\u5e93\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5b9a\u4e49\u7b2c\u4e09\u65b9\u6570\u636e\u6e90\uff0c\u8fde\u63a5SQL Server\u3001Oracle\u7b49\u73b0\u6709\u7684\u4e1a\u52a1\u7cfb\u7edf\u6570\u636e\u5e93\u3002",source:"@site/../docs/developer.md",slug:"/developer",permalink:"/developer",version:"current",sidebar_label:"\u6982\u89c8",sidebar:"\u6587\u6863",previous:{title:"\u5728\u7ebf\u8868\u5355",permalink:"/help/no-code/object_web_forms"},next:{title:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883",permalink:"/developer/install/summary"}},p=[{value:"\u5f00\u53d1\u6d41\u7a0b",id:"\u5f00\u53d1\u6d41\u7a0b",children:[{value:"1\u3001\u5f00\u53d1\u524d\u51c6\u5907",id:"1\u3001\u5f00\u53d1\u524d\u51c6\u5907",children:[]},{value:"2\u3001\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",id:"2\u3001\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",children:[]},{value:"3\u3001\u53ef\u89c6\u5316\u5efa\u6a21",id:"3\u3001\u53ef\u89c6\u5316\u5efa\u6a21",children:[]},{value:"4\u3001\u540c\u6b65\u5143\u6570\u636e",id:"4\u3001\u540c\u6b65\u5143\u6570\u636e",children:[]},{value:"5\u3001\u4ee3\u7801\u5f00\u53d1",id:"5\u3001\u4ee3\u7801\u5f00\u53d1",children:[]},{value:"6\u3001\u9879\u76ee\u6253\u5305",id:"6\u3001\u9879\u76ee\u6253\u5305",children:[]}]}],u={toc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u534e\u708e\u9b54\u65b9\u662f",Object(o.b)("a",{parentName:"p",href:"https://github.com/steedos/steedos-platform"},"\u5f00\u6e90\u4f4e\u4ee3\u7801\u5f00\u53d1\u5de5\u5177"),"\uff0c\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u4f7f\u7528yml\u6587\u4ef6\u5b9a\u4e49",Object(o.b)("a",{parentName:"p",href:"/developer/object/"},"\u4e1a\u52a1\u5bf9\u8c61"),"\uff0c\u4f7f\u7528 javascript \u8bed\u6cd5\u7f16\u5199\u524d\u7aef\u548c\u540e\u7aef\u4e1a\u52a1\u903b\u8f91\u811a\u672c\u3002\u7cfb\u7edf\u5185\u6838\uff08\u4e1a\u52a1\u5bf9\u8c61\u7ba1\u7406\u3001\u8d26\u6237\u7ba1\u7406\u3001\u6743\u9650\u7ba1\u7406\u3001\u6d41\u7a0b\u5f15\u64ce\u3001\u62a5\u8868\u5f15\u64ce\uff09\u9700\u8fd0\u884c\u4e8e MongoDB \u6570\u636e\u5e93\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5b9a\u4e49",Object(o.b)("a",{parentName:"p",href:"/developer/datasource/"},"\u7b2c\u4e09\u65b9\u6570\u636e\u6e90"),"\uff0c\u8fde\u63a5SQL Server\u3001Oracle\u7b49\u73b0\u6709\u7684\u4e1a\u52a1\u7cfb\u7edf\u6570\u636e\u5e93\u3002"),Object(o.b)("div",{class:"my-8 relative mx-auto w-full rounded-lg overflow-hidden shadow-lg  focus:outline-none focus:shadow-outline lg:max-w-md"},Object(o.b)(l.a,{poster:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-platform-features.jpg",autoplay:!1,urls:[{name:"\u9ad8\u6e05",url:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-platform-features.mp4"},{name:"\u6807\u6e05",url:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-platform-features-960.mp4"}],mdxType:"Video"})),Object(o.b)("h2",{id:"\u5f00\u53d1\u6d41\u7a0b"},"\u5f00\u53d1\u6d41\u7a0b"),Object(o.b)("h3",{id:"1\u3001\u5f00\u53d1\u524d\u51c6\u5907"},"1\u3001",Object(o.b)("a",{parentName:"h3",href:"/developer/install/summary"},"\u5f00\u53d1\u524d\u51c6\u5907")),Object(o.b)("h3",{id:"2\u3001\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee"},"2\u3001",Object(o.b)("a",{parentName:"h3",href:"/developer/create_project/index"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee")),Object(o.b)("h3",{id:"3\u3001\u53ef\u89c6\u5316\u5efa\u6a21"},"3\u3001\u53ef\u89c6\u5316\u5efa\u6a21"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/developer/register/index"},"\u6ce8\u518c\u5f00\u53d1\u8005\u7528\u6237")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/help/no-code/create_object"},"\u81ea\u5b9a\u4e49\u5bf9\u8c61"))),Object(o.b)("h3",{id:"4\u3001\u540c\u6b65\u5143\u6570\u636e"},"4\u3001\u540c\u6b65\u5143\u6570\u636e"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/developer/dx/dx_vscode_install"},"\u5b89\u88c5 VS Code\u63d2\u4ef6")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/developer/dx/dx_vscode_config"},"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/developer/dx/dx_vscode_synchronize"},"\u4f7f\u7528 VS Code \u63d2\u4ef6\u540c\u6b65"))),Object(o.b)("h3",{id:"5\u3001\u4ee3\u7801\u5f00\u53d1"},"5\u3001\u4ee3\u7801\u5f00\u53d1"),Object(o.b)("h3",{id:"6\u3001\u9879\u76ee\u6253\u5305"},"6\u3001\u9879\u76ee\u6253\u5305"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/developer/package/package_visualization"},"\u53ef\u89c6\u5316\u6253\u5305")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/developer/package/package_cli"},"\u4f7f\u7528 steedos cli \u547d\u4ee4\u6253\u5305"))))}s.isMDXComponent=!0}}]);