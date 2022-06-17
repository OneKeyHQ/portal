import { FC, ReactNode } from 'react';

import { Box } from '../../../../../base';

import largeImageUrl from './images/large.svg';
import mediumImageUrl from './images/medium.svg';
import smallImageUrl from './images/small.svg';

export interface SideImageProps {
  children?: ReactNode;
}

export const SideImage: FC<SideImageProps> = (props) => {
  const { children } = props;

  return (
    <Box
      css={{
        display: 'block',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      xs={{
        backgroundImage: `url(${smallImageUrl})`,
        width: '100%',
        height: 589,
      }}
      m={{
        backgroundImage: `url(${mediumImageUrl})`,
        width: 436,
        height: 589,
      }}
      l={{
        backgroundImage: `url(${largeImageUrl})`,
        width: 533,
        height: 680,
      }}
    >
      {children}
    </Box>
  );
};
