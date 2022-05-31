import { FC, ReactNode } from 'react';

export interface GridItemProps {
  children?: ReactNode;
}

export const GridItem: FC<GridItemProps> = (props) => {
  const { children } = props;

  return <div>GridItem {children}</div>;
};
