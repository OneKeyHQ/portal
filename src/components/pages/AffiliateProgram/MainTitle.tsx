import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Flex, I18n, Span } from '../../base';

export interface MainTitleProps {
  children?: ReactNode;
}

export const MainTitle: FC<MainTitleProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        height: 300,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
      }}
      m={{
        height: 400,
        paddingTop: 80,
      }}
    >
      <Span
        xs={{ ...theme.text.medium700 }}
        m={{ ...theme.text.medium800 }}
        l={{ ...theme.text.medium900 }}
        xl={{ ...theme.text.medium1000 }}
      >
        <I18n name="title__affiliate_program" />
      </Span>
      <Span
        xs={{ ...theme.text.medium300, paddingTop: 20 }}
        m={{ ...theme.text.normal300 }}
        l={{ ...theme.text.normal400 }}
      >
        <I18n name="title__affiliate_program_desc" />
      </Span>

      {children}
    </Flex>
  );
};
