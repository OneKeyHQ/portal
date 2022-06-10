import { FC, ReactNode } from 'react';

import { Box } from '../../base';

export interface SecurityProps {
  children?: ReactNode;
}

export const Security: FC<SecurityProps> = (props) => {
  const { children } = props;

  return <Box>Security {children}</Box>;
};
