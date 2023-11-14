"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[6001],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,m=u["".concat(o,".").concat(h)]||u[h]||p[h]||i;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2550:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={title:"Certificate Management"},s=void 0,c={unversionedId:"security/certificates",id:"security/certificates",title:"Certificate Management",description:"Client and Server Certificates",source:"@site/docs/security/certificates.md",sourceDirName:"security",slug:"/security/certificates",permalink:"/zh/security/certificates",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/certificates.md",tags:[],version:"current",lastUpdatedAt:1699996945,formattedLastUpdatedAt:"2023\u5e7411\u670814\u65e5",frontMatter:{title:"Certificate Management"},sidebar:"mySidebar",previous:{title:"Secret \u52a0\u5bc6",permalink:"/zh/security/secrets_encryption"},next:{title:"\u67b6\u6784",permalink:"/zh/architecture"}},o={},l=[{value:"Client and Server Certificates",id:"client-and-server-certificates",level:2},{value:"Rotating Client and Server Certificates Manually",id:"rotating-client-and-server-certificates-manually",level:3},{value:"Certificate Authority (CA) Certificates",id:"certificate-authority-ca-certificates",level:2},{value:"Rotating CA Certificates",id:"rotating-ca-certificates",level:3},{value:"Using Custom CA Certificates",id:"using-custom-ca-certificates",level:3},{value:"Custom CA Topology",id:"custom-ca-topology",level:4},{value:"Using the Example Script",id:"using-the-example-script",level:4},{value:"Rotating Custom CA Certificates",id:"rotating-custom-ca-certificates",level:3},{value:"Using the Example Script",id:"using-the-example-script-1",level:4},{value:"Rotating Self-Signed CA Certificates",id:"rotating-self-signed-ca-certificates",level:3},{value:"Default CA Topology",id:"default-ca-topology",level:4},{value:"Using The Example Script",id:"using-the-example-script-2",level:4},{value:"Service-Account Issuer Key Rotation",id:"service-account-issuer-key-rotation",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"client-and-server-certificates"},"Client and Server Certificates"),(0,a.kt)("p",null,"RKE2 client and server certificates are valid for 365 days from their date of issuance. Any certificates that are expired, or within 90 days of expiring, are automatically renewed every time RKE2 starts."),(0,a.kt)("h3",{id:"rotating-client-and-server-certificates-manually"},"Rotating Client and Server Certificates Manually"),(0,a.kt)("p",null,"To rotate client and server certificates manually, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 certificate rotate")," subcommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Stop RKE2\nsystemctl stop rke2\n\n# Rotate certificates\nrke2 certificate rotate\n\n# Start RKE2\nsystemctl start rke2\n")),(0,a.kt)("p",null,"Individual or lists of certificates can be rotated by specifying the certificate name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rke2 certificate rotate --service <SERVICE>,<SERVICE>\n")),(0,a.kt)("p",null,"The following certificates can be rotated:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"api-server"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"controller-manager"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"scheduler"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-controller"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-server"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud-controller"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"auth-proxy"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-proxy"),"."),(0,a.kt)("h2",{id:"certificate-authority-ca-certificates"},"Certificate Authority (CA) Certificates"),(0,a.kt)("p",null,"Kubernetes requires a number of CA certificates for proper operation. For more information on how Kubernetes uses CA certificates, see the Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/best-practices/certificates/#all-certificates"},"PKI Certificates and Requirements")," documentation."),(0,a.kt)("p",null,"By default, RKE2 generates self-signed CA certificates during startup of the first server node. These CA certificates are valid for 10 years from date of issuance, and are not automatically renewed."),(0,a.kt)("p",null,"The authoritative CA certificates and keys are stored within the datastore's bootstrap key, encrypted using the server token as the PBKDF2 passphrase with AES256-GCM and HMAC-SHA1.\nCopies of the CA certificates and keys are extracted to disk during RKE2 server startup.\nAny server may generate leaf certificates for nodes as they join the cluster, and the Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/certificate-signing-requests/"},"Certificates API")," controllers may issue additional certificates at runtime."),(0,a.kt)("h3",{id:"rotating-ca-certificates"},"Rotating CA Certificates"),(0,a.kt)("admonition",{title:"Version Gate",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Available as of the 2023-02 releases (v1.26.2+rke2r1, v1.25.7+rke2r1, v1.24.11+rke2r1, v1.23.17+rke2r1).")),(0,a.kt)("p",null,"To rotate CA certificates and keys, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 certificate rotate-ca")," command.\nThis command performs integrity checks to confirm that the updated certificates and keys are usable.\nIf the updated data is acceptable, the datastore's encrypted bootstrap key is updated, and the new certificates and keys will be used the next time RKE2 starts.\nIf problems are encountered while validating the certificates and keys, an error is reported to the system log and the operation is cancelled without changes."),(0,a.kt)("h3",{id:"using-custom-ca-certificates"},"Using Custom CA Certificates"),(0,a.kt)("p",null,"If CA certificates and keys are found the correct location during initial startup of the first server in the cluster, automatic generation of CA certificates will be bypassed."),(0,a.kt)("p",null,"An example script to pre-create the appropriate certificates and keys is available ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/blob/master/contrib/util/generate-custom-ca-certs.sh"},"in the K3s repo at ",(0,a.kt)("inlineCode",{parentName:"a"},"contrib/util/generate-custom-ca-certs.sh")),".\nThis script should be run prior to starting RKE2 for the first time, and will create a full set of leaf CA certificates signed by common Root and Intermediate CA certificates.\nIf you have an existing Root or Intermediate CA, this script can be used (or used as a starting point) to create the correct CA certificates to provision a RKE2 cluster with PKI rooted in an existing authority."),(0,a.kt)("p",null,"Custom Certificate Authority files must be placed in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/tls"),". The following files are required:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"server-ca.crt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"server-ca.key")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"client-ca.crt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"client-ca.key")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"request-header-ca.crt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"request-header-ca.key"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd/peer-ca.crt"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd/peer-ca.key")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd/server-ca.crt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd/server-ca.key"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"// note: This is the private key used to sign service-account tokens. It does not have a corresponding certificate.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"service.key"))),(0,a.kt)("h4",{id:"custom-ca-topology"},"Custom CA Topology"),(0,a.kt)("p",null,"Custom CA Certificates should observe the following topology:"),(0,a.kt)("mermaid",{value:'graph TD\n  root("Root CA")\n  intermediate("Intermediate CA")\n  server-ca("Server CA")\n  client-ca("Client CA")\n  request-header-ca("API Aggregation CA")\n  etcd-peer-ca("etcd Peer CA")\n  etcd-server-ca("etcd Server CA")\n\n  root-hash>"Join token CA hash"]\n\n  kube-server-certs[["Kubernetes servers<br/>(control-plane and kubelet listeners)"]]\n  kube-client-certs[["Kubernetes clients<br/>(apiserver and kubelet clients)"]]\n  request-header-certs[["Kubernetes API aggregation<br/>(apiserver proxy client)"]]\n  etcd-peer-certs[["etcd peer client/server<br/>(etcd replication)"]]\n  etcd-server-certs[["etcd client/server certificates<br/>(Kubernetes <-> etcd)"]]\n\n  root -.-|SHA256| root-hash\n  root ---\x3e intermediate\n  intermediate --\x3e server-ca ==> kube-server-certs\n  intermediate --\x3e client-ca ==> kube-client-certs\n  intermediate --\x3e request-header-ca ==> request-header-certs\n  intermediate --\x3e etcd-peer-ca ==> etcd-peer-certs\n  intermediate --\x3e etcd-server-ca ==> etcd-server-certs'}),(0,a.kt)("h4",{id:"using-the-example-script"},"Using the Example Script"),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"If you want to sign the cluster CA certificates with an existing root CA using the example script, you must place the root and intermediate files in the target directory prior to running the script.\nIf the files do not exist, the script will create new root and intermediate CA certificates.")),(0,a.kt)("p",null,"If you want to use only an existing root CA certificate, provide the following files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"root-ca.pem")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"root-ca.key"))),(0,a.kt)("p",null,"If you want to use existing root and intermediate CA certificates, provide the following files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"root-ca.pem")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"intermediate-ca.pem")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"intermediate-ca.key"))),(0,a.kt)("p",null,"To use the example script to generate custom certs and keys before starting RKE2, run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Create the target directory for cert generation.\nmkdir -p /var/lib/rancher/rke2/server/tls\n\n# Copy your root CA cert and intermediate CA cert+key into the correct location for the script.\n# For the purposes of this example, we assume you have existing root and intermediate CA files in /etc/ssl.\n# If you do not have an existing root and/or intermediate CA, the script will generate them for you.\ncp /etc/ssl/certs/root-ca.pem /etc/ssl/certs/intermediate-ca.pem /etc/ssl/private/intermediate-ca.key /var/lib/rancher/rke2/server/tls\n\n# Generate custom CA certs and keys.\ncurl -sL https://github.com/k3s-io/k3s/raw/master/contrib/util/generate-custom-ca-certs.sh | PRODUCT=rke2 bash - \n")),(0,a.kt)("p",null,"If the command completes successfully, you may install and/or start RKE2 for the first time.\nIf the script generated root and/or intermediate CA files, you should back up these files so that they can be reused if it is necessary to rotate the CA certificates at a later date."),(0,a.kt)("h3",{id:"rotating-custom-ca-certificates"},"Rotating Custom CA Certificates"),(0,a.kt)("p",null,"To rotate custom CA certificates, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 certificate rotate-ca")," subcommand.\nUpdated files must be staged into a temporary directory, loaded into the datastore, and rke2 must be restarted on all nodes to use the updated certificates."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You must not overwrite the currently in-use data in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/tls"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Stage the updated certificates and keys into a separate directory.")),(0,a.kt)("p",null,"A cluster that has been started with custom CA certificates can renew or rotate the CA certificates and keys non-disruptively, as long as the same root CA is used."),(0,a.kt)("p",null,"If a new root CA is required, the rotation will be disruptive. The ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 certificate rotate-ca --force")," option must be used, all nodes (servers and agents) will need to be reconfigured to use the new token value, and pods will need to be restarted to trust the new root CA."),(0,a.kt)("h4",{id:"using-the-example-script-1"},"Using the Example Script"),(0,a.kt)("p",null,"The example ",(0,a.kt)("inlineCode",{parentName:"p"},"generate-custom-ca-certs.sh")," script linked above can also be used to generate updated certs in a new temporary directory, by copying files into the correct location and setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"DATA_DIR")," environment variable.\nTo use the example script to generate updated certs and keys, run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a temporary directory for cert generation.\nmkdir -p /opt/rke2/server/tls\n\n# Copy your root CA cert and intermediate CA cert+key into the correct location for the script.\n# Non-disruptive rotation requires the same root CA that was used to generate the original certificates.\n# If the original files are still in the data directory, you can just run:\ncp /var/lib/rancher/rke2/server/tls/root-ca.* /var/lib/rancher/rke2/server/tls/intermediate-ca.* /opt/rke2/server/tls\n\n# Copy the current service-account signing key, so that existing service-account tokens are not invalidated.\ncp /var/lib/rancher/rke2/server/tls/service.key /opt/rke2/server/tls\n\n# Generate updated custom CA certs and keys.\ncurl -sL https://github.com/k3s-io/k3s/raw/master/contrib/util/generate-custom-ca-certs.sh | DATA_DIR=/opt/rke2 PRODUCT=rke2 bash -\n\n# Load the updated CA certs and keys into the datastore.\nrke2 certificate rotate-ca --path=/opt/rke2/server\n")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"rotate-ca")," command returns an error, check the service log for errors.\nIf the command completes successfully, restart RKE2 on all nodes in the cluster - servers first, then agents."),(0,a.kt)("p",null,"If you used the ",(0,a.kt)("inlineCode",{parentName:"p"},"--force")," option or changed the root CA, ensure that any nodes that were joined with a secure token are reconfigured to use the new token value, prior to being restarted.\nThe token may be stored in a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file, systemd unit, or config.yaml, depending on how the node was configured during initial installation."),(0,a.kt)("h3",{id:"rotating-self-signed-ca-certificates"},"Rotating Self-Signed CA Certificates"),(0,a.kt)("p",null,"To rotate the RKE2-generated self-signed CA certificates, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 certificate rotate-ca")," subcommand.\nUpdated files must be staged into a temporary directory, loaded into the datastore, and rke2 must be restarted on all nodes to use the updated certificates."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You must not overwrite the currently in-use data in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/tls"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Stage the updated certificates and keys into a separate directory.")),(0,a.kt)("p",null,"If the cluster has been started with default self-signed CA certificates, rotation will be disruptive. All nodes that were joined with a secure token will need to be reconfigured to trust the new CA hash.\nIf the new CA certificates are not cross-signed by the old CA certificates, you will need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--force")," option to bypass integrity checks, and pods will need to be restarted to trust the new root CA."),(0,a.kt)("h4",{id:"default-ca-topology"},"Default CA Topology"),(0,a.kt)("p",null,"The default self-signed CA certificates have the following topology:"),(0,a.kt)("mermaid",{value:'graph TD\n  server-ca("Server CA")\n  client-ca("Client CA")\n  request-header-ca("API Aggregation CA")\n  etcd-peer-ca("etcd Peer CA")\n  etcd-server-ca("etcd Server CA")\n\n  root-hash>"Join token CA hash"]\n\n  kube-server-certs[["Kubernetes servers<br/>(control-plane and kubelet listeners)"]]\n  kube-client-certs[["Kubernetes clients<br/>(apiserver and kubelet clients)"]]\n  request-header-certs[["Kubernetes API aggregation<br/>(apiserver proxy client)"]]\n  etcd-peer-certs[["etcd peer client/server<br/>(etcd replication)"]]\n  etcd-server-certs[["etcd client/server certificates<br/>(Kubernetes <-> etcd)"]]\n\n  server-ca -.-|SHA256| root-hash\n  server-ca ===> kube-server-certs\n  client-ca ===> kube-client-certs\n  request-header-ca ===> request-header-certs\n  etcd-peer-ca ===> etcd-peer-certs\n  etcd-server-ca ===> etcd-server-certs'}),(0,a.kt)("p",null,"When rotating the default self-signed CAs, a modified certificate topology with intermediate CAs and a new root CA cross-signed by the old CA can be used so that there is a continuous chain of trust between the old and new CAs:"),(0,a.kt)("mermaid",{value:'graph TD\n  server-ca-old("Server CA<br/>(old)")\n  client-ca-old("Client CA<br/>(old)")\n  request-header-ca-old("API Aggregation CA<br/>(old)")\n  etcd-peer-ca-old("etcd Peer CA<br/>(old)")\n  etcd-server-ca-old("etcd Server CA<br/>(old)")\n\n  root-hash>"Join token CA hash"]\n\n  server-ca-xsigned("Server CA<br/>(cross-signed)")\n  client-ca-xsigned("Client CA<br/>(cross-signed)")\n  request-header-ca-xsigned("API Aggregation CA<br/>(cross-signed)")\n  etcd-peer-ca-xsigned("etcd Peer CA<br/>(cross-signed)")\n  etcd-server-ca-xsigned("etcd Server CA<br/>(cross-signed)")\n\n  server-ca-ssigned("Server CA<br/>(self-signed)")\n  client-ca-ssigned("Client CA<br/>(self-signed)")\n  request-header-ca-ssigned("API Aggregation CA<br/>(self-signed)")\n  etcd-peer-ca-ssigned("etcd Peer CA<br/>(self-signed)")\n  etcd-server-ca-ssigned("etcd Server CA<br/>(self-signed)")\n\n  server-ca("Intermediate<br/>Server CA")\n  client-ca("Intermediate<br/>Client CA")\n  request-header-ca("Intermediate<br/>API Aggregation CA")\n  etcd-peer-ca("Intermediate<br/>etcd Peer CA")\n  etcd-server-ca("Intermediate<br>etcd Server CA")\n\n  kube-server-certs[["Kubernetes servers<br/>(control-plane and kubelet listeners)"]]\n  kube-client-certs[["Kubernetes clients<br/>(apiserver and kubelet clients)"]]\n  request-header-certs[["Kubernetes API aggregation<br/>(apiserver proxy client)"]]\n  etcd-peer-certs[["etcd peer client/server<br/>(etcd replication)"]]\n  etcd-server-certs[["etcd client/server certificates<br/>(Kubernetes <-> etcd)"]]\n\n  server-ca-ssigned -.-|SHA256| root-hash\n  server-ca-ssigned --\x3e server-ca ==> kube-server-certs\n  server-ca-old --\x3e server-ca-xsigned --\x3e server-ca\n  client-ca-ssigned --\x3e client-ca ==> kube-client-certs\n  client-ca-old --\x3e client-ca-xsigned --\x3e client-ca\n  request-header-ca-ssigned --\x3e request-header-ca ==> request-header-certs\n  request-header-ca-old --\x3e request-header-ca-xsigned --\x3e request-header-ca\n  etcd-peer-ca-ssigned --\x3e etcd-peer-ca ==> etcd-peer-certs\n  etcd-peer-ca-old --\x3e etcd-peer-ca-xsigned --\x3e etcd-peer-ca\n  etcd-server-ca-ssigned --\x3e etcd-server-ca ==> etcd-server-certs\n  etcd-server-ca-old --\x3e etcd-server-ca-xsigned --\x3e etcd-server-ca'}),(0,a.kt)("h4",{id:"using-the-example-script-2"},"Using The Example Script"),(0,a.kt)("p",null,"An example script to create updated CA certificates and keys cross-signed by the existing CAs is available ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/blob/master/contrib/util/rotate-default-ca-certs.sh"},"in the K3s repo at ",(0,a.kt)("inlineCode",{parentName:"a"},"contrib/util/rotate-default-ca-certs.sh")),"."),(0,a.kt)("p",null,"To use the example script to generate updated self-signed certificates that are cross-signed by the existing CAs, run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Create updated CA certs and keys, cross-signed by the current CAs.\n# This script will create a new temporary directory containing the updated certs, and output the new token values.\ncurl -sL https://github.com/k3s-io/k3s/raw/master/contrib/util/rotate-default-ca-certs.sh | PRODUCT=rke2 bash -\n\n# Load the updated certs into the datastore; see the script output for the updated token values.\nrke2 certificate rotate-ca --path=/var/lib/rancher/rke2/server/rotate-ca\n")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"rotate-ca")," command returns an error, check the service log for errors.\nIf the command completes successfully, restart RKE2 on all nodes in the cluster - servers first, then agents."),(0,a.kt)("p",null,"Ensure that any nodes that were joined with a secure token, including other server nodes, are reconfigured to use the new token value prior to being restarted.\nThe token may be stored in a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file, systemd unit, or config.yaml, depending on how the node was configured during initial installation."),(0,a.kt)("h2",{id:"service-account-issuer-key-rotation"},"Service-Account Issuer Key Rotation"),(0,a.kt)("p",null,"The service-account issuer key is an RSA private key used to sign service-account tokens.\nWhen rotating the service-account issuer key, at least one old key should be retained in the file so that existing service-account tokens are not invalidated.\nIt can be rotated independent of the cluster CAs by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 certificate rotate-ca")," to install only an updated ",(0,a.kt)("inlineCode",{parentName:"p"},"service.key")," file that includes both the new and old keys."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You must not overwrite the currently in-use data in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/tls"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Stage the updated key into a separate directory.")),(0,a.kt)("p",null,"For example, to rotate only the service-account issuer key, run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a temporary directory for cert generation\nmkdir -p /opt/rke2/server/tls\n\n# Check OpenSSL version\nopenssl version | grep -qF 'OpenSSL 3' && OPENSSL_GENRSA_FLAGS=-traditional\n\n# Generate a new key\nopenssl genrsa ${OPENSSL_GENRSA_FLAGS:-} -out /opt/rke2/server/tls/service.key 2048\n\n# Append the existing key to avoid invalidating current tokens\ncat /var/lib/rancher/rke2/server/tls/service.key >> /opt/rke2/server/tls/service.key\n\n# Load the updated key into the datastore\nrke2 certificate rotate-ca --path=/opt/rke2/server\n")),(0,a.kt)("p",null,"It is normal to see warnings for files that are not being updated. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"rotate-ca")," command returns an error, check the service log for errors.\nIf the command completes successfully, restart RKE2 on all servers in the cluster. It is not necessary to restart agents or restart any pods."))}p.isMDXComponent=!0}}]);