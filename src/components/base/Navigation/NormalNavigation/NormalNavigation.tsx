import React, { ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useHover } from '../../../../hooks';
import { Box, Li, Ul } from '../../Box';
import { Container } from '../../Container';
import { LaunchAppButton } from '../../LaunchAppButton';
import { Logo } from '../../Logo';
import { NavigationAnimationWrap } from '../NavigationAnimationWrap';
import { useData } from '../useData';

import languageSelectIcon from './images/language.svg';
import { NavigationItem } from './NavigationItem';
import { ProductPanel } from './ProductPanel';

export interface NormalNavigationProps {
  children?: ReactNode;
}

export const NormalNavigation: React.FC<NormalNavigationProps> = () => {
  const theme = useTheme();
  const data = useData();
  const { hoverProps, isHovered } = useHover();

  return (
    <>
      <NavigationAnimationWrap>
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

          <Ul xs={{ display: 'flex', gap: 32, alignItems: 'stretch' }}>
            {data.map((item) => (
              <Li
                key={item.name}
                xs={{
                  display: 'flex',
                  alignItems: 'center',
                  listStyle: 'none',
                }}
                {...(item.link === '/products' ? hoverProps : {})}
              >
                <NavigationItem>{item.name}</NavigationItem>
              </Li>
            ))}

            <Box css={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <img
                alt="language select icon"
                src={languageSelectIcon}
                css={{ width: 24, height: 24 }}
              />
              <NavigationItem>EN</NavigationItem>
            </Box>

            <LaunchAppButton variant="outline" />
          </Ul>
        </Container>
      </NavigationAnimationWrap>

      <ProductPanel isActive={isHovered} />
    </>
  );
};
