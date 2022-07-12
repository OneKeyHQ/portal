import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';

import { Box, I18n } from '../../../base';
import {
  HeroContainer,
  HeroContent,
  HeroDescription,
  HeroDesktopBackground,
  HeroMobileBackground,
  HeroTabletBackground,
  HeroTitle,
} from '../../../common';

export interface HeroProps {
  children?: ReactNode;
}

export const Hero: FC<HeroProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{ background: theme.colors.transparent }}
      l={{ background: theme.colors.white }}
    >
      <HeroContainer>
        <HeroMobileBackground>
          <StaticImage
            style={{
              width: '100%',
              height: '100%',
              right: 0,
              position: 'absolute',
            }}
            src="./images/SecurityHeroMobile.jpg"
            alt="hero"
          />
        </HeroMobileBackground>

        <HeroTabletBackground>
          <StaticImage
            style={{
              width: '100%',
              height: '100%',
              right: 0,
              position: 'absolute',
            }}
            src="./images/SecurityHeroTablet.jpg"
            alt="hero"
          />
        </HeroTabletBackground>

        <HeroDesktopBackground>
          <StaticImage
            style={{
              width: '50%',
              height: '100%',
              right: 0,
              position: 'absolute',
            }}
            src="./images/SecurityHeroDesktop.jpg"
            alt="hero"
          />
        </HeroDesktopBackground>

        <HeroContent>
          <HeroTitle>
            <I18n name="title__security_both_hard_and_soft" alwaysMultiLine />
          </HeroTitle>

          <HeroDescription>
            <I18n name="title__security_both_hard_and_soft_desc" />
          </HeroDescription>
        </HeroContent>

        {children}
      </HeroContainer>
    </Box>
  );
};
