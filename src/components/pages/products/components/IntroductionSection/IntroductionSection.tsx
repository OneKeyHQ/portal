import { FC, ReactNode, useRef } from 'react';

import { useScroll, useTransform } from 'framer-motion';

import { Box, Section } from '../../../../base';
import { useIntroductionSectionCenterPosition } from '../../atoms';

export interface IntroductionSectionProps {
  children?: ReactNode;
}

export const IntroductionSection: FC<IntroductionSectionProps> = (props) => {
  const { children } = props;
  const ref = useRef(null);
  const [, setCenterPosition] = useIntroductionSectionCenterPosition();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  useTransform(scrollYProgress, (value) => {
    if (value > 0.5) {
      setCenterPosition(true);
    } else {
      setCenterPosition(false);
    }
  });

  return (
    <Section>
      <div ref={ref}>
        <Box
          xs={{ position: 'relative', paddingTop: 72 }}
          xl={{ paddingTop: 120 }}
        >
          {children}
        </Box>
      </div>
    </Section>
  );
};
