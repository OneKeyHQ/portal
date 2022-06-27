import { FeatureSectionProps } from '../../components/FeatureSection';
import { Image1, Image2, Image3 } from '../../components/FeatureSection/Images';

export function useFeatureSectionData(): FeatureSectionProps {
  return {
    title: 'Focus and Release',
    description:
      'Multi-Ways, Multi-Directions, Multi-Views to First Experiences',
    items: [
      {
        imageNode: Image1,
        name: 'Open source',
        description: 'Open source transparent, WYSIWYG.',
      },
      {
        imageNode: Image2,
        name: 'Light and mini sized',
        description: 'Battery-free, compact and durable, suitable for holders.',
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
