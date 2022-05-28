import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useMediaQuery } from '../../../../../../hooks';
import { dynamicTextStyle } from '../../../../../../utils';
import {
  Box,
  ButtonProps,
  Container,
  GoToShopButton,
  H1,
  LaunchAppButton,
  Link,
  Span,
} from '../../../../../base';
import { FadeIn } from '../../../../../base/FadeIn';

export interface ContentProps {
  children?: ReactNode;
}

export const Content: FC<ContentProps> = () => {
  const theme = useTheme();
  const mediaQuery = useMediaQuery();

  const buttonProp: ButtonProps = mediaQuery.small
    ? {
        size: 'medium',
      }
    : {
        xs: {
          width: '100%',
        },
        size: 'large',
      };

  return (
    <Container
      xs={{
        paddingTop: 78,
        paddingBottom: 78,
        zIndex: 2,
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <FadeIn style={{ flex: 1 }}>
        <Box
          xs={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            flex: 1,
          }}
        >
          <H1
            xs={{
              color: theme.colors.test500,
              ...theme.text.medium800,
            }}
            xl={{ ...dynamicTextStyle(theme.text.medium800, 'xlarge') }}
            xxl={{ ...theme.text.medium1000 }}
          >
            All-in-one
            {!mediaQuery.small && <br />}
            crypto wallet.
            <br />
            Trusted by
            {!mediaQuery.small && <br />}
            millions.
          </H1>
          <Box
            xs={{
              display: 'flex',
              gap: 20,
              flexDirection: 'column',
            }}
            s={{
              flexDirection: 'row',
            }}
          >
            <LaunchAppButton
              override={{
                button: buttonProp,
              }}
            />
            <GoToShopButton
              overrides={{
                button: {
                  ...buttonProp,
                  fillHeight: true,
                },
              }}
            />
          </Box>

          {/* todo: i18n link */}
          <Box xs={{ textAlign: 'center' }} m={{ textAlign: 'left' }}>
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
                Trustpilot score & review
              </Span>
            </Link>
          </Box>
        </Box>
      </FadeIn>
    </Container>
  );
};
