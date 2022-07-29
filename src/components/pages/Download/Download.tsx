import React from 'react';

import { Page } from 'gatsby';
import { Helmet } from 'react-helmet';

import { Container, Flex, Main, SEO } from '../../base';
import {
  Navigation,
  PageFooter,
  StayInTouch,
  TwoMediaCards,
} from '../../common';

import { DownloadPanel } from './DownloadPanel';

const Download: React.FC<Page> = () => (
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
          {/* <OnlyDisplay l xl xxl>
            <BridgeDownload />
          </OnlyDisplay> */}

          <TwoMediaCards />

          <StayInTouch />
        </Flex>
      </Container>
    </Main>

    <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />
  </>
);

export default Download;
