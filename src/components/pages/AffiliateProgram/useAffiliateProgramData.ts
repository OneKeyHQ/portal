import { useTranslation } from 'gatsby-plugin-react-i18next';

export function useAffiliateProgramData() {
  const { t } = useTranslation();

  return {
    cards: [
      {
        title: t('title__affiliate'),
        descriptions: [
          t('title__affiliate_desc_1'),
          t('title__affiliate_desc_2'),
        ],
        points: [
          t('title__affiliate_item_1'),
          t('title__affiliate_item_2'),
          t('title__affiliate_item_3'),
        ],
        button: {
          text: t('action__become_a_onekey_affiliate'),
          link: 'https://af.uppromote.com/onekeyhq/register',
        },
      },
      {
        title: t('title__reseller'),
        descriptions: [
          t('title__reseller_desc_1'),
          t('title__reseller_desc_2'),
        ],
        points: [
          t('title__reseller_item_1'),
          t('title__reseller_item_2'),
          t('title__reseller_item_3'),
        ],
        button: {
          text: t('action__become_a_onekey_reseller'),
          link: 'https://help.onekey.so/hc/requests/new',
        },
      },
    ],
  };
}
