import { FC, ReactNode } from 'react';

import { Box, Flex, OnlyDisplay } from '../../../../../base';
import { IntroductionText } from '../IntroductionText';

import { useImageIntroductionData } from './useImageIntroductionData';

export interface ImageIntroductionProps {
  children?: ReactNode;
}

export const ImageIntroduction: FC<ImageIntroductionProps> = (props) => {
  const { children } = props;
  const data = useImageIntroductionData();

  return (
    <Flex xs={{ flexDirection: 'column', gap: 20 }} m={{ gap: 40 }}>
      {data.items.map((item) => (
        <Box xs={{ position: 'relative' }} key={item.name}>
          <Box xs={{ borderRadius: 40, overflow: 'hidden' }}>
            <OnlyDisplay xs>{item.sImage}</OnlyDisplay>
            <OnlyDisplay s>{item.mImage}</OnlyDisplay>
            <OnlyDisplay m l>
              {item.lImage}
            </OnlyDisplay>
            <OnlyDisplay xl xxl>
              {item.xlImage}
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
