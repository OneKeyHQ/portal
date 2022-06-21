import { FC, ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { isBrowser } from '../../../utils';
import { Box } from '../../base';
import { HeroLayout } from '../../common/HeroLayout';

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
      {isBrowser() && (
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
      )}

      <HeroLayout
        title="Enterprise solutions"
        description="Explore the world of co-branding with us, and see your campaign come to life."
      />

      {children}
    </Box>
  );
};
