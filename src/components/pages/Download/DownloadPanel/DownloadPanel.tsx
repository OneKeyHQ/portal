import React, { ReactNode } from 'react';

import { OnlyDisplay } from '../../../base';

import { DesktopDownloadPanel } from './DesktopDownloadPanel/DesktopDownloadPanel';
import { MobileDownloadPanel } from './MobileDownloadPanel';

export interface DownloadPanelProps {
  children?: ReactNode;
}

export const DownloadPanel: React.FC<DownloadPanelProps> = (props) => {
  const { children } = props;

  return (
    <>
      <OnlyDisplay l xl xxl>
        <DesktopDownloadPanel />
      </OnlyDisplay>

      <OnlyDisplay xs s m>
        <MobileDownloadPanel />
      </OnlyDisplay>

      {children}
    </>
  );
};
