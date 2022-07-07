import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, H2, I18n } from '../../../../base';

export interface ProductsTitleProps {
  children?: ReactNode;
}

export const ProductsTitle: FC<ProductsTitleProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box>
      <H2
        xs={{
          ...theme.text.medium700,
          textAlign: 'center',
        }}
        m={theme.text.medium800}
        l={theme.text.medium900}
        xl={theme.text.medium1000}
      >
        <I18n name="title__hardware_wallets" />
      </H2>

      {children}
    </Box>
  );
};
