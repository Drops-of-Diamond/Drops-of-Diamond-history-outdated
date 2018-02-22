# Drops of Diamond

[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](https://github.com/Drops-of-Diamond/Drops-of-Diamond/blob/master/LICENSE)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Drops-of-Diamond/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Update 22 Feb 2017: my plans are to work on a stateless sharding implementation to integrate with Hera, EWasm and cppethereum. I decided not to go with Nimbus because an implementation developed with my current plan would be more performant. I have been reading through the Wasm spec, after that I plan to familiarise myself with EWasm, Hera, finish learning C++ (I got about halfway through a year ago) and cppethereum, as well as ethereum tests, other implementations, particularly py-evm. (I've already familiarised myself with the [sharding repo](https://github.com/ethereum/sharding)).

This repo is no longer planned to be improved, since there is already an implementation under way to develop sharding with [Nimbus](https://docs.google.com/document/d/14u65XVNLOd83cq3t7wNC9UPweZ6kPWvmXwRTWWn0diQ/edit?ts=5a7c1fd2#heading=h.neozr341c9fa), an implementation in Nim, which compiles to C++, and is therefore usable for [Hera](https://github.com/ewasm/hera), an "eWASM virtual machine conforming to the Ethereum VM C API". To contribute to Nimbus I would need to finish learning C++ (I got about halfway through on learncpp.com about a year ago), as well as learn Nim (I've already learnt Python) and also familiarise with EWASM.

This repo was an introduction to plans for developing an implementation of sharding in Web Assembly, with Drops of Diamond. The actual implementation is planned to be developed as a fork of eWASM [here](https://github.com/ewasm/evm2wasm), and maintain compatibility with the original repo in order to be potentially be merged with it.

For an introduction to Ethereum, see https://github.com/ethereum/wiki/wiki/Ethereum-introduction.

For an introduction to sharding, see https://github.com/ethereum/wiki/wiki/Sharding-and-stateless-client-implementations.

This repo and the Drops of Diamond project it belongs to is not a part of or owned by the Ethereum Foundation, nor is it endorsed by the Foundation. A different project name and logo may be used (the logo could use a more modern design rather than just using a photo in the public domain), and alternative proposals are welcome. The Drops of Diamond project is not legally incorporated as of yet, so legally it is not an organisation. That should be done, but probably only as needed once the project is more well-developed.

The very rough plans for development at this stage are:
- [x] to become more familiar with the [sharding code](https://github.com/ethereum/sharding) (a doc is available [here](https://github.com/ethereum/sharding/blob/develop/docs/doc.md));
- [ ] as well as familiarising with the [sharding implementation in Py-EVM as it develops](https://github.com/ethereum/py-evm/tree/sharding); and
- [ ] familiarising with the [WebAssembly implementation](https://github.com/ewasm/evm2wasm), then fork that repo and build a stateless sharding implementation on top of it.

Compensation to developers at this stage can't be offered, as it would depend on some form of revenue, which isn't available at this stage. However, revenue will be more likely to be obtained the more a product is demonstrated. All are welcome to contribute, in the spirit of open-soure code and friendly collaboration. If revenue is obtained it will be shared accordingly and fairly with a budget, after setting up a more formal organization, e.g. controlled in a similar fashion to how the Ethereum Foundation is run. (A grant from the Ethereum Foundation has been applied for, as per [this blog post](https://blog.ethereum.org/2018/01/02/ethereum-scalability-research-development-subsidy-programs/).) If you are interested in making a donation but would prefer to not send it to an individual, please say so on Gitter (click the badge above). It's probably best to have an MVP, or alpha or beta release, before actively raising funds.

For developer goals and tasks, refer to [Dev-goals.md](https://github.com/Drops-of-Diamond/Drops-of-Diamond/blob/master/Dev-goals.md).

Originally it was planned to have an implementation in JavaScript, but that plan has been scrapped. The rationale for building a sharding and stateless client implementation on top of Javascript was as follows: "It is expected that when [eWASM](https://github.com/ewasm/design) is implemented, after Web Assembly, Javascript will be the second-most compatible and performant language with the virtual machine, due to [Web Assembly's design goals to implement compatibility with Javascipt](https://github.com/WebAssembly/design/blob/master/HighLevelGoals.md). Additionally, there is an operational [EthereumJS implementation](https://github.com/ethereumjs/ethereumjs-vm) to build a sharding implementation of, while eWASM is still under development, so it will be easier to build a sharding implementation on top of ethereumjs-vm than it will be to build on top of eWASM." While building a stateless sharding implementation on top of Javascript may be faster, in the long-term it will be better to have it on Web Assembly, so one may as well start work on that now.
