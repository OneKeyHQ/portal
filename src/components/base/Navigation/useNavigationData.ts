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
