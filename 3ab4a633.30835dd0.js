(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(6),o=(n(0),n(480)),l={title:"Condition node"},r={unversionedId:"us/help/workflow/flow_step_condition",id:"us/help/workflow/flow_step_condition",isDocsHomePage:!1,title:"Condition node",description:"System can select next step automatically according to the condition in condition node.",source:"@site/../docs/us/help/workflow/flow_step_condition.md",slug:"/us/help/workflow/flow_step_condition",permalink:"/us/help/workflow/flow_step_condition",version:"current",sidebar:"Steedos Help",previous:{title:"Countersignature Node",permalink:"/us/help/workflow/flow_step_counter_sign"},next:{title:"Approver settings",permalink:"/us/help/workflow/flow_step_user"}},c=[{value:"How to add a condition node?",id:"how-to-add-a-condition-node",children:[]}],u={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"System can select next step automatically according to the condition in condition node."),Object(o.b)("p",null,"For instance, in a \u201cReimbursement\u201d request, system can select next step according to \u201cTotal Amount\u201d. If total amount is more than 10000, requests will be submitted to general manager at first and then submitted to finance director after approval. If it is no more than 10000, requests will be directly submitted to finance director."),Object(o.b)("p",null,"Conditional formula\uff1a{ Total Amount }>10000 and { Total Amount }<=10000"),Object(o.b)("h4",{id:"notice"},"notice"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"There cannot be overlapping conditions. For instance, \u201c{Total Amount}>=10000\u201d and \u201c{Total Amount}<=10000\u201d are wrong formulas. Because \u201c{Total Amount}=10000\u201d is overlapping condition."),Object(o.b)("li",{parentName:"ul"},"The formulas should cover all conditions. For instance, \u201c{Total Amount}>10000\u201d and \u201c{Total Amount}<10000\u201d are wrong formulas. Because \u201c{Total Amount}=10000\u201d is omitted.")),Object(o.b)("p",null,"If there are wrong formulas, system cannot select the next step sometimes."),Object(o.b)("h3",{id:"how-to-add-a-condition-node"},"How to add a condition node?"),Object(o.b)("p",null,"Please follow the next step to add a node."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Enter the flow design interface and click \u201cDraw\u201d button."),Object(o.b)("li",{parentName:"ul"},"Select \u201cCondition\u201d icon and Drag it to the left side."),Object(o.b)("li",{parentName:"ul"},"Modify step name by clicking \u201cProperties\u201d. For instance, rename it with \u201cWhether Total Amount is more than 10000\u201d."),Object(o.b)("li",{parentName:"ul"},"Hover with your mouse over the \u201c?\u201d icon and then click \u201c+\u201d to add two lines and connect them with two nodes."),Object(o.b)("li",{parentName:"ul"},"Click one line and then click on \u201cproperties\u201d"),Object(o.b)("li",{parentName:"ul"},"Input the formula \u201c{Total Amount}>10000\u201d in \u201cexecute only when\u201d box "),Object(o.b)("li",{parentName:"ul"},"Then input the formula \u201c{Total Amount}<=10000\u201d to modify properties of the other line.")),Object(o.b)("h4",{id:"please-refer-to-basic-rules-of-writing-conditions-for-more-details"},"Please refer to \u201cBasic rules of writing conditions\u201d for more details."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Basic rules of writing conditions\uff1a",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Characters and symbols\uff1ahalf-width"),Object(o.b)("li",{parentName:"ul"},"Referenced fields\uff1a{field name}"),Object(o.b)("li",{parentName:"ul"},"Nested conditions\uff1a()"),Object(o.b)("li",{parentName:"ul"},"Formulas and functions are allowed"))),Object(o.b)("li",{parentName:"ul"},"Common items in conditions",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Numeric constants\uff1anumber"),Object(o.b)("li",{parentName:"ul"},"Character constants\uff1a\u201cBeijing\u201d"),Object(o.b)("li",{parentName:"ul"},"Field variables\uff1a{field name}"))),Object(o.b)("li",{parentName:"ul"},"System variables based on applicants",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Name\uff1a{applicant.name}"),Object(o.b)("li",{parentName:"ul"},"Organization\uff08full path):{applicant.organization.fullname}"),Object(o.b)("li",{parentName:"ul"},"Organization\uff08name of the lowest organization): {applicant.organization.name}"),Object(o.b)("li",{parentName:"ul"},"Role name: {applicant.roles}"))),Object(o.b)("li",{parentName:"ul"},"System variables based on name field in forms",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Organization\uff08full path):{name}.organization.fullname"),Object(o.b)("li",{parentName:"ul"},"Organization\uff08name of the lowest organization): {name}.organization.name"),Object(o.b)("li",{parentName:"ul"},"Roles: {name}.roles"),Object(o.b)("li",{parentName:"ul"},"Name: {name}.name"))),Object(o.b)("li",{parentName:"ul"},"Functions based on field values",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Add\uff1a{field A}+{field B}"),Object(o.b)("li",{parentName:"ul"},"Subtract\uff1a{field A}-{field B}"),Object(o.b)("li",{parentName:"ul"},"Multiply\uff1a{field A}*{ field B }"),Object(o.b)("li",{parentName:"ul"},"Divide\uff1a  {field A}/{ field B }"))),Object(o.b)("li",{parentName:"ul"},"Functions based on numeric field in tables",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"SUM: sum ({expense})"),Object(o.b)("li",{parentName:"ul"},"AVERAGE\uff1aaverage({expense})"),Object(o.b)("li",{parentName:"ul"},"COUNT\uff1acount({item})"),Object(o.b)("li",{parentName:"ul"},"MAXIUM\uff1amax({expense})"),Object(o.b)("li",{parentName:"ul"},"MINIMM\uff1amin({expense})"))),Object(o.b)("li",{parentName:"ul"},"Conditions of numeric type",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Equal\uff1a="),Object(o.b)("li",{parentName:"ul"},"Greater than\uff1a>"),Object(o.b)("li",{parentName:"ul"},"Less than: <"),Object(o.b)("li",{parentName:"ul"},"Greater than or equal to: >="),Object(o.b)("li",{parentName:"ul"},"Less than or equal to: <=\n-Not equal to: ! = or < >"))),Object(o.b)("li",{parentName:"ul"},"Conditions of character type",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Field A is Beijing: {Field A}= \u201cBeijing\u201d"),Object(o.b)("li",{parentName:"ul"},"Field B is not Beijing: {Field B}!= \u201cBeijing\u201d"),Object(o.b)("li",{parentName:"ul"},"Applicant is general manager: _.contains({applicant.roles},'general manager')")))),Object(o.b)("h4",{id:"notice\uff1a"},"notice\uff1a"),Object(o.b)("p",null,"A user can act as several roles, so we use \u201ccontain\u201d this condition."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Combination of conditions",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"OR\uff1a|| ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"E.g.{Total Amount}<1000 || {Field A}= \u201cBeijing\u201d"))),Object(o.b)("li",{parentName:"ul"},"AND: &&",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"E.g. {Total Amount}<1000 && {Field A}= \u201cBeijing\u201d"))),Object(o.b)("li",{parentName:"ul"},"INVERT: !",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"E.g. !({Total Amount}<1000))")))))))}b.isMDXComponent=!0},480:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),b=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},p=function(e){var t=b(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||s[m]||o;return n?i.a.createElement(d,r({ref:t},u,{components:n})):i.a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var u=2;u<o;u++)l[u]=n[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);