import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, OnlyDisplay, Section, Span } from '../../../../base';

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
      xs={{ paddingBottom: 20, paddingTop: 20 }}
      m={{ paddingBottom: 40, paddingTop: 40 }}
    >
      <Box css={{ textAlign: 'center' }}>
        <Span xs={theme.text.medium800} m={theme.text.medium900}>
          You Might Also Like
        </Span>
      </Box>

      <Container>
        <Box xs={{ paddingTop: 40 }} m={{ paddingTop: 80 }}>
          <OnlyDisplay xs s m>
            <RecommendSectionSwiper />
          </OnlyDisplay>

          <OnlyDisplay l xl xxl>
            <Box m={{ display: 'flex', gap: 25, justifyContent: 'center' }}>
              {recommendSectionData.map((item) => (
                <ProductCard key={item.name} data={item} />
              ))}
            </Box>
          </OnlyDisplay>
        </Box>
      </Container>

      {children}
    </Section>
  );
};
