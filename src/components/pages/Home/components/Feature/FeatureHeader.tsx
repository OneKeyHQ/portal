import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, LaunchAppButton, Span } from '../../../../base';

export interface HeaderProps {
  children?: ReactNode;
}

export const FeatureHeader: FC<HeaderProps> = () => {
  const theme = useTheme();
  const { text: textStyle } = theme;

  return (
    <Box
      xs={{
        position: 'relative',
        margin: '0 auto',
        maxWidth: 520,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        textAlign: 'center',
      }}
    >
      <Span
        xs={{ ...textStyle.medium800, color: '#101111' }}
        m={{ ...textStyle.medium900 }}
        l={{ ...textStyle.medium1000 }}
      >
        Supercharge great Web3 products.
      </Span>
      <Span
        xs={{ ...textStyle.normal200, color: theme.colors.test400 }}
        m={{ ...textStyle.normal300 }}
        l={{ ...textStyle.normal400 }}
        xl={{ ...textStyle.normal500 }}
      >
        Compatible with MetaMask and other wallets. DeFi and Mining also
        integrated.
      </Span>

      <Box>
        <LaunchAppButton />
      </Box>
    </Box>
  );
};
