(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{423:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(508)),c=n(518),i={title:"Login to Steedos"},l={unversionedId:"us/login",id:"us/login",isDocsHomePage:!1,title:"Login to Steedos",description:"Please select a region. The data in each region is completely independent.",source:"@site/../docs/us/login.md",slug:"/us/login",permalink:"/us/login",version:"current"},s=[],u={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Please select a region. The data in each region is completely independent."),Object(o.b)("div",{class:"mt-12 grid gap-5 max-w-lg mx-auto md:grid-cols-2 lg:max-w-none"},Object(o.b)(c.a,{title:"Global Region",description:"Global Server located at AWS, Faster access outside of China",href:"https://us.steedos.com",mdxType:"Card"}),Object(o.b)(c.a,{title:"China Region",description:"China Server located at Aliyun, Faster access within China.",href:"https://cn.steedos.com",mdxType:"Card"})))}d.isMDXComponent=!0},508:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return n?a.a.createElement(f,i(i({ref:t},s),{},{components:n})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},510:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},518:function(e,t,n){"use strict";var r=n(510),a=n(0),o=n.n(a);class c extends o.a.Component{constructor(e){super(e)}render(){let{href:e,target:t,image:n,category:r,title:a,description:c,theme:i,icon:l}=this.props,s=o.a.createElement("div",null);return s=l instanceof Function?l({class:"h-8 w-8"}):l||o.a.createElement("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},o.a.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"})),o.a.createElement("a",{href:e,target:t,className:`block hover:no-underline flex flex-col rounded-lg overflow-hidden bg-white border border-gray-200 hover:border-${i}-500`},n&&o.a.createElement("div",{className:"flex-shrink-0 aspect-w-16 aspect-h-9"},o.a.createElement("img",{className:"object-cover",src:n,alt:""})),o.a.createElement("div",{className:"p-6 flex"},l&&o.a.createElement("div",{class:"flex-shrink-0 mr-2"},o.a.createElement("div",{class:"flex items-center justify-center h-8 w-8 rounded-md text-"+i},s)),o.a.createElement("div",{className:"place-self-center"},r&&o.a.createElement("div",{className:"text-sm leading-5 font-medium text-blue-600"},r),o.a.createElement("div",{className:"text-xl leading-6 font-medium text-gray-900"},a),c&&o.a.createElement("div",{className:"mt-2 text-base text-gray-500"},c))))}}Object(r.a)(c,"defaultProps",{href:"",image:"",category:"",title:"",description:"",theme:"green",target:"_self"}),t.a=c}}]);