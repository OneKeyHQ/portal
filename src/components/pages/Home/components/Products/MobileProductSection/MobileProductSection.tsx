import { FC, ReactNode } from 'react';

export interface MobileProductSectionProps {
  children?: ReactNode;
}

export const MobileProductSection: FC<MobileProductSectionProps> = (props) => {
  const { children } = props;

  return <div>MobileProductSection {children}</div>;
};
