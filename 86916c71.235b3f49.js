(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=s.a.createContext({}),u=function(e){var t=s.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return n?s.a.createElement(m,l(l({ref:t},c),{},{components:n})):s.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},193:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/types_PV-741d448f19895bc611628e6332ba7a64.png"},194:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/storage_licecycle-ca603e337756a4ddb01c8e5858656700.png"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),s=n(7),a=(n(0),n(123)),o={id:"1_Persistent_storage",title:"Persistent storage"},l={unversionedId:"Kubernetes/3_kubernetes_storage_&_scheduling/1_Persistent_storage",id:"Kubernetes/3_kubernetes_storage_&_scheduling/1_Persistent_storage",isDocsHomePage:!1,title:"Persistent storage",description:"Ce que nous savons actuellement sur les conteneurs:",source:"@site/docs\\Kubernetes\\3_kubernetes_storage_&_scheduling\\1_Persistent_storage.md",slug:"/Kubernetes/3_kubernetes_storage_&_scheduling/1_Persistent_storage",permalink:"/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/1_Persistent_storage",editUrl:"https://github.com/Jaden37/docusaurus/docs/Kubernetes/3_kubernetes_storage_&_scheduling/1_Persistent_storage.md",version:"current",sidebar:"docs",previous:{title:"Multi-Containers Pods",permalink:"/portfolio/docs/Kubernetes/2_management_APIServer_&_Pod/6_2_Multi_Pods"},next:{title:"Define PV & PVC",permalink:"/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/2_Define_PV_&_PVC"}},i=[{value:"Storage API Object",id:"storage-api-object",children:[]},{value:"Volume",id:"volume",children:[]},{value:"Persistent Volumes",id:"persistent-volumes",children:[{value:"Types of Persistent Volumes",id:"types-of-persistent-volumes",children:[]}]},{value:"Persistent Volumes Claim",id:"persistent-volumes-claim",children:[]},{value:"Access Mode",id:"access-mode",children:[]},{value:"Static Provisioning Workflow",id:"static-provisioning-workflow",children:[]},{value:"Storage Lifecycle",id:"storage-lifecycle",children:[]}],c={toc:i};function u(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Ce que nous savons actuellement sur les conteneurs:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"les conteneurs sont \xe9ph\xe9m\xe8res"),Object(a.b)("li",{parentName:"ul"},"Les donn\xe9es \xe9critent dans un conteneur sont d\xe9truites lors de sa suppression"),Object(a.b)("li",{parentName:"ul"},"Quand un Pod est supprim\xe9, les conteneurs sont supprim\xe9s de la Node"),Object(a.b)("li",{parentName:"ul"},"Comment pouvons nous persist\xe9 de la donn\xe9es entre les diff\xe9rents cycle de vie des Pods ?")),Object(a.b)("h2",{id:"storage-api-object"},"Storage API Object"),Object(a.b)("p",null,"Kubernetes nous donne des objects permettant de persist\xe9 de la donn\xe9e:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Volume - Stockage persistant qui devient une part du pod (dans les specs)"),Object(a.b)("li",{parentName:"ul"},"Persistent Volume - Stockage de la donn\xe9e en elle m\xeame, stockage pour les pods utilis\xe9 dans le cluster"),Object(a.b)("li",{parentName:"ul"},"Persistent Volume Claim - Demande faite par un utilisateur de persister un volume"),Object(a.b)("li",{parentName:"ul"},"Storage Class - Un moyen de cr\xe9er des groupes ou classes de stockage disponible dans le cluster")),Object(a.b)("h2",{id:"volume"},"Volume"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Persistent storage deployed as part of the Pod spec"),Object(a.b)("li",{parentName:"ul"},"Implementation details for your storage"),Object(a.b)("li",{parentName:"ul"},"This can be challenging...",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Sharing code (very restritive with the Pod itself)"),Object(a.b)("li",{parentName:"ul"},"Same lifecycle as Pod"))),Object(a.b)("li",{parentName:"ul"},"We can do better...")),Object(a.b)("h2",{id:"persistent-volumes"},"Persistent Volumes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Administrator defined storage in the Cluster",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Is the responsibility of the cluster administrator to create and delete storage"),Object(a.b)("li",{parentName:"ul"},"This is going to be an API object that represents the actual storage itself"))),Object(a.b)("li",{parentName:"ul"},"Implementation details for your storage"),Object(a.b)("li",{parentName:"ul"},"Lifecycle independent of the Pod"),Object(a.b)("li",{parentName:"ul"},"Managed by the Kubelet",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Maps the storage in the Node"),Object(a.b)("li",{parentName:"ul"},"Exposes Persitent Volume as a mount inside the container - like any other Linux device")))),Object(a.b)("p",null,"For more details ",Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"https://kubernetes.io/docs/concepts/storage/persistent-volumes/")),Object(a.b)("h3",{id:"types-of-persistent-volumes"},"Types of Persistent Volumes"),Object(a.b)("p",null,"For simplify the different types of persistent volumes:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Type of Persistent Volumes",src:n(193).default})),Object(a.b)("p",null,"It isn't an exhaustive list, a more complete list is available here: ",Object(a.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes"},"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes")),Object(a.b)("h2",{id:"persistent-volumes-claim"},"Persistent Volumes Claim"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A request for storage by a user - is a resquest to the cluster for some amount of storage",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Size"),Object(a.b)("li",{parentName:"ul"},"Access Mode - specific node, read-only /read-write"),Object(a.b)("li",{parentName:"ul"},"Storage Class"))),Object(a.b)("li",{parentName:"ul"},"Enable portability of your application configurations"),Object(a.b)("li",{parentName:"ul"},"The Cluster will map a PVC to a PV")),Object(a.b)("h2",{id:"access-mode"},"Access Mode"),Object(a.b)("p",null,"In PV & PVC we'll need to define an access mode. Wich controls how a node (or multiple nodes) access a PV."),Object(a.b)("p",null,"Because a PV & PVC are mapped to the Node by the kubelet and the exposed into a Pod."),Object(a.b)("p",null,"They are 3 access modes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ReadWriteOnce (RWO)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"One Node can mount a volume for read & write access"))),Object(a.b)("li",{parentName:"ul"},"ReadWriteMany (RWX)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"More than one Node can be access to the volume for read & write access "))),Object(a.b)("li",{parentName:"ul"},"ReadOnlyMany (ROX)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"More than one Node can be access to the volume for readOnlyAccess")))),Object(a.b)("p",null,"The volumes are ",Object(a.b)("strong",{parentName:"p"},"Node level access"),", not Pod level access"),Object(a.b)("h2",{id:"static-provisioning-workflow"},"Static Provisioning Workflow"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Define a persistent volume - detail for access (ex: NFS, server adress), the size in the spec"),Object(a.b)("li",{parentName:"ul"},"Define a persistent volume claim - is the resquest for storage in the cluster - define the size, access mode and storage class"),Object(a.b)("li",{parentName:"ul"},"Define Volume in Pod spec")),Object(a.b)("h2",{id:"storage-lifecycle"},"Storage Lifecycle"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Storage Lifecycle",src:n(194).default})))}u.isMDXComponent=!0}}]);