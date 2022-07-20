import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, I18n, Span } from '../../../../base';
import { SectionTitle } from '../../../../common';

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
      <SectionTitle>
        <I18n
          name="title__compare_onekey_crypto_hardware_wallets"
          alwaysMultiLine
        />
      </SectionTitle>

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
