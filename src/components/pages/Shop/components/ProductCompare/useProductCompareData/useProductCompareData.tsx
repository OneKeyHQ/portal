import { StaticImage } from 'gatsby-plugin-image';

import { useOneKeyProduct } from '../../../../../../data/useOneKeyProduct';

export type ProductCompareDetailItem = {
  name: string;
  icon: string;
  value: string;
};

export function useProductCompareData() {
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
            name: '',
            value: '',
          },
        ],
      },
      touch: {
        image: <StaticImage src="./images/touch.png" alt="touch" />,
        name: product.touch.name,
        price: product.mini.formattedPrice,
        productDetailUrl: product.touch.path,
      },
    },
  };
}
