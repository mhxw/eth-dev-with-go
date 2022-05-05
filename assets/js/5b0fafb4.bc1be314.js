"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8687],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=i(t),p=a,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return t?r.createElement(f,c(c({ref:n},d),{},{components:t})):r.createElement(f,c({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6696:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],s={description:"Tutorial on how to query an ERC20 token smart contract with Go."},l="Querying an ERC20 Token Smart Contract",i={unversionedId:"en/smart-contract-read-erc20/README",id:"en/smart-contract-read-erc20/README",title:"Querying an ERC20 Token Smart Contract",description:"Tutorial on how to query an ERC20 token smart contract with Go.",source:"@site/docs/en/smart-contract-read-erc20/README.md",sourceDirName:"en/smart-contract-read-erc20",slug:"/en/smart-contract-read-erc20/",permalink:"/eth-dev-with-go/docs/en/smart-contract-read-erc20/",editUrl:"https://github.com/mhxw/eth-dev-with-go/tree/dev/docs/en/smart-contract-read-erc20/README.md",tags:[],version:"current",frontMatter:{description:"Tutorial on how to query an ERC20 token smart contract with Go."},sidebar:"en",previous:{title:"Reading Smart Contract Bytecode",permalink:"/eth-dev-with-go/docs/en/smart-contract-bytecode/"},next:{title:"Events",permalink:"/eth-dev-with-go/docs/en/events/"}},d={},u=[{value:"Full code",id:"full-code",level:3}],m={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"querying-an-erc20-token-smart-contract"},"Querying an ERC20 Token Smart Contract"),(0,o.kt)("p",null,"First create an ERC20 smart contract interface. This is just a contract with the function definitions of the functions that you can call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'pragma solidity ^0.4.24;\n\ncontract ERC20 {\n    string public constant name = "";\n    string public constant symbol = "";\n    uint8 public constant decimals = 0;\n\n    function totalSupply() public constant returns (uint);\n    function balanceOf(address tokenOwner) public constant returns (uint balance);\n    function allowance(address tokenOwner, address spender) public constant returns (uint remaining);\n    function transfer(address to, uint tokens) public returns (bool success);\n    function approve(address spender, uint tokens) public returns (bool success);\n    function transferFrom(address from, address to, uint tokens) public returns (bool success);\n\n    event Transfer(address indexed from, address indexed to, uint tokens);\n    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);\n}\n')),(0,o.kt)("p",null,"Then compile the smart contract to the JSON ABI, and create a Go token package out of the ABI using ",(0,o.kt)("inlineCode",{parentName:"p"},"abigen"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"solc --abi erc20.sol\nabigen --abi=erc20_sol_ERC20.abi --pkg=token --out=erc20.go\n")),(0,o.kt)("p",null,"Assuming we already have Ethereum client set up as usual, we can now import the new ",(0,o.kt)("em",{parentName:"p"},"token")," package into our application and instantiate it. In this example we'll be using the ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xa74476443119a942de498590fe1f2454d7d4ac0d"},"Golem")," token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'tokenAddress := common.HexToAddress("0xa74476443119A942dE498590Fe1f2454d7D4aC0d")\ninstance, err := token.NewToken(tokenAddress, client)\nif err != nil {\n  log.Fatal(err)\n}\n')),(0,o.kt)("p",null,"We may now call any ERC20 method that we like. For example, we can query the token balance of a user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'address := common.HexToAddress("0x0536806df512d6cdde913cf95c9886f65b1d3462")\nbal, err := instance.BalanceOf(&bind.CallOpts{}, address)\nif err != nil {\n  log.Fatal(err)\n}\n\nfmt.Printf("wei: %s\\n", bal) // "wei: 74605500647408739782407023"\n')),(0,o.kt)("p",null,"We can also read the public variables of the ERC20 smart contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'name, err := instance.Name(&bind.CallOpts{})\nif err != nil {\n  log.Fatal(err)\n}\n\nsymbol, err := instance.Symbol(&bind.CallOpts{})\nif err != nil {\n  log.Fatal(err)\n}\n\ndecimals, err := instance.Decimals(&bind.CallOpts{})\nif err != nil {\n  log.Fatal(err)\n}\n\nfmt.Printf("name: %s\\n", name)         // "name: Golem Network"\nfmt.Printf("symbol: %s\\n", symbol)     // "symbol: GNT"\nfmt.Printf("decimals: %v\\n", decimals) // "decimals: 18"\n')),(0,o.kt)("p",null,"We can do some simple math to convert the balance into a human readable decimal format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'fbal := new(big.Float)\nfbal.SetString(bal.String())\nvalue := new(big.Float).Quo(fbal, big.NewFloat(math.Pow10(int(decimals))))\n\nfmt.Printf("balance: %f", value) // "balance: 74605500.647409"\n')),(0,o.kt)("p",null,"See the same information on etherscan: ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/token/0xa74476443119a942de498590fe1f2454d7d4ac0d?a=0x0536806df512d6cdde913cf95c9886f65b1d3462"},"https://etherscan.io/token/0xa74476443119a942de498590fe1f2454d7d4ac0d?a=0x0536806df512d6cdde913cf95c9886f65b1d3462")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"full-code"},"Full code"),(0,o.kt)("p",null,"Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"solc --abi erc20.sol\nabigen --abi=erc20_sol_ERC20.abi --pkg=token --out=erc20.go\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mhxw/eth-dev-with-go/blob/main/code/contracts_erc20/erc20.sol"},"erc20.sol")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'pragma solidity ^0.4.24;\n\ncontract ERC20 {\n    string public constant name = "";\n    string public constant symbol = "";\n    uint8 public constant decimals = 0;\n\n    function totalSupply() public constant returns (uint);\n    function balanceOf(address tokenOwner) public constant returns (uint balance);\n    function allowance(address tokenOwner, address spender) public constant returns (uint remaining);\n    function transfer(address to, uint tokens) public returns (bool success);\n    function approve(address spender, uint tokens) public returns (bool success);\n    function transferFrom(address from, address to, uint tokens) public returns (bool success);\n\n    event Transfer(address indexed from, address indexed to, uint tokens);\n    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mhxw/eth-dev-with-go/blob/main/code/contract_read_erc20.go"},"contract_read_erc20.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "log"\n    "math"\n    "math/big"\n\n    "github.com/ethereum/go-ethereum/accounts/abi/bind"\n    "github.com/ethereum/go-ethereum/common"\n    "github.com/ethereum/go-ethereum/ethclient"\n\n    token "./contracts_erc20" // for demo\n)\n\nfunc main() {\n    client, err := ethclient.Dial("https://cloudflare-eth.com")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // Golem (GNT) Address\n    tokenAddress := common.HexToAddress("0xa74476443119A942dE498590Fe1f2454d7D4aC0d")\n    instance, err := token.NewToken(tokenAddress, client)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    address := common.HexToAddress("0x0536806df512d6cdde913cf95c9886f65b1d3462")\n    bal, err := instance.BalanceOf(&bind.CallOpts{}, address)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    name, err := instance.Name(&bind.CallOpts{})\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    symbol, err := instance.Symbol(&bind.CallOpts{})\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    decimals, err := instance.Decimals(&bind.CallOpts{})\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    fmt.Printf("name: %s\\n", name)         // "name: Golem Network"\n    fmt.Printf("symbol: %s\\n", symbol)     // "symbol: GNT"\n    fmt.Printf("decimals: %v\\n", decimals) // "decimals: 18"\n\n    fmt.Printf("wei: %s\\n", bal) // "wei: 74605500647408739782407023"\n\n    fbal := new(big.Float)\n    fbal.SetString(bal.String())\n    value := new(big.Float).Quo(fbal, big.NewFloat(math.Pow10(int(decimals))))\n\n    fmt.Printf("balance: %f", value) // "balance: 74605500.647409"\n}\n')),(0,o.kt)("p",null,"solc version used for these examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ solc --version\n0.4.24+commit.e67f0147.Emscripten.clang\n")))}p.isMDXComponent=!0}}]);