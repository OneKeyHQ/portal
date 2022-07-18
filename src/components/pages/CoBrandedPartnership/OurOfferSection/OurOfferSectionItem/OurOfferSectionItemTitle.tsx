import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../../../base';

export interface OurOfferSectionItemTitleProps {
  children?: ReactNode;
}

export const OurOfferSectionItemTitle: FC<OurOfferSectionItemTitleProps> = (
  props,
) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Span
      xs={{
        ...theme.text.medium700,
        color: theme.colors.test500,
      }}
    >
      {children}
    </Span>
  );
};
