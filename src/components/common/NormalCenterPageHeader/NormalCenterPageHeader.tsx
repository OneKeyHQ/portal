import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, H1, Span } from '../../base';

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
      <H1
        css={{ color: theme.colors.test500 }}
        xs={theme.text.medium800}
        l={theme.text.medium900}
        xl={theme.text.medium1000}
      >
        {title}
        <br />

        <Span xs={{ color: theme.colors.brandAlt400 }}>{subtitle}</Span>
      </H1>

      <br />

      <Box xs={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
        <Span
          css={{ color: theme.colors.test400 }}
          xs={theme.text.normal200}
          m={theme.text.normal300}
        >
          {description}
        </Span>
      </Box>

      {children}
    </Box>
  );
};
