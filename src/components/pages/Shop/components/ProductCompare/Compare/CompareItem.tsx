import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useMediaQuery } from '../../../../../../hooks';
import {
  Box,
  Button,
  ButtonProps,
  ChevronRightIcon,
  Divider,
  Flex,
  I18n,
  Img,
  Link,
  Span,
} from '../../../../../base';
import { ProductCompareItem } from '../useProductCompareData';

export interface CompareItemProps extends ProductCompareItem {
  children?: ReactNode;
}

export const CompareItem: FC<CompareItemProps> = (props) => {
  const {
    children,
    image,
    name,
    price,
    status,
    productCompareDetail,
    productDetailUrl,
  } = props;
  const theme = useTheme();

  const mediaQuery = useMediaQuery();

  const buttonProp: ButtonProps = mediaQuery.small
    ? { size: 'medium' }
    : { size: 'large' };

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
        css={{
          '@media (min-width: 768px)': {
            width: 260,
            height: 260,
          },
        }}
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
            color: theme.colors.test500,
          }}
          s={theme.text.medium600}
          l={theme.text.medium700}
        >
          {name}
        </Span>
        <Span
          xs={theme.text.normal400}
          s={theme.text.normal500}
          l={theme.text.normal600}
        >
          {price}
        </Span>

        {status === 'normal' && (
          <Link to={productDetailUrl}>
            <Button xs={{ minWidth: 100 }} {...buttonProp}>
              <I18n name="action__buy" />
            </Button>
          </Link>
        )}
        {status === 'comingSoon' && (
          <Button disabled xs={{ minWidth: 100 }} {...buttonProp}>
            <I18n name="action__coming_soon" />
          </Button>
        )}

        <Link to={productDetailUrl}>
          <Button variant="text" {...buttonProp}>
            <I18n name="action__learn_more" />
            <ChevronRightIcon width={24} height={24} />
          </Button>
        </Link>
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
            {!item.icon && (
              <Span
                xs={{
                  ...theme.text.medium300,
                  color: theme.colors.test500,
                }}
                s={theme.text.medium400}
                m={theme.text.medium500}
              >
                {item.name}
              </Span>
            )}

            <Span
              css={{ color: theme.colors.test400 }}
              xs={theme.text.normal200}
              s={theme.text.normal300}
            >
              {item.value}
            </Span>
          </Flex>
        ))}
      </Flex>

      {children}
    </Flex>
  );
};
