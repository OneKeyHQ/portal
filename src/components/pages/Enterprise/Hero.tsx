import { FC, ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Box, I18n } from '../../base';
import { ContactUsButton } from '../../common';
import {
  HeroContent,
  HeroDescription,
  HeroDesktopBackground,
  HeroMobileBackground,
  HeroTabletBackground,
  HeroTitle,
} from '../../common/HeroLayout';

export interface HeroProps {
  children?: ReactNode;
}

export const Hero: FC<HeroProps> = (props) => {
  const { children } = props;
  const image = (
    <StaticImage
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 1,
      }}
      src="./images/enterprise-background.jpg"
      alt="background"
    />
  );

  return (
    <Box
      xs={{
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <HeroMobileBackground>
        <StaticImage
          style={{
            height: '100%',
            width: '100%',
          }}
          src="./images/enterprise-mobile-background.jpg"
          alt="hero"
        />
      </HeroMobileBackground>

      <HeroTabletBackground>{image}</HeroTabletBackground>
      <HeroDesktopBackground>{image}</HeroDesktopBackground>

      <HeroContent justifyContent="flex-end">
        <HeroTitle>
          <I18n name="title__enterprise_solutions" alwaysMultiLine />
        </HeroTitle>
        <HeroDescription>
          <I18n name="title__enterprise_solutions_desc" />
        </HeroDescription>

        <Box
          xs={{ marginTop: 20 }}
          m={{
            marginTop: 12,
            width: 'fit-content',
          }}
        >
          <ContactUsButton
            buttonOverride={{
              fillWidth: true,
            }}
          />
        </Box>
      </HeroContent>

      {children}
    </Box>
  );
};
