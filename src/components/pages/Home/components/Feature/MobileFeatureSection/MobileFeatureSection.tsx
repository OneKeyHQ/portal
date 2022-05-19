import { FC, ReactNode } from 'react';

import { Box, Container } from '../../../../../base';
import { FeatureHeader } from '../FeatureHeader';

import { MobileFeatureSectionSwiper } from './MobileFeatureSectionSwiper';

export interface MobileFeatureSectionProps {
  children?: ReactNode;
}

export const MobileFeatureSection: FC<MobileFeatureSectionProps> = (props) => {
  const { children } = props;

  return (
    <Box
      xs={{
        borderRadius: 32,
        backgroundColor: '#f0f1f2',
        label: 'MobileFeatureSection',
        paddingTop: 72,
        paddingBottom: 72,
      }}
    >
      <Container>
        <FeatureHeader />
      </Container>

      <Box xs={{ paddingTop: 64 }}>
        <MobileFeatureSectionSwiper />
      </Box>

      {children}
    </Box>
  );
};
