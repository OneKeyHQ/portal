import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../../../base/Box';
import { Flex } from '../../../../base/Flex';

export interface TitleProps {
  text: string[];
}

export const Title: FC<TitleProps> = (props) => {
  const { text } = props;
  const theme = useTheme();

  return (
    <Flex xs={{ flexDirection: 'column' }}>
      {text.map((item) => (
        <Span key={item} xs={theme.text.medium800} l={theme.text.medium900}>
          {item}
        </Span>
      ))}
    </Flex>
  );
};
