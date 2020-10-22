(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var o=n(1),r=n(6),i=(n(0),n(369)),s={title:"Flow Positions"},a={unversionedId:"us/help/workflow/admin_positions",id:"us/help/workflow/admin_positions",isDocsHomePage:!1,title:"Flow Positions",description:'The administrator needs to set "Flow Positions" and "Positions Users" when designing the approval process. Because the option in the "Role Name" is the "Flow Positions" set by the administrator when the "handler" type of a processing step of the approval process is the "Role of initiator";',source:"@site/../docs/us/help/workflow/admin_positions.md",slug:"/us/help/workflow/admin_positions",permalink:"/us/help/workflow/admin_positions",version:"current"},p=[{value:"Positions Users",id:"positions-users",children:[]},{value:"Note",id:"note",children:[]}],l={rightToc:p};function c(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'The administrator needs to set "Flow Positions" and "Positions Users" when designing the approval process. Because the option in the "Role Name" is the "Flow Positions" set by the administrator when the "handler" type of a processing step of the approval process is the "Role of initiator"; ',Object(i.b)("br",null),'\nFor example, when "Department Manager", "Chief" is created in "Flow Positions", the "Role manager" option in the approval process includes "Department Manager", "Chief".\n',Object(i.b)("img",{src:n(617).default})),Object(i.b)("p",null," ",Object(i.b)("img",{src:n(618).default}),'\nNote: For the design of the approval process, please refer to the "flow_design" help documentation.'),Object(i.b)("h4",{id:"detailed-steps-for-flow-positions"},"Detailed steps for Flow Positions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'In the setup interface, click "workflow" and click "Flow Positions".'),Object(i.b)("li",{parentName:"ul"},'Click the "Create" button in the upper right corner to pop up the pop-up box for the new job. After filling in the name of the new job in "Position Name", click the "Create" button to complete the approval.'),Object(i.b)("li",{parentName:"ul"},'In the post list page, click on the post name on the right side of the "pen shape" button, "\xd7" button, you can modify the job, delete.')),Object(i.b)("h3",{id:"positions-users"},"Positions Users"),Object(i.b)("p",null,'"Positions Users" is similar to the position of an employee in a real job. Assuming "Position" is "department manager", "Positions Users" correspond to the department manager of the specific department, such as the "department manager" of the personnel department, the "department manager of the finance department", the "department manager" of the technical department.'),Object(i.b)("p",null,Object(i.b)("img",{src:n(619).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'in the figure you can see that each "Department Manager" position, the corresponding "jurisdiction" is the specific sector (such as: Technology, Finance, Ministry of Personnel), and "Positions Users" is appointed department manager The'),Object(i.b)("li",{parentName:"ul"},"Note: The appointed department manager can also be multiplier.")),Object(i.b)("h4",{id:"detailed-steps-for-positions-users"},"Detailed steps for Positions Users:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'set the interface, click on "workflow", click "Positions Users", then click the new, will pop up "Positions Users" pop-up box.\n\xa0',Object(i.b)("img",{src:n(620).default})),Object(i.b)("li",{parentName:"ul"},'Select an established approval position, such as "Department Manager", specify the post member (which can be multiple people), jurisdiction.'),Object(i.b)("li",{parentName:"ul"},'Click the "Create" button to complete.'),Object(i.b)("li",{parentName:"ul"},'In the post list page, click on the post name on the right side of the "pen shape" button, "\xd7" button, you can edit the job, modify.')),Object(i.b)("h4",{id:"based-on-flow-positions-to-define-the-advantages-of-flow"},'Based on "Flow Positions" to define the advantages of flow:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Reduced the impact of staffing adjustments on process settings:\n\xa0If the department manager to replace, assuming that 10 flow are defined a step for this person to deal with, then you need to modify the 10 flow. And if the steps of the 10 flow is the approval of the post "department manager" to deal with, then there is no need to modify the flow of these 10 processes, only in the approval of the post set, the department\'s department manager for others.')),Object(i.b)("h3",{id:"note"},"Note"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"A user can correspond to multiple Flow Positions"),", for example, the same person, both the office manager and the company's office director."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"A Flow Positions can also have multiple users"),', (corresponding to the same or different scope of approval for departments). For example, "Department Manager" of the post, the Ministry of Finance can be a member of the staff, the staff of the Ministry of Personnel is 2, so that the approval of the Ministry of Personnel process, sometimes need to choose one of the two department managers.')))}c.isMDXComponent=!0},369:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},f=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(n),h=o,d=f["".concat(s,".").concat(h)]||f[h]||u[h]||i;return n?r.a.createElement(d,a({ref:t},l,{components:n})):r.a.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=h;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},617:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/positions1-94f9891b37aed51e9fab8e69350390f4.png"},618:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/positions2-4177bf1cd0f2a17311c923c9f3333048.png"},619:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/positions3-0da21a0739fe3755bae92e1dc5567bd1.png"},620:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/positions4-5b9f9cf1da5904c09f065e8f6207eeca.png"}}]);