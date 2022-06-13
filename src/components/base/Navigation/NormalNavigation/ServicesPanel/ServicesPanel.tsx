import { FC, ReactNode } from 'react';

import { Box } from '../../../Box';
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

  if (!isActive) return null;

  return (
    <Box
      xs={{
        position: 'fixed',
        left: 0,
        right: 0,
        top,
      }}
    >
      <Container>
        {subItems?.map((item) => (
          <Box key={item.key}>{item.name}</Box>
        ))}
      </Container>

      {children}
    </Box>
  );
};
