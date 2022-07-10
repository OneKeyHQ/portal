import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { splitMultiline, staticAssetPrefix } from '../../../../../utils';

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
      },
      frames: [
        ...new Array(70)
          .fill(0)
          .map((_, i) =>
            staticAssetPrefix(
              `/onekey-touch-feature-01/onekey-touch-feature-01_${i
                .toString()
                .padStart(4, '0')}.webp`,
            ),
          ),
      ],
    },
    {
      name: name2,
      description: t('title__carry_on_desc'),
      images: {
        s: <StaticImage src="./images/small/touch-hardware1.jpg" alt={name2} />,
        m: <StaticImage src="./images/large/touch-hardware1.jpg" alt={name2} />,
      },
      frames: [
        ...new Array(60)
          .fill(0)
          .map((_, i) =>
            staticAssetPrefix(
              `/onekey-touch-feature-02/onekey-touch-feature-02_${i
                .toString()
                .padStart(4, '0')}.webp`,
            ),
          ),
      ],
    },
    {
      name: splitMultiline(name3),
      description: t('title__one_platform_manage_all_desc'),
      images: {
        s: <StaticImage src="./images/small/touch-hardware2.jpg" alt={name3} />,
        m: <StaticImage src="./images/large/touch-hardware2.jpg" alt={name3} />,
      },
      frames: [
        ...new Array(60)
          .fill(0)
          .map((_, i) =>
            staticAssetPrefix(
              `/onekey-touch-feature-03/onekey-touch-feature-03_${i
                .toString()
                .padStart(4, '0')}.webp`,
            ),
          ),
      ],
    },
  ];

  return items;
}
