import React from 'react';

import { Helmet } from 'react-helmet';

import { PageFooter, SEO } from '../../base';

const AppPage: React.FC = () => (
  <>
    <Helmet>
      <title>OneKey</title>
    </Helmet>

    <SEO title="onekey" description="onekey" />

    <main>sdf</main>

    <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />
  </>
);

export default AppPage;
