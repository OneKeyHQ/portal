import { useTranslation } from 'gatsby-plugin-react-i18next';

import { useOneKeyVersion } from '../../../../data';
import {
  AndroidIcon,
  AppleIcon,
  BoxIcon,
  ChromeIcon,
  DesktopIcon,
  EdgeIcon,
  FirefoxIcon,
  GooglePlayIcon,
  LinuxIcon,
  LogoIcon,
  MobileIcon,
  WebIcon,
  WindowsIcon,
} from '../../../base';

export function useOneKeyDownloadData() {
  const { formattedData } = useOneKeyVersion();
  const { t } = useTranslation();

  // platforms

  const ios = {
    icon: AppleIcon,
    name: 'App Store',
    description: `v${formattedData.ios.version}, for iOS 14.0+, ${t(
      'title__not_available_on_the_chinese_app_store',
    )}`,
    url: formattedData.ios.url,
    faq: {
      title: 'iOS FAQ',
      questions: [
        {
          text: t('title__how_to_register_an_account'),
          url: 'https://help.onekey.so/hc/articles/4404262744591',
        },
        {
          text: t('title__how_to_activate_discover_page'),
          url: 'https://help.onekey.so/hc/articles/360004394795',
        },
      ],
    },
  };

  const androidGooglePlay = {
    icon: GooglePlayIcon,
    name: 'Google Play',
    description: `v${formattedData.androidGooglePlay.version}, for Android 8.0+`,
    url: formattedData.androidGooglePlay.url,
  };

  const androidAPK = {
    icon: AndroidIcon,
    name: 'Android APK',
    description: `v${formattedData.androidAPK.version}, for Android 8.0+`,
    url: formattedData.androidAPK.url,
  };

  const macIntel = {
    icon: AppleIcon,
    name: 'Mac Intel',
    description: `v${formattedData.macIntel.version}, for macOS 10.8+`,
    url: formattedData.macIntel.url,
  };

  const macSilicon = {
    icon: AppleIcon,
    name: 'Mac Silicon',
    description: `v${formattedData.macSilicon.version}, for macOS 10.8+`,
    url: formattedData.macSilicon.url,
  };

  const win = {
    icon: WindowsIcon,
    name: 'Windows',
    description: `v${formattedData.win.version}, for Windows 10+`,
    url: formattedData.win.url,
  };

  const linux = {
    icon: LinuxIcon,
    name: 'Linux',
    description: `v${formattedData.linux.version}, for Ubuntu 12.04+, Fedora 21+, Debian 8+`,
    url: formattedData.linux.url,
  };

  const chrome = {
    icon: ChromeIcon,
    name: 'Chrome',
    description: '',
    url: formattedData.chrome.url,
  };

  const firefox = {
    icon: FirefoxIcon,
    name: 'Firefox',
    description: '',
    url: formattedData.firefox.url,
  };

  const edge = {
    icon: EdgeIcon,
    name: 'Edge',
    description: '',
    url: formattedData.edge.url,
    faq: {
      title: '',
      questions: [
        {
          text: t('title__edge_version_has_not_support_hardware_yet'),
        },
      ],
    },
  };

  const web = {
    icon: LogoIcon,
    name: 'Web app',
    description: '',
    url: formattedData.web.url,
  };

  const bridgeMac = {
    icon: AppleIcon,
    name: 'macOS',
    description: `v${formattedData.bridge.version}`,
    url: formattedData.bridge.mac.url,
  };

  const bridgeWin = {
    icon: WindowsIcon,
    name: 'Windows',
    description: `v${formattedData.bridge.version}`,
    url: formattedData.bridge.win.url,
  };

  const bridgeLinux64Deb = {
    icon: LinuxIcon,
    name: 'Linux 64-bit (deb)',
    description: `v${formattedData.bridge.version}`,
    url: formattedData.bridge.linux64Deb.url,
  };

  const bridgeLinux64Rpm = {
    icon: LinuxIcon,
    name: 'Linux 64-bit (rpm)',
    description: `v${formattedData.bridge.version}`,
    url: formattedData.bridge.linux64Rpm.url,
  };

  const bridgeLinux32Deb = {
    icon: LinuxIcon,
    name: 'Linux 32-bit (deb)',
    description: `v${formattedData.bridge.version}`,
    url: formattedData.bridge.linux32Deb.url,
  };

  const bridgeLinux32Rpm = {
    icon: LinuxIcon,
    name: 'Linux 32-bit (rpm)',
    description: `v${formattedData.bridge.version}`,
    url: formattedData.bridge.linux32Rpm.url,
  };

  // types

  const mobile = {
    icon: MobileIcon,
    name: 'Mobile',
    description: 'iOS and Android',
    pageTitle: 'title__bring_your_crypto_assets_to_mobile_too',
  };

  const desktop = {
    icon: DesktopIcon,
    name: 'Desktop',
    description: 'Mac, Windows, Linux',
    pageTitle: 'title__download_onekey',
    faq: {
      title: '',
      questions: [
        {
          text: t('title__package_checksum'),
          url: 'https://help.onekey.so/hc/articles/4978747315343',
        },
      ],
    },
  };

  const browser = {
    icon: WebIcon,
    name: 'Browser',
    description: 'Chrome, Firefox, Edge',
    pageTitle: 'title__safely_travel_around_all_blockchain',
  };

  const bridge = {
    icon: BoxIcon,
    name: 'Bridge',
    description: 'Mac, Windows, Linux',
  };

  return {
    types: { mobile, desktop, browser, bridge },
    platforms: {
      web,
      ios,
      androidGooglePlay,
      androidAPK,
      macIntel,
      macSilicon,
      win,
      linux,
      chrome,
      firefox,
      edge,
      bridgeMac,
      bridgeWin,
      bridgeLinux64Deb,
      bridgeLinux64Rpm,
      bridgeLinux32Deb,
      bridgeLinux32Rpm,
    },
  };
}
