import { FC } from 'react';

import { useTheme } from '@emotion/react';

import {
  Box,
  Button,
  Divider,
  Flex,
  InfoIcon,
  OnlyDisplay,
  Span,
} from '../../base';
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
        xs={{ ...theme.text.medium600, color: theme.colors.test500 }}
        l={{ ...theme.text.medium700 }}
      >
        {texts.title}
      </Span>

      <Flex
        css={{
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: 40,
        }}
        l={{ paddingTop: 8 }}
      >
        <Box xs={{ flex: 1 }}>
          <input
            css={{
              paddingTop: 12,
              paddingBottom: 12,
              backgroundColor: 'transparent',
              borderWidth: 0,
              outline: 'none',
              color: theme.colors.test500,
              width: '100%',
              ...theme.text.normal300,
              '::placeholder': {
                color: theme.colors.test500,
                opacity: 0.4,
              },
            }}
            {...inputProps}
          />

          <Divider />
        </Box>

        <OnlyDisplay m l xl xxl>
          <Button
            themeColor="brand"
            variant="outlined"
            size="medium"
            {...buttonProps}
          />
        </OnlyDisplay>
      </Flex>

      <OnlyDisplay xs s>
        <Button
          themeColor="brand"
          variant="outlined"
          size="small"
          {...buttonProps}
        />
      </OnlyDisplay>

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

      {/* information */}
      <Span
        xs={{
          opacity: 0.6,
          color: theme.colors.test400,
          ...theme.text.normal200,
        }}
      >
        {texts.information}
      </Span>
    </Flex>
  );
};
