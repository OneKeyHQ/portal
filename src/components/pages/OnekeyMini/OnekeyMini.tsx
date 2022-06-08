import { FC, ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Container, Main, Navigation } from '../../base';
import { PageFooter, StayInTouch } from '../../common';

import { IntroductionSection } from './components/IntroductionSection';

export interface OnekeyMiniProps {
  children?: ReactNode;
}

export const OnekeyMini: FC<OnekeyMiniProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      <Helmet>
        <title>OneKey</title>
      </Helmet>

      <Navigation />

      <Main>
        <IntroductionSection />
        {children}

        <Container>
          <StayInTouch />
        </Container>
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />
    </Box>
  );
};
