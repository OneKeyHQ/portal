import { useOneKeyVersion } from '../../../../data';
import {
  AndroidIcon,
  AppleIcon,
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

  const ios = {
    icon: AppleIcon,
    name: 'App Store',
    description: `v${formattedData.ios.version}, for iOS 13.0+,<br/>Not available on the Chinese App Store`,
    url: formattedData.ios.url,
    faq: {
      title: 'iOS FAQ',
      questions: [
        {
          text: 'How to register an account?',
          url: 'https://help.onekey.so/hc/articles/4404262744591',
        },
        {
          text: 'How to activate discover page?',
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

  const mac = {
    icon: AppleIcon,
    name: 'macOS',
    description: `v${formattedData.mac.version}, for macOS 10.8+`,
    url: formattedData.mac.url,
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
          text: "Edge version hasn't support Hardware yet.",
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

  const mobile = {
    icon: MobileIcon,
    name: 'Mobile',
    description: 'iOS and Android',
    pageTitle: ['Bring your', 'crypto assets', 'to mobile, too.'],
  };

  const desktop = {
    icon: DesktopIcon,
    name: 'Desktop',
    description: 'Mac, Windows, Linux',
    pageTitle: ['Download', 'OneKey.'],
    faq: {
      title: '',
      questions: [
        {
          text: 'Package checksum.',
          url: 'https://help.onekey.so/hc/articles/4978747315343',
        },
      ],
    },
  };

  const browser = {
    icon: WebIcon,
    name: 'Browser',
    description: 'Chrome, Firefox, Edge',
    pageTitle: ['Download', 'OneKey.'],
  };

  return {
    types: { mobile, desktop, browser },
    platforms: {
      web,
      ios,
      androidGooglePlay,
      androidAPK,
      mac,
      win,
      linux,
      chrome,
      firefox,
      edge,
    },
  };
}
