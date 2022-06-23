import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex } from '../../../base';
import { useEIPs } from '../useEIPs';

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
              ...theme.text.medium200,
              height: 76,
              lineHeight: '76px',
              position: 'relative',
              borderBottom: borderStyle,
            }}
          >
            <th>{EIPsData.thead.EIPs}</th>
            <th>{EIPsData.thead.mobileApp}</th>
            <th>{EIPsData.thead.hardwareWallet}</th>
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
          {EIPsData.items.map((item) => (
            <tr css={{ height: 80 }} key={item.id}>
              <td>
                <Flex xs={{ alignItems: 'center' }}>
                  <Box xs={theme.text.medium400}>{item.title}</Box>
                </Flex>
              </td>
              <td>
                <SuggestStatus isSupported={false} />
              </td>
              <td>
                <SuggestStatus isSupported />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {children}
    </Box>
  );
};
