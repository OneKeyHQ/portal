import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { H2 } from '../../../../../base';

export interface ContentItemTitle2Props {
  children?: ReactNode;
}

export const ContentItemTitle2: FC<ContentItemTitle2Props> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const m3 = { ...theme.text.medium300, opacity: 0.5 };

  if (!children) {
    return null;
  }

  return <H2 xs={m3}>{children}</H2>;
};
