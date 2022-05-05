"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9812],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),s=a,g=d["".concat(l,".").concat(s)]||d[s]||f[s]||o;return n?r.createElement(g,c(c({ref:t},p),{},{components:n})):r.createElement(g,c({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},966:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={"\u6982\u8ff0":"\u7528Go\u751f\u6210\u7b7e\u540d\u7684\u6559\u7a0b\u3002"},l="\u751f\u6210\u4e00\u4e2a\u7b7e\u540d",u={unversionedId:"zh/signature-generate/README",id:"zh/signature-generate/README",title:"\u751f\u6210\u4e00\u4e2a\u7b7e\u540d",description:"\u7528\u4e8e\u751f\u6210\u7b7e\u540d\u7684\u7ec4\u4ef6\u662f\uff1a\u7b7e\u540d\u8005\u79c1\u94a5\uff0c\u4ee5\u53ca\u5c06\u8981\u7b7e\u540d\u7684\u6570\u636e\u7684\u54c8\u5e0c\u3002 \u53ea\u8981\u8f93\u51fa\u4e3a32\u5b57\u8282\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u54c8\u5e0c\u7b97\u6cd5\u3002 \u6211\u4eec\u5c06\u4f7f\u7528Keccak-256\u4f5c\u4e3a\u54c8\u5e0c\u7b97\u6cd5\uff0c\u8fd9\u662f\u4ee5\u592a\u574a\u5e38\u5e38\u4f7f\u7528\u7684\u7b97\u6cd5\u3002",source:"@site/docs/zh/signature-generate/README.md",sourceDirName:"zh/signature-generate",slug:"/zh/signature-generate/",permalink:"/eth-dev-with-go/docs/zh/signature-generate/",editUrl:"https://github.com/mhxw/eth-dev-with-go/tree/dev/docs/zh/signature-generate/README.md",tags:[],version:"current",frontMatter:{"\u6982\u8ff0":"\u7528Go\u751f\u6210\u7b7e\u540d\u7684\u6559\u7a0b\u3002"},sidebar:"zh",previous:{title:"\u7b7e\u540d",permalink:"/eth-dev-with-go/docs/zh/signatures/"},next:{title:"\u9a8c\u8bc1\u7b7e\u540d",permalink:"/eth-dev-with-go/docs/zh/signature-verify/"}},p={},f=[{value:"\u5b8c\u6574\u4ee3\u7801",id:"\u5b8c\u6574\u4ee3\u7801",level:3}],d={toc:f};function s(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u751f\u6210\u4e00\u4e2a\u7b7e\u540d"},"\u751f\u6210\u4e00\u4e2a\u7b7e\u540d"),(0,o.kt)("p",null,"\u7528\u4e8e\u751f\u6210\u7b7e\u540d\u7684\u7ec4\u4ef6\u662f\uff1a\u7b7e\u540d\u8005\u79c1\u94a5\uff0c\u4ee5\u53ca\u5c06\u8981\u7b7e\u540d\u7684\u6570\u636e\u7684\u54c8\u5e0c\u3002 \u53ea\u8981\u8f93\u51fa\u4e3a32\u5b57\u8282\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u54c8\u5e0c\u7b97\u6cd5\u3002 \u6211\u4eec\u5c06\u4f7f\u7528Keccak-256\u4f5c\u4e3a\u54c8\u5e0c\u7b97\u6cd5\uff0c\u8fd9\u662f\u4ee5\u592a\u574a\u5e38\u5e38\u4f7f\u7528\u7684\u7b97\u6cd5\u3002"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5c06\u52a0\u8f7d\u79c1\u94a5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'privateKey, err := crypto.HexToECDSA("fad9c8855b740a0b7ed4c221dbad0f33a83a49cad6b3fe8d5817ac83d38b6a19")\nif err != nil {\n  log.Fatal(err)\n}\n')),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u83b7\u53d6\u6211\u4eec\u5e0c\u671b\u7b7e\u540d\u7684\u6570\u636e\u7684Keccak-256\uff0c\u5728\u8fd9\u4e2a\u4f8b\u5b50\u91cc\uff0c\u5b83\u5c06\u662f",(0,o.kt)("em",{parentName:"p"},"hello"),"\u3002 go-ethereum",(0,o.kt)("inlineCode",{parentName:"p"},"crypto"),"\u5305\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b9\u4fbf\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Keccak256Hash"),"\u65b9\u6cd5\u6765\u5b9e\u73b0\u8fd9\u4e00\u76ee\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'data := []byte("hello")\nhash := crypto.Keccak256Hash(data)\nfmt.Println(hash.Hex()) // 0x1c8aff950685c2ed4bc3174f3472287b56d9517b9c948127319a09a7a36deac8\n')),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u4f7f\u7528\u79c1\u94a5\u7b7e\u540d\u54c8\u5e0c\uff0c\u5f97\u5230\u7b7e\u540d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"signature, err := crypto.Sign(hash.Bytes(), privateKey)\nif err != nil {\n  log.Fatal(err)\n}\n\nfmt.Println(hexutil.Encode(signature)) // 0x789a80053e4927d0a898db8e065e948f5cf086e32f9ccaa54c1908e22ac430c62621578113ddbb62d509bf6049b8fb544ab06d36f916685a2eb8e57ffadde02301\n")),(0,o.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u6210\u529f\u751f\u6210\u4e86\u7b7e\u540d\uff0c\u5728\u4e0b\u4e2a\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u9a8c\u8bc1\u7b7e\u540d\u786e\u5b9e\u662f\u7531\u8be5\u79c1\u94a5\u7684\u6301\u6709\u8005\u7b7e\u540d\u7684\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u5b8c\u6574\u4ee3\u7801"},"\u5b8c\u6574\u4ee3\u7801"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mhxw/eth-dev-with-go/blob/main/code/signature_generate.go"},"signature_generate.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "log"\n\n    "github.com/ethereum/go-ethereum/common/hexutil"\n    "github.com/ethereum/go-ethereum/crypto"\n)\n\nfunc main() {\n    privateKey, err := crypto.HexToECDSA("fad9c8855b740a0b7ed4c221dbad0f33a83a49cad6b3fe8d5817ac83d38b6a19")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    data := []byte("hello")\n    hash := crypto.Keccak256Hash(data)\n    fmt.Println(hash.Hex()) // 0x1c8aff950685c2ed4bc3174f3472287b56d9517b9c948127319a09a7a36deac8\n\n    signature, err := crypto.Sign(hash.Bytes(), privateKey)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    fmt.Println(hexutil.Encode(signature)) // 0x789a80053e4927d0a898db8e065e948f5cf086e32f9ccaa54c1908e22ac430c62621578113ddbb62d509bf6049b8fb544ab06d36f916685a2eb8e57ffadde02301\n}\n')))}s.isMDXComponent=!0}}]);