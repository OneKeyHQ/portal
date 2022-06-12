import { FC, ReactNode } from 'react';

import { Box, Container, Flex, H2, Section, Span } from '../../../base';
import { FeatureInformationCard } from '../../../common';

import { useOurOfferSectionData } from './useOurOfferSectionData';

export interface OurOfferSectionProps {
  children?: ReactNode;
}

export const OurOfferSection: FC<OurOfferSectionProps> = (props) => {
  const { children } = props;
  const ourOfferSectionData = useOurOfferSectionData();

  return (
    <Section xs={{ paddingTop: 80, paddingBottom: 80 }}>
      <Box xs={{ textAlign: 'center' }}>
        <H2>{ourOfferSectionData.title}</H2>

        <Span>{ourOfferSectionData.description}</Span>
      </Box>

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
