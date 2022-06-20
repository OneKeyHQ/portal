import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { Menu } from '@headlessui/react';

import { useOneKeyVersion } from '../../../../data';
import { Box, ChevronDownIcon, Link, useButtonStyle } from '../../../base';

export interface BridgeDownloadMenuProps {
  children?: ReactNode;
}

export const BridgeDownloadMenu: FC<BridgeDownloadMenuProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  const { formattedData } = useOneKeyVersion();
  const { bridge } = formattedData;

  const options = [
    bridge.mac,
    bridge.win,
    bridge.linux32Deb,
    bridge.linux64Deb,
    bridge.linux32Rpm,
    bridge.linux64Rpm,
  ];

  const buttonStyle = useButtonStyle({
    variant: 'outlined',
  });

  return (
    <Menu>
      <Menu.Button<'button'> css={buttonStyle}>
        Download <ChevronDownIcon width={24} height={24} />
      </Menu.Button>

      <Menu.Items<'div'>
        css={{
          transition: theme.transitions.allEaseOut,
          padding: 6,
          borderRadius: 12,
          boxShadow: theme.shadow.hover,
          position: 'absolute',
          backgroundColor: theme.colors.white,
          zIndex: 10,
          marginTop: 8,
        }}
      >
        <Box
          xs={{
            paddingBottom: 6,
            textAlign: 'center',
            color: theme.colors.test300,
            ...theme.text.normal100,
          }}
        >
          {bridge.version}
        </Box>

        {options.map((option) => (
          <Menu.Item<'div'> key={option.url}>
            <div>
              <Link to={option.url}>
                <Box
                  xs={{
                    ...theme.text.medium300,
                    transition: theme.transitions.allEaseOut,
                    padding: '12px 22px',
                    borderRadius: 12,
                    textAlign: 'center',
                    wordBreak: 'keep-all',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    color: theme.colors.test500,
                    ':hover': {
                      backgroundColor: theme.colors.test100,
                    },
                  }}
                >
                  {option.name}
                </Box>
              </Link>
            </div>
          </Menu.Item>
        ))}
      </Menu.Items>

      {children}
    </Menu>
  );
};
