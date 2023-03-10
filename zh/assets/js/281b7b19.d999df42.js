"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const a={title:"\u5378\u8f7d"},i=void 0,o={unversionedId:"install/uninstall",id:"install/uninstall",title:"\u5378\u8f7d",description:"\u5378\u8f7d RKE2 \u4f1a\u5220\u9664\u96c6\u7fa4\u6570\u636e\u548c\u6240\u6709\u811a\u672c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/uninstall.md",sourceDirName:"install",slug:"/install/uninstall",permalink:"/zh/install/uninstall",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/uninstall.md",tags:[],version:"current",lastUpdatedAt:1678470615,formattedLastUpdatedAt:"2023\u5e743\u670810\u65e5",frontMatter:{title:"\u5378\u8f7d"},sidebar:"mySidebar",previous:{title:"Windows \u79bb\u7ebf\u5b89\u88c5",permalink:"/zh/install/windows_airgap"},next:{title:"\u6982\u8ff0",permalink:"/zh/upgrade/"}},s={},u=[{value:"Linux \u5378\u8f7d",id:"linux-\u5378\u8f7d",level:2},{value:"RPM \u65b9\u6cd5",id:"rpm-\u65b9\u6cd5",level:3},{value:"Tarball \u65b9\u6cd5",id:"tarball-\u65b9\u6cd5",level:3},{value:"Windows \u5378\u8f7d",id:"windows-\u5378\u8f7d",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5378\u8f7d RKE2 \u4f1a\u5220\u9664\u96c6\u7fa4\u6570\u636e\u548c\u6240\u6709\u811a\u672c\u3002")),(0,l.kt)("h2",{id:"linux-\u5378\u8f7d"},"Linux \u5378\u8f7d"),(0,l.kt)("p",null,"\u4e0d\u540c\u7684 RKE2 \u5b89\u88c5\u65b9\u6cd5\u5bf9\u5e94\u7684\u5378\u8f7d\u6d41\u7a0b\u4e0d\u540c\u3002"),(0,l.kt)("h3",{id:"rpm-\u65b9\u6cd5"},"RPM \u65b9\u6cd5"),(0,l.kt)("p",null,"\u8981\u4ece\u7cfb\u7edf\u4e2d\u5378\u8f7d\u901a\u8fc7 RPM \u5b89\u88c5\u7684 RKE2\uff0c\u53ea\u9700\u4ee5 root \u7528\u6237\u6216\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo")," \u8fd0\u884c\u4f60\u7684 RKE2 \u7248\u672c\u5bf9\u5e94\u7684\u547d\u4ee4\u3002\u8fd9\u5c06\u5173\u95ed RKE2 \u8fdb\u7a0b\uff0c\u5220\u9664 RKE2 RPM\uff0c\u5e76\u6e05\u7406 RKE2 \u4f7f\u7528\u7684\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/bin/rke2-uninstall.sh\n")),(0,l.kt)("h3",{id:"tarball-\u65b9\u6cd5"},"Tarball \u65b9\u6cd5"),(0,l.kt)("p",null,"\u8981\u4ece\u7cfb\u7edf\u4e2d\u5378\u8f7d\u901a\u8fc7 Tarball \u65b9\u6cd5\u5b89\u88c5\u7684 RKE2\uff0c\u53ea\u9700\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\u8fd9\u5c06\u7ec8\u6b62\u8fdb\u7a0b\uff0c\u5220\u9664 RKE2 \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5e76\u6e05\u7406 RKE2 \u4f7f\u7528\u7684\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/bin/rke2-uninstall.sh\n")),(0,l.kt)("h2",{id:"windows-\u5378\u8f7d"},"Windows \u5378\u8f7d"),(0,l.kt)("p",null,"\u8981\u4ece\u7cfb\u7edf\u4e2d\u5378\u8f7d\u4f7f\u7528 tarball \u5b89\u88c5\u7684 RKE2 Windows Agent\uff0c\u4f60\u53ea\u9700\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\u8fd9\u5c06\u5173\u95ed\u6240\u6709 RKE2 Windows \u8fdb\u7a0b\uff0c\u5220\u9664 RKE2 Windows \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5e76\u6e05\u7406 RKE2 \u4f7f\u7528\u7684\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"c:/usr/local/bin/rke2-uninstall.ps1\n")))}p.isMDXComponent=!0}}]);