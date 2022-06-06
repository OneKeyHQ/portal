import { FC, SVGProps, createElement } from 'react';

import { DownloadTypes } from '../../../data/useDownloadData';
import {
  DownloadAppstoreIcon,
  DownloadDesktopIcon,
  DownloadExtensionIcon,
  DownloadGooglePlayIcon,
  DownloadMobileIcon,
  DownloadWebIcon,
} from '../../base';

export interface PlatformIconProps extends SVGProps<SVGSVGElement> {
  iconType?: DownloadTypes;
}

export const PlatformIcon: FC<PlatformIconProps> = (props) => {
  const { iconType, ...otherProps } = props;
  let icon = DownloadDesktopIcon;

  if (iconType === 'otherPlatforms') {
    icon = DownloadDesktopIcon;
  } else if (iconType === 'ios') {
    icon = DownloadAppstoreIcon;
  } else if (iconType === 'android') {
    icon = DownloadGooglePlayIcon;
  } else if (iconType === 'desktop') {
    icon = DownloadDesktopIcon;
  } else if (iconType === 'browserExtension') {
    icon = DownloadExtensionIcon;
  } else if (iconType === 'mobile') {
    icon = DownloadMobileIcon;
  } else if (iconType === 'web') {
    icon = DownloadWebIcon;
  }

  return createElement(icon, otherProps);
};
