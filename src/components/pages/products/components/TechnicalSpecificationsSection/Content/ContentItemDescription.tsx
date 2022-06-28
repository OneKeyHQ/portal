import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../../../../base';

export interface ContentItemDescriptionProps {
  children?: ReactNode;
}

export const ContentItemDescription: FC<ContentItemDescriptionProps> = (
  props,
) => {
  const { children } = props;
  const theme = useTheme();
  const n2 = { ...theme.text.normal200, opacity: 0.5 };

  return <Span xs={n2}>{children}</Span>;
};
