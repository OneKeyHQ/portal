import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Span } from '../../../../base';

import { Content } from './Content';
import { SideImage } from './SideImage';

export interface TechnicalSpecificationsSectionProps {
  children?: ReactNode;
}

export const TechnicalSpecificationsSection: FC<
  TechnicalSpecificationsSectionProps
> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        padding: 70,
        backgroundColor: theme.colors.test400,
        borderRadius: 40,
      }}
    >
      <Box xs={{ textAlign: 'center' }}>
        <Span xs={{ ...theme.text.medium800, color: theme.colors.white }}>
          Technical Specifications
        </Span>
      </Box>

      <SideImage />

      <Content />
      {children}
    </Box>
  );
};
