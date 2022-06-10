import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { Helmet } from 'react-helmet';

import { Box, Container, Main, Navigation, SEO } from '../../base';
import { PageFooter, StayInTouch } from '../../common';

import { Hero } from './Hero';

export interface SecurityProps {
  children?: ReactNode;
}

export const Security: FC<SecurityProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>OneKey</title>
      </Helmet>

      <SEO title="onekey" />

      <Navigation />

      <Main>
        <Box xs={{ backgroundColor: theme.colors.test500 }}>
          <Hero />
        </Box>

        <Container>
          <Box xs={{ paddingBottom: 80 }}>
            <StayInTouch />
          </Box>
        </Container>
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />
      {children}
    </>
  );
};
