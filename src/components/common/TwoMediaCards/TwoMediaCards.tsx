import { FC, ReactNode } from 'react';

import { Flex } from '../../base/Flex';
import { MultiChainSupportMediaCard } from '../MultiChainSupportMediaCard';
import { SetUpYourOnekeyHardwareWalletMediaCard } from '../SetUpYourOnekeyHardwareWalletMediaCard';

export interface TwoMediaCardsProps {
  children?: ReactNode;
}

export const TwoMediaCards: FC<TwoMediaCardsProps> = (props) => {
  const { children } = props;

  return (
    <Flex
      xs={{ flexDirection: 'column', gap: 24 }}
      m={{ flexDirection: 'row' }}
    >
      <SetUpYourOnekeyHardwareWalletMediaCard />

      <MultiChainSupportMediaCard />

      {children}
    </Flex>
  );
};
