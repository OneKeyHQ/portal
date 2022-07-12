import { FC, ReactNode } from 'react';

import { Button } from '../../base';
import { InfoCard } from '../InfoCard';

import { useMultiChainSupportMedia } from './useMultiChainSupportMedia';

export interface MultiChainSupportMediaCardProps {
  children?: ReactNode;
}

export const MultiChainSupportMediaCard: FC<MultiChainSupportMediaCardProps> = (
  props,
) => {
  const { children } = props;
  const MultiChainSupportMediaCardData = useMultiChainSupportMedia();
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
