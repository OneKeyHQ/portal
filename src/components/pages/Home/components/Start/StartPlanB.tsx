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
            />
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
