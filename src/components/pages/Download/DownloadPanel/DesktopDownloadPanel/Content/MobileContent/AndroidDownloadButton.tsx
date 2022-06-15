import { FC, ReactNode, RefObject, useRef, useState } from 'react';

import { useHover, useOnClickOutside } from '../../../../../../../hooks';
import {
  AndroidIcon,
  Box,
  Button,
  ChevronDownIcon,
  Flex,
} from '../../../../../../base';
import { useOneKeyDownloadData } from '../../../useOneKeyDownloadData';

import { HoverPanel } from './HoverPanel';
import apkQR from './images/apk-qr.png';
import googlePlayQR from './images/google-play-qr.png';
import { QR } from './QR';

export interface AndroidDownloadButtonProps {
  children?: ReactNode;
}

export const AndroidDownloadButton: FC<AndroidDownloadButtonProps> = (
  props,
) => {
  const { children } = props;
  const {
    platforms: { androidGooglePlay, androidAPK },
  } = useOneKeyDownloadData();
  const { hoverProps, isHovered } = useHover({ timeout: 100 });
  const [isHoverPanelVisible, setIsHoverPanelVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside([ref as RefObject<Element>], () => {
    setIsHoverPanelVisible(false);
  });

  return (
    <Box xs={{ flex: 1, maxWidth: 220, position: 'relative' }}>
      <Box
        {...hoverProps}
        xs={{
          position: 'absolute',
          top: -190,
          left: isHovered ? -50 : 9999,
          opacity: isHovered ? 1 : 0,
        }}
      >
        <Flex xs={{ gap: 16 }}>
          <QR imageURL={googlePlayQR} name={androidGooglePlay.name} />
          <QR imageURL={apkQR} name={androidAPK.name} />
        </Flex>
      </Box>

      <Button
        {...hoverProps}
        onClick={() => setIsHoverPanelVisible(!isHoverPanelVisible)}
        fillWidth
        variant="outlined"
        size="large"
        leftIcon={<AndroidIcon width={24} height={24} />}
        rightIcon={<ChevronDownIcon width={24} height={24} />}
      >
        Android
      </Button>

      <div ref={ref}>
        <HoverPanel
          isActive={isHoverPanelVisible}
          subItems={[
            { name: androidGooglePlay.name, url: androidGooglePlay.url },
            { name: androidAPK.name, url: androidAPK.url },
          ]}
        />
      </div>
      {children}
    </Box>
  );
};
