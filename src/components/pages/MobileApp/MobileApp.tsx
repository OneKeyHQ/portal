import { FC, ReactNode } from 'react';

import { detect } from 'detect-browser';
import { navigate } from 'gatsby';

import { isBrowser } from '../../../utils';

export interface MobileAppProps {
  children?: ReactNode;
}

export const MobileApp: FC<MobileAppProps> = (props) => {
  const { children } = props;

  if (isBrowser()) {
    const browser = detect();

    if (browser?.os === 'iOS') {
      navigate('https://apps.apple.com/app/id1609559473');
    } else if (browser?.os === 'Android OS') {
      navigate(
        'https://play.google.com/store/apps/details?id=com.bixin.wallet.mainnet',
      );
    } else {
      navigate('https://onekey.so/download');
    }
  }

  return <div>{children}</div>;
};
