(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(125)),s={id:"5_2_Secrets",title:"Secrets"},o={unversionedId:"Kubernetes/3_kubernetes_storage_&_scheduling/5_2_Secrets",id:"Kubernetes/3_kubernetes_storage_&_scheduling/5_2_Secrets",isDocsHomePage:!1,title:"Secrets",description:"* Store sensitive information as Objects",source:"@site/docs/Kubernetes/3_kubernetes_storage_&_scheduling/5_2_Secrets.md",slug:"/Kubernetes/3_kubernetes_storage_&_scheduling/5_2_Secrets",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/5_2_Secrets",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/3_kubernetes_storage_&_scheduling/5_2_Secrets.md",version:"current",sidebar:"docs",previous:{title:"Environment Variables",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/5_1_Env_variables"},next:{title:"ConfigMaps",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/5_3_ConfigMaps"}},l=[{value:"Properties of Secrets",id:"properties-of-secrets",children:[]},{value:"Create a Secret",id:"create-a-secret",children:[]},{value:"Unsing secret in Pods",id:"unsing-secret-in-pods",children:[{value:"Unsing secret in Environment Variables",id:"unsing-secret-in-environment-variables",children:[]},{value:"Unsing secret as Files",id:"unsing-secret-as-files",children:[]}]},{value:"Demo 1",id:"demo-1",children:[]},{value:"Demo 2",id:"demo-2",children:[]}],i={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Store sensitive information as Objects"),Object(c.b)("li",{parentName:"ul"},"Retrieve for later use"),Object(c.b)("li",{parentName:"ul"},"Passwords, API tokens, keys and certificates"),Object(c.b)("li",{parentName:"ul"},"Safer and more flexible configurations (Pod Specs and Images)")),Object(c.b)("h2",{id:"properties-of-secrets"},"Properties of Secrets"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"base64 encoded"),Object(c.b)("li",{parentName:"ul"},"Encryption can be configured"),Object(c.b)("li",{parentName:"ul"},"Stored in etcd"),Object(c.b)("li",{parentName:"ul"},"Namespaced and can only be referenced by Pods in the same Namespace"),Object(c.b)("li",{parentName:"ul"},"Unavailable Secrets will prevent a Pods from starting up")),Object(c.b)("p",null,"More info available here: ",Object(c.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/"},"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/")),Object(c.b)("p",null,"They are 3 different types of secret in Kubernetes:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Docker registry"),Object(c.b)("li",{parentName:"ul"},"generic - create from local file/directory or value from command line"),Object(c.b)("li",{parentName:"ul"},"TLS")),Object(c.b)("h2",{id:"create-a-secret"},"Create a Secret"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret generic app1 \\\n    --from-literal=USERNAME=app1login \\\n    --from-literal=PASSWORD='S0methingS@Str0ng!'\n")),Object(c.b)("p",null,"you can also use --from-file or --from-directory"),Object(c.b)("h2",{id:"unsing-secret-in-pods"},"Unsing secret in Pods"),Object(c.b)("p",null,"But how can our container based applications can be access to our secrets."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Environment Variables"),Object(c.b)("li",{parentName:"ul"},"Volumes or Files - tmpfs mounted file exposed"),Object(c.b)("li",{parentName:"ul"},"Reference Secret ",Object(c.b)("strong",{parentName:"li"},"must")," be created and accessible for the Pod to start up - if is not available the Pod can't start")),Object(c.b)("h3",{id:"unsing-secret-in-environment-variables"},"Unsing secret in Environment Variables"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"spec:\n    containers:\n    - name: hello-world\n    ...\n    env:\n    - name: app1username\n      valueFrom:\n        secretKeyRef:\n            name: app1\n            key: USERNAME\n    - name: app1password\n      valueFrom:\n        secretKeyRef:\n            name: app1\n            key: PASSWORD\n")),Object(c.b)("p",null,"It's a little big longer... we have better"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"spec:\n    containers:\n    - name: hello-world\n    ...\n    envFrom:\n    - secretRef:\n        name: app1\n")),Object(c.b)("p",null,"In this case each key and value pair inside of that secret. An environment variable is created, without need to specify them."),Object(c.b)("h3",{id:"unsing-secret-as-files"},"Unsing secret as Files"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},'spec:\n    volumes:\n    - name: appconfig\n      secret:\n        secretName: app1\n    containers:\n    ...\n    volumeMounts:\n        - name: appconfig\n          mountPath: "/etc/appconfig"\n')),Object(c.b)("p",null,"In the directory container, for each key whey have a file named like the name of our pair. The value is in the file."),Object(c.b)("p",null,"For ou example whe have to file:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"/etc/appconfig/USERNAME"),Object(c.b)("li",{parentName:"ul"},"/etc/appconfig/PASSWORD")),Object(c.b)("h2",{id:"demo-1"},"Demo 1"),Object(c.b)("p",null,"Creating and accessing Secrets"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"#Generic - Create a secret from a local file, directory or literal value\n#They keys and values are case sensitive\nkubectl create secret generic app1 \\\n    --from-literal=USERNAME=app1login \\\n    --from-literal=PASSWORD='S0methingS@Str0ng!'\n\n\n#Opaque means it's an arbitrary user defined key/value pair. Data 2 means two key/value pairs in the secret.\n#Other types include service accounts and container registry authentication info\nkubectl get secrets\n\n#app1 said it had 2 Data elements, let's look\nkubectl describe secret app1\n\n#If we need to access those at the command line...\n#These are wrapped in bash expansion to add a newline to output for readability\necho $(kubectl get secret app1 --template={{.data.USERNAME}} )\necho $(kubectl get secret app1 --template={{.data.USERNAME}} | base64 --decode )\n\necho $(kubectl get secret app1 --template={{.data.PASSWORD}} )\necho $(kubectl get secret app1 --template={{.data.PASSWORD}} | base64 --decode )\n")),Object(c.b)("h2",{id:"demo-2"},"Demo 2"),Object(c.b)("p",null,"Accessing Secrets inside a Pod"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"#As environment variables\nkubectl apply -f deployment-secrets-env.yaml\n\nPODNAME=$(kubectl get pods | grep hello-world-secrets-env | awk '{print $1}' | head -n 1)\necho $PODNAME\n\n#Now let's get our enviroment variables from our container\n#Our Enviroment variables from our Pod Spec are defined\n#Notice the alpha information is there but not the beta information. Since beta wasn't defined when the Pod started.\nkubectl exec -it $PODNAME -- /bin/sh\nprintenv | grep ^app1\nexit\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"#Accessing Secrets as files\nkubectl apply -f deployment-secrets-files.yaml\n\n#Grab our pod name into a variable\nPODNAME=$(kubectl get pods | grep hello-world-secrets-files | awk '{print $1}' | head -n 1)\necho $PODNAME\n\n#Looking more closely at the Pod we see volumes, appconfig and in Mounts...\nkubectl describe pod $PODNAME\n\n#Let's access a shell on the Pod\nkubectl exec -it $PODNAME -- /bin/sh\n\n#Now we see the path we defined in the Volumes part of the Pod Spec\n#A directory for each KEY and it's contents are the value\nls /etc/appconfig\ncat /etc/appconfig/USERNAME\ncat /etc/appconfig/PASSWORD\nexit\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"#If you need to put only a subset of the keys in a secret check out this line here and look at items\n#https://kubernetes.io/docs/concepts/storage/volumes#secret\n\n#let's clean up after our demos...\nkubectl delete secret app1\nkubectl delete deployment hello-world-secrets-env\nkubectl delete deployment hello-world-secrets-files\n")))}p.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||c;return n?a.a.createElement(m,o(o({ref:t},i),{},{components:n})):a.a.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,s=new Array(c);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<c;i++)s[i]=n[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);