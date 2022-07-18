import { ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { useOneKeyProduct } from '../../../../../../data/useOneKeyProduct';

export type ProductItem = {
  name: string;
  description: string;
  price: number;
  formattedPrice: string;
  image: ReactNode;
  bigImage?: ReactNode;
  path: string;
};

export function useProductsData() {
  const oneKeyProduct = useOneKeyProduct();

  const mini: ProductItem = {
    ...oneKeyProduct.mini,
    image: (
      <StaticImage
        style={{ width: '100%', height: 'auto' }}
        src="./images/shop-product-card-mini.png"
        alt="mini"
      />
    ),
  };

  const touch: ProductItem = {
    ...oneKeyProduct.touch,
    image: (
      <StaticImage
        style={{ width: '100%', height: 'auto' }}
        src="./images/shop-product-card-touch.png"
        alt="touch"
      />
    ),
    bigImage: (
      <StaticImage
        style={{ width: '100%', height: 'auto' }}
        src="./images/shop-product-card-touchBig.png"
        alt="touch"
      />
    ),
  };

  const lite: ProductItem = {
    ...oneKeyProduct.lite,
    image: (
      <StaticImage
        style={{ width: '100%', height: 'auto' }}
        src="./images/shop-product-card-lite.png"
        alt="lite"
      />
    ),
  };

  return {
    items: { touch, mini, lite },
  } as const;
}
