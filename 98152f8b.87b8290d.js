(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(123)),o={id:"1_API_Server",title:"Kubernetes API & API Server"},u={unversionedId:"Kubernetes/2_management_APIServer_&_Pod/1_API_Server",id:"Kubernetes/2_management_APIServer_&_Pod/1_API_Server",isDocsHomePage:!1,title:"Kubernetes API & API Server",description:"L'API Serveur est le moyen unique d'acc\xe8s aux ressouces et aux donn\xe9s du data center.",source:"@site/docs\\Kubernetes\\2_management_APIServer_&_Pod\\1_API_Server.md",slug:"/Kubernetes/2_management_APIServer_&_Pod/1_API_Server",permalink:"/docs/Kubernetes/2_management_APIServer_&_Pod/1_API_Server",editUrl:"https://github.com/Jaden37/docusaurus/docs/Kubernetes/2_management_APIServer_&_Pod/1_API_Server.md",version:"current",sidebar:"docs",previous:{title:"Manifest",permalink:"/docs/Kubernetes/1_install_&_configuration/6_manifest"},next:{title:"API Groups",permalink:"/docs/Kubernetes/2_management_APIServer_&_Pod/2_API_Groups"}},i=[{value:"API Objects",id:"api-objects",children:[]},{value:"API Server",id:"api-server",children:[]},{value:"Commands",id:"commands",children:[]}],s={toc:i};function l(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"L'API Serveur est le moyen unique d'acc\xe8s aux ressouces et aux donn\xe9s du data center."),Object(c.b)("h2",{id:"api-objects"},"API Objects"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Collection de primitives qui repr\xe9sentent un \xe9tat du syst\xe8me"),Object(c.b)("li",{parentName:"ul"},"Active la fonfiguration d'\xe9tat")),Object(c.b)("p",null,"Les API objects sont "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Persistent dans le cluster store"),Object(c.b)("li",{parentName:"ul"},"Repr\xe9sentent l'\xe9tat actuel du serveur")),Object(c.b)("p",null,"Les objets sont organis\xe9 par:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"kind (string) - Pod, Service, Deployment"),Object(c.b)("li",{parentName:"ul"},"group - core, apps, storage"),Object(c.b)("li",{parentName:"ul"},"version - v1, beta, alpha ")),Object(c.b)("h2",{id:"api-server"},"API Server"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Unique voie pour int\xe9ragir avec le cluster"),Object(c.b)("li",{parentName:"ul"},"Unique voie que Kubernetes a pour int\xe9ragir avec le cluster")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-md"},"* Client/Server architecture\n* RESTful API over HTTP using JSON\n* Client submits requests over HTTP/HTTPS\n* Server responds to the request\n* Stateless\n* Serialized and persisted in the cluster store\n")),Object(c.b)("p",null,"Ces 4 \xe9l\xe9ments (apiVersion, kind, metadata, specs) sont obligatoire pour d\xe9finir un manifest."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: 1\nkind: Pod\nmetadata:\n   name: nginx-pod\nspecs:\n   containers:\n   - name: nginx\n     image: nginx\n")),Object(c.b)("p",null," Plus d'info ici: ",Object(c.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/"},"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/")),Object(c.b)("h2",{id:"commands"},"Commands"),Object(c.b)("p",null," Pour connaitre le contexte actuel du cluster"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"kubectl config get-contexts\n#Change context if needed\nkubectl config use-context kubernetes-admin@kubernetes\n")),Object(c.b)("p",null," ",Object(c.b)("img",{alt:"get context",src:n(195).default})),Object(c.b)("p",null," Information concernant l'API Server du context actuel"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"kubectl cluster-info\n")),Object(c.b)("p",null," Pour plus d'information concernant l'utilisation des commandes de bases voir ",Object(c.b)("a",{parentName:"p",href:"/docs/Kubernetes/1_install_&_configuration/4_use_Kubectl"},"Apprendre kubectl"),"."))}l.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||c;return n?a.a.createElement(m,u(u({ref:t},s),{},{components:n})):a.a.createElement(m,u({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},195:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/get_context-57f31756709dd1f55848e55a9a202738.png"}}]);