import { FC, useEffect, useRef } from 'react';

import { navigate } from 'gatsby';
import queryString from 'query-string';

import { useOneKeyVersion } from '../../../data';
import { useRuntimeDetect } from '../../../hooks';
import { isBrowser } from '../../../utils';
import AppPage from '../Download';

export const MobileApp: FC = () => {
  const isDownloading = useRef<boolean>();
  const runtimeDetect = useRuntimeDetect();

  const { formattedData: formattedOneKeyVersionData } = useOneKeyVersion();

  useEffect(() => {
    if (isBrowser()) {
      // onekey.so/mobile-app?type=apk
      const parsed = queryString.parse(window.location.search);

      if (parsed.type === 'apk') {
        if (formattedOneKeyVersionData && !isDownloading.current) {
          isDownloading.current = true;
          navigate(formattedOneKeyVersionData.androidAPK.url);
        }
      } else if (runtimeDetect.isIOS) {
        navigate(formattedOneKeyVersionData.ios.url);
      } else if (runtimeDetect.isAndroid) {
        navigate(formattedOneKeyVersionData.androidGooglePlay.url);
      } else {
        navigate('https://onekey.so/download');
      }
    }

    return () => {};
  }, [
    formattedOneKeyVersionData,
    runtimeDetect.isAndroid,
    runtimeDetect.isIOS,
  ]);

  // todo: import download content
  return <AppPage />;
};
