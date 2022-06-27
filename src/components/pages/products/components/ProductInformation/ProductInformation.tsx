import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Flex } from '../../../../base';

import { ProductContent, ProductContentProps } from './ProductContent';
import { ProductImageSwiper } from './ProductImageSwiper';

export interface ProductInformationProps extends ProductContentProps {
  children?: ReactNode;
}

export const ProductInformation: FC<ProductInformationProps> = (props) => {
  const { children, ...otherProps } = props;
  const theme = useTheme();

  return (
    <Box xs={{ backgroundColor: theme.colors.test100 }}>
      <Container>
        <Flex
          xs={{
            width: '100%',
            flexDirection: 'column',
            paddingTop: 100,
            paddingBottom: 60,
          }}
          l={{
            gap: 60,
            alignItems: 'flex-end',
            flexDirection: 'row',
          }}
          xl={{
            gap: 80,
          }}
        >
          <ProductImageSwiper />

          <ProductContent {...otherProps} />
        </Flex>
      </Container>
      {children}
    </Box>
  );
};
