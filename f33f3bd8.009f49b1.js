(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{481:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),o=(t(0),t(508)),p={title:"\u96c6\u7fa4\u90e8\u7f72"},l={unversionedId:"help/deploy/deploy_cluster",id:"help/deploy/deploy_cluster",isDocsHomePage:!1,title:"\u96c6\u7fa4\u90e8\u7f72",description:"\u672c\u6559\u7a0b\u6307\u5bfc\u4f60\u5982\u4f55\u5728 centos \u4e2d\u4f7f\u7528\u96c6\u7fa4\u65b9\u5f0f\u90e8\u7f72\u9879\u76ee\u3002",source:"@site/../docs/help/deploy/deploy_cluster.md",slug:"/help/deploy/deploy_cluster",permalink:"/help/deploy/deploy_cluster",version:"current",sidebar:"\u6587\u6863",previous:{title:"Docker \u5b89\u88c5",permalink:"/help/deploy/deploy_docker"},next:{title:"\u914d\u7f6e\u6587\u4ef6",permalink:"/help/deploy/steedos-config"}},c=[{value:"\u670d\u52a1\u5668\u5206\u914d",id:"\u670d\u52a1\u5668\u5206\u914d",children:[]},{value:"\u4ee3\u7406\u670d\u52a1 nginx",id:"\u4ee3\u7406\u670d\u52a1-nginx",children:[]},{value:"mongodb \u6570\u636e\u5e93\u96c6\u7fa4",id:"mongodb-\u6570\u636e\u5e93\u96c6\u7fa4",children:[]},{value:"\u5e94\u7528\u5b9e\u4f8b\u96c6\u7fa4",id:"\u5e94\u7528\u5b9e\u4f8b\u96c6\u7fa4",children:[]},{value:"CentOS7 \u642d\u5efa NTP \u670d\u52a1\u5668",id:"centos7-\u642d\u5efa-ntp-\u670d\u52a1\u5668",children:[{value:"\u5728 21 \u5b89\u88c5 NTP \u670d\u52a1",id:"\u5728-21-\u5b89\u88c5-ntp-\u670d\u52a1",children:[]},{value:"\u5728 63 \u5b89\u88c5 NTP \u670d\u52a1",id:"\u5728-63-\u5b89\u88c5-ntp-\u670d\u52a1",children:[]}]}],s={toc:c};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u672c\u6559\u7a0b\u6307\u5bfc\u4f60\u5982\u4f55\u5728 centos \u4e2d\u4f7f\u7528\u96c6\u7fa4\u65b9\u5f0f\u90e8\u7f72\u9879\u76ee\u3002"),Object(o.b)("h2",{id:"\u670d\u52a1\u5668\u5206\u914d"},"\u670d\u52a1\u5668\u5206\u914d"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u4ee3\u7406\u670d\u52a1\u5668\uff1a\u8fd0\u884c nginx\uff0c\u7528\u4e8e\u4ee3\u7406\u8f6c\u53d1\u8bf7\u6c42\u7ed9\u5e94\u7528"),Object(o.b)("li",{parentName:"ul"},"\u5e94\u7528\u670d\u52a1\u5668\uff1a108\uff0c208 \u542f\u52a8\u5e94\u7528\u5b9e\u4f8b\uff0c\u7528\u4e8e\u5904\u7406\u4e1a\u52a1\u903b\u8f91"),Object(o.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u670d\u52a1\u5668\uff1a216\uff0c217\uff0c218\uff0c\u7528\u4e8e\u5b58\u50a8\u6570\u636e")),Object(o.b)("h2",{id:"\u4ee3\u7406\u670d\u52a1-nginx"},"\u4ee3\u7406\u670d\u52a1 nginx"),Object(o.b)("p",null,"\u5728 nginx \u914d\u7f6e\u6587\u4ef6\u4e2d\u505a\u5982\u4e0b\u914d\u7f6e\uff0c\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-nginx"},'gzip on;\ngzip_min_length  1k;\ngzip_comp_level 9;\ngzip_buffers     4 16k;\ngzip_types       text/plain application/javascript application/x-javascript text/css application/xml application/json;\ngzip_http_version 1.0;\nclient_max_body_size 100M;\n\nproxy_buffering           on;\nproxy_buffer_size         512k;\nproxy_buffers             8 512k;\nproxy_max_temp_file_size  1024m;\n\nupstream creatorws {\n    hash $http_x_user_id;\n    # 108\n    server 192.168.0.108:5040;\n    server 192.168.0.108:5041;\n    # 208\n    server 192.168.0.208:5040;\n    server 192.168.0.208:5041;\n}\n\n# app server\n\nserver {\n    listen      80;\n    server_name 192.168.0.108;\n\n    location / {\n        proxy_pass http://creatorws/;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_set_header Host $host;\n        proxy_set_header X-real-ip $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n\n    location /sockjs/ {\n        proxy_pass http://creatorws/sockjs/;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n    }\n\n    location /cordova.js {\n        return 404;\n    }\n\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"upstream ",Object(o.b)("inlineCode",{parentName:"p"},"creatorws"),"\u914d\u7f6e\u4e86 10 \u4e2a\u4f9b\u8bbf\u95ee\u7684\u670d\u52a1\u5b9e\u4f8b\uff0c\u5176\u4e2d 5 \u4e2a\u4f4d\u4e8e 108 \u670d\u52a1\u5668\uff0c5 \u4e2a\u4f4d\u4e8e 208 \u670d\u52a1\u5668\uff0c\u7528\u4e8e\u8d1f\u8f7d\u5747\u8861")),Object(o.b)("h2",{id:"mongodb-\u6570\u636e\u5e93\u96c6\u7fa4"},"mongodb \u6570\u636e\u5e93\u96c6\u7fa4"),Object(o.b)("p",null,"\u4f7f\u7528 mongodb \u7684",Object(o.b)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/replication/"},"Replication"),"\u6a21\u5f0f\u642d\u5efa\u96c6\u7fa4"),Object(o.b)("p",null,"\u8fd9\u91cc\u4f7f\u7528 192.168.0.216 \u670d\u52a1\u5668\u4f5c\u4e3a Primary\uff0c217 \u4f5c\u4e3a Secondary1\uff0c218 \u4f5c\u4e3a Secondary2"),Object(o.b)("p",null,"\u5206\u522b\u5728\u6570\u636e\u5e93\u670d\u52a1\u5668\u4e0a",Object(o.b)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/installation/"},"\u5b89\u88c5"),"\u597d mongodb \u4e4b\u540e\uff0c\u8fdb\u884c\u521d\u59cb\u5316\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mongo yourdbname\nrs.initiate({ _id: 'steedos', members: [ { _id: 0, host: 'PrimaryIP:27017', priority: 2 }, { _id: 1, host: 'Secondary1IP:27017', priority: 1 }, { _id: 2, host: 'Secondary2IP:27017', priority: 1 } ]})\n")),Object(o.b)("p",null,"\u6dfb\u52a0\u7528\u6237\u9a8c\u8bc1\uff0c \u5728 Primary \u6570\u636e\u5e93\u670d\u52a1\u5668\u4e2d\u6dfb\u52a0\u8d26\u6237\u9a8c\u8bc1\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'mongo\nuse admin\ndb.createUser({user: "adminUsername", pwd: "adminPassword", roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] } )\nuse steedos\ndb.createUser({user: "userUsername", pwd: "userPassword", roles: [ { role: " readWrite", db: "yourdbname" }, { role: " read", db: "local"} ] } )\n')),Object(o.b)("h2",{id:"\u5e94\u7528\u5b9e\u4f8b\u96c6\u7fa4"},"\u5e94\u7528\u5b9e\u4f8b\u96c6\u7fa4"),Object(o.b)("p",null,"\u5728 108 \u548c 208 \u670d\u52a1\u5668\u4e0a\u8fdb\u5165 ",Object(o.b)("inlineCode",{parentName:"p"},"/srv")," \u76ee\u5f55\uff0c\u65b0\u5efa ",Object(o.b)("inlineCode",{parentName:"p"},".env.local")," \u5e76\u914d\u7f6e\u76f8\u5173\u73af\u5883\u53d8\u91cf\uff0c\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-env"},"MONGO_URL=mongodb://username:password@192.1.1.216:27017,192.1.1.217:27017,192.1.1.218:27017/yourdbname?replicaSet=steedos\nPORT=5040\nROOT_URL=https://cn.steedos.com/\nMONGO_OPLOG_URL=mongodb://127.0.0.1:27017/local\nMULTIPLE_INSTANCES_COLLECTION_NAME=workflow_instances\nSTEEDOS_CFS_STORE=local\nSTEEDOS_STORAGE_DIR=./storage\nSTEEDOS_WORKFLOW_URL=https://cn.steedos.com/\nSTEEDOS_CREATOR_URL=https://cn.steedos.com/\n")),Object(o.b)("p",null,"\u786e\u4fdd\u672c\u5730\u5df2\u5b89\u88c5",Object(o.b)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"docker"),"\u548c",Object(o.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker-compose")),Object(o.b)("p",null,"\u65b0\u5efa docker-compose.yml\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},'version: "2"\n\nservices:\n  steedos1:\n    build: .\n    image: steedos/steedos-project-template:1.23\n    restart: unless-stopped\n    ports:\n      - "5040:5040"\n    volumes:\n      - /srv/workflow/cfs:/storage\n      - ./.env.local:/app/.env.local\n  steedos2:\n    image: steedos/steedos-project-template:1.23\n    restart: unless-stopped\n    ports:\n      - "5041:5040"\n    volumes:\n      - /srv/workflow/cfs:/storage\n      - ./.env.local:/app/.env.local\n')),Object(o.b)("p",null,"\u4f7f\u7528 docker-compose \u542f\u52a8\u5e94\u7528\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),Object(o.b)("h2",{id:"centos7-\u642d\u5efa-ntp-\u670d\u52a1\u5668"},"CentOS7 \u642d\u5efa NTP \u670d\u52a1\u5668"),Object(o.b)("p",null,"\u7531\u4e8e\u4ee3\u7406\u3001\u5e94\u7528\u548c\u6570\u636e\u5e93\u90e8\u7f72\u5728\u4e0d\u540c\u7684\u670d\u52a1\u5668\u7684\u539f\u56e0\uff0c\u4e3a\u9632\u6b62\u670d\u52a1\u5668\u65f6\u95f4\u4e0d\u4e00\u81f4\u95ee\u9898\uff0c\u9700\u8981\u642d\u5efa NTP \u670d\u52a1\u5668\u7edf\u4e00\u5404\u670d\u52a1\u5668\u65f6\u95f4"),Object(o.b)("p",null,"\u4ee5\u670d\u52a1\u5668 63\u300121 \u4e3a\u4f8b\uff0c21 \u4f5c\u4e3a\u65f6\u95f4\u670d\u52a1\u5668\uff0c63 \u7684\u65f6\u95f4\u5c06\u4ece 21 \u540c\u6b65"),Object(o.b)("h3",{id:"\u5728-21-\u5b89\u88c5-ntp-\u670d\u52a1"},"\u5728 21 \u5b89\u88c5 NTP \u670d\u52a1"),Object(o.b)("p",null,"\u5b89\u88c5 NTP \u670d\u52a1\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yum install ntp -y\n")),Object(o.b)("p",null,"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"vim /etc/ntp.conf\n# \u628a\u4e0b\u9762\u56db\u884c\u6ce8\u91ca\u6389\nserver 0.centos.pool.ntp.org iburst\nserver 1.centos.pool.ntp.org iburst\nserver 2.centos.pool.ntp.org iburst\nserver 3.centos.pool.ntp.org iburst\n# \u7136\u540e\u5728\u4e0b\u9762\u6dfb\u52a0\u4e00\u884c\nserver 127.127.1.0 iburst\n")),Object(o.b)("p",null,"\u542f\u52a8 ntp \u670d\u52a1\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"systemctl start ntpd\n")),Object(o.b)("p",null,"\u67e5\u770b\u670d\u52a1\u72b6\u6001\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"systemctl status ntpd\n")),Object(o.b)("p",null,"\u67e5\u770b\u662f\u5426\u540c\u6b65\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"ntpq -p\n")),Object(o.b)("p",null,"\u8bbe\u7f6e\u9632\u706b\u5899\uff0c\u6253\u5f00 udp123 \u7aef\u53e3\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --permanent --add-port=123/udp\n")),Object(o.b)("p",null,"\u8bbe\u7f6e\u5f00\u673a\u542f\u52a8\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"systemctl enable ntpd\n")),Object(o.b)("h3",{id:"\u5728-63-\u5b89\u88c5-ntp-\u670d\u52a1"},"\u5728 63 \u5b89\u88c5 NTP \u670d\u52a1"),Object(o.b)("p",null,"\u5b89\u88c5 NTP \u670d\u52a1\u6b65\u9aa4\u4e0e\u5728 21 \u5b89\u88c5\u4e00\u6837\uff0c\u53ea\u662f\u914d\u7f6e\u9700\u8981\u8c03\u6574\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"vim /etc/ntp.conf\n# \u628a\u4e0b\u9762\u56db\u884c\u6ce8\u91ca\u6389\nserver 0.centos.pool.ntp.org iburst\nserver 1.centos.pool.ntp.org iburst\nserver 2.centos.pool.ntp.org iburst\nserver 3.centos.pool.ntp.org iburst\n# \u7136\u540e\u5728\u4e0b\u9762\u6dfb\u52a0\u4e24\u884c\nserver 192.168.0.21\n# \u5141\u8bb821\u65f6\u95f4\u670d\u52a1\u5668\u4e3b\u52a8\u4fee\u6539\u672c\u673a\u7684\u65f6\u95f4\nrestrict 192.168.0.21 nomodify notrap noquery\n")),Object(o.b)("p",null,"\u4e0e\u672c\u5730 ntpd Server \u540c\u6b65\u4e00\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"ntpdate -u 192.168.0.63\n")),Object(o.b)("p",null,"\u542f\u52a8 ntp \u670d\u52a1\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"systemctl start ntpd\n")),Object(o.b)("p",null,"\u67e5\u770b\u662f\u5426\u540c\u6b65\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"[root@localhost ~]# ntpq -p\n     remote           refid      st t when poll reach   delay   offset  jitter\n==============================================================================\n 192.168.0.21    LOCAL(0)         6 u   35   64    1    0.285    0.033   0.000\n")),Object(o.b)("p",null,"\u8bbe\u7f6e\u5f00\u673a\u542f\u52a8\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"systemctl enable ntpd\n")))}b.isMDXComponent=!0},508:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=b(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),i=b(t),u=r,m=i["".concat(p,".").concat(u)]||i[u]||d[u]||o;return t?a.a.createElement(m,l(l({ref:n},s),{},{components:t})):a.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=t[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);