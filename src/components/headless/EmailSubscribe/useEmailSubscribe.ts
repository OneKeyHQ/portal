import { useCallback, useState } from 'react';

import { revueFromSubscriptionSubmit } from '@dinehq/revue-form-subscriber';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { isEmail } from '../../../utils';

export function useEmailSubscribe() {
  const { t } = useTranslation();
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
      title: t('title__subscribe_to_our_notifications'),
      errorMessage: t('form__please_enter_an_email_address'),
      information: t('form__email_subscribe_information'),
    },
    inputProps: {
      type: 'email',
      placeholder: t('form__enter_your_email'),
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      },
    },
    buttonProps: {
      disabled: !email,
      children: t('action__subscribe'),
      onClick: subscribe,
    },
  };
}
