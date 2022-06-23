import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Divider, Flex } from '../../../../base';
import { useEIPs } from '../../useEIPs';
import { EIPContentItem } from '../EIPContentItem';
import { SeeMore } from '../SeeMore';

import { SuggestStatus } from './SuggestStatus';

export interface TableContentProps {
  children?: ReactNode;
}

export const TableContent: FC<TableContentProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const EIPsData = useEIPs();

  const borderStyle = `1px solid ${theme.colors.test200}`;

  return (
    <Box
      xs={{
        background: theme.colors.white,
        borderTop: borderStyle,
        borderBottom: borderStyle,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 12,
        textAlign: 'left',
      }}
      m={{
        borderLeft: borderStyle,
        borderRight: borderStyle,
        borderRadius: 24,
      }}
    >
      <table
        css={{
          width: '100%',
          borderSpacing: 0,
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr
            css={{
              ...theme.text.medium300,
              height: 76,
              lineHeight: '76px',
              position: 'relative',
              borderBottom: borderStyle,
            }}
          >
            <th css={{ width: '50%' }}>{EIPsData.thead.EIPs}</th>
            <th css={{ width: '25%' }}>{EIPsData.thead.mobileApp}</th>
            <th css={{ width: '25%' }}>{EIPsData.thead.hardwareWallet}</th>
          </tr>
        </thead>

        <tbody
          css={{
            ':before': {
              content: '""',
              display: 'block',
              height: '12px',
            },
          }}
        >
          {EIPsData.suggestList.map((item) => (
            <tr css={{ height: 80 }} key={item.id}>
              <td>
                <EIPContentItem {...item} />
              </td>
              <td>
                <SuggestStatus isSupported={item.supports.mobileApp} />
              </td>
              <td>
                <SuggestStatus isSupported={item.supports.hardwareWallet} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Box
        xs={{
          paddingTop: 12,
          paddingBottom: 12,
        }}
      >
        <Divider color={theme.colors.test200} />
      </Box>

      <Flex
        xs={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SeeMore />
      </Flex>

      {children}
    </Box>
  );
};
