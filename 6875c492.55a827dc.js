(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{149:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(226),c=t(243),m=t(225);a.default=function(e){const{metadata:a,items:t}=e,{allTagsPath:r,name:o,count:s}=a;return n.a.createElement(l.a,{title:`Blog | Tagged "${o}"`,description:`Blog | Tagged "${o}"`},n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,s,' post(s) tagged with "',o,'"'),n.a.createElement(m.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map(({content:e})=>n.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},n.a.createElement(e,null))))))))}},226:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(236),c=t(223),m=t(224),o=t(1),s=t(225),i=t(227),d=t(228),b=t(222),g=t.n(b),E=t(229),u=t(230),v=t(84),h=t.n(v);function _({to:e,href:a,label:t,position:r,...l}){const c=Object(m.a)(e);return l.items?n.a.createElement("div",{class:"navbar__item dropdown dropdown--hoverable"},n.a.createElement("a",{class:"navbar__link",href:"#url"},t),n.a.createElement("ul",{class:"dropdown__menu"},l.items.map((e,a)=>n.a.createElement("li",null,n.a.createElement(_,Object(o.a)({},e,{key:a})))))):n.a.createElement(s.a,Object(o.a)({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:c},l),t)}var p=function(){const e=Object(c.a)(),{siteConfig:a={}}=e,{baseUrl:t,themeConfig:l={}}=a,{navbar:b={},disableDarkMode:v=!1}=l,{title:p,logo:f={},links:k=[],hideOnScroll:N=!1}=b,[y,w]=Object(r.useState)(!1),[O,j]=Object(r.useState)(!1),[C,M]=Object(E.a)(),{navbarRef:x,isNavbarVisible:T}=Object(u.a)(N),L=Object(r.useCallback)(()=>{document.body.style.overflow="hidden",w(!0)},[w]),I=Object(r.useCallback)(()=>{document.body.style.overflow="visible",w(!1)},[w]),S=Object(r.useCallback)(e=>M(e.target.checked?"dark":""),[M]),B=Object(m.a)(f.src);return n.a.createElement("nav",{ref:x,className:g()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":y,[h.a.navbarHideable]:N,[h.a.navbarHidden]:!T})},n.a.createElement("div",{className:"navbar__inner"},n.a.createElement("div",{className:"navbar__items"},n.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:L,onKeyDown:L},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},n.a.createElement("title",null,"Menu"),n.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),n.a.createElement(s.a,{className:"navbar__brand",to:t},null!=f&&n.a.createElement("img",{className:"navbar__logo",src:B,alt:f.alt}),null!=p&&n.a.createElement("strong",{className:O?h.a.hideLogoText:""},p)),k.filter(e=>"right"!==e.position).map((e,a)=>n.a.createElement(_,Object(o.a)({},e,{key:a})))),n.a.createElement("div",{className:"navbar__items navbar__items--right"},k.filter(e=>"right"===e.position).map((e,a)=>n.a.createElement(_,Object(o.a)({},e,{key:a}))),!v&&n.a.createElement(d.a,{className:h.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===C,onChange:S}),n.a.createElement(i.a,{handleSearchBarToggle:j,isSearchBarExpanded:O}))),n.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:I}),n.a.createElement("div",{className:"navbar-sidebar"},n.a.createElement("div",{className:"navbar-sidebar__brand"},n.a.createElement(s.a,{className:"navbar__brand",onClick:I,to:t},null!=f&&n.a.createElement("img",{className:"navbar__logo",src:B,alt:f.alt}),null!=p&&n.a.createElement("strong",null,p)),!v&&y&&n.a.createElement(d.a,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===C,onChange:S})),n.a.createElement("div",{className:"navbar-sidebar__items"},n.a.createElement("div",{className:"menu"},n.a.createElement("ul",{className:"menu__list"},k.map((e,a)=>n.a.createElement("li",{className:"menu__list-item",key:a},n.a.createElement(_,Object(o.a)({className:"menu__link"},e,{onClick:I})))))))))},f=t(85),k=t.n(f);function N({to:e,href:a,label:t,...r}){const l=Object(m.a)(e);return n.a.createElement(s.a,Object(o.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:l},r),t)}const y=({url:e,alt:a})=>n.a.createElement("img",{className:"footer__logo",alt:a,src:e});var w=function(){const e=Object(c.a)(),{siteConfig:a={}}=e,{themeConfig:t={}}=a,{footer:r}=t,{copyright:l,links:o=[],logo:s={}}=r||{},i=Object(m.a)(s.src);return r?n.a.createElement("footer",{className:g()("footer",{"footer--dark":"dark"===r.style})},n.a.createElement("div",{className:"container"},o&&o.length>0&&n.a.createElement("div",{className:"row footer__links"},o.map((e,a)=>n.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map((e,a)=>e.html?n.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(N,e)))):null))),(s||l)&&n.a.createElement("div",{className:"text--center"},s&&s.src&&n.a.createElement("div",{className:"margin-bottom--sm"},s.href?n.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:k.a.footerLogoLink},n.a.createElement(y,{alt:s.alt,url:i})):n.a.createElement(y,{alt:s.alt,url:i})),l))):null};t(86);a.a=function(e){const{siteConfig:a={}}=Object(c.a)(),{favicon:t,tagline:r,title:o,themeConfig:{image:s},url:i}=a,{children:d,title:b,noFooter:g,description:E,image:u,keywords:v,permalink:h,version:_}=e,f=b||`${o} \xb7 ${r}`,k=u||s,N=i+Object(m.a)(k),y=Object(m.a)(t);return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,null,n.a.createElement("html",{lang:"en"}),n.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),f&&n.a.createElement("title",null,f),f&&n.a.createElement("meta",{property:"og:title",content:f}),t&&n.a.createElement("link",{rel:"shortcut icon",href:y}),E&&n.a.createElement("meta",{name:"description",content:E}),E&&n.a.createElement("meta",{property:"og:description",content:E}),_&&n.a.createElement("meta",{name:"docsearch:version",content:_}),v&&v.length&&n.a.createElement("meta",{name:"keywords",content:v.join(",")}),k&&n.a.createElement("meta",{property:"og:image",content:N}),k&&n.a.createElement("meta",{property:"twitter:image",content:N}),k&&n.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${f}`}),h&&n.a.createElement("meta",{property:"og:url",content:i+h}),n.a.createElement("meta",{name:"twitter:card",content:"summary"})),n.a.createElement(p,null),n.a.createElement("div",{className:"main-wrapper"},d),!g&&n.a.createElement(w,null))}},243:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(222),c=t.n(l),m=t(221),o=t(225),s=t(249),i=t(88),d=t.n(i);const b=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:r,truncated:l,isBlogPostPage:i=!1}=e,{date:g,permalink:E,tags:u}=r,{author:v,title:h}=t,_=t.author_url||t.authorURL,p=t.author_title||t.authorTitle,f=t.author_image_url||t.authorImageURL;return n.a.createElement("article",{className:i?void 0:"margin-bottom--xl"},(()=>{const e=i?"h1":"h2",a=g.substring(0,10).split("-"),t=a[0],r=b[parseInt(a[1],10)-1],l=parseInt(a[2],10);return n.a.createElement("header",null,n.a.createElement(e,{className:c()("margin-bottom--sm",d.a.blogPostTitle)},i?h:n.a.createElement(o.a,{to:E},h)),n.a.createElement("div",{className:"margin-bottom--sm"},n.a.createElement("time",{dateTime:g,className:d.a.blogPostDate},r," ",l,", ",t)),n.a.createElement("div",{className:"avatar margin-bottom--md"},f&&n.a.createElement("a",{className:"avatar__photo-link",href:_,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{className:"avatar__photo",src:f,alt:v})),n.a.createElement("div",{className:"avatar__intro"},v&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:_,target:"_blank",rel:"noreferrer noopener"},v)),n.a.createElement("small",{className:"avatar__subtitle"},p)))))})(),n.a.createElement("section",{className:"markdown"},n.a.createElement(m.a,{components:s.a},a)),(u.length>0||l)&&n.a.createElement("footer",{className:"row margin-vert--lg"},u.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),u.map(({label:e,permalink:a})=>n.a.createElement(o.a,{key:a,className:"margin-horiz--sm",to:a},e))),l&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(o.a,{to:r.permalink,"aria-label":`Read more about ${h}`},n.a.createElement("strong",null,"Read More")))))}}}]);