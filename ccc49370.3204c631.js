(window.webpackJsonp=window.webpackJsonp||[]).push([[348,46,251],{489:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(510),s=t(619),c=t(500);var m=function(e){const{nextItem:a,prevItem:t}=e;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},i=t(603);a.default=function(e){const{content:a}=e,{frontMatter:t,metadata:l}=a,{title:c,description:o,nextItem:d,prevItem:g,editUrl:v}=l,{hide_table_of_contents:E}=t;return r.a.createElement(n.a,{title:c,description:o},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(s.a,{frontMatter:t,metadata:l,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,v&&r.a.createElement("a",{href:v,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(d||g)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(m,{nextItem:d,prevItem:g}))),!E&&a.rightToc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(i.a,{headings:a.rightToc})))))}},511:function(e,a,t){"use strict";var l=t(1),r=t(0),n=t.n(r),s=t(499),c=t(500),m=t(496),i=t(515),o=t(512),d=t(505),g=t(516),v=t(507),E=t(508),b=t(509),h=t(49),u=t.n(h),p=t(513),x=t(502);const N="right";a.a=function(){let{siteConfig:{customFields:{navbar_items_us:e=[]},themeConfig:{navbar:{title:a="",items:t=[],hideOnScroll:h=!1,style:f}={},colorMode:{disableSwitch:y=!1}={}}},isClient:_}=Object(m.a)();const[k,w]=Object(r.useState)(!1),[j,O]=Object(r.useState)(!1),{isDarkTheme:C,setLightTheme:I,setDarkTheme:L}=Object(d.a)(),{navbarRef:M,isNavbarVisible:B}=Object(g.a)(h);let{logoLink:R,logoLinkProps:S,logoImageUrl:T,logoAlt:z}=Object(b.a)();const P=Object(x.useLocation)();P&&P.pathname.startsWith("/us")&&(t=e,R="/us/"),Object(v.a)(k);const A=Object(r.useCallback)((()=>{w(!0)}),[w]),D=Object(r.useCallback)((()=>{w(!1)}),[w]),H=Object(r.useCallback)((e=>e.target.checked?L():I()),[I,L]),V=Object(E.a)();Object(r.useEffect)((()=>{V===E.b.desktop&&w(!1)}),[V]);const{leftItems:U,rightItems:q}=function(e){return{leftItems:e.filter((e=>{var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:N)})),rightItems:e.filter((e=>{var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:N)}))}}(t);return n.a.createElement("nav",{ref:M,className:Object(s.a)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===f,"navbar--primary":"primary"===f,"navbar-sidebar--show":k,[u.a.navbarHideable]:h,[u.a.navbarHidden]:!B})},n.a.createElement("div",{className:"navbar__inner"},n.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&n.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:A,onKeyDown:A},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},n.a.createElement("title",null,"Menu"),n.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),n.a.createElement(c.a,Object(l.a)({className:"navbar__brand",to:R},S),null!=T&&n.a.createElement("img",{key:_,className:"navbar__logo",src:T,alt:z}),null!=a&&n.a.createElement("strong",{className:Object(s.a)("navbar__title",{[u.a.hideLogoText]:j})},a)),U.map(((e,a)=>n.a.createElement(p.a,Object(l.a)({},e,{key:a}))))),n.a.createElement("div",{className:"navbar__items navbar__items--right"},q.map(((e,a)=>n.a.createElement(p.a,Object(l.a)({},e,{key:a})))),!y&&n.a.createElement(o.a,{className:u.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:C,onChange:H}),n.a.createElement(i.a,{handleSearchBarToggle:O,isSearchBarExpanded:j}))),n.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:D}),n.a.createElement("div",{className:"navbar-sidebar"},n.a.createElement("div",{className:"navbar-sidebar__brand"},n.a.createElement(c.a,Object(l.a)({className:"navbar__brand",onClick:D,to:R},S),null!=T&&n.a.createElement("img",{key:_,className:"navbar__logo",src:T,alt:z}),null!=a&&n.a.createElement("strong",{className:"navbar__title"},a)),!y&&k&&n.a.createElement(o.a,{"aria-label":"Dark mode toggle in sidebar",checked:C,onChange:H})),n.a.createElement("div",{className:"navbar-sidebar__items"},n.a.createElement("div",{className:"menu"},n.a.createElement("ul",{className:"menu__list"},t.map(((e,a)=>n.a.createElement(p.a,Object(l.a)({mobile:!0},e,{onClick:D,key:a})))))))))}},514:function(e,a,t){"use strict";var l=t(5),r=t(0),n=t.n(r),s=function(e){function a(){return e.apply(this,arguments)||this}return Object(l.a)(a,e),a.prototype.render=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"bg-white"},n.a.createElement("div",{className:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"},n.a.createElement("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8"},n.a.createElement("div",{className:"xl:col-span-1"},n.a.createElement("img",{className:"h-10",src:"/img/logo_platform_white.png",alt:"\u534e\u708e\u9b54\u65b9"}),n.a.createElement("p",{className:"mt-8 text-gray-500 text-base leading-6"},"\u534e\u708e\u9b54\u65b9\u662f\u65b0\u4e00\u4ee3\u4f4e\u4ee3\u7801\u5e73\u53f0\uff0c\u57fa\u4e8e\u5546\u4e1a\u667a\u80fd\u548c\u6a21\u578b\u9a71\u52a8\uff0c\u53ef\u4ee5\u6309\u7167\u4e1a\u52a1\u90e8\u95e8\u7684\u9700\u6c42\uff0c\u8f7b\u677e\u4fbf\u6377\u5730\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u3001\u4e2a\u6027\u5316\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),n.a.createElement("div",{className:"mt-8 flex"},n.a.createElement("a",{href:"tel://4008201612",className:"text-gray-400 hover:text-gray-500"},n.a.createElement("span",{className:"sr-only"},"Phone"),n.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",class:"phone w-6 h-6"},n.a.createElement("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}))),n.a.createElement("a",{href:"https://github.com/steedos/steedos-platform/",className:"ml-6 text-gray-400 hover:text-gray-500"},n.a.createElement("span",{className:"sr-only"},"GitHub"),n.a.createElement("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24"},n.a.createElement("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"}))))),n.a.createElement("div",{class:"mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2"},n.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},n.a.createElement("div",null,n.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e73\u53f0"),n.a.createElement("ul",{className:"mt-4"},n.a.createElement("li",null,n.a.createElement("a",{href:"/platform/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5e73\u53f0\u6982\u89c8")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/platform/lowcode/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/platform/cases",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5ba2\u6237\u6848\u4f8b")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/pricing/platform",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u7248\u672c\u4e0e\u62a5\u4ef7")))),n.a.createElement("div",{className:"mt-12 md:mt-0"},n.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e94\u7528\u5e02\u573a"),n.a.createElement("ul",{className:"mt-4"},n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/products/contract/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5408\u540c\u7ba1\u7406")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/products/sales/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u9500\u552e\u7ba1\u7406")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/products/purchase/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u91c7\u8d2d\u7ba1\u7406")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/products/cost/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8d39\u63a7\u7ba1\u7406")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/products/workflow/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6d41\u7a0b\u7ba1\u7406"))))),n.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},n.a.createElement("div",null,n.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u89c6\u9891\u6f14\u793a"),n.a.createElement("ul",{className:"mt-4"},n.a.createElement("li",null,n.a.createElement("a",{href:"/videos/steedos-digital-transformation/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6570\u5b57\u5316\u8f6c\u578b")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/videos/steedos-platform-features/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801\u5f00\u53d1")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/videos/lesson-object/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u96f6\u4ee3\u7801\u5f00\u53d1")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/videos/workflow/admin-contracts",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u81ea\u5b9a\u4e49\u6d41\u7a0b")))),n.a.createElement("div",{className:"mt-12 md:mt-0"},n.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5173\u4e8e"),n.a.createElement("ul",{className:"mt-4"},n.a.createElement("li",null,n.a.createElement("a",{href:"/company/about-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5173\u4e8e\u6211\u4eec")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/company/customers",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6210\u529f\u6848\u4f8b")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"/company/contact-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8054\u7cfb\u6211\u4eec")),n.a.createElement("li",{className:"mt-4"},n.a.createElement("a",{href:"tel://4008201612",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"400-820-1612"))))))),n.a.createElement("div",{className:"mt-12 border-t border-gray-200 pt-8"},n.a.createElement("p",{className:"text-base leading-6 text-gray-500 xl:text-center"},"\xa9 2020 \u534e\u708e\u8f6f\u4ef6. \u4fdd\u7559\u6240\u6709\u6743\u5229."),n.a.createElement("nav",{class:"-mx-5 -my-2 flex flex-wrap justify-center","aria-label":"Footer"},n.a.createElement("div",{class:"px-3 py-2"},n.a.createElement("a",{href:"/cn",class:"text-base text-gray-500 hover:text-gray-900"},"\u4e2d\u6587")),n.a.createElement("div",{class:"px-3 py-2"},n.a.createElement("a",{href:"https://www.steedos.org/",class:"text-base text-gray-500 hover:text-gray-900"},"English"))),n.a.createElement("div",{className:"flex justify-center mt-10"},n.a.createElement("div",{className:"text-center mr-8"},n.a.createElement("img",{className:"h-36 w-36 mb-2",src:"/assets/github/platform/cn/QR_wechat_developers.jpg",title:"\u5f00\u53d1\u4eba\u5458\u5fae\u4fe1\u7fa4"}),n.a.createElement("div",null,"\u5f00\u53d1\u4eba\u5458\u5fae\u4fe1\u7fa4")),n.a.createElement("div",{className:"text-center mr-8"},n.a.createElement("img",{className:"h-36 w-36 mb-2",src:"/assets/github/platform/cn/business_consulting.jpg",title:"\u5546\u52a1\u54a8\u8be2"}),n.a.createElement("div",null,"\u5546\u52a1\u54a8\u8be2")),n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{className:"h-36 w-36 mb-2",src:"/assets/github/platform/cn/public_number.jpg",title:"\u5fae\u4fe1\u516c\u4f17\u53f7"}),n.a.createElement("div",null,"\u5fae\u4fe1\u516c\u4f17\u53f7")))))))},a}(n.a.Component);a.a=s},603:function(e,a,t){"use strict";var l=t(0),r=t.n(l);var n=function(e,a,t){const[r,n]=Object(l.useState)(void 0);Object(l.useEffect)((()=>{let l,s;function c(){const c=function(){let e=0,a=null;for(l=document.getElementsByClassName("anchor");e<l.length&&!a;){const r=l[e],{top:n}=r.getBoundingClientRect();n>=0&&n<=t&&(a=r),e+=1}return a}();if(c){let t=0,l=!1;for(s=document.getElementsByClassName(e);t<s.length&&!l;){const e=s[t],{href:m}=e,i=decodeURIComponent(m.substring(m.indexOf("#")+1));c.id===i&&(r&&r.classList.remove(a),e.classList.add(a),n(e),l=!0),t+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}))},s=t(51),c=t.n(s);const m="table-of-contents__link";function i({headings:e,isChild:a}){return e.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},e.map((e=>r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(i,{isChild:!0,headings:e.children}))))):null}a.a=function({headings:e}){return n(m,"table-of-contents__link--active",100),r.a.createElement("div",{className:c.a.tableOfContents},r.a.createElement(i,{headings:e}))}}}]);