import { FC, ReactNode } from 'react';

import { Box } from '../../../../base';

import { NormalProductSection } from './NormalProductSection';

export interface ProductsProps {
  children?: ReactNode;
}

export const Products: FC<ProductsProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      <NormalProductSection />

      {children}
    </Box>
  );
};
