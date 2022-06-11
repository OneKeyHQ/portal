import { FC, ReactNode } from 'react';

export interface TextBlockProps {
  children?: ReactNode;
}

export const TextBlock: FC<TextBlockProps> = (props) => {
  const { children } = props;

  return <div>TextBlock {children}</div>;
};
