import { FC, ReactNode } from 'react';

export interface ContentProps {
  children?: ReactNode;
}

export const Content: FC<ContentProps> = (props) => {
  const { children } = props;

  return <div>Content {children}</div>;
};
