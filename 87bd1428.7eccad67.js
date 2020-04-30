(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{259:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return f}));var n=r(1),o=r(6),a=(r(0),r(395)),i={title:"Formula of form name"},c={id:"us/help/workflow/form_name_formula",title:"Formula of form name",description:"Each form submitted has a system name consisting of random name and serial number. We can use proper formulas to modify form names so that we can easily find specific forms.\r",source:"@site/..\\docs\\us\\help\\workflow\\form_name_formula.md",permalink:"/us/help/workflow/form_name_formula",sidebar:"Steedos Help",previous:{title:"Formulas of form field",permalink:"/us/help/workflow/form_formula"},next:{title:"Form scripts",permalink:"/us/help/workflow/form_scripts"}},l=[],m={rightToc:l};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Each form submitted has a system name consisting of random name and serial number. We can use proper formulas to modify form names so that we can easily find specific forms."),Object(a.b)("h4",{id:"how-to-modify-formulas-of-form-names"},"How to modify formulas of form names"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Click \u201cWorkflow Designer\u201d in \u201cSettings\u201d."),Object(a.b)("li",{parentName:"ul"},"Select the specific flow according to flow category."),Object(a.b)("li",{parentName:"ul"},"Enter the form-editing page and then click \u201cForm\u201d instead of \u201cWorkflow\u201d."),Object(a.b)("li",{parentName:"ul"},"Click on \u201cProperties\u201d and you can see \u201cDescriptions\u201d, \u201cForm.Form_script\u201dand \u201cName Formula\u201d."),Object(a.b)("li",{parentName:"ul"},"Then we can input different formulas to modify its names.")),Object(a.b)("h4",{id:"how-to-write-and-edit-formulas"},"How to write and edit formulas"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Name the form with single field in it, such as {Trip Destination}."),Object(a.b)("li",{parentName:"ul"},"Name the form with the combination of several form fields, such as \u201c{Trip Destination}+{Departure Date}\u201d."),Object(a.b)("li",{parentName:"ul"},"Name the form with the combination of a default value and a field, such as \u201cOn Business\u201d+ \u201cTrip Destination\u201d."),Object(a.b)("li",{parentName:"ul"},"Name the form with several system fields, such as \u201cSubmit_date\u201d+ \u201capplicant_name\u201d +\u201cinsname\u201d.")))}f.isMDXComponent=!0},395:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=o.a.createContext({}),f=function(e){var t=o.a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=f(e.components);return o.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=f(r),p=n,b=s["".concat(i,".").concat(p)]||s[p]||u[p]||a;return r?o.a.createElement(b,c({ref:t},m,{components:r})):o.a.createElement(b,c({ref:t},m))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var m=2;m<a;m++)i[m]=r[m];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);