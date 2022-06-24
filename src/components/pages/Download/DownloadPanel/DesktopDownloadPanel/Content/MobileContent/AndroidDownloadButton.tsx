import { FC, ReactNode, useState } from 'react';

import { useHover } from '../../../../../../../hooks';
import {
  AndroidIcon,
  Box,
  Button,
  ChevronDownIcon,
  Flex,
  Link,
  MenuItem,
  MenuItems,
} from '../../../../../../base';
import { useOneKeyDownloadData } from '../../../useOneKeyDownloadData';

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

  const menus = [
    { name: androidGooglePlay.name, url: androidGooglePlay.url },
    { name: androidAPK.name, url: androidAPK.url },
  ];

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

      <MenuItems
        onClickOutside={() => setIsHoverPanelVisible(false)}
        isActive={isHoverPanelVisible}
      >
        {menus.map((item) => (
          <Link key={item.name} to={item.url}>
            <MenuItem>{item.name}</MenuItem>
          </Link>
        ))}
      </MenuItems>

      {children}
    </Box>
  );
};
