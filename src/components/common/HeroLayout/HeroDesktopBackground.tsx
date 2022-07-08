import { FC, ReactNode } from 'react';

import { isBrowser } from '../../../utils/isBrowser';
import { OnlyDisplay } from '../../base/OnlyDisplay';

export interface HeroDesktopBackgroundProps {
  children?: ReactNode;
}

export const HeroDesktopBackground: FC<HeroDesktopBackgroundProps> = (
  props,
) => {
  const { children } = props;

  if (!isBrowser()) {
    return null;
  }

  return (
    <OnlyDisplay l xl xxl>
      {children}
    </OnlyDisplay>
  );
};
