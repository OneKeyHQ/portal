import { FC, ReactNode, useState } from 'react';

import { useTheme } from '@emotion/react';

import {
  Box,
  ChevronDownIcon,
  Flex,
  MenuItem,
  MenuItems,
} from '../../../../../base';
import { useBuy } from '../../../hooks/useBuy';

export interface AmountSelectProps {
  children?: ReactNode;
  shopProductId: string;
  menuPosition?: 'top' | 'bottom';
}

export const AmountSelect: FC<AmountSelectProps> = (props) => {
  const { children, shopProductId, menuPosition } = props;
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentProductAmount, setCurrentProductAmount, items } = useBuy({
    shopProductId,
  });

  return (
    <Box xs={{ position: 'relative' }}>
      <Box
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        css={{
          cursor: 'pointer',
          color: theme.colors.test500,
          border: '1px solid rgba(16, 17, 17, 0.12)',
          borderRadius: 50,
          padding: '8px 12px',
          ':hover': {
            borderColor: theme.colors.test500,
          },
        }}
        xs={theme.text.normal200}
      >
        <Flex
          xs={{
            gap: 4,
            alignItems: 'center',
          }}
        >
          x{currentProductAmount}
          <ChevronDownIcon height={16} width={16} />
          {children}
        </Flex>
      </Box>

      <MenuItems
        css={menuPosition === 'bottom' ? { bottom: '110%' } : { top: '110%' }}
        onClickOutside={() => setIsMenuOpen(false)}
        isActive={isMenuOpen}
      >
        {items.map((item) => (
          <MenuItem
            onClick={() => {
              setIsMenuOpen(false);
              setCurrentProductAmount(item);
            }}
            key={item}
          >
            <Box xs={{ paddingLeft: 16, paddingRight: 16 }}>x{item}</Box>
          </MenuItem>
        ))}
      </MenuItems>
    </Box>
  );
};
