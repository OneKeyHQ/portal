import { FC } from 'react';

import Marquee from 'react-fast-marquee';

import { Box, Img, Section } from '../../../../base';

import logo1 from './images/logo01.svg';
import logo2 from './images/logo02.svg';
import logo3 from './images/logo03.svg';
import logo4 from './images/logo04.svg';
import logo5 from './images/logo05.svg';
import logo6 from './images/logo06.svg';
import logo7 from './images/logo07.svg';
import logo8 from './images/logo08.svg';
import logo9 from './images/logo09.svg';
import logo10 from './images/logo10.svg';

const images = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
];

export const Rewards: FC = () => (
  <Section>
    <Box
      xs={{
        width: '100%',
        overflow: 'hidden',
        paddingTop: 50,
        paddingBottom: 50,
        backgroundColor: '#313638',
        display: 'flex',
        flexDirection: 'column',
        label: 'logos',
      }}
      m={{
        paddingTop: 64,
        paddingBottom: 64,
      }}
    >
      <Marquee gradientWidth={0}>
        {images.map((image) => (
          <Img
            xs={{
              width: 182,
              height: 60,
              userSelect: 'none',
              userDrag: 'none',
            }}
            m={{
              width: 330,
              height: 110,
            }}
            draggable={false}
            key={image}
            src={image}
            alt="logo"
          />
        ))}
      </Marquee>
    </Box>
  </Section>
);
