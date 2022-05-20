import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number, able = true) {
  const intervalRef = useRef<number | null>(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!able) {
      return;
    }

    const tick = () => savedCallback.current();

    intervalRef.current = window.setInterval(tick, delay);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [delay, able]);

  return intervalRef;
}
