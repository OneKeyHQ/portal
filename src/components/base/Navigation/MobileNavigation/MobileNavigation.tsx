import React, { ReactNode, useCallback, useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';

import { useBodyScrollLock } from '../../../../hooks';
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
  const { ref, setIsLocked } = useBodyScrollLock();
  const theme = useTheme();
  const navigationData = useNavigationData();

  const openMenu = useCallback(() => {
    setMenuActive(true);
  }, [setMenuActive]);

  const closeMenu = useCallback(() => {
    setMenuActive(false);
  }, [setMenuActive]);

  useEffect(() => {
    setIsLocked(menuActive);
  }, [menuActive, setIsLocked]);

  return (
    <>
      <Box
        xs={{
          backgroundColor: 'rgba(255, 255, 255, .8)',
          paddingTop: 28,
          paddingBottom: 28,
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
        <motion.div ref={ref}>
          <Box
            xs={{
              zIndex: 8888,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: theme.colors.white,
            }}
          >
            <Flex
              xs={{
                padding: '28px 24px',
                justifyContent: 'space-between',
              }}
            >
              {LogoIcon}

              <Box onClick={closeMenu}>
                <CloseIcon />
              </Box>
            </Flex>

            <Box>
              <MobileMenuItems mobileMenus={navigationData} />
            </Box>
          </Box>
        </motion.div>
      )}
    </>
  );
};
