import { FC, ReactNode } from 'react';

export interface ProductCompareProps {
  children?: ReactNode;
}

export const ProductCompare: FC<ProductCompareProps> = (props) => {
  const { children } = props;

  return <div>ProductCompare {children}</div>;
};
