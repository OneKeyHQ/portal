import { FC, ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Box, I18n, VideoPlayer } from '../../../../base';
import {
  HeroContainer,
  HeroContent,
  HeroDescription,
  HeroDesktopBackground,
  HeroMobileBackground,
  HeroTabletBackground,
  HeroTitle,
} from '../../../../common/HeroLayout';

export interface HeroProps {
  children?: ReactNode;
}

export const Hero: FC<HeroProps> = (props) => {
  const { children } = props;

  return (
    <HeroContainer>
      <HeroMobileBackground>
        <StaticImage
          style={{ height: '100%', width: '100%' }}
          src="./images/shop-mobile-hero.jpg"
          alt="hero"
        />
      </HeroMobileBackground>

      <HeroTabletBackground>
        <StaticImage
          style={{ height: '100%', width: '100%' }}
          src="./images/shop-tablet-hero.jpg"
          alt="hero"
        />
      </HeroTabletBackground>

      <HeroDesktopBackground>
        <Box
          xs={{ width: '50%', height: '100%', right: 0, position: 'absolute' }}
        >
          <VideoPlayer
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            loop
            src="/shop/hero/shop-hero-animation-compressed.mp4"
          />
        </Box>
      </HeroDesktopBackground>

      <HeroContent>
        <HeroTitle>
          <I18n name="title__shop_onekey" />
        </HeroTitle>
        <HeroDescription>
          <I18n name="title__shop_onekey_desc" />
        </HeroDescription>
      </HeroContent>

      {children}
    </HeroContainer>
  );
};
