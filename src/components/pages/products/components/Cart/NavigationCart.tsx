import { FC, ReactNode, useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { Box, Container, Flex, OnlyDisplay } from '../../../../base';
import { useIntroductionSectionCenterPosition } from '../../atoms';
import { useBuy } from '../../hooks/useBuy';
import { ProductInformationProps } from '../ProductInformation';

import { AddToCartButton } from './components/AddToCartButton';
import { ProductName } from './components/ProductName';
import { ProductPrice } from './components/ProductPrice';

export interface NavigationCartProps extends ProductInformationProps {
  children?: ReactNode;
}

const container = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export const NavigationCart: FC<NavigationCartProps> = (props) => {
  const { children, name, price, shopProductId } = props;
  const [centerPosition] = useIntroductionSectionCenterPosition();
  const { buyButtonProps } = useBuy({ shopProductId });
  const [cursorVariant, setCursorVariant] = useState('visible');

  useEffect(() => {
    if (centerPosition) {
      setCursorVariant('visible');
    } else {
      setCursorVariant('hidden');
    }
  }, [centerPosition]);

  return (
    <OnlyDisplay m l xl xxl>
      <motion.div
        style={{
          overflow: 'hidden',
          background: `rgba(240, 241, 242, .9)`,
          backdropFilter: `blur(10px)`,
          WebkitBackdropFilter: `blur(10px)`,
          position: 'relative',
          zIndex: 1,
        }}
        variants={container}
        animate={cursorVariant}
      >
        <Container>
          <Flex
            xs={{
              paddingTop: 16,
              paddingBottom: 16,
              paddingLeft: 24,
              paddingRight: 24,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box xs={{ flex: 1 }}>
              <ProductName>{name}</ProductName>
            </Box>

            <Flex xs={{ alignItems: 'center', gap: 8 }}>
              <ProductPrice>{price.formatted}</ProductPrice>

              <AddToCartButton buttonProps={buyButtonProps} />
            </Flex>
          </Flex>
        </Container>

        {children}
      </motion.div>
    </OnlyDisplay>
  );
};
