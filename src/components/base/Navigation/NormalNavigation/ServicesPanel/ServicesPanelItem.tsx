import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, H2, Img, Span } from '../../../Box';
import { Flex } from '../../../Flex';
import { Link } from '../../../Link';
import { NavigationDataItem } from '../../useNavigationData';

export interface ServicesPanelItemProps extends NavigationDataItem {
  children?: ReactNode;
}

export const ServicesPanelItem: FC<ServicesPanelItemProps> = (props) => {
  const { children, icon, name, description, path = '' } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        padding: 20,
        borderRadius: 8,
        cursor: 'pointer',
        transition: theme.transitions.allEaseInOut,
        ':hover': {
          background: theme.colors.test100,
        },
      }}
    >
      <Link to={path}>
        <Flex xs={{ gap: 20, color: theme.colors.test500 }}>
          <Flex
            xs={{
              flex: '0 0 64px',
              width: 64,
              height: 64,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Img xs={{ width: 32, height: 32 }} src={icon} alt={name} />
          </Flex>

          <Box>
            <H2 xs={theme.text.medium400}>{name}</H2>
            <Span xs={theme.text.normal300}>{description}</Span>
          </Box>
        </Flex>
      </Link>
      {children}
    </Box>
  );
};
