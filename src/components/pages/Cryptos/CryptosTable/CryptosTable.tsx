import { FC, ReactNode, createElement } from 'react';

import { useTheme } from '@emotion/react';

import { ArrowRightIcon, Box, Flex, Link, Span } from '../../../base';

import { StatusIcon } from './StatusIcon';
import { useCryptosTable } from './useCryptosTable';

export interface CryptosTableProps {
  children?: ReactNode;
}

export const CryptosTable: FC<CryptosTableProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const cryptosTable = useCryptosTable();

  return (
    <Box>
      {children}

      <table
        css={{
          borderStyle: 'solid',
          borderColor: theme.colors.test200,
          borderRadius: 24,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 12,
          paddingBottom: 12,
          width: '100%',
          textAlign: 'left',
          borderSpacing: 0,
        }}
      >
        <thead>
          <tr
            css={{
              ...theme.text.medium200,

              height: 60,
              lineHeight: '60px',
              borderBottom: `1px solid ${theme.colors.test300}`,
            }}
          >
            <th>COINS</th>
            <th css={{ width: '20%' }}>APP</th>
            <th css={{ width: '20%' }}>Classic & Mini</th>
            <th css={{ width: '20%' }}>Touch & Pro</th>
            <th> </th>
          </tr>
        </thead>

        <tbody css={{ paddingBottom: 20 }}>
          {cryptosTable.items.map((item) => (
            <tr css={{ height: 80 }} key={item.coin.name}>
              <td>
                <Flex xs={{ alignItems: 'center' }}>
                  {createElement(item.coin.icon, {
                    width: 48,
                    height: 48,
                  })}

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
                <StatusIcon isSupported={item.support.classicAndMini} />
              </td>
              <td>
                <StatusIcon isSupported={item.support.touchAndPro} />
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
    </Box>
  );
};
