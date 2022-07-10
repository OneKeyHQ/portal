import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, Span } from '../../../../base';

export type FeatureSectionDataItem = {
  imageNode: ReactNode;
  name: string;
  description: string;
};

export interface FeatureItemProps extends FeatureSectionDataItem {
  children?: ReactNode;
}

export const FeatureItem: FC<FeatureItemProps> = (props) => {
  const { children, imageNode, name, description } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box xs={{ width: 128, height: 128 }} m={{ width: 200, height: 200 }}>
        {imageNode}
      </Box>

      <Box xs={{ paddingTop: 4 }} m={{ paddingTop: 48 }}>
        <Span
          css={{ textTransform: 'capitalize' }}
          xs={theme.text.medium400}
          s={theme.text.medium500}
          m={theme.text.medium700}
          l={theme.text.medium800}
        >
          {name}
        </Span>
      </Box>

      <Box xs={{ paddingTop: 4 }} m={{ paddingTop: 16 }}>
        <Span xs={theme.text.normal300}>{description}</Span>
      </Box>
      {children}
    </Flex>
  );
};
