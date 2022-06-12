import { FC, ReactNode } from 'react';

export interface DesktopLayoutProps {
  children?: ReactNode;
}

export const DesktopLayout: FC<DesktopLayoutProps> = (props) => {
  const { children } = props;

  return <div>DesktopLayout {children}</div>;
};
