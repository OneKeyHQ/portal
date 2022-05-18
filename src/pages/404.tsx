import { FC, ReactNode } from 'react';

export interface NotFindProps {
  children?: ReactNode;
}

const NotFind: FC<NotFindProps> = (props) => {
  const { children } = props;

  return <div>404 {children}</div>;
};

export default NotFind;
