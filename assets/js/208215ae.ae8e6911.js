"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4693],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(t),g=a,f=m["".concat(i,".").concat(g)]||m[g]||k[g]||o;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9323:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return k}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],c={description:"Tutorial on how to read the 0x Protocol smart contract event logs with Go."},i="Reading 0x Protocol Event Logs",s={unversionedId:"en/event-read-0xprotocol/README",id:"en/event-read-0xprotocol/README",title:"Reading 0x Protocol Event Logs",description:"Tutorial on how to read the 0x Protocol smart contract event logs with Go.",source:"@site/docs/en/event-read-0xprotocol/README.md",sourceDirName:"en/event-read-0xprotocol",slug:"/en/event-read-0xprotocol/",permalink:"/eth-dev-with-go/docs/en/event-read-0xprotocol/",editUrl:"https://github.com/mhxw/eth-dev-with-go/tree/dev/docs/en/event-read-0xprotocol/README.md",tags:[],version:"current",frontMatter:{description:"Tutorial on how to read the 0x Protocol smart contract event logs with Go."},sidebar:"en",previous:{title:"Reading ERC-20 Token Event Logs",permalink:"/eth-dev-with-go/docs/en/event-read-erc20/"},next:{title:"Signatures",permalink:"/eth-dev-with-go/docs/en/signatures/"}},d={},k=[{value:"Full code",id:"full-code",level:3}],m={toc:k};function g(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reading-0x-protocol-event-logs"},"Reading 0x Protocol Event Logs"),(0,o.kt)("p",null,"To read ",(0,o.kt)("a",{parentName:"p",href:"https://0xproject.com/"},"0x Protocol")," event logs we must first compile the solidity smart contract to a Go package."),(0,o.kt)("p",null,"Install solc version ",(0,o.kt)("inlineCode",{parentName:"p"},"0.4.11")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g solc@0.4.11\n")),(0,o.kt)("p",null,"Create the 0x protocol exchange smart contract interface for event logs as ",(0,o.kt)("inlineCode",{parentName:"p"},"Exchange.sol"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity 0.4.11;\n\ncontract Exchange {\n    event LogFill(\n        address indexed maker,\n        address taker,\n        address indexed feeRecipient,\n        address makerToken,\n        address takerToken,\n        uint filledMakerTokenAmount,\n        uint filledTakerTokenAmount,\n        uint paidMakerFee,\n        uint paidTakerFee,\n        bytes32 indexed tokens, // keccak256(makerToken, takerToken), allows subscribing to a token pair\n        bytes32 orderHash\n    );\n\n    event LogCancel(\n        address indexed maker,\n        address indexed feeRecipient,\n        address makerToken,\n        address takerToken,\n        uint cancelledMakerTokenAmount,\n        uint cancelledTakerTokenAmount,\n        bytes32 indexed tokens,\n        bytes32 orderHash\n    );\n\n    event LogError(uint8 indexed errorId, bytes32 indexed orderHash);\n}\n")),(0,o.kt)("p",null,"Then use ",(0,o.kt)("inlineCode",{parentName:"p"},"abigen")," to create the Go ",(0,o.kt)("inlineCode",{parentName:"p"},"exchange")," package given the abi:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'solc --abi Exchange.sol\nabigen --abi="Exchange.sol:Exchange.abi" --pkg=exchange --out=Exchange.go\n')),(0,o.kt)("p",null,"Now in our Go application let's create the struct types matching the types of the 0xProtocol event log signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type LogFill struct {\n    Maker                  common.Address\n    Taker                  common.Address\n    FeeRecipient           common.Address\n    MakerToken             common.Address\n    TakerToken             common.Address\n    FilledMakerTokenAmount *big.Int\n    FilledTakerTokenAmount *big.Int\n    PaidMakerFee           *big.Int\n    PaidTakerFee           *big.Int\n    Tokens                 [32]byte\n    OrderHash              [32]byte\n}\n\ntype LogCancel struct {\n    Maker                     common.Address\n    FeeRecipient              common.Address\n    MakerToken                common.Address\n    TakerToken                common.Address\n    CancelledMakerTokenAmount *big.Int\n    CancelledTakerTokenAmount *big.Int\n    Tokens                    [32]byte\n    OrderHash                 [32]byte\n}\n\ntype LogError struct {\n    ErrorID   uint8\n    OrderHash [32]byte\n}\n")),(0,o.kt)("p",null,"Initialize the ethereum client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'client, err := ethclient.Dial("https://cloudflare-eth.com")\nif err != nil {\n  log.Fatal(err)\n}\n')),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"FilterQuery")," passing the 0x Protocol smart contract address and the desired block range:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// 0x Protocol Exchange smart contract address\ncontractAddress := common.HexToAddress("0x12459C951127e0c374FF9105DdA097662A027093")\nquery := ethereum.FilterQuery{\n  FromBlock: big.NewInt(6383482),\n  ToBlock:   big.NewInt(6383488),\n  Addresses: []common.Address{\n    contractAddress,\n  },\n}\n')),(0,o.kt)("p",null,"Query the logs with ",(0,o.kt)("inlineCode",{parentName:"p"},"FilterLogs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"logs, err := client.FilterLogs(context.Background(), query)\nif err != nil {\n  log.Fatal(err)\n}\n")),(0,o.kt)("p",null,"Next we'll parse the JSON abi, which we'll use to unpack the raw log data later:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"contractAbi, err := abi.JSON(strings.NewReader(string(exchange.ExchangeABI)))\nif err != nil {\n  log.Fatal(err)\n}\n")),(0,o.kt)("p",null,"In order to filter by certain log type, we need to figure out the keccak256 hash of each event log function signature. The event log function signature hash is always ",(0,o.kt)("inlineCode",{parentName:"p"},"topic[0]")," as we'll see soon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// NOTE: keccak256("LogFill(address,address,address,address,address,uint256,uint256,uint256,uint256,bytes32,bytes32)")\nlogFillEvent := common.HexToHash("0d0b9391970d9a25552f37d436d2aae2925e2bfe1b2a923754bada030c498cb3")\n\n// NOTE: keccak256("LogCancel(address,address,address,address,uint256,uint256,bytes32,bytes32)")\nlogCancelEvent := common.HexToHash("67d66f160bc93d925d05dae1794c90d2d6d6688b29b84ff069398a9b04587131")\n\n// NOTE: keccak256("LogError(uint8,bytes32)")\nlogErrorEvent := common.HexToHash("36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e90")\n')),(0,o.kt)("p",null,"Now we'll iterate through all the logs and set up a switch statement to filter by event log type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'for _, vLog := range logs {\n  fmt.Printf("Log Block Number: %d\\n", vLog.BlockNumber)\n  fmt.Printf("Log Index: %d\\n", vLog.Index)\n\n  switch vLog.Topics[0].Hex() {\n  case logFillEvent.Hex():\n    //\n  case logCancelEvent.Hex():\n    //\n  case logErrorEvent.Hex():\n    //\n  }\n}\n')),(0,o.kt)("p",null,"Now to parse ",(0,o.kt)("inlineCode",{parentName:"p"},"LogFill")," we'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"abi.Unpack")," to parse the raw log data into our log type struct. Unpack will not parse ",(0,o.kt)("inlineCode",{parentName:"p"},"indexed")," event types because those are stored under ",(0,o.kt)("inlineCode",{parentName:"p"},"topics"),", so for those we'll have to parse separately as seen in the example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Printf("Log Name: LogFill\\n")\n\nvar fillEvent LogFill\n\nerr := contractAbi.Unpack(&fillEvent, "LogFill", vLog.Data)\nif err != nil {\n  log.Fatal(err)\n}\n\nfillEvent.Maker = common.HexToAddress(vLog.Topics[1].Hex())\nfillEvent.FeeRecipient = common.HexToAddress(vLog.Topics[2].Hex())\nfillEvent.Tokens = vLog.Topics[3]\n\nfmt.Printf("Maker: %s\\n", fillEvent.Maker.Hex())\nfmt.Printf("Taker: %s\\n", fillEvent.Taker.Hex())\nfmt.Printf("Fee Recipient: %s\\n", fillEvent.FeeRecipient.Hex())\nfmt.Printf("Maker Token: %s\\n", fillEvent.MakerToken.Hex())\nfmt.Printf("Taker Token: %s\\n", fillEvent.TakerToken.Hex())\nfmt.Printf("Filled Maker Token Amount: %s\\n", fillEvent.FilledMakerTokenAmount.String())\nfmt.Printf("Filled Taker Token Amount: %s\\n", fillEvent.FilledTakerTokenAmount.String())\nfmt.Printf("Paid Maker Fee: %s\\n", fillEvent.PaidMakerFee.String())\nfmt.Printf("Paid Taker Fee: %s\\n", fillEvent.PaidTakerFee.String())\nfmt.Printf("Tokens: %s\\n", hexutil.Encode(fillEvent.Tokens[:]))\nfmt.Printf("Order Hash: %s\\n", hexutil.Encode(fillEvent.OrderHash[:]))\n')),(0,o.kt)("p",null,"Similarly for ",(0,o.kt)("inlineCode",{parentName:"p"},"LogCancel"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Printf("Log Name: LogCancel\\n")\n\nvar cancelEvent LogCancel\n\nerr := contractAbi.Unpack(&cancelEvent, "LogCancel", vLog.Data)\nif err != nil {\n  log.Fatal(err)\n}\n\ncancelEvent.Maker = common.HexToAddress(vLog.Topics[1].Hex())\ncancelEvent.FeeRecipient = common.HexToAddress(vLog.Topics[2].Hex())\ncancelEvent.Tokens = vLog.Topics[3]\n\nfmt.Printf("Maker: %s\\n", cancelEvent.Maker.Hex())\nfmt.Printf("Fee Recipient: %s\\n", cancelEvent.FeeRecipient.Hex())\nfmt.Printf("Maker Token: %s\\n", cancelEvent.MakerToken.Hex())\nfmt.Printf("Taker Token: %s\\n", cancelEvent.TakerToken.Hex())\nfmt.Printf("Cancelled Maker Token Amount: %s\\n", cancelEvent.CancelledMakerTokenAmount.String())\nfmt.Printf("Cancelled Taker Token Amount: %s\\n", cancelEvent.CancelledTakerTokenAmount.String())\nfmt.Printf("Tokens: %s\\n", hexutil.Encode(cancelEvent.Tokens[:]))\nfmt.Printf("Order Hash: %s\\n", hexutil.Encode(cancelEvent.OrderHash[:]))\n')),(0,o.kt)("p",null,"And finally for ",(0,o.kt)("inlineCode",{parentName:"p"},"LogError"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Printf("Log Name: LogError\\n")\n\nerrorID, err := strconv.ParseInt(vLog.Topics[1].Hex(), 16, 64)\nif err != nil {\n  log.Fatal(err)\n}\n\nerrorEvent := &LogError{\n  ErrorID:   uint8(errorID),\n  OrderHash: vLog.Topics[2],\n}\n\nfmt.Printf("Error ID: %d\\n", errorEvent.ErrorID)\nfmt.Printf("Order Hash: %s\\n", hexutil.Encode(errorEvent.OrderHash[:]))\n')),(0,o.kt)("p",null,"Putting it all together and running it we'll see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Log Block Number: 6383482\nLog Index: 35\nLog Name: LogFill\nMaker: 0x8dd688660ec0BaBD0B8a2f2DE3232645F73cC5eb\nTaker: 0xe269E891A2Ec8585a378882fFA531141205e92E9\nFee Recipient: 0xe269E891A2Ec8585a378882fFA531141205e92E9\nMaker Token: 0xD7732e3783b0047aa251928960063f863AD022D8\nTaker Token: 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2\nFilled Maker Token Amount: 240000000000000000000000\nFilled Taker Token Amount: 6930282000000000000\nPaid Maker Fee: 0\nPaid Taker Fee: 0\nTokens: 0xf08499c9e419ea8c08c4b991f88632593fb36baf4124c62758acb21898711088\nOrder Hash: 0x306a9a7ecbd9446559a2c650b4cfc16d1fb615aa2b3f4f63078da6d021268440\n\n\nLog Block Number: 6383482\nLog Index: 38\nLog Name: LogFill\nMaker: 0x04aa059b2e31B5898fAB5aB24761e67E8a196AB8\nTaker: 0xe269E891A2Ec8585a378882fFA531141205e92E9\nFee Recipient: 0xe269E891A2Ec8585a378882fFA531141205e92E9\nMaker Token: 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2\nTaker Token: 0xD7732e3783b0047aa251928960063f863AD022D8\nFilled Maker Token Amount: 6941718000000000000\nFilled Taker Token Amount: 240000000000000000000000\nPaid Maker Fee: 0\nPaid Taker Fee: 0\nTokens: 0x97ef123f2b566f36ab1e6f5d462a8079fbe34fa667b4eae67194b3f9cce60f2a\nOrder Hash: 0xac270e88ce27b6bb78ee5b68ebaef666a77195020a6ab8922834f07bc9e0d524\n\n\nLog Block Number: 6383488\nLog Index: 43\nLog Name: LogCancel\nMaker: 0x0004E79C978B95974dCa16F56B516bE0c50CC652\nFee Recipient: 0xA258b39954ceF5cB142fd567A46cDdB31a670124\nMaker Token: 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2\nTaker Token: 0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359\nCancelled Maker Token Amount: 30000000000000000000\nCancelled Taker Token Amount: 7274848425000000000000\nTokens: 0x9dd48110dcc444fdc242510c09bbbbe21a5975cac061d82f7b843bce061ba391\nOrder Hash: 0xe43eff38dc27af046bfbd431926926c072bbc7a509d56f6f1a7ae1f5ad7efe4f\n")),(0,o.kt)("p",null,"Compare the parsed log output to what's on etherscan: ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/tx/0xb73a4492c5db1f67930b25ce3869c1e6b9bdbccb239a23b6454925a5bc0e03c5"},"https://etherscan.io/tx/0xb73a4492c5db1f67930b25ce3869c1e6b9bdbccb239a23b6454925a5bc0e03c5")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"full-code"},"Full code"),(0,o.kt)("p",null,"Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'solc --abi Exchange.sol\nabigen --abi="Exchange.sol:Exchange.abi" --pkg=exchange --out=Exchange.go\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mhxw/eth-dev-with-go/blob/main/code/contracts_0xprotocol/Exchange.sol"},"Exchange.sol")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity 0.4.11;\n\ncontract Exchange {\n    event LogFill(\n        address indexed maker,\n        address taker,\n        address indexed feeRecipient,\n        address makerToken,\n        address takerToken,\n        uint filledMakerTokenAmount,\n        uint filledTakerTokenAmount,\n        uint paidMakerFee,\n        uint paidTakerFee,\n        bytes32 indexed tokens, // keccak256(makerToken, takerToken), allows subscribing to a token pair\n        bytes32 orderHash\n    );\n\n    event LogCancel(\n        address indexed maker,\n        address indexed feeRecipient,\n        address makerToken,\n        address takerToken,\n        uint cancelledMakerTokenAmount,\n        uint cancelledTakerTokenAmount,\n        bytes32 indexed tokens,\n        bytes32 orderHash\n    );\n\n    event LogError(uint8 indexed errorId, bytes32 indexed orderHash);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mhxw/eth-dev-with-go/blob/main/code/event_read.go"},"event_read_0xprotocol.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "log"\n    "math/big"\n    "strconv"\n    "strings"\n\n    exchange "./contracts_0xprotocol" // for demo\n    "github.com/ethereum/go-ethereum"\n    "github.com/ethereum/go-ethereum/accounts/abi"\n    "github.com/ethereum/go-ethereum/common"\n    "github.com/ethereum/go-ethereum/common/hexutil"\n    "github.com/ethereum/go-ethereum/ethclient"\n)\n\n// LogFill ...\ntype LogFill struct {\n    Maker                  common.Address\n    Taker                  common.Address\n    FeeRecipient           common.Address\n    MakerToken             common.Address\n    TakerToken             common.Address\n    FilledMakerTokenAmount *big.Int\n    FilledTakerTokenAmount *big.Int\n    PaidMakerFee           *big.Int\n    PaidTakerFee           *big.Int\n    Tokens                 [32]byte\n    OrderHash              [32]byte\n}\n\n// LogCancel ...\ntype LogCancel struct {\n    Maker                     common.Address\n    FeeRecipient              common.Address\n    MakerToken                common.Address\n    TakerToken                common.Address\n    CancelledMakerTokenAmount *big.Int\n    CancelledTakerTokenAmount *big.Int\n    Tokens                    [32]byte\n    OrderHash                 [32]byte\n}\n\n// LogError ...\ntype LogError struct {\n    ErrorID   uint8\n    OrderHash [32]byte\n}\n\nfunc main() {\n    client, err := ethclient.Dial("https://cloudflare-eth.com")\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // 0x Protocol Exchange smart contract address\n    contractAddress := common.HexToAddress("0x12459C951127e0c374FF9105DdA097662A027093")\n    query := ethereum.FilterQuery{\n        FromBlock: big.NewInt(6383482),\n        ToBlock:   big.NewInt(6383488),\n        Addresses: []common.Address{\n            contractAddress,\n        },\n    }\n\n    logs, err := client.FilterLogs(context.Background(), query)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    contractAbi, err := abi.JSON(strings.NewReader(string(exchange.ExchangeABI)))\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    // NOTE: keccak256("LogFill(address,address,address,address,address,uint256,uint256,uint256,uint256,bytes32,bytes32)")\n    logFillEvent := common.HexToHash("0d0b9391970d9a25552f37d436d2aae2925e2bfe1b2a923754bada030c498cb3")\n\n    // NOTE: keccak256("LogCancel(address,address,address,address,uint256,uint256,bytes32,bytes32)")\n    logCancelEvent := common.HexToHash("67d66f160bc93d925d05dae1794c90d2d6d6688b29b84ff069398a9b04587131")\n\n    // NOTE: keccak256("LogError(uint8,bytes32)")\n    logErrorEvent := common.HexToHash("36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e90")\n\n    for _, vLog := range logs {\n        fmt.Printf("Log Block Number: %d\\n", vLog.BlockNumber)\n        fmt.Printf("Log Index: %d\\n", vLog.Index)\n\n        switch vLog.Topics[0].Hex() {\n        case logFillEvent.Hex():\n            fmt.Printf("Log Name: LogFill\\n")\n\n            var fillEvent LogFill\n\n            err := contractAbi.Unpack(&fillEvent, "LogFill", vLog.Data)\n            if err != nil {\n                log.Fatal(err)\n            }\n\n            fillEvent.Maker = common.HexToAddress(vLog.Topics[1].Hex())\n            fillEvent.FeeRecipient = common.HexToAddress(vLog.Topics[2].Hex())\n            fillEvent.Tokens = vLog.Topics[3]\n\n            fmt.Printf("Maker: %s\\n", fillEvent.Maker.Hex())\n            fmt.Printf("Taker: %s\\n", fillEvent.Taker.Hex())\n            fmt.Printf("Fee Recipient: %s\\n", fillEvent.FeeRecipient.Hex())\n            fmt.Printf("Maker Token: %s\\n", fillEvent.MakerToken.Hex())\n            fmt.Printf("Taker Token: %s\\n", fillEvent.TakerToken.Hex())\n            fmt.Printf("Filled Maker Token Amount: %s\\n", fillEvent.FilledMakerTokenAmount.String())\n            fmt.Printf("Filled Taker Token Amount: %s\\n", fillEvent.FilledTakerTokenAmount.String())\n            fmt.Printf("Paid Maker Fee: %s\\n", fillEvent.PaidMakerFee.String())\n            fmt.Printf("Paid Taker Fee: %s\\n", fillEvent.PaidTakerFee.String())\n            fmt.Printf("Tokens: %s\\n", hexutil.Encode(fillEvent.Tokens[:]))\n            fmt.Printf("Order Hash: %s\\n", hexutil.Encode(fillEvent.OrderHash[:]))\n\n        case logCancelEvent.Hex():\n            fmt.Printf("Log Name: LogCancel\\n")\n\n            var cancelEvent LogCancel\n\n            err := contractAbi.Unpack(&cancelEvent, "LogCancel", vLog.Data)\n            if err != nil {\n                log.Fatal(err)\n            }\n\n            cancelEvent.Maker = common.HexToAddress(vLog.Topics[1].Hex())\n            cancelEvent.FeeRecipient = common.HexToAddress(vLog.Topics[2].Hex())\n            cancelEvent.Tokens = vLog.Topics[3]\n\n            fmt.Printf("Maker: %s\\n", cancelEvent.Maker.Hex())\n            fmt.Printf("Fee Recipient: %s\\n", cancelEvent.FeeRecipient.Hex())\n            fmt.Printf("Maker Token: %s\\n", cancelEvent.MakerToken.Hex())\n            fmt.Printf("Taker Token: %s\\n", cancelEvent.TakerToken.Hex())\n            fmt.Printf("Cancelled Maker Token Amount: %s\\n", cancelEvent.CancelledMakerTokenAmount.String())\n            fmt.Printf("Cancelled Taker Token Amount: %s\\n", cancelEvent.CancelledTakerTokenAmount.String())\n            fmt.Printf("Tokens: %s\\n", hexutil.Encode(cancelEvent.Tokens[:]))\n            fmt.Printf("Order Hash: %s\\n", hexutil.Encode(cancelEvent.OrderHash[:]))\n\n        case logErrorEvent.Hex():\n            fmt.Printf("Log Name: LogError\\n")\n\n            errorID, err := strconv.ParseInt(vLog.Topics[1].Hex(), 16, 64)\n            if err != nil {\n                log.Fatal(err)\n            }\n\n            errorEvent := &LogError{\n                ErrorID:   uint8(errorID),\n                OrderHash: vLog.Topics[2],\n            }\n\n            fmt.Printf("Error ID: %d\\n", errorEvent.ErrorID)\n            fmt.Printf("Order Hash: %s\\n", hexutil.Encode(errorEvent.OrderHash[:]))\n        }\n\n        fmt.Printf("\\n\\n")\n    }\n}\n')),(0,o.kt)("p",null,"solc version used for these examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ solc --version\n0.4.11+commit.68ef5810.Emscripten.clang\n")))}g.isMDXComponent=!0}}]);