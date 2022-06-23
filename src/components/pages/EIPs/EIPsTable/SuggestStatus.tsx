import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../../base/Box';
import { CheckIcon } from '../../../base/Icon';

export interface SuggestStatusProps {
  isSupported: boolean;
}

export const SuggestStatus: FC<SuggestStatusProps> = (props) => {
  const { isSupported } = props;
  const theme = useTheme();

  return isSupported ? (
    <CheckIcon color={theme.colors.brandAlt400} width={24} height={24} />
  ) : (
    <Span>Not supported yet</Span>
  );
};
