(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{136:function(e,n,a){"use strict";a.d(n,"a",(function(){return u})),a.d(n,"b",(function(){return f}));var t=a(0),i=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},u=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=t,f=u["".concat(r,".").concat(m)]||u[m]||b[m]||o;return a?i.a.createElement(f,c(c({ref:n},p),{},{components:a})):i.a.createElement(f,c({ref:n},p))}));function f(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,r[1]=c;for(var p=2;p<o;p++)r[p]=a[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return r})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return l})),a.d(n,"default",(function(){return s}));var t=a(3),i=a(7),o=(a(0),a(136)),r={id:"5_3_ConfigMaps",title:"ConfigMaps"},c={unversionedId:"Kubernetes/3_kubernetes_storage_&_scheduling/5_3_ConfigMaps",id:"Kubernetes/3_kubernetes_storage_&_scheduling/5_3_ConfigMaps",isDocsHomePage:!1,title:"ConfigMaps",description:"* Key value pairs exposed into a Pod used application configuration settings",source:"@site/docs/Kubernetes/3_kubernetes_storage_&_scheduling/5_3_ConfigMaps.md",slug:"/Kubernetes/3_kubernetes_storage_&_scheduling/5_3_ConfigMaps",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/5_3_ConfigMaps",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/5_3_ConfigMaps.md",version:"current",lastUpdatedAt:1613556017,sidebar:"docs",previous:{title:"Secrets",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/5_2_Secrets"},next:{title:"Accessing a Private Container Registry",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/6_Access_to_private_registry"}},l=[{value:"Using ConfigMaps in Pods",id:"using-configmaps-in-pods",children:[]},{value:"Defining ConfigMaps",id:"defining-configmaps",children:[{value:"Imperative",id:"imperative",children:[]},{value:"Declarative",id:"declarative",children:[]},{value:"Using ConfigMaps in Environment Variable",id:"using-configmaps-in-environment-variable",children:[]},{value:"Using ConfigMaps as Files",id:"using-configmaps-as-files",children:[]}]},{value:"Demo 1",id:"demo-1",children:[]},{value:"Demo 2",id:"demo-2",children:[]}],p={toc:l};function s(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Key value pairs exposed into a Pod used application configuration settings"),Object(o.b)("li",{parentName:"ul"},"Defining application or environment specific settings - connection strings, URLs, host names, credentials",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"A common use case is configured environments"),Object(o.b)("li",{parentName:"ul"},"All the information abstracted outside of the container"),Object(o.b)("li",{parentName:"ul"},"We can inject that configuration to sets up application (dev, QA, prod)"))),Object(o.b)("li",{parentName:"ul"},"Decouple application and Pod configurations"),Object(o.b)("li",{parentName:"ul"},"Maximizing our container image\u2019s portability"),Object(o.b)("li",{parentName:"ul"},"Can be exposed as Environment Variables or Files")),Object(o.b)("p",null,"ConfigMaps must exist ",Object(o.b)("strong",{parentName:"p"},"before")," pod creation, or the container won't start up"),Object(o.b)("h2",{id:"using-configmaps-in-pods"},"Using ConfigMaps in Pods"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Environment variables",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"valueFrom and envFrom"))),Object(o.b)("li",{parentName:"ul"},"Volumes and Files",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Volume mounted inside a container"),Object(o.b)("li",{parentName:"ul"},"Single file or directory"),Object(o.b)("li",{parentName:"ul"},"Many files or directories"),Object(o.b)("li",{parentName:"ul"},"Volume ConfigMaps can be updated")))),Object(o.b)("h2",{id:"defining-configmaps"},"Defining ConfigMaps"),Object(o.b)("h3",{id:"imperative"},"Imperative"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl create configmap appconfigprod \\\n--from-literal=DATABASE_SERVERNAME=sql.example.local \\\n--from-literal=BACKEND_SERVERNAME=be.example.local\n\nkubectl create configmap appconfigqa \\\n--from-file=appconfigqa\n")),Object(o.b)("h3",{id:"declarative"},"Declarative"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n    name: appconfigprod\ndata:\n    BACKEND_SERVERNAME: be.example.local\n    DATABASE_SERVERNAME: sql.example.local\n")),Object(o.b)("h3",{id:"using-configmaps-in-environment-variable"},"Using ConfigMaps in Environment Variable"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"spec:\n    containers:\n    - name: hello-world\n      ...\n      env:\n      - name: DATABASE_SERVERNAME\n        valueFrom:\n            configMapKeyRef:\n                name: appconfigprod\n                key: DATABASE_SERVERNAME\n      - name: BACKEND_SERVERNAME\n        valueFrom:\n            configMapKeyRef:\n                name: appconfigprod\n                key: BACKEND_SERVERNAME\n")),Object(o.b)("p",null,"It's a little big longer... we have better"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"containers:\n- name: hello-world\n    ...\n    envFrom:\n        - configMapRef:\n        name: appconfigprod\n")),Object(o.b)("p",null,"In this case each key and value pair inside of that secret. An environment variable is created, without need to specify them."),Object(o.b)("h3",{id:"using-configmaps-as-files"},"Using ConfigMaps as Files"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'spec:\n    volumes:\n        - name: appconfig\n        configMap:\n            name: appconfigqa\n    containers:\n    - name: hello-world\n      ...\n      volumeMounts:\n      - name: appconfig\n        mountPath: "/etc/appconfig"\n')),Object(o.b)("h2",{id:"demo-1"},"Demo 1"),Object(o.b)("p",null,"Creating ConfigMaps"),Object(o.b)("p",null,"Create a file appconfigqa"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'DATABASE_SERVERNAME="sqlqa.example.local"\nBACKEND_SERVERNAME="beqa.example.local"\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"#Create a PROD ConfigMap\nkubectl create configmap appconfigprod \\\n    --from-literal=DATABASE_SERVERNAME=sql.example.local \\\n    --from-literal=BACKEND_SERVERNAME=be.example.local\n\n#Create a QA ConfigMap\n#We can source our ConfigMap from files or from directories\n#If no key, then the base name of the file\n#Otherwise we can specify a key name to allow for more complex app configs and access to specific configuration elements\ncat appconfigqa\nkubectl create configmap appconfigqa \\\n    --from-file=appconfigqa\n\n#Each creation method yeilded a different structure in the ConfigMap\nkubectl get configmap appconfigprod -o yaml\nkubectl get configmap appconfigqa -o yaml\n")),Object(o.b)("h2",{id:"demo-2"},"Demo 2"),Object(o.b)("p",null,"Using ConfigMaps in Pod Configurations"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"#First as environment variables\nkubectl apply -f deployment-configmaps-env-prod.yaml\n\n#Let's see or configured enviroment variables\nPODNAME=$(kubectl get pods | grep hello-world-configmaps-env-prod | awk '{print $1}' | head -n 1)\necho $PODNAME\n\nkubectl exec -it $PODNAME -- /bin/sh \nprintenv | sort\nexit\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"#Second as files\nkubectl apply -f deployment-configmaps-files-qa.yaml\n\n#Let's see our configmap exposed as a file using the key as the file name.\nPODNAME=$(kubectl get pods | grep hello-world-configmaps-files-qa | awk '{print $1}' | head -n 1)\necho $PODNAME\n\nkubectl exec -it $PODNAME -- /bin/sh \nls /etc/appconfig\ncat /etc/appconfig/appconfigqa\nexit\n\n#Our ConfigMap key, was the filename we read in, and the values are inside the file.\n#This is how we can read in whole files at a time and present them to the file system with the same name in one ConfigMap\n#So think about using this for daemon configs like nginx, redis...etc.\nkubectl get configmap appconfigqa -o yaml\n\n#Updating a configmap, change BACKEND_SERVERNAME to beqa1.example.local\nkubectl edit configmap appconfigqa\n\nkubectl exec -it $PODNAME -- /bin/sh \nwatch cat /etc/appconfig/appconfigqa\nexit\n\n#Cleaning up our demp\nkubectl delete deployment hello-world-configmaps-env-prod\nkubectl delete deployment hello-world-configmaps-files-qa\nkubectl delete configmap appconfigprod\nkubectl delete configmap appconfigqa\n")))}s.isMDXComponent=!0}}]);