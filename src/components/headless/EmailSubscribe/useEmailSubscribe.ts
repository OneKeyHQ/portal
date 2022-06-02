import { useCallback, useState } from 'react';

import { revueFromSubscriptionSubmit } from '@dinehq/revue-form-subscriber';

import { isEmail } from '../../../utils';

export function useEmailSubscribe() {
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

  return {
    email,
    setEmail,
    showErrorMessage,
    setShowErrorMessage,
    subscribe,
    texts: {
      title: 'Subscribe to our notifications',
      errorMessage: 'Please enter an email address.',
      information:
        'Subscribe to our notifications (for privacy reason, use different email than the one you use to purchase onekey. we also periodically delete those order information)',
    },
    inputProps: {
      type: 'email',
      placeholder: 'Enter your email',
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      },
    },
    buttonProps: {
      disabled: !email,
      children: 'Subscribe',
      onClick: subscribe,
    },
  };
}
