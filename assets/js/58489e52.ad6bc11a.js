"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1732],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),g=o,b=m["".concat(l,".").concat(g)]||m[g]||p[g]||s;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3871:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],i={description:"Tutorial on how to subscribe to smart contract events with Go."},l="Subscribing to Event Logs",c={unversionedId:"en/event-subscribe/README",id:"en/event-subscribe/README",title:"Subscribing to Event Logs",description:"Tutorial on how to subscribe to smart contract events with Go.",source:"@site/docs/en/event-subscribe/README.md",sourceDirName:"en/event-subscribe",slug:"/en/event-subscribe/",permalink:"/eth-dev-with-go/docs/en/event-subscribe/",editUrl:"https://github.com/mhxw/eth-dev-with-go/tree/dev/docs/en/event-subscribe/README.md",tags:[],version:"current",frontMatter:{description:"Tutorial on how to subscribe to smart contract events with Go."},sidebar:"en",previous:{title:"Events",permalink:"/eth-dev-with-go/docs/en/events/"},next:{title:"Reading Event Logs",permalink:"/eth-dev-with-go/docs/en/event-read/"}},u={},p=[{value:"Full code",id:"full-code",level:3}],m={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"subscribing-to-event-logs"},"Subscribing to Event Logs"),(0,s.kt)("p",null,"First thing we need to do in order to subscribe to event logs is dial to a websocket enabled Ethereum client. Fortunately for us, Infura supports websockets."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'client, err := ethclient.Dial("wss://rinkeby.infura.io/ws")\nif err != nil {\n  log.Fatal(err)\n}\n')),(0,s.kt)("p",null,"The next step is to create a filter query. In this example we'll be reading all events coming from the example contract that we've created in the previous lessons."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'contractAddress := common.HexToAddress("0x147B8eb97fD247D06C4006D269c90C1908Fb5D54")\nquery := ethereum.FilterQuery{\n  Addresses: []common.Address{contractAddress},\n}\n')),(0,s.kt)("p",null,"The way we'll be receiving events is through a Go channel. Let's create one with type of ",(0,s.kt)("inlineCode",{parentName:"p"},"Log")," from the go-ethereum ",(0,s.kt)("inlineCode",{parentName:"p"},"core/types")," package."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"logs := make(chan types.Log)\n")),(0,s.kt)("p",null,"Now all we have to do is subscribe by calling ",(0,s.kt)("inlineCode",{parentName:"p"},"SubscribeFilterLogs")," from the client, which takes in the query options and the output channel. This will return a subscription struct containing unsubscribe and error methods."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"sub, err := client.SubscribeFilterLogs(context.Background(), query, logs)\nif err != nil {\n  log.Fatal(err)\n}\n")),(0,s.kt)("p",null,"Finally all we have to do is setup an continous loop with a select statement to read in either new log events or the subscription error."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"for {\n  select {\n  case err := <-sub.Err():\n    log.Fatal(err)\n  case vLog := <-logs:\n    fmt.Println(vLog) // pointer to event log\n  }\n}\n")),(0,s.kt)("p",null,"You'll have to parse the log entries, which we'll learn how to do in the ",(0,s.kt)("a",{parentName:"p",href:"../event-read"},"next section"),"."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"full-code"},"Full code"),(0,s.kt)("p",null,"Commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"solc --abi Store.sol\nsolc --bin Store.sol\nabigen --bin=Store_sol_Store.bin --abi=Store_sol_Store.abi --pkg=store --out=Store.go\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/mhxw/eth-dev-with-go/blob/main/code/contracts/Store.sol"},"Store.sol")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity ^0.4.24;\n\ncontract Store {\n  event ItemSet(bytes32 key, bytes32 value);\n\n  string public version;\n  mapping (bytes32 => bytes32) public items;\n\n  constructor(string _version) public {\n    version = _version;\n  }\n\n  function setItem(bytes32 key, bytes32 value) external {\n    items[key] = value;\n    emit ItemSet(key, value);\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/mhxw/eth-dev-with-go/blob/main/code/event_subscribe.go"},"event_subscribe.go")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "log"\n\n    "github.com/ethereum/go-ethereum"\n    "github.com/ethereum/go-ethereum/common"\n    "github.com/ethereum/go-ethereum/core/types"\n    "github.com/ethereum/go-ethereum/ethclient"\n)\n\nfunc main() {\n    client, err := ethclient.Dial("wss://rinkeby.infura.io/ws")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    contractAddress := common.HexToAddress("0x147B8eb97fD247D06C4006D269c90C1908Fb5D54")\n    query := ethereum.FilterQuery{\n        Addresses: []common.Address{contractAddress},\n    }\n\n    logs := make(chan types.Log)\n    sub, err := client.SubscribeFilterLogs(context.Background(), query, logs)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    for {\n        select {\n        case err := <-sub.Err():\n            log.Fatal(err)\n        case vLog := <-logs:\n            fmt.Println(vLog) // pointer to event log\n        }\n    }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ solc --version\n0.4.24+commit.e67f0147.Emscripten.clang\n")))}g.isMDXComponent=!0}}]);