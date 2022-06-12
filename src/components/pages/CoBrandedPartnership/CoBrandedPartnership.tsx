import { FC, ReactNode } from 'react';

export interface CoBrandedPartnershipProps {
  children?: ReactNode;
}

export const CoBrandedPartnership: FC<CoBrandedPartnershipProps> = (props) => {
  const { children } = props;

  return <div>CoBrandedPartnership {children}</div>;
};
