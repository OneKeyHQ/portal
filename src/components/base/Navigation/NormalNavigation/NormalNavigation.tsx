import React, { ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Li, Ul } from '../../Box';
import { Container } from '../../Container';
import { LaunchAppButton } from '../../LaunchAppButton';
import { Link } from '../../Link';
import { Logo } from '../../Logo';
import { NavigationAnimationWrap } from '../NavigationAnimationWrap';
import { useNavigationDataObject } from '../useNavigationData';

import { NavigationItem } from './NavigationItem';
import { ProductPanel } from './ProductPanel';
import { ServicesPanel } from './ServicesPanel';

export interface NormalNavigationProps {
  children?: ReactNode;
}

export const NormalNavigation: React.FC<NormalNavigationProps> = () => {
  const theme = useTheme();
  const data = useNavigationDataObject();
  const menuData = [
    {
      ...data.products,
      panelComponent: ProductPanel,
    },
    data.app,
    {
      ...data.services,
      panelComponent: ServicesPanel,
    },
    data.security,
    data.forDeveloper,
    data.forBusiness,
    data.helpCenter,
    data.shop,
  ];

  return (
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
          {menuData.map((item) => (
            <Li
              key={item.key}
              xs={{
                display: 'flex',
                alignItems: 'center',
                listStyle: 'none',
              }}
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
  );
};
