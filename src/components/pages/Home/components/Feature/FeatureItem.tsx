import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Span } from '../../../../base';

export interface FeatureItemProps {
  imageNode: ReactNode;
  title: string;
  description: string;
}

export const FeatureItem: FC<FeatureItemProps> = (props) => {
  const { imageNode, title, description } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        maxWidth: 754,
      }}
    >
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          textAlign: 'center',
          maxWidth: 581,
          margin: '0 auto',
        }}
      >
        <Span
          xs={{ color: '#101111', ...theme.text.medium600 }}
          m={{ ...theme.text.medium700 }}
          l={{ ...theme.text.medium800 }}
          xl={{ ...theme.text.medium900 }}
        >
          {title}
        </Span>
        <Span
          xs={{ color: '#101111', ...theme.text.normal200 }}
          m={{ ...theme.text.normal300 }}
          l={{ ...theme.text.normal400 }}
          xl={{ ...theme.text.normal500 }}
        >
          {description}
        </Span>
      </Box>

      {imageNode}
    </Box>
  );
};
