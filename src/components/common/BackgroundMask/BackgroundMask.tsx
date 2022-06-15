import { FC, ReactNode } from 'react';

import { Box } from '../../base';

export interface BackgroundMaskProps {
  children?: ReactNode;
}

export const BackgroundMask: FC<BackgroundMaskProps> = (props) => {
  const { children } = props;

  return (
    <Box
      xs={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        top: 0,
        right: 0,
        zIndex: 1,
        background:
          'linear-gradient(180deg, rgba(215, 218, 220, 0) 65%, rgba(231, 236, 239, 0.97) 80%, #E7ECEF 90%)',
      }}
      l={{ display: 'none' }}
    >
      {children}
    </Box>
  );
};
