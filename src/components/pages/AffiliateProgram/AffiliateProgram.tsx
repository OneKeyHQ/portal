import { FC, ReactNode } from 'react';

import { Box } from '../../base';

export interface AffiliateProgramProps {
  children?: ReactNode;
}

export const AffiliateProgram: FC<AffiliateProgramProps> = (props) => {
  const { children } = props;

  return <Box>AffiliateProgram {children}</Box>;
};
