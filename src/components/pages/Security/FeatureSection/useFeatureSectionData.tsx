import { ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { ButtonProps } from '../../../base';

export type FeatureSectionData = {
  subtitle: string;
  title: string;
  description: string;
  items: FeatureSectionDataItem[];
};

export type FeatureSectionDataItem = {
  description: string[];
  name: string;
  imageNode: ReactNode;
  button?: {
    text: string;
    link: string;
    variant: ButtonProps['variant'];
  };
};

export function useFeatureSectionData(): FeatureSectionData {
  const { t } = useTranslation();

  return {
    subtitle: t('title__professional_choice'),
    title: t('title__what_makes_onekey_earn_the_trust_of_top_pro_institutions'),
    description: t(
      'title__what_makes_onekey_earn_the_trust_of_top_pro_institutions_desc',
    ),
    items: [
      {
        name: t('title__open_source'),
        description: [
          t('title__open_source_desc_1'),
          t('title__open_source_desc_2'),
        ],
        imageNode: (
          <StaticImage
            src="./images/security-01.jpg"
            alt={t('title__open_source')}
          />
        ),
        button: {
          text: t('action__learn_more'),
          link: 'https://github.com/OneKeyHQ/',
          variant: 'outlined',
        },
      },
      {
        name: t('title__secure_element'),
        description: [
          t('title__secure_element_desc_1'),
          t('title__secure_element_desc_2'),
          t('title__secure_element_desc_3'),
        ],
        imageNode: (
          <StaticImage
            src="./images/security-02.jpg"
            alt={t('title__secure_element')}
          />
        ),
      },
      {
        name: t('title__cold_keys'),
        description: [
          t('title__cold_keys_desc_1'),
          t('title__cold_keys_desc_2'),
          t('title__cold_keys_desc_3'),
        ],
        imageNode: (
          <StaticImage
            src="./images/security-03.jpg"
            alt={t('title__cold_keys')}
          />
        ),
      },
    ],
  };
}
