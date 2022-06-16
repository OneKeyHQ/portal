import { ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

export function useFeatureSectionData(): FeatureSectionDataItem[] {
  return [
    {
      imageNode: <StaticImage alt="illustration" src="./images/Product1.jpg" />,
      name: 'Open source',
      description: 'Open source transparent, WYSIWYG.',
    },
    {
      imageNode: <StaticImage alt="illustration" src="./images/Product2.jpg" />,
      name: 'Light and mini sized',
      description: 'Battery-free, compact and durable, suitable for holders.',
    },
    {
      imageNode: <StaticImage alt="illustration" src="./images/Product3.jpg" />,
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
