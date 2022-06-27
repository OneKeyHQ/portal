import { FC, ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Container, Main } from '../../base';
import { Navigation, PageFooter, StayInTouch } from '../../common';

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

        <Container>
          <Box xs={{ paddingTop: 80, paddingBottom: 80 }}>
            <StayInTouch />
          </Box>
        </Container>

        {children}
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />
    </Box>
  );
};
