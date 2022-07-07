import { FC, ReactNode } from 'react';

import { Box } from '../../base';

export interface HeroContainerProps {
  children?: ReactNode;
}

export const HeroContainer: FC<HeroContainerProps> = (props) => {
  const { children } = props;

  return (
    <Box xs={{ overflow: 'hidden', position: 'relative' }}>{children}</Box>
  );
};
