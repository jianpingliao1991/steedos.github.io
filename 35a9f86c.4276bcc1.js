(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(508)),c={title:"Countersignature Node"},i={unversionedId:"us/help/workflow/flow_step_counter_sign",id:"us/help/workflow/flow_step_counter_sign",isDocsHomePage:!1,title:"Countersignature Node",description:"- Two or more users can approve the requests at the node. They must select \u201cApprove\u201d or \u201cReject\u201d.",source:"@site/../docs/us/help/workflow/flow_step_counter_sign.md",slug:"/us/help/workflow/flow_step_counter_sign",permalink:"/us/help/workflow/flow_step_counter_sign",version:"current",sidebar:"Steedos Help",previous:{title:"Input Node",permalink:"/us/help/workflow/flow_step_input"},next:{title:"Condition node",permalink:"/us/help/workflow/flow_step_condition"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Two or more users can approve the requests at the node. They must select \u201cApprove\u201d or \u201cReject\u201d."),Object(a.b)("li",{parentName:"ul"},"Even though someone select to reject the request, it will flow to next step according to flow settings. Next step approver will take all countersignature opinions into consideration and select following step."),Object(a.b)("li",{parentName:"ul"},"Admins can specify a range and then the approver in previous step can select several users\uff08no more than two users in Standard version\uff09 to countersign the request in next step.")),Object(a.b)("p",null,"Please refer to \u201c",Object(a.b)("a",{parentName:"p",href:"/us/help/workflow/flow_step_user"},"Approver settings"),"\u201d for more details."),Object(a.b)("h4",{id:"notice"},"Notice:"),Object(a.b)("p",null,"Two countersignature nodes cannot be directly connected. Admins can add a node to summarize opinions between the two nodes. And then select approvers for the second countersignature node."))}p.isMDXComponent=!0},508:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return w}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,w=u["".concat(c,".").concat(d)]||u[d]||f[d]||a;return n?o.a.createElement(w,i(i({ref:t},l),{},{components:n})):o.a.createElement(w,i({ref:t},l))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);