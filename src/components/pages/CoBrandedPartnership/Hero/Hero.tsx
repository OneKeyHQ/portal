import { FC, ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Box, I18n } from '../../../base';
import {
  BackgroundMask,
  ContactUsButton,
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

  return (
    <HeroContainer>
      <HeroMobileBackground>
        <StaticImage
          style={{ height: '100%', width: '100%' }}
          src="./images/CoBrandedPartnershipHeroMobile.jpg"
          alt="hero"
        />
      </HeroMobileBackground>

      <HeroTabletBackground>
        <StaticImage
          style={{ height: '100%', width: '100%' }}
          src="./images/CoBrandedPartnershipHeroTablet.jpg"
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
          src="./images/CoBrandedPartnershipHero.jpg"
          alt="hero"
        />

        <BackgroundMask />
      </HeroDesktopBackground>

      <HeroContent>
        <HeroTitle>
          <I18n name="title__co_branded_partnership" alwaysMultiLine />
        </HeroTitle>
        <HeroDescription>
          <I18n name="title__co_branded_partnership_desc" />
        </HeroDescription>

        <Box xs={{ paddingTop: 12 }} m={{ width: 'fit-content' }}>
          <ContactUsButton
            buttonOverride={{
              fillWidth: true,
            }}
          />
        </Box>
      </HeroContent>

      {children}
    </HeroContainer>
  );
};
