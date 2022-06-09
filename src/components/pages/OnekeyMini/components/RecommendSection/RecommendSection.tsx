import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Flex, Section, Span } from '../../../../base';

import { ProductCard } from './ProductCard';
import { useRecommendSectionData } from './useRecommendSectionData';

export interface RecommendSectionProps {
  children?: ReactNode;
}

export const RecommendSection: FC<RecommendSectionProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const recommendSectionData = useRecommendSectionData();

  return (
    <Section xs={{ paddingBottom: 120, paddingTop: 120 }}>
      <Box css={{ textAlign: 'center' }}>
        <Span xs={theme.text.medium800} m={theme.text.medium900}>
          You Might Also Like
        </Span>
      </Box>

      <Container>
        <Box xs={{ paddingTop: 80 }}>
          <Flex>
            {recommendSectionData.map((item) => (
              <ProductCard key={item.name} data={item} />
            ))}
          </Flex>
        </Box>
      </Container>

      {children}
    </Section>
  );
};
