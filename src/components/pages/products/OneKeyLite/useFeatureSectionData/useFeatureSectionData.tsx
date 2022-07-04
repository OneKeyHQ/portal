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
        name: 'Portable',
        description: 'Easy to fits in wallet, pocket, envelope, card case...',
      },
      {
        imageNode: Image6,
        name: 'Security',
        description: '10 wrong code attempts trigger self-erase',
      },
    ],
  };
}
