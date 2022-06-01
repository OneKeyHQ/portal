import { FC, ReactNode } from 'react';

import { Box } from '../../../base';

export interface CardsProps {
  children?: ReactNode;
}

export const Cards: FC<CardsProps> = (props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};
