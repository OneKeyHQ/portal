import { useScroll, useTransform } from 'framer-motion';

export function useNormalNavigationHeight() {
  const { scrollY } = useScroll();

  return useTransform(scrollY, [0, 132], [132, 88]).get();
}
