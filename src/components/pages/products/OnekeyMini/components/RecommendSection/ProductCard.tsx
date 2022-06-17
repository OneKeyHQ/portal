import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Divider, Flex, Img, Span } from '../../../../../base';

import { RecommendSectionDataItem } from './useRecommendSectionData';

export interface ProductCardProps {
  children?: ReactNode;
  data: RecommendSectionDataItem;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { children, data } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        maxWidth: 420,
        borderRadius: 40,
        backgroundColor: theme.colors.test100,
      }}
    >
      <Flex
        xs={{ padding: 50, alignItems: 'center', justifyContent: 'center' }}
      >
        <Box xs={{ width: 166, height: 'auto' }}>
          <Img src={data.image} />
        </Box>
      </Flex>

      <Box xs={{ paddingLeft: 24, paddingRight: 24 }}>
        <Divider />
      </Box>

      <Flex
        xs={{
          padding: '24px 24px 40px 24px',
          gap: 24,
          flexDirection: 'column',
        }}
      >
        <Flex xs={{ gap: 8, flexDirection: 'column' }}>
          <Span xs={theme.text.medium700}>{data.name}</Span>
          <Span xs={theme.text.normal400}>{data.description}</Span>
        </Flex>

        <Span xs={theme.text.normal700}>${data.price.toFixed(2)}</Span>
      </Flex>

      {children}
    </Box>
  );
};
