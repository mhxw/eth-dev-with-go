"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3668],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=i,f=m["".concat(s,".").concat(g)]||m[g]||d[g]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6647:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={description:"Collection of useful Ethereum utility functions in Go."},s="Collection of Utility Functions",c={unversionedId:"en/util-go/README",id:"en/util-go/README",title:"Collection of Utility Functions",description:"Collection of useful Ethereum utility functions in Go.",source:"@site/docs/en/util-go/README.md",sourceDirName:"en/util-go",slug:"/en/util-go/",permalink:"/eth-dev-with-go/docs/en/util-go/",editUrl:"https://github.com/mhxw/eth-dev-with-go/tree/dev/docs/en/util-go/README.md",tags:[],version:"current",frontMatter:{description:"Collection of useful Ethereum utility functions in Go."},sidebar:"en",previous:{title:"Utilities",permalink:"/eth-dev-with-go/docs/en/util/"},next:{title:"Glossary",permalink:"/eth-dev-with-go/docs/en/GLOSSARY"}},u={},d=[{value:"Full code",id:"full-code",level:3}],m={toc:d};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"collection-of-utility-functions"},"Collection of Utility Functions"),(0,a.kt)("p",null,"The utility functions' implementation are found below in the ",(0,a.kt)("a",{parentName:"p",href:"#full-code"},"full code")," section. They are generous in what they accept. Here we'll be showing examples of usage."),(0,a.kt)("p",null,"Derive the Ethereum public address from a public key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'publicKeyBytes, _ := hex.DecodeString("049a7df67f79246283fdc93af76d4f8cdd62c4886e8cd870944e817dd0b97934fdd7719d0810951e03418205868a5c1b40b192451367f28e0088dd75e15de40c05")\naddress := util.PublicKeyBytesToAddress(publicKeyBytes)\nfmt.Println(address.Hex()) // 0x96216849c49358B10257cb55b28eA603c874b05E\n')),(0,a.kt)("p",null,"Check if an address is a valid Ethereum address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'valid := util.IsValidAddress("0x323b5d4c32345ced77393b3530b1eed0f346429d")\nfmt.Println(valid) // true\n')),(0,a.kt)("p",null,"Check if an address is a zero address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'zeroed := util.IsZeroAddress("0x0")\nfmt.Println(zeroed) // true\n')),(0,a.kt)("p",null,"Convert a decimal to wei. The second argument is the number of decimals."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"wei := util.ToWei(0.02, 18)\nfmt.Println(wei) // 20000000000000000\n")),(0,a.kt)("p",null,"Convert wei to decimals. The second argument is the number of decimals."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'wei := new(big.Int)\nwei.SetString("20000000000000000", 10)\neth := util.ToDecimal(wei, 18)\nfmt.Println(eth) // 0.02\n')),(0,a.kt)("p",null,"Calculate the gas cost given the gas limit and gas price."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'gasLimit := uint64(21000)\ngasPrice := new(big.Int)\ngasPrice.SetString("2000000000", 10)\ngasCost := util.CalcGasCost(gasLimit, gasPrice)\nfmt.Println(gasCost) // 42000000000000\n')),(0,a.kt)("p",null,"Retrieve the R, S, and V values from a signature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'sig := "0x789a80053e4927d0a898db8e065e948f5cf086e32f9ccaa54c1908e22ac430c62621578113ddbb62d509bf6049b8fb544ab06d36f916685a2eb8e57ffadde02301"\nr, s, v := util.SigRSV(sig)\nfmt.Println(hexutil.Encode(r[:])[2:]) // 789a80053e4927d0a898db8e065e948f5cf086e32f9ccaa54c1908e22ac430c6\nfmt.Println(hexutil.Encode(s[:])[2:]) // 2621578113ddbb62d509bf6049b8fb544ab06d36f916685a2eb8e57ffadde023\nfmt.Println(v)                        // 28\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"full-code"},"Full code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mhxw/eth-dev-with-go/blob/main/code/util/util.go"},"util.go")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package util\n\nimport (\n    "math/big"\n    "reflect"\n    "regexp"\n    "strconv"\n\n    "github.com/ethereum/go-ethereum/common"\n    "github.com/ethereum/go-ethereum/common/hexutil"\n    "github.com/shopspring/decimal"\n)\n\n// IsValidAddress validate hex address\nfunc IsValidAddress(iaddress interface{}) bool {\n    re := regexp.MustCompile("^0x[0-9a-fA-F]{40}$")\n    switch v := iaddress.(type) {\n    case string:\n        return re.MatchString(v)\n    case common.Address:\n        return re.MatchString(v.Hex())\n    default:\n        return false\n    }\n}\n\n// IsZeroAddress validate if it\'s a 0 address\nfunc IsZeroAddress(iaddress interface{}) bool {\n    var address common.Address\n    switch v := iaddress.(type) {\n    case string:\n        address = common.HexToAddress(v)\n    case common.Address:\n        address = v\n    default:\n        return false\n    }\n\n    zeroAddressBytes := common.FromHex("0x0000000000000000000000000000000000000000")\n    addressBytes := address.Bytes()\n    return reflect.DeepEqual(addressBytes, zeroAddressBytes)\n}\n\n// ToDecimal wei to decimals\nfunc ToDecimal(ivalue interface{}, decimals int) decimal.Decimal {\n    value := new(big.Int)\n    switch v := ivalue.(type) {\n    case string:\n        value.SetString(v, 10)\n    case *big.Int:\n        value = v\n    }\n\n    mul := decimal.NewFromFloat(float64(10)).Pow(decimal.NewFromFloat(float64(decimals)))\n    num, _ := decimal.NewFromString(value.String())\n    result := num.Div(mul)\n\n    return result\n}\n\n// ToWei decimals to wei\nfunc ToWei(iamount interface{}, decimals int) *big.Int {\n    amount := decimal.NewFromFloat(0)\n    switch v := iamount.(type) {\n    case string:\n        amount, _ = decimal.NewFromString(v)\n    case float64:\n        amount = decimal.NewFromFloat(v)\n    case int64:\n        amount = decimal.NewFromFloat(float64(v))\n    case decimal.Decimal:\n        amount = v\n    case *decimal.Decimal:\n        amount = *v\n    }\n\n    mul := decimal.NewFromFloat(float64(10)).Pow(decimal.NewFromFloat(float64(decimals)))\n    result := amount.Mul(mul)\n\n    wei := new(big.Int)\n    wei.SetString(result.String(), 10)\n\n    return wei\n}\n\n// CalcGasCost calculate gas cost given gas limit (units) and gas price (wei)\nfunc CalcGasCost(gasLimit uint64, gasPrice *big.Int) *big.Int {\n    gasLimitBig := big.NewInt(int64(gasLimit))\n    return gasLimitBig.Mul(gasLimitBig, gasPrice)\n}\n\n// SigRSV signatures R S V returned as arrays\nfunc SigRSV(isig interface{}) ([32]byte, [32]byte, uint8) {\n    var sig []byte\n    switch v := isig.(type) {\n    case []byte:\n        sig = v\n    case string:\n        sig, _ = hexutil.Decode(v)\n    }\n\n    sigstr := common.Bytes2Hex(sig)\n    rS := sigstr[0:64]\n    sS := sigstr[64:128]\n    R := [32]byte{}\n    S := [32]byte{}\n    copy(R[:], common.FromHex(rS))\n    copy(S[:], common.FromHex(sS))\n    vStr := sigstr[128:130]\n    vI, _ := strconv.Atoi(vStr)\n    V := uint8(vI + 27)\n\n    return R, S, V\n}\n')),(0,a.kt)("p",null,"test file: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mhxw/eth-dev-with-go/blob/main/code/util/util_test.go"},"util_test.go")))}g.isMDXComponent=!0}}]);