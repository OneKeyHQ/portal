import { useViewportScroll } from 'framer-motion';

export function useNormalNavigationHeight() {
  const { scrollY } = useViewportScroll();

  return scrollY.get() === 0 ? 132 : 88;
}
