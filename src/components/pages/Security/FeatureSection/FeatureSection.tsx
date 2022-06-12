import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Section } from '../../../base';

import { MobileLayout } from './MobileLayout';
import { TabletLayout } from './TabletLayout';
import { Title } from './Title';
import { useFeatureSectionData } from './useFeatureSectionData';

export interface FeatureSectionProps {
  children?: ReactNode;
}

export const FeatureSection: FC<FeatureSectionProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const featureSectionData = useFeatureSectionData();

  return (
    <Section
      xs={{
        backgroundColor: theme.colors.test500,
        color: theme.colors.white,
        paddingTop: 56,
        paddingBottom: 72,
      }}
      l={{
        paddingTop: 120,
        paddingBottom: 120,
      }}
    >
      <Container>
        <Title {...featureSectionData} />
      </Container>

      {/* mobile */}
      <Box xs={{ display: 'block' }} m={{ display: 'none' }}>
        <MobileLayout />
      </Box>

      {/* tablet */}
      <Box
        xs={{ display: 'none' }}
        m={{ display: 'block' }}
        l={{ display: 'none' }}
      >
        <TabletLayout />
      </Box>

      <Box>{children}</Box>
    </Section>
  );
};
