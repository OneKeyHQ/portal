import { FC, ReactNode } from 'react';

export interface ProductsProps {
  children?: ReactNode;
}

export const Products: FC<ProductsProps> = (props) => {
  const { children } = props;

  return <div>Products {children}</div>;
};
