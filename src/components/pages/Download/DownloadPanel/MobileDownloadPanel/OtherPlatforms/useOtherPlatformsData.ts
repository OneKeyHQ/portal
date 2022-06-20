import { useOneKeyDownloadData } from '../../useOneKeyDownloadData';

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
  const { platforms, types } = useOneKeyDownloadData();

  return {
    items: [
      {
        ...types.mobile,
        subItems: [
          platforms.ios,
          platforms.androidGooglePlay,
          platforms.androidAPK,
        ],
      },
      {
        ...types.desktop,
        subItems: [platforms.mac, platforms.win, platforms.linux],
      },
      {
        ...types.browser,
        subItems: [platforms.chrome, platforms.firefox, platforms.edge],
      },
      {
        ...types.bridge,
        subItems: [
          platforms.bridgeMac,
          platforms.bridgeWin,
          platforms.bridgeLinux64Deb,
          platforms.bridgeLinux64Rpm,
          platforms.bridgeLinux32Deb,
          platforms.bridgeLinux32Rpm,
        ],
      },
    ],
  };
}
