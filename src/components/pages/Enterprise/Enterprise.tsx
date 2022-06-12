import { FC, ReactNode } from 'react';

export interface EnterpriseProps {
  children?: ReactNode;
}

export const Enterprise: FC<EnterpriseProps> = (props) => {
  const { children } = props;

  return <div>Enterprise {children}</div>;
};
