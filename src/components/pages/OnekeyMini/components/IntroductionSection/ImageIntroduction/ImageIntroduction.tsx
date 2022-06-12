import { FC, ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Box, Flex } from '../../../../../base';
import { IntroductionText } from '../IntroductionText';

export interface ImageIntroductionProps {
  children?: ReactNode;
}

const data = [
  {
    name: 'Mini sized',
    description: 'Mini sized, safety without compromise.',
    sImage: <StaticImage src="./images/s/Hardware.jpg" alt="Mini sized" />,
    mImage: <StaticImage src="./images/m/Hardware.jpg" alt="Mini sized" />,
    lImage: <StaticImage src="./images/l/Hardware.jpg" alt="Mini sized" />,
    xlImage: <StaticImage src="./images/xl/Hardware.jpg" alt="Mini sized" />,
  },
  {
    name: 'Security built right in',
    description: 'Mini sized, safety without compromise.',
    sImage: (
      <StaticImage
        src="./images/s/Hardware-1.jpg"
        alt="Security built right in"
      />
    ),
    mImage: (
      <StaticImage
        src="./images/m/Hardware-1.jpg"
        alt="Security built right in"
      />
    ),
    lImage: (
      <StaticImage
        src="./images/l/Hardware-1.jpg"
        alt="Security built right in"
      />
    ),
    xlImage: (
      <StaticImage
        src="./images/xl/Hardware-1.jpg"
        alt="Security built right in"
      />
    ),
  },
  {
    name: 'OneKey Platform',
    description: 'Mini sized, safety without compromise.',
    sImage: (
      <StaticImage src="./images/s/Hardware-2.jpg" alt="OneKey Platform" />
    ),
    mImage: (
      <StaticImage src="./images/m/Hardware-2.jpg" alt="OneKey Platform" />
    ),
    lImage: (
      <StaticImage src="./images/l/Hardware-2.jpg" alt="OneKey Platform" />
    ),
    xlImage: (
      <StaticImage src="./images/xl/Hardware-2.jpg" alt="OneKey Platform" />
    ),
  },
];

export const ImageIntroduction: FC<ImageIntroductionProps> = (props) => {
  const { children } = props;

  return (
    <Flex xs={{ flexDirection: 'column', gap: 20 }} m={{ gap: 40 }}>
      {data.map((item) => (
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
