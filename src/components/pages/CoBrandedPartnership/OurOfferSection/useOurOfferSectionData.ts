import { useTranslation } from 'gatsby-plugin-react-i18next';

export function useOurOfferSectionData() {
  const { t } = useTranslation();

  return {
    cards: [
      {
        title: t('title__standard'),
        points: [
          t('title__logo_engraving'),
          t('minimum_int_units', {
            value: 100,
          }),
        ],
        button: {
          text: t('action__learn_more'),
          link: 'https://help.onekey.so/hc/articles/4978923682703',
        },
      },
      {
        title: t('title__pro_team'),
        points: [
          t('title__logo_engraving'),
          t('custom_packaging'),
          t('minimum_int_units', {
            value: 300,
          }),
        ],
        button: {
          text: t('action__learn_more'),
          link: 'https://help.onekey.so/hc/articles/4978923682703',
        },
      },
      {
        title: t('title__dropshipping'),
        points: [
          t('title__logo_engraving'),
          t('custom_packaging'),
          t('deliver_to_end_users'),
          t('minimum_int_units', {
            value: 1000,
          }),
        ],
        button: {
          text: t('action__learn_more'),
          link: 'https://help.onekey.so/hc/articles/4978923682703',
        },
      },
    ],
  };
}
