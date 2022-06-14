import { FC, ReactNode } from 'react';

export interface AndroidContentProps {
  children?: ReactNode;
}

export const AndroidContent: FC<AndroidContentProps> = (props) => {
  const { children } = props;

  return <div>AndroidContent {children}</div>;
};
