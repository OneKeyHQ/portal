import { FC, ReactNode } from 'react';

export interface ProductContentProps {
  children?: ReactNode;
}

export const ProductContent: FC<ProductContentProps> = (props) => {
  const { children } = props;

  return <div>ProductContent {children}</div>;
};
