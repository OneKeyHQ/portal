import { FC, ReactNode } from 'react';

import { ProductSwiper } from './ProductSwiper';

export interface MobileProductSectionProps {
  children?: ReactNode;
}

export const MobileProductSection: FC<MobileProductSectionProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <ProductSwiper />
      {children}
    </div>
  );
};
