import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { ChevronRightIcon, Flex, Link } from '../../base';
import { Box } from '../../base/Box';

export interface HeroBannerProps {
  children?: ReactNode;
  to: string;
}

export const HeroBanner: FC<HeroBannerProps> = (props) => {
  const { children, to } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        background: theme.colors.white,
        color: theme.colors.test500,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 120,
        cursor: 'pointer',
        ...theme.text.medium100,
        ':hover': {
          background: theme.colors.test500,
          color: theme.colors.white,
        },
      }}
      m={{ ...theme.text.normal200, width: 'fit-content' }}
    >
      <Link
        to={to}
        css={{
          color: 'inherit',
          ':hover': {
            color: 'inherit',
          },
        }}
      >
        <Flex xs={{ gap: 8, alignItems: 'center' }}>
          <Box>👋</Box>

          {children}

          <Box xs={{ marginLeft: 'auto' }}>
            <ChevronRightIcon
              width={16}
              height={16}
              color={theme.colors.brandAlt400}
            />
          </Box>
        </Flex>
      </Link>
    </Box>
  );
};
