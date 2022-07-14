import { FC, ReactNode } from 'react';

import { Variants, motion } from 'framer-motion';

import { RoundCursor } from '../../base';

export interface FloatCursorProps {
  children?: ReactNode;
  variants: Variants;
  cursorVariant: string;
  cursorNode?: ReactNode;
}

export const FloatCursor: FC<FloatCursorProps> = (props) => {
  const { children, variants, cursorVariant, cursorNode } = props;

  return (
    <motion.div
      style={{
        width: 30,
        height: 30,
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
      transition={{ type: 'spring', delay: 0 }}
    >
      {cursorNode || <RoundCursor />}

      {children}
    </motion.div>
  );
};
