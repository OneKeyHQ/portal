import { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import { motion } from 'framer-motion';

import { useHover } from '../../../../../hooks';
import { Box } from '../../../../base/Box';
import { Container } from '../../../../base/Container';
import { Flex } from '../../../../base/Flex';
import { useNormalNavigationHeight } from '../useNormalNavigationHeight';

import { LeftArea } from './LeftArea';
import { RightArea } from './RightArea';
import { useProductPanel } from './useProductPanel';

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
  const { currentProductBackgroundColor } = useProductPanel();
  const { hoverProps, isHovered } = useHover({ timeout: 100 });
  const [cursorVariant, setCursorVariant] = useState('hidden');
  const { hoverProps: RightAreaHoverProps, isHovered: isRightAreaHovered } =
    useHover({ timeout: 100 });
  const top = useNormalNavigationHeight();

  const background = useMemo(
    () =>
      `linear-gradient(90deg, ${currentProductBackgroundColor} 0%, ${currentProductBackgroundColor} 50%, ${
        isRightAreaHovered ? '#F8F8F8' : '#FFFFFF'
      } 50%)`,
    [currentProductBackgroundColor, isRightAreaHovered],
  );

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
        position: 'fixed',
        left: 0,
        right: 0,
        top,
      }}
    >
      <Box {...hoverProps} xs={{ background }}>
        <Container>
          <Flex xs={{ justifyContent: 'space-between' }}>
            <Box xs={{ flex: 1 }}>
              <LeftArea />
            </Box>
            <Box xs={{ width: '33%' }}>
              <RightArea {...RightAreaHoverProps} />
            </Box>
          </Flex>
          {children}
        </Container>
      </Box>
    </motion.div>
  );
};