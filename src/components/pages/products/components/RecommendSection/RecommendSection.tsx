import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import {
  Box,
  Container,
  I18n,
  OnlyDisplay,
  Section,
  Span,
} from '../../../../base';

import { ProductCard } from './ProductCard';
import { RecommendSectionSwiper } from './RecommendSectionSwiper';
import { useRecommendSectionData } from './useRecommendSectionData';

export interface RecommendSectionProps {
  children?: ReactNode;
  include: string[];
}

export const RecommendSection: FC<RecommendSectionProps> = (props) => {
  const { children, include } = props;
  const theme = useTheme();
  const recommendSectionData = useRecommendSectionData();

  const data = recommendSectionData.items.filter((item) =>
    include.find((name) =>
      item.name.toLowerCase().includes(name.toLocaleLowerCase()),
    ),
  );

  return (
    <Section
      xs={{ paddingBottom: 20, paddingTop: 60 }}
      m={{ paddingBottom: 40, paddingTop: 80 }}
    >
      <Box css={{ textAlign: 'center' }}>
        <Span
          xs={{
            ...theme.text.medium800,
            color: theme.colors.test500,
          }}
          m={theme.text.medium900}
        >
          <I18n name="title__you_might_also_like" />
        </Span>
      </Box>

      <Container>
        <Box xs={{ paddingTop: 40 }} m={{ paddingTop: 80 }}>
          <OnlyDisplay xs s m>
            <RecommendSectionSwiper data={data} />
          </OnlyDisplay>

          <OnlyDisplay l xl xxl>
            <Box
              m={{
                display: 'flex',
                gap: 25,
                justifyContent: 'space-between',
              }}
            >
              {data.map((item) => (
                <Box xs={{ flex: 1 }} key={item.name}>
                  <ProductCard data={item} />
                </Box>
              ))}
            </Box>
          </OnlyDisplay>
        </Box>
      </Container>

      {children}
    </Section>
  );
};
