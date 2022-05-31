import { CSSProperties, FC, ReactNode } from 'react';

import { Box } from '../Box';

export interface DisplayProps {
  children?: ReactNode;
  xs?: CSSProperties['display'];
  s?: CSSProperties['display'];
  m?: CSSProperties['display'];
  l?: CSSProperties['display'];
  xl?: CSSProperties['display'];
  xxl?: CSSProperties['display'];
}

export const Display: FC<DisplayProps> = (props) => {
  const { children, xs, s, m, l, xl, xxl, ...otherProps } = props;

  return (
    <Box
      xs={{ display: xs }}
      s={{ display: s }}
      m={{ display: m }}
      l={{ display: l }}
      xl={{ display: xl }}
      xxl={{ display: xxl }}
      externalProps={otherProps}
    >
      {children}
    </Box>
  );
};
