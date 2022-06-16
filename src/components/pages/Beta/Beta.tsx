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
        <Link to="/beta/onekey-mini">/beta/onekey-mini</Link>
      </Flex>

      {children}
    </Box>
  );
};
