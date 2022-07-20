import { FC, ReactNode } from 'react';

import { isBrowser } from '../../../utils';
import { OnlyDisplay } from '../../base/OnlyDisplay';

export interface HeroDesktopBackgroundProps {
  children?: ReactNode;
  checkBrowser?: boolean;
}

export const HeroDesktopBackground: FC<HeroDesktopBackgroundProps> = (
  props,
) => {
  const { children, checkBrowser = true } = props;

  if (checkBrowser && !isBrowser()) {
    return null;
  }

  return (
    <OnlyDisplay l xl xxl>
      {children}
    </OnlyDisplay>
  );
};
