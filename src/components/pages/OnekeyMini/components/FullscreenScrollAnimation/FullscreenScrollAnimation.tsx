import { FC, ReactNode } from 'react';

export interface FullscreenScrollAnimationProps {
  children?: ReactNode;
}

export const FullscreenScrollAnimation: FC<FullscreenScrollAnimationProps> = (
  props,
) => {
  const { children } = props;

  return <div>FullscreenScrollAnimation {children}</div>;
};
