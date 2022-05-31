import { FC, ReactNode } from 'react';

import { useColumnSize } from '../../../theme';
import { Box } from '../../base';

export interface StayInTouchProps {
  children?: ReactNode;
}

export const StayInTouch: FC<StayInTouchProps> = (props) => {
  const { children } = props;
  const columnSize = useColumnSize(1);

  return (
    <Box
      xs={{
        borderRadius: 40,
        backgroundColor: '#92baa3',
        paddingTop: 70,
        paddingBottom: 70,
        paddingLeft: columnSize,
        paddingRight: columnSize,
      }}
    >
      StayInTouch {children}
    </Box>
  );
};
