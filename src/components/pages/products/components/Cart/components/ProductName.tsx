import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../../../../base';

export interface ProductNameProps {
  children?: ReactNode;
}

export const ProductName: FC<ProductNameProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Span
      css={{
        color: theme.colors.test500,
      }}
      xs={theme.text.medium200}
      m={theme.text.medium400}
    >
      {children}
    </Span>
  );
};
