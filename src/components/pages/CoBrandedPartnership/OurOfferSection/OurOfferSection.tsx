import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Container, Flex, H2, Section, Span } from '../../../base';
import { FeatureInformationCard } from '../../../common';

import { useOurOfferSectionData } from './useOurOfferSectionData';

export interface OurOfferSectionProps {
  children?: ReactNode;
}

export const OurOfferSection: FC<OurOfferSectionProps> = (props) => {
  const { children } = props;
  const ourOfferSectionData = useOurOfferSectionData();
  const theme = useTheme();

  return (
    <Section xs={{ paddingTop: 80, paddingBottom: 80 }}>
      <Flex
        xs={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          gap: 20,
        }}
      >
        <H2
          xs={theme.text.medium700}
          s={theme.text.medium800}
          m={theme.text.medium900}
        >
          {ourOfferSectionData.title}
        </H2>

        <Span
          css={{ maxWidth: 400 }}
          xs={theme.text.normal300}
          s={theme.text.normal400}
          m={theme.text.normal500}
        >
          {ourOfferSectionData.description}
        </Span>
      </Flex>

      <Container>
        <Flex xs={{ gap: 20, paddingTop: 80 }}>
          {ourOfferSectionData.cards.map((card) => (
            <FeatureInformationCard key={card.title} {...card} />
          ))}
        </Flex>
      </Container>

      {children}
    </Section>
  );
};
