import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { DownloadTypes } from '../../../../../data/useDownloadData';
import { Box, BoxProps, Flex, Span } from '../../../../base';
import { PlatformIcon } from '../../../../common';

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
        position: 'relative',
        transition: theme.transitions.allEaseOut,
        opacity: active ? 1 : 0.6,
        cursor: 'pointer',
        ':hover': {
          opacity: 1,
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
