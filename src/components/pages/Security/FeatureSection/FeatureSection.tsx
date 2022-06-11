import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Section } from '../../../base';

export interface FeatureSectionProps {
  children?: ReactNode;
}

export const FeatureSection: FC<FeatureSectionProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Section
      xs={{
        backgroundColor: theme.colors.test500,
        color: theme.colors.white,
      }}
    >
      FeatureSection {children}
    </Section>
  );
};
