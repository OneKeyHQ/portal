import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Section } from '../../../base';

import { ImageSwitcher } from './ImageSwitcher';
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
      <Box>
        <Container>
          <Title {...featureSectionData} />
        </Container>

        <ImageSwitcher
          imageNodes={featureSectionData.items.map((item) => item.imageNode)}
        />

        <Box>{children}</Box>
      </Box>
    </Section>
  );
};
