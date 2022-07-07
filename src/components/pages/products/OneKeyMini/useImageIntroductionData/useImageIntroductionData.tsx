import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { splitMultiline } from '../../../../../utils';

export function useImageIntroductionData() {
  const { t } = useTranslation();
  const name1 = t('title__mini_sized');
  const name2 = t('title__security_built_right_in');
  const name3 = t('title__onekey_platform');

  const items = [
    {
      name: name1,
      description: t('title__mini_sized_desc'),
      images: {
        s: <StaticImage src="./images/s/hardware0.jpg" alt={name1} />,
        m: <StaticImage src="./images/m/hardware0.jpg" alt={name1} />,
        l: <StaticImage src="./images/l/hardware0.jpg" alt={name1} />,
        xl: <StaticImage src="./images/xl/hardware0.jpg" alt={name1} />,
      },
    },
    {
      name: splitMultiline(name2),
      description: t('title__security_built_right_in_desc'),
      images: {
        s: <StaticImage src="./images/s/hardware1.jpg" alt={name2} />,
        m: <StaticImage src="./images/m/hardware1.jpg" alt={name2} />,
        l: <StaticImage src="./images/l/hardware1.jpg" alt={name2} />,
        xl: <StaticImage src="./images/xl/hardware1.jpg" alt={name2} />,
      },
    },
    {
      name: splitMultiline(name3),
      description: t('title__onekey_platform_desc'),
      images: {
        s: <StaticImage src="./images/s/hardware2.jpg" alt={name3} />,
        m: <StaticImage src="./images/m/hardware2.jpg" alt={name3} />,
        l: <StaticImage src="./images/l/hardware2.jpg" alt={name3} />,
        xl: <StaticImage src="./images/xl/hardware2.jpg" alt={name3} />,
      },
    },
  ];

  return items;
}
