import { FC, ReactNode } from 'react';

export interface MainTitleProps {
  children?: ReactNode;
}

export const MainTitle: FC<MainTitleProps> = (props) => {
  const { children } = props;

  return <div>MainTitle {children}</div>;
};
