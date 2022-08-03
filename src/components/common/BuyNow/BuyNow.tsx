import { FC, ReactNode, useState } from 'react';

import {
  Button,
  ButtonProps,
  I18n,
  Link,
  MenuItem,
  MenuItems,
} from '../../base';
import { Box } from '../../base/Box';

export interface BuyNowProps {
  buttonOverride?: ButtonProps;
  children?: ReactNode;
  shops: {
    name: string;
    url: string;
  }[];
}

export const BuyNow: FC<BuyNowProps> = (props) => {
  const { children, shops, buttonOverride } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box
      xs={{
        width: 'fit-content',
        position: 'relative',
      }}
    >
      <Button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        variant="filled"
        {...buttonOverride}
      >
        <Box xs={{ minWidth: 100 }}>
          {children || <I18n name="action__buy_now" />}
        </Box>
      </Button>

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
