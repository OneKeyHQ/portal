import { FC } from 'react';

import { Box, Footer, Nav } from '../../base';
import { FadeIn } from '../../base/FadeIn';

import { Hardware } from './components/Hardware';
import { Header } from './components/Header';
import { LogoWall } from './components/LogoWall';
import { Products } from './components/Products';
import { Rewards } from './components/Rewards';
import { Security } from './components/Security';
import { Slogan } from './components/Slogan';
import { Start } from './components/Start';
import { Why } from './components/Why';

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
