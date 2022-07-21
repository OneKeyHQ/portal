import { FC, ReactNode } from 'react';

import { Box } from '../../../../base';

export interface NavigationCartProps {
  children?: ReactNode;
}

export const NavigationCart: FC<NavigationCartProps> = (props) => {
  const { children } = props;

  return <Box>NavigationCart {children}</Box>;
};
