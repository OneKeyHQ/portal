import { FC, useCallback, useState } from 'react';

import { revueFromSubscriptionSubmit } from '@dinehq/revue-form-subscriber';
import { useTheme } from '@emotion/react';

import { isEmail } from '../../../utils';
import { Box, Span } from '../Box';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { InfoIcon } from '../Icon';

export const EmailSubscribe: FC = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const subscribe = useCallback(() => {
    try {
      if (!email) {
        return;
      }

      if (!isEmail(email)) {
        setShowErrorMessage(true);
        return;
      }

      revueFromSubscriptionSubmit({
        customUrl: 'http://news.onekey.so/add_subscriber',
        memberEmail: email,
      });

      setShowErrorMessage(false);
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

      <Flex css={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <input
          css={{
            width: 100,
            fontSize: 14,
            backgroundColor: 'transparent',
            borderWidth: 0,
            outline: 'none',
            color: theme.colors.white,
            flex: 1,
          }}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          size="small"
          disabled={!email}
          variant="outlined"
          themeColor="dark"
          onClick={subscribe}
        >
          Subscribe
        </Button>
      </Flex>

      <Box
        xs={{ height: 1, width: '100%', backgroundColor: theme.colors.white }}
      />

      {showErrorMessage && (
        <Flex
          css={{
            ...theme.text.normal100,
            color: theme.colors.white,
            alignItems: 'center',
            gap: 8,
          }}
        >
          <InfoIcon width={24} height={24} />
          <Span>Please enter an email address.</Span>
        </Flex>
      )}

      <Span
        css={{
          ...theme.text.normal100,
          color: theme.colors.white,
          opacity: 0.6,
        }}
      >
        Subscribe to our notifications (for privacy reason, use different email
        than the one you use to purchase onekey. we also periodically delete
        those order information)
      </Span>
    </Box>
  );
};
