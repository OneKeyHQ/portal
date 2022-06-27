import { FC, ReactNode } from 'react';

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
  useMenu,
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
  const menu = useMenu();

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
        {...menu.menuTriggerProps}
        fillWidth
        variant="outlined"
        size="large"
        leftIcon={<AndroidIcon width={24} height={24} />}
        rightIcon={<ChevronDownIcon width={24} height={24} />}
      >
        Android
      </Button>

      <MenuItems {...menu.menuItemsProps}>
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
