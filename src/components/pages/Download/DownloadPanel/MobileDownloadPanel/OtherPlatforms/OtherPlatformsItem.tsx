import { FC, ReactNode, useState } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, Link, Span } from '../../../../../base';

import { Toggle } from './Toggle';
import { OtherPlatformsDataItem } from './useOtherPlatformsData';

export interface OtherPlatformsItemProps extends OtherPlatformsDataItem {
  children?: ReactNode;
}

export const OtherPlatformsItem: FC<OtherPlatformsItemProps> = (props) => {
  const { subItems, icon: Icon, children, name, description, url = '' } = props;
  const theme = useTheme();
  const hasSubItems = subItems && subItems.length > 0;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Flex xs={{ flexDirection: 'column' }}>
      <Link to={url} disabled={!url}>
        <Flex
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
          xs={{
            gap: 12,
            alignItems: 'center',
            color: theme.colors.test500,
            ':hover': {
              opacity: 0.6,
            },
          }}
        >
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
            <Flex xs={{ flex: 1, justifyContent: 'flex-end' }}>
              <Toggle isExpanded={isExpanded} />
            </Flex>
          )}
        </Flex>
      </Link>

      <Flex
        xs={{
          flexDirection: 'column',
          maxHeight: isExpanded ? 666 : 0,
          overflow: 'hidden',
          transition: theme.transitions.allEaseOut,
        }}
      >
        {subItems?.map((item) => (
          <Box key={item.name} xs={{ paddingLeft: 60, paddingTop: 24 }}>
            <OtherPlatformsItem {...item} />
          </Box>
        ))}
      </Flex>

      {children}
    </Flex>
  );
};
