import { FC, ReactNode } from 'react';

import { Variants, motion } from 'framer-motion';

import { RoundCursor } from '../../base';

export interface FloatCursorProps {
  children?: ReactNode;
  variants: Variants;
  cursorVariant: string;
  cursorImage?: string;
}

export const FloatCursor: FC<FloatCursorProps> = (props) => {
  const { children, variants, cursorVariant, cursorImage } = props;

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
      transition={{
        type: 'spring',
        mass: 0.001,
        stiffness: 600,
      }}
    >
      <RoundCursor image={cursorImage} />

      {children}
    </motion.div>
  );
};
