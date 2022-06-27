import { FC, ReactNode } from 'react';

import { Box, Flex, OnlyDisplay } from '../../../../../base';
import { IntroductionText } from '../IntroductionText';

export interface ImageIntroductionProps {
  children?: ReactNode;
  items: {
    name: string;
    description: string;
    images: {
      s: ReactNode;
      m: ReactNode;
      l: ReactNode;
      xl: ReactNode;
    };
  }[];
}

export const ImageIntroduction: FC<ImageIntroductionProps> = (props) => {
  const { children, items = [] } = props;

  return (
    <Flex xs={{ flexDirection: 'column', gap: 20 }} m={{ gap: 40 }}>
      {items.map((item) => (
        <Box xs={{ position: 'relative' }} key={item.name}>
          <Box xs={{ borderRadius: 40, overflow: 'hidden' }}>
            <OnlyDisplay xs>{item.images.s}</OnlyDisplay>
            <OnlyDisplay s>{item.images.m}</OnlyDisplay>
            <OnlyDisplay m l>
              {item.images.l}
            </OnlyDisplay>
            <OnlyDisplay xl xxl>
              {item.images.xl}
            </OnlyDisplay>
          </Box>
          <Box
            xs={{
              position: 'absolute',
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 12,
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <IntroductionText name={item.name} description={item.description} />
          </Box>
        </Box>
      ))}
      {children}
    </Flex>
  );
};
