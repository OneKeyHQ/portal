import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../base/Box';

export const Copyright: FC = () => {
  const theme = useTheme();

  return (
    <Span xs={{ ...theme.text.normal100, color: '#ffffff99' }}>
      {new Date().getFullYear()} OneKey, Inc. All rights reserved.
    </Span>
  );
};
