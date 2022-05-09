import { FC } from 'react';

import { Box, Footer, Nav } from '../../base';
import { FadeIn } from '../../base/FadeIn';

import {
  Feature,
  Hardware,
  Header,
  LogoWall,
  Products,
  Rewards,
  Security,
  Slogan,
  Start,
  Why,
} from './components';

export const Home: FC = () => (
  <div>
    <div
      css={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 'fit-content',
        zIndex: 1,
      }}
    >
      <Nav />
    </div>

    <Header />

    <FadeIn>
      <LogoWall />
    </FadeIn>

    <FadeIn>
      <Slogan />
    </FadeIn>

    <FadeIn>
      <Products />
    </FadeIn>

    <FadeIn>
      <Hardware />
    </FadeIn>

    <FadeIn>
      <Security />
    </FadeIn>

    <Feature />

    <Why />

    <FadeIn>
      <Rewards />
    </FadeIn>

    <Box backgroundColor="#f0f1f2">
      <FadeIn>
        <Start />
      </FadeIn>

      <FadeIn>
        <Footer />
      </FadeIn>
    </Box>
  </div>
);
