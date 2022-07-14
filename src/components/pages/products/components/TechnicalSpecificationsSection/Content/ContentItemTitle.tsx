import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { H2 } from '../../../../../base';

export interface ContentItemTitleProps {
  children?: ReactNode;
}

export const ContentItemTitle: FC<ContentItemTitleProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return <H2 xs={theme.text.medium600}>{children}</H2>;
};
