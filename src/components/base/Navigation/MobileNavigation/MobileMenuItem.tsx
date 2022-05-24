import { FC, useState } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Li, Ul } from '../../Box';
import { Flex } from '../../Flex';
import { MenuListArrowIcon } from '../../Icon';
import { Link } from '../../Link';
import { NavigationDataItem } from '../useNavigationData';

interface MobileMenuItemProps {
  menuItem: NavigationDataItem;
  level?: number;
}

export const MobileMenuItem: FC<MobileMenuItemProps> = (props) => {
  const { menuItem, level = 0 } = props;
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Li
      xs={{
        paddingLeft: 28,
        paddingRight: 28,
        ':active': {
          backgroundColor: theme.colors.gray600,
        },
        ':hover': {
          backgroundColor: theme.colors.gray400,
        },
      }}
      key={menuItem.name}
    >
      {!menuItem.subItems && (
        <Link to={menuItem.path}>
          <Flex
            xs={{
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              xs={{
                color: theme.colors.test500,
                paddingTop: 10,
                paddingBottom: 10,
                ...theme.text.normal300,
              }}
            >
              {menuItem.name}
            </Box>
          </Flex>
        </Link>
      )}

      {menuItem.subItems && (
        <Box>
          <Flex
            xs={{
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Box
              xs={{
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              {menuItem.name}
            </Box>

            <Box
              xs={{
                transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: theme.transitions.allCubicBezier,
              }}
            >
              <MenuListArrowIcon />
            </Box>
          </Flex>

          {isOpen && (
            <Ul
              xs={{
                listStyle: 'none',
                margin: 0,
              }}
            >
              {menuItem.subItems.map((item) => (
                <MobileMenuItem
                  level={level + 1}
                  key={item.name}
                  menuItem={item}
                />
              ))}
            </Ul>
          )}
        </Box>
      )}
    </Li>
  );
};
