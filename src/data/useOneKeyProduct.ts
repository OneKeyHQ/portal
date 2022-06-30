export type ProductStatus = 'normal' | 'comingSoon' | 'soldOut' | 'disabled';

export type ProductItem = {
  status: ProductStatus;
  name: string;
  price: number;
  formattedPrice: string;
  description: string;
  path: string;
  shops: {
    amazonGlobal: string;
    amazonJapan: string;
    shopify: string;
    youzan: string;
  };
};

export type OneKeyProducts = {
  mini: ProductItem;
  touch: ProductItem;
  lite: ProductItem;
  pro: ProductItem;
};

export function useOneKeyProduct(): OneKeyProducts {
  return {
    mini: {
      status: 'normal',
      name: 'OneKey Mini',
      price: 58,
      formattedPrice: '$58.00',
      description: 'Mini sized, safety without compromise.',
      path: '/products/onekey-lite-hardware-wallet/',
      shops: {
        amazonGlobal: 'https://www.amazon.com/dp/B0B2MWW2WJ',
        amazonJapan: 'https://www.amazon.co.jp/dp/B0B2MWW2WJ',
        shopify:
          'https://shop.onekey.so/products/onekey-mini-hardware-wallet?variant=41169098178722',
        youzan: 'https://shop.onekey.so/',
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
        amazonGlobal: '',
        amazonJapan: '',
        shopify: '',
        youzan: '',
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
        amazonGlobal: '',
        amazonJapan: '',
        shopify:
          'https://shop.onekey.so/products/onekey-lite-recovery-phrase-backup-card-for-onekey-wallet-app?variant=41263919366306',
        youzan: '',
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
        amazonGlobal: '',
        amazonJapan: '',
        shopify: '',
        youzan: '',
      },
    },
  };
}
