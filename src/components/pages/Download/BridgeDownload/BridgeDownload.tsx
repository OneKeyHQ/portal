import { FC, ReactNode } from 'react';

import { Box } from '../../../base';

import { BridgeDownloadMenu } from './BridgeDownloadMenu';

export interface BridgeDownloadProps {
  children?: ReactNode;
}

export const BridgeDownload: FC<BridgeDownloadProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      <Box>
        <BridgeDownloadMenu />
      </Box>

      {children}
    </Box>
  );
};
