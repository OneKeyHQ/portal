import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, I18n, Span } from '../../../../base';
import { DownloadButton } from '../../../../common/DownloadButton';

export interface HeaderProps {
  children?: ReactNode;
}

export const FeatureHeader: FC<HeaderProps> = () => {
  const theme = useTheme();
  const { text: textStyle } = theme;

  return (
    <Box
      xs={{
        position: 'relative',
        margin: '0 auto',
        maxWidth: 520,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        textAlign: 'center',
      }}
    >
      <Span
        xs={{ ...textStyle.medium800, color: '#101111' }}
        m={{ ...textStyle.medium900 }}
        l={{ ...textStyle.medium1000 }}
      >
        <I18n name="title__supercharge_great_web3_products" />
      </Span>
      <Span
        xs={{ ...textStyle.normal200, color: theme.colors.test400 }}
        m={{ ...textStyle.normal300 }}
        l={{ ...textStyle.normal400 }}
        xl={{ ...textStyle.normal500 }}
      >
        <I18n name="title__supercharge_great_web3_products_desc" />
      </Span>

      <Box>
        <DownloadButton />
      </Box>
    </Box>
  );
};
