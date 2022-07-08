import { ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { useOneKeyProduct } from '../../../../../../data/useOneKeyProduct';

import battery from './images/battery.svg';
import bluetooth from './images/bluetooth.svg';
import control from './images/control.svg';
import display144 from './images/display144.svg';
import display31 from './images/display31.svg';
import none from './images/none.svg';
import touch from './images/touch.svg';
import usbc from './images/usbc.svg';

export type ProductCompareDetailItem = {
  name: string;
  icon?: string;
  value?: string;
};

export type ProductCompareItem = {
  image: ReactNode;
  price: string;
  productDetailUrl: string;
  name: string;
  productCompareDetail: ProductCompareDetailItem[];
};

export function useProductCompareData(): {
  items: {
    mini: ProductCompareItem;
    touch: ProductCompareItem;
  };
} {
  const product = useOneKeyProduct();

  return {
    items: {
      mini: {
        image: <StaticImage src="./images/mini.png" alt="mini" />,
        name: product.mini.name,
        price: product.mini.formattedPrice,
        productDetailUrl: product.mini.path,
        productCompareDetail: [
          {
            name: 'CE, RoHS and CSPRNG',
            value: 'Certifications and Standards',
          },
          {
            name: 'display',
            icon: display144,
            value: '1.44 Inch IPS Display (Color)',
          },
          {
            name: 'control',
            icon: control,
            value: 'Control with Buttons',
          },
          {
            name: 'battery',
            icon: none,
            value: ' ',
          },
          {
            name: 'bluetooth',
            icon: none,
            value: ' ',
          },
          {
            name: 'connector',
            icon: usbc,
            value: 'USB-C Connector',
          },
        ],
      },
      touch: {
        image: <StaticImage src="./images/touch.png" alt="touch" />,
        name: product.touch.name,
        price: product.mini.formattedPrice,
        productDetailUrl: product.touch.path,
        productCompareDetail: [
          {
            name: 'CE, RoHS and CSPRNG',
            value: 'Certifications and Standards',
          },
          {
            name: 'display',
            icon: display31,
            value: '1.44 Inch IPS Display (Color)',
          },
          {
            name: 'control',
            icon: touch,
            value: 'Multi-Touch Screen',
          },
          {
            name: 'battery',
            icon: battery,
            value: '800mAh Battery',
          },
          {
            name: 'bluetooth',
            icon: bluetooth,
            value: 'Bluetooth',
          },
          {
            name: 'connector',
            icon: usbc,
            value: 'USB-C Connector',
          },
        ],
      },
    },
  };
}
