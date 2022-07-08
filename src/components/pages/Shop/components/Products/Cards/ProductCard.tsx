import { FC, Fragment, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Divider, Flex, Link, Span } from '../../../../../base';

import { ProductItem } from './useProductsData';

export interface ProductCardProps extends ProductItem {
  children?: ReactNode;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { children, path, image, name, description, formattedPrice } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        borderRadius: 40,
        backgroundColor: theme.colors.test100,
      }}
    >
      <Link to={path}>
        <Fragment key={name}>
          <Flex xs={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box
              m={{ width: 360, height: 360 }}
              l={{ width: 480, height: 480 }}
              xl={{ width: 516, height: 516 }}
              xxl={{ width: 664, height: 664 }}
            >
              {image}
            </Box>
          </Flex>

          <Flex
            xs={{
              color: theme.colors.test500,
              padding: 24,
              gap: 24,
              flexDirection: 'column',
            }}
            m={{ padding: '32px 64px' }}
            l={{ padding: 64 }}
          >
            <Divider />

            <Flex xs={{ gap: 8, flexDirection: 'column' }}>
              <Span xs={theme.text.medium700}>{name}</Span>
              <Span xs={theme.text.normal400}>{description}</Span>
            </Flex>

            <Span xs={theme.text.normal700}>{formattedPrice}</Span>
          </Flex>
        </Fragment>
      </Link>

      {children}
    </Box>
  );
};
