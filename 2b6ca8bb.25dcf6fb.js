(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{123:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),g=n,b=u["".concat(i,".").concat(g)]||u[g]||d[g]||a;return r?o.a.createElement(b,s(s({ref:t},l),{},{components:r})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(123)),i={id:"6_Access_to_private_registry",title:"Accessing a Private Container Registry"},s={unversionedId:"Kubernetes/3_kubernetes_storage_&_scheduling/6_Access_to_private_registry",id:"Kubernetes/3_kubernetes_storage_&_scheduling/6_Access_to_private_registry",isDocsHomePage:!1,title:"Accessing a Private Container Registry",description:"* Secrets for application configuration",source:"@site/docs\\Kubernetes\\3_kubernetes_storage_&_scheduling\\6_Access_to_private_registry.md",slug:"/Kubernetes/3_kubernetes_storage_&_scheduling/6_Access_to_private_registry",permalink:"/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/6_Access_to_private_registry",editUrl:"https://github.com/Jaden37/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/6_Access_to_private_registry.md",version:"current",sidebar:"docs",previous:{title:"ConfigMaps",permalink:"/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/5_3_ConfigMaps"},next:{title:"Scheduling",permalink:"/portfolio/docs/Kubernetes/3_kubernetes_storage_&_scheduling/7_Scheduling"}},c=[{value:"Demo",id:"demo",children:[]}],l={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Secrets for application configuration"),Object(a.b)("li",{parentName:"ul"},"Use Secrets to access a private container registry"),Object(a.b)("li",{parentName:"ul"},"Want to access registries over the Internet",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Docker Hub"),Object(a.b)("li",{parentName:"ul"},"Cloud based container registries"))),Object(a.b)("li",{parentName:"ul"},"Create a Secret of type docker-registry"),Object(a.b)("li",{parentName:"ul"},"Enabling Kubernetes (kubelet) to pull the images from the private registry")),Object(a.b)("h2",{id:"demo"},"Demo"),Object(a.b)("p",null,"Pulling a Container from a Private Container Registry."),Object(a.b)("p",null,'In this demo, don\'t forget to change the username here "nocentino"'),Object(a.b)("p",null,"First, you need a private repository in our registry, follow the directions here ",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/docker-hub/repos/#private-repositories"},"https://docs.docker.com/docker-hub/repos/#private-repositories")),Object(a.b)("p",null,"Create the file deployment-private-registry.yaml"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world-private-registry\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-world-private-registry\n  template:\n    metadata:\n      labels:\n        app: hello-world-private-registry\n    spec:\n      containers:\n      - name: hello-world\n        image: nocentino/hello-app:ps\n        ports:\n          - containerPort: 8080\n      imagePullSecrets:\n      - name: private-reg-cred\n")),Object(a.b)("p",null,"Pull a container, tag locally, and then push it into our private registry"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"#Then let's log into docker...I've already done this so it's using the configuration in config.json\nsudo docker login \n\n#Let's pull down a hello-world image from gcr\nsudo docker pull gcr.io/google-samples/hello-app:1.0\n\n#Let's get our image ID so we can tag it locally\nsudo docker image ls gcr.io/google-samples/hello-app\n\n#tagging our image in the format your registry, image and tag\n#You'll be using your own repository, so update that information here. \nsudo docker tag bc5c421ecd6c nocentino/hello-app:ps\n\n#Now push that locally tagged image into our private registry at docker hub\n#You'll be using your own repository, so update that information here. \nsudo docker push nocentino/hello-app:ps\n\n#We need to adjust permissions on our config.json file, since I did a sudo docker login earlier...\nsudo chown $(id -u):$(id -g) ~/.docker/\nsudo chown $(id -u):$(id -g) ~/.docker/config.json\n")),Object(a.b)("p",null,"Create our secret that we'll use for our image pull...from our docker config.json"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"#This is of type generic, for docker-registry, look at line 48\nkubectl create secret generic private-reg-cred \\\n    --from-file=.dockerconfigjson=/home/aen/.docker/config.json \\\n    --type=kubernetes.io/dockerconfigjson\n\n#...or if needed we can specify this explicitly using the following parameters\nkubectl create secret docker-registry private-reg-cred \\\n    --docker-server=https://index.docker.io/v1/ \\\n    --docker-username=$USERNAME \\\n    --docker-password=$PASSWORD \\\n    --docker-email=$EMAIL\n")),Object(a.b)("p",null,"Ensure the image doesn't exist on any of our nodes...or else we can get a false positive"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"#you'll be using your own repository, so update that information here.\nssh jules@c1-node1 'sudo docker rmi nocentino/hello-app:ps'\nssh jules@c1-node2 'sudo docker rmi nocentino/hello-app:ps'\n\n#Create a deployment using imagePullSecret in the Pod Spec.\nkubectl apply -f deployment-private-registry.yaml\n\n#Check out Containers and events section to ensure the container was actually pulled.\n#This is why I made sure they were deleted from each Node above. \nkubectl describe pods hello-world\n\n#clean up after our demo\nkubectl delete -f deployment-private-registry.yaml\nkubectl delete secret private-reg-cred\nsudo docker rmi nocentino/hello-app:ps\n")))}p.isMDXComponent=!0}}]);