(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{198:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(6),i=(r(0),r(496)),a=r(497),c={title:"\u63a7\u5236\u8c01\u53ef\u4ee5\u770b\u5230\u4ec0\u4e48\u5185\u5bb9\uff1f",sidebar_label:"\u63a7\u5236\u8c01\u53ef\u4ee5\u770b\u5230\u4ec0\u4e48\u5185\u5bb9\uff1f",hide_table_of_contents:!0,background:"/img/banner/service-overview-lg.png"},u={unversionedId:"videos/authority_management",id:"videos/authority_management",isDocsHomePage:!1,title:"\u63a7\u5236\u8c01\u53ef\u4ee5\u770b\u5230\u4ec0\u4e48\u5185\u5bb9\uff1f",description:"<Video",source:"@site/../docs/videos/authority_management.mdx",slug:"/videos/authority_management",permalink:"/videos/authority_management",version:"current",sidebar_label:"\u63a7\u5236\u8c01\u53ef\u4ee5\u770b\u5230\u4ec0\u4e48\u5185\u5bb9\uff1f",sidebar:"\u89c6\u9891",previous:{title:"\u5982\u4f55\u521b\u5efa\u6279\u51c6\u8fc7\u7a0b\uff1f",permalink:"/videos/approval_process"},next:{title:"\u4ec0\u4e48\u662f\u5143\u6570\u636e\uff1f",permalink:"/videos/lesson-metadata"}},l=[],s={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)(a.a,{poster:"https://vod.steedos.com/image/cover/7FE1B27104B645629836BFF92DED443B-6-2.png",autoplay:!0,urls:[{name:"\u9ad8\u6e05",url:"https://vod.steedos.com/video/bffe103-1786d0f3d3c-0000-0000-009-c59e0.mp4"},{name:"\u6807\u6e05",url:"https://vod.steedos.com/cd90d5153d324d7c85d669b234bc17fc/89a02fe2e667498992014b5f2d9a7cd2-0886d8b01418bdce2d0f4a5334bc4d7e-ld.mp4"}],mdxType:"Video"}))}p.isMDXComponent=!0},496:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return r?o.a.createElement(m,c({ref:t},l,{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},497:function(e,t,r){"use strict";var n=r(498),o=r(0),i=r.n(o);class a extends i.a.Component{constructor(e){super(e),e.url?this.url=e.url:this.url=this.props.urls[0].url,this.id="video"+this.url.split("").reduce(((e,t)=>(e<<5)-e+t.charCodeAt(0)|0),0)}componentDidMount(){this.timer=setTimeout((()=>this.initPlayer()),100)}initPlayer(){if(this.props.urls.length<1)return;let e=Object.assign({},this.props);e.id=this.id,e.url=this.url,new Player(e).emit("resourceReady",e.urls)}componentWillUnmount(){clearTimeout(this.timer)}render(){return i.a.createElement("div",{id:this.id})}}Object(n.a)(a,"defaultProps",{urls:[],poster:"",autoplay:!1,loop:!1,videoInit:!1,fluid:!0,playbackRate:[.75,1,1.25,1.5,2],defaultPlaybackRate:1,download:!0,pip:!1,keyShortcut:"on",airplay:!0,lang:"zh-cn",playsinline:!1,definitionActive:"hover","x5-video-player-type":"h5","x5-video-player-fullscreen":!0,"x5-video-orientation":"landscape"}),t.a=a},498:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))}}]);