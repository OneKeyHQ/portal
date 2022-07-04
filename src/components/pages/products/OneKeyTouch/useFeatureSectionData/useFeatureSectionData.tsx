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
        name: 'Open source',
        description: 'Open source transparent, WYSIWYG.',
      },
      {
        imageNode: Image4,
        name: 'Easy to use',
        description: 'Beginner friendly.',
      },
      {
        imageNode: Image3,
        name: 'Self-destruction seal',
        description:
          'To ensure every new items on your hand, every step is for safety.',
      },
    ],
  };
}
