import { FC, ReactNode } from 'react';

import { Box, Flex, Link } from '../../base';

export interface BetaProps {
  children?: ReactNode;
}

export const Beta: FC<BetaProps> = (props) => {
  const { children } = props;

  return (
    <Box xs={{ padding: 100 }}>
      <Flex xs={{ flexDirection: 'column' }}>
        <Link to="/beta/download">/beta/download</Link>
        <Link to="/beta/onekey-mini">/beta/onekey-mini</Link>
        <Link to="/beta/security">/beta/security</Link>
        <Link to="/beta/enterprise">/beta/enterprise</Link>
        <Link to="/beta/affiliate-program">/beta/affiliate-program</Link>
        <Link to="/beta/co-branded-partnership">
          /beta/co-branded-partnership
        </Link>
      </Flex>

      {children}
    </Box>
  );
};
