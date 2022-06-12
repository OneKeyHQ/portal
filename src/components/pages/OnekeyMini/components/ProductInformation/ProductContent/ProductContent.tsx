import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import {
  Box,
  Button,
  ChevronDownIcon,
  DeliveryIcon,
  Divider,
  Flex,
  ServiceIcon,
  Span,
} from '../../../../../base';

import { OtherStoresSelect } from './OtherStoresSelect';
import { Review } from './Review';

export interface ProductContentProps {
  children?: ReactNode;
}

export const ProductContent: FC<ProductContentProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        flexDirection: 'column',
        gap: 24,
        flex: 1,
        paddingTop: 40,
        paddingBottom: 40,
      }}
      l={{
        paddingTop: 0,
        paddingBottom: 0,
        gap: 22,
      }}
      xl={{
        gap: 32,
      }}
    >
      <Flex xs={{ flexDirection: 'column', gap: 16, maxWidth: 500 }}>
        <Span xs={theme.text.medium700} xl={theme.text.medium800}>
          OneKey Mini - Crypto Hardware Wallet
        </Span>
        <Span xs={theme.text.normal300}>
          Secure, buy, exchange, grow your crypto and manage your NFTs with our
          new Bluetooth-enabled hardware wallet. All your digital assets secured
          in one place.
        </Span>
      </Flex>

      <Span xs={theme.text.normal800} xl={theme.text.normal900}>
        $48.00
      </Span>

      <Flex xs={{ gap: 12 }}>
        {/* buttons */}
        <Button variant="outlined">
          <Flex
            xs={{ width: 80, alignItems: 'center', justifyContent: 'center' }}
          >
            x1 <ChevronDownIcon width={24} height={24} />
          </Flex>
        </Button>
        <Button variant="filled">
          <Box xs={{ width: 120 }}>Add to cart</Box>
        </Button>
      </Flex>

      <OtherStoresSelect />

      <Flex xs={{ flexDirection: 'column', gap: 22 }} l={{ gap: 16 }}>
        <Divider />

        <Flex xs={{ alignItems: 'center', gap: 8 }}>
          <DeliveryIcon width={32} height={32} />
          <Span xs={theme.text.normal300}>Free International Shipping</Span>
        </Flex>

        <Flex xs={{ alignItems: 'center', gap: 8 }}>
          <ServiceIcon width={32} height={32} />
          <Span xs={theme.text.normal300}>24/7 Support</Span>
        </Flex>
      </Flex>
      <Review />
      {children}
    </Flex>
  );
};
