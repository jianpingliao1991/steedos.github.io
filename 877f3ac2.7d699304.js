(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{287:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(6),a=(r(0),r(493)),i=r(494),c={title:"\u4ec0\u4e48\u662f\u5143\u6570\u636e\uff1f",sidebar_label:"\u534e\u708e\u9b54\u65b9\u652f\u6301\u7684\u5143\u6570\u636e",hide_table_of_contents:!0,hide_title:!0,background:"/img/banner/service-overview-lg.png"},l={unversionedId:"videos/lesson-metadata",id:"videos/lesson-metadata",isDocsHomePage:!1,title:"\u4ec0\u4e48\u662f\u5143\u6570\u636e\uff1f",description:"<Video",source:"@site/../docs/videos/lesson-metadata.mdx",slug:"/videos/lesson-metadata",permalink:"/videos/lesson-metadata",version:"current",sidebar_label:"\u534e\u708e\u9b54\u65b9\u652f\u6301\u7684\u5143\u6570\u636e",sidebar:"\u89c6\u9891",previous:{title:"\u5982\u4f55\u4f7f\u7528\u516c\u5f0f\u8ba1\u7b97\u5b57\u6bb5\u503c\uff1f",permalink:"/videos/formula-calculates"},next:{title:"\u534e\u708e\u9b54\u65b9DX\u5feb\u901f\u5165\u95e8\uff0c\u5982\u4f55\u540c\u6b65\u5143\u6570\u636e",permalink:"/videos/lesson-metadata-synchronize"}},s=[],u={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)(i.a,{poster:"https://vod.steedos.com/image/cover/273D6FB669D94148889E5FE7A26A3D13-6-2.png",autoplay:!0,urls:[{name:"\u9ad8\u6e05",url:"https://vod.steedos.com/video/40072181-177297095c2-0000-0000-009-c59e0.mp4"},{name:"\u6807\u6e05",url:"https://vod.steedos.com/e0806fe35af74dccbec6d3a471ce686c/2b4088549d9c43408e9c3e2d3abbd333-6026bf2e9f9751565b0d211fea93967b-ld.mp4.mp4"}],mdxType:"Video"}))}p.isMDXComponent=!0},493:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(m,c({ref:t},s,{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},494:function(e,t,r){"use strict";var n=r(495),o=r(0),a=r.n(o);class i extends a.a.Component{constructor(e){super(e),e.url?this.url=e.url:this.url=this.props.urls[0].url,this.id="video"+this.url.split("").reduce(((e,t)=>(e<<5)-e+t.charCodeAt(0)|0),0)}componentDidMount(){this.timer=setTimeout((()=>this.initPlayer()),100)}initPlayer(){if(this.props.urls.length<1)return;let e=Object.assign({},this.props);e.id=this.id,e.url=this.url,new Player(e).emit("resourceReady",e.urls)}componentWillUnmount(){clearTimeout(this.timer)}render(){return a.a.createElement("div",{id:this.id})}}Object(n.a)(i,"defaultProps",{urls:[],poster:"",autoplay:!1,loop:!1,videoInit:!1,fluid:!0,playbackRate:[.75,1,1.25,1.5,2],defaultPlaybackRate:1,download:!0,pip:!1,keyShortcut:"on",airplay:!0,lang:"zh-cn",playsinline:!1,definitionActive:"hover","x5-video-player-type":"h5","x5-video-player-fullscreen":!0,"x5-video-orientation":"landscape"}),t.a=i},495:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))}}]);