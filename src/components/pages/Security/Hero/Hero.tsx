import { FC, ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Box } from '../../../base';

export interface HeroProps {
  children?: ReactNode;
}

export const Hero: FC<HeroProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      <StaticImage src="./images/hero.jpg" alt="background" />
      {children}
    </Box>
  );
};
