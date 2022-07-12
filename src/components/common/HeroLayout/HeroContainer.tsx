import { FC, ReactNode } from 'react';

import { Box, BoxProps } from '../../base';

export interface HeroContainerProps extends BoxProps {
  children?: ReactNode;
}

export const HeroContainer: FC<HeroContainerProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Box
      xs={{
        overflow: 'hidden',
        position: 'relative',
        background: 'transparent',
      }}
      l={{}}
      externalProps={otherProps}
    >
      {children}
    </Box>
  );
};
