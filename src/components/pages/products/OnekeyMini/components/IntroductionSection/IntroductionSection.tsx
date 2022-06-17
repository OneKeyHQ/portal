import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Section, Span } from '../../../../../base';

import { ImageIntroduction } from './ImageIntroduction';
// import { FullscreenScrollAnimation } from '../FullscreenScrollAnimation';

export interface IntroductionSectionProps {
  children?: ReactNode;
}

export const IntroductionSection: FC<IntroductionSectionProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Section>
      <Box
        xs={{ position: 'relative', paddingTop: 72 }}
        xl={{ paddingTop: 120 }}
      >
        <Container>
          <Box xs={{ textAlign: 'center' }}>
            <Span
              xs={{
                ...theme.text.medium500,
                color: theme.colors.test300,
              }}
              m={{ ...theme.text.medium600 }}
            >
              INTRODUCING
            </Span>
            <Box xs={{ paddingTop: 8 }}>
              <Span
                xs={theme.text.medium800}
                m={theme.text.medium900}
                xl={theme.text.medium1000}
              >
                OneKey Mini
              </Span>
            </Box>
          </Box>
        </Container>

        <Box
          xs={{ paddingTop: 40, paddingLeft: 24, paddingRight: 24 }}
          m={{ paddingLeft: 32, paddingRight: 32 }}
          xl={{ paddingLeft: 36, paddingRight: 36 }}
          xxl={{ paddingLeft: 40, paddingRight: 40 }}
        >
          <ImageIntroduction />
        </Box>

        {/* todo */}
        {/* <FullscreenScrollAnimation /> */}
        {children}
      </Box>
    </Section>
  );
};
