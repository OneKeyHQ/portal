import { ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { CheckIcon } from '../../../base';

export type ProductShowcaseSectionDataItem = {
  name: string;
  description: string;
  imageNode: ReactNode;
  points: {
    text: string;
    iconNode: ReactNode;
  }[];
  button: {
    text: string;
  };
  layout: string[];
};

export type ProductShowcaseSectionDataItems = ProductShowcaseSectionDataItem[];

const tempIcon = <CheckIcon width={24} height={24} />;
const tempImage = <StaticImage src="./images/export.jpg" alt="image" />;

export function useProductShowcaseSectionData(): {
  items: ProductShowcaseSectionDataItems;
} {
  return {
    items: [
      {
        layout: ['text', 'image'],
        name: 'Co-Branded Standard',
        description:
          'PLACE HOLDER: OneKey provides best-in-class security for encrypted assets without compromising ',
        imageNode: tempImage,
        points: [
          {
            iconNode: tempIcon,
            text: 'Logo engraving',
          },
          {
            iconNode: tempIcon,
            text: 'Minimum 100 units',
          },
        ],
        button: {
          text: 'Contact us',
        },
      },
      {
        layout: ['image', 'text'],
        name: 'Co-Branded Pro Team',
        description:
          'PLACE HOLDER: OneKey provides best-in-class security for encrypted assets without compromising ',
        imageNode: tempImage,
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
            text: 'Minimum 300 units',
          },
        ],
        button: {
          text: 'Contact us',
        },
      },
      {
        layout: ['text', 'image'],
        name: 'Dropshipping',
        description:
          'PLACE HOLDER: OneKey provides best-in-class security for encrypted assets without compromising ',
        imageNode: tempImage,
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
          {
            iconNode: tempIcon,
            text: 'Minimum 1000 units',
          },
        ],
        button: {
          text: 'Contact us',
        },
      },
    ],
  };
}
