import React from 'react';

import { useTheme } from '@emotion/react';
import { Helmet } from 'react-helmet';

import { useOneKeyVersion } from '../../../data';
import { Box, Main, SEO } from '../../base';
import { FadeIn } from '../../base/FadeIn';
import { Navigation } from '../../common/Navigation';
import { PageFooter } from '../../common/PageFooter';

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

export const Home: React.FC = () => {
  const theme = useTheme();

  useOneKeyVersion();

  return (
    <>
      <Helmet>
        <title>All-in-one crypto wallet trusted by millions.</title>
      </Helmet>

      <SEO />

      <Navigation />

      <Main>
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

        <FadeIn>
          <Feature />
        </FadeIn>

        <FadeIn>
          <Why />
        </FadeIn>

        <FadeIn>
          <Rewards />
        </FadeIn>
      </Main>

      <Box
        css={{
          background: theme.background.test100,
        }}
      >
        <FadeIn>
          <Start />
        </FadeIn>

        <FadeIn>
          <PageFooter />
        </FadeIn>
      </Box>
    </>
  );
};
