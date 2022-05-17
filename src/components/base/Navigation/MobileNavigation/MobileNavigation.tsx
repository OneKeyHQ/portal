import React, { ReactNode, useCallback, useState } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../../Box';
import { Container } from '../../Container';
import { Flex } from '../../Flex';
import { Logo } from '../../Logo';
import { useNavigationData } from '../useNavigationData';

import { CloseIcon } from './CloseIcon';
import { MenuIcon } from './MenuIcon';
import { MobileMenuItems } from './MobileMenuItems';

const LogoIcon = (
  <Logo
    css={{
      width: 48,
      height: 48,
      color: 'black',
    }}
  />
);

export interface MobileNavigationProps {
  children?: ReactNode;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = (props) => {
  const { children } = props;
  const [menuActive, setMenuActive] = useState(false);
  const theme = useTheme();
  const navigationData = useNavigationData();

  const openMenu = useCallback(() => {
    setMenuActive(true);
  }, [setMenuActive]);

  const closeMenu = useCallback(() => {
    setMenuActive(false);
  }, [setMenuActive]);

  return (
    <>
      <Box
        xs={{
          backgroundColor: 'rgba(255, 255, 255, .8)',
          paddingTop: 18,
          paddingBottom: 18,
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
            {LogoIcon}

            {children}

            <Box
              onClick={openMenu}
              xs={{
                cursor: 'pointer',
              }}
            >
              <MenuIcon />
            </Box>
          </Box>
        </Container>
      </Box>

      {menuActive && (
        <Box
          xs={{
            zIndex: 8000,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: theme.colors.white,
            overflow: 'auto',
            WebkitOverflowScrolling: 'auto',
          }}
        >
          <Container>
            <Flex
              xs={{
                padding: '18px 0',
                justifyContent: 'space-between',
              }}
            >
              {LogoIcon}

              <Box onClick={closeMenu}>
                <CloseIcon />
              </Box>
            </Flex>
          </Container>

          <MobileMenuItems mobileMenus={navigationData} />
        </Box>
      )}
    </>
  );
};
