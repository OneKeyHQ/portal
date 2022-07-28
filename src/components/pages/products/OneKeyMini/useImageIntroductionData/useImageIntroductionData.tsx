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
        s: (
          <StaticImage
            src="./images/s/mini-information-mobile-01.jpg"
            alt={name1}
          />
        ),
        m: (
          <StaticImage
            src="./images/m/mini-information-tablet-01.jpg"
            alt={name1}
          />
        ),
      },
      frames: [
        ...new Array(60)
          .fill(0)
          .map((_, i) =>
            staticAssetPrefix(
              `/1920-onekey-mini-feature-01/onekey-mini-feature-01_${i
                .toString()
                .padStart(4, '0')}.webp`,
            ),
          ),
      ],
    },
    {
      name: splitMultiline(name2),
      description: t('title__security_built_right_in_desc'),
      textColor: 'black',
      images: {
        s: (
          <StaticImage
            src="./images/s/mini-information-mobile-02.jpg"
            alt={name2}
          />
        ),
        m: (
          <StaticImage
            src="./images/m/mini-information-tablet-02.jpg"
            alt={name2}
          />
        ),
      },
      frames: [
        ...new Array(60)
          .fill(0)
          .map((_, i) =>
            staticAssetPrefix(
              `/1920-onekey-mini-feature-02/onekey-mini-feature-02_${i
                .toString()
                .padStart(4, '0')}.webp`,
            ),
          ),
      ],
    },
    {
      name: splitMultiline(name3),
      description: t('title__onekey_platform_desc'),
      images: {
        s: (
          <StaticImage
            src="./images/s/mini-information-mobile-03.jpg"
            alt={name3}
          />
        ),
        m: (
          <StaticImage
            src="./images/m/mini-information-tablet-03.jpg"
            alt={name3}
          />
        ),
      },
      textColor: 'black',
      frames: [
        ...new Array(60)
          .fill(0)
          .map((_, i) =>
            staticAssetPrefix(
              `/1920-onekey-mini-feature-03/onekey-mini-feature-03_${i
                .toString()
                .padStart(4, '0')}.webp`,
            ),
          ),
      ],
    },
  ];

  return items;
}
