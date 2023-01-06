"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[859],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(u,".").concat(d)]||p[d]||g[d]||i;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9716:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2},s="Querying With Search",o={unversionedId:"usage/pages/search",id:"usage/pages/search",title:"Querying With Search",description:"You can get a list of pages with a search query using the search(), and you can use it like this:",source:"@site/docs/usage/pages/search.mdx",sourceDirName:"usage/pages",slug:"/usage/pages/search",permalink:"/Youcan_flutter_sdk/usage/pages/search",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/pages/search.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Get Pages",permalink:"/Youcan_flutter_sdk/usage/pages/all_pages"},next:{title:"Querying With Limits",permalink:"/Youcan_flutter_sdk/usage/pages/limit"}},u={},c=[{value:"Using <code>await</code>/<code>async</code> :",id:"using-awaitasync-",level:4},{value:"Using A <code>FutureBuilder</code> :",id:"using-a-futurebuilder-",level:4}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"querying-with-search"},"Querying With Search"),(0,a.kt)("p",null,"You can get a list of pages with a search query using the ",(0,a.kt)("inlineCode",{parentName:"p"},"search()"),", and you can use it like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'YouCan.instance.pages.search("YOUR SEARCH TEXT HERE");\n')),(0,a.kt)("p",null,"and you can make a request for it using all(), like the following."),(0,a.kt)("h4",{id:"using-awaitasync-"},"Using ",(0,a.kt)("inlineCode",{parentName:"h4"},"await"),"/",(0,a.kt)("inlineCode",{parentName:"h4"},"async")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'final pagesStartingWithCo = await YouCan.instance.pages.search("co").all();\n')),(0,a.kt)("h4",{id:"using-a-futurebuilder-"},"Using A ",(0,a.kt)("inlineCode",{parentName:"h4"},"FutureBuilder")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'FutureBuilder<List<Page>>(\n    future: YouCan.instance.pages.search("co").all(),\n    builder: (context, snapshot) {\n      if (snapshot.hasData) {\n        return Text(snapshot.data);\n      } else if (snapshot.hasError) {\n        return Text("Error: ${snapshot.error}");\n      } else {\n        return CircularProgressIndicator();\n      }\n    },\n  ),\n\n')))}p.isMDXComponent=!0}}]);