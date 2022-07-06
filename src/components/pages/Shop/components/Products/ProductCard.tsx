import { FC, Fragment, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Divider, Flex, Link, Span } from '../../../../base';

import { ProductItem } from './useProducts';

export interface ProductCardProps {
  children?: ReactNode;
  data: ProductItem;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { children, data } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        borderRadius: 40,
        backgroundColor: theme.colors.test100,
      }}
    >
      <Link to={data.path}>
        <Fragment key={data.name}>
          <Flex
            xs={{ padding: 50, alignItems: 'center', justifyContent: 'center' }}
          >
            <Box xs={{ position: 'relative' }}>
              <Box
                xs={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  transition: theme.transitions.allCubicBezier,
                }}
              >
                {data.image}
              </Box>
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
              <Span xs={theme.text.medium700}>{data.name}</Span>
              <Span xs={theme.text.normal400}>{data.description}</Span>
            </Flex>

            <Span xs={theme.text.normal700}>{data.formattedPrice}</Span>
          </Flex>
        </Fragment>
      </Link>

      {children}
    </Box>
  );
};
