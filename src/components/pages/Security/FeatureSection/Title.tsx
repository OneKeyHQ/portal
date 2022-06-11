import { FC, ReactNode } from 'react';

import { Box, H2, Span } from '../../../base';

export interface TitleProps {
  children?: ReactNode;
  subtitle: string;
  title: string;
  description: string;
}

export const Title: FC<TitleProps> = (props) => {
  const { children, subtitle, description, title } = props;

  return (
    <Box xs={{ textAlign: 'center' }}>
      <Span>{subtitle}</Span>

      <H2>{title}</H2>

      <Span>{description}</Span>
      {children}
    </Box>
  );
};
