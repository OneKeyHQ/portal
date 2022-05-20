import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useHover } from '../../../../../../hooks';
import { Box } from '../../../../Box';
import { Flex } from '../../../../Flex';
import { NavigationDataItem } from '../../../useNavigationData';

export interface HoverPanelProps {
  children?: ReactNode;
  subItems: NavigationDataItem['subItems'];
  isActive: boolean;
}

export const HoverPanel: FC<HoverPanelProps> = (props) => {
  const { children, isActive = false, subItems } = props;
  const { hoverProps, isHovered } = useHover({
    timeout: 50,
  });
  const theme = useTheme();

  return (
    <Box
      {...hoverProps}
      xs={{
        display: isActive || isHovered ? 'block' : 'none',
        transition: theme.transitions.allEaseOut,
        padding: 6,
        borderRadius: 12,
        boxShadow:
          '0px 0px 1px rgba(0, 0, 0, 0.08), 0px 8px 12px rgba(0, 0, 0, 0.08)',
        position: 'absolute',
        top: '200%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        backgroundColor: theme.colors.white,
      }}
    >
      <Flex
        xs={{
          flexDirection: 'column',
          gap: 8,
        }}
      >
        {subItems?.map((item) => (
          <Box
            key={item.name}
            xs={{
              ...theme.text.medium300,
              transition: theme.transitions.allEaseOut,
              padding: '12px 22px',
              borderRadius: 12,
              textAlign: 'center',
              wordBreak: 'keep-all',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              ':hover': {
                backgroundColor: '#f0f1f2',
              },
            }}
          >
            {item.name}
          </Box>
        ))}
        {children}
      </Flex>
    </Box>
  );
};
