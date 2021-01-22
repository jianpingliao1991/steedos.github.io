(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{402:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(6),o=(r(0),r(491)),c=r(504),i={title:"Login to Steedos"},l={unversionedId:"us/login",id:"us/login",isDocsHomePage:!1,title:"Login to Steedos",description:"Please select a region. The data in each region is completely independent.",source:"@site/../docs/us/login.md",slug:"/us/login",permalink:"/us/login",version:"current"},s=[],u={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Please select a region. The data in each region is completely independent."),Object(o.b)("div",{class:"mt-12 grid gap-5 max-w-lg mx-auto md:grid-cols-2 lg:max-w-none"},Object(o.b)(c.a,{title:"Global Region",description:"Global Server located at AWS, Faster access outside of China",href:"https://us.steedos.com",mdxType:"Card"}),Object(o.b)(c.a,{title:"China Region",description:"China Server located at Aliyun, Faster access within China.",href:"https://cn.steedos.com",mdxType:"Card"})))}p.isMDXComponent=!0},491:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?a.a.createElement(m,i({ref:t},s,{components:r})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},493:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},504:function(e,t,r){"use strict";var n=r(493),a=r(0),o=r.n(a);class c extends o.a.Component{constructor(e){super(e)}render(){let{href:e,target:t,image:r,category:n,title:a,description:c,theme:i}=this.props;return o.a.createElement("a",{href:e,target:t,className:"block hover:no-underline flex flex-col rounded-lg overflow-hidden bg-white border border-gray-200 hover:border-blue-500"},r&&o.a.createElement("div",{className:"flex-shrink-0 aspect-w-5 aspect-h-2"},o.a.createElement("img",{className:"object-cover",src:r,alt:""})),o.a.createElement("div",{className:"flex-1 bg-white p-4 flex flex-col justify-between"},o.a.createElement("div",{className:"flex-1"},n&&o.a.createElement("div",{className:"text-sm leading-5 font-medium text-blue-600"},n),o.a.createElement("div",{className:"mt-1 text-xl leading-7 font-semibold text-gray-900"},a),c&&o.a.createElement("div",{className:"mt-1 text-sm leading-6 text-gray-500"},c))))}}Object(n.a)(c,"defaultProps",{href:"",image:"",category:"",title:"",description:"",theme:"green",target:"_self"}),t.a=c}}]);