import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, H2 } from '../../../../base/Box';
import { Flex } from '../../../../base/Flex';

export interface LanguagesPanelItemProps {
  children?: ReactNode;
}

export const LanguagesPanelItem: FC<LanguagesPanelItemProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        padding: 20,
        borderRadius: 8,
        cursor: 'pointer',
        ':hover': {
          background: theme.colors.test100,
        },
      }}
    >
      <Flex xs={{ gap: 20, color: theme.colors.test500 }}>
        <H2 xs={theme.text.medium400}>{children}</H2>
      </Flex>
    </Box>
  );
};
