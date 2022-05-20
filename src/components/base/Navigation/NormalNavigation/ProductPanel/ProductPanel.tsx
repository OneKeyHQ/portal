import { FC, ReactNode, useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { useHover } from '../../../../../hooks';
import { Box } from '../../../Box';
import { Container } from '../../../Container';

import { LeftArea } from './LeftArea';
import { RightArea } from './RightArea';

export interface ProductPanelProps {
  children?: ReactNode;
  isActive: boolean;
}

const container = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
  visible: {
    height: 'fit-content',
    opacity: 1,
    transition: {
      duration: 0.15,
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

export const ProductPanel: FC<ProductPanelProps> = (props) => {
  const { children, isActive } = props;
  const { hoverProps, isHovered } = useHover({ timeout: 100 });
  const [cursorVariant, setCursorVariant] = useState('hidden');

  useEffect(() => {
    if (isHovered || isActive) {
      setCursorVariant('visible');
    } else {
      setCursorVariant('hidden');
    }
  }, [isHovered, isActive]);

  return (
    <motion.div
      initial="hidden"
      variants={container}
      animate={cursorVariant}
      style={{
        width: '100%',
        overflow: 'hidden',
        background:
          'linear-gradient(90deg, #F0F1F2 0%, #F0F1F2 53.76%, rgba(255, 255, 255, 1) 56.6%)',
      }}
    >
      <Container>
        <Box
          {...hoverProps}
          xs={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box
            xs={{
              flex: 1,
            }}
          >
            <LeftArea />
          </Box>
          <Box
            xs={{
              width: '33%',
            }}
          >
            <RightArea />
          </Box>
        </Box>
        {children}
      </Container>
    </motion.div>
  );
};
