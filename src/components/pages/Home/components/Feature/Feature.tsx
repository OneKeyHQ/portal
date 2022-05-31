import { FC, ReactNode } from 'react';

import { useMediaQuery } from '../../../../../hooks';
import { Box } from '../../../../base';

import { MobileFeatureSection } from './MobileFeatureSection';
import { NormalFeatureSection } from './NormalFeatureSection';

export interface FeatureProps {
  children?: ReactNode;
}

export const Feature: FC<FeatureProps> = (props) => {
  const { children } = props;
  const mediaQuery = useMediaQuery();

  return (
    <Box>
      {mediaQuery.medium && <NormalFeatureSection />}
      {!mediaQuery.medium && <MobileFeatureSection />}

      {children}
    </Box>
  );
};