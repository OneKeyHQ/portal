export type NavigationDataItem = {
  name: string;
  path: string;
  subItems?: NavigationDataItem[];
};

export function useNavigationData(): NavigationDataItem[] {
  return [
    {
      name: 'Products',
      path: '/products',
      // subItems: [
      //   {
      //     name: 'Wallet App',
      //     path: 'https://onekey.so/download',
      //   },
      //   {
      //     name: 'Browser Extension',
      //     path: 'https://onekey.so/plugin',
      //   },
      //   {
      //     name: 'Hardware Device',
      //     path: 'https://onekey.so/hardware',
      //   },
      //   {
      //     name: 'Swap',
      //     path: 'https://swap.onekey.so/',
      //   },
      //   {
      //     name: 'Token List',
      //     path: 'https://onekey.so/tokens',
      //   },
      //   {
      //     name: 'Recovery Phrase Converter',
      //     path: 'https://bip39.onekey.so/',
      //   },
      // ],
    },
    {
      name: 'App',
      path: 'https://onekey.so/download',
    },
    {
      name: 'Services',
      path: '/',
    },
    {
      name: 'Security',
      path: 'https://onekey.so/security',
    },
    {
      name: 'For Developer',
      path: 'https://docs.onekey.so/',
    },
    // todo: temp hide it
    // {
    //   name: 'For Business',
    //   path: '#',
    //   subItems: [
    //     {
    //       name: 'Enterprise Solutions',
    //       path: '',
    //     },
    //     {
    //       name: 'Referral',
    //       path: '',
    //     },
    //     {
    //       name: 'Co-branded products',
    //       path: '',
    //     },
    //   ],
    // },
    {
      name: 'Help Center',
      path: '#',
      subItems: [
        {
          name: "Beginner's Guide",
          path: 'https://help.onekey.so/hc/categories/360000170236',
        },
        {
          name: 'Hardware Wallet Manual',
          path: 'https://help.onekey.so/hc/articles/360002123856',
        },
      ],
    },
    {
      name: 'Shop',
      path: '#',
      subItems: [
        {
          name: 'YouZan',
          path: 'https://j.youzan.com/dZTtS2',
        },
        {
          name: 'Shopify',
          path: 'https://shop.onekey.so/',
        },
      ],
    },
  ];
}
