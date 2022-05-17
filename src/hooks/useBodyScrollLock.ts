import { useEffect, useRef, useState } from 'react';

import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';

export function useBodyScrollLock() {
  const [isLocked, setIsLocked] = useState(false);
  const [storedScrollY, setStoredScrollY] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const currentElement = ref.current;

  useEffect(() => {
    if (currentElement) {
      if (isLocked) {
        setStoredScrollY(window.scrollY);
        disableBodyScroll(currentElement);
        document.body.style.setProperty('top', `${window.scrollY * -1}px`);

        return () => clearAllBodyScrollLocks();
      }
      document.body.style.setProperty('top', '');
      document.body.scrollTo(0, storedScrollY);
      return () => enableBodyScroll(currentElement);
    }
    return () => {};
  }, [currentElement, isLocked, storedScrollY]);

  return {
    ref,
    isLocked,
    setIsLocked,
  };
}
