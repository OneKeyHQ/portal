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
    'https://data.onekey.so/config.json',
    fetcher,
  );

  const formattedData = {
    web: {
      url: 'https://app.onekey.so/',
    },
    ios: {
      url: '',
      version: '',
    },
    androidGooglePlay: {
      url: '',
      version: '',
    },
    androidAPK: { url: '', version: '' },
    macIntel: { url: '', version: '' },
    macSilicon: { url: '', version: '' },
    win: { url: '', version: '' },
    linux: { url: '', version: '' },
    asc: { url: '', version: '' },
    chrome: {
      url: '',
    },
    firefox: {
      url: '',
    },
    edge: {
      url: '',
    },
    bridge: {
      mac: {
        id: 'mac',
        name: 'Mac',
        url: '',
      },
      win: {
        id: 'win',
        name: 'Windows',
        url: '',
      },
      linux64Deb: {
        id: 'linux64Deb',
        name: 'Linux 64-bit (deb)',
        url: '',
      },
      linux64Rpm: {
        id: 'linux64Rpm',
        name: 'Linux 64-bit (rpm)',
        url: '',
      },
      linux32Deb: {
        id: 'linux32Deb',
        name: 'Linux 32-bit (deb)',
        url: '',
      },
      linux32Rpm: {
        id: 'linux32Rpm',
        name: 'Linux 32-bit (rpm)',
        url: '',
      },
      version: '',
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
    const { android, desktop, ext, ios } = oneKeyVersionData;

    // android
    formattedData.androidAPK.url = android.url;
    formattedData.androidAPK.version = android.version.join('.');

    formattedData.androidGooglePlay.url = android.googlePlay;
    formattedData.androidGooglePlay.version = android.version.join('.');

    // ios
    formattedData.ios.version = ios.version.join('.');
    formattedData.ios.url = ios.url;

    // mac
    formattedData.macIntel.url = desktop.macX64;
    formattedData.macIntel.version = desktop.version.join('.');

    formattedData.macSilicon.url = desktop.macArm;
    formattedData.macSilicon.version = desktop.version.join('.');

    // win
    formattedData.win.url = desktop.win;
    formattedData.win.version = desktop.version.join('.');

    // linux
    formattedData.linux.url = desktop.linux;
    formattedData.linux.version = desktop.version.join('.');

    // asc
    formattedData.asc.url = desktop.sha256SumAsc ?? '';
    formattedData.asc.version = desktop.version.join('.');

    // ext
    formattedData.chrome.url = ext.chrome ?? '';
    formattedData.firefox.url = ext.firefox ?? '';
    formattedData.edge.url = ext.edge ?? '';

    // bridge
    formattedData.bridge.version = oneKeyVersionData.bridge.version.join('.');
    formattedData.bridge.linux32Rpm.url = oneKeyVersionData.bridge.linux32Rpm;
    formattedData.bridge.linux64Rpm.url = oneKeyVersionData.bridge.linux64Rpm;
    formattedData.bridge.linux32Deb.url = oneKeyVersionData.bridge.linux32Deb;
    formattedData.bridge.linux64Deb.url = oneKeyVersionData.bridge.linux64Deb;
    formattedData.bridge.win.url = oneKeyVersionData.bridge.win;
    formattedData.bridge.mac.url = oneKeyVersionData.bridge.mac;
  }

  return {
    data: oneKeyVersionData,
    error,
    formattedData,
  };
}
