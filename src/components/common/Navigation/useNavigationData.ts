// import eipsSvgUrl from './images/eips.svg';
import portfolioSvgUrl from './images/portfolio.svg';
import recoverySvgUrl from './images/recovery-phrase-converter.svg';
import swapSvgUrl from './images/swap.svg';
import tonkenlistSvgUrl from './images/tonkenlist.svg';

export type NavigationDataItem = {
  name: string;
  key: string;
  path?: string;
  icon?: string;
  description?: string;
  subItems?: NavigationDataItem[];
};

export function useNavigationDataObject() {
  const products = {
    name: 'Products',
    key: 'products',
  };

  const app = {
    name: 'App',
    key: 'app',
    path: 'https://onekey.so/download',
  };

  const services = {
    name: 'Services',
    key: 'services',
    subItems: [
      {
        name: 'Swap',
        key: 'swap',
        description:
          'ETH, BSC mainnet support, swap token in lightning speed. Stable supply of liquid pools, rest assured.',
        path: 'https://swap.onekey.so/#/swap',
        icon: swapSvgUrl,
      },
      {
        name: 'Portfolio',
        key: 'portfolio',
        description:
          'Manage all your web3 portfolio, from DeFi to NFTs and beyond. Invest in the latest prospects from one place.',
        path: 'https://portfolio.onekey.so/',
        icon: portfolioSvgUrl,
      },
      // todo
      // {
      //   name: 'EIPs',
      //   key: 'eips',
      //   description:
      //     'We work tirelessly to support all types of EIP proposals, see the latest supported EIPs here.',
      //   path: '',
      //   icon: eipsSvgUrl,
      // },
      {
        name: 'Tonkenlist',
        key: 'tonkenlist',
        description: 'Add ETH, BSC, HECO tokens to Extension and App',
        path: 'https://onekey.so/tokens',
        icon: tonkenlistSvgUrl,
      },
      {
        name: 'Recovery Phrase Converter',
        key: 'recovery-phrase-converter',
        description:
          'A tool for converting BIP39 mnemonic to addresses and private keys',
        path: 'https://bip39.onekey.so/',
        icon: recoverySvgUrl,
      },
    ],
  };

  const security = {
    name: 'Security',
    key: 'security',
    path: 'https://onekey.so/security',
  };

  const forDeveloper = {
    name: 'For Developer',
    key: 'for-developer',
    path: 'https://docs.onekey.so/',
  };

  const forBusiness = {
    name: 'For Business',
    key: 'for-business',
    subItems: [
      {
        name: 'Enterprise Solutions',
        key: 'enterprise-solutions',
        path: '/enterprise',
      },
      {
        name: 'Referral',
        key: 'referral',
        path: '/affiliate-program',
      },
      {
        name: 'Co-branded products',
        key: 'co-branded-products',
        path: '/co-branded-partnership',
      },
    ],
  };

  const helpCenter = {
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
  };

  const shop = {
    name: 'Shop',
    key: 'shop',
    subItems: [
      {
        name: 'Amazon (Global)',
        key: 'amazon-Global',
        path: 'https://www.amazon.com/dp/B0B2MWW2WJ',
      },
      {
        name: 'Amazon (Japan)',
        key: 'amazon-Japan',
        path: 'https://www.amazon.co.jp/dp/B0B2MWW2WJ',
      },
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
  };

  return {
    products,
    app,
    services,
    security,
    forDeveloper,
    forBusiness,
    helpCenter,
    shop,
  };
}

export function useNavigationData(): NavigationDataItem[] {
  const object = useNavigationDataObject();

  return [
    object.products,
    object.app,
    object.services,
    object.security,
    object.forDeveloper,
    object.forBusiness,
    object.helpCenter,
    object.shop,
  ];
}
