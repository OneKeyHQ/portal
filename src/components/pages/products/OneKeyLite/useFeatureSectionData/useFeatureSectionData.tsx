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
        name: t('title__feature_portable'),
        description: t('title__feature_portable_desc'),
      },
      {
        imageNode: Image6,
        name: t('title__feature_security'),
        description: t('title__feature_security_desc'),
      },
    ],
  };
}
