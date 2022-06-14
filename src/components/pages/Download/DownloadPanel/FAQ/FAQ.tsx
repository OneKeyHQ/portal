import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, HelpIcon, Span } from '../../../../base';

export interface FAQProps {
  children?: ReactNode;
  title?: string;
  questions?: {
    text: string;
    link?: string;
  }[];
}

export const FAQ: FC<FAQProps> = (props) => {
  const { children, title, questions } = props;
  const theme = useTheme();

  return (
    <Flex xs={{ gap: 8, flexDirection: 'column' }}>
      {title && <Box xs={{ ...theme.text.medium200 }}>{title}</Box>}

      {questions?.map((question) => (
        <Box key={question.text}>
          <Flex xs={{ alignItems: 'center', ...theme.text.normal200 }}>
            <HelpIcon height={16} width={16} />
            <Span xs={{ marginLeft: 4 }}>{question.text}</Span>
          </Flex>
          {/* todo: add link */}
          {/* <Box>{question.link}</Box> */}
        </Box>
      ))}

      {children}
    </Flex>
  );
};
