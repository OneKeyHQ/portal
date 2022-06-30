import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { useMediaQuery } from '../../../../../../hooks';
import { dynamicTextStyle } from '../../../../../../utils';
import {
  Box,
  ButtonProps,
  Container,
  Flex,
  GoToShopButton,
  H1,
  Link,
  Span,
} from '../../../../../base';
import { FadeIn } from '../../../../../base/FadeIn';
import { DownloadButton } from '../../../../../common/DownloadButton';
import { HeroBanner } from '../../../../../common/HeroBanner';

import { Stars } from './Stars';

export interface ContentProps {
  children?: ReactNode;
}

export const Content: FC<ContentProps> = () => {
  const theme = useTheme();
  const mediaQuery = useMediaQuery();
  const { t } = useTranslation();

  const buttonProp: ButtonProps = mediaQuery.small
    ? { size: 'medium' }
    : { xs: { width: '100%' }, size: 'large' };

  return (
    <Container
      xs={{
        paddingTop: 78,
        paddingBottom: 78,
        zIndex: 2,
        height: '100%',
        flexDirection: 'column',
        position: 'relative',
        display: 'flex',
      }}
    >
      <FadeIn
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          marginTop: 'auto',
        }}
      >
        {/* banner */}
        <Box
          xs={{ marginBottom: 'auto', marginTop: 8 }}
          m={{ marginBottom: 0, marginTop: 'auto' }}
        >
          <HeroBanner to="https://onekeyhq.atlassian.net/wiki/spaces/OC/overview">
            {t('title__hiring')}
          </HeroBanner>
        </Box>

        {/* main title */}
        <H1
          xs={{
            color: theme.colors.test500,
            ...theme.text.medium800,
          }}
          xl={{ ...dynamicTextStyle(theme.text.medium800, 'xlarge') }}
          xxl={{ ...theme.text.medium1000 }}
        >
          {t('title__home_hero_1').split('\\n')[0]}
          {!mediaQuery.small ? <br /> : ''}
          {t('title__home_hero_1').split('\\n')[1]}

          <br />

          {t('title__home_hero_2').split('\\n')[0]}
          {!mediaQuery.small ? <br /> : ''}
          {t('title__home_hero_2').split('\\n')[1]}
        </H1>

        {/* buttons */}
        <Box
          xs={{ display: 'flex', gap: 20, flexDirection: 'column' }}
          s={{ flexDirection: 'row' }}
        >
          <DownloadButton override={{ button: buttonProp }} />
          <GoToShopButton
            overrides={{ button: { ...buttonProp, fillHeight: true } }}
          />
        </Box>

        {/* stars and link */}
        <Flex
          xs={{ gap: 8, alignItems: 'center', justifyContent: 'center' }}
          s={{ justifyContent: 'flex-start' }}
        >
          <Stars />

          {/* todo: i18n link */}
          <Link to="https://help.onekey.so/hc/articles/360002003315-Privacy-Policy">
            <Span
              xs={{
                ...theme.text.normal100,
                color: theme.colors.test400,
                borderBottom: `1px solid ${theme.colors.test400}`,
                ':hover': {
                  opacity: 0.6,
                },
              }}
            >
              {t('title__trustpilot_score_and_review')}
            </Span>
          </Link>
        </Flex>
      </FadeIn>
    </Container>
  );
};
