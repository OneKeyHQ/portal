import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { BoxProps, I18n, Span } from '../../../../base';

export const ComingSoonLabel: FC<BoxProps> = (props) => {
  const theme = useTheme();

  return (
    <Span
      xs={{
        ...theme.text.medium100,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 99,
        backgroundColor: theme.colors.test200,
        color: theme.colors.test500,
        textTransform: 'uppercase',
      }}
      externalProps={props}
    >
      <I18n name="action__coming_soon" />
    </Span>
  );
};
