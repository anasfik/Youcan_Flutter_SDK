"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Usage",s={unversionedId:"usage/index",id:"usage/index",title:"Usage",description:"In order to configuring the library with your YouCan store, you need to set storeLink to you store link like this:",source:"@site/docs/usage/index.mdx",sourceDirName:"usage",slug:"/usage/",permalink:"/Youcan_flutter_sdk/usage/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"What To Know ?",permalink:"/Youcan_flutter_sdk/what-to-know"},next:{title:"Authentication",permalink:"/Youcan_flutter_sdk/usage/Authentication/"}},u={},c=[],l={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("p",null,"In order to configuring the library with your ",(0,o.kt)("a",{href:"https://youcan.shop/en/"},"YouCan")," store, you need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"storeLink")," to you store link like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="main.dart"',title:'"main.dart"'},'void main() {\n  // highlight-next-line\n  YouCan.instance.storeLink = "https://example.youcan.shop"; // change it with your store\'s link\n  runApp(myApp());\n}\n\n')),(0,o.kt)("p",null,"That's it! you can now use all the methods provided from the api directly in your app."),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We recommend setting your store link in the ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," before the ",(0,o.kt)("inlineCode",{parentName:"p"},"runApp()")," is called, so it makes it easy to change it in the future.")))}p.isMDXComponent=!0}}]);