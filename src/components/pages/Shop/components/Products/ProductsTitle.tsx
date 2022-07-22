import { FC, ReactNode } from 'react';

import { Box, I18n } from '../../../../base';
import { SectionTitle } from '../../../../common';

export interface ProductsTitleProps {
  children?: ReactNode;
}

export const ProductsTitle: FC<ProductsTitleProps> = (props) => {
  const { children } = props;

  return (
    <Box
      xs={{
        paddingTop: 80,
        paddingBottom: 48,
        textAlign: 'center',
      }}
      m={{
        paddingTop: 120,
      }}
    >
      <SectionTitle>
        <I18n name="title__hardware_wallets" />
      </SectionTitle>

      {children}
    </Box>
  );
};
