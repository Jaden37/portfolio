(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{125:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),p=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||o;return t?a.a.createElement(d,s(s({ref:n},i),{},{components:t})):a.a.createElement(d,s({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},180:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/api_version-94328cc0209dacd1b2e466f4ee797742.png"},181:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/api_group_apps-153fbde5e707ff5582c991e0562e6e85.png"},182:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/api_version_deployment_version-4dfebadfc9fc27edfb219b7a288cb87a.png"},183:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/api_version_deployment-efb435199541b29d3f2d6ebd0fde1c32.png"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(125)),l={id:"3_API_Version",title:"API Version"},s={unversionedId:"Kubernetes/2_management_APIServer_&_Pod/3_API_Version",id:"Kubernetes/2_management_APIServer_&_Pod/3_API_Version",isDocsHomePage:!1,title:"API Version",description:"* API is versioned",source:"@site/docs\\Kubernetes\\2_management_APIServer_&_Pod\\3_API_Version.md",slug:"/Kubernetes/2_management_APIServer_&_Pod/3_API_Version",permalink:"/docs/Kubernetes/2_management_APIServer_&_Pod/3_API_Version",editUrl:"https://github.com/Jaden37/portfolio/blob/master/docs/Kubernetes/2_management_APIServer_&_Pod/3_API_Version.md",version:"current",sidebar:"docs",previous:{title:"API Groups",permalink:"/docs/Kubernetes/2_management_APIServer_&_Pod/2_API_Groups"},next:{title:"API Request",permalink:"/docs/Kubernetes/2_management_APIServer_&_Pod/4_API_Request"}},c=[{value:"Commands",id:"commands",children:[]}],i={toc:c};function p(e){var n=e.components,l=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,l,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"API is versioned"),Object(o.b)("li",{parentName:"ul"},"Provide stability for existing implementations"),Object(o.b)("li",{parentName:"ul"},"Enable forward change"),Object(o.b)("li",{parentName:"ul"},"Alpha -> Beta -> Stable"),Object(o.b)("li",{parentName:"ul"},"No direct relation to release versions")),Object(o.b)("p",null,"Evolution of an API version\n",Object(o.b)("img",{alt:"api-version",src:t(180).default})),Object(o.b)("h2",{id:"commands"},"Commands"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"#Get the list of the API resources\nkubectl api-resources\n#Filter on a specific group\nkubectl api-resources --api-group=apps\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"api-group-app",src:t(181).default})),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"#Explain command get more information for a specific API Object\n#Check out KIND and VERSION\n#If VERSION = extensions/v1beta1, the API Group is deprecated\nkubectl explain deployment | head\n#Get the API Group in a specific version\nkubectl explain deployment --api-version apps/v1 | head\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"api-version deployment",src:t(182).default})),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"#Print the supported API versions on the API Server\nkubectl api-versions | sort | more\n")),Object(o.b)("p",null,"Cr\xe9er un fichier sur le serveur deployment.yaml et mettez ceci"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world\n  labels:\n    app: hello-world\nspec:\n  replicas: 4\n  selector:\n    matchLabels:\n      app: hello-world\n  template:\n    metadata:\n      labels:\n        app: hello-world\n    spec:\n      containers:\n      - name: hello-world\n        image: gcr.io/google-samples/hello-app:1.0\n        ports:\n        - containerPort: 8080\n")),Object(o.b)("p",null,"Nous d\xe9ployons le fichier"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f deployment.yaml\n#Let observ the result\nkubectl get deployments.apps hello-world -o yaml | head\n")),Object(o.b)("p",null,'La version du d\xe9ploiement est "apps/v1"'),Object(o.b)("p",null,Object(o.b)("img",{alt:"api-version deployment",src:t(183).default})),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"#Let's clean up after this demo\nkubectl delete deployment hello-world\n")))}p.isMDXComponent=!0}}]);