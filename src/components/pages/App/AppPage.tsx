import React from 'react';

import { Helmet } from 'react-helmet';

import { Container, Main, Navigation, PageFooter, SEO } from '../../base';
import { StayInTouch } from '../../common';

import { Cards } from './Cards';
import { DownloadPanel } from './DownloadPanel';

const AppPage: React.FC = () => (
  <>
    <Helmet>
      <title>OneKey</title>
    </Helmet>

    <SEO title="onekey" description="onekey" />

    <Navigation />

    <Main>
      <DownloadPanel />

      <Container>
        <Cards />

        <StayInTouch />
      </Container>
    </Main>

    <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />
  </>
);

export default AppPage;
