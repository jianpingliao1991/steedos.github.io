(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{493:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return O}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},i=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),i=s(t),m=a,O=i["".concat(l,".").concat(m)]||i[m]||u[m]||o;return t?r.a.createElement(O,c({ref:n},p,{components:t})):r.a.createElement(O,c({ref:n},p))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return s}));var a=t(1),r=t(6),o=(t(0),t(493)),l={title:"\u90e8\u7f72\u5230 Kubernetes (k8s)"},c={unversionedId:"help/deploy/deploy_kubernetes",id:"help/deploy/deploy_kubernetes",isDocsHomePage:!1,title:"\u90e8\u7f72\u5230 Kubernetes (k8s)",description:"\u534e\u708e\u9b54\u65b9\u662f Kubernetes \u539f\u751f\u7684\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\u3002\u672c\u6559\u7a0b\u6307\u5bfc\u60a8\u5982\u4f55\u5c06\u534e\u708e\u9b54\u65b9\u79df\u6237\u90e8\u7f72\u5230\u79c1\u6709\u548c\u516c\u5171\u4e91\u57fa\u7840\u67b6\u6784\uff08\u201c\u6df7\u5408\u201d\u4e91\uff09\u4e0a\u3002",source:"@site/../docs/help/deploy/deploy_kubernetes.md",slug:"/help/deploy/deploy_kubernetes",permalink:"/help/deploy/deploy_kubernetes",version:"current"},b=[{value:"\u521b\u5efa\u4e00\u4e2a\u534e\u708e\u9b54\u65b9\u79df\u6237",id:"\u521b\u5efa\u4e00\u4e2a\u534e\u708e\u9b54\u65b9\u79df\u6237",children:[{value:"\u521b\u5efa Namespace",id:"\u521b\u5efa-namespace",children:[]},{value:"\u90e8\u7f72 MongoDB",id:"\u90e8\u7f72-mongodb",children:[]},{value:"\u90e8\u7f72 MinIO",id:"\u90e8\u7f72-minio",children:[]},{value:"\u90e8\u7f72 Steedos",id:"\u90e8\u7f72-steedos",children:[]},{value:"\u90e8\u7f72 Steedos \u5bf9\u5916\u8bbf\u95ee\u670d\u52a1",id:"\u90e8\u7f72-steedos-\u5bf9\u5916\u8bbf\u95ee\u670d\u52a1",children:[]}]},{value:"\u4f7f\u7528 Kubernetes API \u521b\u5efa\u79df\u6237",id:"\u4f7f\u7528-kubernetes-api-\u521b\u5efa\u79df\u6237",children:[{value:"\u90e8\u7f72 Steedos",id:"\u90e8\u7f72-steedos-1",children:[]}]}],p={rightToc:b};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u534e\u708e\u9b54\u65b9\u662f Kubernetes \u539f\u751f\u7684\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\u3002\u672c\u6559\u7a0b\u6307\u5bfc\u60a8\u5982\u4f55\u5c06\u534e\u708e\u9b54\u65b9\u79df\u6237\u90e8\u7f72\u5230\u79c1\u6709\u548c\u516c\u5171\u4e91\u57fa\u7840\u67b6\u6784\uff08\u201c\u6df7\u5408\u201d\u4e91\uff09\u4e0a\u3002"),Object(o.b)("h2",{id:"\u521b\u5efa\u4e00\u4e2a\u534e\u708e\u9b54\u65b9\u79df\u6237"},"\u521b\u5efa\u4e00\u4e2a\u534e\u708e\u9b54\u65b9\u79df\u6237"),Object(o.b)("p",null,"\u6bcf\u4e2a\u534e\u708e\u9b54\u65b9\u79df\u6237\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"MongoDB \u6570\u636e\u5e93"),Object(o.b)("li",{parentName:"ul"},"MinIO \u5bf9\u8c61\u5b58\u50a8"),Object(o.b)("li",{parentName:"ul"},"Steedos \u534e\u708e\u9b54\u65b9")),Object(o.b)("p",null,"\u90e8\u7f72\u524d\u9700\u8981\u8003\u8651\u4ee5\u4e0b\u57fa\u7840\u914d\u7f6e\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"STEEDOS_TENANT_ID: \u534e\u708e\u9b54\u65b9\u79df\u6237 ID\uff0c\u968f\u673a\u751f\u6210\u3002"),Object(o.b)("li",{parentName:"ul"},"STEEDOS_ROOT_URL: \u534e\u708e\u9b54\u65b9\u5bf9\u5916\u8bbf\u95ee\u7684URL\u3002"),Object(o.b)("li",{parentName:"ul"},"STEEDOS_PORT: \u534e\u708e\u9b54\u65b9\u7684\u5bf9\u5916\u8bbf\u95ee\u7684\u7aef\u53e3\u3002"),Object(o.b)("li",{parentName:"ul"},"STEEDOS_SERVERS: \u534e\u708e\u9b54\u65b9\u670d\u52a1\u5668\u6570\u91cf\u3002"),Object(o.b)("li",{parentName:"ul"},"MONGODB_SERVERS: MONGODB \u670d\u52a1\u5668\u6570\u91cf\u3002"),Object(o.b)("li",{parentName:"ul"},"MINIO_SERVERS: MinIO \u670d\u52a1\u5668\u6570\u91cf\u3002"),Object(o.b)("li",{parentName:"ul"},"MINIO_VOLUMES_PER_SERVER: MinIO \u5355\u4e2a\u670d\u52a1\u5668\u7684\u786c\u76d8\u6570\u91cf\u3002"),Object(o.b)("li",{parentName:"ul"},"MINIO_VOLUME_STORAGE: MinIO \u5355\u4e2a\u786c\u76d8\u7684\u5bb9\u91cf\u3002")),Object(o.b)("h3",{id:"\u521b\u5efa-namespace"},"\u521b\u5efa Namespace"),Object(o.b)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u591a\u79df\u6237\u7684\u5b8c\u5168\u9694\u79bb\uff0c\u6211\u4eec\u5efa\u8bae\u4e3a\u6bcf\u4e2a\u79df\u6237\u521b\u5efa\u4e00\u4e2a\u5355\u72ec\u7684 Namespace, \u66f4\u5b89\u5168\u7684\u505a\u6cd5\u662f ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://loft.sh/features/virtual-kubernetes-clusters"}),"\u521b\u5efa\u72ec\u7acb\u7684 vClusters"),"."),Object(o.b)("p",null,"\u521b\u5efa Namespace \u63cf\u8ff0\u6587\u4ef6\uff1a ${STEEDOS_TENANT_ID}.yaml"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: ${STEEDOS_TENANT_ID}\n")),Object(o.b)("p",null,"\u4f7f\u7528\u547d\u4ee4\u6216\u4f7f\u7528 Kubernetes API \u52a0\u8f7d\u6b64\u6587\u4ef6\uff0c\u521b\u5efa\u4e00\u4e2anamespace\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"kubectl create -f ./${STEEDOS_TENANT_ID}.yaml\n")),Object(o.b)("h3",{id:"\u90e8\u7f72-mongodb"},"\u90e8\u7f72 MongoDB"),Object(o.b)("p",null,"\u90e8\u7f72\u524d\u9700\u8981\u5148\u5b89\u88c5 MongoDB Kubernetes Operator\uff0c\u5177\u4f53\u6587\u6863\u8bf7\u53c2\u8003\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.mongodb.com/kubernetes-operator/master/tutorial/install-k8s-operator/"}),"Install the MongoDB Enterprise Kubernetes Operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/mongodb/mongodb-kubernetes-operator"}),"Install the MongoDB Community Kubernetes Operator"))),Object(o.b)("p",null,"\u672c\u6559\u7a0b\u4ee5\u793e\u533a\u7248\u4e3a\u4f8b\u3002"),Object(o.b)("p",null,"\u521b\u5efa MongoDB \u79df\u6237\u63cf\u8ff0\u6587\u4ef6\uff1amongodb.yaml"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: mongodb.com/v1\nkind: MongoDBCommunity\nmetadata:\n  name: mongodb-${STEEDOS_TENANT_ID}\nspec:\n  members: ${MONGODB_SERVERS}\n  type: ReplicaSet\n  version: "4.2.6"\n')),Object(o.b)("p",null,"\u4f7f\u7528\u547d\u4ee4\u6216\u4f7f\u7528 Kubernetes API \u52a0\u8f7d\u6b64\u6587\u4ef6\uff0c\u90e8\u7f72 MongoDB\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"kubectl create -f ./mongodb.yaml --namespace ${STEEDOS_TENANT_ID}\n")),Object(o.b)("h3",{id:"\u90e8\u7f72-minio"},"\u90e8\u7f72 MinIO"),Object(o.b)("p",null,"\u90e8\u7f72\u524d\u9700\u8981\u5148\u5b89\u88c5 MinIO Kubernetes Operator\uff0c\u5177\u4f53\u6587\u6863\u8bf7\u53c2\u8003\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/minio/operator"}),"MinIO Kubernetes Operator"))),Object(o.b)("p",null,"\u521b\u5efa MinIO \u79df\u6237\u63cf\u8ff0\u6587\u4ef6\uff1aminio.yaml"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: minio.min.io/v2\nkind: Tenant\nmetadata:\n  name: minio\n  labels:\n    app: minio\n  annotations:\n    prometheus.io/path: /minio/prometheus/metrics\n    prometheus.io/port: "9000"\n    prometheus.io/scrape: "true"\n\nspec:\n  image: minio/minio:RELEASE.2020-12-23T02-24-12Z\n  imagePullPolicy: IfNotPresent\n\n  credsSecret:\n    name: minio-creds-secret\n\n  pools:\n    - servers: ${MINIO_SERVERS}\n\n      volumesPerServer: ${MINIO_VOLUMES_PER_SERVER}\n\n      volumeClaimTemplate:\n        metadata:\n          name: data\n        spec:\n          accessModes:\n            - ReadWriteOnce\n          resources:\n            requests:\n              storage: ${MINIO_VOLUME_STORAGE}\n\n  mountPath: /export\n\n  console:\n    image: minio/console:v0.5.2\n    replicas: 1\n    consoleSecret:\n      name: console-secret\n')),Object(o.b)("p",null,"\u4f7f\u7528\u547d\u4ee4\u6216\u4f7f\u7528 Kubernetes API \u52a0\u8f7d\u6b64\u6587\u4ef6\uff0c\u90e8\u7f72MinIO\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"kubectl create -f ./minio.yaml --namespace ${STEEDOS_TENANT_ID}\n")),Object(o.b)("h3",{id:"\u90e8\u7f72-steedos"},"\u90e8\u7f72 Steedos"),Object(o.b)("p",null,"\u521b\u5efa Steedos \u79df\u6237\u63cf\u8ff0\u6587\u4ef6\uff1asteedos.yaml"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: steedos\nspec:\n  replicas: ${STEEDOS_SERVERS}\n  template:\n    metadata:\n      labels:\n        app: steedos\n    spec:\n      containers:\n        - name: steedos-community\n          image: steedos-community@1.23\n          ports:\n            - containerPort: 3000\n        - env:\n            - name: MONGO_URL\n              value: mongodb://mongo-0.mongo,mongo-1.mongo,mongo-2.mongo:27017/steedos?replicaSet=rsSteedos\n            - name: PORT\n              value: "3000"\n            - name: ROOT_URL\n              value: ${STEEDOS_ROOT_URL}\n')),Object(o.b)("p",null,"\u4f7f\u7528\u547d\u4ee4\u6216\u4f7f\u7528 Kubernetes API \u52a0\u8f7d\u6b64\u6587\u4ef6\uff0c\u90e8\u7f72 Steedos\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"kubectl create -f ./steedos.yaml --namespace ${STEEDOS_TENANT_ID}\n")),Object(o.b)("h3",{id:"\u90e8\u7f72-steedos-\u5bf9\u5916\u8bbf\u95ee\u670d\u52a1"},"\u90e8\u7f72 Steedos \u5bf9\u5916\u8bbf\u95ee\u670d\u52a1"),Object(o.b)("p",null,"\u521b\u5efa\u670d\u52a1\u63cf\u8ff0\u6587\u4ef6\uff1a steedos-service.yaml"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Service\nmetadata:\n  name: steedos-service\nspec:\n  selector:\n    app: steedos\n  ports:\n    - protocol: TCP\n      port: ${STEEDOS_PORT}\n      targetPort: 3000\n")),Object(o.b)("p",null,"\u4f7f\u7528\u547d\u4ee4\u6216\u4f7f\u7528 Kubernetes API \u52a0\u8f7d\u6b64\u6587\u4ef6\uff0c\u90e8\u7f72 Steedos Service"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"kubectl create -f ./steedos.yaml --namespace ${STEEDOS_TENANT_ID}\n")),Object(o.b)("h2",{id:"\u4f7f\u7528-kubernetes-api-\u521b\u5efa\u79df\u6237"},"\u4f7f\u7528 Kubernetes API \u521b\u5efa\u79df\u6237"),Object(o.b)("p",null,"\u6309\u7167\u524d\u8ff0 \u201c\u521b\u5efa\u4e00\u4e2a\u534e\u708e\u9b54\u65b9\u79df\u6237\u201d \u6b65\u9aa4\uff0c\u4f9d\u6b64\u8c03\u7528 Kubernetes API \u5bf9\u5e94\u7684\u6807\u51c6\u63a5\u53e3\uff0c\u52a0\u8f7d\u76f8\u5e94\u7684 yml \u6587\u4ef6\uff0c\u5373\u53ef\u5b9e\u73b0\u81ea\u52a8\u5316\u521b\u5efa\u79df\u6237\u3002"),Object(o.b)("h3",{id:"\u90e8\u7f72-steedos-1"},"\u90e8\u7f72 Steedos"),Object(o.b)("p",null,"HTTP \u8bf7\u6c42"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"POST /apis/apps/v1/namespaces/${STEEDOS_TENANT_ID}/deployments\n")),Object(o.b)("p",null,"Header \u53c2\u6570"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Content-Type: application/yaml\n")),Object(o.b)("p",null,"Body \u53c2\u6570"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"body: ${YAML\u6587\u4ef6\u5185\u5bb9}\n")),Object(o.b)("p",null,"\u5b8c\u6574\u5b9e\u4f8b"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ kubectl proxy\n$ curl -X POST -H 'Content-Type: application/yaml' --data '\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: steedos\nspec:\n  replicas: ${STEEDOS_SERVERS}\n  template:\n    metadata:\n      labels: \n        app: steedos\n    spec:     \n      containers: \n      - name: steedos-community\n        image: steedos-community@1.23\n        ports:\n        - containerPort: 3000\n' http://127.0.0.1:8001/apis/apps/v1/namespaces/${STEEDOS_TENANT_ID}/deployments\n\n")))}s.isMDXComponent=!0}}]);