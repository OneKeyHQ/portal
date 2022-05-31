import { MediaBreakpointsKey } from '../theme';

import { useMediaQuery } from './useMediaQuery';

export type UseMediaQueryMapValuesValue<T> = Record<MediaBreakpointsKey, T> | T;

export function useMediaQueryMapValues<T = any>(
  value: UseMediaQueryMapValuesValue<T>,
): T {
  const mediaQuery = useMediaQuery();

  if (typeof value !== 'object') {
    return value;
  }

  const objectMediaQueryValue = value as Record<MediaBreakpointsKey, T>;

  if (mediaQuery.xxlarge) {
    return objectMediaQueryValue.xxlarge;
  }
  if (mediaQuery.xlarge) {
    return objectMediaQueryValue.xlarge;
  }
  if (mediaQuery.large) {
    return objectMediaQueryValue.large;
  }
  if (mediaQuery.medium) {
    return objectMediaQueryValue.medium;
  }
  if (mediaQuery.small) {
    return objectMediaQueryValue.small;
  }

  return objectMediaQueryValue.small;
}
