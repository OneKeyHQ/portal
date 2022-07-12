import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export function useMultiChainSupportMedia() {
  const { t } = useTranslation();

  return {
    mainTitle: t('title__multi_chain_support'),
    description: t('title__multi_chain_support_desc'),
    button: t('action__check_the_full_list'),
    link: 'https://onekey.so/tokens',
    imageNode: (
      <StaticImage draggable={false} src="./images/2.png" alt="illustration" />
    ),
  };
}
