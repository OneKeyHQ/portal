import { FC, ReactNode } from 'react';

import { detect } from 'detect-browser';

import { Box, Container } from '../../../../base';
import { Background } from '../Background';

import { OtherPlatforms } from './OtherPlatforms';

export interface MobileDownloadPanelProps {
  children?: ReactNode;
}

export const MobileDownloadPanel: FC<MobileDownloadPanelProps> = (props) => {
  const { children } = props;

  const detectResult = detect();

  let isMobilePhone = false;

  if (detectResult) {
    isMobilePhone = detectResult.os === 'android' || detectResult.os === 'iOS';
  }

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
