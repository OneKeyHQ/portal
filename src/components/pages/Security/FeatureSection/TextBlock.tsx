import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Button, Flex, P, Span } from '../../../base';

import { FeatureSectionDataItem } from './useFeatureSectionData';

export interface TextBlockProps extends FeatureSectionDataItem {
  children?: ReactNode;
}

export const TextBlock: FC<TextBlockProps> = (props) => {
  const { children, name, description, button } = props;
  const theme = useTheme();

  return (
    <Flex xs={{ gap: 16, flexDirection: 'column' }}>
      <Span xs={theme.text.medium600}>{name}</Span>

      {description.map((item) => (
        <P xs={theme.text.normal200} key={item}>
          {item}
        </P>
      ))}

      {button && (
        <Box>
          <Button themeColor="dark" variant={button.variant}>
            {button.text}
          </Button>
        </Box>
      )}

      {children}
    </Flex>
  );
};
