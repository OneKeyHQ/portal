import { useEffect } from 'react';

import { useMotionValue } from 'framer-motion';

import { useBoundingClientRect } from './useBoundingClientRect';

export function useElementInViewportProgress(defaultProgress = 0) {
  const elementInViewportProgress = useMotionValue(defaultProgress);
  const { ref, rect } = useBoundingClientRect();

  useEffect(() => {
    const viewportHeight = window.innerHeight;

    if (!rect) {
      return;
    }

    const { top: rectTop } = rect;

    if (rectTop > viewportHeight) {
      // not in viewport
      return;
    }

    const progress = 1 - rectTop / viewportHeight;

    elementInViewportProgress.set(progress);
  }, [rect, elementInViewportProgress]);

  return {
    elementInViewportProgress,
    ref,
  };
}
