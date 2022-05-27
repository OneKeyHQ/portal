import { FC, useCallback, useState } from 'react';

import { revueFromSubscriptionSubmit } from '@dinehq/revue-form-subscriber';
import { useTheme } from '@emotion/react';

import { Box, Span } from '../Box';
import { Button } from '../Button';

export const EmailSubscribe: FC = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');

  const subscribe = useCallback(() => {
    try {
      if (!email) {
        return;
      }

      revueFromSubscriptionSubmit({
        customUrl: 'http://news.onekey.so/add_subscriber',
        memberEmail: email,
      });
    } catch (e) {
      console.log(e);
    }
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

        <Button
          disabled={!email}
          variant="outlined"
          themeColor="dark"
          onClick={subscribe}
        >
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
