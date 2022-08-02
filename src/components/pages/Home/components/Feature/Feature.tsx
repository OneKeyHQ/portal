import { FC, ReactNode } from 'react';

import { Box, OnlyDisplay } from '../../../../base';

import { MobileFeatureSection } from './MobileFeatureSection';
import { NormalFeatureSection } from './NormalFeatureSection';

export interface FeatureProps {
  children?: ReactNode;
}

export const Feature: FC<FeatureProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      <OnlyDisplay m l xl xxl>
        <NormalFeatureSection />
      </OnlyDisplay>

      <OnlyDisplay xs s>
        <MobileFeatureSection />
      </OnlyDisplay>

      {children}
    </Box>
  );
};
