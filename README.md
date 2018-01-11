# ethereumJS-sharding

[![Gitter](https://badges.gitter.im/EthereumJS-sharding/Lobby.svg)](https://gitter.im/EthereumJS-sharding/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This repo is planned to contain an implementation of sharding in Javascript.

It is expected that when [eWASM](https://github.com/ewasm/design) is implemented, next to Web Assembly, Javascript will be the most compatible and performant language with the virtual machine, due to [Web Assembly's design goals to implement compatibility with Javascipt](https://github.com/WebAssembly/design/blob/master/HighLevelGoals.md). Additionally, there is an operational [EthereumJS implementation](https://github.com/ethereumjs/ethereumjs-vm) to build a sharding implementation of, while eWASM is still under development, so it will be easier to build a sharding implementation on top of ethereumjs-vm than it will be to build on top of eWASM.

The very rough plans for development at this stage are to become more familiar with the [sharding code](https://github.com/ethereum/sharding)(a doc is available [here](https://github.com/ethereum/sharding/blob/develop/docs/doc.md)), as well as the [sharding implementation in Py-EVM as it develops](https://github.com/ethereum/py-evm/tree/sharding), then build an implementation in Javascript.

Compensation to developers at this stage can't be offered, as it would depend on some form of revenue, which isn't available at this stage. If revenue is obtained it will be shared accordingly and fairly with a budget. (A grant from the Ethereum Foundation has been applied for, as per [this blog post](https://blog.ethereum.org/2018/01/02/ethereum-scalability-research-development-subsidy-programs/).)
