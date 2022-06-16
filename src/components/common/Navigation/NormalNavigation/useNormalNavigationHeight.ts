import { useTransform, useViewportScroll } from 'framer-motion';

export function useNormalNavigationHeight() {
  const { scrollY } = useViewportScroll();

  return useTransform(scrollY, [0, 132], [132, 88]).get();
}
