(window.webpackJsonp=window.webpackJsonp||[]).push([[256,46],{513:function(e,a,t){"use strict";var l=t(1),r=t(0),s=t.n(r),c=t(501),n=t(502),m=t(498),i=t(517),o=t(514),g=t(506),d=t(518),b=t(509),E=t(510),h=t(511),x=t(49),v=t.n(x),p=t(515),u=t(504);const N="right";a.a=function(){let{siteConfig:{customFields:{navbar_items_us:e=[]},themeConfig:{navbar:{title:a="",items:t=[],hideOnScroll:x=!1,style:y}={},colorMode:{disableSwitch:f=!1}={}}},isClient:w}=Object(m.a)();const[_,k]=Object(r.useState)(!1),[j,O]=Object(r.useState)(!1),{isDarkTheme:C,setLightTheme:M,setDarkTheme:I}=Object(g.a)(),{navbarRef:L,isNavbarVisible:S}=Object(d.a)(x);let{logoLink:B,logoLinkProps:D,logoImageUrl:T,logoAlt:R}=Object(h.a)();const V=Object(u.useLocation)();V&&V.pathname.startsWith("/us")&&(t=e,B="/us/"),Object(b.a)(_);const A=Object(r.useCallback)((()=>{k(!0)}),[k]),H=Object(r.useCallback)((()=>{k(!1)}),[k]),z=Object(r.useCallback)((e=>e.target.checked?I():M()),[M,I]),F=Object(E.a)();Object(r.useEffect)((()=>{F===E.b.desktop&&k(!1)}),[F]);const{leftItems:J,rightItems:P}=function(e){return{leftItems:e.filter((e=>{var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:N)})),rightItems:e.filter((e=>{var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:N)}))}}(t);return s.a.createElement("nav",{ref:L,className:Object(c.a)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===y,"navbar--primary":"primary"===y,"navbar-sidebar--show":_,[v.a.navbarHideable]:x,[v.a.navbarHidden]:!S})},s.a.createElement("div",{className:"navbar__inner"},s.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&s.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:A,onKeyDown:A},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},s.a.createElement("title",null,"Menu"),s.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),s.a.createElement(n.a,Object(l.a)({className:"navbar__brand",to:B},D),null!=T&&s.a.createElement("img",{key:w,className:"navbar__logo",src:T,alt:R}),null!=a&&s.a.createElement("strong",{className:Object(c.a)("navbar__title",{[v.a.hideLogoText]:j})},a)),J.map(((e,a)=>s.a.createElement(p.a,Object(l.a)({},e,{key:a}))))),s.a.createElement("div",{className:"navbar__items navbar__items--right"},P.map(((e,a)=>s.a.createElement(p.a,Object(l.a)({},e,{key:a})))),!f&&s.a.createElement(o.a,{className:v.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:C,onChange:z}),s.a.createElement(i.a,{handleSearchBarToggle:O,isSearchBarExpanded:j}))),s.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:H}),s.a.createElement("div",{className:"navbar-sidebar"},s.a.createElement("div",{className:"navbar-sidebar__brand"},s.a.createElement(n.a,Object(l.a)({className:"navbar__brand",onClick:H,to:B},D),null!=T&&s.a.createElement("img",{key:w,className:"navbar__logo",src:T,alt:R}),null!=a&&s.a.createElement("strong",{className:"navbar__title"},a)),!f&&_&&s.a.createElement(o.a,{"aria-label":"Dark mode toggle in sidebar",checked:C,onChange:z})),s.a.createElement("div",{className:"navbar-sidebar__items"},s.a.createElement("div",{className:"menu"},s.a.createElement("ul",{className:"menu__list"},t.map(((e,a)=>s.a.createElement(p.a,Object(l.a)({mobile:!0},e,{onClick:H,key:a})))))))))}},516:function(e,a,t){"use strict";var l=t(5),r=t(0),s=t.n(r),c=function(e){function a(){return e.apply(this,arguments)||this}return Object(l.a)(a,e),a.prototype.render=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"bg-white"},s.a.createElement("div",{className:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"},s.a.createElement("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8"},s.a.createElement("div",{className:"xl:col-span-1"},s.a.createElement("img",{className:"h-10",src:"/img/logo_platform_white.png",alt:"\u534e\u708e\u9b54\u65b9"}),s.a.createElement("p",{className:"mt-8 text-gray-500 text-base leading-6"},"\u534e\u708e\u9b54\u65b9\u662f\u65b0\u4e00\u4ee3\u4f4e\u4ee3\u7801\u5e73\u53f0\uff0c\u57fa\u4e8e\u5546\u4e1a\u667a\u80fd\u548c\u6a21\u578b\u9a71\u52a8\uff0c\u53ef\u4ee5\u6309\u7167\u4e1a\u52a1\u90e8\u95e8\u7684\u9700\u6c42\uff0c\u8f7b\u677e\u4fbf\u6377\u5730\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u3001\u4e2a\u6027\u5316\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),s.a.createElement("div",{className:"mt-8 flex"},s.a.createElement("a",{href:"tel://4008201612",className:"text-gray-400 hover:text-gray-500"},s.a.createElement("span",{className:"sr-only"},"Phone"),s.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",class:"phone w-6 h-6"},s.a.createElement("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}))),s.a.createElement("a",{href:"https://github.com/steedos/steedos-platform/",className:"ml-6 text-gray-400 hover:text-gray-500"},s.a.createElement("span",{className:"sr-only"},"GitHub"),s.a.createElement("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24"},s.a.createElement("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"}))))),s.a.createElement("div",{class:"mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2"},s.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},s.a.createElement("div",null,s.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e73\u53f0"),s.a.createElement("ul",{className:"mt-4"},s.a.createElement("li",null,s.a.createElement("a",{href:"/platform/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5e73\u53f0\u6982\u89c8")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/platform/lowcode/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/platform/cases",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5ba2\u6237\u6848\u4f8b")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/pricing/platform",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u7248\u672c\u4e0e\u62a5\u4ef7")))),s.a.createElement("div",{className:"mt-12 md:mt-0"},s.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e94\u7528\u5e02\u573a"),s.a.createElement("ul",{className:"mt-4"},s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/products/contract/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5408\u540c\u7ba1\u7406")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/products/sales/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u9500\u552e\u7ba1\u7406")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/products/purchase/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u91c7\u8d2d\u7ba1\u7406")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/products/cost/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8d39\u63a7\u7ba1\u7406")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/products/workflow/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6d41\u7a0b\u7ba1\u7406"))))),s.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},s.a.createElement("div",null,s.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u89c6\u9891\u6f14\u793a"),s.a.createElement("ul",{className:"mt-4"},s.a.createElement("li",null,s.a.createElement("a",{href:"/videos/steedos-digital-transformation/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6570\u5b57\u5316\u8f6c\u578b")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/videos/steedos-platform-features/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801\u5f00\u53d1")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/videos/lesson-object/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u96f6\u4ee3\u7801\u5f00\u53d1")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/videos/workflow/admin-contracts",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u81ea\u5b9a\u4e49\u6d41\u7a0b")))),s.a.createElement("div",{className:"mt-12 md:mt-0"},s.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5173\u4e8e"),s.a.createElement("ul",{className:"mt-4"},s.a.createElement("li",null,s.a.createElement("a",{href:"/company/about-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5173\u4e8e\u6211\u4eec")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/company/customers",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6210\u529f\u6848\u4f8b")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/company/contact-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8054\u7cfb\u6211\u4eec")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"tel://4008201612",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"400-820-1612"))))))),s.a.createElement("div",{className:"mt-12 border-t border-gray-200 pt-8"},s.a.createElement("p",{className:"text-base leading-6 text-gray-500 xl:text-center"},"\xa9 2020 \u534e\u708e\u8f6f\u4ef6. \u4fdd\u7559\u6240\u6709\u6743\u5229."),s.a.createElement("nav",{class:"-mx-5 -my-2 flex flex-wrap justify-center","aria-label":"Footer"},s.a.createElement("div",{class:"px-3 py-2"},s.a.createElement("a",{href:"/cn",class:"text-base text-gray-500 hover:text-gray-900"},"\u4e2d\u6587")),s.a.createElement("div",{class:"px-3 py-2"},s.a.createElement("a",{href:"https://www.steedos.org/",class:"text-base text-gray-500 hover:text-gray-900"},"English"))),s.a.createElement("div",{className:"flex justify-center mt-10"},s.a.createElement("div",{className:"text-center mr-8"},s.a.createElement("img",{className:"h-36 w-36 mb-2",src:"/assets/github/platform/cn/QR_wechat_developers.jpg",title:"\u5f00\u53d1\u4eba\u5458\u5fae\u4fe1\u7fa4"}),s.a.createElement("div",null,"\u5f00\u53d1\u4eba\u5458\u5fae\u4fe1\u7fa4")),s.a.createElement("div",{className:"text-center mr-8"},s.a.createElement("img",{className:"h-36 w-36 mb-2",src:"/assets/github/platform/cn/business_consulting.jpg",title:"\u5546\u52a1\u54a8\u8be2"}),s.a.createElement("div",null,"\u5546\u52a1\u54a8\u8be2")),s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{className:"h-36 w-36 mb-2",src:"/assets/github/platform/cn/public_number.jpg",title:"\u5fae\u4fe1\u516c\u4f17\u53f7"}),s.a.createElement("div",null,"\u5fae\u4fe1\u516c\u4f17\u53f7")))))))},a}(s.a.Component);a.a=c}}]);