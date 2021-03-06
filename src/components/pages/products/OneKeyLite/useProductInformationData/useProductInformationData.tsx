import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { filterShops, useOneKeyProduct } from '../../../../../data';
import { ProductInformationProps } from '../../components/ProductInformation';

export function useProductInformationData(): ProductInformationProps {
  const { lite } = useOneKeyProduct();
  const { t } = useTranslation();

  return {
    status: lite.status,
    shops: filterShops([
      lite.shops.amazonGlobal,
      lite.shops.amazonJapan,
      lite.shops.youzan,
      lite.shops.shopify,
    ]),
    name: lite.name,
    slogan: t('content__recovery_phrase_backup_card'),
    description: lite.description,
    price: {
      value: lite.price,
      formatted: lite.formattedPrice,
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
