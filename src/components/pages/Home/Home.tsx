import { useTheme } from '@emotion/react';
import React from 'react';

import { Helmet } from 'react-helmet';

import { Box, Main, Navigation, PageFooter, SEO } from '../../base';
import { FadeIn } from '../../base/FadeIn';

import { Header, LogoWall, Rewards, Slogan, Start } from './components';

export const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Onekey</title>
        <SEO title="onekey" description="onekey" />
      </Helmet>

      <Navigation />

      <Main>
        <Header />

        <FadeIn>
          <LogoWall />
        </FadeIn>

        <FadeIn>
          <Slogan />
        </FadeIn>

        {/*
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
      
            <Why /> */}

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
