import {
  AndroidIcon,
  AppleIcon,
  ChromeIcon,
  DesktopIcon,
  EdgeIcon,
  FirefoxIcon,
  GooglePlayIcon,
  LinuxIcon,
  MobileIcon,
  WebIcon,
  WindowsIcon,
} from '../../../../../base';

export function useOtherPlatformsData() {
  return {
    items: [
      {
        icon: MobileIcon,
        name: 'Mobile',
        description: 'iOS and Android',
        subItems: [
          {
            icon: AppleIcon,
            name: 'App Store',
            description: 'v2.12.3, for iOS 13.0+',
          },
          {
            icon: GooglePlayIcon,
            name: 'Google Play',
            description: 'v2.12.3, for Android 8.0+',
          },
          {
            icon: AndroidIcon,
            name: 'Android APK',
            description: 'v2.12.3, for Android 8.0+',
          },
        ],
      },
      {
        icon: DesktopIcon,
        name: 'Desktop',
        description: 'Mac, Windows, Linux',
        subItems: [
          {
            icon: AppleIcon,
            name: 'macOS',
            description: 'v23.0.1, for macOS 10.8+',
          },
          {
            icon: WindowsIcon,
            name: 'Windows',
            description: 'v23.0.1, for Windows 10+',
          },
          {
            icon: LinuxIcon,
            name: 'Linux',
            description: 'v23.0.1, for Ubuntu 12.04+, Fedora 21+, Debian 8+',
          },
        ],
      },
      {
        icon: WebIcon,
        name: 'Browser',
        description: 'Chrome, Firefox, Edge',
        subItems: [
          {
            icon: ChromeIcon,
            name: 'Chrome',
            description: '',
          },
          {
            icon: FirefoxIcon,
            name: 'Firefox',
            description: '',
          },
          {
            icon: EdgeIcon,
            name: 'Edge',
            description: '',
          },
        ],
      },
    ],
  };
}
