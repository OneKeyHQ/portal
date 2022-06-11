import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Section } from '../../../base';

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
    >
      <Container>
        <Box>
          <Title {...featureSectionData} />

          <Box>
            {featureSectionData.items.map((feature) => (
              <Box key={feature.name}>{feature.imageNode}</Box>
            ))}
          </Box>

          <Box>{children}</Box>
        </Box>
      </Container>
    </Section>
  );
};
