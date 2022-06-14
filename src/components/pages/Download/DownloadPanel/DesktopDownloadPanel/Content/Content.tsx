import { FC, ReactNode } from 'react';

import { Container, Flex } from '../../../../../base';
import { useCurrentTabAtom } from '../../atom';

import { BrowserContent } from './BrowserContent';
import { DesktopContent } from './DesktopContent';
import { MobileContent } from './MobileContent';
import { WebContent } from './WebContent';

export interface ContentProps {
  children?: ReactNode;
}

export const Content: FC<ContentProps> = (props) => {
  const { children } = props;
  const [currentTab] = useCurrentTabAtom();

  return (
    <Container xs={{ height: '100%' }}>
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
        }}
      >
        {currentTab === 'desktop' && <DesktopContent />}
        {currentTab === 'web' && <WebContent />}
        {currentTab === 'browserExtension' && <BrowserContent />}
        {currentTab === 'mobile' && <MobileContent />}
      </Flex>

      {children}
    </Container>
  );
};
