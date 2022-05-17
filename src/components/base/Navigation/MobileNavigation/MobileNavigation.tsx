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
    <Box
      xs={{
        backgroundColor: 'rgba(255, 255, 255, .8)',
        paddingTop: 27,
        paddingBottom: 27,
        backdropFilter: 'blur(30px)',
      }}
    >
      <Container>
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

          <Box
            xs={{
              cursor: 'pointer',
            }}
          >
            <MenuIcon />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
