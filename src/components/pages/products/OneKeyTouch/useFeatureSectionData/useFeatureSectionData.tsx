import { useTranslation } from 'gatsby-plugin-react-i18next';

import { FeatureSectionProps } from '../../components/FeatureSection';
import { Image1, Image3, Image4 } from '../../components/FeatureSection/Images';

export function useFeatureSectionData(): FeatureSectionProps {
  const { t } = useTranslation();

  return {
    title: t('title__focus_and_release'),
    description: t('title__focus_and_release_desc'),
    items: [
      {
        imageNode: Image1,
        name: t('title__feature_open_source'),
        description: t('title__feature_open_source_desc'),
      },
      {
        imageNode: Image4,
        name: t('title__feature_easy_to_use'),
        description: t('title__feature_easy_to_use_desc'),
      },
      {
        imageNode: Image3,
        name: t('title__feature_self_destruction_seal'),
        description: t('title__feature_self_destruction_seal_desc'),
      },
    ],
  };
}
