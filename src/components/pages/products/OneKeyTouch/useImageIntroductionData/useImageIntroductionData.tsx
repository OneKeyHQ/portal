import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { splitMultiline } from '../../../../../utils';

export function useImageIntroductionData() {
  const { t } = useTranslation();
  const name1 = t('title__touch_it_feel_it');
  const name2 = t('title__carry_on');
  const name3 = t('title__one_platform_manage_all');

  const items = [
    {
      name: splitMultiline(name1),
      description: t('title__touch_it_feel_it_desc'),
      images: {
        s: <StaticImage src="./images/small/touch-hardware0.jpg" alt={name1} />,
        m: <StaticImage src="./images/large/touch-hardware0.jpg" alt={name1} />,
        l: <StaticImage src="./images/large/touch-hardware0.jpg" alt={name1} />,
        xl: (
          <StaticImage src="./images/large/touch-hardware0.jpg" alt={name1} />
        ),
      },
    },
    {
      name: name2,
      description: t('title__carry_on_desc'),
      images: {
        s: <StaticImage src="./images/small/touch-hardware1.jpg" alt={name2} />,
        m: <StaticImage src="./images/large/touch-hardware1.jpg" alt={name2} />,
        l: <StaticImage src="./images/large/touch-hardware1.jpg" alt={name2} />,
        xl: (
          <StaticImage src="./images/large/touch-hardware1.jpg" alt={name2} />
        ),
      },
    },
    {
      name: splitMultiline(name3),
      description: t('title__one_platform_manage_all_desc'),
      images: {
        s: <StaticImage src="./images/small/touch-hardware2.jpg" alt={name3} />,
        m: <StaticImage src="./images/large/touch-hardware2.jpg" alt={name3} />,
        l: <StaticImage src="./images/large/touch-hardware2.jpg" alt={name3} />,
        xl: (
          <StaticImage src="./images/large/touch-hardware2.jpg" alt={name3} />
        ),
      },
    },
  ];

  return items;
}
