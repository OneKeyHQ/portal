import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, I18n, Span } from '../../../../base';

export interface IntroductionSectionTitleProps {
  children?: ReactNode;
  name: string;
}

export const IntroductionSectionTitle: FC<IntroductionSectionTitleProps> = (
  props,
) => {
  const { children, name } = props;
  const theme = useTheme();

  return (
    <Container>
      <Box xs={{ textAlign: 'center', paddingBottom: 40 }}>
        <Span
          xs={{
            ...theme.text.medium500,
            color: theme.colors.test300,
          }}
          m={{ ...theme.text.medium600 }}
        >
          <I18n name="title__introducing" />
        </Span>
        <Box xs={{ paddingTop: 8 }}>
          <Span
            xs={theme.text.medium800}
            m={theme.text.medium900}
            xl={theme.text.medium1000}
          >
            {name}
          </Span>
        </Box>
      </Box>

      {children}
    </Container>
  );
};
