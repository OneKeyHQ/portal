import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../Box';

export interface DividerProps {
  children?: ReactNode;
  color?: string;
}

export const Divider: FC<DividerProps> = (props) => {
  const { color, children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        height: 1,
        width: '100%',
        backgroundColor: color || theme.colors.test500,
      }}
    >
      {children}
    </Box>
  );
};
