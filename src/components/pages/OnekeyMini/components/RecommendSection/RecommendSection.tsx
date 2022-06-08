import { FC, ReactNode } from 'react';

export interface RecommendSectionProps {
  children?: ReactNode;
}

export const RecommendSection: FC<RecommendSectionProps> = (props) => {
  const { children } = props;

  return <div>RecommendSection {children}</div>;
};
