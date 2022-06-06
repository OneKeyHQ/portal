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
  image: 'extension',
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

export function useDownloadData() {
  const { data: oneKeyVersionData } = useOneKeyVersion();

  const downloadData = {
    otherPlatforms,
    ios,
    android,
    desktop,
    browserExtension,
    mobile,
  };

  console.log('oneKeyVersionData', oneKeyVersionData);

  return downloadData;
}
