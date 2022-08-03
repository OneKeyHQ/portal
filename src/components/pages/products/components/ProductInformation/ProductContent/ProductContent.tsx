import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { ProductStatus } from '../../../../../../data';
import {
  Box,
  DeliveryIcon,
  Divider,
  Flex,
  I18n,
  ServiceIcon,
  Span,
} from '../../../../../base';

import { BuyNow, BuyNowProps } from './BuyNow';
import { ComingSoon } from './ComingSoon';
import { Review } from './Review';

export interface ProductContentProps extends BuyNowProps {
  children?: ReactNode;
  name: string;
  slogan: string;
  description: string;
  status: ProductStatus;
  price: {
    value: number;
    formatted: string;
  };
}

export const ProductContent: FC<ProductContentProps> = (props) => {
  const { children, name, slogan, description, price, shops, status } = props;
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
      <Flex xs={{ flexDirection: 'column', gap: 8 }}>
        <Span
          xs={{
            ...theme.text.medium300,
            color: theme.colors.test300,
            textTransform: 'uppercase',
          }}
        >
          {slogan}
        </Span>
        <Span
          xs={{
            ...theme.text.medium800,
            color: theme.colors.test500,
          }}
          l={theme.text.medium900}
          xl={theme.text.medium1000}
          xxl={theme.text.medium1200}
        >
          {name}
        </Span>
        <Span
          xs={{
            ...theme.text.normal300,
            maxWidth: 500,
            color: theme.colors.test400,
            opacity: 0.6,
          }}
        >
          {description}
        </Span>
      </Flex>

      <Span
        xs={{
          ...theme.text.normal800,
          color: theme.colors.test500,
        }}
        xl={theme.text.normal900}
      >
        {price.formatted}
      </Span>

      {status === 'comingSoon' && <ComingSoon />}

      {status === 'normal' && <BuyNow shops={shops} />}

      <Flex xs={{ flexDirection: 'column', gap: 22 }} l={{ gap: 16 }}>
        <Divider />

        <Flex xs={{ alignItems: 'center', gap: 8 }}>
          <DeliveryIcon width={32} height={32} />
          <Span
            xs={{
              ...theme.text.normal300,
              color: theme.colors.test500,
            }}
          >
            <I18n name="content__free_international_shipping" />
          </Span>
        </Flex>

        <Flex xs={{ alignItems: 'center', gap: 8 }}>
          <ServiceIcon width={32} height={32} />
          <Span
            xs={{
              ...theme.text.normal300,
              color: theme.colors.test500,
            }}
          >
            <I18n name="content__24_7_support" />
          </Span>
        </Flex>
      </Flex>

      <Box xs={{ paddingTop: 18 }}>
        <Review />
      </Box>
      {children}
    </Flex>
  );
};
