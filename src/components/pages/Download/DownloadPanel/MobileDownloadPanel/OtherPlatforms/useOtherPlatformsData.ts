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
  const { formattedData, data } = useOneKeyVersion();

  console.log('formattedData', formattedData, data);

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
            link: 'todo',
          },
          {
            icon: GooglePlayIcon,
            name: 'Google Play',
            description: 'v2.12.3, for Android 8.0+',
            link: 'todo',
          },
          {
            icon: AndroidIcon,
            name: 'Android APK',
            description: 'v2.12.3, for Android 8.0+',
            link: 'todo',
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
            link: 'todo',
          },
          {
            icon: WindowsIcon,
            name: 'Windows',
            description: 'v23.0.1, for Windows 10+',
            link: 'todo',
          },
          {
            icon: LinuxIcon,
            name: 'Linux',
            description: 'v23.0.1, for Ubuntu 12.04+, Fedora 21+, Debian 8+',
            link: 'todo',
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
            link: 'todo',
          },
          {
            icon: FirefoxIcon,
            name: 'Firefox',
            description: '',
            link: 'todo',
          },
          {
            icon: EdgeIcon,
            name: 'Edge',
            description: '',
            link: 'todo',
          },
        ],
      },
    ],
  };
}
