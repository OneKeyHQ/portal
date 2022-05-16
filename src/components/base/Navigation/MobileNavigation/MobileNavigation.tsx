import React, { ReactNode } from 'react';

import { Box } from '../../Box';
import { Container } from '../../Container';
import { Logo } from '../../Logo';

import { MenuIcon } from './MenuIcon';

export interface MobileNavigationProps {
  children?: ReactNode;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = (props) => {
  const { children } = props;

  return (
    <Container
      xs={{
        paddingTop: 27,
        paddingBottom: 27,
      }}
    >
      <Box
        xs={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Logo
          css={{
            width: 48,
            height: 48,
            color: 'black',
          }}
        />
        {children}

        <MenuIcon />
      </Box>
    </Container>
  );
};
