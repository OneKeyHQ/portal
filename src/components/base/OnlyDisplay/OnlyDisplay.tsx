import { FC, ReactNode } from 'react';

import { Box, BoxProps } from '../Box';

export interface OnlyDisplayProps extends BoxProps {
  children?: ReactNode;
  xs?: boolean;
  s?: boolean;
  m?: boolean;
  l?: boolean;
  xl?: boolean;
  xxl?: boolean;
  display?: string;
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
    display = 'block',
    as,
    ...otherProps
  } = props;

  return (
    <Box
      as={as}
      xs={{ display: xs ? display : 'none' }}
      s={{ display: s ? display : 'none' }}
      m={{ display: m ? display : 'none' }}
      l={{ display: l ? display : 'none' }}
      xl={{ display: xl ? display : 'none' }}
      xxl={{ display: xxl ? display : 'none' }}
      externalProps={otherProps}
    >
      {children}
    </Box>
  );
};
