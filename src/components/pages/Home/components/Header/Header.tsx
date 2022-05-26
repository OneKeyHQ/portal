import { FC } from 'react';

import { motion } from 'framer-motion';

import { useMediaQuery, usePositionAnimation } from '../../../../../hooks';
import { isBrowser, mergeRefs } from '../../../../../utils';
import { Box } from '../../../../base';

import { Background } from './Background';
import { Content } from './Content';
import defaultBackgroundImage from './images/background.jpg';

export const Header: FC = () => {
  const mediaQuery = useMediaQuery();
  const { ref: paddingRef, motionValue: paddingMotionValue } =
    usePositionAnimation({
      defaultProgress: 1,
      from: 60,
      to: 0,
      disabled: !mediaQuery.medium,
    });

  const { ref: borderRadiusRef, motionValue: borderRadiusMotionValue } =
    usePositionAnimation({
      defaultProgress: 1,
      from: 40,
      to: 0,
    });

  return (
    <motion.div
      ref={mergeRefs(borderRadiusRef, paddingRef)}
      style={{
        height: '100vh',
        padding: paddingMotionValue,
      }}
    >
      <motion.div
        style={{
          boxShadow: '0px -6px 40px rgba(0, 0, 0, 0.08)',
          height: '100%',
          // for hack
          transform: 'translateZ(0)',
          borderRadius: borderRadiusMotionValue,
          overflow: 'hidden',
        }}
      >
        <Box
          xs={{
            position: 'relative',
            height: '100%',
            backgroundImage: `url(${defaultBackgroundImage})`,
            backgroundSize: 'cover',
          }}
        >
          {isBrowser() && <Background />}

          <Content />
        </Box>
      </motion.div>
    </motion.div>
  );
};
