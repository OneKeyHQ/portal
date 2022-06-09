import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { AspectRatio, Box, Divider, Flex, Img, Span } from '../../../../base';

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
        width: 420,
        height: 720,
        borderRadius: 40,
        backgroundColor: theme.colors.test100,
      }}
    >
      <AspectRatio ratio={1}>
        <Flex xs={{ alignItems: 'center', justifyContent: 'center' }}>
          <Box xs={{ width: 166, height: 'auto' }}>
            <Img src={data.image} />
          </Box>
        </Flex>
      </AspectRatio>

      <Box xs={{ paddingLeft: 24, paddingRight: 24 }}>
        <Divider />
      </Box>

      <Flex xs={{ padding: 24, gap: 24, flexDirection: 'column' }}>
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
