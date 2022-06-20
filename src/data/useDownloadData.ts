// for homepage app section

const otherPlatforms = {
  type: 'otherPlatforms',
  path: '/download#otherPlatforms',
  image: 'desktop',
  name: 'Other platforms',
  description: 'Mobile, desktop, browser',
};

const ios = {
  type: 'ios',
  name: 'App Store',
  description: 'Download for free',
  path: '/download?client=ios',
  image: 'appstore',
};

const android = {
  type: 'android',
  path: '/download?client=android',
  image: 'google',
  name: 'Google Play',
  description: 'Download for free',
};

const desktop = {
  type: 'desktop',
  name: 'Desktop app',
  description: 'Mac, Windows, Linux',
  path: '/download?client=desktop',
  image: 'desktop',
};

const browserExtension = {
  type: 'browserExtension',
  path: '/download?client=browser',
  image: 'browserExtension',
  name: 'Browser extension',
  description: 'Chrome, Firefox, Edge',
};

const mobile = {
  type: 'mobile',
  path: '/download?client=mobile',
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
  return downloadData;
}
