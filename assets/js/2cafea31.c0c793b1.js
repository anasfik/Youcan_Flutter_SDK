"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="Account informations",c={unversionedId:"usage/Authentication/account",id:"usage/Authentication/account",title:"Account informations",description:"After the user logged in in you store, you might want to get the his account details such as id, name, email, time of creation..., for this you will need to use the customerAccount() that will return a CustomerAccountInformations which contains all your users informations.",source:"@site/docs/usage/Authentication/account.mdx",sourceDirName:"usage/Authentication",slug:"/usage/Authentication/account",permalink:"/Youcan_flutter_sdk/usage/Authentication/account",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/Authentication/account.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Sign Up / Create A New Customer",permalink:"/Youcan_flutter_sdk/usage/Authentication/create"},next:{title:"Update Account Informations",permalink:"/Youcan_flutter_sdk/usage/Authentication/update"}},u={},s=[],l={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"account-informations"},"Account informations"),(0,o.kt)("p",null,"After the user logged in in you store, you might want to get the his account details such as id, name, email, time of creation..., for this you will need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"customerAccount()")," that will return a ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomerAccountInformations")," which contains all your users informations."),(0,o.kt)("p",null,"using ",(0,o.kt)("inlineCode",{parentName:"p"},"await"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"async"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'final customerInformations = await YouCan.instance.customers.customerAccount(\n      userToken: "YOUR USER TOKEN",\n      );\n')))}p.isMDXComponent=!0}}]);