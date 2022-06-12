import React from 'react';

import { useTheme } from '@emotion/react';

import { Box, Span } from '../../../base';
import {
  FeatureInformationCard,
  FeatureInformationCardProps,
} from '../../../common';

export type AffiliateProgramCardProps = FeatureInformationCardProps;

export const AffiliateProgramCard: React.FC<AffiliateProgramCardProps> = (
  props,
) => {
  const { children, ...otherProps } = props;
  const theme = useTheme();

  return (
    <FeatureInformationCard {...otherProps}>
      <Box
        xs={{
          textAlign: 'center',
          paddingBottom: 32,
          paddingLeft: 32,
          paddingRight: 32,
        }}
        m={{
          paddingBottom: 80,
          paddingLeft: 80,
          paddingRight: 80,
        }}
        xl={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Span xs={{ ...theme.text.normal200 }}>
          Contact our customer success team to{' '}
          <Span
            xs={{
              textDecoration: 'underline',
              fontWeight: 'bold',
            }}
          >
            learn more
          </Span>{' '}
          details about our affiliate program.
        </Span>
      </Box>

      {children}
    </FeatureInformationCard>
  );
};
