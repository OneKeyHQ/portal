import { FC, ReactNode } from 'react';

export interface ListContentProps {
  children?: ReactNode;
}

export const ListContent: FC<ListContentProps> = (props) => {
  const { children } = props;

  return <div>ListContent {children}</div>;
};
