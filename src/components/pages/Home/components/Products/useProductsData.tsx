import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { staticAssetPrefix } from '../../../../../utils';
import { GoToShopButton } from '../../../../base';
import { DownloadButton } from '../../../../common/DownloadButton';

export function useProductsData() {
  const { t } = useTranslation();

  const title1 = t('title__advanced_on_chain_wallet_app');
  const desc1 = t('title__advanced_on_chain_wallet_app_desc');

  const title2 = t('title__need_more_security__no_problem');
  const desc2 = t('title__need_more_security__no_problem_desc');

  return [
    {
      image: <StaticImage alt={title1} src="./images/product-image1.jpg" />,
      title: title1,
      description: desc1,
      button: <DownloadButton />,
      frames: new Array(60)
        .fill(0)
        .map((_, i) => staticAssetPrefix(`/home-intro/image${i}.jpg`)),
    },
    {
      image: <StaticImage alt={title2} src="./images/product-image2.jpg" />,
      title: title2,
      description: desc2,
      button: <GoToShopButton />,
    },
  ];
}
