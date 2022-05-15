import { FC } from 'react';

import { BoxProps, Logo, Span } from '../../../../base';

export const OneKey: FC<BoxProps> = (props) => (
  <Span
    xs={{
      color: '#2EDB43',
    }}
    externalProps={props}
  >
    <Logo
      xs={{
        width: 36,
        height: 36,
      }}
      m={{
        width: 56,
        height: 56,
      }}
      xl={{
        width: 64,
        height: 64,
      }}
      xxl={{
        width: 72,
        height: 72,
      }}
      css={{
        display: 'inline-block',
        verticalAlign: 'bottom',
        marginRight: 6,
      }}
    />
    OneKey
  </Span>
);
