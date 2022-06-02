import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Span } from '../../base/Box';
import { Button } from '../../base/Button';
import { Flex } from '../../base/Flex';
import { InfoIcon } from '../../base/Icon';
import { useEmailSubscribe } from '../../headless';

export const EmailSubscribe: FC = () => {
  const theme = useTheme();
  const { showErrorMessage, texts, buttonProps, inputProps } =
    useEmailSubscribe();

  return (
    <Flex xs={{ flexDirection: 'column', gap: 16 }}>
      <Span css={{ fontSize: 14, color: theme.colors.white }}>
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
            color: theme.colors.white,
            flex: 1,
          }}
          {...inputProps}
        />

        <Button
          themeColor="dark"
          variant="outlined"
          size="small"
          {...buttonProps}
        />
      </Flex>

      <Box
        xs={{ height: 1, width: '100%', backgroundColor: theme.colors.white }}
      />

      {showErrorMessage && texts && (
        <Flex
          css={{
            ...theme.text.normal100,
            color: theme.colors.white,
            alignItems: 'center',
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
          color: theme.colors.white,
          opacity: 0.6,
        }}
      >
        {texts.information}
      </Span>
    </Flex>
  );
};
