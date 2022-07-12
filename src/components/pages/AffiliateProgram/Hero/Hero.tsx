import { FC, ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { I18n } from '../../../base';
import {
  HeroContainer,
  HeroContent,
  HeroDescription,
  HeroDesktopBackground,
  HeroMobileBackground,
  HeroTabletBackground,
  HeroTitle,
} from '../../../common/HeroLayout';

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
          src="./images/AffiliateProgramHeroMobile.jpg"
          layout="constrained"
          alt="hero"
        />
      </HeroMobileBackground>

      <HeroTabletBackground>
        <StaticImage
          style={{ height: '100%', width: '100%' }}
          src="./images/AffiliateProgramHeroTablet.jpg"
          alt="hero"
        />
      </HeroTabletBackground>

      <HeroDesktopBackground>
        <StaticImage
          style={{
            height: '100%',
            width: '50%',
            right: 0,
            position: 'absolute',
          }}
          src="./images/AffiliateProgramHeroDesktop.jpg"
          alt="hero"
        />
      </HeroDesktopBackground>

      <HeroContent>
        <HeroTitle>
          <I18n
            name="title__affiliate_program"
            multiLine={['xs']}
            singleLine={['s', 'm', 'l', 'xl', 'xxl']}
          />
        </HeroTitle>
        <HeroDescription>
          <I18n name="title__affiliate_program_desc" />
        </HeroDescription>
      </HeroContent>

      {children}
    </HeroContainer>
  );
};
