import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Flex } from '../../../../base';

import { ProductContent, ProductContentProps } from './ProductContent';
import {
  ProductImageSwiper,
  ProductImageSwiperProps,
} from './ProductImageSwiper';

type ChildrenProps = ProductContentProps & ProductImageSwiperProps;

export interface ProductInformationProps extends ChildrenProps {
  children?: ReactNode;
}

export const ProductInformation: FC<ProductInformationProps> = (props) => {
  const { children, gallery, ...otherProps } = props;
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
          <ProductImageSwiper gallery={gallery} />

          <ProductContent {...otherProps} />
        </Flex>
      </Container>
      {children}
    </Box>
  );
};
