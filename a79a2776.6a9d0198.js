(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{247:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(6),a=(n(0),n(369)),i={title:"Retrieve"},c={unversionedId:"us/help/workflow/instance_retrieve",id:"us/help/workflow/instance_retrieve",isDocsHomePage:!1,title:"Retrieve",description:"Retrieve is to get back the intance that has been submitted or approved to reprocess.",source:"@site/../docs/us/help/workflow/instance_retrieve.md",slug:"/us/help/workflow/instance_retrieve",permalink:"/us/help/workflow/instance_retrieve",version:"current",sidebar:"Steedos Help",previous:{title:"Intance Forward",permalink:"/us/help/workflow/instance_forward"},next:{title:"How to reassign approvers",permalink:"/us/help/workflow/instance_reassign"}},s=[],p={rightToc:s};function u(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Retrieve is to get back the intance that has been submitted or approved to reprocess."),Object(a.b)("p",null,"There are two types of people that can retrieve an instance: one is the creator of instance, the other is the approver of intance.\nNote: The intance can only be retrieved after the next step has not been processed or the next step is not the end of the processing steps. For example, a new intance has been submitted, if you want to modify this intance, but this intance has been approved by the next approver, this intance can not be retrieved."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'When you retrieve a new instance, you can find this intance in the "In Progress". (Note: this intance has not been approved by the next approver)\n![](/assets/us/workflow/In Progress.png)')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'When you want to retrieve an approved intance, you can find this intance in the "Outbox". (Note: this intance has not yet been processed by the next approver, or the next step is not the end step)\n',Object(a.b)("img",{src:n(729).default}))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'Click on the instance you\'ve found, and click the button in the upper right corner of this instance. When you click the "retrieve" button, you will be asked to fill out the pop-up box for the reason for the retrieve. When you click "OK", you can find this instance in "Inbox", then you can reprocess this instance.'))),Object(a.b)("h4",{id:"remark"},"Remark"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The progress of retrieve will be displayed in approval history of the form.")))}u.isMDXComponent=!0},369:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,h=l["".concat(i,".").concat(f)]||l[f]||b[f]||a;return n?o.a.createElement(h,c({ref:t},p,{components:n})):o.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},729:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Outbox-d2cbb2c2c0969f5bea0aa9ace183f38c.png"}}]);