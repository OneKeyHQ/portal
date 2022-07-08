import { FC, ReactNode } from 'react';

import { Box, Section } from '../../../../base';

import { ImageIntroduction, ImageIntroductionProps } from './ImageIntroduction';
import { IntroductionContainer } from './IntroductionContainer';
import { IntroductionSectionTitle } from './IntroductionSectionTitle';

export interface IntroductionSectionProps extends ImageIntroductionProps {
  children?: ReactNode;
  name: string;
}

export const IntroductionSection: FC<IntroductionSectionProps> = (props) => {
  const { children, items, name } = props;

  return (
    <Section>
      <Box
        xs={{ position: 'relative', paddingTop: 72 }}
        xl={{ paddingTop: 120 }}
      >
        <IntroductionSectionTitle name={name} />

        <IntroductionContainer>
          <ImageIntroduction items={items} />
        </IntroductionContainer>

        {children}
      </Box>
    </Section>
  );
};
