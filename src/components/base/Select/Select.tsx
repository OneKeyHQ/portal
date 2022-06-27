import { FC, ReactNode } from 'react';

export interface SelectProps {
  children?: ReactNode;
}

export const Select: FC<SelectProps> = (props) => {
  const { children } = props;

  return <div>Select {children}</div>;
};
