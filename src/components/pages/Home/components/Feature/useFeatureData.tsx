import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export function useFeatureData() {
  const { t } = useTranslation();

  const title1 = t('title__free_and_open_source');
  const title2 = t('title__trade_at_the_best_price');
  const title3 = t('title__peace_of_mind');
  const title4 = t('title__all_platforms_covered');

  return [
    {
      image: <StaticImage src="./images/home-software-01.png" alt={title1} />,
      title: title1,
      description: t('title__free_and_open_source_desc'),
    },
    {
      image: <StaticImage src="./images/home-software-02.png" alt={title2} />,
      title: title2,
      description: t('title__trade_at_the_best_price_desc'),
    },
    {
      image: <StaticImage src="./images/home-software-03.png" alt={title3} />,
      title: title3,
      description: t('title__peace_of_mind_desc'),
    },
    {
      image: <StaticImage src="./images/home-software-04.png" alt={title4} />,
      title: title4,
      description: t('title__all_platforms_covered_desc'),
    },
  ];
}
