import { FC, ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Button } from '../../base';
import { InfoCard } from '../InfoCard';

export interface MultiChainSupportMediaCardProps {
  children?: ReactNode;
}

export const MultiChainSupportMediaCard: FC<MultiChainSupportMediaCardProps> = (
  props,
) => {
  const { t } = useTranslation();
  const { children } = props;
  const MultiChainSupportMediaCardData = {
    mainTitle: t('title__multi_chain_support'),
    button: t('action__check_the_full_list'),
    link: 'https://onekey.so/tokens',
    imageNode: (
      <StaticImage draggable={false} src="./images/2.png" alt="illustration" />
    ),
  };
  const { mainTitle, button, link, imageNode } = MultiChainSupportMediaCardData;

  return (
    <InfoCard
      link={link}
      mainTitle={mainTitle}
      imageNode={imageNode}
      buttonNode={<Button variant="outlined">{button}</Button>}
    >
      {children}
    </InfoCard>
  );
};
