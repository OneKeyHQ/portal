import { FC, ReactNode, useState } from 'react';

import {
  Box,
  ChevronDownIcon,
  Flex,
  Link,
  MenuItem,
  MenuItems,
} from '../../../../../base';

export interface OtherStoresSelectProps {
  children?: ReactNode;
  shops: {
    name: string;
    key: string;
    path: string;
  }[];
}

export const OtherStoresSelect: FC<OtherStoresSelectProps> = (props) => {
  const { children, shops } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box
      xs={{
        width: 'fit-content',
        position: 'relative',
      }}
    >
      <Flex
        xs={{
          cursor: 'pointer',
          ':hover': {
            opacity: 0.6,
          },
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Other Stores <ChevronDownIcon width={24} height={24} />
      </Flex>

      {children}

      <MenuItems
        onClickOutside={() => setIsMenuOpen(false)}
        isActive={isMenuOpen}
      >
        {shops.map((item) => (
          <Link to={item.path} key={item.key}>
            <MenuItem>
              <Box xs={{ paddingLeft: 0, paddingRight: 0 }}>{item.name}</Box>
            </MenuItem>
          </Link>
        ))}
      </MenuItems>
    </Box>
  );
};
