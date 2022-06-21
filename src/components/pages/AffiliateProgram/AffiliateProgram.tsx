import { FC, ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Container, Flex, Main } from '../../base';
import { Navigation, PageFooter } from '../../common';

import { AffiliateProgramCard } from './AffiliateProgramCard';
import { MainTitle } from './MainTitle';
import { useAffiliateProgramData } from './useAffiliateProgramData';

export interface AffiliateProgramProps {
  children?: ReactNode;
}

export const AffiliateProgram: FC<AffiliateProgramProps> = (props) => {
  const { children } = props;
  const affiliateProgramData = useAffiliateProgramData();

  return (
    <Box>
      <Helmet>
        <title>OneKey</title>
      </Helmet>
      <Navigation />

      <Main>
        <Container>
          <MainTitle />

          <Flex xs={{ alignItems: 'center', justifyContent: 'center' }}>
            <Flex
              xs={{
                gap: 24,
                maxWidth: 1336,
                paddingBottom: 80,
                flexDirection: 'column',
              }}
              m={{
                flexDirection: 'row',
              }}
            >
              {affiliateProgramData.cards.map((card) => (
                <AffiliateProgramCard key={card.title} {...card} />
              ))}
            </Flex>
          </Flex>
        </Container>

        {children}
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks={false} />
    </Box>
  );
};