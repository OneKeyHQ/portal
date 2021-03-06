import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, I18n, Span } from '../../../../base';
import { SectionTitle } from '../../../../common';

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
            textTransform: 'capitalize',
          }}
          m={{ ...theme.text.medium600 }}
        >
          <I18n name="title__introducing" />
        </Span>
        <Box xs={{ paddingTop: 8 }}>
          <SectionTitle>{name}</SectionTitle>
        </Box>
      </Box>

      {children}
    </Container>
  );
};
