import { FC, ReactNode } from 'react';

export interface HeroTitleProps {
  children?: ReactNode;
}

export const HeroTitle: FC<HeroTitleProps> = (props) => {
  const { children } = props;

  return <div>HeroTitle {children}</div>;
};
