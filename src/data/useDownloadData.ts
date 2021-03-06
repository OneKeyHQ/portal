import { useTranslation } from 'gatsby-plugin-react-i18next';

import { useOneKeyVersion } from './useOneKeyVersion';

export type DownloadTypes = keyof ReturnType<typeof useDownloadData>;

export function useDownloadData() {
  const { t } = useTranslation();
  const { formattedData } = useOneKeyVersion();

  const otherPlatforms = {
    type: 'otherPlatforms',
    path: '/download#otherPlatforms',
    image: 'desktop',
    name: t('title__other_platforms'),
    description: 'Mobile, desktop, browser',
  };

  const ios = {
    type: 'ios',
    name: t('title__app_store'),
    description: 'Download for free',
    path: '/download?client=ios',
    image: 'appstore',
  };

  const android = {
    type: 'android',
    path: '/download?client=android',
    image: 'google',
    name: t('title__google_play'),
    description: 'Download for free',
  };

  const desktop = {
    type: 'desktop',
    name: t('title__desktop_app'),
    description: 'macOS, Windows, Linux',
    path: '/download?client=desktop',
    image: 'desktop',
  };

  const browserExtension = {
    type: 'browserExtension',
    path: '/download?client=browserExtension',
    image: 'browserExtension',
    name: t('title__browser_extension'),
    description: 'Chrome, Firefox, Edge',
  };

  const mobile = {
    type: 'mobile',
    path: '/download?client=mobile',
    image: 'mobile',
    name: t('title__mobile_app'),
    description: 'iOS and Android',
  };

  const web = {
    type: 'web',
    path: formattedData.web.url,
    image: 'web',
    name: 'Web',
    description: 'Web app',
  };

  const bridge = {
    type: 'bridge',
    path: '/download?client=bridge',
    image: 'bridge',
    name: t('title__hardware_bridge'),
    description: 'macOS, Windows, Linux',
  };

  const downloadData = {
    bridge,
    otherPlatforms,
    ios,
    android,
    desktop,
    browserExtension,
    mobile,
    web,
  };

  return downloadData;
}
