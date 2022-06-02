export function usePageFooterData() {
  return {
    media: {
      twitter: {
        url: 'https://twitter.com/OneKeyHQ',
        username: 'OneKeyHQ',
      },
      discord: {
        url: 'https://discord.gg/nwUJaTzjzv',
      },
      github: {
        url: 'https://github.com/OneKeyHQ/OneKey-Wallet',
      },
      reddit: {
        url: 'https://www.reddit.com/r/OneKeyHQ/',
      },
      weibo: {
        url: 'https://weibo.com/yourKeysyourBitcoin',
      },
    },
    menuData: [
      {
        name: 'product',
        link: '',
        list: [
          {
            name: 'Crowdfunding',
            link: 'https://crowdfund.onekey.so/',
            status: 'external',
          },
          {
            name: 'Mobile Wallet',
            link: 'https://onekey.so/download',
            status: 'external',
          },
          {
            name: 'Hardware Device',
            link: 'https://onekey.so/hardware',
            status: 'external',
          },
          {
            name: 'Browser Extension',
            link: 'https://onekey.so/plugin',
            status: 'external',
          },
          {
            name: 'Swap',
            link: 'https://swap.onekey.so/',
            status: 'external',
          },
          {
            name: 'Token List',
            link: 'https://onekey.so/tokens',
            status: 'external',
          },
          {
            name: 'Recovery Phrase Converter',
            link: 'https://bip39.onekey.so/',
            status: 'external',
          },
        ],
      },
      {
        name: 'resource',
        link: '',
        list: [
          {
            name: 'System Status',
            link: 'https://onekeyhq.github.io/upptime',
            status: 'external',
          },
          {
            name: 'Open Source Community',
            link: 'https://github.com/OneKeyHQ/OneKey-Wallet',
            status: 'external',
          },
          {
            name: 'Media Kits',
            link: 'https://help.onekey.so/hc/articles/360002200956',
            status: 'external',
          },
          {
            name: 'Privacy Agreement',
            link: 'https://help.onekey.so/hc/articles/360002003315',
            status: 'external',
          },
          {
            name: 'User Agreement',
            link: 'https://help.onekey.so/hc/articles/360002014776',
            status: 'external',
          },
        ],
      },
      {
        name: 'information',
        link: '',
        list: [
          {
            name: 'Submit Dapp',
            link: 'https://gr4yl99ujhl.typeform.com/to/kDJuiIQ9',
            status: 'external',
          },
          {
            name: 'Submit Token',
            link: 'https://gr4yl99ujhl.typeform.com/to/ZM0qyr9e',
            status: 'external',
          },
          {
            name: 'Venture Capital',
            link: 'https://onekey.so/ventures',
            status: 'external',
          },
          {
            name: 'Sales Alliance',
            link: 'https://help.onekey.so/hc/articles/360002658076',
            status: 'external',
          },
          {
            name: 'Advertising',
            link: 'https://help.onekey.so/hc/articles/360002658096',
            status: 'external',
          },
          {
            name: 'Investor Relations',
            link: 'https://onekey.so/invest',
            status: 'external',
          },
        ],
      },
      {
        name: 'crypto-assets',
        link: '/crypto-assets',
        list: [
          {
            name: 'Bitcoin (BTC)',
            link: 'https://onekey.so/coins/btc',
            status: 'external',
          },
          {
            name: 'Ethereum (ETH)',
            link: 'https://onekey.so/coins/eth',
            status: 'external',
          },
          {
            name: 'Litecoin (LTC)',
            link: 'https://onekey.so/coins/ltc',
            status: 'external',
          },
          {
            name: 'Dogecoin (DOGE)',
            link: '#Dogecoin',
            status: 'disabled',
          },
          {
            name: 'Dash (DASH)',
            link: '#Dash',
            status: 'disabled',
          },
        ],
      },
    ],
  } as const;
}
