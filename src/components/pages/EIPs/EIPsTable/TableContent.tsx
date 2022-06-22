import { FC, ReactNode } from 'react';

export interface TableContentProps {
  children?: ReactNode;
}

export const TableContent: FC<TableContentProps> = (props) => {
  const { children } = props;

  return <div>TableContent {children}</div>;
};
