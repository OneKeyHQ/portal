import { NonEmptyArray } from '../../../../../types';

import appstoreSvg from './images/icon-download-appstore.svg';
import desktopSvg from './images/icon-download-desktop.svg';
import extensionSvg from './images/icon-download-extension.svg';
import googleSvg from './images/icon-download-google-play.svg';
import mobileSvg from './images/icon-download-mobile.svg';
// import webSvg from './images/icon-download-web.svg';

type StartItemData = {
  name: string;
  description: string;
  image: string;
  path: string;
  type: string;
};

const data: NonEmptyArray<StartItemData> = [
  {
    type: 'otherPlatforms',
    path: '#',
    image: desktopSvg,
    name: 'Other platforms',
    description: 'Mobile, desktop, browser',
  },
  {
    type: 'ios',
    name: 'App Store',
    description: 'Download for free',
    path: '#',
    image: appstoreSvg,
  },
  {
    type: 'android',
    path: '#',
    image: googleSvg,
    name: 'Google Play',
    description: 'Download for free',
  },
  {
    type: 'desktop',
    name: 'Other platforms',
    description: 'Mac, Windows, Linux',
    path: '#',
    image: desktopSvg,
  },
  {
    type: 'browserExtension',
    path: '#',
    image: extensionSvg,
    name: 'Browser extension',
    description: 'Chrome, Firefox, Edge',
  },
  {
    type: 'mobile',
    path: '#',
    image: mobileSvg,
    name: 'Mobile app',
    description: 'iOS and Android',
  },
];

export function useStartItemsData() {
  return data;
}

type Types =
  | 'ios'
  | 'android'
  | 'desktop'
  | 'web'
  | 'otherPlatforms'
  | 'browserExtension'
  | 'mobile';

export function getStartItemDataByType(type: Types): StartItemData {
  const startItems = data;
  const item = startItems.find((_item) => _item.type === type);
  return item || data[0];
}
