import { FC, ReactNode } from 'react';

import { useOneKeyVersion } from '../../../../data';

export interface BridgeDownloadProps {
  children?: ReactNode;
}

export const BridgeDownload: FC<BridgeDownloadProps> = (props) => {
  const { children } = props;
  const data = useOneKeyVersion();

  console.log('data', data);

  return <div>BridgeDownload {children}</div>;
};
