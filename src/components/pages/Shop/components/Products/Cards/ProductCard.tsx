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
              m={{ width: 480, height: 480 }}
              l={{ width: 516, height: 516 }}
              xl={{ width: 664, height: 664 }}
            >
              {image}
            </Box>
          </Flex>

          <Box xs={{ paddingLeft: 24, paddingRight: 24 }}>
            <Divider />
          </Box>

          <Flex
            xs={{
              color: theme.colors.test500,
              padding: '24px 24px 40px 24px',
              gap: 24,
              flexDirection: 'column',
            }}
          >
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
