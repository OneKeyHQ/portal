import { FC } from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Span } from '../../base/Box';

export const Copyright: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Span xs={{ ...theme.text.normal100, color: '#ffffff99' }}>
      {t('app__copyright')}
    </Span>
  );
};
