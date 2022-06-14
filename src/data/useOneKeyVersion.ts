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
      version: '',
    },
    androidGooglePlay: {
      url: 'https://play.google.com/store/apps/details?id=com.bixin.wallet.mainnet',
      version: '',
    },
    androidAPK: { url: '', version: '' },
    mac: { url: '', version: '' },
    win: { url: '', version: '' },
    linux: { url: '', version: '' },
    asc: { url: '', version: '' },
    chrome: {
      url: 'https://chrome.google.com/webstore/detail/onekey/jnmbobjmhlngoefaiojfljckilhhlhcj',
    },
    firefox: {
      url: 'https://addons.mozilla.org/firefox/addon/onekey-wallet/',
    },
    edge: {
      url: 'https://microsoftedge.microsoft.com/addons/detail/onekey/leimfdljadbnnecmkpfmgcdmiglejnnp',
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
    const { apk: android, suite } = oneKeyVersionData;

    // android
    formattedData.androidAPK.url = android.url;
    formattedData.androidAPK.version = android.versionName;
    formattedData.androidGooglePlay.version = android.versionName;

    // ios
    formattedData.ios.version = android.versionName;

    // mac
    formattedData.mac.url = suite.macDmg;
    formattedData.mac.version = suite.version;

    // win
    formattedData.win.url = suite.winZadig;
    formattedData.win.version = suite.version;

    // linux
    formattedData.linux.url = suite.linux;
    formattedData.linux.version = suite.version;

    // asc
    formattedData.asc.url = suite.sha256SumAsc;
    formattedData.asc.version = suite.version;
  }

  return {
    data: oneKeyVersionData,
    error,
    formattedData,
  };
}
