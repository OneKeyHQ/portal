import { FC, ReactNode } from 'react';

import { detect } from 'detect-browser';

import { isBrowser } from '../../../utils';

export interface MobileAppProps {
  children?: ReactNode;
}

export const MobileApp: FC<MobileAppProps> = (props) => {
  const { children } = props;

  if (isBrowser()) {
    const browser = detect();

    if (browser?.os === 'iOS') {
      window.location.href = 'https://onekey.so/download?client=ios';
    } else if (browser?.os === 'Android OS') {
      window.location.href = 'https://onekey.so/download?client=android';
    } else {
      window.location.href = 'https://onekey.so/download';
    }
  }

  return <div>{children}</div>;
};
