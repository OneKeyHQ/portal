import { FC, ReactNode, SetStateAction, useEffect } from 'react';

import { useTheme } from '@emotion/react';

import { isBrowser } from '../../../../../utils';
import { Box } from '../../../../base';
import { TabTypes, useCurrentTabAtom } from '../atom';
import { Background } from '../Background';

import { Content } from './Content';
import { Tabs } from './Tabs';

export interface DesktopDownloadPanelProps {
  children?: ReactNode;
}

export const DesktopDownloadPanel: FC<DesktopDownloadPanelProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const [, setCurrentTabAtom] = useCurrentTabAtom();

  useEffect(() => {
    if (isBrowser()) {
      const urlParams = new URLSearchParams(window.location.search);

      if (urlParams.has('client')) {
        const client = urlParams.get('client');

        setCurrentTabAtom(client as SetStateAction<TabTypes>);
      }
    }
  }, [setCurrentTabAtom]);

  return (
    <Box
      xs={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 720,
        maxHeight: 960,
        backgroundColor: theme.colors.white,
      }}
    >
      <Box css={{ flex: 1, position: 'relative' }}>
        {isBrowser() && <Background />}

        <Content />
      </Box>

      <Tabs />

      {children}
    </Box>
  );
};
