import { FC, ReactNode, useState } from 'react';

import { useTheme } from '@emotion/react';

import {
  Box,
  ChevronDownIcon,
  Flex,
  I18n,
  Link,
  MenuItem,
  MenuItems,
} from '../../../../../base';

export interface OtherStoresSelectProps {
  children?: ReactNode;
  shops: {
    name: string;
    url: string;
  }[];
}

export const OtherStoresSelect: FC<OtherStoresSelectProps> = (props) => {
  const { children, shops } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();

  return (
    <Box
      xs={{
        width: 'fit-content',
        position: 'relative',
      }}
    >
      <Flex
        xs={{
          ...theme.text.medium300,
          color: theme.colors.test500,
          alignItems: 'center',
          cursor: 'pointer',
          ':hover': {
            opacity: 0.6,
          },
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <I18n name="action__other_stores" />{' '}
        <ChevronDownIcon width={24} height={24} />
      </Flex>

      {children}

      <MenuItems
        onClickOutside={() => setIsMenuOpen(false)}
        isActive={isMenuOpen}
      >
        {shops.map((item) => (
          <Link to={item.url} key={item.name}>
            <MenuItem>
              <Box xs={{ paddingLeft: 0, paddingRight: 0 }}>{item.name}</Box>
            </MenuItem>
          </Link>
        ))}
      </MenuItems>
    </Box>
  );
};
