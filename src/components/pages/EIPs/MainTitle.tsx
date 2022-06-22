import { FC, ReactNode } from 'react';

import { Box } from '../../base';
import { NormalCenterPageHeader } from '../../common';

import { useEIPs } from './useEIPs';

export interface MainTitleProps {
  children?: ReactNode;
}

export const MainTitle: FC<MainTitleProps> = (props) => {
  const { children } = props;
  const eips = useEIPs();

  return (
    <Box>
      <NormalCenterPageHeader {...eips.mainTitle} />
      {children}
    </Box>
  );
};
