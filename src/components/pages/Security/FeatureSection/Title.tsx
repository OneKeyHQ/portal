import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Flex, H2, Span } from '../../../base';

export interface TitleProps {
  children?: ReactNode;
  subtitle: string;
  title: string;
  description: string;
}

export const Title: FC<TitleProps> = (props) => {
  const { children, subtitle, description, title } = props;
  const theme = useTheme();

  return (
    <Flex xs={{ justifyContent: 'center' }}>
      <Flex
        xs={{
          textAlign: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
        }}
        m={{ gap: 24 }}
      >
        <Span
          css={{ color: theme.colors.test300 }}
          xs={theme.text.medium400}
          m={theme.text.medium600}
        >
          {subtitle}
        </Span>

        <H2
          css={{ color: theme.colors.white }}
          xs={theme.text.medium600}
          m={{ ...theme.text.medium800, maxWidth: 640 }}
          xl={{ ...theme.text.medium900, maxWidth: 800 }}
          xxl={{ ...theme.text.medium1000, maxWidth: 820 }}
        >
          {title}
        </H2>

        <Span
          css={{ color: theme.colors.test300 }}
          xs={theme.text.normal300}
          m={{ maxWidth: 640 }}
          xl={{ ...theme.text.normal400, maxWidth: 850 }}
        >
          {description}
        </Span>
        {children}
      </Flex>
    </Flex>
  );
};
