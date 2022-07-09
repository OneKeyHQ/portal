import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { splitMultiline, staticAssetPrefix } from '../../../../../utils';

export function useImageIntroductionData() {
  const { t } = useTranslation();
  const name1 = t('title__mini_sized');
  const name2 = t('title__security_built_right_in');
  const name3 = t('title__onekey_platform');

  const items = [
    {
      name: name1,
      description: t('title__mini_sized_desc'),
      textColor: 'black',
      images: {
        s: <StaticImage src="./images/s/hardware0.jpg" alt={name1} />,
        m: <StaticImage src="./images/m/hardware0.jpg" alt={name1} />,
      },
      frames: [
        ...new Array(60)
          .fill(0)
          .map((_, i) =>
            staticAssetPrefix(
              `/onekey-mini-feature-01/onekey-mini-feature-01_${i
                .toString()
                .padStart(4, '0')}.webp`,
            ),
          ),
        ...new Array(15)
          .fill(0)
          .map(() =>
            staticAssetPrefix(
              `/onekey-mini-feature-01/onekey-mini-feature-01_0060.webp`,
            ),
          ),
      ],
    },
    {
      name: splitMultiline(name2),
      description: t('title__security_built_right_in_desc'),
      textColor: 'black',
      images: {
        s: <StaticImage src="./images/s/hardware1.jpg" alt={name2} />,
        m: <StaticImage src="./images/m/hardware1.jpg" alt={name2} />,
      },
      frames: [
        ...new Array(60)
          .fill(0)
          .map((_, i) =>
            staticAssetPrefix(
              `/onekey-mini-feature-02/onekey-mini-feature-02_${i
                .toString()
                .padStart(4, '0')}.webp`,
            ),
          ),
        ...new Array(15)
          .fill(0)
          .map(() =>
            staticAssetPrefix(
              `/onekey-mini-feature-02/onekey-mini-feature-02_0060.webp`,
            ),
          ),
      ],
    },
    {
      name: splitMultiline(name3),
      description: t('title__onekey_platform_desc'),
      images: {
        s: <StaticImage src="./images/s/hardware2.jpg" alt={name3} />,
        m: <StaticImage src="./images/m/hardware2.jpg" alt={name3} />,
      },
      textColor: 'black',
      frames: [
        ...new Array(60)
          .fill(0)
          .map((_, i) =>
            staticAssetPrefix(
              `/onekey-mini-feature-03/onekey-mini-feature-03_${i
                .toString()
                .padStart(4, '0')}.webp`,
            ),
          ),
        ...new Array(15)
          .fill(0)
          .map(() =>
            staticAssetPrefix(
              `/onekey-mini-feature-03/onekey-mini-feature-03_0060.webp`,
            ),
          ),
      ],
    },
  ];

  return items;
}
