import React, { ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useHover } from '../../../../hooks';
import { Box, Li, Ul } from '../../Box';
import { Container } from '../../Container';
import { LaunchAppButton } from '../../LaunchAppButton';
import { Logo } from '../../Logo';
import { NavigationAnimationWrap } from '../NavigationAnimationWrap';
import { useNavigationData } from '../useNavigationData';

import { NavigationItem } from './NavigationItem';
import { ProductPanel } from './ProductPanel';

export interface NormalNavigationProps {
  children?: ReactNode;
}

export const NormalNavigation: React.FC<NormalNavigationProps> = () => {
  const theme = useTheme();
  const data = useNavigationData();
  const { hoverProps, isHovered } = useHover();

  return (
    <Box
      xs={{
        display: 'none',
      }}
      m={{
        display: 'block',
      }}
    >
      <NavigationAnimationWrap paddingRange={[38, 16]}>
        <Container
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
              ':hover': {
                cursor: 'pointer',
                color: theme.colors.brand400,
              },
            }}
          />
          <Ul xs={{ flex: 1, display: 'flex', gap: 32, paddingLeft: 12 }}>
            {data.map((item) => (
              <Li
                key={item.name}
                xs={{
                  display: 'flex',
                  alignItems: 'center',
                  listStyle: 'none',
                }}
                {...(item.path === '/products' ? hoverProps : {})}
              >
                <NavigationItem {...item} />
              </Li>
            ))}

            {/* <Box css={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <img
                alt="language select icon"
                src={languageSelectIcon}
                css={{ width: 24, height: 24 }}
              />
              <NavigationItem>EN</NavigationItem>
            </Box> */}
          </Ul>

          <LaunchAppButton variant="outlined" />
        </Container>
      </NavigationAnimationWrap>

      <ProductPanel isActive={isHovered} />
    </Box>
  );
};
