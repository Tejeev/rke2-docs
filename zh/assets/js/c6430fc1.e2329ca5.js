"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[9476],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>v});var n=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=l,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(v,o(o({ref:r},s),{},{components:t})):n.createElement(v,o({ref:r},s))}));function v(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5810:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(7462),l=(t(7294),t(3905));const a={title:"\u7ba1\u7406 Server \u89d2\u8272"},o=void 0,i={unversionedId:"install/server_roles",id:"install/server_roles",title:"\u7ba1\u7406 Server \u89d2\u8272",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u542f\u52a8 RKE2 \u5c06\u8fd0\u884c\u6240\u6709 control-plane \u7ec4\u4ef6\uff0c\u5305\u62ec apiserver\u3001controller-manager\u3001scheduler \u548c etcd\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u7981\u7528\u7279\u5b9a\u7ec4\u4ef6\u6765\u5c06 control-plane \u548c etcd \u89d2\u8272\u62c6\u5206\u5230\u5355\u72ec\u7684\u8282\u70b9\u4e0a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/server_roles.md",sourceDirName:"install",slug:"/install/server_roles",permalink:"/zh/install/server_roles",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/server_roles.md",tags:[],version:"current",lastUpdatedAt:1699996945,formattedLastUpdatedAt:"2023\u5e7411\u670814\u65e5",frontMatter:{title:"\u7ba1\u7406 Server \u89d2\u8272"},sidebar:"mySidebar",previous:{title:"Windows \u79bb\u7ebf\u5b89\u88c5",permalink:"/zh/install/windows_airgap"},next:{title:"\u5378\u8f7d",permalink:"/zh/install/uninstall"}},c={},p=[{value:"\u4e13\u7528 <code>etcd</code> \u8282\u70b9",id:"\u4e13\u7528-etcd-\u8282\u70b9",level:2},{value:"\u4e13\u7528 <code>control-plane</code> \u8282\u70b9",id:"\u4e13\u7528-control-plane-\u8282\u70b9",level:2},{value:"\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709 server",id:"\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709-server",level:2}],s={toc:p},d="wrapper";function u(e){let{components:r,...t}=e;return(0,l.kt)(d,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u542f\u52a8 RKE2 \u5c06\u8fd0\u884c\u6240\u6709 control-plane \u7ec4\u4ef6\uff0c\u5305\u62ec apiserver\u3001controller-manager\u3001scheduler \u548c etcd\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u7981\u7528\u7279\u5b9a\u7ec4\u4ef6\u6765\u5c06 control-plane \u548c etcd \u89d2\u8272\u62c6\u5206\u5230\u5355\u72ec\u7684\u8282\u70b9\u4e0a\u3002"),(0,l.kt)("h2",{id:"\u4e13\u7528-etcd-\u8282\u70b9"},"\u4e13\u7528 ",(0,l.kt)("inlineCode",{parentName:"h2"},"etcd")," \u8282\u70b9"),(0,l.kt)("p",null,"\u8981\u521b\u5efa\u4ec5\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"etcd")," \u89d2\u8272\u7684 Server\uff0c\u8bf7\u90e8\u7f72\u4e00\u4e2a\u7981\u7528\u6240\u6709 Control Plane \u7ec4\u4ef6\u7684\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# /etc/rancher/rke2/config.yaml\ndisable-apiserver: true\ndisable-controller-manager: true\ndisable-scheduler: true\n")),(0,l.kt)("p",null,"\u7b2c\u4e00\u4e2a\u8282\u70b9\u5c06\u542f\u52a8 etcd\uff0c\u7136\u540e\u7b49\u5f85\u5176\u4ed6 ",(0,l.kt)("inlineCode",{parentName:"p"},"etcd")," \u548c/\u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"control-plane")," \u8282\u70b9\u52a0\u5165\u3002\u5728\u52a0\u5165\u542f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"control-plane")," \u7ec4\u4ef6\u7684\u5176\u4ed6 server \u4e4b\u524d\uff0c\u96c6\u7fa4\u5c06\u65e0\u6cd5\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"\u4e13\u7528-control-plane-\u8282\u70b9"},"\u4e13\u7528 ",(0,l.kt)("inlineCode",{parentName:"h2"},"control-plane")," \u8282\u70b9"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4e13\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"control-plane")," \u8282\u70b9\u4e0d\u80fd\u662f\u96c6\u7fa4\u4e2d\u7684\u7b2c\u4e00\u4e2a server\u3002\u5728\u52a0\u5165\u4e13\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"control-plane")," \u8282\u70b9\u4e4b\u524d\uff0c\u5fc5\u987b\u6709\u4e00\u4e2a\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"etcd")," \u89d2\u8272\u7684\u73b0\u6709\u8282\u70b9\u3002")),(0,l.kt)("p",null,"\u8981\u521b\u5efa\u4ec5\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"control-plane")," \u89d2\u8272\u7684 server\uff0c\u8bf7\u90e8\u7f72\u4e00\u4e2a\u7981\u7528 etcd \u7684\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# /etc/rancher/rke2/config.yaml\nserver: https://<etcd-only-node>:9345\ndisable-etcd: true\n")),(0,l.kt)("p",null,"\u521b\u5efa\u4e13\u7528 Server \u8282\u70b9\u540e\uff0c\u6240\u9009\u89d2\u8272\u5c06\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get node")," \u4e2d\u53ef\u89c1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME           STATUS   ROLES                       AGE     VERSION\nrke2-server-1   Ready    etcd                        5h39m   v1.26.4+rke2r1\nrke2-server-2   Ready    control-plane,master        5h39m   v1.26.4+rke2r1\n")),(0,l.kt)("h2",{id:"\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709-server"},"\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709 server"),(0,l.kt)("p",null,"\u5982\u679c\u5728\u5220\u9664\u4e86 disable \u6807\u5fd7\u7684\u60c5\u51b5\u4e0b\u91cd\u542f RKE2\uff0c\u4f60\u53ef\u4ee5\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709\u7684\u4e13\u7528\u8282\u70b9\u3002\u4f8b\u5982\uff0c\u8981\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"control-plane")," \u89d2\u8272\u6dfb\u52a0\u5230\u4e13\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"etcd")," \u8282\u70b9\uff0c\u4f60\u53ef\u4ee5\u4ece\u914d\u7f6e\u6587\u4ef6\u4e2d\u5220\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"disable-apiserver disable-controller-manager disable-scheduler")," \u884c\uff0c\u5e76\u91cd\u542f\u670d\u52a1\u3002"))}u.isMDXComponent=!0}}]);