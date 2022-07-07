import { ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { useOneKeyProduct } from '../../../../../../data/useOneKeyProduct';

export type ProductItem = {
  name: string;
  description: string;
  price: number;
  formattedPrice: string;
  image: ReactNode;
  path: string;
};

export function useProductsData() {
  const oneKeyProduct = useOneKeyProduct();

  const mini: ProductItem = {
    ...oneKeyProduct.mini,
    image: (
      <StaticImage
        style={{ width: '100%', height: 'auto' }}
        src="./images/mini.png"
        alt="mini"
      />
    ),
  };

  const touch: ProductItem = {
    ...oneKeyProduct.touch,
    image: (
      <StaticImage
        style={{ width: '100%', height: 'auto' }}
        src="./images/touch.png"
        alt="touch"
      />
    ),
  };

  const lite: ProductItem = {
    ...oneKeyProduct.lite,
    image: (
      <StaticImage
        style={{ width: '100%', height: 'auto' }}
        src="./images/lite.png"
        alt="lite"
      />
    ),
  };

  return {
    items: { mini, touch, lite },
  } as const;
}
