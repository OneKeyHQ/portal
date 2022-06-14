import { FC, ReactNode } from 'react';

import { useRuntimeDetect } from '../../../../../hooks';
import { Box, Container } from '../../../../base';
import { Background } from '../Background';

import { OtherPlatforms } from './OtherPlatforms';

export interface MobileDownloadPanelProps {
  children?: ReactNode;
}

export const MobileDownloadPanel: FC<MobileDownloadPanelProps> = (props) => {
  const { children } = props;
  const { isMobilePhone } = useRuntimeDetect();

  return (
    <Box>
      <Box
        xs={{
          height: 656,
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          transform: 'translateZ(0)',
        }}
      >
        <Background />

        <Container>{isMobilePhone ? 'a' : 'b'}</Container>

        {children}
      </Box>

      <Container>
        <OtherPlatforms />
      </Container>
    </Box>
  );
};
