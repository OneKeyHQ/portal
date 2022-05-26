import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Span } from '../Box';

import { usePageFooterData } from './usePageFooterData';

export const MenuList: FC = () => {
  const theme = useTheme();
  const { menuData } = usePageFooterData();

  return (
    <Box
      xs={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {/* level1 */}
      {menuData.map((item) => (
        <Box
          key={item.name}
          xs={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            paddingBottom: 50,
          }}
          s={{
            width: '50%',
            paddingBottom: 80,
          }}
          l={{
            width: 'fit-content',
            ':last-child': {
              paddingRight: 0,
            },
          }}
        >
          <Span
            css={{
              ...theme.text.medium200,
              color: theme.colors.white,
              opacity: 0.6,
            }}
          >
            {item.name}
          </Span>
          <Box
            xs={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
            s={{
              gap: 16,
            }}
          >
            {/* level2 */}
            {item.list.map((childItem) => (
              <a
                href={childItem.link}
                key={childItem.name}
                css={{
                  ...theme.text.normal200,
                  color: theme.colors.white,
                  cursor:
                    childItem.status === 'disabled' ? 'not-allowed' : 'pointer',
                  ':first-letter': {
                    textTransform: 'uppercase',
                  },
                }}
              >
                {childItem.name}
              </a>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
