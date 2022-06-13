import React, { ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useHover } from '../../../../hooks';
import { Box, Li, Ul } from '../../Box';
import { Container } from '../../Container';
import { LaunchAppButton } from '../../LaunchAppButton';
import { Link } from '../../Link';
import { Logo } from '../../Logo';
import { NavigationAnimationWrap } from '../NavigationAnimationWrap';
import { useNavigationData } from '../useNavigationData';

import { NavigationItem } from './NavigationItem';
import { ProductPanel } from './ProductPanel';
import { ServicesPanel } from './ServicesPanel';

export interface NormalNavigationProps {
  children?: ReactNode;
}

export const NormalNavigation: React.FC<NormalNavigationProps> = () => {
  const theme = useTheme();
  const data = useNavigationData();
  const { hoverProps: productMenuHoverProps, isHovered: isProductMenuHovered } =
    useHover();
  const { hoverProps: serviceMenuHoverProps, isHovered: isServiceMenuHovered } =
    useHover();

  return (
    <Box xs={{ display: 'none' }} m={{ display: 'block' }}>
      <NavigationAnimationWrap paddingRange={[38, 16]}>
        <Container
          xs={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link to="/">
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
          </Link>
          <Ul
            xs={{ flex: 1, display: 'flex', gap: 28, paddingLeft: 12 }}
            l={{ gap: 32 }}
          >
            {data.map((item) => (
              <Li
                key={item.name}
                xs={{
                  display: 'flex',
                  alignItems: 'center',
                  listStyle: 'none',
                }}
                {...(item.key === 'products' ? productMenuHoverProps : {})}
                {...(item.key === 'services' ? serviceMenuHoverProps : {})}
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

          <LaunchAppButton
            override={{
              button: {
                variant: 'outlined',
              },
            }}
          />
        </Container>
      </NavigationAnimationWrap>

      <ProductPanel isActive={isProductMenuHovered} />
      <ServicesPanel isActive={isServiceMenuHovered} />
    </Box>
  );
};
