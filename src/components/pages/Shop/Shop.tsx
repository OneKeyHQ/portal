import React from 'react';

import { Helmet } from 'react-helmet';

import { Container, Main, SEO } from '../../base';
import {
  Navigation,
  PageFooter,
  StayInTouchWidthContainerAndPadding,
} from '../../common';

import { Hero } from './components/Hero';
import { ProductCompare } from './components/ProductCompare';
import { Products } from './components/Products';

export const Shop: React.FC = () => (
  <>
    <Helmet>
      <title>Shop</title>
    </Helmet>

    <SEO title="onekey" />

    <Navigation />

    <Main>
      <Hero />

      <Container>
        <Products />

        <ProductCompare />

        <StayInTouchWidthContainerAndPadding />
      </Container>
    </Main>

    <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />
  </>
);
