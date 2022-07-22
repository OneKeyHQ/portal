import React from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Box, EmailLink, I18n, Span } from '../../../base';
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
  const { t } = useTranslation();

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
          paddingBottom: 60,
          paddingLeft: 60,
          paddingRight: 60,
        }}
        xl={{
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <Span xs={{ ...theme.text.normal200, color: theme.colors.test400 }}>
          <EmailLink email="hi@onekey.so">
            <Span
              xs={{
                color: theme.colors.test500,
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
            >
              <I18n name="action__contact" />
            </Span>{' '}
          </EmailLink>

          {t('action__contact_desc').replace(t('action__contact'), '')}
        </Span>
      </Box>

      {children}
    </FeatureInformationCard>
  );
};
