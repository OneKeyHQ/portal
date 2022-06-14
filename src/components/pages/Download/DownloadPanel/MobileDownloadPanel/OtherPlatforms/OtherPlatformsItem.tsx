import { FC, ReactNode, useState } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, Span } from '../../../../../base';

import { Toggle } from './Toggle';
import { OtherPlatformsDataItem } from './useOtherPlatformsData';

export interface OtherPlatformsItemProps extends OtherPlatformsDataItem {
  children?: ReactNode;
}

export const OtherPlatformsItem: FC<OtherPlatformsItemProps> = (props) => {
  const { subItems, icon: Icon, children, name, description } = props;
  const theme = useTheme();
  const hasSubItems = subItems && subItems.length > 0;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Flex xs={{ gap: 24, flexDirection: 'column' }}>
      <Flex xs={{ gap: 12, alignItems: 'center' }}>
        <Icon width={40} height={40} />
        <Flex xs={{ flexDirection: 'column' }}>
          <Span xs={theme.text.medium300}>{name}</Span>

          {description && (
            <Span
              css={{ color: theme.colors.test300 }}
              xs={theme.text.normal100}
            >
              {description}
            </Span>
          )}
        </Flex>

        {hasSubItems && (
          <Flex
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
            xs={{ flex: 1, justifyContent: 'flex-end' }}
          >
            <Box
              xs={{
                transition: theme.transitions.allEaseOut,
                transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
              }}
            >
              <Toggle />
            </Box>
          </Flex>
        )}
      </Flex>

      {isExpanded &&
        subItems?.map((item) => (
          <Box xs={{ paddingLeft: 60 }}>
            <OtherPlatformsItem {...item} />
          </Box>
        ))}

      {children}
    </Flex>
  );
};
