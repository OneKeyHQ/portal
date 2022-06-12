import React from 'react';

import { Helmet } from 'react-helmet';

import { Container, Flex, Main, Navigation, SEO } from '../../base';
import { PageFooter, StayInTouch } from '../../common';

import { Cards } from './Cards';
import { DownloadPanel } from './DownloadPanel';

const AppPage: React.FC = () => (
  <>
    <Helmet>
      <title>OneKey</title>
    </Helmet>

    <SEO title="onekey" />

    <Navigation />

    <Main>
      <DownloadPanel />

      <Container>
        <Flex
          xs={{
            flexDirection: 'column',
            paddingTop: 40,
            paddingBottom: 40,
            gap: 40,
          }}
          l={{ paddingTop: 80, paddingBottom: 80 }}
        >
          <Cards />

          <StayInTouch />
        </Flex>
      </Container>
    </Main>

    <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />
  </>
);

export default AppPage;
