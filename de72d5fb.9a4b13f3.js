(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{112:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return s})),n.d(a,"metadata",(function(){return c})),n.d(a,"toc",(function(){return o})),n.d(a,"default",(function(){return i}));var t=n(3),r=n(7),l=(n(0),n(125)),s={id:"5_1_Namespaces",title:"Namespaces"},c={unversionedId:"Kubernetes/2_management_APIServer_&_Pod/5_1_Namespaces",id:"Kubernetes/2_management_APIServer_&_Pod/5_1_Namespaces",isDocsHomePage:!1,title:"Namespaces",description:"Le Namespaces permet:",source:"@site/docs/Kubernetes/2_management_APIServer_&_Pod/5_1_Namespaces.md",slug:"/Kubernetes/2_management_APIServer_&_Pod/5_1_Namespaces",permalink:"/docs/Kubernetes/2_management_APIServer_&_Pod/5_1_Namespaces",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/2_management_APIServer_&_Pod/5_1_Namespaces.md",version:"current",sidebar:"docs",previous:{title:"Organizing Objects in Kubernetes",permalink:"/docs/Kubernetes/2_management_APIServer_&_Pod/5_0_Organizing_Objects"},next:{title:"Labels",permalink:"/docs/Kubernetes/2_management_APIServer_&_Pod/5_2_Labels"}},o=[{value:"Working with namespace",id:"working-with-namespace",children:[]},{value:"Commands",id:"commands",children:[]}],p={toc:o};function i(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Le Namespaces permet:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Ability to subdivide a cluster and its resources"),Object(l.b)("li",{parentName:"ul"},"Conceptually a \u201cvirtual cluster\u201d"),Object(l.b)("li",{parentName:"ul"},"Deploy objects into a Namespace"),Object(l.b)("li",{parentName:"ul"},"Resource isolation/organization (multitenants clusters)"),Object(l.b)("li",{parentName:"ul"},"Security boundary for Role-based Access Controls"),Object(l.b)("li",{parentName:"ul"},"Naming boundary (same name in different namespaces)"),Object(l.b)("li",{parentName:"ul"},"A resource can be in only one namespace"),Object(l.b)("li",{parentName:"ul"},"Has nothing to do with the concept of a Linux OS namespace")),Object(l.b)("p",null,"Permet de limiter les ressources en fonction d'un namespace (CPU, RAM, Disk). Il permet \xe9galement de s\xe9parer des projets, applications, utilisateurs."),Object(l.b)("p",null,"Ou de d\xe9limiter la prod, les test, la qualification."),Object(l.b)("h2",{id:"working-with-namespace"},"Working with namespace"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Create/Query/Delete"),Object(l.b)("li",{parentName:"ul"},"Operate on objects in a Namespace"),Object(l.b)("li",{parentName:"ul"},"Some objects are Namespaced... some aren\u2019t",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Resources are Namespaced...Pods, Controllers, Services"),Object(l.b)("li",{parentName:"ul"},"Physical things are not... PersistentVolumes, Nodes")))),Object(l.b)("p",null,"Des namespaces existent d\xe9j\xe0 lors de l'installation du cluster"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"default - namespace par d\xe9faut des objets, si aucun n'est sp\xe9cifi\xe9"),Object(l.b)("li",{parentName:"ul"},'kube-public - "readable" par tous les utilisateurs du cluster, utilis\xe9 pour stocker et partager des objets entre namespaces (ex: configmap)'),Object(l.b)("li",{parentName:"ul"},"kube-system - objets syst\xe8me (pods, API Server, etcd, controller manager, kube-proxy)"),Object(l.b)("li",{parentName:"ul"},"User Defined - permet \xe0 un utilisateurs de d\xe9ployer son travail"),Object(l.b)("li",{parentName:"ul"},"Two methods of declaration:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Imperatively with kubectl",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"#Create Namespace\nkubectl create namespace playground1\n#Create Namespace\nkubectl run nginx --image=nginx --namespace playground1\n"))),Object(l.b)("li",{parentName:"ul"},"Declaratively in a Manifest in YAML/JSON",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"#Create Namespace\n    apiVersion: v1\n    kind: Namespace\n    metadata:\n    name: playgroundinyaml\n#Create Object is this namespace\n    apiVersion: apps/v1\n    kind: Deployment\n    metadata:\n    namespace: playgroundinyaml\n")))))),Object(l.b)("h2",{id:"commands"},"Commands"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"#Get a list of all the namespaces in our cluster\nkubectl get namespaces\n\n#get a list of all the API resources and if they can be in a namespace\nkubectl api-resources --namespaced=true | head\nkubectl api-resources --namespaced=false | head\n\n#Namespaces have state, Active and Terminating (when it's deleting)\nkubectl describe namespaces\n\n#Describe the details of an indivdual namespace\nkubectl describe namespaces kube-system\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"#Get all the pods in our cluster across all namespaces. Right now, only system pods, no user workload.\n#You can shorten --all-namespaces to -A\nkubectl get pods --all-namespaces\nkubectl get pods -A\n#Get a list of the pods in the kube-system namespace\nkubectl get pods --namespace kube-system\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"#Imperatively create a namespace\nkubectl create namespace playground1\n#Imperatively create a namespace...but there's some character restrictions. Lower case and only dashes. The regex is '[a-z0-9]([-a-z0-9]*[a-z0-9])?'\nkubectl create namespace Playground1\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"#Declaratively create a namespace\ncat namespace.yaml\nkubectl apply -f namespace.yaml\n\n#Get a list of all the current namespaces\nkubectl get namespaces\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"#Deployment.yaml file\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world\n  labels:\n    app: hello-world\n  namespace: playground1\nspec:\n  replicas: 4\n  selector:\n    matchLabels:\n      app: hello-world\n  template:\n    metadata:\n      labels:\n        app: hello-world\n    spec:\n      containers:\n      - name: hello-world\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"#Start a deployment into our playground1 namespace\ncat deployment.yaml\nkubectl apply -f deployment.yaml\n\n#Creating a resource imperitively\nkubectl run hello-world-pod \\\n    --image=gcr.io/google-samples/hello-app:1.0 \\\n    --generator=run-pod/v1 \\\n    --namespace playground1\n\n#Where are the pods?\nkubectl get pods\n\n#List all the pods on our namespace\nkubectl get pods --namespace playground1\nkubectl get pods -n playground1\n\n#Get a list of all of the resources in our namespace\nkubectl get all --namespace=playground1\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"#Try to delete all the pods in our namespace...this will delete the single pod.\n#But the pods under the Deployment controller will be recreated.\nkubectl delete pods --all --namespace playground1\n\n#Get a list of all of the *new* pods in our namespace\nkubectl get pods -n playground1\n\n#Delete all of the resources in our namespace and the namespace and delete our other created namespace.\n#This deletes the Deployment controller, the Pods...or really ALL resources in the namespaces\nkubectl delete namespaces playground1\nkubectl delete namespaces playgroundinyaml\n\n#List all resources in all namespaces, now our Deployment is gone.\nkubectl get all\nkubectl get all --all-namespaces\n")))}i.isMDXComponent=!0},125:function(e,a,n){"use strict";n.d(a,"a",(function(){return u})),n.d(a,"b",(function(){return d}));var t=n(0),r=n.n(t);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),i=function(e){var a=r.a.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},u=function(e){var a=i(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=i(n),b=t,d=u["".concat(s,".").concat(b)]||u[b]||m[b]||l;return n?r.a.createElement(d,c(c({ref:a},p),{},{components:n})):r.a.createElement(d,c({ref:a},p))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,s=new Array(l);s[0]=b;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c.mdxType="string"==typeof e?e:t,s[1]=c;for(var p=2;p<l;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);