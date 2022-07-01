import { ReactNode, useEffect } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Loader } from 'pixi.js';

import { NonEmptyArray } from '../../../../../types';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';

export type SecurityDataItem = {
  image: ReactNode;
  title: string;
  description: string;
};

export function useSecurityData(): NonEmptyArray<SecurityDataItem> {
  const { t } = useTranslation();
  useEffect(() => {
    new Loader().add([image1, image2, image3, image4]).load();
  }, []);

  const title1 = t('title__your_crypto_in_your_hands');
  const title2 = t('title__simple_yet_secure');
  const title3 = t('title__truly_open_source');
  const title4 = t('title__end_to_end_encryption');

  return [
    {
      image: <StaticImage src="./images/image1.jpg" alt={title1} />,
      title: title1,
      description: t('title__your_crypto_in_your_hands_desc'),
    },
    {
      image: <StaticImage src="./images/image2.jpg" alt={title2} />,
      title: title2,
      description: t('title__simple_yet_secure_desc'),
    },
    {
      image: <StaticImage src="./images/image3.jpg" alt={title3} />,
      title: title3,
      description: t('title__truly_open_source_desc'),
    },
    {
      image: <StaticImage src="./images/image4.jpg" alt={title4} />,
      title: title4,
      description: t('title__end_to_end_encryption_desc'),
    },
  ];
}
