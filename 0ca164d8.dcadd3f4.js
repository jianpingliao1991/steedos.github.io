(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{381:function(e,t,a){"use strict";function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return l}))},382:function(e,t,a){"use strict";var l=a(5),n=a(381),r=a(0),s=a.n(r),c=function(e){function t(t){var a;return a=e.call(this,t)||this,t.url?a.url=t.url:a.url=a.props.urls[0].url,a.id="video"+a.url.split("").reduce((function(e,t){return(e<<5)-e+t.charCodeAt(0)|0}),0),a}Object(l.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timer=setTimeout((function(){return e.initPlayer()}),100)},a.initPlayer=function(){if(console.log("initPlayer: "+this.id),!(this.props.urls.length<1)){var e=Object.assign({},this.props);e.id=this.id,e.url=this.url,this.player=new Player(e),this.player.emit("resourceReady",e.urls)}},a.componentWillUnmount=function(){clearTimeout(this.timer)},a.render=function(){return s.a.createElement("div",{id:this.id})},t}(s.a.Component);Object(n.a)(c,"defaultProps",{urls:[],poster:"",autoplay:!1,loop:!1,videoInit:!1,fluid:!0,playbackRate:[.75,1,1.25,1.5,2],defaultPlaybackRate:1,download:!0,pip:!1,keyShortcut:"on",airplay:!0,lang:"zh-cn",playsinline:!1,definitionActive:"hover","x5-video-player-type":"h5","x5-video-player-fullscreen":!0,"x5-video-orientation":"landscape"}),t.a=c},384:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(386),s=a(376),c=a(379),i=a(395),o=a(1),m=a(383),d=a(378),u=a.n(d),g=a(380),h=a(392),f=a(393),b=a(385),E=a(394),x=a(387),v=a(388),p=a(50),w=a.n(p);function y({activeBasePath:e,to:t,href:a,label:l,activeClassName:r="navbar__link--active",...s}){const i=Object(c.a)(t),m=Object(c.a)(e);return n.a.createElement(g.a,Object(o.a)({},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{isNavLink:!0,activeClassName:r,to:i,...e?{isActive:(e,t)=>t.pathname.startsWith(m)}:null},s),l)}function k({items:e,position:t,className:a,...l}){const r=(e,t=!1)=>u()({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?n.a.createElement("div",{className:u()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},n.a.createElement(y,Object(o.a)({className:r(a)},l,{onClick:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),l.label),n.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...t},a)=>n.a.createElement("li",{key:a},n.a.createElement(y,Object(o.a)({activeClassName:"dropdown__link--active",className:r(e,!0)},t)))))):n.a.createElement(y,Object(o.a)({className:r(a)},l))}function _({items:e,className:t,...a}){const l=(e,t=!1)=>u()("menu__link",{"menu__link--sublist":t},e);return e?n.a.createElement("li",{className:"menu__list-item"},n.a.createElement(y,Object(o.a)({className:l(t,!0)},a),a.label),n.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...t},r)=>n.a.createElement("li",{className:"menu__list-item",key:r},n.a.createElement(y,Object(o.a)({activeClassName:"menu__link--active",className:l(e)},t,{onClick:a.onClick})))))):n.a.createElement("li",{className:"menu__list-item"},n.a.createElement(y,Object(o.a)({className:l(t)},a)))}var j=function(){let{siteConfig:{themeConfig:{navbar:{title:e,links:t=[],links_us:a=[],hideOnScroll:r=!1}={},disableDarkMode:c=!1}},isClient:i}=Object(s.a)();const[d,p]=Object(l.useState)(!1),[y,j]=Object(l.useState)(!1),{isDarkTheme:N,setLightTheme:O,setDarkTheme:C}=Object(b.a)(),{navbarRef:M,isNavbarVisible:L}=Object(E.a)(r);let{logoLink:B,logoLinkProps:S,logoImageUrl:P,logoAlt:U}=Object(v.a)();Object(x.a)(d);const D=Object(l.useCallback)(()=>{p(!0)},[p]),T=Object(l.useCallback)(()=>{p(!1)},[p]),A=Object(l.useCallback)(e=>e.target.checked?C():O(),[O,C]),H=Object(m.d)();return H&&H.pathname.indexOf("/us")>=0&&(t=a,e="Steedos",B="/us/"),n.a.createElement("nav",{ref:M,className:u()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":d,[w.a.navbarHideable]:r,[w.a.navbarHidden]:!L})},n.a.createElement("div",{className:"navbar__inner"},n.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&n.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:D,onKeyDown:D},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},n.a.createElement("title",null,"Menu"),n.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),n.a.createElement(g.a,Object(o.a)({className:"navbar__brand",to:B},S),null!=P&&n.a.createElement("img",{key:i,className:"navbar__logo",src:P,alt:U}),null!=e&&n.a.createElement("strong",{className:u()("navbar__title",{[w.a.hideLogoText]:y})},e)),t.filter(e=>"left"===e.position).map((e,t)=>n.a.createElement(k,Object(o.a)({},e,{key:t})))),n.a.createElement("div",{className:"navbar__items navbar__items--right"},t.filter(e=>"right"===e.position).map((e,t)=>n.a.createElement(k,Object(o.a)({},e,{key:t}))),!c&&n.a.createElement(f.a,{className:w.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:N,onChange:A}),n.a.createElement(h.a,{handleSearchBarToggle:j,isSearchBarExpanded:y}))),n.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:T}),n.a.createElement("div",{className:"navbar-sidebar"},n.a.createElement("div",{className:"navbar-sidebar__brand"},n.a.createElement(g.a,Object(o.a)({className:"navbar__brand",onClick:T,to:B},S),null!=P&&n.a.createElement("img",{key:i,className:"navbar__logo",src:P,alt:U}),null!=e&&n.a.createElement("strong",{className:"navbar__title"},e)),!c&&d&&n.a.createElement(f.a,{"aria-label":"Dark mode toggle in sidebar",checked:N,onChange:A})),n.a.createElement("div",{className:"navbar-sidebar__items"},n.a.createElement("div",{className:"menu"},n.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>n.a.createElement(_,Object(o.a)({},e,{onClick:T,key:t}))))))))},N=a(51),O=a.n(N);function C({to:e,href:t,label:a,...l}){const r=Object(c.a)(e);return n.a.createElement(g.a,Object(o.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:r},l),a)}const M=({url:e,alt:t})=>n.a.createElement("img",{className:"footer__logo",alt:t,src:e});var L=function(){const e=Object(s.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:l}=a,{copyright:r,icp:i,icpURL:o,links:m=[],logo:d={}}=l||{},g=Object(c.a)(d.src);return l?n.a.createElement("footer",{className:u()("footer",{"footer--dark":"dark"===l.style})},n.a.createElement("div",{className:"container"},m&&m.length>0&&n.a.createElement("div",{className:"row footer__links"},m.map((e,t)=>n.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?n.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(C,e)))):null))),(d||r)&&n.a.createElement("div",{className:"text--center"},d&&d.src&&n.a.createElement("div",{className:"margin-bottom--sm"},d.href?n.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:O.a.footerLogoLink},n.a.createElement(M,{alt:d.alt,url:g})):n.a.createElement(M,{alt:d.alt,url:g})),r,n.a.createElement("a",{href:o,target:"_blank",className:"footer__link-item"},i)))):null},B=a(487);a(52);t.a=function(e){const{siteConfig:t={}}=Object(s.a)(),{favicon:a,title:l,themeConfig:{image:o},url:m}=t,{route:d,children:u,title:g,noFooter:h,description:f,image:b,keywords:E,permalink:x,version:v}=e,p=g?`${g} | ${l}`:l,w=b||o,y=m+Object(c.a)(w),k=Object(c.a)(a);return n.a.createElement(B.a,{iconPath:"/assets/icons"},n.a.createElement(i.a,null,n.a.createElement(r.a,null,n.a.createElement("html",{lang:"en"}),n.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),n.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),p&&n.a.createElement("title",null,p),p&&n.a.createElement("meta",{property:"og:title",content:p}),a&&n.a.createElement("link",{rel:"shortcut icon",href:k}),f&&n.a.createElement("meta",{name:"description",content:f}),f&&n.a.createElement("meta",{property:"og:description",content:f}),v&&n.a.createElement("meta",{name:"docsearch:version",content:v}),E&&E.length&&n.a.createElement("meta",{name:"keywords",content:E.join(",")}),w&&n.a.createElement("meta",{property:"og:image",content:y}),w&&n.a.createElement("meta",{property:"twitter:image",content:y}),w&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+p}),x&&n.a.createElement("meta",{property:"og:url",content:m+x}),n.a.createElement("meta",{name:"twitter:card",content:"summary"})),n.a.createElement(j,null),n.a.createElement("div",{className:"main-wrapper"},u),!h&&n.a.createElement(L,null)))}},71:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var l=a(0),n=a.n(l),r=a(384),s=a(382);function c(){return n.a.createElement(r.a,{title:"\u534e\u708e\u9b54\u65b9\u5b98\u7f51",description:"\u534e\u708e\u9b54\u65b9\u662f\u4e00\u6b3e\u968f\u9700\u5e94\u53d8\u7684\u7ba1\u7406\u8f6f\u4ef6\u5f00\u53d1\u5de5\u5177\uff0c\u65e8\u5728\u901a\u8fc7\u5176\u5f3a\u5927\u7684\u654f\u6377\u6027\u3001\u7075\u6d3b\u6027\u548c\u5f00\u653e\u6027\u5e2e\u52a9\u4f01\u4e1a\u521b\u65b0\u3001\u6269\u5c55\u548c\u96c6\u6210\u4f01\u4e1a\u4e1a\u52a1\u7cfb\u7edf\u3002\u57fa\u4e8e\u8be5\u5e73\u53f0\uff0c\u60a8\u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u7684\u4f01\u4e1a\u5e94\u7528\u3002",permalink:"/"},n.a.createElement("section",{class:"flex bg-cover bg-no-repeat bg-blue-200"},n.a.createElement("div",{class:"mx-auto max-w-screen-xl px-4 my-12"},n.a.createElement("div",{class:"lg:grid lg:grid-cols-12 lg:gap-8"},n.a.createElement("div",{class:"sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"},n.a.createElement("div",{class:"text-sm font-semibold uppercase tracking-wide text-gray-700 sm:text-base lg:text-sm xl:text-base"},"\u65b0\u4e00\u4ee3\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0"),n.a.createElement("h2",{class:"mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl"},"\u534e\u708e\u9b54\u65b9",n.a.createElement("br",{class:"hidden md:inline"}),n.a.createElement("span",{class:"text-blue-700"},"\u52a9\u529b\u4f01\u4e1a\u6570\u5b57\u5316\u8f6c\u578b")),n.a.createElement("p",{class:"mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"},"\u534e\u708e\u9b54\u65b9\u7279\u6709\u7684\u654f\u6377\u6027\u3001\u7075\u6d3b\u6027\u548c\u5f00\u653e\u6027\uff0c\u5e2e\u52a9\u4e1a\u52a1\u52a0\u901f\u521b\u65b0\uff0c\u63d0\u5347\u7ade\u4e89\u529b."),n.a.createElement("div",{class:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},n.a.createElement("div",{class:"rounded-md shadow"},n.a.createElement("a",{href:"/videos/steedos-platform-features/",class:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10  hover:text-white"},"\u89c6\u9891\u6f14\u793a")),n.a.createElement("div",{class:"mt-3 sm:mt-0 sm:ml-3"},n.a.createElement("a",{href:"/developer/guide/",class:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"},"\u5f00\u53d1\u6559\u7a0b")))),n.a.createElement("div",{class:"mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"},n.a.createElement("div",{class:"relative mx-auto w-full lg:max-w-md"},n.a.createElement("div",{class:"relative block w-full rounded-lg shadow-lg overflow-hidden focus:outline-none focus:shadow-outline"},n.a.createElement(s.a,{poster:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-guide.jpg",autoplay:!1,urls:[{name:"\u9ad8\u6e05",url:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-guide.mp4"}]}))))))),n.a.createElement("div",{class:"py-16 bg-gray-50 overflow-hidden"},n.a.createElement("div",{class:"relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl"},n.a.createElement("svg",{class:"hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4",width:"404",height:"784",fill:"none",viewBox:"0 0 404 784"},n.a.createElement("defs",null,n.a.createElement("pattern",{id:"b1e6e422-73f8-40a6-b5d9-c8586e37e0e7",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},n.a.createElement("rect",{x:"0",y:"0",width:"4",height:"4",class:"text-gray-200",fill:"currentColor"}))),n.a.createElement("rect",{width:"404",height:"784",fill:"url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"})),n.a.createElement("div",{class:"relative"},n.a.createElement("h3",{class:"text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"},"\u65b0\u4e00\u4ee3\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff0c\u4ee3\u7801\u91cf\u51cf\u5c1190%\uff0c\u5f00\u53d1\u6548\u7387\u63d0\u5347\u5341\u500d"),n.a.createElement("p",{class:"mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500"},"\u534e\u708e\u9b54\u65b9\u57fa\u4e8e\u5546\u4e1a\u667a\u80fd\u548c\u6a21\u578b\u9a71\u52a8\uff0c\u5f00\u53d1\u4eba\u5458\u53ea\u9700\u7f16\u5199\u5c11\u91cf\u4ee3\u7801\uff0c\u5c31\u80fd\u8f7b\u677e\u4fbf\u6377\u5730\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u7684\u4e2a\u6027\u5316\u5e94\u7528\u3002")),n.a.createElement("div",{class:"relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"},n.a.createElement("div",{class:"relative"},n.a.createElement("h4",{class:"text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9"},"\u96f6\u4ee3\u7801\u6784\u5efa\u4e1a\u52a1\u6a21\u578b"),n.a.createElement("p",{class:"mt-3 text-lg leading-7 text-gray-500"},"\u534e\u708e\u9b54\u65b9\u5185\u7f6e\u529f\u80fd\u5f3a\u5927\u7684\u5efa\u6a21\u5f15\u64ce\uff0c\u53ef\u4ee5\u4efb\u610f\u914d\u7f6e\u4e1a\u52a1\u5b57\u6bb5\u3001\u5217\u8868\u89c6\u56fe\u3001\u9875\u9762\u5e03\u5c40\uff0c\u5373\u4f7f\u662f\u4e0d\u61c2\u7f16\u7a0b\u7684\u4e1a\u52a1\u4eba\u5458\uff0c\u4e5f\u80fd\u5feb\u901f\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u7684\u4f01\u4e1a\u5e94\u7528\u7a0b\u5e8f\u3002"),n.a.createElement("ul",{class:"mt-10"},n.a.createElement("li",null,n.a.createElement("div",{class:"flex"},n.a.createElement("div",{class:"flex-shrink-0"},n.a.createElement("div",{class:"flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"},n.a.createElement("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"})))),n.a.createElement("div",{class:"ml-4"},n.a.createElement("h5",{class:"text-lg leading-6 font-medium text-gray-900"},"\u6570\u636e\u5efa\u6a21"),n.a.createElement("p",{class:"mt-2 text-base leading-6 text-gray-500"},"\u53ef\u89c6\u5316\u754c\u9762\u914d\u7f6e\u4e1a\u52a1\u6570\u636e\u8868\u3001\u5b57\u6bb5\uff0c\u77ed\u77ed\u51e0\u5929\u5c31\u80fd\u642d\u5efa\u9879\u76ee\u539f\u578b 1.0")))),n.a.createElement("li",{class:"mt-10"},n.a.createElement("div",{class:"flex"},n.a.createElement("div",{class:"flex-shrink-0"},n.a.createElement("div",{class:"flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"},n.a.createElement("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"})))),n.a.createElement("div",{class:"ml-4"},n.a.createElement("h5",{class:"text-lg leading-6 font-medium text-gray-900"},"\u65e0\u7f1d\u8fed\u4ee3"),n.a.createElement("p",{class:"mt-2 text-base leading-6 text-gray-500"},"\u4e0e\u4e1a\u52a1\u90e8\u95e8\u6c9f\u901a\u9879\u76ee\u539f\u578b\uff0c\u4e0d\u65ad\u5b8c\u5584\u4e1a\u52a1\u5b57\u6bb5\u548c\u9875\u9762\u5e03\u5c40\uff0c\u914d\u7f6e\u4e1a\u52a1\u6743\u9650\u3001\u5ba1\u6279\u6d41\u7a0b\u548c\u7edf\u8ba1\u62a5\u8868\uff0c\u5b9e\u73b0\u9879\u76ee\u539f\u578b 2.0")))))),n.a.createElement("div",{class:"mt-10 -mx-4 relative lg:mt-0"},n.a.createElement("svg",{class:"absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden",width:"784",height:"404",fill:"none",viewBox:"0 0 784 404"},n.a.createElement("defs",null,n.a.createElement("pattern",{id:"ca9667ae-9f92-4be7-abcb-9e3d727f2941",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},n.a.createElement("rect",{x:"0",y:"0",width:"4",height:"4",class:"text-gray-200",fill:"currentColor"}))),n.a.createElement("rect",{width:"784",height:"404",fill:"url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"})),n.a.createElement("div",{class:"relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"},n.a.createElement("div",{class:"relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline"},n.a.createElement(s.a,{poster:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-object-manager.jpg",autoplay:!1,urls:[{name:"\u9ad8\u6e05",url:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-object-manager.mp4"}]}))))),n.a.createElement("svg",{class:"hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12",width:"404",height:"784",fill:"none",viewBox:"0 0 404 784"},n.a.createElement("defs",null,n.a.createElement("pattern",{id:"64e643ad-2176-4f86-b3d7-f2c5da3b6a6d",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},n.a.createElement("rect",{x:"0",y:"0",width:"4",height:"4",class:"text-gray-200",fill:"currentColor"}))),n.a.createElement("rect",{width:"404",height:"784",fill:"url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"})),n.a.createElement("div",{class:"relative mt-12 sm:mt-16 lg:mt-24"},n.a.createElement("div",{class:"lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"},n.a.createElement("div",{class:"lg:col-start-2"},n.a.createElement("h4",{class:"text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9"},"\u4f4e\u4ee3\u7801\u5f00\u53d1\u4e1a\u52a1\u903b\u8f91"),n.a.createElement("p",{class:"mt-3 text-lg leading-7 text-gray-500"},"\u534e\u708e\u9b54\u65b9\u63d0\u4f9b\u4e86\u4f4e\u4ee3\u7801\u5f00\u53d1\u7684\u5165\u53e3\uff0c\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u7f16\u5199\u4ee3\u7801\uff0c\u5c31\u80fd\u5b9e\u73b0\u7279\u5b9a\u6761\u4ef6\u4e0b\u7684\u81ea\u52a8\u8fd0\u884c\u3001\u622a\u505c\u3001\u56de\u6eda\u7b49\u4e1a\u52a1\u903b\u8f91\uff0c\u8ba9\u4e1a\u52a1\u5728\u65e0\u4eba\u503c\u5b88\u7684\u60c5\u51b5\u4e0b\u81ea\u52a8\u8fd0\u8f6c\uff0c\u9a71\u52a8\u6548\u7387\u63d0\u5347\u3002"),n.a.createElement("ul",{class:"mt-10"},n.a.createElement("li",null,n.a.createElement("div",{class:"flex"},n.a.createElement("div",{class:"flex-shrink-0"},n.a.createElement("div",{class:"flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"},n.a.createElement("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"})))),n.a.createElement("div",{class:"ml-4"},n.a.createElement("h5",{class:"text-lg leading-6 font-medium text-gray-900"},"\u89e6\u53d1\u5668"),n.a.createElement("p",{class:"mt-2 text-base leading-6 text-gray-500"},"\u5f53\u670d\u52a1\u7aef\u6267\u884c\u6570\u636e\u589e\u5220\u6539\u67e5\u65f6\uff0c\u81ea\u52a8\u89e6\u53d1\u76f8\u5173\u4ee3\u7801\u3002")))),n.a.createElement("li",{class:"mt-10"},n.a.createElement("div",{class:"flex"},n.a.createElement("div",{class:"flex-shrink-0"},n.a.createElement("div",{class:"flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"},n.a.createElement("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})))),n.a.createElement("div",{class:"ml-4"},n.a.createElement("h5",{class:"text-lg leading-6 font-medium text-gray-900"},"\u64cd\u4f5c\u6309\u94ae"),n.a.createElement("p",{class:"mt-2 text-base leading-6 text-gray-500"},"\u57fa\u672c\u7684\u589e\u5220\u6539\u6309\u94ae\u7684\u57fa\u7840\u4e0a\uff0c\u4e3a\u4e1a\u52a1\u5bf9\u8c61\u589e\u52a0\u81ea\u5b9a\u4e49\u7684\u64cd\u4f5c\u6309\u94ae\uff0c\u914d\u5408\u670d\u52a1\u7aefAPI\uff0c\u5b9e\u73b0\u4e2a\u6027\u5316\u7684\u4e1a\u52a1\u903b\u8f91\u3002")))))),n.a.createElement("div",{class:"mt-10 -mx-4 relative lg:mt-0 lg:col-start-1"},n.a.createElement("svg",{class:"absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden",width:"784",height:"404",fill:"none",viewBox:"0 0 784 404"},n.a.createElement("defs",null,n.a.createElement("pattern",{id:"e80155a9-dfde-425a-b5ea-1f6fadd20131",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},n.a.createElement("rect",{x:"0",y:"0",width:"4",height:"4",class:"text-gray-200",fill:"currentColor"}))),n.a.createElement("rect",{width:"784",height:"404",fill:"url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"})),n.a.createElement("div",{class:"relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"},n.a.createElement("div",{class:"relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline"},n.a.createElement(s.a,{poster:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-platform-features.jpg",autoplay:!1,urls:[{name:"\u6807\u6e05",url:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-platform-features-960.mp4"},{name:"\u9ad8\u6e05",url:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-platform-features.mp4"}]})))))))),n.a.createElement("div",{class:"relative bg-gray-700"},n.a.createElement("div",{class:"max-w-screen-xl mx-auto py-8 px-4 lg:flex lg:items-center lg:justify-between"},n.a.createElement("div",{class:""},n.a.createElement("div",{class:"text-base leading-6 font-semibold uppercase tracking-wider text-gray-300"},"\u5bf9\u4e8e\u534e\u708e\u9b54\u65b9\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\u6709\u7591\u95ee\uff1f\uff1f"),n.a.createElement("div",{class:"mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"},"\u5fae\u4fe1\u626b\u63cf\u4e8c\u7ef4\u7801\uff0c\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u4f1a\u4e3a\u60a8\u89e3\u7b54\u3002"),n.a.createElement("p",{class:"mt-3 text-lg leading-7 text-gray-300"},"\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u62e5\u6709\u5341\u5e74\u4ee5\u4e0a\u7684\u7ba1\u7406\u8f6f\u4ef6\u5f00\u53d1\u7ecf\u9a8c\uff0c\u65e0\u8bba\u60a8\u8be2\u95ee\u6709\u5173\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u5e73\u53f0\u7684\u529f\u80fd\u3001\u5b9a\u4ef7\u3001\u5b9e\u65bd\u6216\u4efb\u4f55\u5176\u4ed6\u65b9\u9762\u7684\u95ee\u9898\uff0c\u4ed6\u4eec\u90fd\u5c06\u968f\u65f6\u51c6\u5907\u4e3a\u60a8\u63d0\u4f9b\u5e2e\u52a9\u3002")),n.a.createElement("div",{class:"flex lg:flex-shrink-0"},n.a.createElement("img",{class:"h-32 w-32 m-4",src:"/assets/contact_by_weixin.png"})))))}}}]);