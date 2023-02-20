/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniswapV2CSSR, UniswapV2CSSRInterface } from "../UniswapV2CSSR";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_uniswapFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WINDOW_SIZE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "blockState",
    outputs: [
      {
        internalType: "uint256",
        name: "blockTimestamp",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "stateRoot",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "denominator",
        type: "address",
      },
    ],
    name: "getExchangeRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "denominator",
        type: "address",
      },
    ],
    name: "getLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "observedData",
    outputs: [
      {
        internalType: "uint32",
        name: "reserveTimestamp",
        type: "uint32",
      },
      {
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
      {
        internalType: "uint256",
        name: "price0Data",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price1Data",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reserveTimestampSlotHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "accountProof",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "reserveProof",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "price0Proof",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "price1Proof",
        type: "bytes",
      },
    ],
    name: "saveReserve",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "reserveTimestamp",
            type: "uint32",
          },
          {
            internalType: "uint112",
            name: "reserve0",
            type: "uint112",
          },
          {
            internalType: "uint112",
            name: "reserve1",
            type: "uint112",
          },
          {
            internalType: "uint256",
            name: "price0Data",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price1Data",
            type: "uint256",
          },
        ],
        internalType: "struct ObservedData",
        name: "data",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "blockData",
        type: "bytes",
      },
    ],
    name: "saveState",
    outputs: [
      {
        internalType: "bytes32",
        name: "stateRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0Slot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1Slot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "window",
    outputs: [
      {
        internalType: "uint128",
        name: "from",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "to",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620028323803806200283283398101604081905262000034916200004a565b60601b6001600160601b0319166080526200007c565b6000602082840312156200005d57600080fd5b81516001600160a01b03811681146200007557600080fd5b9392505050565b60805160601c612789620000a960003960008181610167015281816103bb0152610bc201526127896000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638bdb2afa116100715780638bdb2afa1461016257806392f4e5ef146101a1578063cd9122a1146101a9578063ea06f26d14610240578063ea526de7146102aa578063ecba2694146102bd57600080fd5b8063016b9b6f146100b957806314f53e2f146100ec5780632432a15f14610128578063509ef27c1461013e578063545f51a414610147578063742362381461014f575b600080fd5b6100cc6100c7366004612440565b610311565b604080519384526020840192909252908201526060015b60405180910390f35b6101136100fa3660046124c5565b6001602081905260009182526040909120805491015482565b604080519283526020830191909152016100e3565b61013061037c565b6040519081526020016100e3565b61013061025881565b6101306103a2565b61013061015d366004612407565b6103b3565b6101897f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100e3565b610130610931565b6102046101b73660046124f7565b6002602081815260009384526040808520909152918352912080546001820154919092015463ffffffff8316926001600160701b036401000000008204811693600160901b909204169185565b6040805163ffffffff9690961686526001600160701b03948516602087015292909316918401919091526060830152608082015260a0016100e3565b61025361024e36600461251c565b610942565b6040516100e39190600060a08201905063ffffffff835116825260208301516001600160701b0380821660208501528060408601511660408501525050606083015160608301526080830151608083015292915050565b6101306102b8366004612407565b610bba565b6102f16102cb3660046124c5565b6000602081905290815260409020546001600160801b0380821691600160801b90041682565b604080516001600160801b039384168152929091166020830152016100e3565b600080600061031f84610ee8565b600081815260016020526040902054929550935091501561033f57610375565b60408051808201825282815260208082018681526000868152600192839052939093209151825591519101556103758282610ffb565b9193909250565b6040805160096020820152015b6040516020818303038152906040528051906020012081565b604080516008602082015201610389565b6000806103e17f00000000000000000000000000000000000000000000000000000000000000008585611139565b905060008060006103f142611211565b815260208082019290925260409081016000208151808301909252546001600160801b038082168352600160801b909104169181018290529150806104aa5760008061025861043f42611211565b61044991906126a4565b8152602081019190915260400160002054600160801b90046001600160801b03169050806104aa5760405162461bcd60e51b8152602060048201526009602482015268085bd89cd95c9d995960ba1b60448201526064015b60405180910390fd5b6001600160801b0381166000908152600160208181526040928390208351808501909452805480855292015490830152610258906104e890426126a4565b1061051d5760405162461bcd60e51b81526020600482015260056024820152647374616c6560d81b60448201526064016104a1565b6000866001600160a01b0316856001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561056257600080fd5b505afa158015610576573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059a91906123ea565b6001600160a01b031614156105b15750600161068b565b866001600160a01b0316856001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156105f457600080fd5b505afa158015610608573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062c91906123ea565b6001600160a01b031614156106435750600061068b565b60405162461bcd60e51b815260206004820152601960248201527f64656e6f6d696e6174696f6e546f6b656e20696e76616c69640000000000000060448201526064016104a1565b6001600160801b03831660009081526002602081815260408084206001600160a01b038a1685528252808420815160a081018352815463ffffffff811682526001600160701b036401000000008204811695830195909552600160901b90049093169183019190915260018101546060830152909101546080820152906107638361071a578260400151610720565b82602001515b8461072f578360200151610735565b83604001515b8561074457846060015161074a565b84608001515b8551885161075e9163ffffffff16906126a4565b611230565b90506000806000896001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156107a357600080fd5b505afa1580156107b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107db9190612475565b92509250925060006108fc876107f157836107f3565b845b886107fe5785610800565b845b8961087b578d6001600160a01b0316635909c0d56040518163ffffffff1660e01b815260040160206040518083038186803b15801561083e57600080fd5b505afa158015610852573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087691906124de565b6108ec565b8d6001600160a01b0316635a3d54936040518163ffffffff1660e01b815260040160206040518083038186803b1580156108b457600080fd5b505afa1580156108c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ec91906124de565b61075e63ffffffff8716426126a4565b885190915061090b90426126a4565b61091586836126a4565b61091f9190612620565b9e9d5050505050505050505050505050565b60408051600a602082015201610389565b6040805160a08101825260008082526020808301829052828401829052606083018290526080830182905289825260018082528483200154600282528483206001600160a01b038b1684529091529290205490919063ffffffff1615610a1b57505060008681526002602081815260408084206001600160a01b038a168552825292839020835160a081018552815463ffffffff811682526001600160701b036401000000008204811694830194909452600160901b900490921693820193909352600183015460608201529101546080820152610bb0565b6000610a28888389611282565b9050610a84610a69610a64836008604051602001610a4891815260200190565b604051602081830303815290604052805190602001208a611309565b61169d565b6001600160701b0380821692607083901c9091169160e01c90565b63ffffffff1685526001600160701b03908116604080870191909152911660208086019190915281516009818301528251808203830181529083019092528151910120610ad790610a6490839088611309565b606084015260408051600a6020820152610b0e91610a64918491016040516020818303038152906040528051906020012087611309565b6080840190815260008a81526002602081815260408084206001600160a01b038e16855282529283902087518154928901519489015163ffffffff90911671ffffffffffffffffffffffffffffffffffff19909316929092176401000000006001600160701b03958616021771ffffffffffffffffffffffffffffffffffff16600160901b949092169390930217825560608601516001830155915191015550505b9695505050505050565b600080610be87f00000000000000000000000000000000000000000000000000000000000000008585611139565b90506000806000610bf842611211565b815260208082019290925260409081016000208151808301909252546001600160801b038082168352600160801b90910416918101829052915080610cac57600080610258610c4642611211565b610c5091906126a4565b8152602081019190915260400160002054600160801b90046001600160801b0316905080610cac5760405162461bcd60e51b8152602060048201526009602482015268085bd89cd95c9d995960ba1b60448201526064016104a1565b6001600160801b038116600090815260016020818152604092839020835180850190945280548085529201549083015261025890610cea90426126a4565b10610d1f5760405162461bcd60e51b81526020600482015260056024820152647374616c6560d81b60448201526064016104a1565b6000866001600160a01b0316856001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015610d6457600080fd5b505afa158015610d78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9c91906123ea565b6001600160a01b03161415610db357506001610e41565b866001600160a01b0316856001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b158015610df657600080fd5b505afa158015610e0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2e91906123ea565b6001600160a01b03161415610643575060005b6001600160801b03831660009081526002602081815260408084206001600160a01b038a168552825292839020835160a081018552815463ffffffff811682526001600160701b036401000000008204811694830194909452600160901b90049092169382019390935260018301546060820152910154608082015281610ecc578060400151610ed2565b80602001515b6001600160701b03169998505050505050505050565b6000806000610f51565b62461bcd60e51b6000526020600452816024528060445250806044016000fd5b600080825160001a6080811060018114610f31578015610f3d57610f4a565b84935060019250610f4a565b6001850193506080820392505b5050915091565b83516020850194607b8101906101e001610f6a81610f12565b019050610f7681610f12565b9150818101610f8481610f12565b019050610f9081610f12565b019050610f9c81610f12565b9150825160088502610100031c965086409350858a209550858414610fdd57610fdd6014730c4d8dec6d690c2e6d040427a40e4d8e090c2e6d60631b610ef2565b84519850805160088302610100031c97505050505050509193909250565b600061100682611211565b600081815260208181526040918290208251808401909352546001600160801b03808216808552600160801b909204169183019190915291925090158015611059575060208101516001600160801b0316155b156110805750604080518082019091526001600160801b0384168082526020820152611106565b80516001600160801b03808616911611156110c7576040518060400160405280856001600160801b0316815260200182602001516001600160801b03168152509050611106565b836001600160801b031681602001516001600160801b03161015611106576040805180820190915290516001600160801b039081168252841660208201525b600091825260208281526040909220815192909101516001600160801b03908116600160801b0292169190911790555050565b600080600061114885856116b0565b6040516001600160601b0319606084811b8216602084015283901b16603482015291935091508690604801604051602081830303815290604052805190602001206040516020016111e69291906001600160f81b0319815260609290921b6001600160601b031916600183015260158201527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f603582015260550190565b60408051601f1981840301815291905280516020909101206001600160a01b03169695505050505050565b60006102586112208184612620565b61122a9190612685565b92915050565b60008161123e57508161127a565b61125a8461124b876117a8565b6001600160e01b0316906117c1565b61126d906001600160e01b031683612685565b61127790846125e2565b90505b949350505050565b6040516001600160601b0319606085901b16602082015260009081906112c39085906034016040516020818303038152906040528051906020012085611309565b905060006112d86112d3836117d6565b611825565b90506112fd816002815181106112f0576112f0612738565b6020026020010151611944565b925050505b9392505050565b60606000611316836117d6565b9050600061132382611825565b604080516021808252606082810190935292935090918291899160009182916020820181803683370190505090508960218201526113608161194f565b90506113858660008151811061137857611378612738565b6020026020010151611b07565b945060005b865181101561165b5781518311156113d45760405162461bcd60e51b815260206004820152600d60248201526c50617468206f766572666c6f7760981b60448201526064016104a1565b6113e987828151811061137857611378612738565b95508580519060200120841461143a5760405162461bcd60e51b81526020600482015260166024820152756e6f646520646f65736e2774206d61746368206b657960501b60448201526064016104a1565b61145c87828151811061144f5761144f612738565b6020026020010151611825565b94508451601114156115315781518314156114a3576114948560108151811061148757611487612738565b6020026020010151611bab565b98505050505050505050611302565b60008284815181106114b7576114b7612738565b016020015160f81c905060108111156115045760405162461bcd60e51b815260206004820152600f60248201526e6e6962626c6520746f6f206c6f6e6760881b60448201526064016104a1565b61151c868260ff16815181106112f0576112f0612738565b94506115296001856125e2565b935050611649565b8451600214156116015761155b6115548660008151811061148757611487612738565b8385611c22565b61156590846125e2565b92508151831415611586576114948560018151811061148757611487612738565b61159f6115548660008151811061148757611487612738565b6115e45760405162461bcd60e51b8152602060048201526016602482015275696e76616c696420657874656e73696f6e206e6f646560501b60448201526064016104a1565b6115fa856001815181106112f0576112f0612738565b9350611649565b60405162461bcd60e51b815260206004820152601760248201527f756e6578706563746564206c656e67746820617272617900000000000000000060448201526064016104a1565b80611653816126bb565b91505061138a565b5060405162461bcd60e51b81526020600482015260166024820152756e6f7420656e6f7567682070726f6f66206e6f64657360501b60448201526064016104a1565b600061122a6116ab836117d6565b611d2c565b600080826001600160a01b0316846001600160a01b031614156117235760405162461bcd60e51b815260206004820152602560248201527f556e697377617056324c6962726172793a204944454e544943414c5f41444452604482015264455353455360d81b60648201526084016104a1565b826001600160a01b0316846001600160a01b031610611743578284611746565b83835b90925090506001600160a01b0382166117a15760405162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f41444452455353000060448201526064016104a1565b9250929050565b600061122a600160701b6001600160701b038416612656565b60006113026001600160701b038316846125fa565b604080518082019091526000808252602082015281518061180c5750506040805180820190915260008082526020820152919050565b6040805180820190915260209384018152928301525090565b606061183082611e2a565b6118735760405162461bcd60e51b8152602060048201526014602482015273526c702e736f6c3a526c703a746f4c6973743a3160601b60448201526064016104a1565b600061187e83611e51565b905060008167ffffffffffffffff81111561189b5761189b61274e565b6040519080825280602002602001820160405280156118e057816020015b60408051808201909152600080825260208201528152602001906001900390816118b95790505b50905060006118ee85611ed9565b905060005b6118fc82611f98565b1561193a5761190a82611fbc565b83828151811061191c5761191c612738565b60200260200101819052508080611932906126bb565b9150506118f3565b5090949350505050565b600061122a82611d2c565b6060808251600014156119625792915050565b60008061197060008661204f565b60f81c9050600181148061198757508060ff166003145b15611a2f5760018551600261199c9190612685565b6119a691906126a4565b67ffffffffffffffff8111156119be576119be61274e565b6040519080825280601f01601f1916602001820160405280156119e8576020820181803683370190505b50925060006119f860018761204f565b90508084600081518110611a0e57611a0e612738565b60200101906001600160f81b031916908160001a9053506001925050611a93565b600285516002611a3f9190612685565b611a4991906126a4565b67ffffffffffffffff811115611a6157611a6161274e565b6040519080825280601f01601f191660200182016040528015611a8b576020820181803683370190505b509250600091505b60ff82165b8351811015611afd57611ac2611ab160ff8516836126a4565b611abc9060026125e2565b8761204f565b848281518110611ad457611ad4612738565b60200101906001600160f81b031916908160001a90535080611af5816126bb565b915050611a98565b5091949350505050565b602081015160609080611b545760405162461bcd60e51b81526020600482015260156024820152742936381739b7b61d2936381d3a37a13cba32b99d1960591b60448201526064016104a1565b60608167ffffffffffffffff811115611b6f57611b6f61274e565b6040519080825280601f01601f191660200182016040528015611b99576020820181803683370190505b509050611302846000015182846120d0565b6060611bb68261210e565b611bbf57600080fd5b600080611bcb84612134565b9150915060608167ffffffffffffffff811115611bea57611bea61274e565b6040519080825280601f01601f191660200182016040528015611c14576020820181803683370190505b50905061127a8382846120d0565b6000806000611c308661194f565b90506000815167ffffffffffffffff811115611c4e57611c4e61274e565b6040519080825280601f01601f191660200182016040528015611c78576020820181803683370190505b509050845b8251611c8990876125e2565b811015611cfc576000878281518110611ca457611ca4612738565b01602001516001600160f81b03191690508083611cc189856126a4565b81518110611cd157611cd1612738565b60200101906001600160f81b031916908160001a905350508080611cf4906126bb565b915050611c7d565b50808051906020012082805190602001201415611d1c5781519250611d21565b600092505b509095945050505050565b6000611d378261210e565b611d7a5760405162461bcd60e51b8152602060048201526014602482015273526c702e736f6c3a526c703a746f55696e743a3160601b60448201526064016104a1565b600080611d8684612134565b915091506020811115611dd25760405162461bcd60e51b8152602060048201526014602482015273526c702e736f6c3a526c703a746f55696e743a3360601b60448201526064016104a1565b80611e165760405162461bcd60e51b8152602060048201526014602482015273149b1c0b9cdbdb0e949b1c0e9d1bd55a5b9d0e8d60621b60448201526064016104a1565b90516020919091036101000a900492915050565b6000816020015160001415611e4157506000919050565b50515160c060009190911a101590565b6000611e5c82611e2a565b611e6857506000919050565b81518051600090811a9190611e7c85612212565b611e8690836125e2565b905060006001866020015184611e9c91906125e2565b611ea691906126a4565b905060005b818311610bb057611ebb83612298565b611ec590846125e2565b925080611ed1816126bb565b915050611eab565b6040805160808101825260009181018281526060820183905281526020810191909152611f0582611e2a565b611f4a5760405162461bcd60e51b8152602060048201526016602482015275526c702e736f6c3a526c703a6974657261746f723a3160501b60448201526064016104a1565b6000611f5583612212565b8351611f6191906125e2565b9050611f8c604080516080810182526000918101828152606082018390528152602081019190915290565b92835260208301525090565b80516020810151815160009291611fae916125e2565b836020015110915050919050565b6040805180820190915260008082526020820152611fd982611f98565b61201a5760405162461bcd60e51b8152602060048201526012602482015271526c702e736f6c3a526c703a6e6578743a3160701b60448201526064016104a1565b6020820151600061202a82612298565b82845260208401819052905061204081836125e2565b60209094019390935250919050565b600061205c6002846126d6565b156120965760108261206f600286612620565b8151811061207f5761207f612738565b0160200151612091919060f81c6126ea565b6120c6565b6010826120a4600286612620565b815181106120b4576120b4612738565b01602001516120c6919060f81c612634565b60f81b9392505050565b6020601f820104836020840160005b838110156120fb576020810283810151908301526001016120df565b5050505060008251602001830152505050565b600081602001516000141561212557506000919050565b50515160c060009190911a1090565b6000806121408361210e565b6121845760405162461bcd60e51b8152602060048201526015602482015274526c702e736f6c3a526c703a5f6465636f64653a3160581b60448201526064016104a1565b8251805160001a9060808210156121a057946001945092505050565b60b88210156121ce57600185602001516121ba91906126a4565b92506121c78160016125e2565b9350610f4a565b602085015160b61983019081906121e7906001906126a4565b6121f191906126a4565b93506121fd81836125e2565b6122089060016125e2565b9450505050915091565b600081602001516000141561222957506000919050565b8151805160001a906080821015612244575060009392505050565b60b882108061225f575060c0821015801561225f575060f882105b1561226e575060019392505050565b60c082101561228d5761228260b7836126a4565b61127a9060016125e2565b61228260f7836126a4565b8051600090811a60808110156122b15760019150612330565b60b88110156122d7576122c56080826126a4565b6122d09060016125e2565b9150612330565b60c081101561230057600183015160b76020839003016101000a9004810160b519019150612330565b60f8811015612314576122c560c0826126a4565b600183015160f76020839003016101000a9004810160f5190191505b50919050565b803561234181612764565b919050565b600082601f83011261235757600080fd5b813567ffffffffffffffff808211156123725761237261274e565b604051601f8301601f19908116603f0116810190828211818310171561239a5761239a61274e565b816040528381528660208588010111156123b357600080fd5b836020870160208301376000602085830101528094505050505092915050565b80516001600160701b038116811461234157600080fd5b6000602082840312156123fc57600080fd5b815161130281612764565b6000806040838503121561241a57600080fd5b823561242581612764565b9150602083013561243581612764565b809150509250929050565b60006020828403121561245257600080fd5b813567ffffffffffffffff81111561246957600080fd5b61127a84828501612346565b60008060006060848603121561248a57600080fd5b612493846123d3565b92506124a1602085016123d3565b9150604084015163ffffffff811681146124ba57600080fd5b809150509250925092565b6000602082840312156124d757600080fd5b5035919050565b6000602082840312156124f057600080fd5b5051919050565b6000806040838503121561250a57600080fd5b82359150602083013561243581612764565b60008060008060008060c0878903121561253557600080fd5b8635955061254560208801612336565b9450604087013567ffffffffffffffff8082111561256257600080fd5b61256e8a838b01612346565b9550606089013591508082111561258457600080fd5b6125908a838b01612346565b945060808901359150808211156125a657600080fd5b6125b28a838b01612346565b935060a08901359150808211156125c857600080fd5b506125d589828a01612346565b9150509295509295509295565b600082198211156125f5576125f561270c565b500190565b60006001600160e01b038381168061261457612614612722565b92169190910492915050565b60008261262f5761262f612722565b500490565b600060ff83168061264757612647612722565b8060ff84160491505092915050565b60006001600160e01b038281168482168115158284048211161561267c5761267c61270c565b02949350505050565b600081600019048311821515161561269f5761269f61270c565b500290565b6000828210156126b6576126b661270c565b500390565b60006000198214156126cf576126cf61270c565b5060010190565b6000826126e5576126e5612722565b500690565b600060ff8316806126fd576126fd612722565b8060ff84160691505092915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461277957600080fd5b5056fea164736f6c6343000807000a";

export class UniswapV2CSSR__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _uniswapFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV2CSSR> {
    return super.deploy(
      _uniswapFactory,
      overrides || {}
    ) as Promise<UniswapV2CSSR>;
  }
  getDeployTransaction(
    _uniswapFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_uniswapFactory, overrides || {});
  }
  attach(address: string): UniswapV2CSSR {
    return super.attach(address) as UniswapV2CSSR;
  }
  connect(signer: Signer): UniswapV2CSSR__factory {
    return super.connect(signer) as UniswapV2CSSR__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2CSSRInterface {
    return new utils.Interface(_abi) as UniswapV2CSSRInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2CSSR {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2CSSR;
  }
}