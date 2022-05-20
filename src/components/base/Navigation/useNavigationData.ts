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
    },
    {
      name: 'App',
      path: '/',
    },
    {
      name: 'Services',
      path: '/',
    },
    {
      name: 'Security',
      path: '/',
    },
    {
      name: 'For Developer',
      path: '/',
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
      path: '/',
    },
    {
      name: 'Shop',
      path: '/',
    },
  ];
}
