import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import {
  Box,
  Flex,
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
      <Flex>
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
          <Span xs={theme.text.medium200} m={theme.text.medium300}>
            4.4 Star Rating
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
              See Reviews
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
            Shipping & Return
          </Span>
        </Link>
      </Flex>
      {children}
    </Box>
  );
};
