import { FC, ReactNode } from 'react';

import { motion, useTransform, useViewportScroll } from 'framer-motion';

export interface NavigationAnimationWrapProps {
  children?: ReactNode;
}

export const NavigationAnimationWrap: FC<NavigationAnimationWrapProps> = (
  props,
) => {
  const { children } = props;
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 100], [38, 16]);
  const backgroundColor = useTransform(scrollY, (value: number) => {
    const opacity = value > 90 ? 0.9 : value / 100;

    return `rgba(255, 255, 255, ${opacity})`;
  });
  const blur = useTransform(scrollY, (value: number) => {
    const blurValue = value >= 0 && value < 100 ? (value / 100) * 30 : 30;

    return `blur(${blurValue}px)`;
  });

  return (
    <motion.div
      style={{
        backgroundColor,
        paddingTop: y,
        paddingBottom: y,
        backdropFilter: blur,
      }}
    >
      {children}
    </motion.div>
  );
};
