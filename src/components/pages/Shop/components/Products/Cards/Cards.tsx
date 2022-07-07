import { FC, ReactNode } from 'react';

import { Box, Flex, OnlyDisplay } from '../../../../../base';

import { BigProductCard } from './BigProductCard';
import { ProductCard } from './ProductCard';
import { useProductsData } from './useProductsData';

export interface CardsProps {
  children?: ReactNode;
}

export const Cards: FC<CardsProps> = (props) => {
  const { children } = props;
  const products = useProductsData();

  return (
    <Flex
      xs={{
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <OnlyDisplay xs s>
        <Flex
          xs={{
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {Object.values(products.items).map((item) => (
            <ProductCard {...item} />
          ))}
        </Flex>
      </OnlyDisplay>

      <OnlyDisplay m l xl xxl>
        <Flex
          xs={{
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <BigProductCard {...products.items.touch} />

          <Flex xs={{ gap: 16 }}>
            <Box xs={{ flex: 1 }}>
              <ProductCard {...products.items.mini} />
            </Box>
            <Box xs={{ flex: 1 }}>
              <ProductCard {...products.items.lite} />
            </Box>
          </Flex>
        </Flex>
      </OnlyDisplay>

      {children}
    </Flex>
  );
};
