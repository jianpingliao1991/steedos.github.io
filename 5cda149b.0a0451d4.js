(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{211:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(6),a=(r(0),r(493)),i=r(494),c={title:"\u5982\u4f55\u4f7f\u7528\u516c\u5f0f\u8ba1\u7b97\u5b57\u6bb5\u503c\uff1f",sidebar_label:"\u7528\u516c\u5f0f\u8ba1\u7b97\u5b57\u6bb5\u503c",hide_table_of_contents:!0,hide_title:!0,background:"/img/banner/service-overview-lg.png"},l={unversionedId:"videos/formula-calculates",id:"videos/formula-calculates",isDocsHomePage:!1,title:"\u5982\u4f55\u4f7f\u7528\u516c\u5f0f\u8ba1\u7b97\u5b57\u6bb5\u503c\uff1f",description:"<Video",source:"@site/../docs/videos/formula-calculates.mdx",slug:"/videos/formula-calculates",permalink:"/videos/formula-calculates",version:"current",sidebar_label:"\u7528\u516c\u5f0f\u8ba1\u7b97\u5b57\u6bb5\u503c",sidebar:"\u89c6\u9891",previous:{title:"\u5982\u4f55\u4e3a\u81ea\u5b9a\u4e49\u5bf9\u8c61\u521b\u5efa\u5b50\u8868\uff1f",permalink:"/videos/lesson-object-relationship"},next:{title:"\u4ec0\u4e48\u662f\u5143\u6570\u636e\uff1f",permalink:"/videos/lesson-metadata"}},u=[],s={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)(i.a,{poster:"https://vod.steedos.com/image/cover/5ED534383E544E8E908BAF76FA7E0828-6-2.png",autoplay:!0,urls:[{name:"\u9ad8\u6e05",url:"https://vod.steedos.com/video/29356d8f-1774c375374-0000-0000-009-c59e0.mp4"},{name:"\u6807\u6e05",url:"https://vod.steedos.com/6f072b894c4045678aa2ad2d5d42a9ae/5700fb41b78241d0bbd1d33d961a215b-be9e268baac6f6619c47773d6d7284bc-ld.mp4"}],mdxType:"Video"}))}p.isMDXComponent=!0},493:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(m,c({ref:t},u,{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},494:function(e,t,r){"use strict";var n=r(495),o=r(0),a=r.n(o);class i extends a.a.Component{constructor(e){super(e),e.url?this.url=e.url:this.url=this.props.urls[0].url,this.id="video"+this.url.split("").reduce(((e,t)=>(e<<5)-e+t.charCodeAt(0)|0),0)}componentDidMount(){this.timer=setTimeout((()=>this.initPlayer()),100)}initPlayer(){if(this.props.urls.length<1)return;let e=Object.assign({},this.props);e.id=this.id,e.url=this.url,new Player(e).emit("resourceReady",e.urls)}componentWillUnmount(){clearTimeout(this.timer)}render(){return a.a.createElement("div",{id:this.id})}}Object(n.a)(i,"defaultProps",{urls:[],poster:"",autoplay:!1,loop:!1,videoInit:!1,fluid:!0,playbackRate:[.75,1,1.25,1.5,2],defaultPlaybackRate:1,download:!0,pip:!1,keyShortcut:"on",airplay:!0,lang:"zh-cn",playsinline:!1,definitionActive:"hover","x5-video-player-type":"h5","x5-video-player-fullscreen":!0,"x5-video-orientation":"landscape"}),t.a=i},495:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))}}]);