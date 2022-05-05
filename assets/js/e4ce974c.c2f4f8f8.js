"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4902],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,h=d["".concat(l,".").concat(p)]||d[p]||g[p]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5852:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return g}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={description:"Tutorial on generating signatures with Go."},l="Generating a Signature",u={unversionedId:"en/signature-generate/README",id:"en/signature-generate/README",title:"Generating a Signature",description:"Tutorial on generating signatures with Go.",source:"@site/docs/en/signature-generate/README.md",sourceDirName:"en/signature-generate",slug:"/en/signature-generate/",permalink:"/eth-dev-with-go/docs/en/signature-generate/",editUrl:"https://github.com/mhxw/eth-dev-with-go/tree/dev/docs/en/signature-generate/README.md",tags:[],version:"current",frontMatter:{description:"Tutorial on generating signatures with Go."},sidebar:"en",previous:{title:"Signatures",permalink:"/eth-dev-with-go/docs/en/signatures/"},next:{title:"Verifying a Signature",permalink:"/eth-dev-with-go/docs/en/signature-verify/"}},s={},g=[{value:"Full code",id:"full-code",level:3}],d={toc:g};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"generating-a-signature"},"Generating a Signature"),(0,i.kt)("p",null,"The components for generating a signature are: the signers private key, and the hash of the data that will be signed. Any hashing algorithm may be used as long as the output is 32 bytes. We'll be using Keccak-256 as the hashing algorithm which is what Ethereum prefers to use."),(0,i.kt)("p",null,"First we'll load private key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'privateKey, err := crypto.HexToECDSA("fad9c8855b740a0b7ed4c221dbad0f33a83a49cad6b3fe8d5817ac83d38b6a19")\nif err != nil {\n  log.Fatal(err)\n}\n')),(0,i.kt)("p",null,"Next we'll take the Keccak-256 of the data that we wish to sign, in this case it'll be the word ",(0,i.kt)("em",{parentName:"p"},"hello"),". The go-ethereum ",(0,i.kt)("inlineCode",{parentName:"p"},"crypto")," package provides a handy ",(0,i.kt)("inlineCode",{parentName:"p"},"Keccak256Hash")," method for doing this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'data := []byte("hello")\nhash := crypto.Keccak256Hash(data)\nfmt.Println(hash.Hex()) // 0x1c8aff950685c2ed4bc3174f3472287b56d9517b9c948127319a09a7a36deac8\n')),(0,i.kt)("p",null,"Finally we sign the hash with our private, which gives us the signature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"signature, err := crypto.Sign(hash.Bytes(), privateKey)\nif err != nil {\n  log.Fatal(err)\n}\n\nfmt.Println(hexutil.Encode(signature)) // 0x789a80053e4927d0a898db8e065e948f5cf086e32f9ccaa54c1908e22ac430c62621578113ddbb62d509bf6049b8fb544ab06d36f916685a2eb8e57ffadde02301\n")),(0,i.kt)("p",null,"Now that we have successfully generated the signature, in the next section we'll learn how to verify that the signature indeed was signed by the holder of that private key."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"full-code"},"Full code"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mhxw/eth-dev-with-go/blob/main/code/signature_generate.go"},"signature_generate.go")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "log"\n\n    "github.com/ethereum/go-ethereum/common/hexutil"\n    "github.com/ethereum/go-ethereum/crypto"\n)\n\nfunc main() {\n    privateKey, err := crypto.HexToECDSA("fad9c8855b740a0b7ed4c221dbad0f33a83a49cad6b3fe8d5817ac83d38b6a19")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    data := []byte("hello")\n    hash := crypto.Keccak256Hash(data)\n    fmt.Println(hash.Hex()) // 0x1c8aff950685c2ed4bc3174f3472287b56d9517b9c948127319a09a7a36deac8\n\n    signature, err := crypto.Sign(hash.Bytes(), privateKey)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    fmt.Println(hexutil.Encode(signature)) // 0x789a80053e4927d0a898db8e065e948f5cf086e32f9ccaa54c1908e22ac430c62621578113ddbb62d509bf6049b8fb544ab06d36f916685a2eb8e57ffadde02301\n}\n')))}p.isMDXComponent=!0}}]);