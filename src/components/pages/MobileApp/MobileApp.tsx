import { FC, useEffect, useRef } from 'react';

import { detect } from 'detect-browser';
import { navigate } from 'gatsby';
import queryString from 'query-string';

import { useOneKeyVersion } from '../../../data';
import { isBrowser } from '../../../utils';
import AppPage from '../Download';

export const MobileApp: FC = () => {
  const isDownloading = useRef<boolean>();

  const { formattedData: formattedOneKeyVersionData } = useOneKeyVersion();

  useEffect(() => {
    if (isBrowser()) {
      const browser = detect();

      // onekey.so/mobile-app?type=apk
      const parsed = queryString.parse(window.location.search);

      if (parsed.type === 'apk') {
        if (formattedOneKeyVersionData && !isDownloading.current) {
          isDownloading.current = true;
          navigate(formattedOneKeyVersionData.androidAPK.url);
        }
      } else if (browser?.os === 'iOS') {
        navigate(formattedOneKeyVersionData.ios.url);
      } else if (browser?.os === 'Android OS') {
        navigate(formattedOneKeyVersionData.androidGooglePlay.url);
      } else {
        navigate('https://onekey.so/download');
      }
    }

    return () => {};
  }, [formattedOneKeyVersionData]);

  // todo: import download content
  return <AppPage />;
};
