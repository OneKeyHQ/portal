import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Section, Span } from '../../../../../base';

import { ProductCard } from './ProductCard';
import { RecommendSectionSwiper } from './RecommendSectionSwiper';
import { useRecommendSectionData } from './useRecommendSectionData';

export interface RecommendSectionProps {
  children?: ReactNode;
}

export const RecommendSection: FC<RecommendSectionProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const recommendSectionData = useRecommendSectionData();

  return (
    <Section
      xs={{ paddingBottom: 0, paddingTop: 70 }}
      m={{ paddingBottom: 120, paddingTop: 120 }}
    >
      <Box css={{ textAlign: 'center' }}>
        <Span xs={theme.text.medium800} m={theme.text.medium900}>
          You Might Also Like
        </Span>
      </Box>

      <Container>
        <Box xs={{ paddingTop: 40 }} m={{ paddingTop: 80 }}>
          <Box xs={{ display: 'block' }} m={{ display: 'none' }}>
            <RecommendSectionSwiper />
          </Box>

          <Box
            xs={{ display: 'none' }}
            m={{ display: 'flex', gap: 25, justifyContent: 'center' }}
          >
            {recommendSectionData.map((item) => (
              <ProductCard key={item.name} data={item} />
            ))}
          </Box>
        </Box>
      </Container>

      {children}
    </Section>
  );
};
