import { FC, ReactNode } from 'react';

import { isBrowser } from '../../../utils/isBrowser';
import { Box } from '../../base/Box';
import { OnlyDisplay } from '../../base/OnlyDisplay';

export interface HeroTabletBackgroundProps {
  children?: ReactNode;
}

export const HeroTabletBackground: FC<HeroTabletBackgroundProps> = (props) => {
  const { children } = props;

  if (!isBrowser()) {
    return null;
  }

  return (
    <OnlyDisplay s m>
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
