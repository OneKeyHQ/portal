import { FC, ReactNode } from 'react';

import { useRuntimeDetect } from '../../../../../hooks';
import { Box, Container, OnlyDisplay } from '../../../../base';
import { Background } from '../Background';

import { AndroidContent } from './content/AndroidContent';
import { IOSContent } from './content/IOSContent';
import { OtherContent } from './content/OtherContent';
import { OtherPlatforms } from './OtherPlatforms';

export interface MobileDownloadPanelProps {
  children?: ReactNode;
}

export const MobileDownloadPanel: FC<MobileDownloadPanelProps> = (props) => {
  const { children } = props;
  const { isIOS } = useRuntimeDetect();

  return (
    <Box>
      <Box
        xs={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          transform: 'translateZ(0)',
        }}
      >
        <Background />

        <OnlyDisplay xs s>
          {isIOS ? <IOSContent /> : <AndroidContent />}
        </OnlyDisplay>

        <OnlyDisplay m l>
          <OtherContent />
        </OnlyDisplay>

        {children}
      </Box>

      <Container>
        <OtherPlatforms />
      </Container>
    </Box>
  );
};
