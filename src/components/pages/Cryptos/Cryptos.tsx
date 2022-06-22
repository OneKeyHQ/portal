import { FC, ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Container, Main } from '../../base';
import { Navigation, PageFooter, StayInTouch } from '../../common';

import { CryptosTable } from './CryptosTable';
import { MainTitle } from './MainTitle';

export interface CryptosProps {
  children?: ReactNode;
}

export const Cryptos: FC<CryptosProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      <Helmet>
        <title>Cryptos</title>
      </Helmet>

      <Navigation />

      <Main>
        <Container>
          <MainTitle />
        </Container>

        <CryptosTable />

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
