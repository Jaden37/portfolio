(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(123)),c={id:"1_API_Server",title:"Kubernetes API & API Server"},i={unversionedId:"Kubernetes/2_management_APIServer_&_Pod/1_API_Server",id:"Kubernetes/2_management_APIServer_&_Pod/1_API_Server",isDocsHomePage:!1,title:"Kubernetes API & API Server",description:"L'API Serveur est le moyen unique d'acc\xe8s aux ressouces et aux donn\xe9s du data center.",source:"@site/docs\\Kubernetes\\2_management_APIServer_&_Pod\\1_API_Server.md",slug:"/Kubernetes/2_management_APIServer_&_Pod/1_API_Server",permalink:"/portfolio/docs/Kubernetes/2_management_APIServer_&_Pod/1_API_Server",editUrl:"https://github.com/Jaden37/portfolio/blob/master/docs/Kubernetes/2_management_APIServer_&_Pod/1_API_Server.md",version:"current",sidebar:"docs",previous:{title:"Manifest",permalink:"/portfolio/docs/Kubernetes/1_install_&_configuration/6_manifest"},next:{title:"API Groups",permalink:"/portfolio/docs/Kubernetes/2_management_APIServer_&_Pod/2_API_Groups"}},u=[{value:"API Objects",id:"api-objects",children:[]},{value:"API Server",id:"api-server",children:[]},{value:"Commands",id:"commands",children:[]}],s={toc:u};function l(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"L'API Serveur est le moyen unique d'acc\xe8s aux ressouces et aux donn\xe9s du data center."),Object(o.b)("h2",{id:"api-objects"},"API Objects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Collection de primitives qui repr\xe9sentent un \xe9tat du syst\xe8me"),Object(o.b)("li",{parentName:"ul"},"Active la fonfiguration d'\xe9tat")),Object(o.b)("p",null,"Les API objects sont "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Persistent dans le cluster store"),Object(o.b)("li",{parentName:"ul"},"Repr\xe9sentent l'\xe9tat actuel du serveur")),Object(o.b)("p",null,"Les objets sont organis\xe9 par:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"kind (string) - Pod, Service, Deployment"),Object(o.b)("li",{parentName:"ul"},"group - core, apps, storage"),Object(o.b)("li",{parentName:"ul"},"version - v1, beta, alpha ")),Object(o.b)("h2",{id:"api-server"},"API Server"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Unique voie pour int\xe9ragir avec le cluster"),Object(o.b)("li",{parentName:"ul"},"Unique voie que Kubernetes a pour int\xe9ragir avec le cluster")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-md"},"* Client/Server architecture\n* RESTful API over HTTP using JSON\n* Client submits requests over HTTP/HTTPS\n* Server responds to the request\n* Stateless\n* Serialized and persisted in the cluster store\n")),Object(o.b)("p",null,"Ces 4 \xe9l\xe9ments (apiVersion, kind, metadata, specs) sont obligatoire pour d\xe9finir un manifest."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: 1\nkind: Pod\nmetadata:\n   name: nginx-pod\nspecs:\n   containers:\n   - name: nginx\n     image: nginx\n")),Object(o.b)("p",null," Plus d'info ici: ",Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/"},"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/")),Object(o.b)("h2",{id:"commands"},"Commands"),Object(o.b)("p",null," Pour connaitre le contexte actuel du cluster"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl config get-contexts\n#Change context if needed\nkubectl config use-context kubernetes-admin@kubernetes\n")),Object(o.b)("p",null," ",Object(o.b)("img",{alt:"get context",src:n(195).default})),Object(o.b)("p",null," Information concernant l'API Server du context actuel"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl cluster-info\n")),Object(o.b)("p",null," Pour plus d'information concernant l'utilisation des commandes de bases voir ",Object(o.b)("a",{parentName:"p",href:"/portfolio/docs/Kubernetes/1_install_&_configuration/4_use_Kubectl"},"Apprendre kubectl"),"."))}l.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},195:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/get_context-57f31756709dd1f55848e55a9a202738.png"}}]);