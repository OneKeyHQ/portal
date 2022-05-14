import { FC, ReactNode } from 'react';

import { Box, BoxProps } from '../Box';

export interface ContainerProps extends BoxProps {
  children?: ReactNode;
}

export const Container: FC<ContainerProps> = (props) => {
  const { children, ...externalProps } = props;

  return (
    <Box
      xs={{
        margin: '0 auto',
        maxWidth: '100%',
        padding: 24,
      }}
      s={{
        padding: 28,
      }}
      m={{
        maxWidth: 960 - 32 * 2,
      }}
      l={{
        maxWidth: 1220 - 48 * 2,
      }}
      xl={{
        maxWidth: 1440 - 64 * 2,
      }}
      xxl={{
        maxWidth: 1736 - 92 * 2,
      }}
      externalProps={externalProps}
    >
      {children}
    </Box>
  );
};
