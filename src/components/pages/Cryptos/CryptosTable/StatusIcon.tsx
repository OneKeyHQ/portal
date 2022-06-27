import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { CheckIcon, FailIcon } from '../../../base';

export interface StatusIconProps {
  isSupported: boolean;
}

export const StatusIcon: FC<StatusIconProps> = (props) => {
  const { isSupported } = props;
  const theme = useTheme();

  if (isSupported) {
    return (
      <CheckIcon color={theme.colors.brandAlt400} width={24} height={24} />
    );
  }

  return <FailIcon color={theme.colors.test300} width={24} height={24} />;
};
