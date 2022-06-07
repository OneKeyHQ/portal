import { FC, ReactNode } from 'react';

import { Box } from '../../../../../base';

export interface MaskProps {
  children?: ReactNode;
}

export const Mask: FC<MaskProps> = (props) => {
  const { children } = props;

  return (
    <Box
      xs={{
        background:
          'linear-gradient(180deg, rgba(215, 218, 220, 0) 51.88%, rgba(231, 236, 239, 0.97) 71.45%, #E7ECEF 77.01%)',
      }}
    >
      {children}
    </Box>
  );
};
