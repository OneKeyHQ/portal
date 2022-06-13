import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useHover } from '../../../../../hooks';
import { Box, Img } from '../../../Box';
import { Container } from '../../../Container';
import { NavigationDataItem } from '../../useNavigationData';
import { useNormalNavigationHeight } from '../useNormalNavigationHeight';

export interface ServicesPanelProps {
  children?: ReactNode;
  isActive: boolean;
  subItems: NavigationDataItem['subItems'];
}

export const ServicesPanel: FC<ServicesPanelProps> = (props) => {
  const { children, isActive, subItems } = props;
  const top = useNormalNavigationHeight();
  const theme = useTheme();
  const { hoverProps, isHovered } = useHover({ timeout: 100 });

  if (!isActive && !isHovered) return null;

  return (
    <Box
      xs={{
        position: 'fixed',
        left: 0,
        right: 0,
        top: top * 0.8,
      }}
      {...hoverProps}
    >
      <Container>
        <Box xs={{ width: '50%' }}>
          <Box
            xs={{
              padding: 8,
              borderRadius: 16,
              background: theme.colors.white,
              boxShadow: theme.shadow.hover,
            }}
          >
            {subItems?.map((item) => (
              <Box key={item.key}>
                <Img src={item.icon} alt={item.name} />
                <Box>{item.name}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {children}
    </Box>
  );
};
