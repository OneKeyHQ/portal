import { FC, ReactNode } from 'react';

export interface MenuProps {
  children?: ReactNode;
}

export const Menu: FC<MenuProps> = (props) => {
  const { children } = props;

  return <div>Menu {children}</div>;
};
