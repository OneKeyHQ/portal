export function useCryptosTable() {
  return {
    thead: {
      coins: 'COINS',
      app: 'APP',
      classicAndMini: 'Classic & Mini',
      touchAndPro: 'Touch & Pro',
    },
    items: [
      {
        coin: {
          name: 'Bitcoin',
          symbol: 'BTC',
        },
        support: {
          app: true,
          classic: true,
          mini: true,
          touch: false,
          pro: false,
        },
        link: '#',
      },
      {
        coin: {
          name: 'Ether',
          symbol: 'ETH',
        },
        support: {
          app: true,
          classic: true,
          mini: true,
          touch: false,
          pro: false,
        },
        link: '#',
      },
      {
        coin: {
          name: 'Bitcoin Gold',
          symbol: 'BTG',
        },
        support: {
          app: true,
          classic: true,
          mini: true,
          touch: false,
          pro: false,
        },
        link: '#',
      },
      {
        coin: {
          name: 'Bitcoin Cash',
          symbol: 'BCH',
        },
        support: {
          app: true,
          classic: true,
          mini: true,
          touch: false,
          pro: false,
        },
        link: '#',
      },
      {
        coin: {
          name: 'Dash',
          symbol: 'DASH',
        },
        support: {
          app: true,
          classic: true,
          mini: true,
          touch: false,
          pro: false,
        },
        link: '#',
      },
    ],
  };
}
