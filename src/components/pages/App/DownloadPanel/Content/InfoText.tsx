import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../../../base';

export interface InfoTextProps {
  children?: ReactNode;
}

export const InfoText: FC<InfoTextProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Span xs={{ ...theme.text.normal100, color: theme.colors.test300 }}>
      {children}
    </Span>
  );
};
