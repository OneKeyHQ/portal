import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../Box';

export interface MenuItemProps {
  children?: ReactNode;
}

export const MenuItem: FC<MenuItemProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        ...theme.text.medium300,
        transition: theme.transitions.allEaseOut,
        padding: '12px 22px',
        borderRadius: 12,
        textAlign: 'center',
        wordBreak: 'keep-all',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        color: theme.colors.test500,
        ':hover': {
          backgroundColor: theme.colors.test100,
        },
      }}
    >
      {children}
    </Box>
  );
};
