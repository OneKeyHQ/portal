import { FC, ReactNode } from 'react';

import { Box, Section, Span } from '../../../base';

export interface OurOfferSectionProps {
  children?: ReactNode;
}

export const OurOfferSection: FC<OurOfferSectionProps> = (props) => {
  const { children } = props;

  return (
    <Section>
      <Box>
        <Span>Our Offer</Span>
        <Span>
          Customize your hardware wallet & reward your community, partners or
          employees.
        </Span>
      </Box>

      {children}
    </Section>
  );
};
