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
      css={{
        '@media (min-width: 768px)': {
          flexDirection: 'row',
          gap: 20,
          '& > *': {
            flex: 1,
          },
        },
      }}
      xs={{ flexDirection: 'column', gap: 40 }}
    >
      <SetUpYourOnekeyHardwareWalletMediaCard />

      <MultiChainSupportMediaCard />

      {children}
    </Flex>
  );
};
