import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Nav } from '../Box';

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
      <NormalNavigation />

      <MobileNavigation />
      {children}
    </Nav>
  );
};
