import { FC } from 'react';

import Marquee from 'react-fast-marquee';

import { Box, Img, Section } from '../../../../base';

import image1 from './images/image01.svg';
import image2 from './images/image02.svg';
import image3 from './images/image03.svg';
import image4 from './images/image04.svg';
import image5 from './images/image05.svg';
import image6 from './images/image06.svg';
import image7 from './images/image07.svg';
import image8 from './images/image08.svg';
import image9 from './images/image09.svg';
import image10 from './images/image10.svg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

export const Rewards: FC = () => (
  <Section>
    <Box
      xs={{
        width: '100%',
        overflow: 'hidden',
        paddingTop: 40,
        paddingBottom: 40,
        backgroundColor: '#313638',
      }}
      m={{
        paddingTop: 64,
        paddingBottom: 64,
      }}
    >
      <Marquee gradientWidth={0}>
        <Box
          xs={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {images.map((image) => (
            <Img
              xs={{
                userSelect: 'none',
                userDrag: 'none',
                margin: '0 10px',
              }}
              m={{
                margin: '0 50px',
              }}
              draggable={false}
              key={image}
              src={image}
              alt="image"
            />
          ))}
        </Box>
      </Marquee>
    </Box>
  </Section>
);
