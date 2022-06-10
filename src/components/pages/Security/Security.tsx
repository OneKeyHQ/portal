import { FC, ReactNode } from 'react';

import { Box } from '../../base';

import { Hero } from './Hero';

export interface SecurityProps {
  children?: ReactNode;
}

export const Security: FC<SecurityProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      <Box>
        <Hero />
      </Box>
      {children}
    </Box>
  );
};
