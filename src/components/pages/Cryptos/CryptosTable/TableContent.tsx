import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { staticAssetPrefix } from '../../../../utils/staticAssetPrefix';
import { ArrowRightIcon, Box, Flex, Img, Link, Span } from '../../../base';

import { StatusIcon } from './StatusIcon';
import { useCryptosTable } from './useCryptosTable';

export interface TableContentProps {
  children?: ReactNode;
}

export const TableContent: FC<TableContentProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const cryptosTable = useCryptosTable();

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
            <th>{cryptosTable.thead.coins}</th>
            <th css={{ width: '20%' }}>{cryptosTable.thead.app}</th>
            <th css={{ width: '20%' }}>{cryptosTable.thead.classicAndMini}</th>
            <th css={{ width: '20%' }}>{cryptosTable.thead.touchAndPro}</th>
            <th> </th>
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
          {cryptosTable.items.map((item) => (
            <tr css={{ height: 80 }} key={item.coin.name}>
              <td>
                <Flex xs={{ alignItems: 'center' }}>
                  <Img
                    xs={{ width: 48, height: 48 }}
                    src={staticAssetPrefix(
                      `/cryptocurrency-icons/128/color/${item.coin.symbol.toLowerCase()}.png`,
                    )}
                  />

                  <Box xs={{ paddingLeft: 12 }}>
                    <Box xs={theme.text.medium400}>{item.coin.symbol}</Box>
                    <Box
                      xs={{
                        ...theme.text.medium100,
                        color: theme.colors.test300,
                      }}
                    >
                      {item.coin.name}
                    </Box>
                  </Box>
                </Flex>
              </td>
              <td>
                <StatusIcon isSupported={item.support.app} />
              </td>
              <td>
                <StatusIcon
                  isSupported={item.support.classic && item.support.mini}
                />
              </td>
              <td>
                <StatusIcon
                  isSupported={item.support.touch && item.support.pro}
                />
              </td>
              <td css={{ textAlign: 'right' }}>
                <Link to={item.link}>
                  <Flex
                    xs={{
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      color: theme.colors.brandAlt400,
                      ...theme.text.medium300,
                    }}
                  >
                    <Span>Link</Span>
                    <ArrowRightIcon
                      color={theme.colors.brandAlt400}
                      width={24}
                      height={24}
                    />
                  </Flex>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {children}
    </Box>
  );
};
