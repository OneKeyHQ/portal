import { FC, ReactNode } from 'react';

import { createPortal } from 'react-dom';

import { isBrowser } from '../../../../../utils';
import { Box, Flex, OnlyDisplay } from '../../../../base';

import { AddToCartButton } from './components/AddToCartButton';
import { ProductName } from './components/ProductName';
import { ProductPrice } from './components/ProductPrice';

export interface MobileCartProps {
  children?: ReactNode;
}

export const MobileCart: FC<MobileCartProps> = (props) => {
  const { children } = props;

  if (!isBrowser()) {
    return null;
  }

  const { body } = document;

  if (body === null) {
    return null;
  }

  return createPortal(
    <OnlyDisplay xs s>
      <Box
        xs={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
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
            <ProductName>OneKey Mini</ProductName>
            <ProductPrice>$200</ProductPrice>
          </Flex>

          {children}

          <AddToCartButton />
        </Flex>
      </Box>
    </OnlyDisplay>,
    body,
  );
};
