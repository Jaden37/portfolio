(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{123:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return t?a.a.createElement(m,c(c({ref:n},l),{},{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(123)),i={id:"5_3_Annotations",title:"Annotations"},c={unversionedId:"Kubernetes/2_management_APIServer_&_Pod/5_3_Annotations",id:"Kubernetes/2_management_APIServer_&_Pod/5_3_Annotations",isDocsHomePage:!1,title:"Annotations",description:"Les annotations sont utilis\xe9 pour ajouter de petites information:",source:"@site/docs\\Kubernetes\\2_management_APIServer_&_Pod\\5_3_Annotations.md",slug:"/Kubernetes/2_management_APIServer_&_Pod/5_3_Annotations",permalink:"/portfolio/docs/Kubernetes/2_management_APIServer_&_Pod/5_3_Annotations",editUrl:"https://github.com/Jaden37/portfolio/blob/master/docs/Kubernetes/2_management_APIServer_&_Pod/5_3_Annotations.md",version:"current",sidebar:"docs",previous:{title:"Labels",permalink:"/portfolio/docs/Kubernetes/2_management_APIServer_&_Pod/5_2_Labels"},next:{title:"What is a pod ?",permalink:"/portfolio/docs/Kubernetes/2_management_APIServer_&_Pod/6_0_Pods"}},s=[{value:"Imperative annotations",id:"imperative-annotations",children:[]},{value:"Declarative annotations",id:"declarative-annotations",children:[]}],l={toc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Les annotations sont utilis\xe9 pour ajouter de petites information:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Used to add additional information about your cluster resources"),Object(o.b)("li",{parentName:"ul"},"Mostly used by people or tooling to make decisions"),Object(o.b)("li",{parentName:"ul"},"Build, release, and image information exposed in easily accessible areas"),Object(o.b)("li",{parentName:"ul"},"Saves you from having to write integrations to retrieve data from external data sources"),Object(o.b)("li",{parentName:"ul"},"Non-hierarchical, key/value pair"),Object(o.b)("li",{parentName:"ul"},"Can\u2019t be used to query/select Pods or other resources"),Object(o.b)("li",{parentName:"ul"},"Data is used for \u201cother\u201d purposes"),Object(o.b)("li",{parentName:"ul"},"Keys can be up to 63 characters"),Object(o.b)("li",{parentName:"ul"},"Values can be up to 256KB")),Object(o.b)("h3",{id:"imperative-annotations"},"Imperative annotations"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate pod nginx-pod owner=Anthony\nkubectl annotate pod nginx-pod owner=NotAnthony --overwrite\n")),Object(o.b)("h3",{id:"declarative-annotations"},"Declarative annotations"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\n    metadata:\n        name: nginx-pod\n        annotation: owner: Anthony\nspec:\n    containers:\n        - name: nginx\n        image: nginx\n...\n")))}u.isMDXComponent=!0}}]);