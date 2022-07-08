import { FC, ReactNode } from 'react';

import { Box, Section } from '../../../../base';

import { ImageIntroduction, ImageIntroductionProps } from './ImageIntroduction';
import { IntroductionSectionTitle } from './IntroductionSectionTitle';
// import { FullscreenScrollAnimation } from '../FullscreenScrollAnimation';

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
