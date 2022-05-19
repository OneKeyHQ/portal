import { FC, ReactNode } from 'react';

export interface MobileProductSectionItemProps {
  children?: ReactNode;
}

export const MobileProductSectionItem: FC<MobileProductSectionItemProps> = (
  props,
) => {
  const { children } = props;

  return <div>MobileProductSectionItem {children}</div>;
};
