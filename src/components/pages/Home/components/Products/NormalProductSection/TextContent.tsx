import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Flex, Span } from '../../../../../base';

export interface TextContentProps {
  children?: ReactNode;
  title?: string;
  description?: string;
}

export const TextContent: FC<TextContentProps> = (props) => {
  const { children, title, description } = props;
  const theme = useTheme();

  return (
    <Flex css={{ flexDirection: 'column', gap: 16 }}>
      <Span
        xs={{ ...theme.text.medium800, color: theme.colors.test500 }}
        xl={{ ...theme.text.medium900 }}
      >
        {title}
      </Span>
      <Span
        xs={{ ...theme.text.normal300, color: theme.colors.test400 }}
        xl={{ ...theme.text.normal400 }}
      >
        {description}
      </Span>

      {children}
    </Flex>
  );
};
