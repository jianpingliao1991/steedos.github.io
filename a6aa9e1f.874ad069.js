(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{403:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(406),c=t(411),m=t(426),o=t(408);var i=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(o.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(o.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items,n=Object(l.a)().siteConfig.title,o="/"===a.permalink?n:"Blog";return r.a.createElement(c.a,{title:o,description:"Blog"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},t.map((function(e){var a=e.content;return r.a.createElement(m.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(i,{metadata:a})))))}},411:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(417),c=t(406),m=t(409),o=t(424),i=t(1),s=t(408),u=t(415),d=t(420),g=t(421),b=t(407),E=t.n(b),v=t(412),h=t(425),p=t(418),_=t(127),f=t.n(_),k=t(410);function N({activeBasePath:e,to:a,href:t,label:n,position:l,...c}){const o=Object(m.a)(a),u=Object(m.a)(e);return r.a.createElement(s.a,Object(i.a)({className:"navbar__item navbar__link"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:o,...e?{isActive:(e,a)=>a.pathname.startsWith(u)}:null},c),n)}var y=function(e){const{siteConfig:a={},isClient:t}=Object(c.a)(),{baseUrl:l,themeConfig:o={}}=a,{navbar:b={},disableDarkMode:_=!1}=o;let{title:y,logo:O={},links:j=[],hideOnScroll:w=!1}=b;const[C,T]=Object(n.useState)(!1),[B,x]=Object(n.useState)(!1),{isDarkTheme:L,setLightTheme:M,setDarkTheme:S}=Object(v.a)(),{navbarRef:D,isNavbarVisible:P}=Object(h.a)(w);Object(p.a)(C);const I=Object(n.useCallback)(()=>{T(!0)},[T]),R=Object(n.useCallback)(()=>{T(!1)},[T]),A=Object(n.useCallback)(e=>e.target.checked?S():M(),[M,S]);let F=O.href||l,J={};O.target?J={target:O.target}:Object(u.a)(F)||(J={rel:"noopener noreferrer",target:"_blank"});const $=O.srcDark&&L?O.srcDark:O.src,W=Object(m.a)($),H=Object(k.d)();return H&&H.pathname.indexOf("/us")>=0&&(j=b.links_us,y="Steedos",F="/us/"),r.a.createElement("nav",{ref:D,className:E()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":C,[f.a.navbarHideable]:w,[f.a.navbarHidden]:!P})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:I,onKeyDown:I},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(s.a,Object(i.a)({className:"navbar__brand",to:F},J),null!=O&&r.a.createElement("img",{key:t,className:"navbar__logo",src:W,alt:O.alt}),null!=y&&r.a.createElement("strong",{className:E()("navbar__title",{[f.a.hideLogoText]:B})},y)),j.filter(e=>"right"!==e.position).map((e,a)=>{return void 0!==e.items&&e.items.length>0?r.a.createElement("div",{class:"dropdown dropdown--hoverable"},r.a.createElement(N,Object(i.a)({},e,{key:a})),r.a.createElement("ul",{class:"dropdown__menu"},e.items.map((e,t)=>r.a.createElement("li",null,r.a.createElement(N,Object(i.a)({},e,{key:a+"-"+t})))))):r.a.createElement(N,Object(i.a)({},e,{key:a}))})),r.a.createElement("div",{className:"navbar__items navbar__items--right"},j.filter(e=>"right"===e.position).map((e,a)=>r.a.createElement(N,Object(i.a)({},e,{key:a}))),!_&&r.a.createElement(g.a,{className:f.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:L,onChange:A}),!C&&r.a.createElement(d.a,{handleSearchBarToggle:x,isSearchBarExpanded:B}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:R}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(s.a,Object(i.a)({className:"navbar__brand",onClick:R,to:F},J),null!=O&&r.a.createElement("img",{key:t,className:"navbar__logo",src:W,alt:O.alt}),null!=y&&r.a.createElement("strong",{className:"navbar__title"},y)),!_&&C&&r.a.createElement(g.a,{"aria-label":"Dark mode toggle in sidebar",checked:L,onChange:A}),r.a.createElement(d.a,{handleSearchBarToggle:x,isSearchBarExpanded:B})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},j.map((e,a)=>r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(N,Object(i.a)({className:"menu__link"},e,{onClick:R}))),void 0!==e.items&&e.items.length>0&&e.items.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:a+"-"+t},r.a.createElement(N,Object(i.a)({className:"menu__link",style:{paddingLeft:"3rem"}},e,{onClick:R})))))))))))},O=t(9),j=t(128),w=t.n(j);function C(e){var a=e.to,t=e.href,n=e.label,l=Object(O.a)(e,["to","href","label"]),c=Object(m.a)(a);return r.a.createElement(s.a,Object(i.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},l),n)}var T=function(e){var a=e.url,t=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:t,src:a})};var B=function(){var e=Object(c.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,n=t||{},l=n.copyright,o=n.links,i=void 0===o?[]:o,s=n.logo,u=void 0===s?{}:s,d=Object(m.a)(u.src);return t?r.a.createElement("footer",{className:E()("footer",{"footer--dark":"dark"===t.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},i.map((function(e,a){return r.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?r.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(C,e))}))):null)}))),(u||l)&&r.a.createElement("div",{className:"text--center"},u&&u.src&&r.a.createElement("div",{className:"margin-bottom--sm"},u.href?r.a.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:w.a.footerLogoLink},r.a.createElement(T,{alt:u.alt,url:d})):r.a.createElement(T,{alt:u.alt,url:d})),l))):null},x=t(521);t(129);a.a=function(e){const{siteConfig:a={}}=Object(c.a)(),{favicon:t,title:n,themeConfig:{image:i},url:s}=a,{route:u,children:d,title:g,noFooter:b,description:E,image:v,keywords:h,permalink:p,version:_}=e,f=g?`${g} | ${n}`:n,k=v||i,N=s+Object(m.a)(k),O=Object(m.a)(t);return r.a.createElement(x.a,{iconPath:"/assets/icons"},r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),f&&r.a.createElement("title",null,f),f&&r.a.createElement("meta",{property:"og:title",content:f}),t&&r.a.createElement("link",{rel:"shortcut icon",href:O}),E&&r.a.createElement("meta",{name:"description",content:E}),E&&r.a.createElement("meta",{property:"og:description",content:E}),_&&r.a.createElement("meta",{name:"docsearch:version",content:_}),h&&h.length&&r.a.createElement("meta",{name:"keywords",content:h.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:N}),k&&r.a.createElement("meta",{property:"twitter:image",content:N}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${f}`}),p&&r.a.createElement("meta",{property:"og:url",content:s+p}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(y,null),r.a.createElement("div",{className:"main-wrapper"},d),!b&&r.a.createElement(B,null)))}},426:function(e,a,t){"use strict";t(71);var n=t(0),r=t.n(n),l=t(407),c=t.n(l),m=t(405),o=t(408),i=t(436),s=t(131),u=t.n(s),d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,l,s,g=e.children,b=e.frontMatter,E=e.metadata,v=e.truncated,h=e.isBlogPostPage,p=void 0!==h&&h,_=E.date,f=E.permalink,k=E.tags,N=b.author,y=b.title,O=b.author_url||b.authorURL,j=b.author_title||b.authorTitle,w=b.author_image_url||b.authorImageURL;return r.a.createElement("article",{className:p?void 0:"margin-bottom--xl"},(a=p?"h1":"h2",t=_.substring(0,10).split("-"),n=t[0],l=d[parseInt(t[1],10)-1],s=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:c()("margin-bottom--sm",u.a.blogPostTitle)},p?y:r.a.createElement(o.a,{to:f},y)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("time",{dateTime:_,className:u.a.blogPostDate},l," ",s,", ",n)),r.a.createElement("div",{className:"avatar margin-bottom--md"},w&&r.a.createElement("a",{className:"avatar__photo-link",href:O,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:w,alt:N})),r.a.createElement("div",{className:"avatar__intro"},N&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:O,target:"_blank",rel:"noreferrer noopener"},N)),r.a.createElement("small",{className:"avatar__subtitle"},j)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:i.a},g)),(k.length>0||v)&&r.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),k.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),v&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(o.a,{to:E.permalink,"aria-label":"Read more about "+y},r.a.createElement("strong",null,"Read More")))))}},427:function(e,a,t){"use strict";var n=t(1),r=t(0),l=t.n(r),c=t(407),m=t.n(c),o=t(437),i=t(430),s=t.n(i),u=t(428),d=t.n(u),g=t(429),b=t.n(g),E=t(406),v=t(412),h=t(130),p=t.n(h);const _=/{([\d,-]+)}/,f=/title=".*"/;a.a=({children:e,className:a,metastring:t})=>{const{siteConfig:{themeConfig:{prism:c={}}}}=Object(E.a)(),[i,u]=Object(r.useState)(!1),[g,h]=Object(r.useState)(!1);Object(r.useEffect)(()=>{h(!0)},[]);const k=Object(r.useRef)(null),N=Object(r.useRef)(null);let y=[],O="";const{isDarkTheme:j}=Object(v.a)(),w=c.theme||s.a,C=c.darkTheme||w,T=j?C:w;if(t&&_.test(t)){const e=t.match(_)[1];y=b.a.parse(e).filter(e=>e>0)}t&&f.test(t)&&(O=t.match(f)[0].split("title=")[1].replace(/"+/g,"")),Object(r.useEffect)(()=>{let e;return N.current&&(e=new d.a(N.current,{target:()=>k.current})),()=>{e&&e.destroy()}},[N.current,k.current]);let B=a&&a.replace(/language-/,"");!B&&c.defaultLanguage&&(B=c.defaultLanguage);const x=()=>{window.getSelection().empty(),u(!0),setTimeout(()=>u(!1),2e3)};return l.a.createElement(o.a,Object(n.a)({},o.b,{key:g,theme:T,code:e.replace(/\n$/,""),language:B}),({className:e,style:a,tokens:t,getLineProps:r,getTokenProps:c})=>l.a.createElement(l.a.Fragment,null,O&&l.a.createElement("div",{style:a,className:p.a.codeBlockTitle},O),l.a.createElement("div",{className:p.a.codeBlockContent},l.a.createElement("button",{ref:N,type:"button","aria-label":"Copy code to clipboard",className:m()(p.a.copyButton,{[p.a.copyButtonWithTitle]:O}),onClick:x},i?"Copied":"Copy"),l.a.createElement("pre",{className:m()(e,p.a.codeBlock,{[p.a.codeBlockWithTitle]:O})},l.a.createElement("div",{ref:k,className:p.a.codeBlockLines,style:a},t.map((e,a)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const t=r({line:e,key:a});return y.includes(a+1)&&(t.className=`${t.className} docusaurus-highlight-code-line`),l.a.createElement("div",Object(n.a)({key:a},t),e.map((e,a)=>l.a.createElement("span",Object(n.a)({key:a},c({token:e,key:a})))))}))))))}}}]);