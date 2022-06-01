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

  useEffect(() => {
    setOneKeyVersion(remoteData);
  }, [remoteData, setOneKeyVersion]);

  const data = useMemo(
    () => remoteData || oneKeyVersion,
    [oneKeyVersion, remoteData],
  );

  return {
    data,
    error,
  };
}
