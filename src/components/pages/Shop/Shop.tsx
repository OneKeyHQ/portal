import React from 'react';

import { Helmet } from 'react-helmet';

import { Container, Main, SEO } from '../../base';
import {
  Navigation,
  PageFooter,
  StayInTouchWidthContainerAndPadding,
} from '../../common';

import { Hero } from './components/Hero';

export const Shop: React.FC = () => (
  <>
    <Helmet>
      <title>OneKey</title>
    </Helmet>

    <SEO title="onekey" />

    <Navigation />

    <Main>
      <Hero />

      <Container>
        <StayInTouchWidthContainerAndPadding />
      </Container>
    </Main>

    <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />
  </>
);
