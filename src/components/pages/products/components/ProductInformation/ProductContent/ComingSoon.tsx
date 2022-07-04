import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, I18n } from '../../../../../base';

export interface ComingSoonProps {
  children?: ReactNode;
}

export const ComingSoon: FC<ComingSoonProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        width: 'fit-content',
        background: theme.colors.white,
        color: theme.colors.test300,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 22,
        paddingRight: 22,
        borderRadius: 100,
        ...theme.text.medium200,
      }}
      s={{
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 32,
        paddingRight: 32,
        ...theme.text.medium300,
      }}
      m={{
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 42,
        paddingRight: 42,
        ...theme.text.medium400,
      }}
    >
      <I18n name="action__coming_soon" />
      {children}
    </Box>
  );
};
