// import eipsSvgUrl from './images/eips.svg';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { useOneKeyProduct } from '../../../data';

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
  language?: string;
  subItems?: NavigationDataItem[];
};

export function useShopMenu() {
  return {
    name: 'View All Products',
    key: 'shop',
    path: '/shop',
  } as const;
}

export function useNavigationDataObject(): Record<
  | 'products'
  | 'app'
  | 'services'
  | 'security'
  | 'forDeveloper'
  | 'forBusiness'
  | 'helpCenter',
  NavigationDataItem
> {
  const oneKeyProduct = useOneKeyProduct();
  const { t } = useTranslation();
  const shopMenu = useShopMenu();

  const products = {
    name: t('menu__products'),
    key: 'products',
    subItems: [
      {
        name: oneKeyProduct.touch.name,
        key: oneKeyProduct.touch.name,
        path: oneKeyProduct.touch.path,
      },
      {
        name: oneKeyProduct.mini.name,
        key: oneKeyProduct.mini.name,
        path: oneKeyProduct.mini.path,
      },
      {
        name: oneKeyProduct.lite.name,
        key: oneKeyProduct.lite.name,
        path: oneKeyProduct.lite.path,
      },
      shopMenu,
    ],
  };

  const app = {
    name: t('menu__app'),
    key: 'app',
    path: '/download',
  };

  const services = {
    name: t('menu__services'),
    key: 'services',
    subItems: [
      {
        name: t('menu__swap'),
        key: 'swap',
        description: t('menu__swap_desc'),
        path: 'https://swap.onekey.so/#/swap',
        icon: swapSvgUrl,
      },
      {
        name: t('menu__portfolio'),
        key: 'portfolio',
        description: t('menu__portfolio_desc'),
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
        name: t('menu__token_list'),
        key: 'tokenlist',
        description: t('menu__token_list_desc'),
        path: 'https://onekey.so/tokens',
        icon: tokenlistSvgUrl,
      },
      {
        name: t('menu__recovery_phrase_converter'),
        key: 'recovery-phrase-converter',
        description: t('menu__recovery_phrase_converter_desc'),
        path: 'https://bip39.onekey.so/',
        icon: recoverySvgUrl,
      },
    ],
  };

  const security = {
    name: t('menu__security'),
    key: 'security',
    path: '/security',
  };

  const forDeveloper = {
    name: t('menu__developer'),
    key: 'for-developer',
    path: 'https://docs.onekey.so/',
  };

  const forBusiness = {
    name: t('menu__solutions'),
    key: 'for-business',
    subItems: [
      {
        name: t('menu__enterprise_solutions'),
        key: 'enterprise-solutions',
        path: '/enterprise',
      },
      {
        name: t('menu__referral'),
        key: 'referral',
        path: '/affiliate-program',
      },
      {
        name: t('menu__co_branded_products'),
        key: 'co-branded-products',
        path: '/co-branded-partnership',
      },
    ],
  };

  const helpCenter = {
    name: t('menu__support'),
    key: 'help-center',
    subItems: [
      {
        name: t('menu__beginners_guide'),
        key: 'beginner-guide',
        path: 'https://help.onekey.so/hc/categories/360000170236',
      },
      {
        name: t('menu__hardware_wallet_manual'),
        key: 'hardware-wallet-manual',
        path: 'https://help.onekey.so/hc/articles/360002123856',
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
  ];
}
