import { FC, ReactNode, useEffect } from 'react';

import { detect } from 'detect-browser';
import { navigate } from 'gatsby';

import { isBrowser } from '../../../utils';

export interface MobileAppProps {
  children?: ReactNode;
}

export const MobileApp: FC<MobileAppProps> = (props) => {
  const { children } = props;

  useEffect(() => {
    if (isBrowser()) {
      const browser = detect();

      if (browser?.os === 'iOS') {
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
  }, []);

  return (
    <div>
      {children}
      {detect()?.os}
      <a href="https://itunes.apple.com/app/chrome/id1609559473">
        https://itunes.apple.com/app/chrome/id1609559473
      </a>
    </div>
  );
};
