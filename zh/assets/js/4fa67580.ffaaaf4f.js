"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[4895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,k=m["".concat(u,".").concat(d)]||m[d]||i[d]||l;return r?n.createElement(k,p(p({ref:t},c),{},{components:r})):n.createElement(k,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<l;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9030:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>i,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={title:"\u624b\u52a8\u5347\u7ea7"},p=void 0,o={unversionedId:"upgrade/manual_upgrade",id:"upgrade/manual_upgrade",title:"\u624b\u52a8\u5347\u7ea7",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7 RKE2\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\u6240\u9700\u7248\u672c\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/upgrade/manual_upgrade.md",sourceDirName:"upgrade",slug:"/upgrade/manual_upgrade",permalink:"/zh/upgrade/manual_upgrade",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/upgrade/manual_upgrade.md",tags:[],version:"current",lastUpdatedAt:1684956150,formattedLastUpdatedAt:"2023\u5e745\u670824\u65e5",frontMatter:{title:"\u624b\u52a8\u5347\u7ea7"},sidebar:"mySidebar",previous:{title:"\u6982\u8ff0",permalink:"/zh/upgrade/"},next:{title:"\u81ea\u52a8\u5347\u7ea7",permalink:"/zh/upgrade/automated_upgrade"}},u={},s=[{value:"\u7248\u672c Channels",id:"\u7248\u672c-channels",level:3},{value:"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7 RKE2",id:"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7-rke2",level:3},{value:"\u4f7f\u7528\u4e8c\u8fdb\u5236\u6587\u4ef6\u624b\u52a8\u5347\u7ea7 RKE2",id:"\u4f7f\u7528\u4e8c\u8fdb\u5236\u6587\u4ef6\u624b\u52a8\u5347\u7ea7-rke2",level:3},{value:"\u91cd\u542f RKE2",id:"\u91cd\u542f-rke2",level:3}],c={toc:s};function i(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7 RKE2\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\u6240\u9700\u7248\u672c\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u9996\u5148\u5347\u7ea7 Server \u8282\u70b9\uff0c\u4e00\u6b21\u53ef\u4ee5\u5347\u7ea7\u4e00\u4e2a\u3002\u5347\u7ea7\u5b8c\u6240\u6709 Server \u540e\uff0c\u4f60\u53ef\u4ee5\u5347\u7ea7 Agent \u8282\u70b9\u3002")),(0,a.kt)("h3",{id:"\u7248\u672c-channels"},"\u7248\u672c Channels"),(0,a.kt)("p",null,"\u901a\u8fc7\u5b89\u88c5\u811a\u672c\u6216\u4f7f\u7528\u6211\u4eec\u7684",(0,a.kt)("a",{parentName:"p",href:"/zh/upgrade/automated_upgrade"},"\u81ea\u52a8\u5347\u7ea7"),"\u529f\u80fd\u6267\u884c\u7684\u5347\u7ea7\u53ef\u4ee5\u7ed1\u5b9a\u5230\u4e0d\u540c\u7684\u7248\u672c channels\u3002\u4ee5\u4e0b\u662f\u53ef\u7528\u7684 channels\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Channel"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stable"),(0,a.kt)("td",{parentName:"tr",align:null},"\uff08\u9ed8\u8ba4\uff09\u751f\u4ea7\u73af\u5883\u5efa\u8bae\u4f7f\u7528\u7a33\u5b9a\u7248\u3002\u8fd9\u4e9b\u7248\u672c\u5df2\u7ecf\u8fc7\u4e00\u6bb5\u65f6\u95f4\u7684\u793e\u533a\u5f3a\u5316\uff0c\u5e76\u4e14\u4e0e\u6700\u65b0\u7248\u672c\u7684 Rancher \u517c\u5bb9\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"latest"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7248\u672c\u6765\u8bd5\u7528\u6700\u65b0\u529f\u80fd\u3002\u8fd9\u4e9b\u7248\u672c\u5c1a\u672a\u7ecf\u8fc7\u793e\u533a\u5f3a\u5316\uff0c\u53ef\u80fd\u4e0e Rancher \u4e0d\u517c\u5bb9\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v1.26\uff08\u793a\u4f8b\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a Kubernetes \u6b21\u8981\u7248\u672c\u90fd\u6709\u4e00\u4e2a release channel\uff0c\u5305\u62ec EOL \u7684\u7248\u672c\u3002\u8fd9\u4e9b channel \u4f1a\u9009\u62e9\u53ef\u7528\u7684\u6700\u65b0\u8865\u4e01\uff0c\u4e0d\u4e00\u5b9a\u662f\u7a33\u5b9a\u7248\u672c\u3002")))),(0,a.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u7684\u6700\u65b0 channel \u5217\u8868\uff0c\u4f60\u53ef\u4ee5\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"https://update.rke2.io/v1-release/channels"},"rke2 channel \u670d\u52a1 API"),"\u3002\u6709\u5173 channel \u5982\u4f55\u5de5\u4f5c\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/channelserver"},"channelserver \u9879\u76ee"),"\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7-rke2"},"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7 RKE2"),(0,a.kt)("p",null,"\u8981\u5347\u7ea7\u65e7\u7248\u672c\u7684 RKE2\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684\u6807\u5fd7\u91cd\u65b0\u8fd0\u884c\u5b89\u88c5\u811a\u672c\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.rke2.io | sh -\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e2d\u56fd\u7528\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u52a0\u901f\u5347\u7ea7\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"curl -sfL https://rancher-mirror.rancher.cn/rke2/install.sh | INSTALL_RKE2_MIRROR=cn sh -\n"))),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5c06\u5347\u7ea7\u5230 stable channel \u4e2d\u7684\u6700\u65b0\u7248\u672c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u5347\u7ea7\u5230\u7279\u5b9a channel\uff08\u5982 latest\uff09\u4e2d\u7684\u6700\u65b0\u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a channel\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.rke2.io | INSTALL_RKE2_CHANNEL=latest sh -\n")),(0,a.kt)("p",null,"\u5982\u679c\u8981\u5347\u7ea7\u5230\u7279\u5b9a\u7248\u672c\uff0c\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.rke2.io | INSTALL_RKE2_VERSION=vX.Y.Z+rke2rN sh -\n")),(0,a.kt)("p",null,"\u5b89\u88c5\u540e\u8bb0\u5f97\u91cd\u542f rke2 \u8fdb\u7a0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Server \u8282\u70b9\uff1a\nsystemctl restart rke2-server\n\n# Agent \u8282\u70b9\uff1a\nsystemctl restart rke2-agent\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u4e8c\u8fdb\u5236\u6587\u4ef6\u624b\u52a8\u5347\u7ea7-rke2"},"\u4f7f\u7528\u4e8c\u8fdb\u5236\u6587\u4ef6\u624b\u52a8\u5347\u7ea7 RKE2"),(0,a.kt)("p",null,"\u6216\u8005\u624b\u52a8\u5347\u7ea7 RKE2\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ece ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rancher/rke2/releases"},"releases")," \u9875\u9762\u4e0b\u8f7d\u6240\u9700\u7248\u672c\u7684 RKE2 \u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u4e0b\u8f7d\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u590d\u5236\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/rke2"),"\uff08\u4f7f\u7528 tarball \u5b89\u88c5\u7684 RKE2\uff09\u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"/usr/bin"),"\uff08\u4f7f\u7528 RPM \u5b89\u88c5\u7684 RKE2\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u505c\u6b62\u65e7\u7684 RKE2 \u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u542f\u52a8\u65b0\u7684 RKE2 \u4e8c\u8fdb\u5236\u6587\u4ef6")),(0,a.kt)("h3",{id:"\u91cd\u542f-rke2"},"\u91cd\u542f RKE2"),(0,a.kt)("p",null,"systemd \u7684\u5b89\u88c5\u811a\u672c\u652f\u6301\u91cd\u542f RKE2\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"systemd")),(0,a.kt)("p",null,"\u624b\u52a8\u91cd\u542f Server\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart rke2-server\n")),(0,a.kt)("p",null,"\u624b\u52a8\u91cd\u542f Agent\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart rke2-agent\n")))}i.isMDXComponent=!0}}]);