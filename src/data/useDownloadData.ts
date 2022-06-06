import { useOneKeyVersion } from './useOneKeyVersion';

const otherPlatforms = {
  type: 'otherPlatforms',
  path: 'https://onekey.so/download',
  image: 'desktop',
  name: 'Other platforms',
  description: 'Mobile, desktop, browser',
};

const ios = {
  type: 'ios',
  name: 'App Store',
  description: 'Download for free',
  path: 'https://onekey.so/download?client=ios',
  image: 'appstore',
};

const android = {
  type: 'android',
  path: 'https://onekey.so/download?client=android',
  image: 'google',
  name: 'Google Play',
  description: 'Download for free',
};

const desktop = {
  type: 'desktop',
  name: 'Desktop app',
  description: 'Mac, Windows, Linux',
  path: 'https://onekey.so/download?client=desktop',
  image: 'desktop',
};

const browserExtension = {
  type: 'browserExtension',
  path: 'https://onekey.so/plugin',
  image: 'browserExtension',
  name: 'Browser extension',
  description: 'Chrome, Firefox, Edge',
};

const mobile = {
  type: 'mobile',
  path: 'https://onekey.so/download',
  image: 'mobile',
  name: 'Mobile app',
  description: 'iOS and Android',
};

const web = {
  type: 'web',
  path: '',
  image: 'web',
  name: 'Web',
  description: 'Web app',
};

const downloadData = {
  otherPlatforms,
  ios,
  android,
  desktop,
  browserExtension,
  mobile,
  web,
};

export type DownloadTypes = keyof typeof downloadData;

export function useDownloadData() {
  const { data: oneKeyVersionData } = useOneKeyVersion();

  console.log('oneKeyVersionData', oneKeyVersionData);

  return downloadData;
}
