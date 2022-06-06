import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Button, Divider, Flex, InfoIcon, Span } from '../../base';
import { useEmailSubscribe } from '../../headless/EmailSubscribe';

export const EmailSubscribe: FC = () => {
  const theme = useTheme();
  const { showErrorMessage, texts, buttonProps, inputProps } =
    useEmailSubscribe();

  return (
    <Flex
      css={{ flexDirection: 'column', gap: 16, color: theme.colors.test500 }}
    >
      <Span
        xs={{ ...theme.text.medium600 }}
        m={{ ...theme.text.medium700 }}
        l={{ ...theme.text.medium800 }}
      >
        {texts.title}
      </Span>

      <Flex css={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <input
          css={{
            width: 100,
            fontSize: 14,
            backgroundColor: 'transparent',
            borderWidth: 0,
            outline: 'none',
            color: theme.colors.test500,
            flex: 1,
          }}
          {...inputProps}
        />

        <Button
          themeColor="brand"
          variant="outlined"
          size="medium"
          {...buttonProps}
        />
      </Flex>

      <Divider />

      {showErrorMessage && texts && (
        <Flex
          css={{
            ...theme.text.normal100,
            alignItems: 'center',
            color: theme.colors.test500,
            gap: 8,
          }}
        >
          <InfoIcon width={24} height={24} />
          <Span>{texts.errorMessage}</Span>
        </Flex>
      )}

      <Span
        css={{
          ...theme.text.normal100,
        }}
      >
        {texts.information}
      </Span>
    </Flex>
  );
};
