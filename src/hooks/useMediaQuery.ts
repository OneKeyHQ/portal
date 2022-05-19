// 414 s
// 960 m
// 1200 l
// 1440 xl
// 1920 xxl

import { useMediaQuery as useReactResponsiveMediaQuery } from 'react-responsive';

import { mediaBreakpoints } from '../theme';

export function useMediaQuery() {
  const small = useReactResponsiveMediaQuery({
    minWidth: mediaBreakpoints.small,
  });
  const medium = useReactResponsiveMediaQuery({
    minWidth: mediaBreakpoints.medium,
  });
  const large = useReactResponsiveMediaQuery({
    minWidth: mediaBreakpoints.large,
  });
  const xlarge = useReactResponsiveMediaQuery({
    minWidth: mediaBreakpoints.xlarge,
  });
  const xxlarge = useReactResponsiveMediaQuery({
    minWidth: mediaBreakpoints.xxlarge,
  });

  return {
    small,
    medium,
    large,
    xlarge,
    xxlarge,
  };
}
