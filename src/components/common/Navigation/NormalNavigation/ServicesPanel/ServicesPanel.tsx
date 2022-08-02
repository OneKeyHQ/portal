import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useHover } from '../../../../../hooks';
import { Box } from '../../../../base/Box';
import { Container } from '../../../../base/Container';
import { Flex } from '../../../../base/Flex';
import { useCurrentActiveMenuItem } from '../atom';
import { PanelComponentProps } from '../NavigationItem';
import { useNormalNavigationHeight } from '../useNormalNavigationHeight';

import { ServicesPanelItem } from './ServicesPanelItem';

export interface ServicesPanelProps extends PanelComponentProps {
  children?: ReactNode;
}

export const ServicesPanel: FC<ServicesPanelProps> = (props) => {
  const { children, isActive, subItems } = props;
  const top = useNormalNavigationHeight();
  const theme = useTheme();
  const [currentActiveMenuItem, setCurrentActiveMenuItem] =
    useCurrentActiveMenuItem();

  const { hoverProps, isHovered } = useHover({
    timeout: 100,
    onHoverEnd: () => {
      setCurrentActiveMenuItem('');
    },
  });

  if (!isActive && !isHovered && currentActiveMenuItem !== 'services') {
    return null;
  }

  return (
    <Box
      xs={{
        position: 'fixed',
        left: 0,
        right: 0,
        top: top * 0.8,
        zIndex: 3000,
      }}
    >
      <Container>
        <Box xs={{ width: 820 }} {...hoverProps}>
          <Box
            xs={{
              padding: 8,
              borderRadius: 16,
              background: theme.colors.white,
              boxShadow: theme.shadow.hover,
            }}
          >
            <Flex xs={{ flexWrap: 'wrap' }}>
              {subItems
                // todo: add eips link
                ?.filter((item) => item.key !== 'eips')
                .map((item) => (
                  <Box key={item.key} xs={{ width: '50%' }}>
                    <ServicesPanelItem {...item} />
                  </Box>
                ))}
            </Flex>
          </Box>
        </Box>
      </Container>

      {children}
    </Box>
  );
};
