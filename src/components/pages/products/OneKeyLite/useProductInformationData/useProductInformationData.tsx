import { StaticImage } from 'gatsby-plugin-image';
import { filterShops, useOneKeyProduct } from '../../../../../data';

export function useProductInformationData() {
  const { lite } = useOneKeyProduct();

  return {
    shops: filterShops([
      lite.shops.amazonGlobal,
      lite.shops.amazonJapan,
      lite.shops.youzan,
      lite.shops.shopify,
    ]),
    name: 'OneKey Lite',
    slogan: 'Recovery Phrase Backup Card',
    description: 'A higher definition of private key cold storage.',
    price: {
      value: 19.99,
      formatted: '$19.99',
    },
    shopProductId: '41263919366306',
    gallery: [
      {
        key: 'lite-gallery-00',
        node: <StaticImage alt="0" src="./images/lite-gallery-00.png" />,
      },
      {
        key: 'lite-gallery-01',
        node: <StaticImage alt="1" src="./images/lite-gallery-01.png" />,
      },
      {
        key: 'lite-gallery-02',
        node: <StaticImage alt="2" src="./images/lite-gallery-02.png" />,
      },
      {
        key: 'lite-gallery-03',
        node: <StaticImage alt="3" src="./images/lite-gallery-03.png" />,
      },
    ],
  };
}
