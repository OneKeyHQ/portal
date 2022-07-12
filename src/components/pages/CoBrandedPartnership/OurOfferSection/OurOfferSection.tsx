import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Container, Flex, H2, I18n, Section, Span } from '../../../base';
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
          xs={{
            ...theme.text.medium700,
            color: theme.colors.test500,
          }}
          s={theme.text.medium800}
          m={theme.text.medium900}
        >
          <I18n name="title__our_offer" />
        </H2>

        <Span
          css={{ maxWidth: 400 }}
          xs={theme.text.normal300}
          s={theme.text.normal400}
          m={theme.text.normal500}
        >
          <I18n name="title__our_offer_desc" />
        </Span>
      </Flex>

      <Container>
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
