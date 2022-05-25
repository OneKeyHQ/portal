import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { dynamicTextStyle } from '../../../../../../utils';
import {
  Box,
  Container,
  GoToShopButton,
  H1,
  LaunchAppButton,
  Span,
} from '../../../../../base';

export interface ContentProps {
  children?: ReactNode;
}

export const Content: FC<ContentProps> = () => {
  const theme = useTheme();

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
      <Box
        xs={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
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
          All-in-one crypto wallet.
          <br />
          Trusted by millions.
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
          <LaunchAppButton />
          <GoToShopButton
            overrides={{
              button: {
                fillHeight: true,
              },
            }}
          />
        </Box>

        {/* todo: i18n link */}
        <a href="https://help.onekey.so/hc/en-us/articles/360002003315-Privacy-Policy">
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
        </a>
      </Box>
    </Container>
  );
};
