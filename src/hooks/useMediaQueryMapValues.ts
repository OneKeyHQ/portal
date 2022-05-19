import { MediaBreakpointsKey } from '../theme';

import { useMediaQuery } from './useMediaQuery';

export function useMediaQueryMapValues<T = any>(
  value: Record<MediaBreakpointsKey, T>,
) {
  const mediaQuery = useMediaQuery();

  if (mediaQuery.xxLarge) {
    return value.xxlarge;
  }
  if (mediaQuery.xLarge) {
    return value.xlarge;
  }
  if (mediaQuery.large) {
    return value.large;
  }
  if (mediaQuery.medium) {
    return value.medium;
  }
  if (mediaQuery.small) {
    return value.small;
  }

  return value.small;
}
