import { FC, ReactNode } from 'react';

import { Box } from '../Box';

export interface OnlyDisplayProps {
  children?: ReactNode;
  xs?: boolean;
  s?: boolean;
  m?: boolean;
  l?: boolean;
  xl?: boolean;
  xxl?: boolean;
}

export const OnlyDisplay: FC<OnlyDisplayProps> = (props) => {
  const {
    xs = false,
    s = false,
    m = false,
    l = false,
    xl = false,
    xxl = false,
    children,
  } = props;

  return (
    <Box
      xs={{ display: xs ? 'block' : 'none' }}
      s={{ display: s ? 'block' : 'none' }}
      m={{ display: m ? 'block' : 'none' }}
      l={{ display: l ? 'block' : 'none' }}
      xl={{ display: xl ? 'block' : 'none' }}
      xxl={{ display: xxl ? 'block' : 'none' }}
    >
      {children}
    </Box>
  );
};
