import { FC, ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Main } from '../../base';
import { Navigation, PageFooter } from '../../common';

import { Hero } from './Hero';

export interface EnterpriseProps {
  children?: ReactNode;
}

export const Enterprise: FC<EnterpriseProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      <Helmet>
        <title>OneKey</title>
      </Helmet>
      <Navigation />

      <Main>
        <Hero />

        {children}
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />
    </Box>
  );
};
