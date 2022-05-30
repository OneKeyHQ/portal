import React from 'react';

import { Helmet } from 'react-helmet';

import { Main, Navigation, PageFooter, SEO } from '../../base';

const AppPage: React.FC = () => (
  <>
    <Helmet>
      <title>OneKey</title>
    </Helmet>

    <SEO title="onekey" description="onekey" />

    <Navigation />

    <Main>sdf</Main>

    <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />
  </>
);

export default AppPage;
