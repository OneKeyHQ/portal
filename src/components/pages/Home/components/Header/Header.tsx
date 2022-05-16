import { FC } from 'react';

import { motion } from 'framer-motion';

import { usePositionAnimation } from '../../../../../hooks';
import { isBrowser, mergeRefs } from '../../../../../utils';
import { Box } from '../../../../base';

import { Background } from './Background';
import { Content } from './Content';

export const Header: FC = () => {
  const { ref: paddingRef, motionValue: paddingMotionValue } =
    usePositionAnimation({
      defaultProgress: 1,
      from: 60,
      to: 0,
    });

  const { ref: borderRadiusRef, motionValue: borderRadiusMotionValue } =
    usePositionAnimation({
      defaultProgress: 1,
      from: 40,
      to: 0,
    });

  const allRef = mergeRefs(borderRadiusRef, paddingRef);

  return (
    <motion.div
      ref={allRef}
      style={{
        height: '100vh',
        padding: paddingMotionValue,
      }}
    >
      <motion.div
        style={{
          boxShadow: '0px -6px 40px rgba(0, 0, 0, 0.08)',
          height: '100%',
          borderRadius: borderRadiusMotionValue,
          overflow: 'hidden',
        }}
      >
        <Box
          xs={{
            position: 'relative',
            height: '100%',
            paddingTop: 78,
            paddingBottom: 78,
          }}
        >
          {isBrowser() && <Background />}

          <Content />
        </Box>
      </motion.div>
    </motion.div>
  );
};
