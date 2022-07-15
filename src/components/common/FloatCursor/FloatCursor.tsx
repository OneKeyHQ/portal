import { FC, ReactNode } from 'react';

import { Transition, Variants, motion } from 'framer-motion';

import { RoundCursor } from '../../base';

export interface FloatCursorProps {
  children?: ReactNode;
  variants: Variants;
  cursorVariant: string;
  cursorImage?: string;
  transition: Transition;
}

export const FloatCursor: FC<FloatCursorProps> = (props) => {
  const { children, variants, cursorVariant, cursorImage, transition } = props;

  return (
    <motion.div
      style={{
        width: 72,
        height: 72,
        originX: 0.5,
        transformOrigin: 'center',
        userSelect: 'none',
        pointerEvents: 'none',
        position: 'fixed',
        cursor: 'none',
        top: 0,
        left: 0,
      }}
      variants={variants}
      animate={cursorVariant}
      transition={transition}
    >
      <RoundCursor image={cursorImage} />

      {children}
    </motion.div>
  );
};
