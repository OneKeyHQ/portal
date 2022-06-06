import { FC, useEffect, useRef } from 'react';

import { detect } from 'detect-browser';
import { navigate } from 'gatsby';
import queryString from 'query-string';

import { useOneKeyVersion } from '../../../data';
import { isBrowser } from '../../../utils';
import AppPage from '../App';

export const MobileApp: FC = () => {
  const isDownloading = useRef<boolean>();

  const { data: oneKeyVersionData } = useOneKeyVersion();

  useEffect(() => {
    if (isBrowser()) {
      const browser = detect();

      // onekey.so/mobile-app?type=apk
      const parsed = queryString.parse(window.location.search);

      if (parsed.type === 'apk') {
        if (oneKeyVersionData && !isDownloading.current) {
          isDownloading.current = true;
          navigate(oneKeyVersionData?.APK.url);
        }
      } else if (browser?.os === 'iOS') {
        navigate('https://itunes.apple.com/app/chrome/id1609559473');
      } else if (browser?.os === 'Android OS') {
        navigate(
          'https://play.google.com/store/apps/details?id=com.bixin.wallet.mainnet',
        );
      } else {
        navigate('https://onekey.so/download');
      }
    }

    return () => {};
  }, [oneKeyVersionData]);

  // todo: import download content
  return <AppPage />;
};
