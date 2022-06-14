import { FC, ReactNode } from 'react';

import { useRuntimeDetect } from '../../../../../hooks';
import { Box, Container, Flex } from '../../../../base';
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
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          transform: 'translateZ(0)',
        }}
      >
        <Background />

        <Container>
          <Flex
            xs={{
              height: 656,
              position: 'relative',
              zIndex: 100,
              alignItems: 'flex-end',
            }}
          >
            {!isMobilePhone && (
              <Box>Bring your crypto assets to mobile, too.</Box>
            )}
          </Flex>
        </Container>

        {children}
      </Box>

      <Container>
        <OtherPlatforms />
      </Container>
    </Box>
  );
};
