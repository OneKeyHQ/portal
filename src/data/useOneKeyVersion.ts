import { useEffect, useMemo } from 'react';

import useSWR from 'swr';

import { useOneKeyVersionAtom } from '../atoms';
import { OneKeyVersion } from '../types/OneKeyVersion';
import { fetcher } from '../utils';

export interface AndroidType {
  versionName: string;
  url: string;
  sha256SumAsc: string;
}

export interface Suite {
  version: string;
  macDmg: string;
  winZadig: string;
  linux: string;
  sha256SumAsc: string;
}

export interface Bridge {
  version: string;
  linux32Rpm: string;
  linux64Rpm: string;
  linux32Deb: string;
  linux64Deb: string;
  win: string;
  mac: string;
  changelogCn: string;
  changelogEn: string;
  sha256SumAsc: string;
}

export interface DownloadResponse {
  apk?: AndroidType;
  suite?: Suite;
  bridge?: Bridge;
  userAgent?: string;
}

export function useOneKeyVersion() {
  const [oneKeyVersion, setOneKeyVersion] = useOneKeyVersionAtom();
  const { data: remoteData, error } = useSWR<OneKeyVersion>(
    'https://data.onekey.so/version.json',
    fetcher,
  );

  const formattedData = {
    ios: {
      url: 'https://itunes.apple.com/app/chrome/id1609559473',
    },
    androidGooglePlay: {
      url: 'https://play.google.com/store/apps/details?id=com.bixin.wallet.mainnet',
    },
    androidAPK: {
      url: '',
    },
  };

  useEffect(() => {
    setOneKeyVersion(remoteData);
  }, [remoteData, setOneKeyVersion]);

  const oneKeyVersionData = useMemo(
    () => remoteData || oneKeyVersion,
    [oneKeyVersion, remoteData],
  );

  if (oneKeyVersionData) {
    formattedData.androidAPK.url = oneKeyVersionData?.apk.url;
    const { suite } = oneKeyVersionData;

    const res = {
      version: suite.version,
      macUrl: suite.macDmg,
      winUrl: suite.winZadig,
      linuxUrl: suite.linux,
      ascUrl: suite.sha256SumAsc,
    };

    console.log(res);
  }

  return {
    data: oneKeyVersionData,
    error,
    formattedData,
  };
}
