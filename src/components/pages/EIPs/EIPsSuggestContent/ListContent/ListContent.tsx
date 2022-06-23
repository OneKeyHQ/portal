import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Divider } from '../../../../base';
import { useEIPs } from '../../useEIPs';
import { EIPContentItem } from '../EIPContentItem';

export interface ListContentProps {
  children?: ReactNode;
}

export const ListContent: FC<ListContentProps> = (props) => {
  const { children } = props;
  const EIPsData = useEIPs();
  const theme = useTheme();

  const borderStyle = `1px solid ${theme.colors.test200}`;

  return (
    <Box
      xs={{
        background: theme.colors.white,
        borderTop: borderStyle,
        borderBottom: borderStyle,

        paddingTop: 32,
        paddingBottom: 32,
      }}
    >
      {EIPsData.suggestList.map((item) => (
        <Box key={item.id}>
          <Box
            xs={{
              paddingLeft: 24,
              paddingRight: 24,
            }}
          >
            <EIPContentItem {...item} />
          </Box>

          <Box xs={{ paddingTop: 32, paddingBottom: 32 }}>
            <Divider color={theme.colors.test200} />
          </Box>
        </Box>
      ))}

      {children}
    </Box>
  );
};
