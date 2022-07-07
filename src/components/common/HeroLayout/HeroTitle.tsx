import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../base';

export interface HeroTitleProps {
  children?: ReactNode;
}

export const HeroTitle: FC<HeroTitleProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Span
      xs={theme.text.medium700}
      m={theme.text.medium800}
      l={theme.text.medium900}
      xl={theme.text.medium1000}
      xxl={theme.text.medium1100}
    >
      {children}
    </Span>
  );
};
