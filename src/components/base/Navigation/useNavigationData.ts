export type NavigationDataItem = {
  name: string;
  key: string;
  path?: string;
  subItems?: NavigationDataItem[];
};

export function useNavigationData(): NavigationDataItem[] {
  return [
    {
      name: 'Products',
      key: 'products',
    },
    {
      name: 'App',
      key: 'app',
      path: 'https://onekey.so/download',
    },
    {
      name: 'Services',
      key: 'services',
      subItems: [
        {
          name: 'Swap',
          key: 'ETH, BSC mainnet support, swap token in lightning speed. Stable supply of liquid pools, rest assured.',
          path: 'https://swap.onekey.so/#/swap',
        },
        {
          name: 'Portfolio',
          key: 'Manage all your web3 portfolio, from DeFi to NFTs and beyond. Invest in the latest prospects from one place.',
          path: 'https://portfolio.onekey.so/',
        },
        {
          name: 'Tonkenlist',
          key: 'Add ETH, BSC, HECO tokens to Extension and App',
          path: 'https://onekey.so/tokens',
        },
        {
          name: 'Recovery Phrase Converter',
          key: 'A tool for converting BIP39 mnemonic to addresses and private keys',
          path: 'https://bip39.onekey.so/',
        },
      ],
    },
    {
      name: 'Security',
      key: 'security',
      path: 'https://onekey.so/security',
    },
    {
      name: 'For Developer',
      key: 'for-developer',
      path: 'https://docs.onekey.so/',
    },
    {
      name: 'Help Center',
      key: 'help-center',
      subItems: [
        {
          name: "Beginner's Guide",
          key: 'beginner-guide',
          path: 'https://help.onekey.so/hc/categories/360000170236',
        },
        {
          name: 'Hardware Wallet Manual',
          key: 'hardware-wallet-manual',
          path: 'https://help.onekey.so/hc/articles/360002123856',
        },
      ],
    },
    {
      name: 'Shop',
      key: 'shop',
      subItems: [
        {
          name: 'YouZan',
          key: 'youzan',
          path: 'https://j.youzan.com/dZTtS2',
        },
        {
          name: 'Shopify',
          key: 'shopify',
          path: 'https://shop.onekey.so/',
        },
      ],
    },
  ];
}
