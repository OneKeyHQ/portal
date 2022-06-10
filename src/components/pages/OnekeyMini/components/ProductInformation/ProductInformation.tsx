import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Flex } from '../../../../base';

import { ProductContent } from './ProductContent';
import { ProductImageSwiper } from './ProductImageSwiper';

export interface ProductInformationProps {
  children?: ReactNode;
}

export const ProductInformation: FC<ProductInformationProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box xs={{ backgroundColor: theme.colors.test100 }}>
      <Container>
        <Flex
          xs={{
            gap: 88,
            flexDirection: 'column',
            paddingTop: 60,
            paddingBottom: 60,
          }}
          l={{
            alignItems: 'flex-end',
            flexDirection: 'row',
          }}
        >
          <ProductImageSwiper />

          <ProductContent />
        </Flex>
      </Container>
      {children}
    </Box>
  );
};
