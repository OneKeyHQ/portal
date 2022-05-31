import { FC, ReactNode, useEffect } from 'react';

import { detect } from 'detect-browser';

export interface MobileAppProps {
  children?: ReactNode;
}

export const MobileApp: FC<MobileAppProps> = (props) => {
  const { children } = props;

  useEffect(() => {
    const browser = detect();

    if (browser?.os === 'iOS') {
      window.location.href = 'https://onekey.so/download?client=ios';
    } else if (browser?.os === 'Android OS') {
      window.location.href = 'https://onekey.so/download?client=android';
    } else {
      window.location.href = 'https://onekey.so/download';
    }
  }, []);

  return <div>{children}</div>;
};
