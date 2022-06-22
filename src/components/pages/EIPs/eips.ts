export const EIPs = {
  eip2: {
    id: 'eip-2',
    title: 'Homestead Hard-fork Changes',
  },
  eip4: {
    id: 'eip-4',
    title: 'EIP Classification',
  },
  eip5: {
    id: 'eip-5',
    title: 'Gas Usage for `RETURN` and `CALL*`',
  },
  eip6: {
    id: 'eip-6',
    title: 'Renaming SUICIDE opcode',
  },
  eip7: {
    id: 'eip-7',
    title: 'DELEGATECALL',
  },
  eip8: {
    id: 'eip-8',
    title: 'devp2p Forward Compatibility Requirements for Homestead',
  },
  eip20: {
    id: 'eip-20',
    title: 'Token Standard',
  },
  eip55: {
    id: 'eip-55',
    title: 'Mixed-case checksum address encoding',
  },
  eip100: {
    id: 'eip-100',
    title:
      'Change difficulty adjustment to target mean block time including uncles',
  },
  eip137: {
    id: 'eip-137',
    title: 'Ethereum Domain Name Service - Specification',
  },
  eip140: {
    id: 'eip-140',
    title: 'REVERT instruction',
  },
  eip141: {
    id: 'eip-141',
    title: 'Designated invalid EVM instruction',
  },
  eip145: {
    id: 'eip-145',
    title: 'Bitwise shifting instructions in EVM',
  },
  eip150: {
    id: 'eip-150',
    title: 'Gas cost changes for IO-heavy operations',
  },
  eip152: {
    id: 'eip-152',
    title: 'Add BLAKE2 compression function `F` precompile',
  },
  eip155: {
    id: 'eip-155',
    title: 'Simple replay attack protection',
  },
  eip158: {
    id: 'eip-158',
    title: 'State clearing',
  },
  eip160: {
    id: 'eip-160',
    title: 'EXP cost increase',
  },
  eip161: {
    id: 'eip-161',
    title: 'State trie clearing (invariant-preserving alternative)',
  },
  eip162: {
    id: 'eip-162',
    title: 'Initial ENS Hash Registrar',
  },
  eip165: {
    id: 'eip-165',
    title: 'Standard Interface Detection',
  },
  eip170: {
    id: 'eip-170',
    title: 'Contract code size limit',
  },
  eip181: {
    id: 'eip-181',
    title: 'ENS support for reverse resolution of Ethereum addresses',
  },
  eip190: {
    id: 'eip-190',
    title: 'Ethereum Smart Contract Packaging Standard',
  },
  eip191: {
    id: 'eip-191',
    title: 'Signed Data Standard',
  },
  eip196: {
    id: 'eip-196',
    title:
      'Precompiled contracts for addition and scalar multiplication on the elliptic curve alt_bn128',
  },
  eip197: {
    id: 'eip-197',
    title:
      'Precompiled contracts for optimal ate pairing check on the elliptic curve alt_bn128',
  },
  eip198: {
    id: 'eip-198',
    title: 'Big integer modular exponentiation',
  },
  eip211: {
    id: 'eip-211',
    title: 'New opcodes: RETURNDATASIZE and RETURNDATACOPY',
  },
  eip214: {
    id: 'eip-214',
    title: 'New opcode STATICCALL',
  },
  eip225: {
    id: 'eip-225',
    title: 'Clique proof-of-authority consensus protocol',
  },
  eip234: {
    id: 'eip-234',
    title: 'Add `blockHash` to JSON-RPC filter options.',
  },
  eip600: {
    id: 'eip-600',
    title: 'Ethereum purpose allocation for Deterministic Wallets',
  },
  eip601: {
    id: 'eip-601',
    title: 'Ethereum hierarchy for deterministic wallets',
  },
  eip606: {
    id: 'eip-606',
    title: 'Hardfork Meta: Homestead',
  },
  eip607: {
    id: 'eip-607',
    title: 'Hardfork Meta: Spurious Dragon',
  },
  eip608: {
    id: 'eip-608',
    title: 'Hardfork Meta: Tangerine Whistle',
  },
  eip609: {
    id: 'eip-609',
    title: 'Hardfork Meta: Byzantium',
  },
  eip627: {
    id: 'eip-627',
    title: 'Whisper Specification',
  },
  eip649: {
    id: 'eip-649',
    title: 'Metropolis Difficulty Bomb Delay and Block Reward Reduction',
  },
  eip658: {
    id: 'eip-658',
    title: 'Embedding transaction status code in receipts',
  },
  eip681: {
    id: 'eip-681',
    title: 'URL Format for Transaction Requests',
  },
  eip695: {
    id: 'eip-695',
    title: 'Create `eth_chainId` method for JSON-RPC',
  },
  eip706: {
    id: 'eip-706',
    title: 'DEVp2p snappy compression',
  },
  eip721: {
    id: 'eip-721',
    title: 'Non-Fungible Token Standard',
  },
  eip777: {
    id: 'eip-777',
    title: 'Token Standard',
  },
  eip778: {
    id: 'eip-778',
    title: 'Ethereum Node Records (ENR)',
  },
  eip779: {
    id: 'eip-779',
    title: 'Hardfork Meta: DAO Fork',
  },
  eip820: {
    id: 'eip-820',
    title: 'Pseudo-introspection Registry Contract',
  },
  eip868: {
    id: 'eip-868',
    title: 'Node Discovery v4 ENR Extension',
  },
  eip1013: {
    id: 'eip-1013',
    title: 'Hardfork Meta: Constantinople',
  },
  eip1014: {
    id: 'eip-1014',
    title: 'Skinny CREATE2',
  },
  eip1052: {
    id: 'eip-1052',
    title: 'EXTCODEHASH opcode',
  },
  eip1108: {
    id: 'eip-1108',
    title: 'Reduce alt_bn128 precompile gas costs',
  },
  eip1155: {
    id: 'eip-1155',
    title: 'Multi Token Standard',
  },
  eip1167: {
    id: 'eip-1167',
    title: 'Minimal Proxy Contract',
  },
  eip1193: {
    id: 'eip-1193',
    title: 'Ethereum Provider JavaScript API',
  },
  eip1234: {
    id: 'eip-1234',
    title: 'Constantinople Difficulty Bomb Delay and Block Reward Adjustment',
  },
  eip1271: {
    id: 'eip-1271',
    title: 'Standard Signature Validation Method for Contracts',
  },
  eip1283: {
    id: 'eip-1283',
    title: 'Net gas metering for SSTORE without dirty maps',
  },
  eip1344: {
    id: 'eip-1344',
    title: 'ChainID opcode',
  },
  eip1363: {
    id: 'eip-1363',
    title: ' Payable Token',
  },
  eip1559: {
    id: 'eip-1559',
    title: 'Fee market change for ETH 1.0 chain',
  },
  eip1679: {
    id: 'eip-1679',
    title: 'Hardfork Meta: Istanbul',
  },
  eip1716: {
    id: 'eip-1716',
    title: 'Hardfork Meta: Petersburg',
  },
  eip1820: {
    id: 'eip-1820',
    title: 'Pseudo-introspection Registry Contract',
  },
  eip1884: {
    id: 'eip-1884',
    title: 'Repricing for trie-size-dependent opcodes',
  },
  eip1967: {
    id: 'eip-1967',
    title: 'Standard Proxy Storage Slots',
  },
  eip2028: {
    id: 'eip-2028',
    title: 'Transaction data gas cost reduction',
  },
  eip2098: {
    id: 'eip-2098',
    title: 'Compact Signature Representation',
  },
  eip2124: {
    id: 'eip-2124',
    title: 'Fork identifier for chain compatibility checks',
  },
  eip2159: {
    id: 'eip-2159',
    title: 'Common Prometheus Metrics Names for Clients',
  },
  eip2200: {
    id: 'eip-2200',
    title: 'Structured Definitions for Net Gas Metering',
  },
  eip2228: {
    id: 'eip-2228',
    title: ' Canonicalize the name of network ID 1 and chain ID 1',
  },
  eip2309: {
    id: 'eip-2309',
    title: 'ERC-721 Consecutive Transfer Extension',
  },
  eip2364: {
    id: 'eip-2364',
    title: 'eth/64: forkid-extended protocol handshake',
  },
  eip2384: {
    id: 'eip-2384',
    title: 'Muir Glacier Difficulty Bomb Delay',
  },
  eip2387: {
    id: 'eip-2387',
    title: 'Hardfork Meta: Muir Glacier',
  },
  eip2464: {
    id: 'eip-2464',
    title: 'eth/65: transaction announcements and retrievals',
  },
  eip2565: {
    id: 'eip-2565',
    title: 'ModExp Gas Cost',
  },
  eip2678: {
    id: 'eip-2678',
    title: 'Revised Ethereum Smart Contract Packaging Standard (EthPM v3)',
  },
  eip2681: {
    id: 'eip-2681',
    title: 'Limit account nonce to 2^64-1',
  },
  eip2696: {
    id: 'eip-2696',
    title: 'JavaScript `request` method RPC transport',
  },
  eip2700: {
    id: 'eip-2700',
    title: 'JavaScript Provider Event Emitter',
  },
  eip2718: {
    id: 'eip-2718',
    title: 'Typed Transaction Envelope',
  },
  eip2929: {
    id: 'eip-2929',
    title: 'Gas cost increases for state access opcodes',
  },
  eip2930: {
    id: 'eip-2930',
    title: 'Optional access lists',
  },
  eip2981: {
    id: 'eip-2981',
    title: 'NFT Royalty Standard',
  },
  eip3156: {
    id: 'eip-3156',
    title: 'Flash Loans',
  },
  eip3198: {
    id: 'eip-3198',
    title: 'BASEFEE opcode',
  },
  eip3448: {
    id: 'eip-3448',
    title: 'MetaProxy Standard',
  },
  eip3529: {
    id: 'eip-3529',
    title: 'Reduction in refunds',
  },
  eip3541: {
    id: 'eip-3541',
    title: 'Reject new contract code starting with the 0xEF byte',
  },
  eip3554: {
    id: 'eip-3554',
    title: 'Difficulty Bomb Delay to December 2021',
  },
  eip3607: {
    id: 'eip-3607',
    title: 'Reject transactions from senders with deployed code',
  },
  eip3668: {
    id: 'eip-3668',
    title: 'CCIP Read: Secure offchain data retrieval',
  },
  eip4345: {
    id: 'eip-4345',
    title: 'Difficulty Bomb Delay to June 2022',
  },
  eip4400: {
    id: 'eip-4400',
    title: 'ERC-721 Consumable Extension',
  },
  eip4626: {
    id: 'eip-4626',
    title: 'Tokenized Vault Standard',
  },
};
