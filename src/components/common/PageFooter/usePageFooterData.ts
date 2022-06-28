import { useTranslation } from 'gatsby-plugin-react-i18next';

export function usePageFooterData() {
  const { t } = useTranslation();

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
        name: t('footer__navigation__product'),
        link: '',
        list: [
          {
            name: t('footer__navigation__crowdfunding'),
            link: 'https://crowdfund.onekey.so/',
            status: 'external',
          },
          {
            name: t('footer__navigation__mobile_wallet'),
            link: 'https://onekey.so/download',
            status: 'external',
          },
          {
            name: t('footer__navigation__hardware_device'),
            link: 'https://onekey.so/hardware',
            status: 'external',
          },
          {
            name: t('footer__navigation__browser_extension'),
            link: 'https://onekey.so/plugin',
            status: 'external',
          },
          {
            name: t('footer__navigation__swap'),
            link: 'https://swap.onekey.so/',
            status: 'external',
          },
          {
            name: t('footer__navigation__token_list'),
            link: 'https://onekey.so/tokens',
            status: 'external',
          },
          {
            name: t('footer__navigation__recovery_phrase_converter'),
            link: 'https://bip39.onekey.so/',
            status: 'external',
          },
        ],
      },
      {
        name: t('footer__navigation__resource'),
        link: '',
        list: [
          {
            name: t('footer__navigation__system_status'),
            link: 'https://onekeyhq.github.io/upptime',
            status: 'external',
          },
          {
            name: t('footer__navigation__open_source_community'),
            link: 'https://github.com/OneKeyHQ/OneKey-Wallet',
            status: 'external',
          },
          {
            name: t('footer__navigation__media_kits'),
            link: 'https://help.onekey.so/hc/articles/360002200956',
            status: 'external',
          },
          {
            name: t('footer__navigation__privacy_agreement'),
            link: 'https://help.onekey.so/hc/articles/360002003315',
            status: 'external',
          },
          {
            name: t('footer__navigation__user_agreement'),
            link: 'https://help.onekey.so/hc/articles/360002014776',
            status: 'external',
          },
        ],
      },
      {
        name: t('footer__navigation__information'),
        link: '',
        list: [
          {
            name: t('footer__navigation__submit_dapp'),
            link: 'https://gr4yl99ujhl.typeform.com/to/kDJuiIQ9',
            status: 'external',
          },
          {
            name: t('footer__navigation__submit_token'),
            link: 'https://gr4yl99ujhl.typeform.com/to/ZM0qyr9e',
            status: 'external',
          },
          {
            name: t('footer__navigation__venture_capital'),
            link: 'https://onekey.so/ventures',
            status: 'external',
          },
          {
            name: t('footer__navigation__sales_alliance'),
            link: 'https://help.onekey.so/hc/articles/360002658076',
            status: 'external',
          },
          {
            name: t('footer__navigation__advertising'),
            link: 'https://help.onekey.so/hc/articles/360002658096',
            status: 'external',
          },
          {
            name: t('footer__navigation__investor_relations'),
            link: 'https://onekey.so/invest',
            status: 'external',
          },
        ],
      },
      {
        name: t('footer__navigation__crypto_assets'),
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
