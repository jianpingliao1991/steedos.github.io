(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),i=(n(0),n(410)),a={title:"How to design a flow"},l={id:"us/help/workflow/flow_design",title:"How to design a flow",description:"Admins need to design the flow after having finished form designs.\r",source:"@site/..\\docs\\us\\help\\workflow\\flow_design.md",permalink:"/us/help/workflow/flow_design",sidebar:"Steedos Help",previous:{title:"Form scripts",permalink:"/us/help/workflow/form_scripts"},next:{title:"Flow permissions",permalink:"/us/help/workflow/flow_permissions"}},s=[],c={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Admins need to design the flow after having finished form designs.\nIn Steedos Workflow, a node represents a step , and all nodes are connected with straight lines. A node can concatenate one or more nodes according to following approval process. The flowing nodes can be decided by assigned by approver or by conditions automatically."),Object(i.b)("h4",{id:"flow-design"},"Flow design"),Object(i.b)("p",null,"We set \u201cDaily Reimbursement\u201d as an example to demonstrate the flow design process. Detailed steps are listed below."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Login in Steedos, and then click \u201cWorkflow Designer\u201d in \u201cSettings\u201d."),Object(i.b)("li",{parentName:"ul"},"Select \u201cNo Category\u201d in pop-up interface and then click \u201cDaily Reimbursement\u201d."),Object(i.b)("li",{parentName:"ul"},"In the workflow interface, \u201cFlow Info\u201d, \u201cDraw\u201d, \u201cProperties\u201d are displayed in the panel at the right side.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Flow name and flow description can be modified in \u201cFlow Info\u201d."),Object(i.b)("li",{parentName:"ul"},"Click \u201cDraw\u201d to add different nodes, including \u201cApprove Request\u201d, \u201cCounterSign\u201d, \u201cProvide Input\u201d, \u201cCondition\u201d. Here is a brief introduction for different nodes.")))),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/assets/us/workflow/17.png",alt:null}))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"- **Approve Request**: Approvers must select \u201cApprove\u201d or \u201cReject\u201d.\n- **CounterSign**: In the node, several users can approve applications. Then applications flow to next step automatically according to system conditions.\n- **Provide Input**\uff1aUsers can input comments or submit requests immediately, but can not select \u201cApprove\u201d or \u201cReject\u201d.\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Select one node in \u201cDraw\u201d and move it to the left panel of the page. "),Object(i.b)("li",{parentName:"ul"},"And then place the mouse cursor over this node. Next\uff0cclick \u201c+\u201d icon to add lines to connect nodes. "),Object(i.b)("li",{parentName:"ul"},"Of course\uff0cyou can click \u201c-\u201d to delete the lines. "),Object(i.b)("li",{parentName:"ul"},"Click the specific node and then \u201cFlow Info\u201d,  \u201cDraw\u201d\uff0c \u201cProperties\u201d and \u201cPermissions\u201d are displayed in the panel.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Properties"),": Admins can modify \u201cStep Name\u201d, \u201cAssign to\u201d and \u201cDeadline for the step\u201d in properties. For more details, please refer to \u201c",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/us/help/workflow/flow_step_user"}),"Approver settings"),"\u201d."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Permissions"),": Except for the start step, all fields are read-only by default. Admins can tick editable fields in the step according to actual situations."))),Object(i.b)("li",{parentName:"ul"},"Turn on the switch in \u201cWorkflow List\u201d to run the flow.")),Object(i.b)("h4",{id:"notice\uff1a"},"Notice\uff1a"),Object(i.b)("p",null,"Requests submitted before the modification of form and flow design will run according to previous settings. The requests submitted after modifications will flow in new steps."))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,b=u["".concat(a,".").concat(f)]||u[f]||d[f]||i;return n?o.a.createElement(b,l({ref:t},c,{components:n})):o.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);