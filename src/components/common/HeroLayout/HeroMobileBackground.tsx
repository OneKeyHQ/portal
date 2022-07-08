import { FC, ReactNode } from 'react';

import { isBrowser } from '../../../utils/isBrowser';
import { Box } from '../../base/Box';
import { OnlyDisplay } from '../../base/OnlyDisplay';

export interface HeroMobileBackgroundProps {
  children?: ReactNode;
}

export const HeroMobileBackground: FC<HeroMobileBackgroundProps> = (props) => {
  const { children } = props;

  if (!isBrowser()) {
    return null;
  }

  return (
    <OnlyDisplay xs>
      <Box
        xs={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          right: 0,
          left: 0,
          borderRadius: '0 0 40px 40px',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        {children}
      </Box>
    </OnlyDisplay>
  );
};
