(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{311:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),l=(r(0),r(508)),o=(r(509),r(512),r(513),r(511),r(514),r(515),r(520)),c={title:"\u4f01\u4e1a\u5fae\u4fe1\u96c6\u6210"},s={unversionedId:"appstore/it/qywx",id:"appstore/it/qywx",isDocsHomePage:!1,title:"\u4f01\u4e1a\u5fae\u4fe1\u96c6\u6210",description:"<Breadcrumb",source:"@site/../docs/appstore/it/qywx.mdx",slug:"/appstore/it/qywx",permalink:"/appstore/it/qywx",version:"current"},i=[],m={toc:i};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)(o.a,{items:[{title:"\u5e94\u7528\u5e02\u573a",href:"/appstore/"},{title:"\u4f01\u4e1a\u5fae\u4fe1\u96c6\u6210",href:"/appstore/it/qywx"}],mdxType:"Breadcrumb"}),Object(l.b)("div",{class:"mx-auto px-4 lg:max-w-screen-xl"},Object(l.b)("div",{class:"mt-2 md:flex md:items-center md:justify-between"},Object(l.b)("div",{class:"flex-1 min-w-0"},Object(l.b)("h2",{class:"text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"},"Back End Developer")),Object(l.b)("div",{class:"mt-4 flex-shrink-0 flex md:mt-0 md:ml-4"},Object(l.b)("button",{type:"button",class:"inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Edit"),Object(l.b)("button",{type:"button",class:"ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"},"Publish")))))}d.isMDXComponent=!0},508:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),m=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=m(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},v=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=m(r),v=n,p=d["".concat(o,".").concat(v)]||d[v]||u[v]||l;return r?a.a.createElement(p,c(c({ref:t},i),{},{components:r})):a.a.createElement(p,c({ref:t},i))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},509:function(e,t,r){"use strict";var n=r(510),a=r(0),l=r.n(a);class o extends l.a.Component{constructor(e){super(e),e.url?this.url=e.url:this.url=this.props.urls[0].url,this.id="video"+this.url.split("").reduce(((e,t)=>(e<<5)-e+t.charCodeAt(0)|0),0)}componentDidMount(){this.timer=setTimeout((()=>this.initPlayer()),100)}initPlayer(){if(this.props.urls.length<1)return;let e=Object.assign({},this.props);e.id=this.id,e.url=this.url,new Player(e).emit("resourceReady",e.urls)}componentWillUnmount(){clearTimeout(this.timer)}render(){return l.a.createElement("div",{id:this.id})}}Object(n.a)(o,"defaultProps",{urls:[],poster:"",autoplay:!1,loop:!1,videoInit:!1,fluid:!0,playbackRate:[.75,1,1.25,1.5,2],defaultPlaybackRate:1,download:!0,pip:!1,keyShortcut:"on",airplay:!0,lang:"zh-cn",playsinline:!1,definitionActive:"hover","x5-video-player-type":"h5","x5-video-player-fullscreen":!0,"x5-video-orientation":"landscape"}),t.a=o},510:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},511:function(e,t,r){"use strict";var n=r(0),a=r.n(n);class l extends a.a.Component{render(){return a.a.createElement("div",{class:"bg-gray-50"},a.a.createElement("div",{class:"max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28"},a.a.createElement("h2",{class:"text-3xl leading-9 font-extrabold text-gray-900"},"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"),a.a.createElement("div",{class:"mt-6 border-t-2 border-gray-100 pt-10"},a.a.createElement("dl",{class:"md:grid md:grid-cols-2 md:gap-8"},a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u4ec0\u4e48\u662f\u534e\u708e\u9b54\u65b9\uff1f"),a.a.createElement("dd",{class:"mt-2"},a.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u534e\u708e\u9b54\u65b9\u662f\u65b0\u4e00\u4ee3\u7684\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff0c\u57fa\u4e8e\u5546\u4e1a\u667a\u80fd\u548c\u6a21\u578b\u9a71\u52a8\uff0c\u5f00\u53d1\u4eba\u5458\u65e0\u9700\u7f16\u5199\u4ee3\u7801\u5c31\u80fd\u6784\u5efa\u529f\u80fd\u5f3a\u5927\u7684\u4e2a\u6027\u5316\u5e94\u7528\u3002"))),a.a.createElement("div",{class:"mt-12"},a.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u534e\u708e\u9b54\u65b9\u7684\u4f18\u52bf\u662f\u4ec0\u4e48\uff1f"),a.a.createElement("dd",{class:"mt-2"},a.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u534e\u708e\u9b54\u65b9\u521b\u65b0\u7684\u4f7f\u7528\u5143\u6570\u636e\u5b9a\u4e49\u4e1a\u52a1\u6a21\u578b\uff0c\u5e76\u53ef\u5728\u5fc5\u8981\u65f6\u7f16\u5199\u4ee3\u7801\uff0c\u60a8\u5f00\u53d1\u7684\u9879\u76ee\u6e90\u7801\u53ef\u4ee5\u4fdd\u5b58\u5230\u7248\u672c\u5e93\u4e2d\u5b9e\u73b0\u7248\u672c\u8fed\u4ee3\uff0c\u5bf9\u4e8e\u5927\u578b\u9879\u76ee\u4e5f\u65b9\u4fbf\u591a\u4eba\u534f\u4f5c\u3002"))),a.a.createElement("div",{class:"mt-12"},a.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u4e3a\u4ec0\u4e48\u5f00\u6e90\uff1f"),a.a.createElement("dd",{class:"mt-2"},a.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u6bcf\u4e2a\u8f6f\u4ef6\u516c\u53f8\u90fd\u9700\u8981\u4e00\u5957\u4f4e\u4ee3\u7801\u5f00\u53d1\u5de5\u5177\uff0c\u4f46\u662f\u5355\u72ec\u5f00\u53d1\u548c\u7ef4\u62a4\u4e00\u5957\u8fd9\u6837\u7684\u5e73\u53f0\u6210\u672c\u5de8\u5927\u3002\u534e\u708e\u5e0c\u671b\u4e0e\u5f00\u6e90\u793e\u533a\u5171\u540c\u6253\u9020\u4e2d\u56fd\u6700\u4f18\u79c0\u7684\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\u3002"))),a.a.createElement("div",{class:"mt-12"},a.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u5f00\u6e90\u7248\u6709\u4ec0\u4e48\u9650\u5236\uff1f"),a.a.createElement("dd",{class:"mt-2"},a.a.createElement("p",{class:"text-base leading-6 text-gray-500"},a.a.createElement("a",{href:"https://github.com/steedos/steedos-platform/",target:"_blank",class:" text-gray-700"},"\u534e\u708e\u9b54\u65b9\u5f00\u6e90\u7248"),"\u57fa\u4e8e",a.a.createElement("a",{href:"https://choosealicense.com/licenses/mit/",target:"_blank",class:" text-gray-700"},"MIT\u534f\u8bae"),"\uff0c\u5185\u7f6e\u534e\u708e\u9b54\u65b9\u5341\u5927\u5f15\u64ce\uff0c\u5b8c\u5168\u514d\u8d39\u3002\u57fa\u4e8e\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u5355\u72ec\u5b9a\u4ef7\u9500\u552e\u3002")))),a.a.createElement("div",{class:"mt-12 md:mt-0"},a.a.createElement("div",null,a.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u4f20\u7edf\u5f00\u53d1\u65b9\u5f0f\u4e0d\u597d\u5417\uff1f\u4e3a\u4ec0\u4e48\u8981\u5b66\u4e60\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff1f"),a.a.createElement("dd",{class:"mt-2"},a.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u4f20\u7edf\u6a21\u5f0f\u5f00\u53d1\u4f01\u4e1a\u8f6f\u4ef6\u7cfb\u7edf\u9700\u8981\u5927\u91cf\u7684\u6295\u8d44\uff0c\u9700\u8981\u4e1a\u52a1\u90e8\u95e8\u63d0\u51fa\u7cbe\u51c6\u7684\u4e1a\u52a1\u9700\u6c42\uff0c\u4e0d\u4f46\u521d\u671f\u5f00\u53d1\u6210\u672c\u9ad8\uff0c\u4e00\u65e6\u7cfb\u7edf\u5efa\u6210\u540e\uff0c\u4fee\u6539\u548c\u5347\u7ea7\u7684\u6210\u672c\u4e5f\u5f88\u6602\u8d35\u3002"))),a.a.createElement("div",{class:"mt-12"},a.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u4ec0\u4e48\u662f\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff1f"),a.a.createElement("dd",{class:"mt-2"},a.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u4f4e\u4ee3\u7801\u5f00\u53d1\u662f\u4e00\u79cd\u5168\u65b0\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u901a\u8fc7\u628a\u6807\u51c6\u529f\u80fd\u7ec4\u4ef6\u5316\uff0c\u4e1a\u52a1\u9700\u6c42\u914d\u7f6e\u5316\uff0c\u6539\u53d8\u5e94\u7528\u4ea4\u4ed8\u548c\u7ba1\u7406\u7684\u6a21\u5f0f\uff0c\u5927\u5927\u7f29\u51cf\u5e94\u7528\u4ea4\u4ed8\u7684\u5468\u671f\u3002"))),a.a.createElement("div",{class:"mt-12"},a.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u4f7f\u7528\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u7cfb\u7edf\u6709\u4ec0\u4e48\u597d\u5904\uff1f"),a.a.createElement("dd",{class:"mt-2"},a.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u4f7f\u7528\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u7684\u4e1a\u52a1\u7cfb\u7edf\uff0c\u57fa\u4e8e\u6a21\u578b\u9a71\u52a8\uff0c\u517c\u5177\u654f\u6377\u6027\u3001\u7075\u6d3b\u6027\u548c\u5f00\u653e\u6027\uff0c\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u968f\u65f6\u8c03\u6574\u3001\u65e0\u7f1d\u8fed\u4ee3\uff0c\u5e2e\u52a9\u4e1a\u52a1\u52a0\u901f\u521b\u65b0\uff0c\u63d0\u5347\u7ade\u4e89\u529b\u3002"))),a.a.createElement("div",{class:"mt-12"},a.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u534e\u708e\u9b54\u65b9\u9002\u5408\u5f00\u53d1\u54ea\u4e00\u7c7b\u7cfb\u7edf\uff1f"),a.a.createElement("dd",{class:"mt-2"},a.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u534e\u708e\u9b54\u65b9\u6bd4\u8f83\u9002\u5408\u5f00\u53d1\u4f01\u4e1a\u7ba1\u7406\u7c7b\u7684\u5e94\u7528\uff0c\u4f8b\u5982OA\u3001CRM\u3001\u8fdb\u9500\u5b58\u3001ERP\u3001\u9879\u76ee\u7ba1\u7406\u3001\u8ba2\u5355\u7ba1\u7406\u3001\u5e93\u5b58\u7ba1\u7406\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u5404\u79cd\u667a\u80fd\u5316\u4e1a\u52a1\u7cfb\u7edf\u7684\u540e\u53f0\u6570\u636e\u5e73\u53f0\u3002"))))))))}}t.a=l},512:function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(509);class o extends a.a.Component{render(){let{title:e,description:t,items:r,imageUrl:n,imageClass:o,videoUrl:c,imagePosition:s,containerClass:i,theme:m}=this.props,d="lg:col-start-1",u="lg:col-start-2";"left"===s&&(d="lg:col-start-2",u="lg:col-start-1"),o||(o="lg:max-w-xl rounded-lg shadow-lg"),i||(i=""),m||(m="green");let v=a.a.createElement("img",{src:n});return c&&(v=a.a.createElement(l.a,{poster:n,autoplay:!1,urls:[{name:"\u9ad8\u6e05",url:c}]})),a.a.createElement("div",{className:"lg:py-12 py-8 overflow-hidden "+i},a.a.createElement("div",{className:"relative mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl"},a.a.createElement("div",{className:"relative lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"},a.a.createElement("div",{className:d},a.a.createElement("div",{className:"text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"},e),a.a.createElement("div",{className:"mt-3 text-lg text-gray-500"},t),a.a.createElement("dl",{className:"mt-10 space-y-10"},r&&r.map((({title:e,description:t},r)=>a.a.createElement("div",{className:"flex"},a.a.createElement("div",{className:"flex-shrink-0"},a.a.createElement("svg",{className:"h-6 w-6 text-"+m+"-400",viewBox:"0 0 20 20",fill:"currentColor"},a.a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}))),a.a.createElement("div",{className:"ml-4"},e&&a.a.createElement("div",{className:"mb-2 text-lg leading-6 font-medium text-gray-900"},e),t&&a.a.createElement("div",{className:"text-base text-gray-500"},t))))))),n&&a.a.createElement("div",{className:"mt-10 mx-4 relative lg:mt-0 "+u},a.a.createElement("svg",{className:"absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden",width:"784",height:"404",fill:"none",viewBox:"0 0 784 404"},a.a.createElement("defs",null,a.a.createElement("pattern",{id:"ca9667ae-9f92-4be7-abcb-9e3d727f2941",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},a.a.createElement("rect",{x:"0",y:"0",width:"4",height:"4",className:"text-gray-200",fill:"currentColor"}))),a.a.createElement("rect",{width:"784",height:"404",fill:"url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"})),a.a.createElement("div",{className:"relative mx-auto w-full sm:mx-4 overflow-hidden "+o},a.a.createElement("div",{className:"relative block w-full focus:outline-none focus:shadow-outline"},v))))))}}t.a=o},513:function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(509);class o extends a.a.Component{render(){let{header:e,title:t,description:r,buttons:n,items:o,imageUrl:c,imageClass:s,videoUrl:i,containerClass:m,theme:d}=this.props;m||(m=""),s||(s="lg:max-w-3xl rounded-lg shadow-lg"),d||(d="green");let u=a.a.createElement("img",{src:c});return i&&(u=a.a.createElement(l.a,{poster:c,autoplay:!1,urls:[{name:"\u9ad8\u6e05",url:i}]})),a.a.createElement("div",{class:"py-12 "+m},a.a.createElement("div",{class:"max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"},a.a.createElement("div",{class:"lg:text-center"},e&&a.a.createElement("div",{class:"text-base leading-6 font-semibold tracking-wide uppercase text-"+d+"-600"},e),a.a.createElement("div",{class:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"},t),r&&a.a.createElement("div",{class:"mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"},r)),n&&a.a.createElement("div",{class:"mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"},n.map((({title:e,href:t,target:r,primary:n},l)=>{let o="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10";o+=n?` text-white bg-${d}-600 hover:bg-${d}-700 hover:text-white`:` text-${d}-600 bg-white hover:bg-gray-50 hover:text-${d}-600`;const c=r||"";return a.a.createElement("div",{class:"mt-3 rounded-md shadow sm:mt-0 sm:ml-3"},a.a.createElement("a",{href:t,class:o,target:c},e))}))),c&&a.a.createElement("div",{className:"relative mx-auto w-full mt-4 overflow-hidden "+s},a.a.createElement("div",{className:"relative block w-full overflow-hidden focus:outline-none focus:shadow-outline"},u)),o&&a.a.createElement("div",{class:"mt-10"},a.a.createElement("ul",{class:"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"},o.map((({title:e,description:t,href:r,icon:n},l)=>{let o=a.a.createElement("div",null);o=n instanceof Function?n({class:"h-6 w-6"}):n||a.a.createElement("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a.a.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"}));let c=e;return r&&(c=a.a.createElement("a",{href:r},e)),a.a.createElement("li",null,a.a.createElement("div",{class:"flex"},a.a.createElement("div",{class:"flex-shrink-0"},a.a.createElement("div",{class:"flex items-center justify-center h-12 w-12 rounded-md text-white bg-"+d+"-500"},o)),a.a.createElement("div",{class:"ml-4"},a.a.createElement("div",{class:"text-lg leading-6 font-medium text-gray-900"},c),a.a.createElement("div",{class:"mt-2 text-base text-gray-500"},t))))}))))))}}t.a=o},514:function(e,t,r){"use strict";var n=r(0),a=r.n(n);r(509);class l extends a.a.Component{render(){return a.a.createElement("div",{class:"bg-gray-100"},a.a.createElement("div",{class:"py-8 lg:py-12 relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl"},a.a.createElement("h2",{class:"text-center text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10"},"20\u5e74\u6765\uff0c\u6df1\u53d7\u5ba2\u6237\u4fe1\u8d56"),a.a.createElement("div",{class:"mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8","data-theme":"light"},a.a.createElement("div",{class:"col-span-1 flex justify-center py-8 px-8 bg-gray-50"},a.a.createElement("img",{class:"max-h-12",src:"/assets/customers/dzug.png",alt:"\u5927\u4f17\u516c\u7528"})),a.a.createElement("div",{class:"col-span-1 flex justify-center py-8 px-8 bg-gray-50"},a.a.createElement("img",{class:"max-h-12",src:"/assets/customers/want_want.png",alt:"\u65fa\u65fa\u6295\u8d44"})),a.a.createElement("div",{class:"col-span-1 flex justify-center py-8 px-8 bg-gray-50"},a.a.createElement("img",{class:"max-h-12",src:"/assets/customers/picc.png",alt:"\u4eba\u4fdd\u8d44\u4ea7"})),a.a.createElement("div",{class:"col-span-1 flex justify-center py-8 px-8 bg-gray-50"},a.a.createElement("img",{class:"max-h-12",src:"/assets/customers/petro_china.png",alt:"\u629a\u987a\u77f3\u5316"})),a.a.createElement("div",{class:"col-span-1 flex justify-center py-8 px-8 bg-gray-50"},a.a.createElement("img",{class:"max-h-12",src:"/assets/customers/shanghai_gas.png",alt:"\u4e0a\u6d77\u71c3\u6c14"})),a.a.createElement("div",{class:"col-span-1 flex justify-center py-8 px-8 bg-gray-50"},a.a.createElement("img",{class:"max-h-12",src:"/assets/customers/hebei_port.png",alt:"\u6cb3\u5317\u6e2f\u53e3\u96c6\u56e2"})))))}}t.a=l},515:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return i})),r.d(t,"f",(function(){return m})),r.d(t,"g",(function(){return d})),r.d(t,"h",(function(){return u})),r.d(t,"i",(function(){return v})),r.d(t,"k",(function(){return p})),r.d(t,"j",(function(){return f})),r.d(t,"l",(function(){return h})),r.d(t,"m",(function(){return g})),r.d(t,"n",(function(){return x})),r.d(t,"o",(function(){return E})),r.d(t,"p",(function(){return k})),r.d(t,"q",(function(){return b})),r.d(t,"r",(function(){return y})),r.d(t,"s",(function(){return w})),r.d(t,"t",(function(){return j})),r.d(t,"u",(function(){return M})),r.d(t,"v",(function(){return L})),r.d(t,"w",(function(){return O})),r.d(t,"x",(function(){return C})),r.d(t,"y",(function(){return z})),r.d(t,"z",(function(){return B})),r.d(t,"A",(function(){return H})),r.d(t,"B",(function(){return W})),r.d(t,"C",(function(){return V})),r.d(t,"D",(function(){return N})),r.d(t,"E",(function(){return P})),r.d(t,"F",(function(){return A})),r.d(t,"G",(function(){return T})),r.d(t,"H",(function(){return D})),r.d(t,"I",(function(){return R})),r.d(t,"J",(function(){return q}));var n=r(3),a=r(0);var l=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{d:"M12 14l9-5-9-5-9 5 9 5z"}),a.createElement("path",{d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"}),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"}))};var o=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"}))};var c=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"}))};var s=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"}))};var i=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"}),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"}))};var m=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}))};var d=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"}))};var u=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"}))};var v=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"}))};var p=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"}))};var f=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"}))};var h=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}))};var g=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"}))};var x=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}))};var E=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}))};var k=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}))};var b=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))};var y=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"}))};var w=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"}))};var j=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"}))};var M=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}))};var L=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"}))};var O=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"}))};var C=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"}))};var z=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}))};var B=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}))};var H=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"}))};var W=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"}))};var V=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}))};var N=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"}))};var P=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}))};var A=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"}))};var T=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"}))};var D=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"}))};var R=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"}))};var q=function(e){return a.createElement("svg",Object(n.a)({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"}))}},520:function(e,t,r){"use strict";var n=r(0),a=r.n(n);r(509);class l extends a.a.Component{render(){let{items:e}=this.props;return a.a.createElement("div",{class:"border-b border-gray-200"},a.a.createElement("div",{class:"mx-auto px-4 lg:max-w-screen-xl"},a.a.createElement("nav",{class:"py-4","aria-label":"Breadcrumb"},a.a.createElement("ol",{class:"flex items-center"},e&&e.map((({title:e,href:t},r)=>a.a.createElement("li",null,a.a.createElement("div",{class:"flex items-center"},r>0&&a.a.createElement("svg",{class:"flex-shrink-0 h-5 w-5 text-gray-400","x-description":"Heroicon name: chevron-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},a.a.createElement("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})),a.a.createElement("a",{href:t,class:"font-medium "},e)))))))))}}t.a=l}}]);