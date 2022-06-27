import { StaticImage } from 'gatsby-plugin-image';

import { useNavigationDataObject } from '../../../common/Navigation/useNavigationData';

import { useImageIntroductionData } from './useImageIntroductionData';

export function useOnekeyMiniData() {
  const { shop } = useNavigationDataObject();

  const imageIntroduction = useImageIntroductionData();

  const onekeyMiniData = {
    imageIntroduction,

    title: 'Onekey Mini',
    shops: shop.subItems,
    name: 'Onekey Mini',
    slogan: 'Crypto Hardware Wallet',
    description:
      'Secure, buy, exchange, grow your crypto and manage your NFTs with our new Bluetooth-enabled hardware wallet. All your digital assets secured in one place.',
    price: {
      value: 58,
      formatted: '$58.00',
    },
    shopProductId: '41169098178722',
    gallery: [
      {
        key: 'mini-gallery-00',
        node: <StaticImage alt="0" src="./images/mini-gallery-00.png" />,
      },
      {
        key: 'mini-gallery-01',
        node: <StaticImage alt="1" src="./images/mini-gallery-01.png" />,
      },
      {
        key: 'mini-gallery-02',
        node: <StaticImage alt="2" src="./images/mini-gallery-02.png" />,
      },
      {
        key: 'mini-gallery-03',
        node: <StaticImage alt="3" src="./images/mini-gallery-03.png" />,
      },
      {
        key: 'mini-gallery-04',
        node: <StaticImage alt="4" src="./images/mini-gallery-04.png" />,
      },
      {
        key: 'mini-gallery-05',
        node: <StaticImage alt="5" src="./images/mini-gallery-05.png" />,
      },
    ],
  };

  return onekeyMiniData;
}
