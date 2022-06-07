import React, { ReactNode } from 'react';

import { Box } from '../../../base/Box';

import { DesktopDownloadPanel } from './DesktopDownloadPanel/DesktopDownloadPanel';

export interface DownloadPanelProps {
  children?: ReactNode;
}

export const DownloadPanel: React.FC<DownloadPanelProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Box xs={{ display: 'none' }} l={{ display: 'block' }}>
        <DesktopDownloadPanel />
      </Box>

      {children}
    </>
  );
};
