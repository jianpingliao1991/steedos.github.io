(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{480:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(m,c({ref:t},u,{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},481:function(e,t,r){"use strict";var n=r(4),o=r(482),a=r(0),i=r.n(a),c=function(e){function t(t){var r;return r=e.call(this,t)||this,t.url?r.url=t.url:r.url=r.props.urls[0].url,r.id="video"+r.url.split("").reduce((function(e,t){return(e<<5)-e+t.charCodeAt(0)|0}),0),r}Object(n.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;this.timer=setTimeout((function(){return e.initPlayer()}),100)},r.initPlayer=function(){if(!(this.props.urls.length<1)){var e=Object.assign({},this.props);e.id=this.id,e.url=this.url,new Player(e).emit("resourceReady",e.urls)}},r.componentWillUnmount=function(){clearTimeout(this.timer)},r.render=function(){return i.a.createElement("div",{id:this.id})},t}(i.a.Component);Object(o.a)(c,"defaultProps",{urls:[],poster:"",autoplay:!1,loop:!1,videoInit:!1,fluid:!0,playbackRate:[.75,1,1.25,1.5,2],defaultPlaybackRate:1,download:!0,pip:!1,keyShortcut:"on",airplay:!0,lang:"zh-cn",playsinline:!1,definitionActive:"hover","x5-video-player-type":"h5","x5-video-player-fullscreen":!0,"x5-video-orientation":"landscape"}),t.a=c},482:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(6),a=(r(0),r(480)),i=r(481),c={title:"\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u4eba\u5458",sidebar_label:"\u6982\u89c8",hide_table_of_contents:!0},l={unversionedId:"developer",id:"developer",isDocsHomePage:!1,title:"\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u4eba\u5458",description:"\u534e\u708e\u9b54\u65b9\u662f\u5f00\u6e90\u4f4e\u4ee3\u7801\u5f00\u53d1\u5de5\u5177\uff0c\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u4f7f\u7528yml\u6587\u4ef6\u5b9a\u4e49\u4e1a\u52a1\u5bf9\u8c61\uff0c\u4f7f\u7528 javascript \u8bed\u6cd5\u7f16\u5199\u524d\u7aef\u548c\u540e\u7aef\u4e1a\u52a1\u903b\u8f91\u811a\u672c\u3002\u7cfb\u7edf\u5185\u6838\uff08\u4e1a\u52a1\u5bf9\u8c61\u7ba1\u7406\u3001\u8d26\u6237\u7ba1\u7406\u3001\u6743\u9650\u7ba1\u7406\u3001\u6d41\u7a0b\u5f15\u64ce\u3001\u62a5\u8868\u5f15\u64ce\uff09\u9700\u8fd0\u884c\u4e8e MongoDB \u6570\u636e\u5e93\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5b9a\u4e49\u7b2c\u4e09\u65b9\u6570\u636e\u6e90\uff0c\u8fde\u63a5SQL Server\u3001Oracle\u7b49\u73b0\u6709\u7684\u4e1a\u52a1\u7cfb\u7edf\u6570\u636e\u5e93\u3002",source:"@site/../docs/developer.md",slug:"/developer",permalink:"/developer",version:"current",sidebar_label:"\u6982\u89c8",sidebar:"\u6587\u6863",previous:{title:"\u5728\u7ebf\u8868\u5355",permalink:"/help/no-code/object_web_forms"},next:{title:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883",permalink:"/developer/install/summary"}},u=[],s={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u534e\u708e\u9b54\u65b9\u662f",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/steedos/steedos-platform"}),"\u5f00\u6e90\u4f4e\u4ee3\u7801\u5f00\u53d1\u5de5\u5177"),"\uff0c\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u4f7f\u7528yml\u6587\u4ef6\u5b9a\u4e49",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/developer/object/"}),"\u4e1a\u52a1\u5bf9\u8c61"),"\uff0c\u4f7f\u7528 javascript \u8bed\u6cd5\u7f16\u5199\u524d\u7aef\u548c\u540e\u7aef\u4e1a\u52a1\u903b\u8f91\u811a\u672c\u3002\u7cfb\u7edf\u5185\u6838\uff08\u4e1a\u52a1\u5bf9\u8c61\u7ba1\u7406\u3001\u8d26\u6237\u7ba1\u7406\u3001\u6743\u9650\u7ba1\u7406\u3001\u6d41\u7a0b\u5f15\u64ce\u3001\u62a5\u8868\u5f15\u64ce\uff09\u9700\u8fd0\u884c\u4e8e MongoDB \u6570\u636e\u5e93\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5b9a\u4e49",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/developer/datasource/"}),"\u7b2c\u4e09\u65b9\u6570\u636e\u6e90"),"\uff0c\u8fde\u63a5SQL Server\u3001Oracle\u7b49\u73b0\u6709\u7684\u4e1a\u52a1\u7cfb\u7edf\u6570\u636e\u5e93\u3002"),Object(a.b)("div",{class:"my-8 relative mx-auto w-full rounded-lg overflow-hidden shadow-lg  focus:outline-none focus:shadow-outline lg:max-w-md"},Object(a.b)(i.a,{poster:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-platform-features.jpg",autoplay:!1,urls:[{name:"\u9ad8\u6e05",url:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-platform-features.mp4"},{name:"\u6807\u6e05",url:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-platform-features-960.mp4"}],mdxType:"Video"})))}p.isMDXComponent=!0}}]);