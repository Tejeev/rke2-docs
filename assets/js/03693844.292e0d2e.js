"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[5057],{9060:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=i(5893),t=i(1151);const o={title:"Default Pod Security Standards"},r=void 0,c={id:"security/pod_security_standards",title:"Default Pod Security Standards",description:"This document describes how RKE2 configures PodSecurityStandards and NetworkPolicies in order to be secure-by-default while also providing operators with maximum configuration flexibility.",source:"@site/docs/security/pod_security_standards.md",sourceDirName:"security",slug:"/security/pod_security_standards",permalink:"/security/pod_security_standards",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/pod_security_standards.md",tags:[],version:"current",lastUpdatedAt:1709629497,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{title:"Default Pod Security Standards"},sidebar:"mySidebar",previous:{title:"Default Pod Security Policies",permalink:"/security/pod_security_policies"},next:{title:"SELinux",permalink:"/security/selinux"}},a={},d=[{value:"Pod Security Standards",id:"pod-security-standards",level:4},{value:"Network Policies",id:"network-policies",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This document describes how RKE2 configures ",(0,s.jsx)(n.code,{children:"PodSecurityStandards"})," and ",(0,s.jsx)(n.code,{children:"NetworkPolicies"})," in order to be secure-by-default while also providing operators with maximum configuration flexibility."]}),"\n",(0,s.jsx)(n.admonition,{title:"Version Gate",type:"info",children:(0,s.jsxs)(n.p,{children:["This document applies to RKE2 v1.25 and newer, please refer to the ",(0,s.jsx)(n.a,{href:"/security/pod_security_policies",children:"Pod Security Policies Documentation"})," for the default policy information for RKE2 v1.24 and older."]})}),"\n",(0,s.jsx)(n.h4,{id:"pod-security-standards",children:"Pod Security Standards"}),"\n",(0,s.jsxs)(n.p,{children:["Starting from Kubernetes version v1.25.0, Pod Security Policies (PSP) are totally removed from Kubernetes, and replaced by ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/",children:"Pod Security Admission (PSA)"}),". A default Pod Security Admission config file will be added to the cluster upon startup as follows:"]}),"\n",(0,s.jsxs)(n.p,{children:["If running with the ",(0,s.jsx)(n.code,{children:"profile: cis"})," or ",(0,s.jsx)(n.code,{children:"profile: cis-1.23"})," configuration:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["RKE2 will apply a restricted pod security standard via a configuration file which will enforce ",(0,s.jsx)(n.code,{children:"restricted"})," mode throughout the cluster with an exception to the ",(0,s.jsx)(n.code,{children:"kube-system"}),", ",(0,s.jsx)(n.code,{children:"cis-operator-system"}),", and ",(0,s.jsx)(n.code,{children:"tigera-operator"})," namespaces to ensure successful operation of system pods."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If running without a ",(0,s.jsx)(n.code,{children:"profile"})," configuration:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["RKE2 will apply a nonrestricted pod security standard via a configuration file which will enforce ",(0,s.jsx)(n.code,{children:"privileged"})," mode throughout the cluster which allows a completely unrestricted mode to all pods in the cluster."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["RKE2 will put this configuration file at ",(0,s.jsx)(n.code,{children:"/etc/rancher/rke2/rke2-pss.yaml"}),", the content of the configuration file varies according to the cis mode which you started rke2:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CIS Mode"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- name: PodSecurity\n  configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1beta1\n    kind: PodSecurityConfiguration\n    defaults:\n      enforce: "restricted"\n      enforce-version: "latest"\n      audit: "restricted"\n      audit-version: "latest"\n      warn: "restricted"\n      warn-version: "latest"\n    exemptions:\n      usernames: []\n      runtimeClasses: []\n      namespaces: [kube-system, cis-operator-system, tigera-operator]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Non CIS Mode"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- name: PodSecurity\n  configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1beta1\n    kind: PodSecurityConfiguration\n    defaults:\n      enforce: "privileged"\n      enforce-version: "latest"\n    exemptions:\n      usernames: []\n      runtimeClasses: []\n      namespaces: []\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After placing this configuration file, rke2 will start the kube-apiserver with the following flag ",(0,s.jsx)(n.code,{children:"--admission-control-config-file"})," which will be set to the path of the PSA config file."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to override the default pod security standard configuration file, you can pass ",(0,s.jsx)(n.code,{children:"pod-security-admission-config-file: <path-to-custom-psa-config-file>"})," to the RKE2 config file."]}),"\n",(0,s.jsx)(n.h4,{id:"network-policies",children:"Network Policies"}),"\n",(0,s.jsxs)(n.p,{children:["When RKE2 is run with the ",(0,s.jsx)(n.code,{children:"profile: cis-1.23"})," parameter, it will apply 2 network policies to the ",(0,s.jsx)(n.code,{children:"kube-system"}),", ",(0,s.jsx)(n.code,{children:"kube-public"}),", and ",(0,s.jsx)(n.code,{children:"default"})," namespaces and applies associated annotations. The same logic applies to these policies and annotations as the PSPs. On start, the annotations for each namespace are checked for existence and if they exist, RKE2 takes no action. If the annotation doesn't exist, RKE2 checks to see if the policy exists and if it does, recreates it."]}),"\n",(0,s.jsx)(n.p,{children:"The first policy applied is to restrict network traffic to only the namespace itself. See below."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  managedFields:\n  - apiVersion: networking.k8s.io/v1\n    fieldsType: FieldsV1\n    fieldsV1:\n      f:spec:\n        f:ingress: {}\n        f:policyTypes: {}\n  name: default-network-policy\n  namespace: default\nspec:\n  ingress:\n  - from:\n    - podSelector: {}\n  podSelector: {}\n  policyTypes:\n  - Ingress\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The second policy applied is to the ",(0,s.jsx)(n.code,{children:"kube-system"})," namespace and allows for DNS traffic. See below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  managedFields:\n  - apiVersion: networking.k8s.io/v1\n    fieldsV1:\n      f:spec:\n        f:ingress: {}\n        f:podSelector:\n          f:matchLabels:\n        f:policyTypes: {}\n  name: default-network-dns-policy\n  namespace: kube-system\nspec:\n  ingress:\n  - ports:\n    - port: 53\n      protocol: TCP\n    - port: 53\n      protocol: UDP\n  podSelector:\n    matchLabels:\n  policyTypes:\n  - Ingress\n"})}),"\n",(0,s.jsxs)(n.p,{children:["RKE2 applies the ",(0,s.jsx)(n.code,{children:"default-network-policy"})," policy and ",(0,s.jsx)(n.code,{children:"np.rke2.io"})," annotation to all built-in namespaces. The ",(0,s.jsx)(n.code,{children:"kube-system"})," namespace additionally gets the ",(0,s.jsx)(n.code,{children:"default-network-dns-policy"})," policy and ",(0,s.jsx)(n.code,{children:"np.rke2.io/dns"})," annotation applied to it."]}),"\n",(0,s.jsx)(n.p,{children:"To view the network policies currently deployed on your system, run the below command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl get networkpolicies -A\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(7294);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);