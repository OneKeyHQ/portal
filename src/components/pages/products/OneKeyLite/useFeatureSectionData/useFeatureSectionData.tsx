import { useTranslation } from 'gatsby-plugin-react-i18next';

import { FeatureSectionProps } from '../../components/FeatureSection';
import { Image5, Image6 } from '../../components/FeatureSection/Images';

export function useFeatureSectionData(): FeatureSectionProps {
  const { t } = useTranslation();

  return {
    title: t('title__focus_and_release'),
    description: t('title__focus_and_release_desc'),
    items: [
      {
        imageNode: Image5,
        name: t('title__portable'),
        description: t('title__portable_lite_feature_desc'),
      },
      {
        imageNode: Image6,
        name: t('title__security'),
        description: t('title__security_lite_feature_desc'),
      },
    ],
  };
}
