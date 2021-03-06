import { FC, ReactNode } from 'react';

import { Section } from '../../../../base';

import { Cards } from './Cards';
import { ProductsTitle } from './ProductsTitle';

export interface ProductsProps {
  children?: ReactNode;
}

export const Products: FC<ProductsProps> = (props) => {
  const { children } = props;

  return (
    <Section>
      <ProductsTitle />

      <Cards />

      {children}
    </Section>
  );
};
