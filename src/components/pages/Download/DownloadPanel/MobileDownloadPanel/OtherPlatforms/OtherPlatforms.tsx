import React, { Fragment, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Divider, Flex, Span } from '../../../../../base';

import { OtherPlatformsItem } from './OtherPlatformsItem';
import { useOtherPlatformsData } from './useOtherPlatformsData';

export interface OtherPlatformsProps {
  children?: ReactNode;
}

export const OtherPlatforms: React.FC<OtherPlatformsProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const otherPlatformsData = useOtherPlatformsData();

  return (
    <Flex
      id="otherPlatforms"
      xs={{
        paddingTop: 40,
        color: theme.colors.test500,
        gap: 24,
        flexDirection: 'column',
      }}
    >
      <Span xs={{ ...theme.text.medium700 }}>Other platforms</Span>

      <Divider />

      {otherPlatformsData.items.map((item) => (
        <Fragment key={item.name}>
          <OtherPlatformsItem {...item} />
          <Divider />
        </Fragment>
      ))}

      <Box>{children}</Box>
    </Flex>
  );
};
