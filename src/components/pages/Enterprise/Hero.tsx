import { FC, ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Box, I18n } from '../../base';
import {
  HeroDesktopBackground,
  HeroLayout,
  HeroMobileBackground,
} from '../../common/HeroLayout';

export interface HeroProps {
  children?: ReactNode;
}

export const Hero: FC<HeroProps> = (props) => {
  const { children } = props;

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

      <HeroDesktopBackground>
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
      </HeroDesktopBackground>

      <HeroLayout
        title={<I18n name="title__enterprise_solutions" alwaysMultiLine />}
        description={<I18n name="title__enterprise_solutions_desc" />}
      />

      {children}
    </Box>
  );
};
