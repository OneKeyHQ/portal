import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, HelpIcon, Span } from '../../../../../base';

export interface FAQProps {
  children?: ReactNode;
  titleString?: string;
  questions?: {
    textString: string;
    questionLink?: string;
  }[];
}

export const FAQ: FC<FAQProps> = (props) => {
  const { children, titleString, questions } = props;
  const theme = useTheme();

  return (
    <Flex xs={{ gap: 8, flexDirection: 'column' }}>
      <Box xs={{ ...theme.text.medium200 }}>{titleString}</Box>

      {questions?.map((question) => (
        <Box key={question.textString}>
          <Flex xs={{ alignItems: 'center', ...theme.text.normal200 }}>
            <HelpIcon height={16} width={16} />
            <Span xs={{ marginLeft: 4 }}>{question.textString}</Span>
          </Flex>
          {/* todo: add link */}
          {/* <Box>{question.questionLink}</Box> */}
        </Box>
      ))}

      {children}
    </Flex>
  );
};
