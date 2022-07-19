import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Flex, Section, Span } from '../../../../base';
import { SectionTitle } from '../../../../common';

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
            <SectionTitle>{title}</SectionTitle>

            <Span
              css={{ color: theme.colors.test400 }}
              xs={theme.text.normal200}
              l={theme.text.normal500}
            >
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
              paddingTop: 80,
              alignItems: 'flex-start',
              flexDirection: 'row',
            }}
            xl={{
              justifyContent: 'center',
              paddingLeft: 100,
              paddingRight: 100,
            }}
          >
            {featureSectionData.map((item) => (
              <Box key={item.name} xs={{ flex: 1 }} xxl={{ flex: '0 0 420px' }}>
                <FeatureItem {...item} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Container>
      {children}
    </Section>
  );
};
