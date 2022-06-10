import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Flex, Span } from '../../../../../base';

export interface IntroductionTextProps {
  children?: ReactNode;
  name: string;
  description: string;
}

export const IntroductionText: FC<IntroductionTextProps> = (props) => {
  const { children, name, description } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        gap: 8,
        color: theme.colors.test500,
        flexDirection: 'column',
        justifyContent: 'center',
        mixBlendMode: 'difference',
      }}
    >
      <Span
        xs={theme.text.medium700}
        m={theme.text.medium900}
        xl={theme.text.medium1000}
      >
        {name}
      </Span>

      <Span xs={theme.text.normal400} xl={theme.text.normal500}>
        {description}
      </Span>

      {children}
    </Flex>
  );
};
