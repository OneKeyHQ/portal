import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, Span } from '../../../base';
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
                  <Box
                    xs={{
                      ...theme.text.medium400,
                      background: theme.colors.brandAlt300,
                      padding: '4px 10px',
                      borderRadius: 8,
                    }}
                  >
                    {item.id.toUpperCase().replace('-', ' ')}
                  </Box>
                  <Span xs={{ paddingLeft: 6, fontSize: 22 }}>🔥</Span>
                </Flex>
                <Box
                  xs={{
                    ...theme.text.medium200,
                    paddingTop: 4,
                    color: theme.colors.test300,
                  }}
                >
                  {item.title}
                </Box>
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

      {children}
    </Box>
  );
};
