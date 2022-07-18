import { FC, ReactNode } from 'react';

import { Container, Flex, Section } from '../../../base';

import { OurOfferSectionItem } from './OurOfferSectionItem';
import { OurOfferSectionTitle } from './OurOfferSectionTitle';
import { useOurOfferSectionData } from './useOurOfferSectionData';

export interface OurOfferSectionProps {
  children?: ReactNode;
}

export const OurOfferSection: FC<OurOfferSectionProps> = (props) => {
  const { children } = props;
  const ourOfferSectionData = useOurOfferSectionData();

  return (
    <Section
      xs={{ paddingTop: 40, paddingBottom: 40 }}
      m={{ paddingTop: 100, paddingBottom: 100 }}
    >
      <Container>
        <OurOfferSectionTitle />

        <Flex
          xs={{ gap: 24, paddingTop: 60, flexDirection: 'column' }}
          m={{ flexDirection: 'row' }}
        >
          {ourOfferSectionData.cards.map((card) => (
            <OurOfferSectionItem key={card.title} {...card} />
          ))}
        </Flex>
      </Container>

      {children}
    </Section>
  );
};
