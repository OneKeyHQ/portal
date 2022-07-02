import { ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { useContactUs } from '../../../../data';
import { CheckIcon } from '../../../base';

export type ProductShowcaseSectionDataItem = {
  name: string;
  description: string;
  imageNode: ReactNode;
  units: string;
  points: {
    text: string;
    iconNode: ReactNode;
  }[];
  button: {
    text: string;
    url: string;
  };
};

export type ProductShowcaseSectionDataItems = ProductShowcaseSectionDataItem[];

const tempIcon = <CheckIcon width={24} height={24} />;

export function useProductShowcaseSectionData(): {
  items: ProductShowcaseSectionDataItems;
} {
  const contactUs = useContactUs();
  const { t } = useTranslation();

  return {
    items: [
      {
        name: t('title__standard'),
        units: t('minimum_int_units', {
          value: 100,
        }),
        description: t('title__standard_desc'),
        imageNode: <StaticImage src="./images/co-intro-0.jpg" alt="image" />,
        points: [
          {
            iconNode: tempIcon,
            text: t('title__logo_engraving'),
          },
        ],
        button: {
          text: t('action__contact_us'),
          url: contactUs.url,
        },
      },
      {
        name: t('title__pro_team'),
        units: t('minimum_int_units', {
          value: 300,
        }),
        description: t('title__pro_team_desc'),
        imageNode: <StaticImage src="./images/co-intro-1.jpg" alt="image" />,
        points: [
          {
            iconNode: tempIcon,
            text: t('title__logo_engraving'),
          },
          {
            iconNode: tempIcon,
            text: t('custom_packaging'),
          },
        ],
        button: {
          text: t('action__contact_us'),
          url: contactUs.url,
        },
      },
      {
        name: t('title__dropshipping'),
        units: t('minimum_int_units', {
          value: 1000,
        }),
        description: t('title__dropshipping_desc'),
        imageNode: <StaticImage src="./images/co-intro-2.jpg" alt="image" />,
        points: [
          {
            iconNode: tempIcon,
            text: t('title__logo_engraving'),
          },
          {
            iconNode: tempIcon,
            text: t('custom_packaging'),
          },
          {
            iconNode: tempIcon,
            text: t('deliver_to_end_users'),
          },
        ],
        button: {
          text: t('action__contact_us'),
          url: contactUs.url,
        },
      },
    ],
  };
}
