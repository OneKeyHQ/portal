import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Flex, Span } from '../../../../base';
import { StatusIcon } from '../../../../common';

export interface SuggestStatusProps {
  children?: ReactNode;
  isSupported: boolean;
}

export const SuggestStatus: FC<SuggestStatusProps> = (props) => {
  const { isSupported, children } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        gap: 8,
        color: isSupported ? theme.colors.test500 : theme.colors.test300,
        ...theme.text.medium400,
      }}
    >
      <StatusIcon isSupported={isSupported} />
      <Span>{children}</Span>
    </Flex>
  );
};
