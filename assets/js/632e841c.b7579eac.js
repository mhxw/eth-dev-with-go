"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6019],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4830:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={description:"Tutorial on how to deploy a smart contract with Go."},l="Deploying a Smart Contract",s={unversionedId:"en/smart-contract-deploy/README",id:"en/smart-contract-deploy/README",title:"Deploying a Smart Contract",description:"Tutorial on how to deploy a smart contract with Go.",source:"@site/docs/en/smart-contract-deploy/README.md",sourceDirName:"en/smart-contract-deploy",slug:"/en/smart-contract-deploy/",permalink:"/eth-dev-with-go/docs/en/smart-contract-deploy/",editUrl:"https://github.com/mhxw/eth-dev-with-go/tree/dev/docs/en/smart-contract-deploy/README.md",tags:[],version:"current",frontMatter:{description:"Tutorial on how to deploy a smart contract with Go."},sidebar:"en",previous:{title:"Smart Contract Compilation & ABI",permalink:"/eth-dev-with-go/docs/en/smart-contract-compile/"},next:{title:"Loading a Smart Contract",permalink:"/eth-dev-with-go/docs/en/smart-contract-load/"}},p={},u=[{value:"Full code",id:"full-code",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-a-smart-contract"},"Deploying a Smart Contract"),(0,o.kt)("p",null,"If you haven't already, check out the ",(0,o.kt)("a",{parentName:"p",href:"../smart-contract-compile"},"section on smart contract compilation")," since this lesson requires knowledge on compiling a solidity smart contract to a Go contract file."),(0,o.kt)("p",null,"Assuming you've imported the newly created Go package file generated from ",(0,o.kt)("inlineCode",{parentName:"p"},"abigen"),", and set the ethclient, loaded your private key, the next step is to create a keyed transactor. First import the ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts/abi/bind")," package from go-ethereum and then invoke ",(0,o.kt)("inlineCode",{parentName:"p"},"NewKeyedTransactor")," passing in the private key. Afterwards set the usual properties such as the nonce, gas price, gas limit, and ETH value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"auth := bind.NewKeyedTransactor(privateKey)\nauth.Nonce = big.NewInt(int64(nonce))\nauth.Value = big.NewInt(0)     // in wei\nauth.GasLimit = uint64(300000) // in units\nauth.GasPrice = gasPrice\n")),(0,o.kt)("p",null,"If you recall in the previous section, we created a very simpile ",(0,o.kt)("inlineCode",{parentName:"p"},"Store")," contract that sets and stores key/value pairs. The generated Go contract file provides a deploy method. The deploy method name always starts with the word ",(0,o.kt)("em",{parentName:"p"},"Deploy")," followed by the contract name, in this case it's ",(0,o.kt)("em",{parentName:"p"},"Store"),"."),(0,o.kt)("p",null,"The deploy function takes in the keyed transactor, the ethclient, and any input arguments that the smart contract constructor might takes in. We've set our smart contract to take in a string argument for the version. This function will return the Ethereum address of the newly deployed contract, the transaction object, the contract instance so that we can start interacting with, and the error if any."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'input := "1.0"\naddress, tx, instance, err := store.DeployStore(auth, client, input)\nif err != nil {\n  log.Fatal(err)\n}\n\nfmt.Println(address.Hex())   // 0x147B8eb97fD247D06C4006D269c90C1908Fb5D54\nfmt.Println(tx.Hash().Hex()) // 0xdae8ba5444eefdc99f4d45cd0c4f24056cba6a02cefbf78066ef9f4188ff7dc0\n\n_ = instance // will be using the instance in the next section\n')),(0,o.kt)("p",null,"Yes it's that simply. You can take the transaction hash and see the deployment status on Etherscan: ",(0,o.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/tx/0xdae8ba5444eefdc99f4d45cd0c4f24056cba6a02cefbf78066ef9f4188ff7dc0"},"https://rinkeby.etherscan.io/tx/0xdae8ba5444eefdc99f4d45cd0c4f24056cba6a02cefbf78066ef9f4188ff7dc0")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"full-code"},"Full code"),(0,o.kt)("p",null,"Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"solc --abi Store.sol\nsolc --bin Store.sol\nabigen --bin=Store_sol_Store.bin --abi=Store_sol_Store.abi --pkg=store --out=Store.go\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mhxw/eth-dev-with-go/blob/main/code/contracts/Store.sol"},"Store.sol")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity ^0.4.24;\n\ncontract Store {\n  event ItemSet(bytes32 key, bytes32 value);\n\n  string public version;\n  mapping (bytes32 => bytes32) public items;\n\n  constructor(string _version) public {\n    version = _version;\n  }\n\n  function setItem(bytes32 key, bytes32 value) external {\n    items[key] = value;\n    emit ItemSet(key, value);\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mhxw/eth-dev-with-go/blob/main/code/contract_deploy.go"},"contract_deploy.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "crypto/ecdsa"\n    "fmt"\n    "log"\n    "math/big"\n\n    "github.com/ethereum/go-ethereum/accounts/abi/bind"\n    "github.com/ethereum/go-ethereum/crypto"\n    "github.com/ethereum/go-ethereum/ethclient"\n\n    store "./contracts" // for demo\n)\n\nfunc main() {\n    client, err := ethclient.Dial("https://rinkeby.infura.io")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    privateKey, err := crypto.HexToECDSA("fad9c8855b740a0b7ed4c221dbad0f33a83a49cad6b3fe8d5817ac83d38b6a19")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    publicKey := privateKey.Public()\n    publicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)\n    if !ok {\n        log.Fatal("cannot assert type: publicKey is not of type *ecdsa.PublicKey")\n    }\n\n    fromAddress := crypto.PubkeyToAddress(*publicKeyECDSA)\n    nonce, err := client.PendingNonceAt(context.Background(), fromAddress)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    gasPrice, err := client.SuggestGasPrice(context.Background())\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    auth := bind.NewKeyedTransactor(privateKey)\n    auth.Nonce = big.NewInt(int64(nonce))\n    auth.Value = big.NewInt(0)     // in wei\n    auth.GasLimit = uint64(300000) // in units\n    auth.GasPrice = gasPrice\n\n    input := "1.0"\n    address, tx, instance, err := store.DeployStore(auth, client, input)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    fmt.Println(address.Hex())   // 0x147B8eb97fD247D06C4006D269c90C1908Fb5D54\n    fmt.Println(tx.Hash().Hex()) // 0xdae8ba5444eefdc99f4d45cd0c4f24056cba6a02cefbf78066ef9f4188ff7dc0\n\n    _ = instance\n}\n')),(0,o.kt)("p",null,"solc version used for these examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ solc --version\n0.4.24+commit.e67f0147.Emscripten.clang\n")))}m.isMDXComponent=!0}}]);