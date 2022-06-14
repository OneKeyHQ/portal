import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, Span } from '../../../../../base';

import { OtherPlatformsDataItem } from './useOtherPlatformsData';

export interface OtherPlatformsItemProps extends OtherPlatformsDataItem {
  children?: ReactNode;
}

export const OtherPlatformsItem: FC<OtherPlatformsItemProps> = (props) => {
  const { subItems, icon: Icon, children, name, description } = props;
  const theme = useTheme();

  return (
    <Flex xs={{ gap: 24, flexDirection: 'column' }}>
      <Flex xs={{ gap: 12 }}>
        <Icon width={40} height={40} />
        <Flex xs={{ flexDirection: 'column' }}>
          <Span xs={theme.text.medium300}>{name}</Span>
          <Span css={{ color: theme.colors.test300 }} xs={theme.text.normal100}>
            {description}
          </Span>
        </Flex>
      </Flex>

      {subItems?.map((item) => (
        <Box xs={{ paddingLeft: 60 }}>
          <OtherPlatformsItem {...item} />
        </Box>
      ))}

      {children}
    </Flex>
  );
};
