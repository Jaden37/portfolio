(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{136:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,m=l["".concat(s,".").concat(d)]||l[d]||b[d]||a;return r?o.a.createElement(m,u(u({ref:t},i),{},{components:r})):o.a.createElement(m,u({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,s[1]=u;for(var i=2;i<a;i++)s[i]=r[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(136)),s={id:"2_API_Groups",title:"API Groups"},u={unversionedId:"Kubernetes/2_management_APIServer_&_Pod/2_API_Groups",id:"Kubernetes/2_management_APIServer_&_Pod/2_API_Groups",isDocsHomePage:!1,title:"API Groups",description:"Les groupes sont des entit\xe9s permettant de rassembl\xe9 des ressources.",source:"@site/docs/Kubernetes/2_management_APIServer_&_Pod/2_API_Groups.md",slug:"/Kubernetes/2_management_APIServer_&_Pod/2_API_Groups",permalink:"/docs/Kubernetes/2_management_APIServer_&_Pod/2_API_Groups",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/2_management_APIServer_&_Pod/2_API_Groups.md",version:"current",lastUpdatedAt:1613556017,sidebar:"docs",previous:{title:"Kubernetes API & API Server",permalink:"/docs/Kubernetes/2_management_APIServer_&_Pod/1_API_Server"},next:{title:"API Version",permalink:"/docs/Kubernetes/2_management_APIServer_&_Pod/3_API_Version"}},c=[{value:"Core (Legacy)",id:"core-legacy",children:[]},{value:"Named API Groups",id:"named-api-groups",children:[]}],i={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Les groupes sont des entit\xe9s permettant de rassembl\xe9 des ressources."),Object(a.b)("p",null,"Il y a deux grands groupes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core API (Legacy Group) - ce sont les objets fondamental de kubernetes, quand la notion de groupe n'\xe9xistait pas"),Object(a.b)("li",{parentName:"ul"},"Named API Groups - ce sont tous les autres groupes cr\xe9es par la suite (ex: storage)")),Object(a.b)("h2",{id:"core-legacy"},"Core (Legacy)"),Object(a.b)("p",null,"C'est dans ce groupe que nous trouvons des objets fondamental comme:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Pod"),Object(a.b)("li",{parentName:"ul"},"Node"),Object(a.b)("li",{parentName:"ul"},"Namespace"),Object(a.b)("li",{parentName:"ul"},"PersistentVolume "),Object(a.b)("li",{parentName:"ul"},"PersistentVolumeClaim")),Object(a.b)("h2",{id:"named-api-groups"},"Named API Groups"),Object(a.b)("p",null,"Dans ces groupes nous trouvons des objets comme:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"apps - Deployment"),Object(a.b)("li",{parentName:"ul"},"storage.k8s.io - StorageClass"),Object(a.b)("li",{parentName:"ul"},"rbac.authorization.k8s.io - Role")),Object(a.b)("p",null,"Une liste plus d\xe9taill\xe9e est disponible ici: ",Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#-strong-api-groups-strong-"},"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#-strong-api-groups-strong-")))}p.isMDXComponent=!0}}]);