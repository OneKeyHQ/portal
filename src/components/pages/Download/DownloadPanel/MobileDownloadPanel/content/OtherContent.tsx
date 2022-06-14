import { FC, ReactNode } from 'react';

export interface OtherContentProps {
  children?: ReactNode;
}

export const OtherContent: FC<OtherContentProps> = (props) => {
  const { children } = props;

  return <div>OtherContent {children}</div>;
};
