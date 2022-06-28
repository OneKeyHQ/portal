import { FeatureSectionProps } from '../../components/FeatureSection';
import { Image5, Image6 } from '../../components/FeatureSection/Images';

export function useFeatureSectionData(): FeatureSectionProps {
  return {
    title: 'Focus and Release',
    description:
      'Multi-ways, multi-directions, multi-views to first experiences',
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
