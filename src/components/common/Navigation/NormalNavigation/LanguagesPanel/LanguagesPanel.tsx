import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { useHover } from '../../../../../hooks';
import { Link } from '../../../../base';
import { Box } from '../../../../base/Box';
import { Container } from '../../../../base/Container';
import { Flex } from '../../../../base/Flex';
import { languagesMap } from '../../languages';

import { LanguagesPanelItem } from './LanguagesPanelItem';

export interface LanguagesPanelProps {
  children?: ReactNode;
  isActive: boolean;
}

export const LanguagesPanel: FC<LanguagesPanelProps> = (props) => {
  const { children, isActive } = props;
  const theme = useTheme();
  const { hoverProps, isHovered } = useHover({ timeout: 100 });
  const { languages, originalPath } = useI18next();

  if (!isActive && !isHovered) return null;

  return (
    <Box
      {...hoverProps}
      xs={{
        position: 'absolute',
        right: 0,
        paddingTop: 16,
      }}
    >
      <Container>
        <Box
          xs={{
            padding: 8,
            borderRadius: 16,
            background: theme.colors.white,
            boxShadow: theme.shadow.hover,
          }}
        >
          <Flex xs={{ width: 460, flexWrap: 'wrap' }}>
            {languages.map((lng) => (
              <Box key={lng} xs={{ width: '33.3%' }}>
                <Link to={originalPath} language={lng}>
                  <LanguagesPanelItem>
                    {languagesMap[lng.toUpperCase()]}
                  </LanguagesPanelItem>
                </Link>
              </Box>
            ))}
          </Flex>
        </Box>
      </Container>

      {children}
    </Box>
  );
};
