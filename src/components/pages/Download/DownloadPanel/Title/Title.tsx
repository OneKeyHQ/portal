import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { I18n, Span } from '../../../../base';
import { Flex } from '../../../../base/Flex';

export interface TitleProps {
  name?: string;
}

export const Title: FC<TitleProps> = (props) => {
  const { name } = props;
  const theme = useTheme();

  return (
    <Flex xs={{ flexDirection: 'column' }}>
      <Span
        xs={{
          ...theme.text.medium800,
          color: theme.colors.test500,
        }}
        l={theme.text.medium900}
        xl={theme.text.medium1000}
      >
        {name && <I18n name={name} alwaysMultiLine />}
      </Span>
    </Flex>
  );
};
