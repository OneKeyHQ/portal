import { FC, ReactNode } from 'react';

import { Box } from '../../base';
import { HeroLayout } from '../../common/HeroLayout';

import enterpriseBackground from './images/enterprise-background.jpg';

export interface HeroProps {
  children?: ReactNode;
}

export const Hero: FC<HeroProps> = (props) => {
  const { children } = props;

  return (
    <Box
      xs={{
        backgroundImage: `url(${enterpriseBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <HeroLayout
        title="Enterprise solutions"
        description="Explore the world of co-branding with us, and see your campaign come to life."
      />

      {children}
    </Box>
  );
};
