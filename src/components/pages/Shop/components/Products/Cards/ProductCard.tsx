import { FC, ReactNode } from 'react';

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
        <Flex
          xs={{
            boxSizing: 'border-box',
            padding: 24,
            gap: 24,
            flexDirection: 'column',
          }}
          m={{ padding: '32px 64px' }}
          xl={{ padding: 64 }}
        >
          <Flex
            xs={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              s={{ width: 360, height: 360 }}
              m={{ width: 260, height: 260 }}
              l={{ width: 360, height: 360 }}
              xl={{ width: 516, height: 516 }}
              xxl={{ width: 600, height: 600 }}
            >
              {image}
            </Box>
          </Flex>

          <Flex
            xs={{
              color: theme.colors.test500,
              gap: 24,
              flexDirection: 'column',
            }}
          >
            <Divider />

            <Flex xs={{ gap: 8, flexDirection: 'column' }}>
              <Span xs={theme.text.medium700} l={theme.text.medium800}>
                {name}
              </Span>
              <Span
                css={{ color: theme.colors.test400 }}
                xs={theme.text.normal400}
              >
                {description}
              </Span>
            </Flex>

            <Span xs={theme.text.normal700}>{formattedPrice}</Span>
          </Flex>
        </Flex>
      </Link>

      {children}
    </Box>
  );
};
