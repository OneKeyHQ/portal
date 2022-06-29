// import eipsSvgUrl from './images/eips.svg';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import portfolioSvgUrl from './images/portfolio.svg';
import recoverySvgUrl from './images/recovery-phrase-converter.svg';
import swapSvgUrl from './images/swap.svg';
import tokenlistSvgUrl from './images/tokenlist.svg';

export type NavigationDataItem = {
  name: string;
  key: string;
  path?: string;
  icon?: string;
  description?: string;
  subItems?: NavigationDataItem[];
};

export function useNavigationDataObject() {
  const { t } = useTranslation();

  const products = {
    name: 'Products',
    key: 'products',
  };

  const app = {
    name: t('website__navigation_app'),
    key: 'app',
    path: 'https://onekey.so/download',
  };

  const services = {
    name: t('website__navigation_services'),
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
        name: 'Tokenlist',
        key: 'tokenlist',
        description: 'Add ETH, BSC, HECO tokens to Extension and App',
        path: 'https://onekey.so/tokens',
        icon: tokenlistSvgUrl,
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
    name: t('website__navigation_security'),
    key: 'security',
    path: '/security',
  };

  const forDeveloper = {
    name: t('website__navigation_for_developer'),
    key: 'for-developer',
    path: 'https://docs.onekey.so/',
  };

  const forBusiness = {
    name: t('website__navigation_for_business'),
    key: 'for-business',
    subItems: [
      {
        name: t('website__navigation_enterprise_solutions'),
        key: 'enterprise-solutions',
        path: '/enterprise',
      },
      {
        name: t('website__navigation_referral'),
        key: 'referral',
        path: '/affiliate-program',
      },
      {
        name: t('website__navigation_co_branded_products'),
        key: 'co-branded-products',
        path: '/co-branded-partnership',
      },
    ],
  };

  const helpCenter = {
    name: t('website__navigation_help_center'),
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
    name: t('website__navigation_shop'),
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
