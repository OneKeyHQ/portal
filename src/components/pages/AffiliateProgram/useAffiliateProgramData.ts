export function useAffiliateProgramData() {
  return {
    cards: [
      {
        title: 'Affiliate',
        descriptions: [
          'Are you a Tiktoker, Youtuber, Mirrorer, or an influencer in the crypto world?',
          'Become a OneKey affiliate and be rewarded for promoting our products.',
        ],
        points: [
          'Attractive commissions in crypto',
          'Direct relation with OneKey',
          'Early access to OneKey news',
        ],
        button: {
          text: 'Become a OneKey Affiliate',
          link: 'https://af.uppromote.com/onekeyhq/register',
        },
      },
      {
        title: 'Reseller',
        descriptions: [
          "Do you want to sell OneKey's products on your website or store?",
          'Join the OneKey Reseller Program and get access to the best hardware wallets in Web3.',
        ],
        points: [
          'Get the best price',
          'Customer success specialist support',
          'Assist in providing material and promotional designs',
        ],
        button: {
          text: 'Become a OneKey Reseller',
          link: 'https://help.onekey.so/hc/requests/new',
        },
      },
    ],
  };
}
