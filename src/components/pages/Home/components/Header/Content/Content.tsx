import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { dynamicTextStyle } from '../../../../../../utils';
import {
  Box,
  Button,
  Container,
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
            ...theme.text.medium800,
          }}
          xl={{
            ...dynamicTextStyle(theme.text.medium800, 'xlarge'),
          }}
          xxl={{
            ...theme.text.medium1000,
          }}
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
          <Button variant="outline">Go to shop</Button>
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
