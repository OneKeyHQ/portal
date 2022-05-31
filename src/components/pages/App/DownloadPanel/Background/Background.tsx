import { FC, ReactNode } from 'react';

import { Box, Img } from '../../../../base';

import pcImage from './images/pc.jpg';

export interface BackgroundProps {
  children?: ReactNode;
}

export const Background: FC<BackgroundProps> = (props) => {
  const { children } = props;

  return (
    <Box
      xs={{
        position: 'absolute',
        height: '100%',
        width: '100%',
      }}
    >
      <Img
        xs={{
          marginLeft: 'auto',
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        l={{
          width: '50%',
        }}
        src={pcImage}
      />

      {children}
    </Box>
  );
};
