import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, H2, I18n, Span } from '../../../../base';

export interface ProductCompareTitleProps {
  children?: ReactNode;
}

export const ProductCompareTitle: FC<ProductCompareTitleProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
        paddingTop: 80,
        paddingBottom: 48,
      }}
      m={{
        paddingTop: 120,
      }}
    >
      <H2
        xs={{
          ...theme.text.medium700,
          textAlign: 'center',
          color: theme.colors.test500,
        }}
        m={theme.text.medium800}
        l={theme.text.medium900}
        xl={theme.text.medium1000}
      >
        <I18n
          name="title__compare_onekey_crypto_hardware_wallets"
          alwaysMultiLine
        />
      </H2>

      <Span
        xs={{
          textAlign: 'center',
          color: theme.colors.test400,
          ...theme.text.normal400,
        }}
        m={theme.text.normal500}
      >
        <I18n name="content__which_one_is_right_for_you" />
      </Span>

      {children}
    </Box>
  );
};
