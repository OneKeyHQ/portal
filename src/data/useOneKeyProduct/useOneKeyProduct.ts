import { useTranslation } from 'gatsby-plugin-react-i18next';

import { OneKeyProducts, Shop } from './types';

export function filterShops(array: (Shop | undefined)[]) {
  const isNotUndefined = (value?: Shop): value is Shop =>
    !!(value && value.name && value.url);

  return array.filter(isNotUndefined);
}

export function useOneKeyProduct(): OneKeyProducts {
  const { t } = useTranslation();
  const tAmazonGlobal = t('menu__amazon_global');
  const tAmazonJapan = t('menu__amazon_japan');
  const tYouzan = t('menu__youzan');
  const tShopify = 'Shopify';

  return {
    mini: {
      status: 'normal',
      name: 'OneKey Mini',
      price: 58,
      formattedPrice: '$58.00',
      description: t('content__mini_sized_safety_without_compromise'),
      path: '/products/onekey-mini-hardware-wallet/',
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
          url: 'https://j.youzan.com/dZTtS2',
          name: tYouzan,
        },
      },
    },
    touch: {
      status: 'normal',
      name: 'OneKey Touch',
      price: 135,
      formattedPrice: '$135.00',
      description: t(
        'content__all_new_design__secure_chip_supercharged__beautiful_and_true_color_display',
      ),
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
      description: t(
        'content__a_higher_definition_of_private_key_cold_storage',
      ),
      path: '/products/onekey-lite-hardware-wallet/',
      shops: {
        amazonGlobal: {
          name: tAmazonGlobal,
          url: 'https://www.amazon.com/gp/product/B0B4KGG7LB',
        },
        amazonJapan: {
          name: tAmazonJapan,
          url: 'https://www.amazon.co.jp/dp/B0B596BZ1V',
        },
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
      description: t(
        'content__biometric_tech__optical_encryption__so_many_reasons_to_go_pro',
      ),
      path: '',
      shops: {
        amazonGlobal: undefined,
        amazonJapan: undefined,
        shopify: undefined,
        youzan: undefined,
      },
    },
  };
}
