import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import {
  Box,
  Button,
  ChevronRightIcon,
  Divider,
  Flex,
  I18n,
  Img,
  Span,
} from '../../../../../base';
import { ProductCompareItem } from '../useProductCompareData';

export interface CompareItemProps extends ProductCompareItem {
  children?: ReactNode;
}

export const CompareItem: FC<CompareItemProps> = (props) => {
  const { children, image, name, price, productCompareDetail } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        textAlign: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
      }}
      m={{
        paddingLeft: 48,
        paddingRight: 48,
      }}
    >
      <Box
        xs={{
          width: 163,
          height: 163,
        }}
        m={{
          width: 360,
          height: 360,
        }}
      >
        {image}
      </Box>

      <Flex
        xs={{
          textAlign: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <Span
          xs={{
            ...theme.text.medium500,
          }}
        >
          {name}
        </Span>
        <Span
          xs={{
            ...theme.text.normal400,
          }}
        >
          {price}
        </Span>

        <Button size="small">
          <I18n name="action__buy" />
        </Button>

        <Button
          variant="text"
          size="small"
          rightIcon={<ChevronRightIcon width={24} height={24} />}
        >
          <I18n name="action__learn_more" />
        </Button>
      </Flex>

      <Divider color={theme.colors.test200} />

      <Flex
        xs={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: 48,
        }}
      >
        {productCompareDetail.map((item) => (
          <Flex
            key={item.name}
            xs={{
              minHeight: 76,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            {item.icon && <Img src={item.icon} />}
            {!item.icon && <Span xs={theme.text.medium500}>{item.name}</Span>}

            <Span xs={theme.text.normal300}>{item.value}</Span>
          </Flex>
        ))}
      </Flex>

      {children}
    </Flex>
  );
};
