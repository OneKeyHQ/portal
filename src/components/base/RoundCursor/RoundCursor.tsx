import { FC } from 'react';

import { Box, BoxProps } from '../Box';

import cursorSvg from './cursor.svg';

export type RoundCursorProps = BoxProps;

export const RoundCursor: FC<RoundCursorProps> = (props) => {
  const { children } = props;

  return (
    <Box
      xs={{
        backgroundImage: `url(${cursorSvg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    >
      {children}
    </Box>
  );
};
