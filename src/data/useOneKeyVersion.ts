import { useEffect, useMemo } from 'react';

import useSWR from 'swr';

import { useOneKeyVersionAtom } from '../atoms';
import { OneKeyVersion } from '../types/OneKeyVersion';
import { fetcher } from '../utils';

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
    formattedData.androidAPK.url = oneKeyVersionData?.APK.url;
  }

  return {
    data: oneKeyVersionData,
    error,
    formattedData,
  };
}
