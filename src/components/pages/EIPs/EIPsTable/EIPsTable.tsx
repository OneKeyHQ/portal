import { FC, ReactNode } from 'react';

import { Box } from '../../../base';

export interface EIPsTableProps {
  children?: ReactNode;
}

export const EIPsTable: FC<EIPsTableProps> = (props) => {
  const { children } = props;

  return <Box>EIPsTable {children}</Box>;
};
