import { FC, ReactNode } from 'react';

import { Box } from '../../../../base';

export interface SideImageProps {
  children?: ReactNode;
  smallImageUrl: string;
  mediumImageUrl: string;
  largeImageUrl: string;
}

export const SideImage: FC<SideImageProps> = (props) => {
  const { children, smallImageUrl, mediumImageUrl, largeImageUrl } = props;

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
