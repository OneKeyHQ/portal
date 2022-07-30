import { FC, ReactNode, useEffect } from 'react';

import queryString from 'query-string';

import { isBrowser } from '../../../../../../utils';
import { Container, Flex } from '../../../../../base';
import { FadeIn } from '../../../../../base/FadeIn';
import { useCurrentTabAtom } from '../../atom';

import { BridgeContent } from './BridgeContent';
import { BrowserContent } from './BrowserContent';
import { DesktopContent } from './DesktopContent';
import { MobileContent } from './MobileContent';
import { WebContent } from './WebContent';

export interface ContentProps {
  children?: ReactNode;
}

export const Content: FC<ContentProps> = (props) => {
  const { children } = props;
  const [currentTab, setCurrentTab] = useCurrentTabAtom();
  const search = isBrowser() ? queryString.parse(window.location.search) : null;

  useEffect(() => {
    if (isBrowser() && search) {
      const { client } = search;

      if (client === 'desktop') {
        setCurrentTab('desktop');
      } else if (
        client === 'mobile' ||
        client === 'android' ||
        client === 'ios'
      ) {
        setCurrentTab('mobile');
      } else if (client === 'browser' || client === 'browserExtension') {
        setCurrentTab('browserExtension');
      } else if (client === 'web') {
        setCurrentTab('web');
      } else if (client === 'bridge') {
        setCurrentTab('bridge');
      } else {
        setCurrentTab('desktop');
      }
    }
  }, [setCurrentTab, search]);

  return (
    <Container xs={{ height: '100%' }}>
      <FadeIn style={{ height: '100%' }}>
        <Flex
          xs={{
            height: '100%',
            width: '50%',
            paddingBottom: 40,
            paddingTop: 140,
            paddingRight: 64,
            paddingLeft: 0,
            position: 'relative',
            zIndex: 1,
            flexDirection: 'column',
            gap: 16,
            overflow: 'hidden',
          }}
        >
          {currentTab === 'desktop' && <DesktopContent />}
          {currentTab === 'web' && <WebContent />}
          {currentTab === 'browserExtension' && <BrowserContent />}
          {currentTab === 'mobile' && <MobileContent />}
          {currentTab === 'bridge' && <BridgeContent />}
        </Flex>
      </FadeIn>

      {children}
    </Container>
  );
};
