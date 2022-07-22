import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Flex, I18n, Span } from '../../../base';
import { SectionTitle } from '../../../common';

export interface OurOfferSectionTitleProps {
  children?: ReactNode;
}

export const OurOfferSectionTitle: FC<OurOfferSectionTitleProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        gap: 20,
      }}
    >
      <SectionTitle>
        <I18n name="title__our_offer" />
      </SectionTitle>

      <Span
        css={{ maxWidth: 600, color: theme.colors.test400 }}
        xs={theme.text.normal300}
        s={theme.text.normal400}
        m={theme.text.normal500}
      >
        <I18n name="title__our_offer_desc" />
      </Span>

      {children}
    </Flex>
  );
};
