import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { DownloadTypes } from '../../../../../../data/useDownloadData';
import { Box, BoxProps, Flex, Span } from '../../../../../base';
import { PlatformIcon } from '../../../../../common';

export interface TabItemProps extends BoxProps {
  iconType: DownloadTypes;
  name?: string;
  description?: string;
  active?: boolean;
}

export const TabItem: FC<TabItemProps> = (props) => {
  const { description, iconType, name, active = false, ...otherProps } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        paddingLeft: 24,
        paddingTop: 32,
        paddingBottom: 32,
        position: 'relative',
        transition: theme.transitions.allEaseOut,
        willChange: 'opacity',
        opacity: active ? 1 : 0.6,
        background: active ? theme.colors.test500 : 'transparent',
        cursor: 'pointer',
        ':hover': {
          opacity: 1,
          background: theme.colors.test500,
        },
      }}
      externalProps={otherProps}
    >
      <Flex
        m={{
          gap: 16,
          alignItems: 'center',
          textAlign: 'left',
          flexDirection: 'row',
        }}
      >
        <PlatformIcon width={64} height={64} iconType={iconType} />

        <Flex css={{ flexDirection: 'column', gap: 8 }}>
          <Span xs={{ ...theme.text.medium500 }}>{name}</Span>
          <Span xs={{ ...theme.text.normal200 }}>{description}</Span>
        </Flex>
      </Flex>
    </Box>
  );
};
