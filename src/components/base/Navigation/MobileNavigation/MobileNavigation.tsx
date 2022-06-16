import React, { Fragment, ReactNode, useCallback, useState } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../../Box';
import { Flex } from '../../Flex';
import { MenuCloseIcon, MenuIcon } from '../../Icon';
import { Logo } from '../../Logo';
import { NavigationAnimationWrap } from '../NavigationAnimationWrap';
import { useNavigationData } from '../useNavigationData';

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
    <Fragment key="MobileNavigation">
      <NavigationAnimationWrap paddingRange={[20, 12]} isSpring>
        <Flex
          xs={{
            paddingLeft: 20,
            paddingRight: 20,
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
            <MenuIcon width={40} height={40} />
          </Box>
        </Flex>
      </NavigationAnimationWrap>

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
          <Flex
            xs={{
              padding: '20px',
              justifyContent: 'space-between',
            }}
          >
            {LogoIcon}

            <Box onClick={closeMenu}>
              <MenuCloseIcon
                {...{
                  width: 40,
                  height: 40,
                }}
              />
            </Box>
          </Flex>

          <MobileMenuItems mobileMenus={navigationData} />
        </Box>
      )}
    </Fragment>
  );
};
