import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../base';

export interface HeroDescriptionProps {
  children?: ReactNode;
}

export const HeroDescription: FC<HeroDescriptionProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Span css={{ color: theme.colors.test400 }} xs={theme.text.normal300}>
      {children}
    </Span>
  );
};
