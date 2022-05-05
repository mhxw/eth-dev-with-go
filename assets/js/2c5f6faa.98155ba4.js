"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3393],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},l=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,c=t.originalType,s=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||c;return r?n.createElement(d,a(a({ref:e},l),{},{components:r})):n.createElement(d,a({ref:e},l))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},430:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),a=["components"],i={description:"Tutorial on how to smart contracts with Go."},s="Smart Contracts",u={unversionedId:"en/smart-contracts/README",id:"en/smart-contracts/README",title:"Smart Contracts",description:"Tutorial on how to smart contracts with Go.",source:"@site/docs/en/smart-contracts/README.md",sourceDirName:"en/smart-contracts",slug:"/en/smart-contracts/",permalink:"/eth-dev-with-go/docs/en/smart-contracts/",editUrl:"https://github.com/mhxw/eth-dev-with-go/tree/dev/docs/en/smart-contracts/README.md",tags:[],version:"current",frontMatter:{description:"Tutorial on how to smart contracts with Go."},sidebar:"en",previous:{title:"Send Raw Transaction",permalink:"/eth-dev-with-go/docs/en/transaction-raw-send/"},next:{title:"Smart Contract Compilation & ABI",permalink:"/eth-dev-with-go/docs/en/smart-contract-compile/"}},l={},p=[],m={toc:p};function f(t){var e=t.components,r=(0,o.Z)(t,a);return(0,c.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"smart-contracts"},"Smart Contracts"),(0,c.kt)("p",null,"In the next sections we'll learn how to compile, deploy, read, and write to smart contract using Go."))}f.isMDXComponent=!0}}]);