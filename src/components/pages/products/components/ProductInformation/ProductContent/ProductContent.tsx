import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import {
  DeliveryIcon,
  Divider,
  Flex,
  ServiceIcon,
  Span,
} from '../../../../../base';

import { AddToCart } from './AddToCart';
import { OtherStoresSelect, OtherStoresSelectProps } from './OtherStoresSelect';
import { Review } from './Review';

export interface ProductContentProps extends OtherStoresSelectProps {
  children?: ReactNode;
  name: string;
  slogan: string;
  description: string;
  price: {
    value: number;
    formatted: string;
  };
  shopProductId: string;
}

export const ProductContent: FC<ProductContentProps> = (props) => {
  const { children, shopProductId, name, slogan, description, price, shops } =
    props;
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
          {name} - {slogan}
        </Span>
        <Span xs={theme.text.normal300}>{description}</Span>
      </Flex>

      <Span xs={theme.text.normal800} xl={theme.text.normal900}>
        {price.formatted}
      </Span>

      <AddToCart shopProductId={shopProductId} />

      <OtherStoresSelect shops={shops} />

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
