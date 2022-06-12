import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Button, Flex, Link, P, Span } from '../../../base';

import { FeatureSectionDataItem } from './useFeatureSectionData';

export interface TextBlockProps extends FeatureSectionDataItem {
  children?: ReactNode;
}

export const TextBlock: FC<TextBlockProps> = (props) => {
  const { children, name, description, button } = props;
  const theme = useTheme();

  return (
    <Flex xs={{ gap: 16, flexDirection: 'column' }}>
      <Span
        xs={theme.text.medium600}
        l={theme.text.medium700}
        xl={theme.text.medium800}
      >
        {name}
      </Span>

      {description.map((item) => (
        <P xs={theme.text.normal200} l={theme.text.normal300} key={item}>
          {item}
        </P>
      ))}

      {button && (
        <Box xs={{ width: 'fit-content' }}>
          <Link to={button.link}>
            <Button themeColor="dark" variant={button.variant}>
              {button.text}
            </Button>
          </Link>
        </Box>
      )}

      {children}
    </Flex>
  );
};
