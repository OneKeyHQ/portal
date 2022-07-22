import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Divider, Flex, Link, Span } from '../../../../../base';

import { ProductItem } from './useProductsData';

export interface BigProductCardProps extends ProductItem {
  children?: ReactNode;
}

export const BigProductCard: FC<BigProductCardProps> = (props) => {
  const { children, path, bigImage, name, description, formattedPrice } = props;
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
            alignItems: 'flex-end',
          }}
          key={name}
        >
          <Box m={{ flex: 1 }}>
            <Flex
              xs={{
                color: theme.colors.test500,
                padding: 64,
                gap: 24,
                flexDirection: 'column',
              }}
            >
              <Divider />

              <Flex xs={{ gap: 8, flexDirection: 'column' }}>
                <Span
                  xs={theme.text.medium700}
                  l={theme.text.medium900}
                  xl={theme.text.medium1000}
                >
                  {name}
                </Span>
                <Span
                  css={{ color: theme.colors.test400 }}
                  xs={theme.text.normal300}
                >
                  {description}
                </Span>
              </Flex>

              <Span xs={theme.text.normal900}>{formattedPrice}</Span>
            </Flex>
          </Box>

          <Box m={{ flex: 1 }}>{bigImage}</Box>
        </Flex>
      </Link>

      {children}
    </Box>
  );
};
