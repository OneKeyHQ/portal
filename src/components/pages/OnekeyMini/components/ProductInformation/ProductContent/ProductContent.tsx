import { FC, ReactNode } from 'react';

import { Box } from '../../../../../base';

import { Review } from './Review';

export interface ProductContentProps {
  children?: ReactNode;
}

export const ProductContent: FC<ProductContentProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      ProductContent
      <Review />
      {children}
    </Box>
  );
};
