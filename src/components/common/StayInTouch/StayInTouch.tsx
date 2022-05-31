import { FC, ReactNode } from 'react';

import { Box } from '../../base';

export interface StayInTouchProps {
  children?: ReactNode;
}

export const StayInTouch: FC<StayInTouchProps> = (props) => {
  const { children } = props;

  return (
    <Box
      xs={{
        borderRadius: 40,
        backgroundColor: '#92baa3',
        paddingTop: 70,
        paddingBottom: 70,
      }}
    >
      StayInTouch {children}
    </Box>
  );
};
