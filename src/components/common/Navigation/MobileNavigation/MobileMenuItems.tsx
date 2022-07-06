import { FC } from 'react';

import { useI18next } from 'gatsby-plugin-react-i18next';

import { LanguageIconInline } from '../../../base';
import { Box, Ul } from '../../../base/Box';
import { languagesMap } from '../languages';
import { NavigationDataItem } from '../useNavigationData';

import { MobileMenuItem } from './MobileMenuItem';

interface MobileMenuItemsProps {
  mobileMenus: NavigationDataItem[];
}

export const MobileMenuItems: FC<MobileMenuItemsProps> = (props) => {
  const { mobileMenus } = props;
  const { languages, originalPath, language } = useI18next();
  const currentLanguage = languagesMap[language.toUpperCase()];

  const menuLanguageItem: NavigationDataItem = {
    name: currentLanguage || language,
    key: currentLanguage || language,
    icon: LanguageIconInline,
    subItems: languages.map((lng) => ({
      key: lng,
      name: languagesMap[lng.toUpperCase()] || lng,
      path: originalPath,
      language: lng,
    })),
  };

  return (
    <Box
      xs={{
        paddingBottom: 28,
      }}
    >
      <Ul
        xs={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {[...mobileMenus, menuLanguageItem].map((menuItem) => (
          <MobileMenuItem key={menuItem.name} menuItem={menuItem} />
        ))}
      </Ul>
    </Box>
  );
};
