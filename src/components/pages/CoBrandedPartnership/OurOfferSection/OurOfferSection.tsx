import { FC, ReactNode } from 'react';

import { Container, Flex, Section } from '../../../base';
import { FeatureInformationCard } from '../../../common';

import { OurOfferSectionTitle } from './OurOfferSectionTitle';
import { useOurOfferSectionData } from './useOurOfferSectionData';

export interface OurOfferSectionProps {
  children?: ReactNode;
}

export const OurOfferSection: FC<OurOfferSectionProps> = (props) => {
  const { children } = props;
  const ourOfferSectionData = useOurOfferSectionData();

  return (
    <Section xs={{ paddingTop: 80, paddingBottom: 80 }}>
      <Container>
        <OurOfferSectionTitle />

        <Flex
          xs={{ gap: 20, paddingTop: 80, flexDirection: 'column' }}
          m={{ flexDirection: 'row' }}
        >
          {ourOfferSectionData.cards.map((card) => (
            <FeatureInformationCard key={card.title} {...card} />
          ))}
        </Flex>
      </Container>

      {children}
    </Section>
  );
};
