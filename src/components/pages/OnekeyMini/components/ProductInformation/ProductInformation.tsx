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
        <Flex>
          <ProductImageSwiper />

          <ProductContent />
        </Flex>
      </Container>
      {children}
    </Box>
  );
};
