import { FC, ReactNode } from 'react';

export interface TabItemProps {
  children?: ReactNode;
}

export const TabItem: FC<TabItemProps> = (props) => {
  const { children } = props;

  return <div>TabItem {children}</div>;
};
