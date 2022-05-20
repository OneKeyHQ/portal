import { FC, useCallback, useState } from 'react';

import { revueFromSubscriptionSubmit } from '@dinehq/revue-form-subscriber';
import { useTheme } from '@emotion/react';

import { Box, Span } from '../Box';
import { Button } from '../Button';

export const EmailSubscribe: FC = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');

  const subscribe = useCallback(() => {
    revueFromSubscriptionSubmit({
      customUrl: 'http://news.onekey.so/add_subscriber',
      memberEmail: email,
    });
  }, [email]);

  return (
    <Box
      xs={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 480,
      }}
      l={{
        maxWidth: 780,
      }}
    >
      <Span css={{ fontSize: 14, color: '#ffffff99' }}>
        Subscribe to our notifications
      </Span>

      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <input
          css={{
            width: 100,
            fontSize: 14,
            backgroundColor: 'transparent',
            borderWidth: 0,
            outline: 'none',
            color: 'white',
            flex: 1,
          }}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button onClick={subscribe} variant="secondary">
          Subscribe
        </Button>
      </div>

      <Box
        xs={{ height: 1, width: '100%', backgroundColor: theme.colors.white }}
      />

      <Span css={{ ...theme.text.normal100, color: '#ffffff99' }}>
        Subscribe to our notifications (for privacy reason, use different email
        than the one you use to purchase onekey. we also periodically delete
        those order information)
      </Span>
    </Box>
  );
};
