import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { splitMultiline } from '../../../../../utils';

export function useImageIntroductionData() {
  const { t } = useTranslation();
  const name1 = t('title__restore_your_wallet_without_typing_one_word');
  const name2 = t('title__scan_set_code_backed_up');
  const name3 = t('title__water_resistance_also_tear_resistant');

  const items = [
    {
      name: splitMultiline(name1),
      description: ``,
      video: '/video/onekey-lite-feature-01.mp4',
      images: {},
    },
    {
      name: splitMultiline(name2),
      description: t('title__scan_set_code_backed_up_desc'),
      images: {
        s: <StaticImage src="./images/small/hardware1.jpg" alt={name2} />,
        m: <StaticImage src="./images/large/hardware1.jpg" alt={name2} />,
        l: <StaticImage src="./images/large/hardware1.jpg" alt={name2} />,
        xl: <StaticImage src="./images/large/hardware1.jpg" alt={name2} />,
      },
    },
    {
      name: splitMultiline(name3),
      description: t('title__water_resistance_also_tear_resistant_desc'),
      images: {
        s: <StaticImage src="./images/small/hardware2.jpg" alt={name3} />,
        m: <StaticImage src="./images/large/hardware2.jpg" alt={name3} />,
        l: <StaticImage src="./images/large/hardware2.jpg" alt={name3} />,
        xl: <StaticImage src="./images/large/hardware2.jpg" alt={name3} />,
      },
    },
  ];

  return items;
}
