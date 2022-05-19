import { FC, ReactNode } from 'react';

import { useMediaQuery } from '../../../../../hooks';
import { Box } from '../../../../base';

import { MobileProductSection } from './MobileProductSection';
import { NormalProductSection } from './NormalProductSection';

export interface ProductsProps {
  children?: ReactNode;
}

export const Products: FC<ProductsProps> = (props) => {
  const { children } = props;
  const mediaQuery = useMediaQuery();

  return (
    <Box>
      {mediaQuery.large && <NormalProductSection />}
      {!mediaQuery.large && <MobileProductSection />}

      {children}
    </Box>
  );
};
