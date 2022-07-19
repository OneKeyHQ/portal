import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Flex, H2, I18n, Span } from '../../../base';

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
