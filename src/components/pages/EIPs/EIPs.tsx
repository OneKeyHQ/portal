import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { Helmet } from 'react-helmet';

import { Box, Container, Main } from '../../base';
import { Navigation, PageFooter, StayInTouch } from '../../common';

import { EIPsTable } from './EIPsTable';
import { MainTitle } from './MainTitle';

export interface EIPsProps {
  children?: ReactNode;
}

export const EIPs: FC<EIPsProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box xs={{ background: theme.colors.test100 }}>
      <Helmet>
        <title>EIPs</title>
      </Helmet>
      <Navigation />

      <Main>
        <Container>
          <MainTitle />
        </Container>

        <EIPsTable />

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
