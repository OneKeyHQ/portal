import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { DownloadTypes } from '../../../../../data/useDownloadData';
import { Box, Flex, Span } from '../../../../base';
import { PlatformIcon } from '../../../../common';

export interface TabItemProps {
  iconType: DownloadTypes;
  name?: string;
  description?: string;
}

export const TabItem: FC<TabItemProps> = (props) => {
  const { description, iconType, name } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        position: 'relative',
        transition: theme.transitions.allEaseOut,
        opacity: 0.6,
        cursor: 'pointer',
        ':hover': {
          opacity: 1,
        },
      }}
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
