import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../../../base';

export const ComingSoon: FC = () => {
  const theme = useTheme();

  return (
    <Span
      xs={{
        ...theme.text.medium100,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 2,
        paddingBottom: 2,

        borderRadius: 99,
        backgroundColor: '#8a9195',
        color: '#101111',
      }}
      m={{
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        ...theme.text.medium200,
      }}
    >
      COMING SOON
    </Span>
  );
};
