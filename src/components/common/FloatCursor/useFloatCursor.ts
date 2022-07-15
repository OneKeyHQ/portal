import { useEffect, useRef, useState } from 'react';

import useMouse from '@react-hook/mouse-position';
import { Transition, Variants } from 'framer-motion';

export type FloatCursorStatus = 'hidden' | 'visible' | 'active';

export interface UseFloatCursor {
  floatCursorProps: {
    variants: Variants;
    cursorVariant: string;
    spring: Transition;
  };
}

export function useFloatCursor() {
  const lastPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] =
    useState<FloatCursorStatus>('hidden');
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    fps: 60,
  });

  useEffect(() => {
    if (mouse.clientX && mouse.clientY) {
      lastPosition.current = { x: mouse.clientX - 36, y: mouse.clientY - 36 };
    }
  }, [mouse]);

  const mouseXPosition = lastPosition.current.x;
  const mouseYPosition = lastPosition.current.y;

  const variants = {
    hidden: {
      x: mouseXPosition,
      y: mouseYPosition,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: mouseXPosition,
      y: mouseYPosition,
    },
    active: {
      opacity: 1,
      scale: mouse.isDown ? 0.6 : 1,
      x: mouseXPosition,
      y: mouseYPosition,
    },
  };

  return {
    floatCursorProps: {
      variants,
      cursorVariant,
    },
    setStatus: (status: FloatCursorStatus) => {
      setCursorVariant(status);
    },
    ref,
  };
}
