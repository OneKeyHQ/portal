import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export function useCardsData() {
  const { t } = useTranslation();

  return [
    {
      mainTitle: t('title__set_up_your_onekey_hardware_wallet'),
      button: t('action__getting_started'),
      link: 'https://help.onekey.so/hc/en-us/articles/4930350875919',
      imageNode: (
        <StaticImage
          draggable={false}
          src="./images/1.png"
          alt="illustration1"
        />
      ),
    },
  ];
}
