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
  link?: string;
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
            link: formattedData.ios.url,
          },
          {
            icon: GooglePlayIcon,
            name: 'Google Play',
            description: `v${formattedData.androidGooglePlay.version}, for Android 8.0+`,
            link: formattedData.androidGooglePlay.url,
          },
          {
            icon: AndroidIcon,
            name: 'Android APK',
            description: `v${formattedData.androidAPK.version}, for Android 8.0+`,
            link: formattedData.androidAPK.url,
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
            link: formattedData.mac.url,
          },
          {
            icon: WindowsIcon,
            name: 'Windows',
            description: `v${formattedData.win.version}, for Windows 10+`,
            link: formattedData.win.url,
          },
          {
            icon: LinuxIcon,
            name: 'Linux',
            description: `v${formattedData.linux.version}, for Ubuntu 12.04+, Fedora 21+, Debian 8+`,
            link: formattedData.linux.url,
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
            link: formattedData.chrome.url,
          },
          {
            icon: FirefoxIcon,
            name: 'Firefox',
            description: '',
            link: formattedData.firefox.url,
          },
          {
            icon: EdgeIcon,
            name: 'Edge',
            description: '',
            link: formattedData.edge.url,
          },
        ],
      },
    ],
  };
}
