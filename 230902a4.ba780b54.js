(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{128:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=r,b=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return t?a.a.createElement(b,c(c({ref:n},s),{},{components:t})):a.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(128)),i={id:"6_2_Multi_Pods",title:"Multi-Containers Pods"},c={unversionedId:"Kubernetes/2_management_APIServer_&_Pod/6_2_Multi_Pods",id:"Kubernetes/2_management_APIServer_&_Pod/6_2_Multi_Pods",isDocsHomePage:!1,title:"Multi-Containers Pods",description:"Define a multi-container Pods",source:"@site/docs/Kubernetes/2_management_APIServer_&_Pod/6_2_Multi_Pods.md",slug:"/Kubernetes/2_management_APIServer_&_Pod/6_2_Multi_Pods",permalink:"/docs/Kubernetes/2_management_APIServer_&_Pod/6_2_Multi_Pods",editUrl:"https://github.com/j-peguet/portfolio/blob/master/docs/Kubernetes/2_management_APIServer_&_Pod/6_2_Multi_Pods.md",version:"current",sidebar:"docs",previous:{title:"Single container Pods",permalink:"/docs/Kubernetes/2_management_APIServer_&_Pod/6_1_Single_Pods"},next:{title:"Persistent storage",permalink:"/docs/Kubernetes/3_kubernetes_storage_&_scheduling/1_Persistent_storage"}},l=[{value:"Define a multi-container Pods",id:"define-a-multi-container-pods",children:[]},{value:"Commands",id:"commands",children:[{value:"Create a shared volume between containers in a Pod",id:"create-a-shared-volume-between-containers-in-a-pod",children:[]}]}],s={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"define-a-multi-container-pods"},"Define a multi-container Pods"),Object(o.b)("p",null,"With yaml"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n    name: multicontainer-pod\nspec:\n    containers:\n    - name: nginx\n      image: nginx\n      ports:\n      - containerPort: 80\n    ...\n    - name: alpine\n      image: alpine\n")),Object(o.b)("h2",{id:"commands"},"Commands"),Object(o.b)("h3",{id:"create-a-shared-volume-between-containers-in-a-pod"},"Create a shared volume between containers in a Pod"),Object(o.b)("p",null,"Create file multicontainer-pod.yaml"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: multicontainer-pod\nspec:\n  containers:\n  - name: producer\n    image: ubuntu\n    command: ["/bin/bash"]\n    args: ["-c", "while true; do echo $(hostname) $(date) >> /var/log/index.html; sleep 10; done"]\n    volumeMounts:\n    - name: webcontent\n      mountPath: /var/log\n  - name: consumer\n    image: nginx\n    ports:\n      - containerPort: 80\n    volumeMounts:\n    - name: webcontent\n      mountPath: /usr/share/nginx/html\n  volumes:\n  - name: webcontent \n    emptyDir: {}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"#Review the code for a multi-container pod, the volume webcontent is an emptyDir...essentially a temporary file system.\n#This is mounted in the containers at mountPath, in two different locations inside the container.\n#As producer writes data, consumer can see it immediatly since it's a shared file system.\ncat multicontainer-pod.yaml\n\n#Let's create our multi-container Pod.\nkubectl apply -f multicontainer-pod.yaml\n\n#Let's connect to our Pod...not specifying a name defaults to the first container in the configuration\nkubectl exec -it multicontainer-pod -- /bin/sh\nls -la /var/log\ntail /var/log/index.html\nexit\n\n#Let's specify a container name and access the consumer container in our Pod\nkubectl exec -it multicontainer-pod --container consumer -- /bin/sh\nls -la /usr/share/nginx/html\ntail /usr/share/nginx/html/index.html\nexit\n\n#This application listens on port 80, we'll forward from 8080->80\nkubectl port-forward multicontainer-pod 8080:80 &\ncurl http://localhost:8080\n\n#Kill our port-forward.\nfg\nctrl+c\n\nkubectl delete pod multicontainer-pod\n")))}u.isMDXComponent=!0}}]);