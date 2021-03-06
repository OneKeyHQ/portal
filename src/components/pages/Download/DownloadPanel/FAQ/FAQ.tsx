import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, HelpIcon, Link, Span } from '../../../../base';

export interface FAQProps {
  children?: ReactNode;
  title?: string;
  questions?: {
    text: string;
    url?: string;
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
            <Link to={question.url || ''}>
              <Span
                xs={{
                  marginLeft: 4,
                  color: theme.colors.test500,
                  ':hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {question.text}
              </Span>
            </Link>
          </Flex>
        </Box>
      ))}

      {children}
    </Flex>
  );
};
