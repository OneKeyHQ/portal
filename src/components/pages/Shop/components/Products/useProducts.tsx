import { ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { useOneKeyProduct } from '../../../../../data/useOneKeyProduct';

export type ProductItem = {
  name: string;
  description: string;
  price: number;
  formattedPrice: string;
  image: ReactNode;
  path: string;
};

export function useRecommendSectionData() {
  const oneKeyProduct = useOneKeyProduct();

  const mini: ProductItem = {
    ...oneKeyProduct.mini,
    image: <StaticImage src="./images/mini.png" alt="mini" />,
  };

  const touch: ProductItem = {
    ...oneKeyProduct.touch,
    image: <StaticImage src="./images/touch.png" alt="touch" />,
  };

  const lite: ProductItem = {
    ...oneKeyProduct.lite,
    image: <StaticImage src="./images/lite.png" alt="lite" />,
  };

  return {
    items: { mini, touch, lite },
  } as const;
}
