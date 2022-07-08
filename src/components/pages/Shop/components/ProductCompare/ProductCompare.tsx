import { FC, ReactNode } from 'react';

import { Section } from '../../../../base';

import { Compare } from './Compare';
import { ProductCompareTitle } from './ProductCompareTitle';

export interface ProductCompareProps {
  children?: ReactNode;
}

export const ProductCompare: FC<ProductCompareProps> = (props) => {
  const { children } = props;

  return (
    <Section>
      <ProductCompareTitle />

      <Compare />

      {children}
    </Section>
  );
};
