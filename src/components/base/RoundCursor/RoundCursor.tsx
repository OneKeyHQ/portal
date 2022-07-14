import { FC } from 'react';

import { Box, BoxProps } from '../Box';

import cursorSvg from './cursor.svg';

export type RoundCursorProps = {
  image?: string;
} & BoxProps;

export const RoundCursor: FC<RoundCursorProps> = (props) => {
  const { children, image } = props;

  return (
    <Box
      xs={{
        backgroundImage: `url(${image || cursorSvg})`,
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
