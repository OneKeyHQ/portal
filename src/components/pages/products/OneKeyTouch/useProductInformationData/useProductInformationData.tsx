import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { useOneKeyProduct } from '../../../../../data';
import { ProductInformationProps } from '../../components/ProductInformation';

export function useProductInformationData(): ProductInformationProps {
  const { touch } = useOneKeyProduct();
  const { t } = useTranslation();

  return {
    status: 'comingSoon',
    shops: [],
    name: touch.name,
    slogan: t('content__crypto_hardware_wallet'),
    description: touch.description,
    price: {
      value: touch.price,
      formatted: touch.formattedPrice,
    },
    shopProductId: '41169098178722',
    gallery: [
      {
        key: 'touch-gallery-00',
        node: <StaticImage alt="0" src="./images/touch-gallery-00.png" />,
      },
      {
        key: 'touch-gallery-01',
        node: <StaticImage alt="1" src="./images/touch-gallery-01.png" />,
      },
      {
        key: 'touch-gallery-02',
        node: <StaticImage alt="2" src="./images/touch-gallery-02.png" />,
      },
      {
        key: 'touch-gallery-03',
        node: <StaticImage alt="3" src="./images/touch-gallery-03.png" />,
      },
      // {
      //   key: 'touch-gallery-04',
      //   node: <StaticImage alt="4" src="./images/touch-gallery-04.png" />,
      // },
    ],
  };
}
