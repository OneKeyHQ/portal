import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../../../../base';

export interface ProductPriceProps {
  children?: ReactNode;
}

export const ProductPrice: FC<ProductPriceProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Span
      css={{
        color: theme.colors.test500,
      }}
      xs={theme.text.normal400}
    >
      {children}
    </Span>
  );
};
