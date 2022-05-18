import { useCallback, useEffect, useRef, useState } from 'react';

import { useTheme } from '@emotion/react';
import useMouse from '@react-hook/mouse-position';
import { motion } from 'framer-motion';
import ua2os from 'ua2os';
import { OS } from 'ua2os/dist/types';

import {
  Container,
  Flex,
  Img,
  RoundCursor,
  Section,
  Span,
} from '../../../../base';

import arrowSvg from './images/arrow.svg';
import { StartItem } from './StartItem';

const spring = {
  type: 'spring',
  stiffness: 900,
  damping: 100,
};

let mouseXPosition = 0;
let mouseYPosition = 0;

export const StartPlanB = () => {
  const theme = useTheme();
  const [cursorVariant, setCursorVariant] = useState('default');
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 20,
    leaveDelay: 20,
  });
  const [type, setType] = useState<OS>();

  useEffect(() => {
    setType(ua2os(window.navigator.userAgent));
  }, []);

  mouseXPosition = mouse.clientX || mouseXPosition;
  mouseYPosition = mouse.clientY || mouseYPosition;

  const variants = {
    default: {
      x: mouseXPosition,
      y: mouseYPosition,
      opacity: 0,
    },
    section: {
      opacity: 1,
      height: 30,
      width: 30,
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    item: {
      opacity: 1,
      height: mouse.isDown ? 80 : 96,
      width: mouse.isDown ? 80 : 96,
      x: mouse.isDown ? mouseXPosition + 8 : mouseXPosition,
      y: mouse.isDown ? mouseYPosition + 8 : mouseYPosition,
    },
  };

  const itemEnter = useCallback(() => {
    setCursorVariant('item');
  }, []);

  const itemLeave = useCallback(() => {
    setCursorVariant('section');
  }, []);

  const sectionEnter = useCallback(() => {
    setCursorVariant('section');
  }, []);

  const sectionLeave = useCallback(() => {
    setCursorVariant('default');
  }, []);

  return (
    <Section
      onMouseEnter={sectionEnter}
      onMouseLeave={sectionLeave}
      css={{
        position: 'relative',
      }}
    >
      <Container>
        <Flex
          xs={{
            paddingTop: 72,
            paddingBottom: 72,
            flexDirection: 'column',
            gap: 117,
          }}
          xl={{
            paddingTop: 164,
            paddingBottom: 164,
          }}
        >
          <Flex
            xs={{ gap: 16, flexDirection: 'column' }}
            l={{ flexDirection: 'row', alignItems: 'flex-end' }}
          >
            <Span
              css={{
                color: '#101111',
              }}
              xs={{
                ...theme.text.medium900,
              }}
              xl={{
                ...theme.text.medium1200,
              }}
            >
              Start Using
              <br />
              OneKey Wallet Today
            </Span>

            <Img
              alt="arrow.svg"
              src={arrowSvg}
              css={{
                width: 106 / 2,
                height: 100 / 2,
              }}
            />
          </Flex>
          <div ref={ref}>
            {type}
            <Flex
              onMouseEnter={itemEnter}
              onMouseLeave={itemLeave}
              css={{ gap: 23, flexGrow: 1, cursor: 'none' }}
            >
              <StartItem
                path="#"
                name="Browser Extension"
                description="Chrome, Firefox, Edge"
                image="data:image/png;base64,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"
              />
            </Flex>
          </div>
        </Flex>
      </Container>

      <motion.div
        css={{
          transformOrigin: 'center',
          userSelect: 'none',
          pointerEvents: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
        variants={variants}
        animate={cursorVariant}
        transition={spring}
      >
        <RoundCursor />
      </motion.div>
    </Section>
  );
};
