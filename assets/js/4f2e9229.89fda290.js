"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9035],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(t),g=o,b=m["".concat(c,".").concat(g)]||m[g]||p[g]||a;return t?r.createElement(b,s(s({ref:n},u),{},{components:t})):r.createElement(b,s({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7488:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],l={"\u6982\u8ff0":"\u7528Go\u8ba2\u9605\u667a\u80fd\u5408\u7ea6\u4e8b\u4ef6\u65e5\u5fd7\u7684\u6559\u7a0b\u3002"},c="\u8ba2\u9605\u4e8b\u4ef6\u65e5\u5fd7",i={unversionedId:"zh/event-subscribe/README",id:"zh/event-subscribe/README",title:"\u8ba2\u9605\u4e8b\u4ef6\u65e5\u5fd7",description:"\u4e3a\u4e86\u8ba2\u9605\u4e8b\u4ef6\u65e5\u5fd7\uff0c\u6211\u4eec\u9700\u8981\u505a\u7684\u7b2c\u4e00\u4ef6\u4e8b\u5c31\u662f\u62e8\u6253\u542f\u7528websocket\u7684\u4ee5\u592a\u574a\u5ba2\u6237\u7aef\u3002 \u5e78\u8fd0\u7684\u662f\uff0cInfura\u652f\u6301websockets\u3002",source:"@site/docs/zh/event-subscribe/README.md",sourceDirName:"zh/event-subscribe",slug:"/zh/event-subscribe/",permalink:"/eth-dev-with-go/docs/zh/event-subscribe/",editUrl:"https://github.com/mhxw/eth-dev-with-go/tree/dev/docs/zh/event-subscribe/README.md",tags:[],version:"current",frontMatter:{"\u6982\u8ff0":"\u7528Go\u8ba2\u9605\u667a\u80fd\u5408\u7ea6\u4e8b\u4ef6\u65e5\u5fd7\u7684\u6559\u7a0b\u3002"},sidebar:"zh",previous:{title:"\u4e8b\u4ef6",permalink:"/eth-dev-with-go/docs/zh/events/"},next:{title:"\u8bfb\u53d6\u4e8b\u4ef6\u65e5\u5fd7",permalink:"/eth-dev-with-go/docs/zh/event-read/"}},u={},p=[{value:"\u5b8c\u6574\u4ee3\u7801",id:"\u5b8c\u6574\u4ee3\u7801",level:3}],m={toc:p};function g(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8ba2\u9605\u4e8b\u4ef6\u65e5\u5fd7"},"\u8ba2\u9605\u4e8b\u4ef6\u65e5\u5fd7"),(0,a.kt)("p",null,"\u4e3a\u4e86\u8ba2\u9605\u4e8b\u4ef6\u65e5\u5fd7\uff0c\u6211\u4eec\u9700\u8981\u505a\u7684\u7b2c\u4e00\u4ef6\u4e8b\u5c31\u662f\u62e8\u6253\u542f\u7528websocket\u7684\u4ee5\u592a\u574a\u5ba2\u6237\u7aef\u3002 \u5e78\u8fd0\u7684\u662f\uff0cInfura\u652f\u6301websockets\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'client, err := ethclient.Dial("wss://rinkeby.infura.io/ws")\nif err != nil {\n  log.Fatal(err)\n}\n')),(0,a.kt)("p",null,"\u4e0b\u4e00\u6b65\u662f\u521b\u5efa\u7b5b\u9009\u67e5\u8be2\u3002 \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06\u9605\u8bfb\u6765\u81ea\u6211\u4eec\u5728\u4e4b\u524d\u8bfe\u7a0b\u4e2d\u521b\u5efa\u7684\u793a\u4f8b\u5408\u7ea6\u4e2d\u7684\u6240\u6709\u4e8b\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'contractAddress := common.HexToAddress("0x147B8eb97fD247D06C4006D269c90C1908Fb5D54")\nquery := ethereum.FilterQuery{\n  Addresses: []common.Address{contractAddress},\n}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u63a5\u6536\u4e8b\u4ef6\u7684\u65b9\u5f0f\u662f\u901a\u8fc7Go channel\u3002 \u8ba9\u6211\u4eec\u4ecego-ethereum",(0,a.kt)("inlineCode",{parentName:"p"},"core/types"),"\u5305\u521b\u5efa\u4e00\u4e2a\u7c7b\u578b\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Log"),"\u7684channel\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"logs := make(chan types.Log)\n")),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6240\u8981\u505a\u7684\u5c31\u662f\u901a\u8fc7\u4ece\u5ba2\u6237\u7aef\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"SubscribeFilterLogs"),"\u6765\u8ba2\u9605\uff0c\u5b83\u63a5\u6536\u67e5\u8be2\u9009\u9879\u548c\u8f93\u51fa\u901a\u9053\u3002 \u8fd9\u5c06\u8fd4\u56de\u5305\u542bunsubscribe\u548cerror\u65b9\u6cd5\u7684\u8ba2\u9605\u7ed3\u6784\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"sub, err := client.SubscribeFilterLogs(context.Background(), query, logs)\nif err != nil {\n  log.Fatal(err)\n}\n")),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u8981\u505a\u7684\u5c31\u662f\u4f7f\u7528select\u8bed\u53e5\u8bbe\u7f6e\u4e00\u4e2a\u8fde\u7eed\u5faa\u73af\u6765\u8bfb\u5165\u65b0\u7684\u65e5\u5fd7\u4e8b\u4ef6\u6216\u8ba2\u9605\u9519\u8bef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"for {\n  select {\n  case err := <-sub.Err():\n    log.Fatal(err)\n  case vLog := <-logs:\n    fmt.Println(vLog) // pointer to event log\n  }\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u4f1a\u5728",(0,a.kt)("a",{parentName:"p",href:"../event-read"},"\u4e0b\u4e2a\u7ae0\u8282"),"\u4ecb\u7ecd\u5982\u4f55\u89e3\u6790\u65e5\u5fd7\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u5b8c\u6574\u4ee3\u7801"},"\u5b8c\u6574\u4ee3\u7801"),(0,a.kt)("p",null,"Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"solc --abi Store.sol\nsolc --bin Store.sol\nabigen --bin=Store_sol_Store.bin --abi=Store_sol_Store.abi --pkg=store --out=Store.go\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mhxw/eth-dev-with-go/blob/main/code/contracts/Store.sol"},"Store.sol")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity ^0.4.24;\n\ncontract Store {\n  event ItemSet(bytes32 key, bytes32 value);\n\n  string public version;\n  mapping (bytes32 => bytes32) public items;\n\n  constructor(string _version) public {\n    version = _version;\n  }\n\n  function setItem(bytes32 key, bytes32 value) external {\n    items[key] = value;\n    emit ItemSet(key, value);\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mhxw/eth-dev-with-go/blob/main/code/event_subscribe.go"},"event_subscribe.go")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "log"\n\n    "github.com/ethereum/go-ethereum"\n    "github.com/ethereum/go-ethereum/common"\n    "github.com/ethereum/go-ethereum/core/types"\n    "github.com/ethereum/go-ethereum/ethclient"\n)\n\nfunc main() {\n    client, err := ethclient.Dial("wss://rinkeby.infura.io/ws")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    contractAddress := common.HexToAddress("0x147B8eb97fD247D06C4006D269c90C1908Fb5D54")\n    query := ethereum.FilterQuery{\n        Addresses: []common.Address{contractAddress},\n    }\n\n    logs := make(chan types.Log)\n    sub, err := client.SubscribeFilterLogs(context.Background(), query, logs)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    for {\n        select {\n        case err := <-sub.Err():\n            log.Fatal(err)\n        case vLog := <-logs:\n            fmt.Println(vLog) // pointer to event log\n        }\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ solc --version\n0.4.24+commit.e67f0147.Emscripten.clang\n")))}g.isMDXComponent=!0}}]);