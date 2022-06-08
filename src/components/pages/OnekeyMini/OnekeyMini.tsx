import { FC, ReactNode } from 'react';

export interface OnekeyMiniProps {
  children?: ReactNode;
}

export const OnekeyMini: FC<OnekeyMiniProps> = (props) => {
  const { children } = props;

  return <div>OnekeyMini {children}</div>;
};
