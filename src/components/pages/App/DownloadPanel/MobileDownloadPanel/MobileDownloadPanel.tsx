import { FC, ReactNode } from 'react';

import { Box } from '../../../../base';
import { Background } from '../Background';

export interface MobileDownloadPanelProps {
  children?: ReactNode;
}

export const MobileDownloadPanel: FC<MobileDownloadPanelProps> = (props) => {
  const { children } = props;

  return (
    <Box
      xs={{
        height: 656,
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
      }}
    >
      <Background />
      {children}
    </Box>
  );
};
