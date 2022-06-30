import { useTranslation } from 'gatsby-plugin-react-i18next';

import { OneKeyProducts, Shop } from './types';

export function filterShops(array: (Shop | undefined)[]) {
  const isNotUndefined = (value?: Shop): value is Shop => value !== undefined;

  return array.filter(isNotUndefined);
}

export function useOneKeyProduct(): OneKeyProducts {
  const { t } = useTranslation();
  const tAmazonGlobal = t('menu__amazon_global');
  const tAmazonJapan = t('menu__amazon_japan');
  const tYouzan = t('menu__youzan');
  const tShopify = t('menu__shopify');

  return {
    mini: {
      status: 'normal',
      name: 'OneKey Mini',
      price: 58,
      formattedPrice: '$58.00',
      description: 'Mini sized, safety without compromise.',
      path: '/products/onekey-lite-hardware-wallet/',
      shops: {
        amazonGlobal: {
          url: 'https://www.amazon.com/dp/B0B2MWW2WJ',
          name: tAmazonGlobal,
        },
        amazonJapan: {
          url: 'https://www.amazon.co.jp/dp/B0B2MWW2WJ',
          name: tAmazonJapan,
        },
        shopify: {
          url: 'https://shop.onekey.so/products/onekey-mini-hardware-wallet?variant=41169098178722',
          name: tShopify,
        },
        youzan: {
          url: 'https://shop.onekey.so/',
          name: tYouzan,
        },
      },
    },
    touch: {
      status: 'comingSoon',
      name: 'OneKey Touch',
      price: 135,
      formattedPrice: '$135.00',
      description:
        'All-new design, secure chip supercharged, beautiful and true color display.',
      path: '/products/onekey-touch-hardware-wallet/',
      shops: {
        amazonGlobal: undefined,
        amazonJapan: undefined,
        shopify: undefined,
        youzan: undefined,
      },
    },
    lite: {
      status: 'normal',
      name: 'OneKey Lite',
      price: 19.99,
      formattedPrice: '$19.99',
      description: 'A higher definition of private key cold storage.',
      path: '/products/onekey-lite-hardware-wallet/',
      shops: {
        amazonGlobal: undefined,
        amazonJapan: undefined,
        shopify: {
          name: tShopify,
          url: 'https://shop.onekey.so/products/onekey-lite-recovery-phrase-backup-card-for-onekey-wallet-app?variant=41263919366306',
        },
        youzan: undefined,
      },
    },
    pro: {
      status: 'comingSoon',
      name: 'OneKey Pro',
      price: 195,
      formattedPrice: '$195.00',
      description:
        'Biometric tech, optical encryption, so many reasons to go Pro.',
      path: '/products/onekey-pro-hardware-wallet/',
      shops: {
        amazonGlobal: undefined,
        amazonJapan: undefined,
        shopify: undefined,
        youzan: undefined,
      },
    },
  };
}
