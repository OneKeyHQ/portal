import { FC, ReactNode } from 'react';

import { HeroLayout } from '../../../../common/HeroLayout';

export interface HeroProps {
  children?: ReactNode;
}

export const Hero: FC<HeroProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <HeroLayout
        title="Shop OneKey"
        description="Level up your crypto security by choosing the world's most advanced hardware wallet."
      />
      {children}
    </div>
  );
};
