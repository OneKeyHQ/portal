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
    image: <StaticImage src="./images/miniHover.png" alt="mini" />,
  };

  const touch: ProductItem = {
    ...oneKeyProduct.touch,
    image: <StaticImage src="./images/touchHover.png" alt="mini" />,
  };

  const pro: ProductItem = {
    ...oneKeyProduct.pro,
    image: <StaticImage src="./images/proHover.png" alt="mini" />,
  };

  const lite: ProductItem = {
    ...oneKeyProduct.lite,
    image: <StaticImage src="./images/liteHover.png" alt="mini" />,
  };

  return {
    items: { mini, touch, pro, lite },
  } as const;
}
