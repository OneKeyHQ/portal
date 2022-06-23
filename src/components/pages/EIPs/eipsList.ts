export const EIPs = {
  EIP2: {
    id: 'EIP-2',
    title: 'Homestead Hard-fork Changes',
  },
  EIP4: {
    id: 'EIP-4',
    title: 'EIP Classification',
  },
  EIP5: {
    id: 'EIP-5',
    title: 'Gas Usage for `RETURN` and `CALL*`',
  },
  EIP6: {
    id: 'EIP-6',
    title: 'Renaming SUICIDE opcode',
  },
  EIP7: {
    id: 'EIP-7',
    title: 'DELEGATECALL',
  },
  EIP8: {
    id: 'EIP-8',
    title: 'devp2p Forward Compatibility Requirements for Homestead',
  },
  EIP20: {
    id: 'EIP-20',
    title: 'Token Standard',
  },
  EIP55: {
    id: 'EIP-55',
    title: 'Mixed-case checksum address encoding',
  },
  EIP100: {
    id: 'EIP-100',
    title:
      'Change difficulty adjustment to target mean block time including uncles',
  },
  EIP137: {
    id: 'EIP-137',
    title: 'Ethereum Domain Name Service - Specification',
  },
  EIP140: {
    id: 'EIP-140',
    title: 'REVERT instruction',
  },
  EIP141: {
    id: 'EIP-141',
    title: 'Designated invalid EVM instruction',
  },
  EIP145: {
    id: 'EIP-145',
    title: 'Bitwise shifting instructions in EVM',
  },
  EIP150: {
    id: 'EIP-150',
    title: 'Gas cost changes for IO-heavy operations',
  },
  EIP152: {
    id: 'EIP-152',
    title: 'Add BLAKE2 compression function `F` precompile',
  },
  EIP155: {
    id: 'EIP-155',
    title: 'Simple replay attack protection',
  },
  EIP158: {
    id: 'EIP-158',
    title: 'State clearing',
  },
  EIP160: {
    id: 'EIP-160',
    title: 'EXP cost increase',
  },
  EIP161: {
    id: 'EIP-161',
    title: 'State trie clearing (invariant-preserving alternative)',
  },
  EIP162: {
    id: 'EIP-162',
    title: 'Initial ENS Hash Registrar',
  },
  EIP165: {
    id: 'EIP-165',
    title: 'Standard Interface Detection',
  },
  EIP170: {
    id: 'EIP-170',
    title: 'Contract code size limit',
  },
  EIP181: {
    id: 'EIP-181',
    title: 'ENS support for reverse resolution of Ethereum addresses',
  },
  EIP190: {
    id: 'EIP-190',
    title: 'Ethereum Smart Contract Packaging Standard',
  },
  EIP191: {
    id: 'EIP-191',
    title: 'Signed Data Standard',
  },
  EIP196: {
    id: 'EIP-196',
    title:
      'Precompiled contracts for addition and scalar multiplication on the elliptic curve alt_bn128',
  },
  EIP197: {
    id: 'EIP-197',
    title:
      'Precompiled contracts for optimal ate pairing check on the elliptic curve alt_bn128',
  },
  EIP198: {
    id: 'EIP-198',
    title: 'Big integer modular exponentiation',
  },
  EIP211: {
    id: 'EIP-211',
    title: 'New opcodes: RETURNDATASIZE and RETURNDATACOPY',
  },
  EIP214: {
    id: 'EIP-214',
    title: 'New opcode STATICCALL',
  },
  EIP225: {
    id: 'EIP-225',
    title: 'Clique proof-of-authority consensus protocol',
  },
  EIP234: {
    id: 'EIP-234',
    title: 'Add `blockHash` to JSON-RPC filter options.',
  },
  EIP600: {
    id: 'EIP-600',
    title: 'Ethereum purpose allocation for Deterministic Wallets',
  },
  EIP601: {
    id: 'EIP-601',
    title: 'Ethereum hierarchy for deterministic wallets',
  },
  EIP606: {
    id: 'EIP-606',
    title: 'Hardfork Meta: Homestead',
  },
  EIP607: {
    id: 'EIP-607',
    title: 'Hardfork Meta: Spurious Dragon',
  },
  EIP608: {
    id: 'EIP-608',
    title: 'Hardfork Meta: Tangerine Whistle',
  },
  EIP609: {
    id: 'EIP-609',
    title: 'Hardfork Meta: Byzantium',
  },
  EIP627: {
    id: 'EIP-627',
    title: 'Whisper Specification',
  },
  EIP649: {
    id: 'EIP-649',
    title: 'Metropolis Difficulty Bomb Delay and Block Reward Reduction',
  },
  EIP658: {
    id: 'EIP-658',
    title: 'Embedding transaction status code in receipts',
  },
  EIP681: {
    id: 'EIP-681',
    title: 'URL Format for Transaction Requests',
  },
  EIP695: {
    id: 'EIP-695',
    title: 'Create `eth_chainId` method for JSON-RPC',
  },
  EIP706: {
    id: 'EIP-706',
    title: 'DEVp2p snappy compression',
  },
  EIP721: {
    id: 'EIP-721',
    title: 'Non-Fungible Token Standard',
  },
  EIP777: {
    id: 'EIP-777',
    title: 'Token Standard',
  },
  EIP778: {
    id: 'EIP-778',
    title: 'Ethereum Node Records (ENR)',
  },
  EIP779: {
    id: 'EIP-779',
    title: 'Hardfork Meta: DAO Fork',
  },
  EIP820: {
    id: 'EIP-820',
    title: 'Pseudo-introspection Registry Contract',
  },
  EIP868: {
    id: 'EIP-868',
    title: 'Node Discovery v4 ENR Extension',
  },
  EIP1013: {
    id: 'EIP-1013',
    title: 'Hardfork Meta: Constantinople',
  },
  EIP1014: {
    id: 'EIP-1014',
    title: 'Skinny CREATE2',
  },
  EIP1052: {
    id: 'EIP-1052',
    title: 'EXTCODEHASH opcode',
  },
  EIP1108: {
    id: 'EIP-1108',
    title: 'Reduce alt_bn128 precompile gas costs',
  },
  EIP1155: {
    id: 'EIP-1155',
    title: 'Multi Token Standard',
  },
  EIP1167: {
    id: 'EIP-1167',
    title: 'Minimal Proxy Contract',
  },
  EIP1193: {
    id: 'EIP-1193',
    title: 'Ethereum Provider JavaScript API',
  },
  EIP1234: {
    id: 'EIP-1234',
    title: 'Constantinople Difficulty Bomb Delay and Block Reward Adjustment',
  },
  EIP1271: {
    id: 'EIP-1271',
    title: 'Standard Signature Validation Method for Contracts',
  },
  EIP1283: {
    id: 'EIP-1283',
    title: 'Net gas metering for SSTORE without dirty maps',
  },
  EIP1344: {
    id: 'EIP-1344',
    title: 'ChainID opcode',
  },
  EIP1363: {
    id: 'EIP-1363',
    title: ' Payable Token',
  },
  EIP1559: {
    id: 'EIP-1559',
    title: 'Fee market change for ETH 1.0 chain',
  },
  EIP1679: {
    id: 'EIP-1679',
    title: 'Hardfork Meta: Istanbul',
  },
  EIP1716: {
    id: 'EIP-1716',
    title: 'Hardfork Meta: Petersburg',
  },
  EIP1820: {
    id: 'EIP-1820',
    title: 'Pseudo-introspection Registry Contract',
  },
  EIP1884: {
    id: 'EIP-1884',
    title: 'Repricing for trie-size-dependent opcodes',
  },
  EIP1967: {
    id: 'EIP-1967',
    title: 'Standard Proxy Storage Slots',
  },
  EIP2028: {
    id: 'EIP-2028',
    title: 'Transaction data gas cost reduction',
  },
  EIP2098: {
    id: 'EIP-2098',
    title: 'Compact Signature Representation',
  },
  EIP2124: {
    id: 'EIP-2124',
    title: 'Fork identifier for chain compatibility checks',
  },
  EIP2159: {
    id: 'EIP-2159',
    title: 'Common Prometheus Metrics Names for Clients',
  },
  EIP2200: {
    id: 'EIP-2200',
    title: 'Structured Definitions for Net Gas Metering',
  },
  EIP2228: {
    id: 'EIP-2228',
    title: ' Canonicalize the name of network ID 1 and chain ID 1',
  },
  EIP2309: {
    id: 'EIP-2309',
    title: 'ERC-721 Consecutive Transfer Extension',
  },
  EIP2364: {
    id: 'EIP-2364',
    title: 'eth/64: forkid-extended protocol handshake',
  },
  EIP2384: {
    id: 'EIP-2384',
    title: 'Muir Glacier Difficulty Bomb Delay',
  },
  EIP2387: {
    id: 'EIP-2387',
    title: 'Hardfork Meta: Muir Glacier',
  },
  EIP2464: {
    id: 'EIP-2464',
    title: 'eth/65: transaction announcements and retrievals',
  },
  EIP2565: {
    id: 'EIP-2565',
    title: 'ModExp Gas Cost',
  },
  EIP2678: {
    id: 'EIP-2678',
    title: 'Revised Ethereum Smart Contract Packaging Standard (EthPM v3)',
  },
  EIP2681: {
    id: 'EIP-2681',
    title: 'Limit account nonce to 2^64-1',
  },
  EIP2696: {
    id: 'EIP-2696',
    title: 'JavaScript `request` method RPC transport',
  },
  EIP2700: {
    id: 'EIP-2700',
    title: 'JavaScript Provider Event Emitter',
  },
  EIP2718: {
    id: 'EIP-2718',
    title: 'Typed Transaction Envelope',
  },
  EIP2929: {
    id: 'EIP-2929',
    title: 'Gas cost increases for state access opcodes',
  },
  EIP2930: {
    id: 'EIP-2930',
    title: 'Optional access lists',
  },
  EIP2981: {
    id: 'EIP-2981',
    title: 'NFT Royalty Standard',
  },
  EIP3156: {
    id: 'EIP-3156',
    title: 'Flash Loans',
  },
  EIP3198: {
    id: 'EIP-3198',
    title: 'BASEFEE opcode',
  },
  EIP3448: {
    id: 'EIP-3448',
    title: 'MetaProxy Standard',
  },
  EIP3529: {
    id: 'EIP-3529',
    title: 'Reduction in refunds',
  },
  EIP3541: {
    id: 'EIP-3541',
    title: 'Reject new contract code starting with the 0xEF byte',
  },
  EIP3554: {
    id: 'EIP-3554',
    title: 'Difficulty Bomb Delay to December 2021',
  },
  EIP3607: {
    id: 'EIP-3607',
    title: 'Reject transactions from senders with deployed code',
  },
  EIP3668: {
    id: 'EIP-3668',
    title: 'CCIP Read: Secure offchain data retrieval',
  },
  EIP4345: {
    id: 'EIP-4345',
    title: 'Difficulty Bomb Delay to June 2022',
  },
  EIP4400: {
    id: 'EIP-4400',
    title: 'ERC-721 Consumable Extension',
  },
  EIP4626: {
    id: 'EIP-4626',
    title: 'Tokenized Vault Standard',
  },
};
