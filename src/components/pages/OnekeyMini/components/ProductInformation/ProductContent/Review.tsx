import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, Span, StarHalfIcon, StarIcon } from '../../../../../base';

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
          <Span xs={theme.text.medium300}>4.4 Star Rating</Span>
          <Span
            xs={{
              textDecoration: 'underline',
              ...theme.text.normal200,
              paddingLeft: 6,
            }}
          >
            See Reviews
          </Span>
        </Span>

        <Span xs={{ textDecoration: 'underline', ...theme.text.normal200 }}>
          Shipping & Return
        </Span>
      </Flex>
      {children}
    </Box>
  );
};
