import { FC, ReactNode, useEffect } from 'react';

import { useTheme } from '@emotion/react';
import { motion, useMotionValue } from 'framer-motion';
import { createPortal } from 'react-dom';

import { isBrowser } from '../../../../../utils';
import { Box, Flex, OnlyDisplay } from '../../../../base';
import { BuyNow, BuyNowProps } from '../../../../common';
import { useIntroductionSectionCenterPosition } from '../../atoms';
import { ProductInformationProps } from '../ProductInformation';

import { ProductName } from './components/ProductName';
import { ProductPrice } from './components/ProductPrice';

export interface MobileCartProps extends ProductInformationProps, BuyNowProps {
  children?: ReactNode;
}

export const MobileCart: FC<MobileCartProps> = (props) => {
  const { children, name, price, shops } = props;
  const [centerPosition] = useIntroductionSectionCenterPosition();
  const bottom = useMotionValue(0);
  const theme = useTheme();

  useEffect(() => {
    if (centerPosition) {
      bottom.set(0);
    } else {
      bottom.set(100);
    }
  }, [bottom, centerPosition]);

  if (!isBrowser()) {
    return null;
  }

  const { body } = document;

  if (body === null) {
    return null;
  }

  return createPortal(
    <OnlyDisplay xs s>
      <motion.div
        style={{
          transition: theme.transitions.allEaseInOut,
          position: 'fixed',
          y: bottom,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <Box
          xs={{
            background: `rgba(240, 241, 242, 1)`,
            paddingTop: 16,
            paddingBottom: 16,
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <Flex
            xs={{
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Flex xs={{ flexDirection: 'column' }}>
              <ProductName>{name}</ProductName>
              <ProductPrice>{price.formatted}</ProductPrice>
            </Flex>

            {children}

            <BuyNow menuPosition="bottom" shops={shops} />
          </Flex>
        </Box>
      </motion.div>
    </OnlyDisplay>,
    body,
  );
};
