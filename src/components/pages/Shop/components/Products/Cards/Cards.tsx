import { FC, ReactNode } from 'react';

import { Flex } from '../../../../../base';

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
      {Object.values(products.items).map((item) => (
        <ProductCard {...item} />
      ))}

      {children}
    </Flex>
  );
};
