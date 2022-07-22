import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Span } from '../../base';
import { SectionTitle } from '../SectionTitle';

export interface NormalCenterPageHeaderProps {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
}

export const NormalCenterPageHeader: FC<NormalCenterPageHeaderProps> = (
  props,
) => {
  const { children, title, subtitle, description } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{ textAlign: 'center', paddingTop: '18vh', paddingBottom: '12vh' }}
    >
      <SectionTitle>
        {title}
        <br />

        <Span xs={{ color: theme.colors.brandAlt400 }}>{subtitle}</Span>
      </SectionTitle>

      <br />
      <br />

      <Box xs={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <Span
          css={{ color: theme.colors.test400 }}
          xs={theme.text.normal200}
          m={theme.text.normal300}
          l={theme.text.normal400}
        >
          {description}
        </Span>
      </Box>

      {children}
    </Box>
  );
};
