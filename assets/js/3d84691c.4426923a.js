(self.webpackChunk=self.webpackChunk||[]).push([[4731],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294),o=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o().createContext({}),p=function(e){var t=o().useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o().createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},f=o().forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=n,d=c["".concat(a,".").concat(f)]||c[f]||m[f]||s;return r?o().createElement(d,i(i({ref:t},u),{},{components:r})):o().createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return o().createElement.apply(null,a)}return o().createElement.apply(null,r)}f.displayName="MDXCreateElement"},17789:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(74034),o=r(79973),s=(r(67294),r(3905)),a=["components"],i={title:"System permissions"},l=void 0,u={unversionedId:"us/help/workflow/guide_permissions",id:"us/help/workflow/guide_permissions",isDocsHomePage:!1,title:"System permissions",description:"Steedos Workflow use a management system by level, including space owner, space administrators, flow administrators and normal users.",source:"@site/../docs/us/help/workflow/guide_permissions.md",sourceDirName:"us/help/workflow",slug:"/us/help/workflow/guide_permissions",permalink:"/us/help/workflow/guide_permissions",version:"current",frontMatter:{title:"System permissions"},sidebar:"Steedos Help",previous:{title:"Settings",permalink:"/us/help/workflow/guide_admin"},next:{title:"Versions comprision",permalink:"/us/help/workflow/guide_versions"}},p=[],c={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Steedos Workflow use a management system by level, including space owner, space administrators, flow administrators and normal users. "),(0,s.kt)("h4",{id:"space-owner"},"Space owner"),(0,s.kt)("p",null,"Who registered the sapce is the space owner. Space owner has the Highest permissions of the space:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create space administrators."),(0,s.kt)("li",{parentName:"ul"},"Create flow administrators."),(0,s.kt)("li",{parentName:"ul"},"Can work as all space administrators and flow administrators.")),(0,s.kt)("h4",{id:"space-administrators"},"Space administrators"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Manage space settings, such as organizations\uff0cusers, flow roles, forms and flows."),(0,s.kt)("li",{parentName:"ul"},"Create flow administrators."),(0,s.kt)("li",{parentName:"ul"},"Can work as all flow administrators.")),(0,s.kt)("h4",{id:"flow-administrators"},"Flow administrators"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Monitor requests of the flow."),(0,s.kt)("li",{parentName:"ul"},"Delete requests of the flow."),(0,s.kt)("li",{parentName:"ul"},"Relocate requests of the flow."),(0,s.kt)("li",{parentName:"ul"},"Reassign approvers to requests of the flow.")))}m.isMDXComponent=!0}}]);