import { useState } from 'react';

import {
  useElementInViewportProgress,
  useInterval,
} from '../../../../../hooks';

import { SecurityDataItem, useSecurityData } from './useSecurityData';

export function useSecurityAutoSwitch() {
  const data = useSecurityData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState<SecurityDataItem>(data[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const { ref, elementInViewportProgress } = useElementInViewportProgress();

  useInterval(() => {
    const visibleValue = elementInViewportProgress.get();

    if (visibleValue < 0.8 || visibleValue > 1.5) {
      return;
    }

    if (isAnimating) {
      return;
    }

    const newIndex = (currentIndex + 1) % data.length;

    setCurrentIndex(newIndex);

    const nextItem = data[newIndex];

    if (nextItem) {
      setCurrentItem(nextItem);
    }
  }, 3000);

  return {
    currentIndex,
    currentItem,
    setIsAnimating,
    setCurrentIndex,
    setCurrentItem,
    ref,
  };
}
