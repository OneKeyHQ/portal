import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, I18n, Section, Span } from '../../../../base';

import { ImageIntroduction, ImageIntroductionProps } from './ImageIntroduction';
// import { FullscreenScrollAnimation } from '../FullscreenScrollAnimation';

export interface IntroductionSectionProps extends ImageIntroductionProps {
  children?: ReactNode;
  name: string;
}

export const IntroductionSection: FC<IntroductionSectionProps> = (props) => {
  const { children, items, name } = props;
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
        </Container>

        <Box
          xs={{ paddingTop: 40, paddingLeft: 24, paddingRight: 24 }}
          m={{ paddingLeft: 32, paddingRight: 32 }}
          xl={{ paddingLeft: 36, paddingRight: 36 }}
          xxl={{ paddingLeft: 40, paddingRight: 40 }}
        >
          <ImageIntroduction items={items} />
        </Box>

        {/* todo */}
        {/* <FullscreenScrollAnimation /> */}
        {children}
      </Box>
    </Section>
  );
};
