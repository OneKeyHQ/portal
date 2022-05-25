import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { BoxProps, Logo, Span } from '../../../../base';

export const OneKey: FC<BoxProps> = (props) => {
  const theme = useTheme();

  return (
    <Span xs={{ color: theme.colors.brandAlt400 }} externalProps={props}>
      <Logo
        as="span"
        xs={{ width: 36, height: 36 }}
        m={{ width: 56, height: 56 }}
        xl={{ width: 64, height: 64 }}
        xxl={{ width: 72, height: 72 }}
        css={{
          display: 'inline-block',
          verticalAlign: 'bottom',
          marginRight: 6,
        }}
      />
      OneKey
    </Span>
  );
};
