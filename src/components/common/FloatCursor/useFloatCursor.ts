import { RefObject, useEffect, useRef, useState } from 'react';

import { Transition, Variants } from 'framer-motion';

export type FloatCursorStatus = 'hidden' | 'visible' | 'active';

export interface UseFloatCursor {
  floatCursorProps: {
    variants: Variants;
    cursorVariant: string;
    transition: Transition;
  };
}

function useMouse(ref: RefObject<HTMLDivElement>) {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const element = ref.current;

    element?.addEventListener('mousemove', onMouseMove);

    return () => {
      element?.removeEventListener('mousemove', onMouseMove);
    };
  }, [ref]);

  return mouse;
}

export function useFloatCursor() {
  const lastPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] =
    useState<FloatCursorStatus>('hidden');
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useMouse(ref);

  useEffect(() => {
    if (mouse.x && mouse.y) {
      lastPosition.current = { x: mouse.x - 36, y: mouse.y - 36 };
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
      scale: 1,
      x: mouseXPosition,
      y: mouseYPosition,
    },
  };

  return {
    floatCursorProps: {
      variants,
      cursorVariant,
      transition: {
        type: 'spring',
        mass: 0.01,
        stiffness: 500,
      },
    },
    setStatus: (status: FloatCursorStatus) => {
      setCursorVariant(status);
    },
    ref,
  };
}
