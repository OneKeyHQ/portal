import { FC, ReactNode } from 'react';

import { Container, Flex, Section } from '../../../base';

import { ProductShowcaseSectionItem } from './ProductShowcaseSectionItem';
import { useProductShowcaseSectionData } from './useProductShowcaseSectionData';

export interface ProductShowcaseSectionProps {
  children?: ReactNode;
}

export const ProductShowcaseSection: FC<ProductShowcaseSectionProps> = (
  props,
) => {
  const { children } = props;
  const productShowcaseSectionData = useProductShowcaseSectionData();

  return (
    <Section>
      <Container>
        <Flex xs={{ gap: 60, flexDirection: 'column', paddingBottom: 80 }}>
          {productShowcaseSectionData.items.map((item) => (
            <ProductShowcaseSectionItem key={item.name} {...item} />
          ))}
        </Flex>
      </Container>

      {children}
    </Section>
  );
};
