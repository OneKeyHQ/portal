import { FC, ReactNode } from 'react';

import { Box, Flex } from '../../../../../base';
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
            <Box xs={{ display: 'block' }} s={{ display: 'none' }}>
              {item.sImage}
            </Box>
            <Box
              xs={{ display: 'none' }}
              s={{ display: 'block' }}
              l={{ display: 'none' }}
            >
              {item.mImage}
            </Box>
            <Box
              xs={{ display: 'none' }}
              l={{ display: 'block' }}
              xl={{ display: 'none' }}
            >
              {item.lImage}
            </Box>
            <Box xs={{ display: 'none' }} xl={{ display: 'block' }}>
              {item.xlImage}
            </Box>
          </Box>
          <Box
            xs={{
              position: 'absolute',
              top: '45%',
              textAlign: 'center',
              left: 0,
              right: 0,
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
