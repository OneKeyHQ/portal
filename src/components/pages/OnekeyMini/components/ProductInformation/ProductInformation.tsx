import { FC, ReactNode } from 'react';

export interface ProductInformationProps {
  children?: ReactNode;
}

export const ProductInformation: FC<ProductInformationProps> = (props) => {
  const { children } = props;

  return <div>ProductInformation {children}</div>;
};
