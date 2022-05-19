import { FC, ReactNode } from 'react';

import { Button } from '../Button';

export interface GoToShopButtonProps {
  children?: ReactNode;
}

export const GoToShopButton: FC<GoToShopButtonProps> = (props) => {
  const { children } = props;

  return <Button variant="outline">Go to shop {children}</Button>;
};
