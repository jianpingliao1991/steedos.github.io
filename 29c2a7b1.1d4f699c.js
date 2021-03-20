(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(508)),s={title:"Approver settings"},i={unversionedId:"us/help/workflow/flow_step_user",id:"us/help/workflow/flow_step_user",isDocsHomePage:!1,title:"Approver settings",description:"In the flow designer\uff0cadmins have several options to asign users for a node.",source:"@site/../docs/us/help/workflow/flow_step_user.md",slug:"/us/help/workflow/flow_step_user",permalink:"/us/help/workflow/flow_step_user",version:"current",sidebar:"Steedos Help",previous:{title:"Condition node",permalink:"/us/help/workflow/flow_step_condition"},next:{title:"Input permissions",permalink:"/us/help/workflow/flow_step_permissions"}},l=[],p={toc:l};function u(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In the flow designer\uff0cadmins have several options to asign users for a node."),Object(o.b)("p",null,Object(o.b)("img",{src:r(747).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Pick users at runtime"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The default value of next step users is empty after the settings. User in the node has to select next step users."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Particular users"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Admins can assign particular users to approve requests in the node. If it is a countersignature node, users in previous step must select more than one user to approve the request."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Particular roles"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In a flow, admins can assign one or more users to play one or more roles. Then admins can select a role to approve requests in the node. If it is a countersignature node, users in previous step must select more than one user who play the role to approve the request.")),Object(o.b)("p",{parentName:"li"},"Please refer to ",Object(o.b)("a",{parentName:"p",href:"/us/help/workflow/admin_roles"},"Flow role and position settings")," for more details.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Initiator\u2019s Manager"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Admins can assign initiator\u2019s manager to approve requests in the node. Users in previous step must select initiator\u2019s manager to approve the request.")),Object(o.b)("p",{parentName:"li"},"Please refer to ",Object(o.b)("a",{parentName:"p",href:"/us/help/workflow/admin_space_users"},"User Settings")," for more details.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Initiator "),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In the node, users in previous step must select initiator to approve the request."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Particular departments"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Admins can assign all users in particular departments to approve requests in the node. Users in previous step can only select one if the node is not a countersignature node. But users in previous step must select more than one user in particular departments if it is a countersignature node.")),Object(o.b)("p",{parentName:"li"},"Please refer to ",Object(o.b)("a",{parentName:"p",href:"/us/help/workflow/admin_organizations"},"Organization Settings")," for more details."))))}u.isMDXComponent=!0},508:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||b[m]||o;return r?a.a.createElement(f,i(i({ref:t},p),{},{components:r})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},747:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/19-ca0ed0f4aad4e743285bdc74becfab36.png"}}]);