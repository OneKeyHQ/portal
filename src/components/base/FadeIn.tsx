import { FC } from 'react';

import { MotionStyle, motion } from 'framer-motion';

export interface FadeInProps {
  children: React.ReactNode;
  style?: MotionStyle;
}

export const FadeIn: FC<FadeInProps> = (props) => {
  const { children, style = {} } = props;

  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
