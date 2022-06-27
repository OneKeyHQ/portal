import { FC, ReactNode } from 'react';

import { Box, BoxProps } from '../../../../../base';

export interface ArrowWrapProps extends BoxProps {
  children?: ReactNode;
  disabled?: boolean;
}

export const ArrowWrap: FC<ArrowWrapProps> = (props) => {
  const { children, disabled = true, ...otherProps } = props;

  return (
    <Box
      xs={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        width: 48,
        height: 48,
        opacity: disabled ? 0.3 : 1,
        ':hover': { opacity: disabled ? 0.3 : 0.8 },
        ':active': { opacity: disabled ? 0.3 : 0.6 },
      }}
      externalProps={otherProps}
    >
      {children}
    </Box>
  );
};
