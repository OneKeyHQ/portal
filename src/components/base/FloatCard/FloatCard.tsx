import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../Box';

export interface FloatCardProps {
  children?: ReactNode;
}

export const FloatCard: FC<FloatCardProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      css={{
        background: theme.colors.white,
        boxShadow:
          '0px 16px 32px rgba(0, 0, 0, 0.08), 0px 12px 24px rgba(0, 0, 0, 0.08)',
        borderRadius: 16,
      }}
    >
      {children}
    </Box>
  );
};
