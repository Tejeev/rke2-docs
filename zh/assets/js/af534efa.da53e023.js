"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[6830],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?r.createElement(k,a(a({ref:n},u),{},{components:t})):r.createElement(k,a({ref:n},u))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2648:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const l={title:"\u9ed8\u8ba4 Pod \u5b89\u5168\u7b56\u7565"},a=void 0,o={unversionedId:"security/pod_security_policies",id:"security/pod_security_policies",title:"\u9ed8\u8ba4 Pod \u5b89\u5168\u7b56\u7565",description:"\u672c\u6587\u6863\u63cf\u8ff0\u4e86 RKE2 \u5982\u4f55\u914d\u7f6e PodSecurityPolicies \u548c NetworkPolicies \u6765\u786e\u4fdd\u9ed8\u8ba4\u5b89\u5168\uff0c\u540c\u65f6\u8fd8\u4e3a\u64cd\u4f5c\u4eba\u5458\u63d0\u4f9b\u4e86\u6700\u5927\u7684\u914d\u7f6e\u7075\u6d3b\u6027\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/security/pod_security_policies.md",sourceDirName:"security",slug:"/security/pod_security_policies",permalink:"/zh/security/pod_security_policies",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/pod_security_policies.md",tags:[],version:"current",lastUpdatedAt:1699996945,formattedLastUpdatedAt:"2023\u5e7411\u670814\u65e5",frontMatter:{title:"\u9ed8\u8ba4 Pod \u5b89\u5168\u7b56\u7565"},sidebar:"mySidebar",previous:{title:"FIPS 140-2 \u542f\u7528",permalink:"/zh/security/fips_support"},next:{title:"\u9ed8\u8ba4 Pod \u5b89\u5168\u6807\u51c6",permalink:"/zh/security/pod_security_standards"}},s={},p=[{value:"Pod \u5b89\u5168\u7b56\u7565",id:"pod-\u5b89\u5168\u7b56\u7565",level:4},{value:"\u7f51\u7edc\u7b56\u7565",id:"\u7f51\u7edc\u7b56\u7565",level:4}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u6863\u63cf\u8ff0\u4e86 RKE2 \u5982\u4f55\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"PodSecurityPolicies")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkPolicies")," \u6765\u786e\u4fdd\u9ed8\u8ba4\u5b89\u5168\uff0c\u540c\u65f6\u8fd8\u4e3a\u64cd\u4f5c\u4eba\u5458\u63d0\u4f9b\u4e86\u6700\u5927\u7684\u914d\u7f6e\u7075\u6d3b\u6027\u3002"),(0,i.kt)("admonition",{title:"\u7248\u672c",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u672c\u6587\u6863\u9002\u7528\u4e8e RKE2 v1.24 \u53ca\u66f4\u65e9\u7248\u672c\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/zh/security/pod_security_standards"},"Pod \u5b89\u5168\u6807\u51c6\u6587\u6863"),"\u4e86\u89e3 RKE2 v1.25 \u53ca\u66f4\u9ad8\u7248\u672c\u7684\u9ed8\u8ba4\u7b56\u7565\u3002")),(0,i.kt)("h4",{id:"pod-\u5b89\u5168\u7b56\u7565"},"Pod \u5b89\u5168\u7b56\u7565"),(0,i.kt)("p",null,"RKE2 \u53ef\u4ee5\u5728\u6709\u6216\u6ca1\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"profile: cis-1.6")," \u914d\u7f6e\u53c2\u6570\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\u3002\u8fd9\u5c06\u5bfc\u81f4\u5b83\u5728\u542f\u52a8\u65f6\u5e94\u7528\u4e0d\u540c\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"PodSecurityPolicies")," (PSP)\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"cis-1.6")," \u914d\u7f6e\u6587\u4ef6\u8fd0\u884c\uff0cRKE2 \u5c06\u5bf9\u9664 ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-system")," \u4e4b\u5916\u7684\u6240\u6709\u547d\u540d\u7a7a\u95f4\u5e94\u7528\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"global-restricted-psp")," \u7684\u9650\u5236\u6027\u7b56\u7565\u3002",(0,i.kt)("inlineCode",{parentName:"li"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u9700\u8981\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"system-unrestricted-psp")," \u7684\u4f4e\u9650\u5236\u7b56\u7565\u624d\u80fd\u542f\u52a8\u5173\u952e\u7ec4\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u5728\u6ca1\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"cis-1.6")," \u914d\u7f6e\u6587\u4ef6\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\uff0cRKE2 \u5c06\u5e94\u7528\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"global-unrestricted-psp")," \u7684\u5b8c\u5168\u4e0d\u53d7\u9650\u5236\u7684\u7b56\u7565\uff0c\u76f8\u5f53\u4e8e\u5728\u6ca1\u6709\u542f\u7528 PSP \u51c6\u5165\u63a7\u5236\u5668\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\u3002")),(0,i.kt)("p",null,"RKE2 \u5c06\u5728\u521d\u59cb\u542f\u52a8\u65f6\u5b9e\u65bd\u8fd9\u4e9b\u7b56\u7565\uff0c\u4f46\u4e4b\u540e\u4e0d\u4f1a\u4fee\u6539\u5b83\u4eec\uff0c\u9664\u975e\u5982\u4e0b\u6587\u6240\u8ff0\u7531\u96c6\u7fa4\u64cd\u4f5c\u5458\u660e\u786e\u89e6\u53d1\u3002\u8fd9\u662f\u4e3a\u4e86\u8ba9\u64cd\u4f5c\u5458\u80fd\u591f\u5b8c\u5168\u63a7\u5236 PSP\uff0c\u800c\u4e0d\u88ab RKE2 \u7684\u9ed8\u8ba4\u503c\u6240\u5e72\u6270\u3002"),(0,i.kt)("p",null,"PSP \u7684\u521b\u5efa\u548c\u5e94\u7528\u7531 ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u4e0a\u662f\u5426\u5b58\u5728\u67d0\u4e9b\u6ce8\u91ca\u6765\u63a7\u5236\u3002\u5b83\u4eec\u76f4\u63a5\u6620\u5c04\u5230\u53ef\u4ee5\u521b\u5efa\u7684 PSP\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"psp.rke2.io/global-restricted")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"psp.rke2.io/system-unrestricted")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"psp.rke2.io/global-unrestricted"))),(0,i.kt)("p",null,"\u5728\u542f\u52a8\u65f6\u5bf9\u7b56\u7565\u53ca\u5176\u6ce8\u91ca\u6267\u884c\u4ee5\u4e0b\u903b\u8f91\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ce8\u91ca\u5b58\u5728\uff0cRKE2 \u5c06\u7ee7\u7eed\u6267\u884c\u800c\u4e0d\u91c7\u53d6\u8fdb\u4e00\u6b65\u64cd\u4f5c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ce8\u89e3\u4e0d\u5b58\u5728\uff0cRKE2 \u4f1a\u68c0\u67e5\u76f8\u5173\u7b56\u7565\u662f\u5426\u5b58\u5728\uff0c\u5982\u679c\u5b58\u5728\uff0c\u5219\u5220\u9664\u5e76\u91cd\u65b0\u521b\u5efa\uff0c\u540c\u65f6\u5c06\u6ce8\u89e3\u6dfb\u52a0\u5230\u547d\u540d\u7a7a\u95f4\u4e2d\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"global-unrestricted-psp"),"\uff0c\u4e0d\u4f1a\u91cd\u65b0\u521b\u5efa\u7b56\u7565\u3002\u8fd9\u662f\u4e3a\u4e86\u5728\u4e0d\u964d\u4f4e\u96c6\u7fa4\u5b89\u5168\u6027\u7684\u60c5\u51b5\u4e0b\u5728 CIS \u548c\u975e CIS \u6a21\u5f0f\u4e4b\u95f4\u79fb\u52a8\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u521b\u5efa\u7b56\u7565\u7684\u65f6\u5019\uff0c\u96c6\u7fa4\u89d2\u8272\u548c\u96c6\u7fa4\u89d2\u8272\u7ed1\u5b9a\u4e5f\u88ab\u521b\u5efa\uff0c\u4ece\u800c\u786e\u4fdd\u9ed8\u8ba4\u4f7f\u7528\u5408\u9002\u7684\u7b56\u7565\u3002")),(0,i.kt)("p",null,'\u56e0\u6b64\uff0c\u5728\u521d\u59cb\u542f\u52a8\u540e\uff0c\u64cd\u4f5c\u5458\u53ef\u4ee5\u4fee\u6539\u6216\u5220\u9664 RKE2 \u7684\u7b56\u7565\uff0cRKE2 \u5c06\u5c0a\u91cd\u8fd9\u4e9b\u53d8\u5316\u3002\u6b64\u5916\uff0c\u8981 "\u91cd\u7f6e" \u4e00\u4e2a\u7b56\u7565\uff0c\u64cd\u4f5c\u8005\u53ea\u9700\u8981\u4ece ',(0,i.kt)("inlineCode",{parentName:"p"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u5220\u9664\u76f8\u5173\u7684\u6ce8\u91ca\uff0c\u7136\u540e\u91cd\u65b0\u542f\u52a8 RKE2\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e9b\u7b56\u7565\u6982\u8ff0\u5982\u4e0b\uff0c\u4ee5\u6700\u53d7\u9650\u5236\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"global-restricted")," PSP \u5f00\u59cb\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: global-restricted-psp\nspec:\n  privileged: false                # CIS - 5.2.1\n  allowPrivilegeEscalation: false  # CIS - 5.2.5\n  requiredDropCapabilities:        # CIS - 5.2.7/8/9\n    - ALL\n  volumes:\n    - 'configMap'\n    - 'emptyDir'\n    - 'projected'\n    - 'secret'\n    - 'downwardAPI'\n    - 'persistentVolumeClaim'\n  hostNetwork: false               # CIS - 5.2.4\n  hostIPC: false                   # CIS - 5.2.3\n  hostPID: false                   # CIS - 5.2.2\n  runAsUser:\n    rule: 'MustRunAsNonRoot'       # CIS - 5.2.6\n  seLinux:\n    rule: 'RunAsAny'\n  supplementalGroups:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  fsGroup:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  readOnlyRootFilesystem: false\n")),(0,i.kt)("p",null,"\u5982\u679c RKE2 \u5728\u975e CIS \u6a21\u5f0f\u4e0b\u542f\u52a8\uff0c\u5219\u4f1a\u50cf\u4e0a\u9762\u4e00\u6837\u68c0\u67e5\u6ce8\u91ca\uff0c\u4f46\u662f\u4ea7\u751f\u7684 pod \u5b89\u5168\u7b56\u7565\u662f\u5bbd\u677e\u7684\u3002\u89c1\u4e0b\u6587\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: global-unrestricted-psp\nspec:\n  privileged: true\n  allowPrivilegeEscalation: true\n  allowedCapabilities:\n  - '*'\n  volumes:\n  - '*'\n  hostNetwork: true\n  hostPorts:\n  - min: 0\n    max: 65535\n  hostIPC: true\n  hostPID: true\n  runAsUser:\n    rule: 'RunAsAny'\n  seLinux:\n    rule: 'RunAsAny'\n  supplementalGroups:\n    rule: 'RunAsAny'\n  fsGroup:\n    rule: 'RunAsAny'\n")),(0,i.kt)("p",null,'\u8fd9\u4e24\u79cd\u60c5\u51b5\u90fd\u5e94\u7528\u4e86 "system unrestricted policy"\u3002\u89c1\u4e0b\u6587\u3002'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: system-unrestricted-psp\nspec:\n  privileged: true\n  allowPrivilegeEscalation: true\n  allowedCapabilities:\n  - '*'\n  volumes:\n  - '*'\n  hostNetwork: true\n  hostPorts:\n  - min: 0\n    max: 65535\n  hostIPC: true\n  hostPID: true\n  runAsUser:\n    rule: 'RunAsAny'\n  seLinux:\n    rule: 'RunAsAny'\n  supplementalGroups:\n    rule: 'RunAsAny'\n  fsGroup:\n    rule: 'RunAsAny'\n")),(0,i.kt)("p",null,"\u8981\u67e5\u770b\u7cfb\u7edf\u4e0a\u5f53\u524d\u90e8\u7f72\u7684 pod \u5b89\u5168\u7b56\u7565\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get psp -A\n")),(0,i.kt)("h4",{id:"\u7f51\u7edc\u7b56\u7565"},"\u7f51\u7edc\u7b56\u7565"),(0,i.kt)("p",null,"\u5f53 RKE2 \u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"profile: cis-1.6")," \u53c2\u6570\u8fd0\u884c\u65f6\uff0c\u5b83\u4f1a\u5c06\u4e24\u4e2a\u7f51\u7edc\u7b56\u7565\u5e94\u7528\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-system"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"kube-public")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," \u547d\u540d\u7a7a\u95f4\u5e76\u5e94\u7528\u5173\u8054\u7684\u6ce8\u91ca\u3002\u4e0e PSP \u76f8\u540c\u7684\u903b\u8f91\u5c06\u5e94\u7528\u4e8e\u8fd9\u4e9b\u7b56\u7565\u548c\u6ce8\u91ca\u3002\u5f00\u59cb\u65f6\u4f1a\u68c0\u67e5\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u7684\u6ce8\u89e3\u662f\u5426\u5b58\u5728\uff0c\u5982\u679c\u5b58\u5728\uff0cRKE2 \u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002\u5982\u679c\u6ce8\u91ca\u4e0d\u5b58\u5728\uff0cRKE2 \u5c06\u68c0\u67e5\u7b56\u7565\u662f\u5426\u5b58\u5728\uff0c\u5982\u679c\u5b58\u5728\uff0c\u5219\u91cd\u65b0\u521b\u5efa\u5b83\u3002"),(0,i.kt)("p",null,"\u5e94\u7528\u7684\u7b2c\u4e00\u4e2a\u7b56\u7565\u662f\u5c06\u7f51\u7edc\u6d41\u91cf\u9650\u5236\u4e3a\u4ec5\u547d\u540d\u7a7a\u95f4\u672c\u8eab\u3002\u89c1\u4e0b\u6587\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  managedFields:\n  - apiVersion: networking.k8s.io/v1\n    fieldsType: FieldsV1\n    fieldsV1:\n      f:spec:\n        f:ingress: {}\n        f:policyTypes: {}\n  name: default-network-policy\n  namespace: default\nspec:\n  ingress:\n  - from:\n    - podSelector: {}\n  podSelector: {}\n  policyTypes:\n  - Ingress\n")),(0,i.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u7b56\u7565\u5e94\u7528\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u5e76\u5141\u8bb8 DNS \u6d41\u91cf\u3002\u89c1\u4e0b\u6587\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  managedFields:\n  - apiVersion: networking.k8s.io/v1\n    fieldsV1:\n      f:spec:\n        f:ingress: {}\n        f:podSelector:\n          f:matchLabels:\n        f:policyTypes: {}\n  name: default-network-dns-policy\n  namespace: kube-system\nspec:\n  ingress:\n  - ports:\n    - port: 53\n      protocol: TCP\n    - port: 53\n      protocol: UDP\n  podSelector:\n    matchLabels:\n  policyTypes:\n  - Ingress\n")),(0,i.kt)("p",null,"RKE2 \u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"default-network-policy")," \u7b56\u7565\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"np.rke2.io")," \u6ce8\u91ca\u5e94\u7528\u4e8e\u6240\u6709\u5185\u7f6e\u547d\u540d\u7a7a\u95f4\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u8fd8\u83b7\u5f97\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"default-network-dns-policy")," \u7b56\u7565\u548c\u5e94\u7528\u4e8e\u5b83\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"np.rke2.io/dns")," \u6ce8\u89e3\u3002"),(0,i.kt)("p",null,"\u8981\u67e5\u770b\u7cfb\u7edf\u4e0a\u5f53\u524d\u90e8\u7f72\u7684\u7f51\u7edc\u7b56\u7565\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get networkpolicies -A\n")))}d.isMDXComponent=!0}}]);