import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../base';

export interface SectionTitleProps {
  children?: ReactNode;
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
}

export const SectionTitle: FC<SectionTitleProps> = (props) => {
  const { children, color, textAlign = 'center' } = props;
  const theme = useTheme();

  return (
    <Span
      xs={{
        ...theme.text.medium700,
        textAlign,
        color: color || theme.colors.test500,
      }}
      m={theme.text.medium800}
      l={theme.text.medium900}
      xl={theme.text.medium1000}
      xxl={theme.text.medium1100}
    >
      {children}
    </Span>
  );
};
