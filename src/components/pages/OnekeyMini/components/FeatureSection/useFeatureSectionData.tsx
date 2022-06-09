import { ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

export function useFeatureSectionData(): FeatureSectionDataItem[] {
  return [
    {
      imageNode: <StaticImage alt="illustration" src="./images/image.png" />,
      name: 'Open source',
      description: 'Open source Transparent, WYSIWYG',
    },
    {
      imageNode: <StaticImage alt="illustration" src="./images/image.png" />,
      name: 'Easy to use',
      description: 'Beginner friendly',
    },
    {
      imageNode: <StaticImage alt="illustration" src="./images/image.png" />,
      name: 'Self-destruction seal',
      description:
        'To ensure every new items on your hand, every step is for safety.',
    },
  ];
}

export type FeatureSectionDataItem = {
  imageNode: ReactNode;
  name: string;
  description: string;
};
