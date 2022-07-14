import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { useHover } from '../../../../../hooks';
import { Box, Flex, LanguageIcon } from '../../../../base';
import { languagesMap } from '../../languages';
import { LanguagesPanel } from '../LanguagesPanel';

export interface LanguageSwitchButtonProps {
  children?: ReactNode;
}

export const LanguageSwitchButton: FC<LanguageSwitchButtonProps> = (props) => {
  const { children } = props;
  const i18n = useI18next();
  const theme = useTheme();
  const { hoverProps, isHovered } = useHover({ timeout: 100 });

  return (
    <Box css={{ position: 'relative', color: theme.colors.test500 }}>
      <Flex
        {...hoverProps}
        xs={{
          gap: 8,
          alignItems: 'center',
          cursor: 'pointer',
          ':hover': {
            opacity: 0.6,
          },
        }}
      >
        <LanguageIcon width={24} height={24} />
        <Box xs={theme.text.medium300}>
          {languagesMap[i18n.language.toUpperCase()]}
        </Box>
      </Flex>

      <LanguagesPanel isActive={isHovered} />

      {children}
    </Box>
  );
};
