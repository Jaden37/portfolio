(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(125)),l={id:"6_1_Single_Pods",title:"Single container Pods"},c={unversionedId:"Kubernetes/2_management_APIServer_&_Pod/6_1_Single_Pods",id:"Kubernetes/2_management_APIServer_&_Pod/6_1_Single_Pods",isDocsHomePage:!1,title:"Single container Pods",description:"Commands",source:"@site/docs/Kubernetes/2_management_APIServer_&_Pod/6_1_Single_Pods.md",slug:"/Kubernetes/2_management_APIServer_&_Pod/6_1_Single_Pods",permalink:"/docs/Kubernetes/2_management_APIServer_&_Pod/6_1_Single_Pods",editUrl:"https://github.com/Jaden37/portfolio/blob/master/docs/Kubernetes/2_management_APIServer_&_Pod/6_1_Single_Pods.md",version:"current",sidebar:"docs",previous:{title:"What is a pod ?",permalink:"/docs/Kubernetes/2_management_APIServer_&_Pod/6_0_Pods"},next:{title:"Multi-Containers Pods",permalink:"/docs/Kubernetes/2_management_APIServer_&_Pod/6_2_Multi_Pods"}},s=[{value:"Commands",id:"commands",children:[]}],i={toc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"commands"},"Commands"),Object(o.b)("p",null,"2 files are necessary:"),Object(o.b)("p",null,"pod.yaml"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: hello-world-pod\nspec:\n  containers:\n  - name: hello-world\n    image: gcr.io/google-samples/hello-app:1.0\n    ports:\n    - containerPort: 80\n")),Object(o.b)("p",null,"and deployment.yaml"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-world\n  template:\n    metadata:\n      labels:\n        app: hello-world\n    spec:\n      containers:\n      - name: hello-world\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"#Start up kubectl get events --watch and background it.\nkubectl get events --watch &\n\n#Create a pod...we can see the scheduling, container pulling and container starting.\nkubectl apply -f pod.yaml\n\n#Start a Deployment with 1 replica. We see the deployment created, scaling the replica set and the replica set starting the first pod\nkubectl apply -f deployment.yaml\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"#Scale a Deployment to 2 replicas. We see the scaling the replica set and the replica set starting the second pod\nkubectl scale deployment hello-world --replicas=2\n\n#We start off with the replica set scaling to 1, then  Pod deletion, then the Pod killing the container \nkubectl scale deployment hello-world --replicas=1\n\nkubectl get pods\n\n#Let's use exec a command inside our container, we can see the GET and POST API requests through the API server to reach the pod.\nkubectl -v 6 exec -it PASTE_POD_NAME_HERE -- /bin/sh\nps\nexit\n\n#Let's look at the running container/pod from the process level on a Node.\nkubectl get pods -o wide\nssh aen@c1-node2\nps -aux | grep hello-app\nexit\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"#Now, let's access our Pod's application directly, without a service and also off the Pod network.\nkubectl port-forward PASTE_POD_NAME_HERE 80:8080\n\n#Let's do it again, but this time with a non-priviledged port\nkubectl port-forward PASTE_POD_NAME_HERE 8080:8080 &\n\n#We can point curl to localhost, and kubectl port-forward will send the traffic through the API server to the Pod\ncurl http://localhost:8080\n\n#Kill our port forward session.\nfg\nctrl+c\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl delete deployment hello-world\nkubectl delete pod hello-world-pod\n\n#Kill off the kubectl get events\nfg\nctrl+c\n")))}p.isMDXComponent=!0},125:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),p=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.a.createElement(b,c(c({ref:n},i),{},{components:t})):a.a.createElement(b,c({ref:n},i))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);