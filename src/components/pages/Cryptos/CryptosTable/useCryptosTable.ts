import {
  BitcoinBadge,
  BitcoinCashBadge,
  BitcoinPlusBadge,
  DashBadge,
  EthereumBadge,
} from 'cryptocons';

export function useCryptosTable() {
  return {
    items: [
      {
        coin: {
          icon: BitcoinBadge,
          name: 'Bitcoin',
          symbol: 'BTC',
        },
        support: {
          app: true,
          classicAndMini: true,
          touchAndPro: false,
        },
        link: '#',
      },
      {
        coin: {
          icon: EthereumBadge,
          name: 'Ether',
          symbol: 'ETH',
        },
        support: {
          app: true,
          classicAndMini: true,
          touchAndPro: false,
        },
        link: '#',
      },
      {
        coin: {
          icon: BitcoinPlusBadge,
          name: 'Bitcoin Gold',
          symbol: 'BTG',
        },
        support: {
          app: true,
          classicAndMini: true,
          touchAndPro: false,
        },
        link: '#',
      },
      {
        coin: {
          icon: BitcoinCashBadge,
          name: 'Bitcoin Cash',
          symbol: 'BCH',
        },
        support: {
          app: true,
          classicAndMini: true,
          touchAndPro: false,
        },
        link: '#',
      },
      {
        coin: {
          icon: DashBadge,
          name: 'Dash',
          symbol: 'DASH',
        },
        support: {
          app: true,
          classicAndMini: true,
          touchAndPro: false,
        },
        link: '#',
      },
    ],
  };
}
