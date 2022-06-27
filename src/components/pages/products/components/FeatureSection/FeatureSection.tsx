import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Flex, Section, Span } from '../../../../base';

import { FeatureItem, FeatureSectionDataItem } from './FeatureItem';

export interface FeatureSectionProps {
  children?: ReactNode;
  items: FeatureSectionDataItem[];
  title: string;
  description: string;
}

export const FeatureSection: FC<FeatureSectionProps> = (props) => {
  const { children, items: featureSectionData, title, description } = props;
  const theme = useTheme();

  return (
    <Section>
      <Container>
        <Box xs={{ paddingTop: 120 }}>
          <Flex xs={{ textAlign: 'center', gap: 20, flexDirection: 'column' }}>
            <Span
              xs={theme.text.medium800}
              m={theme.text.medium900}
              l={theme.text.medium1000}
            >
              {title}
            </Span>
            <Span xs={theme.text.normal200} l={theme.text.normal500}>
              {description}
            </Span>
          </Flex>
          <Flex
            xs={{
              gap: 32,
              paddingTop: 34,
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            m={{
              gap: 0,
              paddingTop: 80,
              alignItems: 'flex-start',
              flexDirection: 'row',
            }}
          >
            {featureSectionData.map((item) => (
              <FeatureItem key={item.name} {...item} />
            ))}
          </Flex>
        </Box>
      </Container>
      {children}
    </Section>
  );
};
