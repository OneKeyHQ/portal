import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Nav } from '../../base/Box';
import { OnlyDisplay } from '../../base/OnlyDisplay';

import { MobileNavigation } from './MobileNavigation';
import { NormalNavigation } from './NormalNavigation';

export interface NavigationProps {
  children?: ReactNode;
}

export const Navigation: FC<NavigationProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Nav
      xs={{
        position: 'fixed',
        width: '100%',
        zIndex: 2000,
        top: -1,
        left: 0,
        right: 0,
        transition: theme.transitions.allEaseInOut,
        ':hover': {
          backgroundColor: 'white',
        },
      }}
    >
      <OnlyDisplay xs s m>
        <MobileNavigation />
      </OnlyDisplay>

      <OnlyDisplay l xl xxl>
        <NormalNavigation />
      </OnlyDisplay>

      {children}
    </Nav>
  );
};
