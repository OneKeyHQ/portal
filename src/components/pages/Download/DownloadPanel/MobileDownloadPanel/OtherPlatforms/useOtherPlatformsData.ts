import { useOneKeyVersion } from '../../../../../../data';
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

export type OtherPlatformsDataItem = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  description: string;
  url?: string;
  subItems?: OtherPlatformsDataItem[];
};

export function useOtherPlatformsData(): {
  items: OtherPlatformsDataItem[];
} {
  const { formattedData } = useOneKeyVersion();

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
            description: `v${formattedData.ios.version}, for iOS 13.0+`,
            url: formattedData.ios.url,
          },
          {
            icon: GooglePlayIcon,
            name: 'Google Play',
            description: `v${formattedData.androidGooglePlay.version}, for Android 8.0+`,
            url: formattedData.androidGooglePlay.url,
          },
          {
            icon: AndroidIcon,
            name: 'Android APK',
            description: `v${formattedData.androidAPK.version}, for Android 8.0+`,
            url: formattedData.androidAPK.url,
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
            description: `v${formattedData.mac.version}, for macOS 10.8+`,
            url: formattedData.mac.url,
          },
          {
            icon: WindowsIcon,
            name: 'Windows',
            description: `v${formattedData.win.version}, for Windows 10+`,
            url: formattedData.win.url,
          },
          {
            icon: LinuxIcon,
            name: 'Linux',
            description: `v${formattedData.linux.version}, for Ubuntu 12.04+, Fedora 21+, Debian 8+`,
            url: formattedData.linux.url,
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
            url: formattedData.chrome.url,
          },
          {
            icon: FirefoxIcon,
            name: 'Firefox',
            description: '',
            url: formattedData.firefox.url,
          },
          {
            icon: EdgeIcon,
            name: 'Edge',
            description: '',
            url: formattedData.edge.url,
          },
        ],
      },
    ],
  };
}
