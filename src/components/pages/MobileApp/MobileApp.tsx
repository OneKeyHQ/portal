import { FC, ReactNode } from 'react';

export interface MobileAppProps {
  children?: ReactNode;
}

export const MobileApp: FC<MobileAppProps> = (props) => {
  const { children } = props;

  return <div>MobileApp {children}</div>;
};
