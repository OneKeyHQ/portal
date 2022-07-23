import { FC, ReactNode } from 'react';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { useRuntimeDetect } from '../../../hooks';

export interface NavigationAnimationWrapProps {
  children?: ReactNode;
  paddingRange: [number, number];
  isSpring?: boolean;
}

export const NavigationAnimationWrap: FC<NavigationAnimationWrapProps> = (
  props,
) => {
  const { isFirefox, isMobilePhone } = useRuntimeDetect();
  const isWeakMode = isFirefox || isMobilePhone;

  const { paddingRange, isSpring = false, children } = props;
  const { scrollY } = useScroll();
  const paddingValue = useTransform(scrollY, [0, 100], paddingRange);
  const backgroundColor = useTransform(scrollY, (value: number) => {
    let opacity = 0;

    if (isWeakMode) {
      opacity = value >= 100 ? 1 : value / 100;
    } else {
      opacity = value > 90 ? 0.9 : value / 100;
    }

    return `rgba(255, 255, 255, ${opacity})`;
  });
  const blur = useTransform(scrollY, (value: number) => {
    let blurValue = value >= 0 && value < 100 ? (value / 100) * 10 : 10;

    if (isWeakMode) {
      blurValue = 0;
    }

    return `blur(${blurValue}px)`;
  });

  const paddingSpringValue = useSpring(paddingValue);

  return (
    <motion.div
      style={{
        backgroundColor,
        paddingTop: isSpring ? paddingSpringValue : paddingValue,
        paddingBottom: isSpring ? paddingSpringValue : paddingValue,
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
      }}
    >
      {children}
    </motion.div>
  );
};
