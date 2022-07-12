import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import {
  Box,
  Flex,
  I18n,
  Link,
  Span,
  StarHalfIcon,
  StarIcon,
} from '../../../../../base';

export interface ReviewProps {
  children?: ReactNode;
}

export const Review: FC<ReviewProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box>
      <Flex xs={{ color: theme.colors.test500 }}>
        <StarIcon width={24} height={24} />
        <StarIcon width={24} height={24} />
        <StarIcon width={24} height={24} />
        <StarIcon width={24} height={24} />
        <StarHalfIcon width={24} height={24} />
      </Flex>

      <Flex
        xs={{
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 8,
        }}
      >
        <Span>
          <Span
            xs={{
              ...theme.text.medium200,
              color: theme.colors.test500,
            }}
            m={theme.text.medium300}
          >
            4.4
            <I18n name="title__star_rating" />
          </Span>

          <Link to="https://www.trustpilot.com/review/onekey.so">
            <Span
              xs={{
                ...theme.text.normal200,
                textDecoration: 'underline',
                paddingLeft: 10,
                color: theme.colors.test500,
              }}
              m={{ paddingLeft: 6 }}
            >
              <I18n name="title__see_reviews" />
            </Span>
          </Link>
        </Span>

        <Link to="https://help.onekey.so/hc/articles/4984467180303">
          <Span
            xs={{
              textDecoration: 'underline',
              ...theme.text.normal200,
              color: theme.colors.test500,
            }}
          >
            <I18n name="title__shipping_return" />
          </Span>
        </Link>
      </Flex>
      {children}
    </Box>
  );
};
