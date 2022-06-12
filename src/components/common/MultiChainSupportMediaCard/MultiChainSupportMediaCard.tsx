import { FC, ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Button } from '../../base';
import { InfoCard } from '../InfoCard';

export interface MultiChainSupportMediaCardProps {
  children?: ReactNode;
}

export const MultiChainSupportMediaCardData = {
  mainTitle: 'Multi-Chain Support',
  button: 'Check the full list',
  link: 'https://onekey.so/tokens',
  imageNode: (
    <StaticImage draggable={false} src="./images/2.png" alt="illustration" />
  ),
};

export const MultiChainSupportMediaCard: FC<MultiChainSupportMediaCardProps> = (
  props,
) => {
  const { children } = props;
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
