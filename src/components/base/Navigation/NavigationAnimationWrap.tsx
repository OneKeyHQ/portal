import { FC, ReactNode } from 'react';

import { detect } from 'detect-browser';
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';

export interface NavigationAnimationWrapProps {
  children?: ReactNode;
  paddingRange: [number, number];
  isSpring?: boolean;
}

export const NavigationAnimationWrap: FC<NavigationAnimationWrapProps> = (
  props,
) => {
  const browser = detect();

  const { paddingRange, isSpring = false, children } = props;
  const { scrollY } = useViewportScroll();
  const paddingValue = useTransform(scrollY, [0, 100], paddingRange);
  const backgroundColor = useTransform(scrollY, (value: number) => {
    let opacity = 0;

    if (browser?.name === 'firefox') {
      opacity = value >= 100 ? 1 : value / 100;
    } else {
      opacity = value > 90 ? 0.9 : value / 100;
    }

    return `rgba(255, 255, 255, ${opacity})`;
  });
  const blur = useTransform(scrollY, (value: number) => {
    const blurValue = value >= 0 && value < 100 ? (value / 100) * 10 : 10;

    return `blur(${blurValue}px)`;
  });

  const paddingSpringValue = useSpring(paddingValue);
  const blurSpringValue = useSpring(blur);

  return (
    <motion.div
      style={{
        backgroundColor,
        paddingTop: isSpring ? paddingSpringValue : paddingValue,
        paddingBottom: isSpring ? paddingSpringValue : paddingValue,
        backdropFilter: isSpring ? blurSpringValue : blur,
        WebkitBackdropFilter: isSpring ? blurSpringValue : blur,
      }}
    >
      {children}
    </motion.div>
  );
};
