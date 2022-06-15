import { ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { useContactUs } from '../../../../data';
import { CheckIcon } from '../../../base';

export type ProductShowcaseSectionDataItem = {
  name: string;
  description: string;
  imageNode: ReactNode;
  units: string;
  points: {
    text: string;
    iconNode: ReactNode;
  }[];
  button: {
    text: string;
    url: string;
  };
};

export type ProductShowcaseSectionDataItems = ProductShowcaseSectionDataItem[];

const tempIcon = <CheckIcon width={24} height={24} />;

export function useProductShowcaseSectionData(): {
  items: ProductShowcaseSectionDataItems;
} {
  const contactUs = useContactUs();

  return {
    items: [
      {
        name: 'Co-Branded Standard',
        units: 'Minimum 100 units',
        description:
          "Personalize your OneKey's latest device with a custom engraving.",
        imageNode: <StaticImage src="./images/co-intro-0.jpg" alt="image" />,
        points: [
          {
            iconNode: tempIcon,
            text: 'Logo engraving',
          },
        ],
        button: {
          text: 'Contact us',
          url: contactUs.url,
        },
      },
      {
        name: 'Pro Team',
        units: 'Minimum 300 units',
        description:
          'Promote and personalize your latest OneKey device. Services range from engraving the hardware wallet to customizations of packaging, cards and sleeves.',
        imageNode: <StaticImage src="./images/co-intro-1.jpg" alt="image" />,
        points: [
          {
            iconNode: tempIcon,
            text: 'Logo engraving',
          },
          {
            iconNode: tempIcon,
            text: 'Custom packaging',
          },
        ],
        button: {
          text: 'Contact us',
          url: contactUs.url,
        },
      },
      {
        name: 'Dropshipping',
        units: 'Minimum 1000 units',
        description:
          "We'll design the product together, and OneKey will take care of the rest of the process - this includes delivery logistics.",
        imageNode: <StaticImage src="./images/co-intro-2.jpg" alt="image" />,
        points: [
          {
            iconNode: tempIcon,
            text: 'Logo engraving',
          },
          {
            iconNode: tempIcon,
            text: 'Custom packaging',
          },
          {
            iconNode: tempIcon,
            text: 'Deliver to end-users',
          },
        ],
        button: {
          text: 'Contact us',
          url: contactUs.url,
        },
      },
    ],
  };
}
