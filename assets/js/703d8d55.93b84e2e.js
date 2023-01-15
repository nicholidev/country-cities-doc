"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"states",title:"States",sidebar_position:4},l=void 0,s={unversionedId:"amd/states",id:"amd/states",title:"States",description:"Import",source:"@site/docs/v1/amd/states.md",sourceDirName:"amd",slug:"/amd/states",permalink:"/country-cities-doc/v1/amd/states",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"states",title:"States",sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Countries",permalink:"/country-cities-doc/v1/amd/countries"},next:{title:"Cities",permalink:"/country-cities-doc/v1/amd/cities"}},i={},c=[{value:"Import",id:"import",level:2},{value:"Get all states",id:"get-all-states",level:2},{value:"Get States by Country",id:"get-states-by-country",level:2},{value:"Get States by Code",id:"get-states-by-code",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const states = require("country-cities").states;\n')),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"get-all-states"},"Get all states"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const allStates = states.all();\n\nconsole.log(allStates)\n")),(0,a.kt)("p",null,"The result will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[\n  {\n    countryCode: "US",\n    isoCode: "VA",\n    latitude: "37.43157340",\n    longitude: "-78.65689420",\n    name: "Virginia"\n  },\n  {\n    countryCode: "US",\n    isoCode: "IL",\n    latitude: "40.63312490",\n    longitude: "-89.39852830",\n    name: "Illinois"\n  },\n  ...\n]\n')),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"get-states-by-country"},"Get States by Country"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const usStates = states.getByCountry("US");\n\nconsole.log(usStates)\n')),(0,a.kt)("p",null,"The result will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[\n  {\n    countryCode: "US",\n    isoCode: "VA",\n    latitude: "37.43157340",\n    longitude: "-78.65689420",\n    name: "Virginia"\n  },\n  {\n    countryCode: "US",\n    isoCode: "IL",\n    latitude: "40.63312490",\n    longitude: "-89.39852830",\n    name: "Illinois"\n  },\n  ...\n]\n')),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"get-states-by-code"},"Get States by Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const vaState = states.getByCode("VA", "US");\n\nconsole.log(vaState)\n')),(0,a.kt)("blockquote",null,(0,a.kt)("b",null,"Important"),": The country code should be entered second parameter"),(0,a.kt)("p",null,"The result will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  countryCode: "US",\n  isoCode: "VA",\n  latitude: "37.43157340",\n  longitude: "-78.65689420",\n  name: "Virginia"\n}\n')))}p.isMDXComponent=!0}}]);