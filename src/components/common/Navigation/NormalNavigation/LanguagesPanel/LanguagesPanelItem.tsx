import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Span } from '../../../../base/Box';

export interface LanguagesPanelItemProps {
  children?: ReactNode;
}

export const LanguagesPanelItem: FC<LanguagesPanelItemProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 12,
        color: theme.colors.test500,
        cursor: 'pointer',
        textAlign: 'center',
        ':hover': {
          background: theme.colors.test100,
        },
      }}
    >
      <Span xs={theme.text.medium300}>{children}</Span>
    </Box>
  );
};
