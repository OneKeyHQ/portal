import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useHover } from '../../../../../hooks';
import { Box } from '../../../Box';
import { NavigationDataItem } from '../../useNavigationData';

import { HoverPanel } from './HoverPanel';

export interface NavigationItemProps extends NavigationDataItem {
  children?: ReactNode;
}

export const NavigationItem: FC<NavigationItemProps> = (props) => {
  const { children, name, subItems, path, ...otherProps } = props;
  const { hoverProps, isHovered } = useHover({
    timeout: 100,
  });
  const theme = useTheme();

  const contentNode = (
    <Box
      {...otherProps}
      {...hoverProps}
      xs={{
        ...theme.text.medium300,
        color: theme.background.test500,
        cursor: 'pointer',

        ':hover': {
          color: '#878888',
        },
      }}
    >
      {name}
    </Box>
  );

  return (
    <Box
      xs={{
        position: 'relative',
      }}
    >
      {!subItems && (
        <a href={path} target="_blank" rel="noreferrer">
          {contentNode}
        </a>
      )}
      {subItems && contentNode}

      {subItems && <HoverPanel isActive={isHovered} subItems={subItems} />}
    </Box>
  );
};
